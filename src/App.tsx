import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { Layout } from "./components/layout/Layout";
import { Home } from "./components/home/Home";

// Split the travel route out so three.js is only fetched when it is visited.
const Travel = lazy(() =>
  import("./components/travel/Travel").then((m) => ({ default: m.Travel })),
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/travel"
            element={
              <Suspense fallback={null}>
                <Travel />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
