import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  theme: string;
  ctaText?: string;
  additionalInfo?: string;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  imageSrc, 
  imageAlt, 
  theme, 
  ctaText = "Book Appointment",
  additionalInfo 
}: HeroSectionProps) => {
  return (
    <section className={cn("healthcare-section min-h-[80vh] flex items-center", `theme-${theme}`)}>
      <div 
        className="absolute inset-0 healthcare-gradient-bg opacity-95"
        style={{
          background: theme === 'blue' ? 'var(--gradient-blue)' :
                     theme === 'green' ? 'var(--gradient-green)' :
                     theme === 'orange' ? 'var(--gradient-orange)' :
                     theme === 'brown' ? 'var(--gradient-brown)' :
                     'var(--gradient-blue)'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="healthcare-hero-text mb-6">
              {title}{subtitle && <><br /><span className="text-white/90">{subtitle}</span></>}
            </h1>
            <p className="text-lg mb-8 text-white/90 leading-relaxed">
              {description}
            </p>
            
            {additionalInfo && (
              <div className="mb-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <p className="text-white/90 text-sm">
                  {additionalInfo}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-medium px-8"
              >
                {ctaText}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary font-medium px-8"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/20 rounded-2xl p-2 backdrop-blur-sm">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;