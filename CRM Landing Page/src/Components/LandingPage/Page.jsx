import BuiltForIndia from "./BuiltForIndia";
import Hero from "./Hero";
import { Navbar } from "./Navbar";
import PlatformFeatures from "./PlatformFeatures";
import Benefits from "./Benefits";
import SalesHeroSection from "./SalesHeroSection";
import SalesPipelines from "./SalesPipeline";
import WhatsAppCRM from "./WhatsAppCRM";
import Integrations from "./Integrations";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import CTASection from "./CTASection";
import Footer from "./Footer";

export function Page() {
    return (
        <div className="bg-white h-screen overflow-y-auto overflow-x-hidden">
            <Navbar />
            <Hero />
            <PlatformFeatures />
            <Benefits />
            <SalesPipelines />
            <WhatsAppCRM />
            <BuiltForIndia />
            <SalesHeroSection />
            <Integrations />
            <Pricing />
            <Testimonials />
            <CTASection />
            <Footer />
        </div>
    );
}
