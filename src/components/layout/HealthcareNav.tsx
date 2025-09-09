import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface HealthcareNavProps {
  title: string;
  navItems: NavItem[];
  theme: string;
  className?: string;
}

const HealthcareNav = ({ title, navItems, theme, className }: HealthcareNavProps) => {
  return (
    <nav className={cn("healthcare-nav sticky top-0 z-50", `theme-${theme}`, className)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="text-xl font-semibold text-primary">
            {title}
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <Button variant="default" size="sm" className="healthcare-button-primary">
            Book Appointment
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default HealthcareNav;