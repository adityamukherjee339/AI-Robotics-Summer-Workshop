import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import WorkshopDetails from "./components/WorkshopDetails";
import LearningOutcomes from "./components/LearningOutcomes";
import FAQ from "./components/FAQ";
import RegistrationForm from "./components/RegistrationForm";
import { RegistrationProvider } from "./context/RegistrationContext";

export default function Home() {
  return (
    <RegistrationProvider>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Partners />
        <WorkshopDetails />
        <LearningOutcomes />
        <FAQ />
        <RegistrationForm />
      </main>
      
      <footer className="bg-dark-section text-gray-400 py-8 text-center text-sm border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} AI & Robotics Workshop. All rights reserved.</p>
        </div>
      </footer>
    </RegistrationProvider>
  );
}
