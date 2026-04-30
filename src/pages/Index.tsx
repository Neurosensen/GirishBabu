import { useState } from "react";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { SelectedWorks } from "@/components/portfolio/SelectedWorks";
import { Journal } from "@/components/portfolio/Journal";
import { Explorations } from "@/components/portfolio/Explorations";
import { Stats } from "@/components/portfolio/Stats";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-bg text-text-primary min-h-screen">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Navbar />
      <main>
        <Hero />
        <SelectedWorks />
        <Journal />
        <Explorations />
        <Stats />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
