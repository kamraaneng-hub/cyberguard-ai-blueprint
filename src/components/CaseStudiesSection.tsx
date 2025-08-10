const CaseStudiesSection = () => {
  const caseStudies = [
    {
      bank: "JPMorgan Chase",
      title: "AI-Powered Fraud Detection System",
      challenge: "Processing over 5 billion transactions annually while minimizing false positives and detecting sophisticated fraud patterns in real-time.",
      solution: "Implemented machine learning algorithms that analyze transaction patterns, customer behavior, and contextual data to identify fraudulent activities with 99.5% accuracy.",
      results: [
        "Reduced false positives by 50%",
        "Detected fraud 75% faster than traditional systems", 
        "Prevented $1.2 billion in potential fraud losses",
        "Improved customer experience with fewer legitimate transaction blocks"
      ],
      technologies: ["Deep Learning", "Behavioral Analytics", "Real-time Processing", "Graph Neural Networks"],
      year: "2023",
      impact: "High",
      logo: "🏦"
    },
    {
      bank: "Revolut",
      title: "Comprehensive Anti-Money Laundering Platform",
      challenge: "Monitoring millions of cross-border transactions for AML compliance while maintaining fast transaction processing speeds for customer satisfaction.",
      solution: "Deployed unsupervised machine learning models to detect unusual transaction patterns and automated suspicious activity reporting with human oversight for complex cases.",
      results: [
        "Achieved 95% automation in transaction monitoring",
        "Reduced AML investigation time by 60%",
        "Improved regulatory compliance scores",
        "Enhanced detection of complex money laundering schemes"
      ],
      technologies: ["Unsupervised Learning", "Network Analysis", "Automated Reporting", "Risk Scoring"],
      year: "2022",
      impact: "Medium",
      logo: "💳"
    },
    {
      bank: "PayPal",
      title: "Next-Generation Identity Verification",
      challenge: "Balancing security with user experience in account creation and login processes while preventing account takeovers and synthetic identity fraud.",
      solution: "Integrated biometric authentication, device fingerprinting, and behavioral biometrics with AI-driven risk assessment for seamless yet secure user authentication.",
      results: [
        "Reduced account takeover incidents by 80%",
        "Decreased authentication time by 40%",
        "Improved user satisfaction scores by 25%",
        "Enhanced detection of synthetic identities"
      ],
      technologies: ["Biometric Authentication", "Device Fingerprinting", "Behavioral Biometrics", "Risk Assessment AI"],
      year: "2023",
      impact: "High",
      logo: "💰"
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'bg-green-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Low': return 'bg-gray-500';
      default: return 'bg-muted';
    }
  };

  return (
    <section id="case-studies" className="section-container scroll-reveal">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-foreground mb-6">
          Real-World <span className="text-cyber">Success Stories</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          Learn from industry leaders who have successfully implemented AI/ML cybersecurity 
          solutions to protect their customers and enhance their security posture.
        </p>
      </div>

      {/* Industry Impact Overview */}
      <div className="glass-card p-8 mb-16">
        <h3 className="text-2xl font-bold text-center text-foreground mb-8">
          Industry-Wide AI/ML Security Adoption
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber mb-2">87%</div>
            <p className="text-muted-foreground text-sm">Of banks using AI for fraud detection</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber mb-2">$12B</div>
            <p className="text-muted-foreground text-sm">Annual savings from AI security</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber mb-2">92%</div>
            <p className="text-muted-foreground text-sm">Accuracy in threat detection</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber mb-2">65%</div>
            <p className="text-muted-foreground text-sm">Reduction in false positives</p>
          </div>
        </div>
      </div>

      {/* Case Study Cards */}
      <div className="space-y-12">
        {caseStudies.map((study, index) => (
          <div key={index} className="glass-card p-8 hover:bg-white/15 transition-all duration-300">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div className="flex items-center mb-4 md:mb-0">
                <span className="text-4xl mr-4">{study.logo}</span>
                <div>
                  <h3 className="text-3xl font-bold text-foreground">{study.bank}</h3>
                  <h4 className="text-xl text-cyber font-semibold">{study.title}</h4>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-muted-foreground">{study.year}</span>
                <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getImpactColor(study.impact)}`}>
                  {study.impact} Impact
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Challenge & Solution */}
              <div className="space-y-6">
                <div>
                  <h5 className="font-bold text-foreground mb-3 flex items-center">
                    <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm mr-3">!</span>
                    Challenge
                  </h5>
                  <p className="text-muted-foreground leading-relaxed pl-9">{study.challenge}</p>
                </div>
                
                <div>
                  <h5 className="font-bold text-foreground mb-3 flex items-center">
                    <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm mr-3">⚡</span>
                    Solution
                  </h5>
                  <p className="text-muted-foreground leading-relaxed pl-9">{study.solution}</p>
                </div>
              </div>

              {/* Results & Technologies */}
              <div className="space-y-6">
                <div>
                  <h5 className="font-bold text-foreground mb-3 flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3">✓</span>
                    Results
                  </h5>
                  <div className="pl-9 space-y-2">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-foreground mb-3 flex items-center">
                    <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm mr-3">⚙️</span>
                    Technologies Used
                  </h5>
                  <div className="pl-9 flex flex-wrap gap-2">
                    {study.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Key Learnings */}
      <div className="mt-16 glass-card p-8">
        <h3 className="text-3xl font-bold text-center text-foreground mb-12">
          Key Learnings from Industry Leaders
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🎯</span>
            </div>
            <h4 className="font-bold text-foreground mb-3">Start with Clear Objectives</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Define specific security goals and metrics before implementing AI/ML solutions. 
              Success requires measurable outcomes and clear ROI expectations.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🔄</span>
            </div>
            <h4 className="font-bold text-foreground mb-3">Iterate and Improve</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI/ML systems require continuous training and refinement. Regular model updates 
              and feedback loops ensure optimal performance against evolving threats.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">👥</span>
            </div>
            <h4 className="font-bold text-foreground mb-3">Human-AI Collaboration</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The most successful implementations combine AI efficiency with human expertise. 
              Staff training and change management are critical for adoption success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;