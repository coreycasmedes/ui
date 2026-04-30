import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./components/home/Home";
import { Travel } from "./components/travel/Travel";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel" element={<Travel />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
