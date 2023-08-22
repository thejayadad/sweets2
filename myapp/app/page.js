import FeaturesSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="max-w-screen-3xl	mx-auto">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      homePage
      <Footer />
    </main>
  )
}
