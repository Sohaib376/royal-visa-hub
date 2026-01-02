import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";
import UAETouristVisa30Days from "./pages/services/UAETouristVisa30Days";
import UAETouristVisa60Days from "./pages/services/UAETouristVisa60Days";
import UAEVisaRenewalBus from "./pages/services/UAEVisaRenewalBus";
import UAEVisaRenewalFlight from "./pages/services/UAEVisaRenewalFlight";
import UmrahPackages from "./pages/services/UmrahPackages";
import SchengenVisa from "./pages/services/SchengenVisa";
import CanadaVisa from "./pages/services/CanadaVisa";
import USAVisa from "./pages/services/USAVisa";
import USAExpressAppointments from "./pages/services/USAExpressAppointments";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/services/uae-tourist-visa-30-days" element={<UAETouristVisa30Days />} />
          <Route path="/services/uae-tourist-visa-60-days" element={<UAETouristVisa60Days />} />
          <Route path="/services/uae-visa-renewal-bus" element={<UAEVisaRenewalBus />} />
          <Route path="/services/uae-visa-renewal-flight" element={<UAEVisaRenewalFlight />} />
          <Route path="/services/umrah-packages" element={<UmrahPackages />} />
          <Route path="/services/schengen-visa" element={<SchengenVisa />} />
          <Route path="/services/canada-visa" element={<CanadaVisa />} />
          <Route path="/services/usa-visa" element={<USAVisa />} />
          <Route path="/services/usa-express-appointments" element={<USAExpressAppointments />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
