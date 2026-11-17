import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Page as LandingPage } from "./Components/LandingPage/Page";
import PipelineFeature from "./Components/LandingPage/features/PipelineFeature";
import WhatsAppFeature from "./Components/LandingPage/features/WhatsAppFeature";
import InvoicingFeature from "./Components/LandingPage/features/InvoicingFeature";
import AIFeature from "./Components/LandingPage/features/AIFeature";
import SMBFeature from "./Components/LandingPage/features/SMBFeature";
import EnterpriseFeature from "./Components/LandingPage/features/EnterpriseFeature";
import StartupFeature from "./Components/LandingPage/features/StartupFeature";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features/pipeline" element={<PipelineFeature />} />
        <Route path="/features/whatsapp" element={<WhatsAppFeature />} />
        <Route path="/features/invoicing" element={<InvoicingFeature />} />
        <Route path="/features/ai" element={<AIFeature />} />
        <Route path="/solutions/smb" element={<SMBFeature />} />
        <Route path="/solutions/enterprise" element={<EnterpriseFeature />} />
        <Route path="/solutions/startups" element={<StartupFeature />} />
      </Routes>
    </>
  );
}