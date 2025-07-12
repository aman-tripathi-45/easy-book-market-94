import { Book, BarChart3, Building } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Analysis Tools Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-primary/10 backdrop-blur-sm rounded-xl px-6 py-3 mb-8">
            <span className="text-primary text-sm font-semibold font-inter tracking-wider uppercase">Analysis Tools</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            Advanced Analytics Platform
          </h2>
          <p className="font-inter text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Explore our comprehensive suite of tools designed to analyze
            and optimize academic and professional performance.
          </p>
        </div>

        {/* Analytics Tools Grid - Positioned to avoid background interference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24 relative z-10">
          <AnalyticsCard
            icon={<Book className="h-14 w-14" />}
            title="Academic Performance Analyzer"
            description="Analyze student performance trends, identify areas for improvement, and track academic progress over time."
          />
          <AnalyticsCard
            icon={<Building className="h-14 w-14" />}
            title="Campus Placement Hub"
            description="Track placement statistics, manage corporate relationships, and optimize student placement opportunities."
          />
          <AnalyticsCard
            icon={<BarChart3 className="h-14 w-14" />}
            title="Training Performance Analyzer"
            description="Evaluate training program effectiveness, monitor skill development, and measure learning outcomes."
          />
        </div>

        {/* Bookstore Section - Clear separation from background */}
        <div className="text-center mt-32 pt-20 border-t border-border/50">
          <div className="bg-gradient-primary rounded-3xl p-12 md:p-16 text-center shadow-elegant">
            <h3 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8 leading-tight">
              Choose our bookstore — Why use this website?
            </h3>
            <p className="font-inter text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed font-light">
              Your trusted platform for buying and selling academic books securely. 
              Connect with fellow students and access the resources you need for your educational journey.
            </p>
            
            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-poppins text-lg font-semibold text-primary-foreground mb-2">Secure Transactions</h4>
                <p className="font-inter text-primary-foreground/80 text-sm">Safe and reliable book exchanges</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-poppins text-lg font-semibold text-primary-foreground mb-2">Wide Selection</h4>
                <p className="font-inter text-primary-foreground/80 text-sm">Find books for all academic subjects</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-poppins text-lg font-semibold text-primary-foreground mb-2">Student Community</h4>
                <p className="font-inter text-primary-foreground/80 text-sm">Connect with fellow students easily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AnalyticsCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) => {
  return (
    <div className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:bg-card transition-all duration-300 hover:-translate-y-2 shadow-elegant hover:shadow-glow">
      <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
        {icon}
      </div>
      <h3 className="font-poppins text-2xl font-semibold text-card-foreground mb-4 text-center leading-tight">{title}</h3>
      <p className="font-inter text-muted-foreground leading-relaxed text-center mb-6">{description}</p>
      <div className="text-center">
        <span className="font-inter text-primary hover:text-primary-glow cursor-pointer inline-flex items-center text-sm font-semibold transition-colors duration-300">
          Explore →
        </span>
      </div>
    </div>
  );
};

export default WhyChooseUs;