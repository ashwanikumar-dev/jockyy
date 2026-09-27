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

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />
        <ProblemSection />
        <CrossPlatformSection />
        <EvidenceSection />
        <InvestigatorSection />
        <ArchitectureSection />
        <PrinciplesSection />
        <DocumentationSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
