"use client";

import { importLibrary, setOptions } from "@googlemaps/js-api-loader";
import { ExternalLink, LoaderCircle, Plane, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import type { Dictionary, Locale } from "@/i18n/dictionaries";

const SERVICE_AREA_CENTER = { lat: 51.61175, lng: 8.33631 };
const SERVICE_AREA_RADIUS_METERS = 100_000;

const mapStyles: google.maps.MapTypeStyle[] = [
  {
    elementType: "geometry",
    stylers: [{ color: "#e8ece9" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#41515a" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#f4f1ea" }],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{ color: "#aab8bb" }],
  },
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#d1d9d7" }],
  },
  {
    featureType: "transit",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#b9ced3" }],
  },
];

let mapsConfigured = false;
let mapsLibraryPromise: Promise<google.maps.MapsLibrary> | undefined;

function loadMapsLibrary(apiKey: string, locale: Locale) {
  if (!mapsConfigured) {
    setOptions({
      key: apiKey,
      v: "weekly",
      language: locale,
      region: "DE",
      authReferrerPolicy: "origin",
    });
    mapsConfigured = true;
  }

  mapsLibraryPromise ??= importLibrary("maps").catch((error: unknown) => {
    mapsLibraryPromise = undefined;
    throw error;
  });

  return mapsLibraryPromise;
}

type GoogleServiceMapProps = {
  copy: Dictionary["serviceArea"]["map"];
  locale: Locale;
};

export function GoogleServiceMap({ copy, locale }: GoogleServiceMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const radiusCircleRef = useRef<google.maps.Circle | null>(null);
  const centerCircleRef = useRef<google.maps.Circle | null>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "ready" | "missing-key" | "error"
  >("idle");

  useEffect(() => {
    return () => {
      radiusCircleRef.current?.setMap(null);
      centerCircleRef.current?.setMap(null);
    };
  }, []);

  async function handleLoadMap() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      setStatus("missing-key");
      return;
    }

    setStatus("loading");

    try {
      const { Circle, Map } = await loadMapsLibrary(apiKey, locale);

      if (!mapContainerRef.current) {
        return;
      }

      const map = new Map(mapContainerRef.current, {
        center: SERVICE_AREA_CENTER,
        zoom: 7,
        styles: mapStyles,
        backgroundColor: "#b9ced3",
        disableDefaultUI: true,
        zoomControl: true,
        gestureHandling: "cooperative",
        clickableIcons: false,
      });

      const radiusCircle = new Circle({
        map,
        center: SERVICE_AREA_CENTER,
        radius: SERVICE_AREA_RADIUS_METERS,
        strokeColor: "#b66d32",
        strokeOpacity: 0.9,
        strokeWeight: 2,
        fillColor: "#c98d57",
        fillOpacity: 0.16,
      });

      const centerCircle = new Circle({
        map,
        center: SERVICE_AREA_CENTER,
        radius: 3_000,
        strokeColor: "#ffffff",
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: "#0a2738",
        fillOpacity: 1,
      });

      radiusCircleRef.current = radiusCircle;
      centerCircleRef.current = centerCircle;

      const bounds = radiusCircle.getBounds();
      if (bounds) {
        map.fitBounds(bounds, 44);
      }

      setStatus("ready");
    } catch {
      setStatus("error");
    }
  }

  const message =
    status === "missing-key"
      ? copy.missingKey
      : status === "error"
        ? copy.error
        : null;

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden rounded-xl border border-primary/10 bg-[#b9ced3]"
      aria-label={copy.ariaLabel}
    >
      <div ref={mapContainerRef} className="absolute inset-0" />

      {status !== "ready" && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.78)_0_2px,transparent_3px)] bg-[size:28px_28px] opacity-45" />
          <div className="absolute left-1/2 top-[38%] size-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/35" />
          <div className="absolute left-1/2 top-[38%] size-[36%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/18" />
          <div className="absolute left-1/2 top-[38%] grid size-18 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-white shadow-2xl sm:size-20">
            <Plane
              className="size-7 -rotate-12 sm:size-8"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>

          <div className="absolute inset-x-4 bottom-4 rounded-lg bg-[#0a1b25]/94 p-4 text-white shadow-2xl backdrop-blur sm:inset-x-6 sm:bottom-6 sm:p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck
                className="mt-0.5 size-5 shrink-0 text-accent"
                aria-hidden="true"
              />
              <div className="min-w-0">
                <h3 className="text-sm font-semibold">{copy.consentTitle}</h3>
                <p className="mt-1 text-xs leading-5 text-white/70">
                  {copy.consentDescription}{" "}
                  <Link
                    href={`/${locale}/datenschutz`}
                    className="text-white underline decoration-white/35 underline-offset-2 transition-colors hover:decoration-white"
                  >
                    {copy.privacyLink}
                  </Link>
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <Button
                    type="button"
                    size="sm"
                    onClick={handleLoadMap}
                    disabled={status === "loading"}
                  >
                    {status === "loading" && (
                      <LoaderCircle
                        className="size-4 animate-spin"
                        aria-hidden="true"
                      />
                    )}
                    {status === "loading" ? copy.loading : copy.loadButton}
                  </Button>
                  {message && (
                    <span
                      className="max-w-sm text-xs leading-5 text-[#f4caa7]"
                      role="status"
                    >
                      {message}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {status === "ready" && (
        <>
          <span className="absolute bottom-4 left-4 rounded-md bg-white/90 px-3 py-2 font-mono text-xs text-primary shadow-sm backdrop-blur">
            59597 / NRW
          </span>
          <a
            href="https://www.google.com/maps/search/?api=1&query=51.61175%2C8.33631"
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-md bg-white/90 px-3 py-2 text-xs font-medium text-primary shadow-sm backdrop-blur transition-colors hover:bg-white"
          >
            {copy.openExternal}
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
        </>
      )}
    </div>
  );
}
