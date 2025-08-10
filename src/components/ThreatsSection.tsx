const ThreatsSection = () => {
  const threats = [
    {
      title: "Phishing & Social Engineering",
      severity: "Critical",
      icon: "🎣",
      description: "Sophisticated attacks targeting human psychology to steal credentials and sensitive information.",
      tactics: [
        "Spear phishing targeting executives",
        "Business email compromise (BEC)",
        "Vishing (voice phishing) attacks",
        "Smishing (SMS phishing) campaigns"
      ],
      impact: "Account takeover, data theft, financial loss",
      aiDetection: "NLP analysis of suspicious communications, behavioral pattern recognition"
    },
    {
      title: "Insider Threats",
      severity: "High",
      icon: "👤",
      description: "Malicious or negligent actions by authorized users with legitimate access to systems.",
      tactics: [
        "Privilege abuse by employees",
        "Data exfiltration schemes",
        "Sabotage of systems/data",
        "Unintentional data exposure"
      ],
      impact: "Data breaches, regulatory violations, reputation damage",
      aiDetection: "User behavior analytics, access pattern monitoring, data loss prevention"
    },
    {
      title: "AI-Generated Threats",
      severity: "Emerging",
      icon: "🤖",
      description: "Next-generation attacks using AI to create sophisticated, personalized, and adaptive threats.",
      tactics: [
        "Deepfake videos/audio for fraud",
        "AI-generated phishing emails",
        "Automated vulnerability discovery",
        "Adaptive malware behavior"
      ],
      impact: "Enhanced social engineering, faster attack evolution",
      aiDetection: "Deepfake detection algorithms, behavioral analysis, anomaly detection"
    },
    {
      title: "Malware & Ransomware",
      severity: "Critical",
      icon: "💀",
      description: "Malicious software designed to disrupt operations, steal data, or demand ransom payments.",
      tactics: [
        "Banking trojans targeting credentials",
        "Ransomware encrypting critical data",
        "Fileless malware living in memory",
        "Supply chain malware insertion"
      ],
      impact: "System downtime, data encryption, ransom demands",
      aiDetection: "Signature-less detection, behavioral analysis, machine learning classification"
    },
    {
      title: "Advanced Persistent Threats (APT)",
      severity: "Critical",
      icon: "🕷️",
      description: "Long-term, stealthy attacks by sophisticated adversaries targeting specific organizations.",
      tactics: [
        "Multi-stage infiltration campaigns",
        "Living-off-the-land techniques",
        "Zero-day exploit deployment",
        "Lateral movement within networks"
      ],
      impact: "Long-term data theft, intellectual property loss, espionage",
      aiDetection: "Timeline analysis, correlation engines, threat hunting algorithms"
    },
    {
      title: "API & Cloud Vulnerabilities",
      severity: "High",
      icon: "☁️",
      description: "Attacks targeting cloud infrastructure and API endpoints used in modern banking systems.",
      tactics: [
        "API abuse and injection attacks",
        "Cloud misconfigurations exploitation",
        "Container escape attempts",
        "Serverless function abuse"
      ],
      impact: "Data exposure, service disruption, unauthorized access",
      aiDetection: "API behavior monitoring, cloud security posture management, automated scanning"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-destructive';
      case 'High': return 'bg-orange-500';
      case 'Emerging': return 'bg-accent';
      default: return 'bg-muted';
    }
  };

  return (
    <section id="threats" className="section-container scroll-reveal">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-foreground mb-6">
          Top <span className="text-cyber">Cyber Threats</span> in Banking
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          Understanding the evolving threat landscape is crucial for effective defense. 
          Here are the most critical cybersecurity challenges facing banking institutions today.
        </p>
      </div>

      {/* Threat Overview Stats */}
      <div className="glass-card p-8 mb-16">
        <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Threat Landscape Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-destructive mb-2">43%</div>
            <p className="text-muted-foreground text-sm">Increase in banking cyberattacks (2023)</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">238</div>
            <p className="text-muted-foreground text-sm">Days average breach detection time</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">$5.9M</div>
            <p className="text-muted-foreground text-sm">Average cost of a banking data breach</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber mb-2">67%</div>
            <p className="text-muted-foreground text-sm">Attacks targeting employees directly</p>
          </div>
        </div>
      </div>

      {/* Detailed Threat Cards */}
      <div className="grid lg:grid-cols-2 gap-8">
        {threats.map((threat, index) => (
          <div key={index} className="glass-card p-8 hover:bg-white/15 transition-all duration-300">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center">
                <span className="text-4xl mr-4">{threat.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{threat.title}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-white text-sm font-medium mt-2 ${getSeverityColor(threat.severity)}`}>
                    {threat.severity}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-6 leading-relaxed">{threat.description}</p>

            {/* Tactics */}
            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-3">Common Tactics:</h4>
              <div className="space-y-2">
                {threat.tactics.map((tactic, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">{tactic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact & AI Detection */}
            <div className="space-y-4">
              <div className="border-l-4 border-destructive pl-4">
                <h5 className="font-semibold text-foreground text-sm">Potential Impact</h5>
                <p className="text-muted-foreground text-sm">{threat.impact}</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h5 className="font-semibold text-foreground text-sm">AI/ML Detection Methods</h5>
                <p className="text-muted-foreground text-sm">{threat.aiDetection}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Threat Timeline */}
      <div className="mt-20 glass-card p-8">
        <h3 className="text-3xl font-bold text-center text-foreground mb-12">
          Evolution of Banking Cyber Threats
        </h3>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-primary"></div>
          <div className="space-y-8">
            {[
              { year: "2020-2021", threat: "COVID-19 Related Phishing", description: "Pandemic-themed social engineering attacks targeting remote workers" },
              { year: "2021-2022", threat: "Supply Chain Attacks", description: "Sophisticated attacks through third-party vendors and software" },
              { year: "2022-2023", threat: "AI-Powered Threats", description: "Emergence of AI-generated phishing and deepfake fraud" },
              { year: "2023-2024", threat: "Cloud-Native Attacks", description: "Targeting containerized applications and serverless architectures" },
              { year: "2024-Future", threat: "Quantum-Ready Threats", description: "Preparing for post-quantum cryptography vulnerabilities" }
            ].map((item, index) => (
              <div key={index} className="relative flex items-start">
                <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                  {index + 1}
                </div>
                <div className="ml-6">
                  <div className="text-sm font-semibold text-accent">{item.year}</div>
                  <h4 className="text-lg font-bold text-foreground">{item.threat}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreatsSection;