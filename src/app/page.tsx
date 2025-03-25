import HeroSection from '@/app/components/home/HeroSection';
import { FeaturesSection } from '@/app/components/home/FeaturesSection';
import { PricingSection } from '@/app/components/home/PricingSection';
import Footer from './components/navigation/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
