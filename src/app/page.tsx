"use client";

import { useEffect } from "react";
import { useState } from "react";
import { toast } from "sonner";

import { trackEvent } from "@/lib/mixpanel";

// import { Button } from "@/components/ui/button"
// import HeroSection from "@/components/sections/HeroSection";
import { HeroSectionOne } from '../components/sections/HeroSectionOne';
// import { Features } from "@/components/sections/Features";
// import LogoCloud from '@/components/LogoCloud';
import FooterBlock from '../components/sections/Footer';
import NewsletterSubscribe from '../components/sections/NewsletterSubscribe';
import { Tertimonials } from '../components/sections/Testimonials';
import { Programs } from '../components/sections/OurPrograms';
import ContactSection from '../components/sections/ContactSection';
import InfiniteScrollingLogosAnimation from "@/components/sections/Infinite-Scrolling-Logos-Animation";
import Faq from '../components/sections/FAQ';
import { Features2 } from '../components/sections/Features2';


export default function Home() {
  // Modal and Banner state
  const [showBanner, setShowBanner] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // Modal component for event details
  function EventModal() {
    if (!showModal) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-4 relative flex flex-col" style={{maxHeight: '90vh'}}>
          {/* Close button (top right) */}
          <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl" onClick={() => setShowModal(false)} title="Close Modal">&times;</button>
          <div className="overflow-y-auto pr-2" style={{maxHeight: '70vh'}}>
            <div className="mb-3">
              <h2 className="text-lg font-bold text-blue-900 mb-1">Akash Yaan Educational Project – Inspiring Future Space Explorers</h2>
              <p className="text-xs text-gray-700 mb-1">Spearheaded by FASESA & Nexora LTX</p>
              <p className="text-sm text-gray-600 mb-3">The Akash Yaan Educational Project is an innovative, hands-on STEM initiative designed to inspire and prepare students for the future of space exploration and aerospace engineering. This 12-week immersive program combines real-world aerospace simulations, mentorship from experts, and high-altitude balloon experiments, aligning with India’s mission to empower youth through cutting-edge STEM education.</p>
            </div>
            <div className="mb-3">
              <h3 className="font-semibold text-blue-800 mb-1 text-sm">Event Objectives</h3>
              <ul className="grid grid-cols-1 gap-1 text-xs list-disc pl-4">
                <li>Inspire students to pursue careers in aerospace, engineering, and space science.</li>
                <li>Deliver hands-on learning in aerospace engineering modules and experiments.</li>
                <li>Empower underserved communities by making STEM accessible nationwide.</li>
                <li>Strengthen India’s role as a leader in space innovation and youth education.</li>
              </ul>
            </div>
            <div className="mb-3">
              <h3 className="font-semibold text-blue-800 mb-1 text-sm">Keynote Sessions</h3>
              <p className="text-xs text-gray-600 mb-1">Industry veterans and space science experts will deliver keynote sessions and panel talks throughout the program, giving students direct exposure to the minds shaping India’s space future.</p>
              <div className="flex gap-1">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-lg text-gray-400">👤</div>
                ))}
              </div>
            </div>
            <div className="mb-3">
              <h3 className="font-semibold text-blue-800 mb-1 text-sm">Learning Outcomes</h3>
              <ul className="list-disc pl-4 text-xs space-y-1">
                <li>Understand the importance of space exploration for climate change and humanity’s future.</li>
                <li>Identify and solve real-world problems using scientific principles.</li>
                <li>Design symbolic and technical mission patches and payloads.</li>
                <li>Apply the engineering design process to spacecraft and balloon experiments.</li>
                <li>Reevaluate designs based on testing and collected data.</li>
                <li>Collaborate effectively in STEM-focused teams.</li>
                <li>Present projects and findings to peers and mentors.</li>
                <li>Launch a High-Altitude Balloon experiment under safety and design protocols.</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center mt-2 gap-2">
            <button className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-bold py-1 px-4 rounded-full shadow hover:scale-105 transition-all text-xs" onClick={() => setShowModal(false)}>
              Stay Tuned – Launching Soon
            </button>
            {/* <button className="bg-gray-200 text-gray-700 font-semibold py-1 px-3 rounded-full shadow hover:bg-gray-300 transition-all text-xs" onClick={() => setShowModal(false)}>
              Close
            </button> */}
          </div>
        </div>
      </div>
    );
  }

  // Notification Banner component
  function EventBanner() {
    if (!showBanner) return null;
    return (
      <div className="w-full bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-600 text-white py-2 px-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2">
          <span className="font-bold">Akash Yaan Educational Project</span>
          <span className="hidden sm:inline">– Inspiring Future Space Explorers</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-white text-blue-900 cursor-pointer font-semibold px-3 py-1 rounded hover:bg-blue-100 transition text-sm" onClick={() => setShowModal(true)}>
            Learn More
          </button>
          <button className="text-white text-lg px-2" onClick={() => setShowBanner(false)} title="Dismiss">&times;</button>
        </div>
      </div>
    );
  }

    useEffect(() => {
        if (sessionStorage.getItem("sonnerShown")) return;
    
        const showToast = () => {
          toast("👋 Ready to ignite your STEAM journey?", {
            description: "Explore our workshops, DIY kits & mentorship programs now!",
            action: {
              label: "View Courses",
              onClick: () => {
                trackEvent("Sonner CTA Clicked", {
                  location: "Landing Page",
                });
                window.location.href = "/courses";
              },
            },
            duration: 8000,
          });
        };
    
        // Show first toast after 8s
        const initialTimeout = setTimeout(() => {
          showToast();
        }, 16000);
    
        // Then repeat every 60s after that
        const interval = setInterval(() => {
          showToast();
        }, 184000); // every 60s
    
        // Save a flag so this runs once per session
        sessionStorage.setItem("sonnerShown", "true");
    
        // Cleanup on unmount
        return () => {
          clearTimeout(initialTimeout);
          clearInterval(interval);
        };
      }, []);

  return (
    <>
      <EventBanner />
      <EventModal />
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* ...existing code... */}
        <HeroSectionOne />
        {/* <LogoCloud /> */}
        <InfiniteScrollingLogosAnimation />
        <Features2 />
        {/* <Features /> */}

        <Tertimonials />

        <Programs />

        <ContactSection />
        <Faq />
        <NewsletterSubscribe />
        <FooterBlock />
      </main>
    </>
  );
}
