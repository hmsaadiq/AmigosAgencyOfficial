import { Target, Clock, HandshakeIcon, BadgeCheck, Users2, Sparkles } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: HandshakeIcon,
      title: 'Hands-On Support',
      description: 'We go the extra mile for every student, ensuring personalized attention throughout your journey.'
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Even emergency cases and last-minute applications — we rush applications and secure fast placements.'
    },
    {
      icon: BadgeCheck,
      title: 'Strong University Partnerships',
      description: 'Direct connections with top universities worldwide for faster admissions and better opportunities.'
    },
    {
      icon: Sparkles,
      title: '100% Scholarship Opportunities',
      description: 'Access to exclusive full scholarships that others don\'t offer — your dream education can be free.'
    },
    {
      icon: Users2,
      title: 'Real Student Follow-Ups',
      description: 'We don\'t just get you admitted — we ensure you settle in smoothly and succeed.'
    },
    {
      icon: Target,
      title: 'Transparent Pricing',
      description: 'No hidden fees, no scams. Just honest service and real results you can trust.'
    }
  ];

  return (
    <section className="py-20 bg-[#F9F3EF] dark:bg-[#0F1F2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl text-[#1B3C53] dark:text-[#F9F3EF] mb-6">
            Why Choose AMIGOS AGENCY?
          </h2>
          <p className="text-xl text-[#456882] dark:text-[#D2C1B6]">
            We solve the problems that matter most to students and parents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white dark:bg-[#1B3C53] rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-[#D2C1B6]/30 dark:border-[#456882]/30">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#D2C1B6]/40 dark:bg-[#456882]/40 text-[#1B3C53] dark:text-[#F9F3EF] rounded-xl mb-4">
                <reason.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl text-[#1B3C53] dark:text-[#F9F3EF] mb-3">{reason.title}</h3>
              <p className="text-[#456882] dark:text-[#D2C1B6]">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#1B3C53] to-[#456882] dark:from-[#0F1F2E] dark:to-[#1B3C53] rounded-2xl p-8 md:p-12 text-white border dark:border-[#456882]/30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl mb-4">
                Who We Help
              </h3>
              <ul className="space-y-3 text-[#D2C1B6]">
                <li className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  High school leavers
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  Diploma holders
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  Transfer students
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  Students who missed deadlines
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  Working adults returning to school
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  Students seeking full scholarships
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl mb-4">
                Problems We Solve
              </h3>
              <ul className="space-y-3 text-[#D2C1B6]">
                <li className="flex items-start gap-3">
                  <span className="text-white">→</span>
                  <span>Confused about university choices? We provide professional guidance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white">→</span>
                  <span>Afraid of scams? We offer transparency and real admissions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white">→</span>
                  <span>Document mistakes? We handle all corrections and compliance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white">→</span>
                  <span>Lost after arrival? We settle you in smoothly.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}