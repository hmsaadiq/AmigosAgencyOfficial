import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import LiquidEther from './LiquidEther';

export function Packages() {
  const packages = [
    {
      name: 'Basic Admission',
      description: 'Perfect for self-motivated students',
      price: 'Starting Package',
      features: [
        'Application guidance',
        'University selection',
        'Admission processing',
        'Document preparation',
        'Application tracking',
        'Email support'
      ],
      highlighted: false
    },
    {
      name: 'Standard Package',
      description: 'Most popular choice',
      price: 'Best Value',
      features: [
        'Everything in Basic',
        'Visa guidance',
        'Required documents preparation',
        'Interview coaching',
        'Priority support',
        'Deadline management'
      ],
      highlighted: true
    },
    {
      name: 'Full Support',
      description: 'Complete end-to-end service',
      price: 'Premium',
      features: [
        'Admission + Visa support',
        'Accommodation assistance',
        'Airport pickup arrangement',
        'Total relocation support',
        'Post-arrival orientation',
        '24/7 dedicated consultant'
      ],
      highlighted: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-20 bg-white dark:bg-[#1B3C53] relative overflow-hidden">
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.15 }}>
        <LiquidEther
          colors={['#1B3C53', '#456882', '#D2C1B6']}
          mouseForce={18}
          cursorSize={90}
          isViscous={false}
          resolution={0.5}
          autoDemo={true}
          autoSpeed={0.4}
          autoIntensity={1.8}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl text-[#1B3C53] dark:text-[#F9F3EF] mb-6">
            Choose Your Perfect Package
          </h2>
          <p className="text-xl text-[#456882] dark:text-[#D2C1B6]">
            Three levels of support designed to match your needs and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative dark:bg-[#0F1F2E] dark:border-[#456882]/30 ${pkg.highlighted ? 'border-[#1B3C53] dark:border-[#D2C1B6] border-2 shadow-xl' : 'border-[#D2C1B6]/30'}`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#1B3C53] dark:bg-[#D2C1B6] text-white dark:text-[#1B3C53] px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2 text-[#1B3C53] dark:text-[#F9F3EF]">{pkg.name}</CardTitle>
                <CardDescription className="text-[#456882] dark:text-[#D2C1B6]">{pkg.description}</CardDescription>
                <div className="mt-4 text-3xl text-[#1B3C53] dark:text-[#F9F3EF]">{pkg.price}</div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#1B3C53] dark:text-[#D2C1B6] flex-shrink-0 mt-0.5" />
                      <span className="text-[#456882] dark:text-[#D2C1B6]">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  className={`w-full ${pkg.highlighted ? 'bg-[#1B3C53] hover:bg-[#456882] dark:bg-[#D2C1B6] dark:text-[#1B3C53] dark:hover:bg-[#F9F3EF]' : 'bg-[#456882] hover:bg-[#1B3C53] dark:bg-[#456882] dark:hover:bg-[#D2C1B6]'}`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}