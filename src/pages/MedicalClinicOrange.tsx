import HealthcareNav from "@/components/layout/HealthcareNav";
import AppointmentBooking from "@/components/healthcare/AppointmentBooking";
import DoctorProfiles from "@/components/healthcare/DoctorProfiles";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import doctorImage from "@/assets/doctor-orange.jpg";

const MedicalClinicOrange = () => {
  const navItems = [
    { label: "Clinic", href: "#clinic" },
    { label: "Doctors", href: "#doctors" },
    { label: "Book Appointment", href: "#appointment" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const doctors = [
    { name: "Dr. Ankit", specialty: "General Medicine" },
    { name: "Dr. Priya Sharma", specialty: "Orthodontics" },
    { name: "Dr. Suresh Kumar", specialty: "Internal Medicine" },
  ];

  const doctorProfiles = [
    {
      name: "Dr. Ankit",
      title: "Chief Medical Officer & Founder",
      experience: "22+ Years Experience",
      specialty: ["Internal Medicine", "Cardiology & Preventive Care"],
      education: ["MBBS, MD (Internal Medicine)", "All Institute of Medical Sciences, New Delhi"],
      interests: ["Preventive Cardiology", "Diabetes Management", "Hypertension Care", "Executive Health Check-ups"],
      about: "Dr. Ankit is a distinguished internal medicine specialist and the founder of our clinic. With over two decades of experience, he has dedicated his career to providing comprehensive healthcare with a focus on preventive medicine and patient education.",
      imageSrc: doctorImage
    }
  ];

  const clinicImages = [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1586773860418-d37222d8eaf8?w=800&h=600&fit=crop&crop=center", 
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=800&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1581594693702-fbdc51b2763d?w=800&h=600&fit=crop&crop=center"
  ];

  return (
    <div className="theme-orange min-h-screen">
      <HealthcareNav 
        title="Dr. Ankit Clinic"
        navItems={navItems}
        theme="orange"
      />

      {/* Clinic Gallery Section */}
      <section className="healthcare-section bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Clinic in Pics
            </h1>
            <p className="text-muted-foreground text-lg">
              Take a virtual tour of our facility designed for your comfort and care.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {clinicImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-0">
                        <img
                          src={image}
                          alt={`Clinic ${index + 1}`}
                          className="w-full h-96 md:h-[500px] object-cover rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
            
            <div className="flex justify-center mt-6 space-x-2">
              {clinicImages.map((_, index) => (
                <div key={index} className="w-2 h-2 bg-primary/30 rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="healthcare-section bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Your Dentists
            </h2>
            <p className="text-primary-foreground/90 text-lg">
              Our experienced team of dental professionals is committed to providing you with the highest quality care.
            </p>
          </div>

          <DoctorProfiles
            title=""
            subtitle=""
            doctors={doctorProfiles}
            theme="orange"
          />

          <div className="text-center mt-8">
            <p className="text-primary-foreground/90">
              <strong>Clinic Hours:</strong> Monday - Saturday: 9:00 AM - 6:00 PM | Sunday: Closed
            </p>
            <p className="text-primary-foreground/90 mt-2">
              <strong>Emergency:</strong> +91-9876543210
            </p>
          </div>
        </div>
      </section>

      <AppointmentBooking
        title="Book Your Appointment"
        subtitle="Schedule your consultation with our dental experts"
        doctors={doctors}
        theme="orange"
      />

      {/* Services Section */}
      <section className="healthcare-section bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Dental Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive dental care with advanced treatment options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "General Dentistry",
              "Cosmetic Procedures",
              "Orthodontic Treatment",
              "Oral Surgery",
              "Preventive Care",
              "Emergency Dental Care"
            ].map((service, index) => (
              <div key={index} className="healthcare-card p-6 text-center">
                <h3 className="font-semibold text-primary mb-2">{service}</h3>
                <p className="text-sm text-muted-foreground">Professional dental services using state-of-the-art technology</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold mb-2">Dr. Ankit Clinic</h3>
          <p className="text-primary-foreground/80">
            Your trusted partner for comprehensive dental and medical care
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MedicalClinicOrange;