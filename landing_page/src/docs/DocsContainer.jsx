import DocsLayout from "./components/DocsLayout";
import Introduction from "./pages/Introduction";
import WhatIsJocky from "./pages/WhatIsJocky";
import SystemArchitecture from "./pages/SystemArchitecture";
import CompilerPipeline from "./pages/CompilerPipeline";
import JockyLanguage from "./pages/JockyLanguage";
import StandardLibrary from "./pages/StandardLibrary";
import EvidenceIntegrity from "./pages/EvidenceIntegrity";
import RuntimeAgentsCollectors from "./pages/RuntimeAgentsCollectors";
import InvestigationPlatform from "./pages/InvestigationPlatform";
import SecurityArchitecture from "./pages/SecurityArchitecture";
import TestingDeployment from "./pages/TestingDeployment";
import MvpRoadmap from "./pages/MvpRoadmap";

function DocsContainer({ currentPath, onNavigate }) {
  // Normalize path (strip trailing slash if length > 1)
  const normalizedPath = currentPath.endsWith("/") && currentPath.length > 1
    ? currentPath.slice(0, -1)
    : currentPath;

  const renderPage = () => {
    switch (normalizedPath) {
      case "/docs/what-is-jocky":
        return <WhatIsJocky onNavigate={onNavigate} />;
      case "/docs/architecture":
        return <SystemArchitecture onNavigate={onNavigate} />;
      case "/docs/compiler":
        return <CompilerPipeline onNavigate={onNavigate} />;
      case "/docs/language":
        return <JockyLanguage onNavigate={onNavigate} />;
      case "/docs/standard-library":
        return <StandardLibrary onNavigate={onNavigate} />;
      case "/docs/evidence":
        return <EvidenceIntegrity onNavigate={onNavigate} />;
      case "/docs/runtime":
        return <RuntimeAgentsCollectors onNavigate={onNavigate} />;
      case "/docs/platform":
        return <InvestigationPlatform onNavigate={onNavigate} />;
      case "/docs/security":
        return <SecurityArchitecture onNavigate={onNavigate} />;
      case "/docs/development":
        return <TestingDeployment onNavigate={onNavigate} />;
      case "/docs/roadmap":
        return <MvpRoadmap onNavigate={onNavigate} />;
      case "/docs":
      default:
        return <Introduction onNavigate={onNavigate} />;
    }
  };

  return (
    <DocsLayout currentPath={normalizedPath} onNavigate={onNavigate}>
      {renderPage()}
    </DocsLayout>
  );
}

export default DocsContainer;
