/**
 * Fire-and-forget dynamic imports so Vite prefetches chunks (e.g. navbar hover)
 * before scroll lands on an anchor.
 *
 * Args:
 *   None.
 *
 * Returns:
 *   Object of prefetch functions.
 *
 * Raises:
 *   None.
 */
export const prefetchSkills = () => import('./components/Skills');
export const prefetchTimeline = () => import('./components/Timeline');
export const prefetchHonors = () => import('./components/Honors');
export const prefetchProjects = () => import('./components/Projects');
export const prefetchFooter = () => import('./components/Footer');
