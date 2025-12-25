import { Button } from './ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9F3EF] via-white to-[#D2C1B6]/30 dark:from-[#0F1F2E] dark:via-[#1B3C53] dark:to-[#456882]/30 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#D2C1B6]/40 dark:bg-[#456882]/40 text-[#1B3C53] dark:text-[#F9F3EF] rounded-full">
                <CheckCircle className="w-4 h-4" />
                Your Trusted Study Abroad Partner
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl text-[#1B3C53] dark:text-[#F9F3EF]">
              Your Journey to Global Education Starts Here
            </h1>
            
            <p className="text-xl text-[#456882] dark:text-[#D2C1B6]">
              AMIGOS AGENCY helps students secure admissions in universities abroad. From choosing the right program to settling in your new country — we support you at every step.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToContact} size="lg" className="bg-[#1B3C53] hover:bg-[#456882] dark:bg-[#D2C1B6] dark:text-[#1B3C53] dark:hover:bg-[#F9F3EF]">
                Start Your Application
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="outline" 
                size="lg"
                className="border-[#1B3C53] text-[#1B3C53] hover:bg-[#D2C1B6]/20 dark:border-[#D2C1B6] dark:text-[#D2C1B6] dark:hover:bg-[#456882]/30"
              >
                Explore Services
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-4">
              <div>
                <div className="text-3xl text-[#1B3C53] dark:text-[#F9F3EF] mb-1">10+</div>
                <div className="text-sm text-[#456882] dark:text-[#D2C1B6]">Countries</div>
              </div>
              <div>
                <div className="text-3xl text-[#1B3C53] dark:text-[#F9F3EF] mb-1">100%</div>
                <div className="text-sm text-[#456882] dark:text-[#D2C1B6]">Scholarship Options</div>
              </div>
              <div>
                <div className="text-3xl text-[#1B3C53] dark:text-[#F9F3EF] mb-1">24/7</div>
                <div className="text-sm text-[#456882] dark:text-[#D2C1B6]">Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1648301033733-44554c74ec50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc2NTM1ODgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="International students at university"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-[#1B3C53] p-6 rounded-xl shadow-xl border border-[#D2C1B6] dark:border-[#456882]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#D2C1B6]/40 dark:bg-[#456882]/40 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-[#1B3C53] dark:text-[#F9F3EF]" />
                </div>
                <div>
                  <div className="text-sm text-[#456882] dark:text-[#D2C1B6]">Success Rate</div>
                  <div className="text-xl text-[#1B3C53] dark:text-[#F9F3EF]">98% Approval</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}