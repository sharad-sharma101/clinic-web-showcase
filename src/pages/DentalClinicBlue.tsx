import HealthcareNav from "@/components/layout/HealthcareNav";
import HeroSection from "@/components/healthcare/HeroSection";
import AppointmentBooking from "@/components/healthcare/AppointmentBooking";
import DoctorProfiles from "@/components/healthcare/DoctorProfiles";
import dentistImage from "@/assets/dentist-blue.jpg";

const DentalClinicBlue = () => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Book Appointment", href: "#appointment" },
    { label: "Our Doctors", href: "#doctors" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const doctors = [
    { name: "Dr. Anish Kumar", specialty: "Chief Dentist & Oral Surgeon" },
    { name: "Dr. Priya Sharma", specialty: "Orthodontics" },
    { name: "Dr. Rajesh Patel", specialty: "Pediatric Dentistry" },
  ];

  const doctorProfiles = [
    {
      name: "Dr. Anish Kumar",
      title: "Chief Dentist & Oral Surgeon",
      experience: "20+ Years Experience",
      specialty: ["General Dentistry", "Oral Surgery"],
      education: ["BDS, MDS (Oral Surgery)", "Delhi University"],
      interests: ["Digital Dentistry", "Implantology", "Cosmetic Procedures"],
      about: "Dr. Anish Kumar is a distinguished dental professional with over two decades of experience. He specializes in advanced oral surgery techniques and is passionate about providing compassionate dental care using the latest technology.",
      imageSrc: dentistImage,
      quote: "Every smile deserves the finest care. My approach combines cutting-edge technology with compassionate treatment to ensure every patient leaves with confidence."
    }
  ];

  return (
    <div className="theme-blue min-h-screen">
      <HealthcareNav 
        title="Dr. Anish's Dental Clinic"
        navItems={navItems}
        theme="blue"
      />

      <HeroSection
        title="Your Smile,"
        subtitle="Our Priority"
        description="Established in 2003, Dr. Anish's Dental Clinic has been serving the community with exceptional dental care, combining traditional values with modern technology."
        imageSrc={dentistImage}
        imageAlt="Dr. Anish Kumar - Chief Dentist"
        theme="blue"
        additionalInfo="Clinic Hours: Monday - Saturday: 9:00 AM - 6:00 PM | Sunday: Closed | Emergency: +91-9876543210"
      />

      <AppointmentBooking
        title="Book Your Appointment"
        subtitle="Schedule your visit with our expert dentists. Choose your preferred doctor, date, and time."
        doctors={doctors}
        theme="blue"
      />

      <DoctorProfiles
        title="Meet Your Dentists"
        subtitle="Our experienced team of dental professionals is committed to providing you with the highest quality care."
        doctors={doctorProfiles}
        theme="blue"
      />

      {/* Services Section */}
      <section className="healthcare-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive dental care for the whole family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "General Dentistry",
              "Cosmetic Dentistry", 
              "Orthodontics",
              "Oral Surgery",
              "Pediatric Dentistry",
              "Dental Implants"
            ].map((service, index) => (
              <div key={index} className="healthcare-card p-6 text-center">
                <h3 className="font-semibold text-primary mb-2">{service}</h3>
                <p className="text-sm text-muted-foreground">Professional {service.toLowerCase()} services with modern equipment</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold mb-2">Dr. Anish's Dental Clinic</h3>
          <p className="text-primary-foreground/80">
            Your trusted partner for comprehensive dental care
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DentalClinicBlue;