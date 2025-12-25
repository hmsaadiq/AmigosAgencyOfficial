import { Users, Heart, Zap, Shield } from 'lucide-react';
import LiquidEther from './LiquidEther';

export function About() {
  const values = [
    {
      icon: Users,
      title: 'Friendly & Approachable',
      description: 'We treat every student like family — AMIGOS means friends!'
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Even emergency cases and late applications — we make it happen.'
    },
    {
      icon: Shield,
      title: 'Trustworthy & Transparent',
      description: 'No hidden fees, no scams — just real admissions and real results.'
    },
    {
      icon: Heart,
      title: 'Hands-On Support',
      description: 'We go the extra mile, from application to arrival and beyond.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#1B3C53] relative overflow-hidden">
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.15 }}>
        <LiquidEther
          colors={['#1B3C53', '#456882', '#D2C1B6']}
          mouseForce={15}
          cursorSize={80}
          isViscous={false}
          resolution={0.5}
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={1.5}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl text-[#1B3C53] dark:text-[#F9F3EF] mb-6">
            What is AMIGOS AGENCY?
          </h2>
          <p className="text-xl text-[#456882] dark:text-[#D2C1B6]">
            We are an international study-abroad and student placement company that helps students secure admissions in universities abroad. We support students at every stage — from choosing a program to landing in their new country and starting school.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D2C1B6]/40 dark:bg-[#456882]/40 rounded-2xl">
                <value.icon className="w-8 h-8 text-[#1B3C53] dark:text-[#F9F3EF]" />
              </div>
              <h3 className="text-xl text-[#1B3C53] dark:text-[#F9F3EF]">{value.title}</h3>
              <p className="text-[#456882] dark:text-[#D2C1B6]">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}