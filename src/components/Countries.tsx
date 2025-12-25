import { Globe } from 'lucide-react';

export function Countries() {
  const countries = [
    { name: 'Egypt', flag: '🇪🇬' },
    { name: 'China', flag: '🇨🇳' },
    { name: 'Turkey', flag: '🇹🇷' },
    { name: 'Northern Cyprus', flag: '🇨🇾' },
    { name: 'Malaysia', flag: '🇲🇾' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'Ireland', flag: '🇮🇪' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Various European Countries', flag: '🇪🇺' }
  ];

  return (
    <section id="countries" className="py-20 bg-gradient-to-br from-[#1B3C53] to-[#456882] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-5xl mb-6">
            Study Destinations We Cover
          </h2>
          <p className="text-xl text-[#D2C1B6]">
            Access top universities across multiple countries worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {countries.map((country, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors cursor-pointer"
            >
              <div className="text-4xl mb-3">{country.flag}</div>
              <div className="text-sm">{country.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}