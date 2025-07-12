
import { Book, ShoppingCart, Users } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section id="bookstore-section" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Bookstore Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-primary/10 backdrop-blur-sm rounded-xl px-6 py-3 mb-8">
            <span className="text-primary text-sm font-semibold font-inter tracking-wider uppercase">Student Bookstore</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            Ideal Institute of Technology Bookstore
          </h2>
          <p className="font-inter text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Your comprehensive platform for buying and selling academic books.
            Connect with fellow students and build your academic library affordably.
          </p>
        </div>

        {/* Bookstore Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24 relative z-10">
          <BookstoreCard
            icon={<Book className="h-14 w-14" />}
            title="Wide Book Selection"
            description="Find textbooks, reference materials, and academic resources for all courses and subjects across different semesters."
          />
          <BookstoreCard
            icon={<ShoppingCart className="h-14 w-14" />}
            title="Easy Buy & Sell"
            description="Simple platform to buy books from seniors or sell your used books to juniors. Get the best deals on campus."
          />
          <BookstoreCard
            icon={<Users className="h-14 w-14" />}
            title="Student Community"
            description="Connect directly with fellow students, build your network, and share academic resources within our trusted community."
          />
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-32 pt-20 border-t border-border/50">
          <div className="bg-gradient-primary rounded-3xl p-12 md:p-16 text-center shadow-elegant">
            <h3 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8 leading-tight">
              Why Choose Our Bookstore Platform?
            </h3>
            <p className="font-inter text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              Join thousands of students who trust our platform for secure, affordable, and convenient book transactions.
            </p>
            
            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-poppins text-lg font-semibold text-primary-foreground mb-2">Secure Transactions</h4>
                <p className="font-inter text-primary-foreground/80 text-sm">Safe payments and verified student accounts</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-poppins text-lg font-semibold text-primary-foreground mb-2">Best Prices</h4>
                <p className="font-inter text-primary-foreground/80 text-sm">Get up to 70% off on used textbooks</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-poppins text-lg font-semibold text-primary-foreground mb-2">Campus Delivery</h4>
                <p className="font-inter text-primary-foreground/80 text-sm">Free delivery within campus premises</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BookstoreCard = ({ icon, title, description }) => {
  return (
    <div className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:bg-card transition-all duration-300 hover:-translate-y-2 shadow-elegant hover:shadow-glow">
      <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
        {icon}
      </div>
      <h3 className="font-poppins text-2xl font-semibold text-card-foreground mb-4 text-center leading-tight">{title}</h3>
      <p className="font-inter text-muted-foreground leading-relaxed text-center mb-6">{description}</p>
      <div className="text-center">
        <span className="font-inter text-primary hover:text-primary-glow cursor-pointer inline-flex items-center text-sm font-semibold transition-colors duration-300">
          Learn More →
        </span>
      </div>
    </div>
  );
};

export default WhyChooseUs;
