'use client';

import { useEffect, useRef } from "react";
import { push, trackAppRouter } from '@socialgouv/matomo-next';
import { usePathname, useSearchParams } from "next/navigation";

const MATOMO_URL = 'https://mtm.codablock.de/';
const MATOMO_SITE_ID = '3';

export function MatomoAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    trackAppRouter({
      url: MATOMO_URL,
      siteId: MATOMO_SITE_ID,
      jsTrackerFile: 'klutomo.js',
      phpTrackerFile: 'klutomo.php',
      pathname,
      searchParams, // Pass URLSearchParams object directly
      // Optional: Enable additional features
      //enableHeatmapSessionRecording: true,
      enableHeartBeatTimer: true,
    });
  }, [pathname, searchParams]);

  return null
}
