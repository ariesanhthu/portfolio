import React, { useEffect, useRef, useState } from 'react';

/**
 * Mount children only after the wrapper intersects the viewport (scroll-driven).
 * Keeps id on the wrapper so anchor / react-scroll works even before children load.
 *
 * Args:
 *   id: Anchor id for in-page links.
 *   children: Node to render after visible.
 *   rootMargin: IntersectionObserver rootMargin (preload before fully visible).
 *   minHeight: Placeholder height while waiting (avoids layout jump).
 *   className: Optional wrapper classes.
 *
 * Returns:
 *   React element.
 *
 * Raises:
 *   None.
 */
function LazyOnView({
  id,
  children,
  rootMargin = '0px 0px 180px 0px',
  minHeight = '28vh',
  className = '',
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) {
      return undefined;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [visible, rootMargin]);

  return (
    <div
      ref={ref}
      id={id}
      className={className}
      style={visible ? undefined : { minHeight }}
    >
      {visible ? children : null}
    </div>
  );
}

export default LazyOnView;
