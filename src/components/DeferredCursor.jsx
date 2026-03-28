import React, { lazy, Suspense, useEffect, useState } from 'react';

const CustomCursor = lazy(() => import('./CustomCursor'));

/**
 * Load custom cursor after first idle frame to reduce main-thread work on first paint.
 *
 * Args:
 *   None.
 *
 * Returns:
 *   React element or null.
 *
 * Raises:
 *   None.
 */
function DeferredCursor() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const win = typeof window !== 'undefined' ? window : undefined;
    if (!win) {
      return undefined;
    }
    const ric = win.requestIdleCallback;
    const cancel = win.cancelIdleCallback;
    if (typeof ric === 'function') {
      const id = ric(() => setReady(true), { timeout: 1200 });
      return () => cancel(id);
    }
    const t = win.setTimeout(() => setReady(true), 320);
    return () => win.clearTimeout(t);
  }, []);

  if (!ready) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <CustomCursor />
    </Suspense>
  );
}

export default DeferredCursor;
