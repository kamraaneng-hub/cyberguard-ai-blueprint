const LimitationsSection = () => {
  const limitations = [
    {
      title: "False Positives & Alert Fatigue",
      description: "AI systems can generate excessive false alarms, leading to security team burnout and potentially ignored genuine threats.",
      icon: "⚠️",
      challenges: [
        "Over-sensitive algorithms triggering false alerts",
        "Security analysts becoming desensitized to alarms",
        "Legitimate transactions being blocked unnecessarily",
        "Increased operational costs from manual review"
      ],
      mitigation: [
        "Regular model tuning and threshold adjustment",
        "Implementation of tiered alert systems",
        "Continuous feedback loops from security teams",
        "Use of ensemble methods to reduce variance"
      ],
      severity: "High",
      impact: "Operational efficiency, customer experience"
    },
    {
      title: "Data Bias & Discriminatory Outcomes",
      description: "Machine learning models can perpetuate or amplify biases present in training data, leading to unfair treatment of certain customer groups.",
      icon: "⚖️",
      challenges: [
        "Historical data reflecting past discriminatory practices",
        "Underrepresentation of minority groups in training sets",
        "Algorithmic amplification of human biases",
        "Regulatory compliance risks and legal liability"
      ],
      mitigation: [
        "Regular bias audits and fairness testing",
        "Diverse and representative training datasets",
        "Implementation of fairness-aware ML algorithms",
        "Ongoing monitoring for discriminatory outcomes"
      ],
      severity: "Critical",
      impact: "Regulatory compliance, reputation, legal risk"
    },
    {
      title: "Over-reliance on Automated Systems",
      description: "Excessive dependence on AI/ML can lead to skill atrophy among security professionals and vulnerability during system failures.",
      icon: "🤖",
      challenges: [
        "Degradation of human analytical skills",
        "Inability to respond effectively during system outages",
        "Loss of contextual understanding by security teams",
        "Difficulty in manual investigation when needed"
      ],
      mitigation: [
        "Maintain human-in-the-loop processes for critical decisions",
        "Regular training and skill development programs",
        "Periodic manual exercises and simulations",
        "Clear escalation procedures for system failures"
      ],
      severity: "Medium",
      impact: "Incident response capability, staff expertise"
    },
    {
      title: "Explainability & Transparency Challenges",
      description: "Complex AI models often function as 'black boxes,' making it difficult to understand and explain their decision-making processes.",
      icon: "❓",
      challenges: [
        "Inability to explain decisions to regulators",
        "Difficulty in validating model reasoning",
        "Challenges in debugging incorrect classifications",
        "Lack of transparency for affected customers"
      ],
      mitigation: [
        "Use of explainable AI (XAI) techniques",
        "Implementation of model interpretability tools",
        "Documentation of decision logic and reasoning",
        "Regular model validation and testing procedures"
      ],
      severity: "High",
      impact: "Regulatory compliance, customer trust"
    },
    {
      title: "Adversarial Attacks & Model Manipulation",
      description: "Sophisticated attackers can deliberately manipulate AI/ML systems through adversarial inputs designed to evade detection.",
      icon: "🎭",
      challenges: [
        "Carefully crafted inputs that fool AI systems",
        "Model poisoning through malicious training data",
        "Evasion techniques that bypass security measures",
        "Continuous arms race between attackers and defenders"
      ],
      mitigation: [
        "Adversarial training with attack scenarios",
        "Implementation of robust detection mechanisms",
        "Regular red team exercises and penetration testing",
        "Multi-layered defense strategies"
      ],
      severity: "High",
      impact: "Security effectiveness, system integrity"
    },
    {
      title: "Data Privacy & Regulatory Compliance",
      description: "AI/ML systems require vast amounts of data, creating challenges in maintaining privacy and meeting regulatory requirements.",
      icon: "🔒",
      challenges: [
        "Balancing data utility with privacy protection",
        "Compliance with GDPR, CCPA, and banking regulations",
        "Cross-border data transfer restrictions",
        "Customer consent and data retention policies"
      ],
      mitigation: [
        "Implementation of privacy-preserving techniques",
        "Regular compliance audits and assessments",
        "Data minimization and purpose limitation practices",
        "Strong data governance frameworks"
      ],
      severity: "Critical",
      impact: "Legal compliance, customer privacy, fines"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-destructive';
      case 'High': return 'bg-orange-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Low': return 'bg-green-500';
      default: return 'bg-muted';
    }
  };

  return (
    <section id="limitations" className="section-container bg-muted/30 scroll-reveal">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-foreground mb-6">
          Understanding <span className="text-cyber">AI/ML Limitations</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          While AI/ML technologies offer tremendous benefits, understanding their limitations 
          is crucial for building robust, reliable, and responsible cybersecurity systems.
        </p>
      </div>

      {/* Key Principles */}
      <div className="glass-card p-8 mb-16">
        <h3 className="text-2xl font-bold text-center text-foreground mb-8">
          Responsible AI in Banking Security
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🎯</span>
            </div>
            <h4 className="font-bold text-foreground mb-2">Accuracy</h4>
            <p className="text-muted-foreground text-sm">Continuous monitoring and improvement of model performance</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">⚖️</span>
            </div>
            <h4 className="font-bold text-foreground mb-2">Fairness</h4>
            <p className="text-muted-foreground text-sm">Ensuring equitable treatment across all customer segments</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🔍</span>
            </div>
            <h4 className="font-bold text-foreground mb-2">Transparency</h4>
            <p className="text-muted-foreground text-sm">Explainable decisions and clear accountability</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🛡️</span>
            </div>
            <h4 className="font-bold text-foreground mb-2">Robustness</h4>
            <p className="text-muted-foreground text-sm">Resilient systems that perform reliably under stress</p>
          </div>
        </div>
      </div>

      {/* Limitation Details */}
      <div className="space-y-8">
        {limitations.map((limitation, index) => (
          <div key={index} className="glass-card p-8 hover:bg-white/15 transition-all duration-300">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
              <div className="flex items-start mb-4 md:mb-0">
                <span className="text-4xl mr-4">{limitation.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{limitation.title}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{limitation.description}</p>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getSeverityColor(limitation.severity)}`}>
                  {limitation.severity} Risk
                </span>
                <div className="text-right">
                  <div className="text-xs font-semibold text-muted-foreground">BUSINESS IMPACT</div>
                  <div className="text-sm text-foreground">{limitation.impact}</div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Challenges */}
              <div>
                <h4 className="font-bold text-foreground mb-4 flex items-center">
                  <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm mr-3">!</span>
                  Key Challenges
                </h4>
                <div className="space-y-3">
                  {limitation.challenges.map((challenge, i) => (
                    <div key={i} className="flex items-start p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border-l-4 border-orange-500">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-foreground text-sm">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mitigation Strategies */}
              <div>
                <h4 className="font-bold text-foreground mb-4 flex items-center">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3">✓</span>
                  Mitigation Strategies
                </h4>
                <div className="space-y-3">
                  {limitation.mitigation.map((strategy, i) => (
                    <div key={i} className="flex items-start p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-foreground text-sm">{strategy}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Best Practices Summary */}
      <div className="mt-16 glass-card p-8">
        <h3 className="text-3xl font-bold text-center text-foreground mb-12">
          Best Practices for Managing AI/ML Limitations
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border-l-4 border-accent pl-6">
            <h4 className="font-bold text-foreground mb-3">Continuous Monitoring</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Implement comprehensive monitoring systems to track model performance, 
              bias metrics, and system reliability in real-time.
            </p>
          </div>
          
          <div className="border-l-4 border-primary pl-6">
            <h4 className="font-bold text-foreground mb-3">Human Oversight</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Maintain meaningful human control over critical decisions and 
              ensure security professionals retain essential skills.
            </p>
          </div>
          
          <div className="border-l-4 border-accent pl-6">
            <h4 className="font-bold text-foreground mb-3">Regular Validation</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Conduct periodic assessments of model accuracy, fairness, 
              and robustness using diverse test scenarios.
            </p>
          </div>
          
          <div className="border-l-4 border-primary pl-6">
            <h4 className="font-bold text-foreground mb-3">Transparent Documentation</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Maintain clear documentation of model decisions, limitations, 
              and potential risks for stakeholders and regulators.
            </p>
          </div>
          
          <div className="border-l-4 border-accent pl-6">
            <h4 className="font-bold text-foreground mb-3">Diverse Teams</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Build diverse AI development teams to identify potential biases 
              and ensure inclusive design practices.
            </p>
          </div>
          
          <div className="border-l-4 border-primary pl-6">
            <h4 className="font-bold text-foreground mb-3">Regulatory Alignment</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Stay current with evolving AI regulations and ensure 
              compliance with industry standards and guidelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitationsSection;