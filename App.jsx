import React, { useState, useEffect, useRef } from 'react';
// Import dibersihkan dari Instagram dan Twitter agar tidak error lagi
import { 
  ChevronDown, 
  MessageSquare, 
  Mic, 
  BookOpen, 
  ChevronRight, 
  Mail, 
  Menu, 
  X,
  Award,
  Users,
  Flame,
  Wind,
  Sparkles,
  Info,
  Quote,
  ShieldCheck,
  Scale,
  Zap,
  Gavel,
  BrainCircuit,
  MessageCircleCode,
  CircuitBoard,
  Cpu,
  Layers,
  Calendar,
  Trophy,
  Rocket,
  Crown,
  ScrollText,
  MousePointer2,
  ArrowDown,
  Terminal,
  Network,
  Feather,
  Sparkle,
  Share2,
  Compass,
  Star,
  Home,
  Timer,
  Send,
  Globe
} from 'lucide-react';

// --- CUSTOM SOCIAL ICONS (Solusi permanen biar gak error export) ---
const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

// --- Global Scroll Reveal Component ---
const ScrollReveal = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    }, { threshold: 0.1 });
    
    const current = domRef.current;
    if (current) observer.observe(current);
    return () => {
        if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// --- Core Helper Visual Components ---

const GirihPattern = ({ className }) => (
  <svg viewBox="0 0 100 100" className={`opacity-10 pointer-events-none ${className}`}>
    <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" fill="none" stroke="#FFD700" strokeWidth="0.5" />
    <path d="M50 0 L50 100 M0 25 L100 75 M0 75 L100 25" stroke="#FFD700" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="25" fill="none" stroke="#FFD700" strokeWidth="0.5" />
  </svg>
);

const SimurghFeather = ({ className, delay = 0 }) => (
  <div className={`absolute pointer-events-none opacity-20 animate-feather-drift ${className}`} style={{ animationDelay: `${delay}s` }}>
    <svg width="40" height="120" viewBox="0 0 40 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 0C20 0 35 30 35 60C35 90 20 120 20 120C20 120 5 90 5 60C5 30 20 0 20 0Z" fill="url(#featherGrad)" />
      <defs>
        <linearGradient id="featherGrad" x1="20" y1="0" x2="20" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD700" />
          <stop offset="1" stopColor="#E3242B" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const MythicBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#E3242B]/5 blur-[120px] rounded-full animate-pulse"></div>
    <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-[#FFD700]/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    
    {[...Array(3)].map((_, i) => (
      <div 
        key={i} 
        className="absolute opacity-[0.03] animate-bird-drift"
        style={{ 
          top: `${20 + (i * 25)}%`, 
          left: `${-10 + (i * 5)}%`, 
          animationDelay: `${i * 4}s`,
          transform: `scale(${0.5 + i * 0.2})`
        }}
      >
        <svg width="200" height="100" viewBox="0 0 200 100" fill="white">
          <path d="M0,50 Q50,0 100,50 T200,50 Q150,100 100,50 T0,50 Z" />
        </svg>
      </div>
    ))}

    <svg width="100%" height="100%" className="absolute inset-0 opacity-[0.15]">
      <pattern id="logic-grid" width="100" height="100" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#FFD700" />
        <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#FFD700" strokeWidth="0.1" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#logic-grid)" />
      
      {[...Array(12)].map((_, i) => (
        <circle key={i} r="1.5" fill="#FFD700" className="animate-node-pulse">
          <animateMotion 
            dur={`${15 + i * 2}s`} 
            repeatCount="indefinite" 
            path={`M ${Math.random()*1000},${Math.random()*1000} L ${Math.random()*1000},${Math.random()*1000} Q ${Math.random()*500},${Math.random()*500} ${Math.random()*1000},${Math.random()*1000}`} 
          />
        </circle>
      ))}
    </svg>
  </div>
);

const SectionDivider = () => (
  <div className="w-full flex items-center justify-center py-20 opacity-20 group">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
    <div className="mx-8 relative">
       <div className="absolute inset-0 bg-[#FFD700]/40 blur-md rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
       <GirihPattern className="w-12 h-12 relative z-10 text-[#FFD700]" />
    </div>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
  </div>
);

// --- Navbar Component ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Legend', href: '#legend' },
    { name: 'Debate Arena', href: '#categories' },
    { name: 'Timeline', href: '#timeline' },
  ];

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md py-3 border-b border-[#FFD700]/10' : 'bg-transparent py-6'}`}>
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#FFD700] to-[#E3242B] transition-all duration-100" style={{ width: `${scrollProgress}%` }}></div>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={scrollToTop} className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 bg-[#FFD700]/10 backdrop-blur-md border border-[#FFD700]/30 rounded-xl flex items-center justify-center text-[#FFD700] transition-all duration-500 group-hover:bg-[#FFD700] group-hover:text-[#0A0A0A] group-hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] group-active:scale-90 relative">
            <Home size={20} className="transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 rounded-xl border border-[#FFD700] scale-100 opacity-0 group-hover:animate-ping-slow pointer-events-none"></div>
          </div>
          <span className="font-serif text-2xl font-bold tracking-wider text-[#FFD700]">SMASH 2026</span>
        </button>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-[#FFD700] transition-colors uppercase tracking-widest text-gray-300 relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#FFD700] transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button className="bg-transparent border border-[#FFD700] text-[#FFD700] px-6 py-2 rounded-full hover:bg-[#FFD700] hover:text-[#0A0A0A] transition-all duration-300 text-sm font-bold tracking-tighter uppercase shadow-[0_0_15px_rgba(255,215,0,0.2)] hover:shadow-[0_0_25px_rgba(255,215,0,0.4)]">Register</button>
        </div>
        <button className="md:hidden text-[#FFD700]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0A0A0A] border-b border-[#FFD700]/20 py-8 px-6 flex flex-col gap-6 animate-fadeIn">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-lg font-serif text-[#FFD700]"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-[#FFD700] text-[#0A0A0A] py-3 rounded-lg font-bold">REGISTER NOW</button>
        </div>
      )}
    </nav>
  );
};

// --- Countdown Timer Components ---

const TimeUnit = ({ value, label, max }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / max) * circumference;

  return (
    <div className="flex flex-col items-center group relative cursor-default">
      <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center transition-all duration-500 transform group-hover:scale-110">
        <div className="absolute inset-0 bg-[#FFD700]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle cx="50%" cy="50%" r={radius} stroke="rgba(255, 215, 0, 0.1)" strokeWidth="2" fill="none" />
          <circle cx="50%" cy="50%" r={radius} stroke="url(#timerGrad)" strokeWidth="3" strokeLinecap="round" fill="none" strokeDasharray={circumference} style={{ strokeDashoffset, transition: 'stroke-dashoffset 1s linear', filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.6))' }} />
          <defs><linearGradient id="timerGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#FFD700" /><stop offset="100%" stopColor="#E3242B" /></linearGradient></defs>
        </svg>
        <div className="z-10 bg-[#0A0A0A]/40 backdrop-blur-xl border border-[#FFD700]/20 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex flex-col items-center justify-center shadow-2xl group-hover:border-[#FFD700]/60 transition-all duration-500 overflow-hidden">
          <span className="text-2xl md:text-4xl font-serif font-black text-white relative z-10">{value}</span>
        </div>
        <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity"><Sparkle size={16} className="text-[#FFD700] animate-spin-slow" /></div>
      </div>
      <span className="mt-4 text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#FF8C00] font-black group-hover:text-white transition-colors duration-300">{label}</span>
    </div>
  );
};

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-04-13T00:00:00") - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex gap-2 md:gap-10 justify-center md:justify-start mt-12 mb-8 relative">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent -translate-y-1/2 pointer-events-none"></div>
      <TimeUnit value={timeLeft.days} label="Days" max={60} />
      <TimeUnit value={timeLeft.hours} label="Hrs" max={24} />
      <TimeUnit value={timeLeft.minutes} label="Min" max={60} />
      <TimeUnit value={timeLeft.seconds} label="Sec" max={60} />
    </div>
  );
};

// --- Contact Section Component ---

const ContactForge = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const boxRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!boxRef.current) return;
    const rect = boxRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <ScrollReveal className="px-6 py-40">
      <div 
        ref={boxRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
        className="max-w-5xl mx-auto relative group perspective-1000"
      >
        <div 
          className="absolute -inset-10 bg-gradient-to-r from-[#FFD700]/20 to-[#E3242B]/20 rounded-[80px] blur-[100px] opacity-0 group-hover:opacity-100 transition-all duration-1000 pointer-events-none"
          style={{ transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)` }}
        ></div>

        <div className="relative glass border border-[#FFD700]/20 rounded-[50px] p-10 md:p-20 overflow-hidden flex flex-col items-center text-center transition-all duration-700 hover:border-[#FFD700]/50 hover:shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-[#0A0A0A] pointer-events-none">
             <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-1000" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #FFD700 0%, transparent 70%)' }}></div>
          </div>

          <div className="relative z-10">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#FFD700] to-[#E3242B] rounded-3xl mb-12 flex items-center justify-center rotate-45 group-hover:rotate-[135deg] transition-all duration-1000 shadow-[0_0_40px_rgba(255,215,0,0.4)]">
               <Mail size={40} className="text-[#0A0A0A] -rotate-45 group-hover:-rotate-[135deg] transition-all duration-1000" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">Forge Your <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E3242B]">Message.</span></h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light">Do you have a question for the council or a petition for the arena? Reach out to the SMASH 2026 administrative forge.</p>
            <a href="mailto:efos.sman1sda@gmail.com" className="inline-flex items-center gap-4 px-12 py-5 bg-white text-[#0A0A0A] font-black rounded-2xl hover:bg-[#FFD700] transition-all transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,215,0,0.3)] uppercase tracking-[0.2em] text-sm group/btn">
              Contact Administrative <Send size={20} className="group-hover/btn:translate-x-2 group-hover/btn:-translate-y-1 transition-transform" />
            </a>
            <div className="mt-16 flex items-center justify-center gap-8 opacity-40">
               <div className="w-12 h-px bg-white"></div>
               <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white">Council Response: 24-48h</span>
               <div className="w-12 h-px bg-white"></div>
            </div>
          </div>
          <GirihPattern className="absolute -top-10 -right-10 w-48 h-48 opacity-[0.05] rotate-12 group-hover:rotate-45 transition-transform duration-1000" />
          <GirihPattern className="absolute -bottom-10 -left-10 w-48 h-48 opacity-[0.05] -rotate-12 group-hover:-rotate-45 transition-transform duration-1000" />
        </div>
      </div>
    </ScrollReveal>
  );
};

// --- Arena and Protocol Components ---

const DebateRuleItem = ({ rule, index }) => (
  <div className="relative group/rule w-full cursor-default perspective-1000">
    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#B8860B] translate-x-[-101%] group-hover/rule:translate-x-0 transition-transform duration-700 cubic-bezier(0.19, 1, 0.22, 1) opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent scale-x-0 group-hover/rule:scale-x-100 transition-transform duration-500 origin-left"></div>
      <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-[#FFD700] to-transparent scale-x-0 group-hover/rule:scale-x-100 transition-transform duration-500 origin-right"></div>
      <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover/rule:animate-glint"></div>
    </div>
    <div className="relative z-10 flex items-center gap-6 p-6 glass border border-white/5 rounded-2xl transition-all duration-500 group-hover/rule:border-[#FFD700]/50 group-hover/rule:shadow-[0_10px_30px_rgba(255,215,0,0.15)] group-hover/rule:-translate-y-1">
      <div className="relative w-12 h-12 flex-shrink-0">
        <div className="absolute inset-0 bg-[#FFD700]/30 rounded-xl blur-md scale-0 group-hover/rule:scale-150 group-hover/rule:opacity-100 opacity-0 transition-all duration-500 animate-pulse"></div>
        <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-[#FFD700] to-[#FF8C00] flex items-center justify-center text-[#0A0A0A] font-black font-serif text-xl shadow-lg z-10 group-hover/rule:scale-110 transition-transform">{index + 1}</div>
        <Sparkle size={14} className="absolute -top-1 -right-1 text-[#FFD700] opacity-0 group-hover/rule:opacity-100 transition-opacity animate-spin-slow z-20" />
      </div>
      <p className="text-gray-400 text-base font-light group-hover/rule:text-white transition-colors tracking-wide leading-relaxed">{rule}</p>
    </div>
  </div>
);

const DebateFeaturedTrack = ({ setActivePopUp }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };
  const debateRules = [
    "British Parliamentary format (BPD).", 
    "Motions range from ethics to geopolitics.", 
    "15 minutes preparation per round.", 
    "Virtual Pre-lims via Zoom platform.", 
    "Grand Finals Online via Virtual Arena."
  ];
  return (
    <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={() => setMousePos({ x: 0, y: 0 })} className="relative group max-w-6xl mx-auto py-20 px-6">
      <SimurghFeather className="top-10 left-10 scale-150 rotate-45" delay={0} /><SimurghFeather className="bottom-20 right-20 scale-110 -rotate-12" delay={2} />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30 z-0"><div className="absolute top-1/2 left-0 w-64 h-px bg-gradient-to-r from-transparent to-[#FFD700]/20"></div><div className="absolute top-1/2 right-0 w-64 h-px bg-gradient-to-l from-transparent to-[#FFD700]/20"></div></div>
      <div className="relative glass border border-[#FFD700]/10 rounded-[60px] p-8 md:p-20 flex flex-col lg:flex-row items-center gap-16 transition-all duration-700 hover:border-[#FFD700]/30 bg-white/[0.01] z-10 shadow-2xl">
        <div className="relative w-80 h-80 flex-shrink-0 transition-transform duration-300 ease-out" style={{ transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px) rotateY(${mousePos.x * 15}deg) rotateX(${-mousePos.y * 15}deg)` }}>
          <div className="absolute inset-0 bg-[#FFD700]/5 rounded-full blur-3xl animate-pulse"></div>
          <svg viewBox="0 0 200 200" className="w-full h-full relative z-10 drop-shadow-[0_0_20px_rgba(255,215,0,0.2)] overflow-visible">
            <defs><filter id="debateGlow"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
            <g className="animate-spin-slow" style={{ animationDuration: '80s' }}><path d="M100 5 L140 60 L195 100 L140 140 L100 195 L60 140 L5 100 L60 60 Z" fill="none" stroke="#FFD700" strokeWidth="0.5" opacity="0.2" strokeDasharray="10 10" /></g>
            <g className="transition-transform duration-700" style={{ transform: `translateX(${mousePos.x * -10}px)` }}><path d="M40 160 Q40 100 70 80 L70 170 Z" fill="#FFD700" opacity="0.6" /><circle cx="55" cy="75" r="14" fill="#FFD700" opacity="0.6" /></g>
            <g className="transition-transform duration-700" style={{ transform: `translateX(${mousePos.x * 10}px)` }}><path d="M160 160 Q160 100 130 80 L130 170 Z" fill="#FF8C00" opacity="0.6" /><circle cx="145" cy="75" r="14" fill="#FF8C00" opacity="0.6" /></g>
            <g filter="url(#debateGlow)"><circle cx="100" cy="100" r="12" fill="white"><animate attributeName="r" values="10;14;10" dur="1.5s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.8;0.4;0.8" dur="1.5s" repeatCount="indefinite" /></circle><path d="M100 70 L100 130 M70 100 L130 100" stroke="#FFD700" strokeWidth="2" className="animate-pulse" /></g>
          </svg>
          <div className="absolute -top-4 -right-4 w-14 h-14 glass rounded-2xl flex items-center justify-center text-[#FFD700]/60 animate-bounce shadow-xl border border-white/5"><BrainCircuit size={28} /></div>
          <div className="absolute -bottom-4 -left-4 w-14 h-14 glass rounded-2xl flex items-center justify-center text-[#FF8C00]/60 animate-pulse shadow-xl border border-white/5" style={{ animationDelay: '1.2s' }}><MessageCircleCode size={28} /></div>
        </div>
        <div className="flex-1 z-20">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#FFD700]/5 border border-[#FFD700]/20 text-[#FFD700] text-[10px] font-black uppercase tracking-[0.6em] mb-10">
             <Globe size={14} className="opacity-60" /> FULLY ONLINE ARENA
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-black text-white mb-12 tracking-tighter leading-[0.85]">Logic <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E3242B]">Protocol.</span></h2>
          <div className="flex flex-col gap-5 mb-14 relative"><div className="absolute left-6 top-10 bottom-10 w-px bg-gradient-to-b from-[#FFD700] via-[#FF8C00] to-[#E3242B] opacity-30"><div className="w-full h-20 bg-white shadow-[0_0_10px_#fff] animate-logic-flow"></div></div>{debateRules.map((rule, idx) => (<DebateRuleItem key={idx} rule={rule} index={idx} />))}</div>
          <div className="flex flex-col sm:flex-row gap-6"><button className="flex-1 px-12 py-5 bg-[#FFD700] text-[#0A0A0A] font-black rounded-2xl hover:brightness-110 transition-all transform hover:-translate-y-1 shadow-[0_20px_40px_rgba(255,215,0,0.2)] uppercase tracking-widest text-xs">Begin Registration</button><button className="flex-1 px-12 py-5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-3"><BookOpen size={18} /> Guidebook</button></div>
        </div>
      </div>
    </div>
  );
};

// --- Timeline Components ---

const TimelineItem = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.2 });
    if (itemRef.current) observer.observe(itemRef.current);
    return () => { if (itemRef.current) observer.unobserve(itemRef.current); };
  }, []);
  const Icon = item.icon;
  const isEven = index % 2 === 0;
  return (
    <div ref={itemRef} className={`relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full min-h-[250px] z-10`}>
      <div className={`hidden md:flex flex-1 ${isEven ? 'justify-end' : 'justify-start'} transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 ' + (isEven ? 'translate-x-10' : '-translate-x-10')}`}>
        <div className="group cursor-default"><div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 font-bold uppercase tracking-widest text-sm transition-all group-hover:border-[#FFD700]/40 group-hover:text-[#FFD700] group-hover:bg-[#FFD700]/5">{item.date}</div></div>
      </div>
      <div className="relative flex flex-col items-center flex-shrink-0">
        <div className={`w-16 h-16 rounded-full bg-[#0A0A0A] border-2 border-[#FFD700]/30 z-20 flex items-center justify-center transition-all duration-700 ${isVisible ? 'scale-100 rotate-0 shadow-[0_0_30px_rgba(255,215,0,0.2)] border-[#FFD700]' : 'scale-0 rotate-180 opacity-0'}`}>
           <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-[#FFD700]"></div>
           <GirihPattern className="absolute inset-0 p-3 opacity-20 animate-spin-slow" />
           <Icon size={24} className="text-[#FFD700] relative z-10" />
        </div>
      </div>
      <div className={`flex-1 w-full md:w-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 ' + (isEven ? '-translate-x-10' : '-translate-x-10')}`}>
        <div className="glass p-8 rounded-[40px] border border-white/5 hover:border-[#FFD700]/20 group/card transition-all duration-500 relative overflow-hidden bg-white/[0.01] hover:bg-[#FFD700]/[0.02]">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FFD700]/5 rounded-full blur-3xl group-hover/card:bg-[#FFD700]/10 transition-colors"></div>
          <div className="md:hidden text-[#FFD700] font-black text-xs uppercase tracking-[0.3em] mb-4">{item.date}</div>
          <h4 className="font-serif text-3xl font-bold text-white mb-4 group-hover/card:text-[#FFD700] transition-colors tracking-wide leading-tight">{item.t}</h4>
          <p className="text-gray-400 font-light leading-relaxed text-lg italic">"{item.d}"</p>
        </div>
      </div>
    </div>
  );
};

// --- Illustration ---

const PersianSwordIllustration = () => (
  <div className="relative w-full max-w-lg mx-auto py-10">
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="absolute w-1 h-1 bg-[#FFD700] rounded-full animate-float-ember"
          style={{ top: `${Math.random()*100}%`, left: `${Math.random()*100}%`, animationDelay: `${Math.random()*5}s`, opacity: Math.random() }}></div>
      ))}
    </div>
    <svg viewBox="0 -100 500 700" className="w-full h-auto overflow-visible">
      <defs>
        <linearGradient id="bladeGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FFFFFF" /><stop offset="50%" stopColor="#D1D5DB" /><stop offset="100%" stopColor="#4B5563" /></linearGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#FFD700" /><stop offset="100%" stopColor="#B8860B" /></linearGradient>
        <linearGradient id="fireGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FFD700" /><stop offset="50%" stopColor="#FF8C00" /><stop offset="100%" stopColor="#E3242B" /></linearGradient>
        <filter id="heavyGlow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="15" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <g transform="translate(250, 480)">
        <circle r="180" fill="url(#fireGrad)" className="opacity-10 animate-solar-flare" />
        <g className="animate-spin-slow"><circle r="160" fill="none" stroke="#FFD700" strokeWidth="0.5" opacity="0.25" /><rect x="-110" y="-110" width="220" height="220" fill="none" stroke="#FFD700" strokeWidth="0.5" transform="rotate(45)" opacity="0.1" /></g>
        <circle r="170" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.1" className="animate-ping-slow" />
      </g>
      <g transform="translate(250, 480)" className="animate-sword-float">
        <ellipse cx="0" cy="120" rx="60" ry="10" fill="black" opacity="0.3" />
        <path d="M0,-30 C0,-30 100,-180 100,-330 C100,-430 50,-460 30,-460 C50,-430 70,-330 -5,-35 L0,-30" fill="url(#bladeGrad)" />
        <rect x="-40" y="-35" width="80" height="15" rx="5" fill="url(#goldGrad)" />
        <rect x="-15" y="-20" width="30" height="70" rx="4" fill="#1f1f1f" />
        <g transform="translate(-20, 50)">
           <path d="M0,0 Q10,20 20,0 Q40,10 40,30 Q20,45 0,30 Z" fill="url(#goldGrad)" />
           <circle cx="15" cy="15" r="2" fill="#E3242B" className="animate-pulse" />
        </g>
        <path d="M0,-30 C0,-30 100,-180 100,-330 C100,-430 50,-460 30,-460" fill="none" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" opacity="0.8" filter="url(#heavyGlow)" className="animate-pulse" />
      </g>
    </svg>
  </div>
);

const LegendInteractiveKeyword = ({ text, infoTitle, infoBody, setActivePopUp }) => (
  <span onClick={(e) => { e.stopPropagation(); setActivePopUp({ title: infoTitle, body: infoBody }); }} className="relative cursor-help group inline-block font-bold text-[#FFD700] transition-colors duration-300 hover:text-white mx-1">
    {text}<span className="absolute left-0 bottom-1 w-full h-[1px] bg-[#FFD700]/30 transition-all duration-500 group-hover:w-full group-hover:bg-[#FFD700]"></span>
    <span className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity"><Sparkles size={10} className="text-[#FFD700] animate-pulse" /></span>
  </span>
);

// --- Main App ---

export default function App() {
  const [activePopUp, setActivePopUp] = useState(null);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [signatureInView, setSignatureInView] = useState(false);
  const founderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setSignatureInView(true); }, { threshold: 0.3 });
    if (founderRef.current) observer.observe(founderRef.current);
    return () => { if (founderRef.current) observer.disconnect(); };
  }, []);

  const timelineItems = [
    { date: "April 13th - May 3rd, 2026", t: "The Valley of Quest", d: "Opening registration phase. Seek entry into the logic arena.", icon: Wind },
    { date: "May 4th - June 13th, 2026", t: "The Valley of Love", d: "Secondary registration phase. Dedicate your commitment to the path.", icon: Flame },
    { date: "June 19th, 2026", t: "Technical Meeting", d: "Scroll of rules revealed. Strategic guidance via Zoom platform.", icon: BookOpen },
    { date: "June 20th, 2026", t: "The Valley of Knowledge", d: "Virtual Preliminaries. Sharpen your analytic edge from any shore.", icon: Zap },
    { date: "June 21st, 2026", t: "The Valley of Unity", d: "Digital Grand Finals. Thirty voices unite in the virtual summit.", icon: Rocket },
    { date: "June 21st, 2026", t: "The Ascent Summit", d: "Virtual Awarding Ceremony. Realizing the Simurgh within.", icon: Crown }
  ];

  return (
    <div className="bg-[#0A0A0A] text-white font-['Inter'] selection:bg-[#FFD700] selection:text-[#0A0A0A] overflow-x-hidden scroll-smooth relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Inter:wght@300;400;600;700;800&display=swap');
        .font-serif { font-family: 'Cinzel', serif; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-slideUp { animation: slideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        @keyframes sword-float { 0%, 100% { transform: translate(250px, 480px) translateY(0) rotate(0deg); } 50% { transform: translate(250px, 480px) translateY(-15px) rotate(-1.5deg); } }
        .animate-sword-float { animation: sword-float 4s ease-in-out infinite; }
        @keyframes profile-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-profile-float { animation: profile-float 6s ease-in-out infinite; }
        @keyframes bird-drift { 0% { transform: translateX(-100px) rotate(0deg); opacity: 0; } 10% { opacity: 0.05; } 90% { opacity: 0.05; } 100% { transform: translateX(120vw) rotate(5deg); opacity: 0; } }
        .animate-bird-drift { animation: bird-drift 40s linear infinite; }
        @keyframes node-pulse { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.5); } }
        .animate-node-pulse { animation: node-pulse 4s ease-in-out infinite; }
        @keyframes border-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-border-rotate { animation: border-rotate 10s linear infinite; }
        @keyframes solar-flare { 0%, 100% { transform: scale(1); opacity: 0.15; } 50% { transform: scale(1.1); opacity: 0.22; } }
        .animate-solar-flare { animation: solar-flare 6s ease-in-out infinite; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 40s linear infinite; }
        @keyframes ping-slow { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(2); opacity: 0; } }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
        @keyframes signature { to { stroke-dashoffset: 0; } }
        .active-signature { animation: signature 2.5s cubic-bezier(0.45, 0, 0.55, 1) forwards; }
        @keyframes dot-reveal { 0% { opacity: 0; transform: scale(0); } 100% { opacity: 1; transform: scale(1); } }
        .animate-dot-reveal { opacity: 0; animation: dot-reveal 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        @keyframes logic-flow { 0% { top: 0; } 100% { top: 100%; } }
        .animate-logic-flow { animation: logic-flow 3s linear infinite; }
        @keyframes bounce-scroll { 0%, 20%, 50%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-10px); } 60% { transform: translateY(-5px); } }
        .animate-bounce-scroll { animation: bounce-scroll 2s infinite; }
        @keyframes feather-drift { 0% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(10px, 15px) rotate(5deg); } 50% { transform: translate(-5px, 25px) rotate(-3deg); } 100% { transform: translate(0, 0) rotate(0deg); } }
        .animate-feather-drift { animation: feather-drift 10s ease-in-out infinite; }
        @keyframes glint { 0% { left: -100%; } 100% { left: 100%; } }
        .animate-glint { animation: glint 1s cubic-bezier(0.4, 0, 0.2, 1); }
        .envelope-container { perspective: 1000px; cursor: pointer; transition: all 0.5s ease; }
        .envelope-wrapper { position: relative; width: 100%; height: 260px; transition: all 0.5s ease; margin-top: 100px; }
        .envelope-wrapper.open { margin-top: 250px; }
        .envelope-front { position: absolute; width: 100%; height: 100%; background: rgba(255, 215, 0, 0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255, 215, 0, 0.2); border-radius: 10px; z-index: 30; }
        .envelope-top { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255, 215, 0, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 215, 0, 0.2); border-radius: 10px; clip-path: polygon(0 0, 50% 50%, 100% 0); z-index: 40; transform-origin: top; transition: all 0.5s ease; }
        .envelope-wrapper.open .envelope-top { transform: rotateX(180deg); z-index: 10; }
        .letter-content { position: absolute; bottom: 0; left: 5%; width: 90%; background: #121212; border: 1px solid rgba(255, 215, 0, 0.3); padding: 40px; border-radius: 10px; transition: all 0.7s ease; z-index: 20; opacity: 0; transform: translateY(0); pointer-events: none; }
        .envelope-wrapper.open .letter-content { opacity: 1; transform: translateY(-380px); pointer-events: auto; }
        .glass { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px); border: 1px solid rgba(255, 215, 0, 0.1); }
      `}</style>

      <MythicBackground />
      <Navbar />

      {activePopUp && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#0A0A0A]/80 backdrop-blur-md animate-fadeIn">
          <div className="glass max-w-lg w-full p-8 md:p-12 rounded-[32px] border-[#FFD700]/30 shadow-[0_0_50px_rgba(255,215,0,0.1)] relative text-center">
            <button onClick={() => setActivePopUp(null)} className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"><X size={20} /></button>
            <div className="flex justify-center mb-6"><Sparkles size={40} className="text-[#FFD700] animate-pulse" /></div>
            <h3 className="font-serif text-3xl font-bold uppercase tracking-widest text-[#FFD700] mb-6">{activePopUp.title}</h3>
            <p className="text-gray-300 leading-relaxed text-lg italic">{activePopUp.body}</p>
          </div>
        </div>
      )}

      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#E3242B]/10 border border-[#E3242B]/30 text-[#FFD700] text-xs font-bold uppercase tracking-[0.3em] mb-6">
               <Globe size={14} className="text-[#FFD700]" /> National Online English Competition
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 uppercase tracking-tighter">Rise From <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E3242B]">The Embers.</span></h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed font-light text-balance">Forge your destiny. SMASH 2026 is the ultimate virtual arena where critical thinking meets the edge of creative excellence.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-10 py-4 bg-[#FFD700] text-[#0A0A0A] font-black rounded-xl hover:bg-[#FF8C00] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,215,0,0.3)] uppercase tracking-widest text-xs">Register Now</button>
              <button className="px-10 py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-all uppercase tracking-widest flex items-center justify-center gap-2 text-xs"><BookOpen size={18} /> Guidebook</button>
            </div>
            <CountdownTimer />
          </div>
          <div className="relative animate-fadeIn delay-300"><div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10 h-32 bottom-0"></div><PersianSwordIllustration /></div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce-scroll"><span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#FFD700]">Discover</span><MousePointer2 size={16} className="text-[#FFD700]" /></div>
      </section>

      <SectionDivider />

      <ScrollReveal id="legend" className="py-40 relative bg-[#0a0a0a] overflow-hidden">
        <GirihPattern className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16"><h2 className="font-serif text-4xl md:text-5xl font-bold text-[#FFD700] tracking-widest uppercase mb-4">The Ancient Decree</h2><p className="text-gray-500 uppercase tracking-[0.4em] text-xs">Hover or click to reveal the legend</p></div>
          <div className="max-w-4xl mx-auto envelope-container" onMouseEnter={() => setIsEnvelopeOpen(true)} onMouseLeave={() => setIsEnvelopeOpen(false)} onClick={() => setIsEnvelopeOpen(!isEnvelopeOpen)}>
            <div className={`envelope-wrapper ${isEnvelopeOpen ? 'open' : ''}`}>
              <div className="absolute inset-0 bg-[#0A0A0A] border border-[#FFD700]/20 rounded-xl z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]"></div>
              <div className="letter-content shadow-[0_0_50px_rgba(255,215,0,0.1)]"><div className="text-center"><ScrollText className="mx-auto mb-6 text-[#FFD700] opacity-50" size={32} /><p className="text-xl md:text-3xl text-gray-200 leading-loose font-light select-none italic">"<LegendInteractiveKeyword setActivePopUp={setActivePopUp} text="Thirty birds" infoTitle="The Si-Murgh" infoBody="In Persian, 'Si' means thirty and 'Murgh' means birds." /> set out across <LegendInteractiveKeyword setActivePopUp={setActivePopUp} text="seven valleys" infoTitle="The Seven Valleys" infoBody="Quest, Love, Knowledge, Detachment, Unity, Wonder, and Poverty." /> to find <LegendInteractiveKeyword setActivePopUp={setActivePopUp} text="their King" infoTitle="The True Summit" infoBody="The Simurgh is the union of thirty birds." />, only to realize that together, they were the King."</p></div></div>
              <div className="envelope-front flex items-center justify-center"><div className="relative flex items-center justify-center"><div className="w-16 h-16 bg-[#E3242B] rounded-full shadow-[0_0_20px_rgba(227,36,43,0.4)] flex items-center justify-center border-2 border-[#FFD700]/40 z-50"><Flame size={24} className="text-[#FFD700]" /></div>{!isEnvelopeOpen && <div className="absolute w-32 h-32 bg-[#FFD700]/5 rounded-full animate-ping"></div>}</div></div>
              <div className="envelope-top"></div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <SectionDivider />

      <ScrollReveal className="py-32 bg-[#0A0A0A] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div ref={founderRef} className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <div className={`relative group animate-profile-float ${signatureInView ? 'animate-fadeIn' : 'opacity-0'}`}><div className="absolute -inset-1 bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E3242B] rounded-[40px] opacity-20 group-hover:opacity-100 blur-xl transition-all duration-700 animate-border-rotate"></div><div className="relative glass p-4 rounded-[40px] border-[#FFD700]/30 shadow-2xl overflow-hidden aspect-square flex items-center justify-center"><div className="w-full h-full bg-[#121212] rounded-[32px] flex items-center justify-center relative overflow-hidden group"><Users size={160} className="text-[#FFD700]/10 group-hover:text-[#FFD700]/20 group-hover:scale-110 transition-all duration-700" /><div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60"></div><div className="absolute bottom-10 left-1/2 -translate-x-1/2"><div className="px-6 py-2 bg-[#FFD700]/10 backdrop-blur-md border border-[#FFD700]/40 rounded-full text-xs font-bold text-[#FFD700] uppercase tracking-[0.3em]">Chief Executive</div></div></div></div></div>
            <div className="relative">
              <div className={`${signatureInView ? 'animate-slideUp' : 'opacity-0'}`}>
                <Quote size={60} className="text-[#FFD700]/10 absolute -top-10 -left-6" /><h4 className="text-[#FFD700] font-bold uppercase tracking-[0.4em] text-sm mb-6 flex items-center gap-3"><span className="w-8 h-px bg-[#FFD700]"></span> Founder's Welcome</h4><h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-white leading-tight text-balance">Empowering the <br /> <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFD700]">Legend Within.</span></h2><div className="space-y-6 text-gray-400 leading-relaxed text-lg font-light mb-10"><p>"SMASH 2026 mission is to provide the virtual arena where your unique voice harmonizes with excellence."</p><p>We welcome you to building your digital legacy with us.</p></div>
              </div>
              <div className={`mt-12 flex flex-col items-start gap-2 ${signatureInView ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                 <p className="font-serif text-2xl text-white font-black tracking-wider hover:text-[#FFD700] transition-colors cursor-default">Inatsa Najwa A.</p>
                 <div className="relative pt-2 h-20 w-60 overflow-visible"><svg viewBox="0 0 250 80" className="drop-shadow-[0_0_12px_rgba(255,215,0,0.4)] overflow-visible w-full h-full"><path d="M20,50 C40,20 70,20 80,50 C90,80 110,30 130,20 C150,10 160,60 180,50 C200,40 210,70 230,15" fill="none" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" strokeDasharray="600" strokeDashoffset="600" className={`${signatureInView ? 'active-signature' : ''}`} />{signatureInView && (<g className="animate-dot-reveal"><circle cx="230" cy="15" r="4" fill="#FFD700" /><circle cx="230" cy="15" r="4" fill="none" stroke="#FFD700"><animate attributeName="r" from="4" to="12" dur="1.5s" repeatCount="indefinite" begin="2.5s" /><animate attributeName="opacity" from="0.8" to="0" dur="1.5s" repeatCount="indefinite" begin="2.5s" /></circle></g>)}</svg></div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <SectionDivider />

      <ScrollReveal id="categories" className="py-32 relative overflow-hidden bg-[#0A0A0A]"><div className="container mx-auto px-6"><div className="text-center mb-20 animate-fadeIn"><h2 className="font-serif text-5xl md:text-6xl font-black mb-4 uppercase tracking-[0.1em]">The Virtual Arena</h2><p className="text-[#FF8C00] font-bold tracking-[0.4em] uppercase text-xs">Logic carves the path • Digital wings reach the peak</p></div><DebateFeaturedTrack setActivePopUp={setActivePopUp} /></div></ScrollReveal>

      <SectionDivider />

      <section id="timeline" className="py-60 bg-[#0A0A0A] relative overflow-hidden">
        <GirihPattern className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.01] pointer-events-none" />
        <div className="container mx-auto px-6 text-center mb-32 relative z-10"><div className="inline-flex items-center gap-2 text-[#FFD700] font-bold text-xs uppercase tracking-[0.5em] mb-4"><Award size={16} /> THE SIMURGH'S ASCENT</div><h2 className="font-serif text-5xl md:text-7xl font-black uppercase tracking-widest text-white leading-tight">The Journey <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#E3242B]">To The Summit</span></h2></div>
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-full h-full pointer-events-none hidden md:block">
            <svg width="100%" height="100%" className="overflow-visible">
              <path id="journeyPath" d="M50%,0 C80%,200 20%,400 50%,600 C80%,800 20%,1000 50%,1250 C80%,1400 20%,1600 50%,1750" fill="none" stroke="#FFD700" strokeWidth="2" strokeOpacity="0.1" strokeDasharray="10 10" />
              <path d="M50%,0 C80%,200 20%,400 50%,600 C80%,800 20%,1000 50%,1250 C80%,1400 20%,1600 50%,1750" fill="none" stroke="#FFD700" strokeWidth="2" strokeOpacity="0.4" strokeDasharray="100" strokeDashoffset="1000" className="animate-logic-flow" style={{ animationDuration: '20s' }} />
              <circle r="6" fill="#FFD700" filter="drop-shadow(0 0 10px #FFD700)"><animateMotion dur="15s" repeatCount="indefinite" path="M50%,0 C80%,200 20%,400 50%,600 C80%,800 20%,1000 50%,1250 C80%,1400 20%,1600 50%,1750" /></circle>
            </svg>
          </div>
          <div className="space-y-16">
            {timelineItems.map((item, idx) => (
                <TimelineItem key={`${item.t}-${idx}`} item={item} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <ContactForge />

      <footer className="py-20 border-t border-white/5 bg-[#050505] relative overflow-hidden">
        <GirihPattern className="absolute -bottom-20 -right-20 w-80 h-80 opacity-[0.02]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center gap-8 mb-10">
            <a href="https://www.instagram.com/smash2025_/?hl=en" target="_blank" rel="noopener noreferrer"><InstagramIcon className="text-gray-500 hover:text-[#FFD700] cursor-pointer transition-all transform hover:scale-125" /></a>
            <a href="https://twitter.com/efosman1sda" target="_blank" rel="noopener noreferrer"><TwitterIcon className="text-gray-500 hover:text-[#FFD700] cursor-pointer transition-all transform hover:scale-125" /></a>
          </div>
          <p className="text-gray-600 text-sm font-light uppercase tracking-widest">© 2026 EFOS SMANISDA • The Simurgh's Ascent</p>
        </div>
      </footer>
    </div>
  );
}