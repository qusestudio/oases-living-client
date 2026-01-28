import React from "react";
import HeroSection from "@/components/elements/HeroSection";
import FeaturesSection from "@/components/elements/FeaturesSection";
import DiscoverSection from "@/components/elements/DiscoverSection";
import CallToActionSection from "@/components/elements/CallToActionSection";
import FooterSection from "@/components/elements/FooterSection";

const Landing = () => {
    return (
        <div>
            <HeroSection />
            <FeaturesSection />
            <DiscoverSection />
            <CallToActionSection />
            <FooterSection />
        </div>
    )
}

export default Landing;