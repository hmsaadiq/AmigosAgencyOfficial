import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Packages } from "./components/Packages";
import { Countries } from "./components/Countries";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ServicesGrid } from "./components/ServicesGrid";
import { ThemeProvider } from "./components/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F9F3EF] dark:bg-[#0F1F2E]">
        <Navbar />
        <Hero />
        <ServicesGrid />
        <About />
        <Services />
        <Packages />
        <Countries />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </ThemeProvider>
  );
}