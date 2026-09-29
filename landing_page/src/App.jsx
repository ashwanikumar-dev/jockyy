import { useState, useEffect } from "react";
import Navbar from "./components/landing/Navbar";
import Hero from "./components/landing/Hero";
import ProblemSection from "./components/landing/ProblemSection";
import CrossPlatformSection from "./components/landing/CrossPlatformSection";
import EvidenceSection from "./components/landing/EvidenceSection";
import InvestigatorSection from "./components/landing/InvestigatorSection";
import ArchitectureSection from "./components/landing/ArchitectureSection";
import PrinciplesSection from "./components/landing/PrinciplesSection";
import DocumentationSection from "./components/landing/DocumentationSection";
import Footer from "./components/landing/Footer";
import DocsContainer from "./docs/DocsContainer";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || "/");

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || "/");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (path) => {
    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    window.history.pushState({}, "", path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // If on /docs or subroutes, render Docs Documentation System
  if (currentPath.startsWith("/docs")) {
    return <DocsContainer currentPath={currentPath} onNavigate={navigateTo} />;
  }

  // Otherwise, render Landing Page
  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={navigateTo} />

      <main>
        <Hero />
        <ProblemSection />
        <CrossPlatformSection />
        <EvidenceSection />
        <InvestigatorSection />
        <ArchitectureSection />
        <PrinciplesSection />
        <DocumentationSection onNavigate={navigateTo} />
        <Footer onNavigate={navigateTo} />
      </main>
    </div>
  );
}

export default App;
