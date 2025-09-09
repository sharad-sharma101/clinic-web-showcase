import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Building2, Heart, Smile, Stethoscope } from "lucide-react";

const templates = [
  {
    id: "udeti",
    title: "Udeti Platform",
    description: "Healthcare technology solution provider platform",
    theme: "green",
    icon: Building2,
    path: "/udeti",
    preview: "Main LetsDoc/Udeti platform with solutions and pricing"
  },
  {
    id: "dental-blue",
    title: "Dr. Anish's Dental Clinic",
    description: "Professional dental care with modern technology",
    theme: "blue",
    icon: Smile,
    path: "/clinic/dental-blue",
    preview: "Blue theme dental clinic template"
  },
  {
    id: "dental-brown", 
    title: "Dr. Anurag's Dental Clinic",
    description: "Exceptional dental care with traditional values",
    theme: "brown",
    icon: Smile,
    path: "/clinic/dental-brown",
    preview: "Brown theme dental clinic template"
  },
  {
    id: "medical-blue",
    title: "Dr. Yuvaraj Clinic",
    description: "Comprehensive medical care with preventive focus",
    theme: "blue",
    icon: Stethoscope,
    path: "/clinic/medical-blue", 
    preview: "Blue theme medical clinic template"
  },
  {
    id: "medical-orange",
    title: "Dr. Ankit Clinic", 
    description: "Internal medicine with cardiology expertise",
    theme: "orange",
    icon: Heart,
    path: "/clinic/medical-orange",
    preview: "Orange theme medical clinic template"
  }
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="healthcare-nav sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary">LetsDoc Templates</h1>
            </div>
            <p className="text-muted-foreground">Healthcare Website Templates</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="healthcare-hero-text text-primary mb-4">
            Healthcare Website Templates
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional, SEO-friendly templates for clinics, hospitals, and healthcare platforms. 
            Choose from our collection of beautiful, responsive designs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {templates.map((template) => {
            const Icon = template.icon;
            return (
              <Card 
                key={template.id} 
                className={`healthcare-card hover:scale-105 cursor-pointer theme-${template.theme}`}
                onClick={() => navigate(template.path)}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{template.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-sm">
                    {template.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {template.preview}
                  </p>
                  <Button 
                    className="w-full healthcare-button-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(template.path);
                    }}
                  >
                    View Template
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="healthcare-card max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Template Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>✓ SEO Optimized</div>
              <div>✓ Mobile Responsive</div>
              <div>✓ Professional Design</div>
              <div>✓ Appointment Booking</div>
              <div>✓ Doctor Profiles</div>
              <div>✓ Service Management</div>
              <div>✓ Contact Forms</div>
              <div>✓ Gallery Sections</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;