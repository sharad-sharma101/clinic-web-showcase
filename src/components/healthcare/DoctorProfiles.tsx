import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Doctor {
  name: string;
  title: string;
  experience: string;
  specialty: string[];
  education: string[];
  interests: string[];
  about: string;
  imageSrc: string;
  quote?: string;
}

interface DoctorProfilesProps {
  title: string;
  subtitle: string;
  doctors: Doctor[];
  theme: string;
}

const DoctorProfiles = ({ title, subtitle, doctors, theme }: DoctorProfilesProps) => {
  return (
    <section className={cn("healthcare-section bg-accent/50", `theme-${theme}`)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-12">
          {doctors.map((doctor, index) => (
            <Card key={index} className="healthcare-card max-w-5xl mx-auto">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="relative">
                      <img
                        src={doctor.imageSrc}
                        alt={doctor.name}
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {doctor.name}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-2">
                        {doctor.title}
                      </p>
                      <p className="font-medium text-primary">
                        {doctor.experience}
                      </p>
                    </div>

                    {doctor.quote && (
                      <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                        "{doctor.quote}"
                      </blockquote>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Specialty</h4>
                        <div className="space-y-1">
                          {doctor.specialty.map((spec, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground">{spec}</p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-2">Education</h4>
                        <div className="space-y-1">
                          {doctor.education.map((edu, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground">{edu}</p>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-2">Areas of Interest</h4>
                      <div className="flex flex-wrap gap-2">
                        {doctor.interests.map((interest, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-2">About</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {doctor.about}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorProfiles;