import { Button } from "@/components/ui/button";

const HeroSection = () => {
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
      
      {/* Content - Perfectly centered like the reference */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* College Logo - Perfectly centered and prominent */}
        <div className="mb-12 flex justify-center">
          <div className="bg-primary/20 backdrop-blur-sm rounded-full p-8 border-2 border-hero-text/30 shadow-2xl">
            <img 
              src="/lovable-uploads/69bd91d0-725e-492c-aa0d-ca13c2901092.png" 
              alt="Ideal Institute of Technology Logo" 
              className="h-40 w-40 mx-auto"
            />
          </div>
        </div>

        {/* Main Heading - Exactly like reference with modern typography */}
        <h1 className="font-poppins text-6xl md:text-7xl lg:text-8xl font-bold text-hero-text mb-8 leading-tight tracking-tight">
          <span className="block">Ideal Institute of</span>
          <span className="block">Technology</span>
        </h1>

        {/* Subheading - Matches reference with better typography */}
        <p className="font-inter text-xl md:text-2xl lg:text-3xl text-hero-text/90 mb-16 leading-relaxed max-w-5xl mx-auto font-light">
          Empowering futures through excellence in education and
          innovation in a world of boundless possibilities
        </p>

        {/* Action Buttons - Exactly like reference */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
          <Button 
            variant="hero-outline" 
            size="lg" 
            className="font-poppins text-lg px-10 py-4 h-auto font-semibold min-w-[200px]"
          >
            Explore Features
          </Button>
          <Button 
            variant="hero-outline" 
            size="lg" 
            className="font-poppins text-lg px-10 py-4 h-auto font-semibold min-w-[200px]"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;