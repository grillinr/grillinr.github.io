import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { SiteShell } from "@/components/layout/site-shell";
import { AboutPage } from "@/pages/about-page";
import { BlogIndexPage } from "@/pages/blog-index-page";
import { BlogPostPage } from "@/pages/blog-post-page";
import { HomePage } from "@/pages/home-page";
import { ProjectDetailPage } from "@/pages/project-detail-page";
import { ProjectsPage } from "@/pages/projects-page";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<SiteShell />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:slug" element={<ProjectDetailPage />} />
          <Route path="posts" element={<BlogIndexPage />} />
          <Route path="posts/:slug" element={<BlogPostPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
