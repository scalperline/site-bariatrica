
'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TransformationTimeline from '@/components/TransformationTimeline';
import WeightLossCalculator from '@/components/WeightLossCalculator';
import BodyTransformationSimulator from '@/components/BodyTransformationSimulator';
import PatientStories from '@/components/PatientStories';
import DoctorSection from '@/components/DoctorSection';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';
import ServicesSection from '@/components/Readdy/ServicesSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <TransformationTimeline />
        <WeightLossCalculator />
        <BodyTransformationSimulator />
        <ServicesSection />
        <PatientStories />
        <DoctorSection />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}
