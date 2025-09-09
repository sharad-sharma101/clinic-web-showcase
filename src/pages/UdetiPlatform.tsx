import HealthcareNav from "@/components/layout/HealthcareNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Clock, Shield, Zap, Heart } from "lucide-react";

const UdetiPlatform = () => {
  const navItems = [
    { label: "Solution", href: "#solution" },
    { label: "Why Udeti", href: "#why-udeti" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact Us", href: "#contact" },
    { label: "About Us", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Login", href: "#login" },
  ];

  const solutions = [
    {
      title: "Improving Clinic Reach",
      items: ["Free clinic website", "Integrated appointment system", "Integrate Google Business with website"],
      icon: Users,
      color: "bg-green-100 text-green-700"
    },
    {
      title: "Maximizing Patient Throughput", 
      items: ["Appointment Management", "Reminders and Follow-Up", "Billing and Service Management", "Campaigns for camps/ offers", "Additional ₹ e.g. Teleconsults"],
      icon: Zap,
      color: "bg-blue-100 text-blue-700"
    },
    {
      title: "Simplifying Digitization",
      items: ["Easy self-guided installation", "Pre-recorded training videos", "Readily accessible remote support"],
      icon: Shield,
      color: "bg-purple-100 text-purple-700"
    }
  ];

  const challenges = [
    "My clinic lacks visibility on the internet, my Google Business profile is incomplete.",
    "I can't miss any calls as I may lose patients",
    "Many patients miss appointments without reminders", 
    "Patient follow-up compliance is poor",
    "Unable to get a simple solution to engage with all my patients (e.g. camps, offers etc.)",
    "Hard to set up a new clinic with digital capabilities as it adds significantly to costs"
  ];

  const plans = [
    {
      name: "Udeti Monthly",
      description: "Perfect for getting started", 
      price: "₹300",
      period: "month",
      billing: "Billed monthly",
      features: ["Basic website", "Appointment booking", "Patient management", "Email support"]
    },
    {
      name: "Udeti Annual",
      description: "Best value for growing practices",
      price: "₹2,400", 
      period: "year",
      billing: "Billed annually",
      popular: true,
      features: ["Everything in Monthly", "Advanced analytics", "Custom domain", "Priority support", "Marketing tools"]
    }
  ];

  return (
    <div className="theme-green min-h-screen">
      <HealthcareNav 
        title="LetsDoc"
        navItems={navItems}
        theme="green"
      />

      {/* Hero Section */}
      <section className="healthcare-section bg-gradient-to-br from-healthcare-green to-healthcare-green-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="healthcare-hero-text mb-6">
            The Udeti Solution
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Comprehensive digital transformation for your healthcare practice
          </p>
          <Button size="lg" className="bg-white text-healthcare-green hover:bg-white/90 font-medium">
            Request Demo
          </Button>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solution" className="healthcare-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} className="healthcare-card">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${solution.color} flex items-center justify-center mb-4`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {solution.items.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-healthcare-green mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Udeti Section */}
      <section id="why-udeti" className="healthcare-section bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Udeti
            </h2>
            <p className="text-muted-foreground text-lg">
              Growing a practice in today's digital world comes with unique challenges
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <Card key={index} className={`healthcare-card ${
                  index === 0 ? 'bg-blue-50 border-blue-200' :
                  index === 1 ? 'bg-healthcare-green-light border-green-200' :
                  index === 2 ? 'bg-orange-50 border-orange-200' :
                  'bg-card'
                }`}>
                  <CardContent className="p-6">
                    <p className="text-sm leading-relaxed">{challenge}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="healthcare-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Choose Your Plan
            </h2>
            <p className="text-muted-foreground text-lg">
              Flexible pricing options to suit your clinic's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`healthcare-card relative ${
                plan.popular ? 'ring-2 ring-healthcare-green shadow-xl' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-healthcare-green text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.billing}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-healthcare-green mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-healthcare-green hover:bg-healthcare-green-dark' 
                        : 'variant-outline'
                    }`}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-6 w-6" />
            <span className="text-xl font-semibold">LetsDoc</span>
          </div>
          <p className="text-background/80">
            Transforming healthcare practices through innovative technology solutions
          </p>
        </div>
      </footer>
    </div>
  );
};

export default UdetiPlatform;