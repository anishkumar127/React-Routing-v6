import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Posts from "./pages/Posts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts" element={<Posts />}>
          <Route path=":id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
