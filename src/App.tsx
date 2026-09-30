import { lazy, Suspense, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
const Skills = lazy(() => import("./pages/Skills"));
const Work = lazy(() => import("./pages/Work"));
const Projects = lazy(() => import("./pages/Projects"));
const Imprint = lazy(() => import("./pages/Imprint"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

/**
 * Scrolls to the top on route change, or to the #hash target once the
 * incoming page has mounted (AnimatePresence delays mounting until the
 * outgoing page finished its exit transition).
 */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    const navigated = previousPathname.current !== pathname;
    previousPathname.current = pathname;
    if (!hash) window.scrollTo(0, 0);
    if (!hash && !navigated) return;
    let attempts = 0;
    const interval = window.setInterval(() => {
      const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      const pageReady = canonical
        ? new URL(canonical.href).pathname.replace(/\/$/, "") === pathname.replace(/\/$/, "")
        : document.title === "Page Not Found (404) | Max Ritter";
      const el = pageReady
        ? hash ? document.getElementById(hash.slice(1)) : document.querySelector<HTMLElement>("main h1")
        : null;
      attempts += 1;
      if (el) {
        if (hash) el.scrollIntoView({ block: "start" });
        if (navigated) {
          el.setAttribute("tabindex", "-1");
          el.focus({ preventScroll: true });
        }
        window.clearInterval(interval);
      } else if (attempts > 60) {
        window.clearInterval(interval);
      }
    }, 50);
    return () => window.clearInterval(interval);
  }, [pathname, hash]);

  return null;
};

// AnimatedRoutes component to handle page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <Suspense fallback={<main className="shell py-16" role="status">Loading page…</main>}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

const App = () => (
  <HelmetProvider>
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollManager />
        <AnimatedRoutes />
      </BrowserRouter>
    </MotionConfig>
  </HelmetProvider>
);

export default App;
