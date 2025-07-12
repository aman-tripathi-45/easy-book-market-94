
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToBookstore = () => {
    const bookstoreSection = document.getElementById('bookstore-section');
    if (bookstoreSection) {
      bookstoreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToAuth = () => {
    // For now, scroll to bookstore section. Later can be replaced with routing
    window.location.href = '/login';
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/lovable-uploads/de3edf41-9c62-4b74-9092-e3774f2f6217.png')" 
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content - Enhanced with modern typography */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* College Logo - Clean modern design without border */}
        <div className="mb-12 flex justify-center">
          <div className="bg-primary/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-hero-text/10">
            <img 
              src="/lovable-uploads/69bd91d0-725e-492c-aa0d-ca13c2901092.png" 
              alt="Ideal Institute of Technology Logo" 
              className="h-36 w-36 mx-auto"
            />
          </div>
        </div>

        {/* Main Heading - Enhanced modern typography */}
        <h1 className="font-poppins text-6xl md:text-7xl lg:text-8xl font-bold text-hero-text mb-8 leading-tight tracking-tight">
          <span className="block bg-gradient-to-r from-hero-text via-hero-text/90 to-hero-text bg-clip-text text-transparent">
            Ideal Institute of
          </span>
          <span className="block bg-gradient-to-r from-hero-text via-hero-text/90 to-hero-text bg-clip-text text-transparent">
            Technology
          </span>
        </h1>

        {/* Subheading - Enhanced with better styling */}
        <p className="font-inter text-xl md:text-2xl lg:text-3xl text-hero-text/95 mb-16 leading-relaxed max-w-4xl mx-auto font-light">
          Your trusted platform for buying and selling academic books.
          <span className="block mt-2 text-lg md:text-xl lg:text-2xl text-hero-text/80">
            Connect with fellow students and access the resources you need.
          </span>
        </p>

        {/* Action Buttons - Enhanced styling */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
          <Button 
            variant="hero-outline" 
            size="lg" 
            className="font-poppins text-lg px-12 py-5 h-auto font-semibold min-w-[220px] hover:scale-105 transition-all duration-300 backdrop-blur-md"
            onClick={scrollToBookstore}
          >
            Explore Features
          </Button>
          <Button 
            variant="hero-outline" 
            size="lg" 
            className="font-poppins text-lg px-12 py-5 h-auto font-semibold min-w-[220px] hover:scale-105 transition-all duration-300 backdrop-blur-md"
            onClick={navigateToAuth}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
