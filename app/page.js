// app/page.tsx
import HeroSection from './components/home/HeroSection';
import SearchSection from './components/home/SearchSection';
import StatsSection from './components/home/StatsSection';
import VideoSection from './components/home/VideoSection';
import NewClassesSection from './components/home/NewClassesSection';
import PopularInstitutesSection from './components/home/PopularInstitutesSection';
import CategoriesSection from './components/home/CategoriesSection';
import FeaturesSection from './components/home/FeaturesSection';
import FAQSection from './components/home/FAQSection';
import CTASection from './components/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Search Section */}
      <SearchSection />

      {/* Stats Section */}
      <StatsSection />

      {/* New Classes Section */}
      <NewClassesSection />

      {/* Video Section */}
      <VideoSection />

      {/* Popular Institutes Section */}
      <PopularInstitutesSection />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />

    </div>
  );
}