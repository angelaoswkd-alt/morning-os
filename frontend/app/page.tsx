import Hero from "@/components/Hero";
import StateCard from "@/components/StateCard";
import PreparedSection from "@/components/PreparedSection";
import NeedsYouSection from "@/components/NeedsYouSection";
import Footer from "@/components/Footer";

import { morningExperience } from "@/data/morning";

export default function Home() {
  const { today } = morningExperience;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FBFAF7] via-[#F8F7F4] to-[#F3F2EE]">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center space-y-6 px-6 py-10">
        <Hero feeling={today.feeling} />
        <StateCard state={today.feeling} />
        <PreparedSection prepared={today.prepared} />
        <NeedsYouSection focus={today.focus} />
        <Footer />
      </div>
    </main>
  );
}