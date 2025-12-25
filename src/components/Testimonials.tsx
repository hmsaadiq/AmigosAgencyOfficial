import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import LiquidEther from './LiquidEther';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah M.',
      country: 'Nigeria',
      destination: 'United Kingdom',
      image: 'https://images.unsplash.com/photo-1653250198948-1405af521dbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwZ3JhZHVhdGlvbiUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2NTQwMDQxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'AMIGOS AGENCY made my dream come true! I got a full scholarship to study in the UK. They handled everything from application to my arrival at the airport. Truly amazing!'
    },
    {
      name: 'David O.',
      country: 'Nigeria',
      destination: 'Canada',
      image: 'https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjUzOTk5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'I applied late and thought I had no chance, but AMIGOS rushed my application and got me into a great university in Canada in just 2 weeks. They are professional and caring!'
    },
    {
      name: 'Fatima A.',
      country: 'Nigeria',
      destination: 'Turkey',
      image: 'https://images.unsplash.com/photo-1648301033733-44554c74ec50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc2NTM1ODgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'Best decision I ever made! From visa coaching to finding accommodation in Turkey, AMIGOS was with me every step. I felt supported and never alone in the process.'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#1B3C53] relative overflow-hidden">
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.15 }}>
        <LiquidEther
          colors={['#1B3C53', '#456882', '#D2C1B6']}
          mouseForce={12}
          cursorSize={70}
          isViscous={false}
          resolution={0.5}
          autoDemo={true}
          autoSpeed={0.35}
          autoIntensity={1.3}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl text-[#1B3C53] dark:text-[#F9F3EF] mb-6">
            Success Stories from Our Students
          </h2>
          <p className="text-xl text-[#456882] dark:text-[#D2C1B6]">
            Real students, real results, real transformations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-[#D2C1B6]/30 dark:border-[#456882]/30 dark:bg-[#0F1F2E] shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-[#1B3C53] dark:text-[#D2C1B6] opacity-50" />
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D2C1B6] text-[#D2C1B6]" />
                  ))}
                </div>

                <p className="text-[#456882] dark:text-[#D2C1B6] mb-6">{testimonial.text}</p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#D2C1B6]/30 dark:bg-[#456882]/30">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-[#1B3C53] dark:text-[#F9F3EF]">{testimonial.name}</div>
                    <div className="text-sm text-[#456882] dark:text-[#D2C1B6]">
                      {testimonial.country} → {testimonial.destination}
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
}