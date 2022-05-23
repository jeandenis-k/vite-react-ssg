import { Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.globEager("./pages/*.jsx");

const routes = Object.keys(pages).map((path) => {
  if (path === null || path === undefined) {
    throw new Error("Unexpected null page name");
  }
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
  if (!name) {
    throw new Error(`Unexpected name: ${name}`);
  }
  return {
    name,
    path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
    component: pages[path].default,
  };
});

export function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
