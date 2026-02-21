'use client';

import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeatureHighlights from '../components/home/FeatureHighlights';
import HowItWorks from '../components/home/HowItWorks';
import BlogPreview from '../components/home/BlogPreview';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
    return (
        <div className="relative overflow-hidden min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
            <HeroSection />
            <FeatureHighlights />
            <HowItWorks />
            <BlogPreview />
            <CallToAction />
        </div>
    );
};

export default Home;
