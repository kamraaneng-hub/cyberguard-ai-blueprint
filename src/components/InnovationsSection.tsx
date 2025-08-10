const InnovationsSection = () => {
  const innovations = [
    {
      title: "Deep Learning for Advanced Threat Detection",
      description: "Neural networks that learn complex patterns in cyberattacks, enabling detection of previously unknown threats and zero-day exploits.",
      icon: "🧠",
      applications: [
        "Malware classification with 99.8% accuracy",
        "Behavioral analysis of network traffic",
        "Advanced persistent threat (APT) detection",
        "Automated incident response triggers"
      ],
      benefits: [
        "Detects sophisticated attacks that bypass traditional security",
        "Continuously improves through self-learning algorithms",
        "Reduces time from breach to detection by 85%",
        "Minimizes false positives through pattern recognition"
      ],
      maturity: "Mature",
      adoption: "78%"
    },
    {
      title: "Blockchain for Security and Audit Trails",
      description: "Immutable ledger technology ensuring transaction integrity and providing tamper-proof audit trails for compliance and forensics.",
      icon: "⛓️",
      applications: [
        "Immutable transaction logging",
        "Smart contracts for automated compliance",
        "Digital identity verification",
        "Secure multi-party authentication"
      ],
      benefits: [
        "Provides tamper-proof audit trails for regulators",
        "Enables secure data sharing between institutions",
        "Reduces fraud through transparent verification",
        "Automates compliance reporting processes"
      ],
      maturity: "Growing",
      adoption: "34%"
    },
    {
      title: "Biometric Authentication & Behavioral Analysis",
      description: "Advanced biometric systems combined with AI-powered behavioral analysis for seamless yet secure user authentication.",
      icon: "👁️",
      applications: [
        "Multi-modal biometric verification",
        "Continuous authentication monitoring",
        "Voice pattern analysis for phone banking",
        "Gait and gesture recognition"
      ],
      benefits: [
        "Eliminates password-related vulnerabilities",
        "Provides continuous user verification",
        "Adapts to user behavior changes over time",
        "Significantly reduces account takeover fraud"
      ],
      maturity: "Mature",
      adoption: "65%"
    },
    {
      title: "Natural Language Processing for Security",
      description: "AI-powered analysis of human communication to detect social engineering, phishing attempts, and insider threat indicators.",
      icon: "💬",
      applications: [
        "Email phishing detection and filtering",
        "Social media threat intelligence",
        "Customer service fraud detection",
        "Internal communication monitoring"
      ],
      benefits: [
        "Identifies sophisticated social engineering attacks",
        "Analyzes communication sentiment and urgency",
        "Protects against business email compromise",
        "Enhances employee security awareness"
      ],
      maturity: "Emerging",
      adoption: "42%"
    },
    {
      title: "Quantum-Resistant Cryptography",
      description: "Next-generation encryption methods designed to withstand attacks from quantum computers, securing future banking systems.",
      icon: "🔬",
      applications: [
        "Post-quantum encryption algorithms",
        "Quantum key distribution networks",
        "Lattice-based cryptographic systems",
        "Hybrid classical-quantum security"
      ],
      benefits: [
        "Future-proofs against quantum computing threats",
        "Maintains security as technology evolves",
        "Enables long-term data protection",
        "Complies with emerging regulatory standards"
      ],
      maturity: "Research",
      adoption: "8%"
    },
    {
      title: "Federated Learning for Privacy-Preserving AI",
      description: "Collaborative machine learning that enables banks to share threat intelligence while keeping sensitive data private and secure.",
      icon: "🤝",
      applications: [
        "Cross-institutional threat sharing",
        "Privacy-preserving fraud detection",
        "Collaborative risk modeling",
        "Distributed security analytics"
      ],
      benefits: [
        "Improves threat detection through shared intelligence",
        "Maintains customer privacy and data sovereignty",
        "Enables industry-wide security improvements",
        "Reduces individual institution's AI training costs"
      ],
      maturity: "Emerging",
      adoption: "15%"
    }
  ];

  const getMaturityColor = (maturity: string) => {
    switch (maturity) {
      case 'Mature': return 'bg-green-500';
      case 'Growing': return 'bg-blue-500';
      case 'Emerging': return 'bg-yellow-500';
      case 'Research': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="innovations" className="section-container scroll-reveal">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-foreground mb-6">
          Recent <span className="text-cyber">Innovations</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          Explore cutting-edge technologies reshaping cybersecurity in banking. 
          From quantum-resistant encryption to federated learning, discover what's next.
        </p>
      </div>

      {/* Innovation Timeline */}
      <div className="glass-card p-8 mb-16">
        <h3 className="text-2xl font-bold text-center text-foreground mb-8">
          Cybersecurity Innovation Timeline
        </h3>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-primary"></div>
          <div className="space-y-8">
            {[
              { year: "2020", innovation: "AI-Powered Fraud Detection", status: "Widely Adopted" },
              { year: "2021", innovation: "Biometric Authentication", status: "Mainstream" },
              { year: "2022", innovation: "Behavioral Analytics", status: "Growing" },
              { year: "2023", innovation: "Blockchain Security", status: "Emerging" },
              { year: "2024", innovation: "Quantum-Resistant Crypto", status: "Research" },
              { year: "2025+", innovation: "Federated Learning", status: "Future" }
            ].map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-80 ${index % 2 === 0 ? 'mr-8 text-right' : 'ml-8 text-left'}`}>
                  <div className="text-sm font-semibold text-accent">{item.year}</div>
                  <h4 className="text-lg font-bold text-foreground">{item.innovation}</h4>
                  <p className="text-muted-foreground text-sm">{item.status}</p>
                </div>
                <div className="w-4 h-4 bg-gradient-to-r from-accent to-primary rounded-full border-4 border-background z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Innovation Cards */}
      <div className="grid lg:grid-cols-2 gap-8">
        {innovations.map((innovation, index) => (
          <div key={index} className="glass-card p-8 hover:bg-white/15 transition-all duration-300">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start">
                <span className="text-4xl mr-4">{innovation.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{innovation.title}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{innovation.description}</p>
                </div>
              </div>
            </div>

            {/* Maturity & Adoption */}
            <div className="flex items-center gap-4 mb-6">
              <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getMaturityColor(innovation.maturity)}`}>
                {innovation.maturity}
              </span>
              <div className="flex items-center">
                <span className="text-muted-foreground text-sm mr-2">Adoption:</span>
                <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-accent to-primary"
                    style={{ width: innovation.adoption }}
                  ></div>
                </div>
                <span className="text-foreground text-sm ml-2 font-semibold">{innovation.adoption}</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Applications */}
              <div>
                <h4 className="font-bold text-foreground mb-3 flex items-center">
                  <span className="w-5 h-5 bg-accent rounded-full flex items-center justify-center text-white text-xs mr-2">A</span>
                  Applications
                </h4>
                <div className="space-y-2">
                  {innovation.applications.map((app, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="font-bold text-foreground mb-3 flex items-center">
                  <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-2">B</span>
                  Benefits
                </h4>
                <div className="space-y-2">
                  {innovation.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Future Outlook */}
      <div className="mt-16 glass-card p-8">
        <h3 className="text-3xl font-bold text-center text-foreground mb-12">
          The Future of Banking Cybersecurity
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-3xl">🚀</span>
            </div>
            <h4 className="text-xl font-bold text-foreground mb-4">2025-2027: Integration Era</h4>
            <p className="text-muted-foreground leading-relaxed">
              Seamless integration of AI, blockchain, and biometrics into unified security platforms. 
              Real-time threat intelligence sharing becomes standard across the industry.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-3xl">🔮</span>
            </div>
            <h4 className="text-xl font-bold text-foreground mb-4">2028-2030: Quantum Transition</h4>
            <p className="text-muted-foreground leading-relaxed">
              Post-quantum cryptography becomes mandatory. Quantum-enhanced AI enables 
              unprecedented threat prediction and prevention capabilities.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-3xl">🌍</span>
            </div>
            <h4 className="text-xl font-bold text-foreground mb-4">2030+: Autonomous Security</h4>
            <p className="text-muted-foreground leading-relaxed">
              Fully autonomous security systems that predict, prevent, and respond to threats 
              without human intervention while maintaining perfect compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationsSection;