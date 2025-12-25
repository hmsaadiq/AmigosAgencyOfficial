import GridMotion from './GridMotion';
import { GraduationCap, Award, FileText, Home, Plane, Globe } from 'lucide-react';

export function ServicesGrid() {
  const serviceItems = [
    // Row 1
    'https://images.unsplash.com/photo-1648301033733-44554c74ec50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc2NTM1ODgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    <div key="service-1" className="flex flex-col items-center justify-center h-full">
      <GraduationCap className="w-12 h-12 mb-3 text-[#D2C1B6]" />
      <div className="text-lg">Admissions</div>
    </div>,
    'https://images.unsplash.com/photo-1631599143424-5bc234fbebf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY1MzY5NzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    <div key="service-2" className="flex flex-col items-center justify-center h-full">
      <Award className="w-12 h-12 mb-3 text-[#D2C1B6]" />
      <div className="text-lg">Scholarships</div>
    </div>,
    'https://images.unsplash.com/photo-1762438135827-428acc0e8941?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3VjY2VzcyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2NTI4MTA1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    <div key="service-3" className="flex flex-col items-center justify-center h-full">
      <FileText className="w-12 h-12 mb-3 text-[#D2C1B6]" />
      <div className="text-lg">Visa Support</div>
    </div>,
    
    // Row 2
    <div key="info-1" className="flex flex-col items-center justify-center h-full px-4">
      <div className="text-2xl mb-2">🎓</div>
      <div className="text-sm text-center">University Selection</div>
    </div>,
    'https://images.unsplash.com/photo-1763811938846-0de457436794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWJyYXJ5JTIwc3R1ZHl8ZW58MXx8fHwxNzY1MzM3NzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    <div key="info-2" className="flex flex-col items-center justify-center h-full px-4">
      <div className="text-2xl mb-2">✈️</div>
      <div className="text-sm text-center">Travel Assistance</div>
    </div>,
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHRyYXZlbHxlbnwxfHx8fDE3NjUzMjEyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    <div key="info-3" className="flex flex-col items-center justify-center h-full px-4">
      <div className="text-2xl mb-2">🏠</div>
      <div className="text-sm text-center">Accommodation</div>
    </div>,
    'https://images.unsplash.com/photo-1653250198948-1405af521dbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwZ3JhZHVhdGlvbiUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2NTQwMDQxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    <div key="service-4" className="flex flex-col items-center justify-center h-full">
      <Home className="w-12 h-12 mb-3 text-[#D2C1B6]" />
      <div className="text-lg">Relocation</div>
    </div>,

    // Row 3
    'https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjUzOTk5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    <div key="stat-1" className="flex flex-col items-center justify-center h-full">
      <div className="text-3xl mb-2">98%</div>
      <div className="text-sm">Success Rate</div>
    </div>,
    'https://images.unsplash.com/photo-1631599143424-5bc234fbebf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY1MzY5NzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    <div key="stat-2" className="flex flex-col items-center justify-center h-full">
      <div className="text-3xl mb-2">10+</div>
      <div className="text-sm">Countries</div>
    </div>,
    'https://images.unsplash.com/photo-1648301033733-44554c74ec50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc2NTM1ODgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    <div key="service-5" className="flex flex-col items-center justify-center h-full">
      <Plane className="w-12 h-12 mb-3 text-[#D2C1B6]" />
      <div className="text-lg">Travel Support</div>
    </div>,
    'https://images.unsplash.com/photo-1762438135827-428acc0e8941?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3VjY2VzcyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2NTI4MTA1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',

    // Row 4
    <div key="info-4" className="flex flex-col items-center justify-center h-full px-4">
      <div className="text-2xl mb-2">📚</div>
      <div className="text-sm text-center">Course Selection</div>
    </div>,
    'https://images.unsplash.com/photo-1763811938846-0de457436794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWJyYXJ5JTIwc3R1ZHl8ZW58MXx8fHwxNzY1MzM3NzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    <div key="info-5" className="flex flex-col items-center justify-center h-full px-4">
      <div className="text-2xl mb-2">🌍</div>
      <div className="text-sm text-center">Global Network</div>
    </div>,
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHRyYXZlbHxlbnwxfHx8fDE3NjUzMjEyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    <div key="service-6" className="flex flex-col items-center justify-center h-full">
      <Globe className="w-12 h-12 mb-3 text-[#D2C1B6]" />
      <div className="text-lg">Worldwide</div>
    </div>,
    'https://images.unsplash.com/photo-1653250198948-1405af521dbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwZ3JhZHVhdGlvbiUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2NTQwMDQxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    <div key="stat-3" className="flex flex-col items-center justify-center h-full">
      <div className="text-3xl mb-2">24/7</div>
      <div className="text-sm">Support</div>
    </div>,
  ];

  return <GridMotion items={serviceItems} gradientColor="#1B3C53" />;
}