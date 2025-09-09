import HealthcareNav from "@/components/layout/HealthcareNav";
import HeroSection from "@/components/healthcare/HeroSection";
import AppointmentBooking from "@/components/healthcare/AppointmentBooking";
import DoctorProfiles from "@/components/healthcare/DoctorProfiles";
import doctorImage from "@/assets/doctor-brown.jpg";

const DentalClinicBrown = () => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Book Appointment", href: "#appointment" },
    { label: "Doctors", href: "#doctors" },
    { label: "Services", href: "#services" },
    { label: "Clinic", href: "#clinic" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const doctors = [
    { name: "Dr. Anurag Aggarwal", specialty: "Chief Dentist & Oral Surgeon" },
    { name: "Dr. Kavya Reddy", specialty: "Orthodontics" },
    { name: "Dr. Vikram Singh", specialty: "Periodontics" },
  ];

  const doctorProfiles = [
    {
      name: "Dr. Anurag Aggarwal",
      title: "Chief Dentist & Oral Surgeon", 
      experience: "20+ Years Experience",
      specialty: ["General Dentistry", "Oral Surgery"],
      education: ["BDS, MDS (Oral Surgery)", "AIIMS, New Delhi"],
      interests: ["Advanced Implantology", "Cosmetic Dentistry", "Digital Workflows"],
      about: "Dr. Anurag Aggarwal brings over two decades of expertise in comprehensive dental care. His practice philosophy centers on combining traditional dental values with innovative treatment approaches.",
      imageSrc: doctorImage,
      quote: "Every smile deserves the finest care. My approach combines cutting-edge technology with compassionate treatment to ensure every patient leaves with confidence."
    }
  ];

  return (
    <div className="theme-brown min-h-screen">
      <HealthcareNav 
        title="Dr. Anurag's Dental Clinic"
        navItems={navItems}
        theme="brown"
      />

      <HeroSection
        title="Your Smile,"
        subtitle="Our Priority"
        description="Established in 2003, Dr. Anurag's Dental Clinic has been serving the community with exceptional dental care, combining traditional values with modern technology."
        imageSrc={doctorImage}
        imageAlt="Dr. Anurag Aggarwal - Chief Dentist"
        theme="brown"
        additionalInfo="Clinic Hours: Monday - Saturday: 9:00 AM - 6:00 PM | Sunday: Closed | Emergency: +91-9876543210"
      />

      <AppointmentBooking
        title="Book Your Appointment"
        subtitle="Schedule your visit with our expert dentists. Choose your preferred doctor, date, and time."
        doctors={doctors}
        theme="brown"
      />

      <DoctorProfiles
        title="Meet Your Dentists"
        subtitle="Our experienced team of dental professionals is committed to providing you with the highest quality care."
        doctors={doctorProfiles}
        theme="brown"
      />

      {/* Services Section */}
      <section className="healthcare-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Dental Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Complete oral healthcare solutions for every age
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Preventive Dentistry",
              "Restorative Procedures",
              "Cosmetic Enhancements", 
              "Orthodontic Treatment",
              "Oral Surgery",
              "Emergency Care"
            ].map((service, index) => (
              <div key={index} className="healthcare-card p-6 text-center">
                <h3 className="font-semibold text-primary mb-2">{service}</h3>
                <p className="text-sm text-muted-foreground">Expert care using advanced techniques and technology</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold mb-2">Dr. Anurag's Dental Clinic</h3>
          <p className="text-primary-foreground/80">
            Excellence in dental care with a personal touch
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DentalClinicBrown;