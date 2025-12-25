import { GraduationCap, Award, FileText, Plane, Home, Megaphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: 'Student Admission Services',
      color: 'primary',
      items: [
        'University recommendations',
        'Course selection & eligibility checking',
        'Application document preparation',
        'Application submission & tracking',
        'Securing admission letters',
        'Last-minute deadline support'
      ]
    },
    {
      icon: Award,
      title: 'Scholarship Support',
      color: 'secondary',
      items: [
        'Finding available scholarships',
        'Scholarship requirement guidance',
        'Application assistance',
        '100% tuition-free opportunities'
      ]
    },
    {
      icon: FileText,
      title: 'Visa & Immigration Assistance',
      color: 'accent',
      items: [
        'Visa documentation',
        'Interview coaching',
        'Travel preparation',
        'Medical & insurance guidance',
        'Resident permit assistance'
      ]
    },
    {
      icon: Home,
      title: 'Relocation Support',
      color: 'primary',
      items: [
        'Airport pickup arrangements',
        'Accommodation assistance',
        'Orientation after arrival',
        'Community connections'
      ]
    },
    {
      icon: Plane,
      title: 'Travel & Settlement',
      color: 'secondary',
      items: [
        'Flight booking guidance',
        'Pre-departure briefing',
        'Post-arrival check-ins',
        'Connection to advisors & friends'
      ]
    },
    {
      icon: Megaphone,
      title: 'Marketing & Support',
      color: 'accent',
      items: [
        'Admission & scholarship flyers',
        'Social media outreach',
        'Success stories & testimonials',
        'WhatsApp/Instagram follow-ups'
      ]
    }
  ];

  const colorMap: Record<string, string> = {
    primary: 'bg-[#1B3C53]/10 dark:bg-[#456882]/40 text-[#1B3C53] dark:text-[#F9F3EF]',
    secondary: 'bg-[#456882]/10 dark:bg-[#456882]/40 text-[#456882] dark:text-[#F9F3EF]',
    accent: 'bg-[#D2C1B6]/40 dark:bg-[#456882]/40 text-[#1B3C53] dark:text-[#F9F3EF]'
  };

  return (
    <section id="services" className="py-20 bg-[#F9F3EF] dark:bg-[#0F1F2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl text-[#1B3C53] dark:text-[#F9F3EF] mb-6">
            Our Complete Range of Services
          </h2>
          <p className="text-xl text-[#456882] dark:text-[#D2C1B6]">
            From application to arrival — we handle everything so you can focus on your dreams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-[#D2C1B6]/30 dark:border-[#456882]/30 dark:bg-[#1B3C53] shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className={`inline-flex items-center justify-center w-12 h-12 ${colorMap[service.color]} rounded-xl mb-4`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-[#1B3C53] dark:text-[#F9F3EF]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#456882] dark:text-[#D2C1B6]">
                      <span className="text-[#1B3C53] dark:text-[#D2C1B6] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}