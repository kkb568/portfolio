import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
