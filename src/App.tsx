import { useEffect } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { SiteShell } from "@/components/layout/site-shell";
import { AboutPage } from "@/pages/about-page";
import { BlogIndexPage } from "@/pages/blog-index-page";
import { BlogPostPage } from "@/pages/blog-post-page";
import { HomePage } from "@/pages/home-page";
import { ProjectDetailPage } from "@/pages/project-detail-page";
import { ProjectsPage } from "@/pages/projects-page";
import { ResumePage } from "@/pages/resume-page";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      return;
    }

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteShell />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:slug" element={<ProjectDetailPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="posts" element={<BlogIndexPage />} />
          <Route path="posts/:slug" element={<BlogPostPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
