'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import * as gtag from '../lib/gtag';

const Analytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      const url = `${pathname}${searchParams ? `?${searchParams}` : ''}`;
      gtag.pageview(url);
    }
  }, [pathname, searchParams]);

  return null;
};

export default Analytics;
