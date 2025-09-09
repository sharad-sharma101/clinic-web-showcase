import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface Doctor {
  name: string;
  specialty: string;
}

interface AppointmentBookingProps {
  title: string;
  subtitle: string;
  doctors: Doctor[];
  theme: string;
}

const timeSlots = {
  morning: ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"],
  afternoon: ["2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"]
};

const AppointmentBooking = ({ title, subtitle, doctors, theme }: AppointmentBookingProps) => {
  return (
    <section className={cn("healthcare-section", `theme-${theme}`)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {subtitle}
          </p>
        </div>

        <Card className="max-w-4xl mx-auto healthcare-card">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Book Your Appointment</CardTitle>
            <p className="text-center text-muted-foreground">Schedule your visit with our expert doctors</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Select Doctor</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your preferred doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    {doctors.map((doctor, index) => (
                      <SelectItem key={index} value={doctor.name}>
                        {doctor.name} - {doctor.specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Select Date</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose appointment date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wed-10">Wed, 10 Sept</SelectItem>
                    <SelectItem value="thu-11">Thu, 11 Sept</SelectItem>
                    <SelectItem value="fri-12">Fri, 12 Sept</SelectItem>
                    <SelectItem value="sat-13">Sat, 13 Sept</SelectItem>
                    <SelectItem value="mon-15">Mon, 15 Sept</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Select Time</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    <div className="p-2">
                      <div className="text-xs font-medium text-muted-foreground mb-2">Morning</div>
                      {timeSlots.morning.map((time) => (
                        <SelectItem key={time} value={time}>{time}</SelectItem>
                      ))}
                      <div className="text-xs font-medium text-muted-foreground mt-4 mb-2">Afternoon</div>
                      {timeSlots.afternoon.map((time) => (
                        <SelectItem key={time} value={time}>{time}</SelectItem>
                      ))}
                    </div>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Full Name" />
              <Input placeholder="Mobile Number" />
            </div>

            <Input placeholder="Email Address (Optional)" />

            <Button className="w-full healthcare-button-primary" size="lg">
              Book Appointment
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AppointmentBooking;