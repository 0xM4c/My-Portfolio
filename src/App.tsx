import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Award, 
  BookOpen, 
  FileText, 
  Mail, 
  Phone, 
  Linkedin, 
  Github,
  Download,
  ExternalLink,
  Calendar,
  Trophy,
  Terminal,
  Server,
  Lock,
  Swords,
  User,
  Briefcase,
  Code,
  Network,
  Eye,
  ShieldCheck
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'certifications', 'experience', 'ctf', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const certifications = [
    {
      name: "ISC2 (CC)",
      date: "Aug 2024",
      status: "completed",
      icon: <Shield className="w-5 h-5" />
    },
    {
      name: "Red Hat System Administrator (RHSA)",
      date: "Mar 2025",
      status: "completed",
      icon: <Server className="w-5 h-5" />
    },
    {
      name: "Red Hat Certified Engineer (RHCE)",
      date: "Apr 2025",
      status: "completed",
      icon: <Terminal className="w-5 h-5" />
    },
    {
      name: "Red Hat Specialist in Linux Security",
      date: "May 2025",
      status: "completed",
      icon: <Lock className="w-5 h-5" />
    },
    {
      name: "eJPTv2",
      date: "Aug 2025",
      status: "completed",
      icon: <Shield className="w-5 h-5" />
    },
    {
      name: "eCPPTv3",
      date: "Nov 2025",
      status: "expected",
      icon: <Trophy className="w-5 h-5" />
    }
  ];

  const ctfWriteups = [
    {
      title: "Popcorn HTB Write-up",
      platform: "HackTheBox",
      url: "https://medium.com/@basulayb.abdulmalik/popcorn-htb-write-up-1990adc108c0"
    },
    {
      title: "Hack The Box - Lame Writeup",
      platform: "HackTheBox", 
      url: "https://medium.com/@basulayb.abdulmalik/hack-the-box-lame-writeup-5d0f76869607"
    },
    {
      title: "TryHackMe Internal - Preparation for eCPPTv3",
      platform: "TryHackMe",
      url: "https://medium.com/@basulayb.abdulmalik/tryhackme-internal-preparation-for-ecpptv3-4db73934a73b"
    },
    {
      title: "TryHackMe Mr Robot CTF Writeup",
      platform: "TryHackMe",
      url: "https://medium.com/@basulayb.abdulmalik/tryhackme-mr-robot-ctf-writeup-9eaf4b5dacb0"
    }
  ];

  const skillCategories = [
    {
      title: "Penetration Tester",
      icon: <Swords className="w-8 h-8 text-red-500" />,
      skills: [
        "Network & Web App Pentesting",
        "Vulnerability Discovery & Exploitation",
        "Active Directory Attack Paths",
        "Post-Exploitation & Privilege Escalation",
        "Documenting & Reporting"
      ],
      color: "red"
    },
    {
      title: "System Engineer",
      icon: <Server className="w-8 h-8 text-cyan-400" />,
      skills: [
        "Enterprise Linux Administration & Troubleshooting",
        "Networking Services",
        "User & Group Management",
        "Shell Scripting & Automation",
        "System Performance Tuning & Monitoring"
      ],
      color: "cyan"
    },
    {
      title: "Linux Security Specialist",
      icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
      skills: [
        "System Hardening & Secure Configuration",
        "SELinux Policy Management & Enforcement",
        "Network Services Security",
        "Identity & Access Control",
        "File Integrity & Audit",
        "Vulnerability & Patch Management"
      ],
      color: "emerald"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-cyan-900/30 z-50 animate-slideDown shadow-lg shadow-cyan-500/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-cyan-400 animate-fadeIn flex items-center gap-2">
              <span className="text-cyan-500">&gt;_</span>
              Abdulmalik Basulayb
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {[
                { id: 'about', label: 'About Me' },
                { id: 'skills', label: 'Skills' },
                { id: 'certifications', label: 'Certifications' },
                { id: 'experience', label: 'Experience' },
                { id: 'ctf', label: 'CTF Writeups' },
                { id: 'blog', label: 'Blog' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 hover:text-cyan-400 hover:scale-105 ${
                    activeSection === item.id ? 'text-cyan-400 scale-105' : 'text-gray-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-black font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 border border-cyan-500">
                <Download className="w-4 h-4" />
                Resume
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-20">
            <div className="mb-8 animate-fadeInUp">
              <p className="text-2xl text-gray-300 mb-4 animate-fadeInUp">Hello, my name is</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp animation-delay-200">
              Abdulmalik <span className="text-cyan-400 animate-glow">Basulayb</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-400">
              IT Graduate & Cybersecurity Professional
            </p>
            <div className="max-w-4xl mx-auto animate-fadeInUp animation-delay-600">
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                I'm an IT graduate with a Bachelor's degree from La Roche University, passionate about
                <span className="text-red-500 font-semibold"> offensive security</span>,
                <span className="text-cyan-400 font-semibold"> Linux Systems Engineering</span>, and
                <span className="text-emerald-400 font-semibold"> Linux security</span>.
                As a Red Hat-certified professional, I continuously pursue advanced certifications and
                expand my skills through hands-on labs and CTF challenges.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm animate-fadeInUp animation-delay-800">
              <span className="px-4 py-2 bg-red-950/80 text-red-400 rounded-lg border border-red-800/50 hover:bg-red-950 hover:border-red-500 transition-all duration-300 hover:scale-105 font-mono shadow-lg">
                Offensive Security
              </span>
              <span className="px-4 py-2 bg-cyan-950/80 text-cyan-400 rounded-lg border border-cyan-800/50 hover:bg-cyan-950 hover:border-cyan-500 transition-all duration-300 hover:scale-105 font-mono shadow-lg">
                Linux Engineering
              </span>
              <span className="px-4 py-2 bg-emerald-950/80 text-emerald-400 rounded-lg border border-emerald-800/50 hover:bg-emerald-950 hover:border-emerald-500 transition-all duration-300 hover:scale-105 font-mono shadow-lg">
                Red Hat Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 to-black border-t border-cyan-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fadeInUp">
            <span className="text-cyan-400 font-mono">[</span> Technical Skills <span className="text-cyan-400 font-mono">]</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className={`bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-${category.color}-500 transition-all duration-500 hover:shadow-lg hover:shadow-${category.color}-500/30 animate-fadeInUp hover:scale-105 backdrop-blur-sm`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-${category.color}-900/50 rounded-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex} 
                      className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <div className={`w-2 h-2 bg-${category.color}-400 rounded-full mt-2 flex-shrink-0 animate-pulse-slow`}></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Timeline */}
      <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-cyan-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fadeInUp">
            <span className="text-cyan-400 font-mono">[</span> Certifications & Achievements <span className="text-cyan-400 font-mono">]</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 to-cyan-700 animate-drawLine shadow-lg shadow-cyan-500/50"></div>
            
            <div className="space-y-12">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className={`flex items-center animate-slideInFromSide ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-900/70 p-6 rounded-lg border border-gray-800 hover:border-cyan-500 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-2">
                        {index % 2 === 0 ? (
                          <>
                            <div className="text-cyan-400 animate-bounce-slow">{cert.icon}</div>
                            <h3 className="text-xl font-semibold">{cert.name}</h3>
                          </>
                        ) : (
                          <>
                            <h3 className="text-xl font-semibold">{cert.name}</h3>
                            <div className="text-cyan-400 animate-bounce-slow">{cert.icon}</div>
                          </>
                        )}
                      </div>
                      <p className="text-gray-400 mb-2">{cert.date}</p>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 font-mono ${
                        cert.status === 'completed'
                          ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-700/50'
                          : 'bg-yellow-950/80 text-yellow-400 border border-yellow-700/50'
                      }`}>
                        {cert.status === 'completed' ? 'Completed' : 'Expected'}
                      </span>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative z-10 w-6 h-6 bg-cyan-400 rounded-full border-4 border-black flex items-center justify-center animate-pulse-slow hover:scale-125 transition-transform duration-300 shadow-lg shadow-cyan-500/50">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950 border-t border-cyan-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fadeInUp">
            <span className="text-cyan-400 font-mono">[</span> Professional Experience <span className="text-cyan-400 font-mono">]</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Professional Experience */}
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-red-500 transition-all duration-500 hover:shadow-lg hover:shadow-red-500/30 animate-fadeInUp hover:scale-105 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-8 h-8 text-red-500" />
                <div>
                  <h3 className="text-2xl font-bold">Penetration Tester Trainee</h3>
                  <p className="text-gray-300">EdfaPay</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">July 2024 - December 2024</p>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-3 font-mono">Key Responsibilities:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2 hover:text-white transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0 animate-pulse-slow"></div>
                    Performed vulnerability scans using Nmap, Nessus, and Metasploit
                  </li>
                  <li className="flex items-start gap-2 hover:text-white transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0 animate-pulse-slow"></div>
                    Validated patch effectiveness through follow-up security testing
                  </li>
                  <li className="flex items-start gap-2 hover:text-white transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0 animate-pulse-slow"></div>
                    Collaborated with development teams to implement security fixes
                  </li>
                  <li className="flex items-start gap-2 hover:text-white transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0 animate-pulse-slow"></div>
                    Documented remediation efforts and reported security status
                  </li>
                </ul>
              </div>
            </div>

            {/* Red Hat Bootcamp */}
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/30 animate-fadeInUp animation-delay-200 hover:scale-105 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold">Red Hat Infrastructure and Security Bootcamp</h3>
              </div>
              <p className="text-gray-300 mb-4">Saudi Digital Academy</p>
              <p className="text-gray-400 mb-4">February 2025 - May 2025</p>
              <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-3 mb-4 hover:bg-yellow-900/40 transition-colors duration-300">
                <p className="text-yellow-300 font-semibold flex items-center gap-2">
                  <Trophy className="w-4 h-4 animate-bounce-slow" />
                  Champion of the Week - Top Performance
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-3 font-mono">Key Learning Outcomes:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2 hover:text-white transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0 animate-pulse-slow"></div>
                    Linux system configurations and user management
                  </li>
                  <li className="flex items-start gap-2 hover:text-white transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0 animate-pulse-slow"></div>
                    Bash scripting for administrative automation
                  </li>
                  <li className="flex items-start gap-2 hover:text-white transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0 animate-pulse-slow"></div>
                    System hardening and security patch implementation
                  </li>
                  <li className="flex items-start gap-2 hover:text-white transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0 animate-pulse-slow"></div>
                    Service troubleshooting and performance optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* GRC Program */}
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-emerald-500 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/30 animate-fadeInUp animation-delay-400 hover:scale-105 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-emerald-400" />
                <h3 className="text-2xl font-bold">GRC in Cybersecurity Program</h3>
              </div>
              <p className="text-gray-300 mb-4">Tuwaiq Academy</p>
              <p className="text-gray-400 mb-6">January 2025</p>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-3 font-mono">Key Learning Outcomes:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2 hover:text-white transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0 animate-pulse-slow"></div>
                    Cybersecurity policy creation and review
                  </li>
                  <li className="flex items-start gap-2 hover:text-white transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0 animate-pulse-slow"></div>
                    Risk assessment and mitigation strategies
                  </li>
                  <li className="flex items-start gap-2 hover:text-white transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0 animate-pulse-slow"></div>
                    Compliance with international and Saudi regulations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTF Writeups */}
      <section id="ctf" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-cyan-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fadeInUp">
            <span className="text-cyan-400 font-mono">[</span> CTF Writeups <span className="text-cyan-400 font-mono">]</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {ctfWriteups.map((writeup, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/30 animate-fadeInUp hover:scale-105 backdrop-blur-sm"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 hover:text-cyan-400 transition-colors duration-300">{writeup.title}</h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-cyan-950/80 text-cyan-400 border border-cyan-800/50 hover:bg-cyan-950 hover:border-cyan-500 transition-colors duration-300 font-mono">
                      {writeup.platform}
                    </span>
                  </div>
                  <Terminal className="w-6 h-6 text-cyan-500 flex-shrink-0 animate-pulse-slow" />
                </div>
                <a
                  href={writeup.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-105"
                >
                  Read Writeup
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medium Blog */}
      <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 to-black border-t border-cyan-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fadeInUp">
            <span className="text-cyan-400 font-mono">[</span> Medium Blog <span className="text-cyan-400 font-mono">]</span>
          </h2>

          <div className="text-center">
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/30 max-w-2xl mx-auto animate-fadeInUp hover:scale-105 backdrop-blur-sm">
              <FileText className="w-12 h-12 text-cyan-400 mx-auto mb-4 animate-bounce-slow" />
              <h3 className="text-2xl font-bold mb-4">Technical Blog Posts</h3>
              <p className="text-gray-300 mb-6">
                Sharing insights on cybersecurity, Linux administration, and hands-on experiences 
                from certifications and practical implementations.
              </p>
              <div className="space-y-4">
                <a
                  href="https://medium.com/@basulayb.abdulmalik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 border border-cyan-500"
                >
                  Visit My Medium Profile
                  <ExternalLink className="w-4 h-4" />
                </a>
                <div className="pt-4 border-t border-gray-800">
                  <p className="text-sm text-gray-400 mb-2">Featured Post:</p>
                  <a
                    href="https://medium.com/@basulayb.abdulmalik/what-rhcss-taught-me-about-hardening-red-hat-servers-and-how-i-would-actually-use-it-3bbcf4008c99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm underline hover:scale-105 inline-block"
                  >
                    "What RHCSS taught me about hardening Red Hat servers and how I would actually use it"
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-cyan-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fadeInUp">
            <span className="text-cyan-400 font-mono">[</span> Get In Touch <span className="text-cyan-400 font-mono">]</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/30 animate-fadeInUp hover:scale-105 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-950/80 rounded-lg flex items-center justify-center border border-cyan-800/50">
                    <Mail className="w-6 h-6 text-cyan-400 animate-pulse-slow" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a
                      href="mailto:Basulayb.Abdulmalik@gmail.com"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      Basulayb.Abdulmalik@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/30 animate-fadeInUp animation-delay-200 hover:scale-105 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-950/80 rounded-lg flex items-center justify-center border border-cyan-800/50">
                    <Phone className="w-6 h-6 text-cyan-400 animate-pulse-slow" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a
                      href="tel:+966554307331"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      +966554307331
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/abdulmalik-basulayb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/30 animate-fadeInUp animation-delay-400 hover:scale-105 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-8 h-8 text-cyan-400 animate-bounce-slow" />
                    <span className="font-semibold">LinkedIn</span>
                  </div>
                </a>

                <a
                  href="https://github.com/0xM4c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-emerald-500 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/30 animate-fadeInUp animation-delay-600 hover:scale-105 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-8 h-8 text-emerald-400 animate-bounce-slow" />
                    <span className="font-semibold">GitHub</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Resume Download */}
            <div className="flex items-center justify-center">
              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/30 text-center animate-fadeInUp animation-delay-800 hover:scale-105 backdrop-blur-sm">
                <Download className="w-16 h-16 text-cyan-400 mx-auto mb-4 animate-bounce-slow" />
                <h3 className="text-2xl font-bold mb-4">Download Resume</h3>
                <p className="text-gray-300 mb-6">
                  Get my complete professional resume with detailed experience and achievements.
                </p>
                <button className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-black px-8 py-4 rounded-lg transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 border border-cyan-500">
                  <Download className="w-5 h-5" />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-cyan-900/30 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 animate-fadeIn">
            <span className="text-cyan-400 font-mono">&gt;_</span> © 2025 Abdulmalik Basulayb. Building secure systems, one challenge at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;