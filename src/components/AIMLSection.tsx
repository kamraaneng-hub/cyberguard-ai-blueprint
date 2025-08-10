const AIMLSection = () => {
  return (
    <section id="ai-ml" className="section-container bg-muted/30 scroll-reveal">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-foreground mb-6">
          Understanding <span className="text-cyber">AI & ML</span> in Cybersecurity
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          Discover how artificial intelligence and machine learning revolutionize 
          threat detection, prevention, and response in banking environments.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        {/* AI Definition Card */}
        <div className="glass-card p-10 hover:bg-white/15 transition-all duration-300">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">AI</span>
            </div>
            <h3 className="text-3xl font-bold text-foreground">Artificial Intelligence</h3>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            AI systems simulate human intelligence to analyze vast amounts of data, 
            recognize patterns, and make decisions in cybersecurity contexts.
          </p>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
              <span className="text-foreground">Real-time threat analysis</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
              <span className="text-foreground">Automated incident response</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
              <span className="text-foreground">Predictive threat modeling</span>
            </div>
          </div>
        </div>

        {/* ML Definition Card */}
        <div className="glass-card p-10 hover:bg-white/15 transition-all duration-300">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">ML</span>
            </div>
            <h3 className="text-3xl font-bold text-foreground">Machine Learning</h3>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            ML algorithms learn from historical data to identify anomalies, 
            detect new threats, and improve security systems without explicit programming.
          </p>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-foreground">Anomaly detection</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-foreground">Behavioral analysis</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-foreground">Adaptive learning</span>
            </div>
          </div>
        </div>
      </div>

      {/* Banking Use Cases */}
      <div className="mb-20">
        <h3 className="text-4xl font-bold text-center text-foreground mb-12">
          AI/ML Applications in Banking Security
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Fraud Detection",
              icon: "🛡️",
              description: "Real-time transaction monitoring using ML algorithms to identify suspicious patterns and prevent fraudulent activities.",
              examples: ["Credit card fraud", "Account takeover", "Payment anomalies"]
            },
            {
              title: "Identity Verification",
              icon: "🔍",
              description: "Biometric authentication and behavioral analysis to verify customer identities and prevent unauthorized access.",
              examples: ["Facial recognition", "Voice patterns", "Typing behavior"]
            },
            {
              title: "Network Security",
              icon: "🌐",
              description: "AI-powered monitoring of network traffic to detect intrusions, malware, and advanced persistent threats.",
              examples: ["DDoS detection", "Malware analysis", "Traffic anomalies"]
            },
            {
              title: "Risk Assessment",
              icon: "📊",
              description: "Automated evaluation of security risks using predictive analytics and threat intelligence feeds.",
              examples: ["Credit risk", "Operational risk", "Compliance monitoring"]
            },
            {
              title: "Incident Response",
              icon: "⚡",
              description: "Automated threat containment and response systems that react faster than human operators.",
              examples: ["Auto-isolation", "Threat hunting", "Forensic analysis"]
            },
            {
              title: "Customer Protection",
              icon: "👥",
              description: "Protecting customers from social engineering, phishing, and other human-targeted attacks.",
              examples: ["Email filtering", "Phishing detection", "Scam prevention"]
            }
          ].map((useCase, index) => (
            <div key={index} className="glass-card p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h4 className="text-xl font-bold text-foreground mb-3">{useCase.title}</h4>
              <p className="text-muted-foreground mb-4 leading-relaxed">{useCase.description}</p>
              <div className="space-y-2">
                {useCase.examples.map((example, i) => (
                  <div key={i} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                    <span className="text-foreground">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Supervised vs Unsupervised Learning */}
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="glass-card p-8">
          <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center mr-3">
              <span className="text-white text-sm font-bold">S</span>
            </div>
            Supervised Learning
          </h4>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Uses labeled training data to learn patterns and make predictions. 
            Perfect for known threat signatures and fraud patterns.
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-accent pl-4">
              <h5 className="font-semibold text-foreground">Example: Credit Card Fraud</h5>
              <p className="text-muted-foreground text-sm">
                Train on historical fraud cases to identify suspicious transactions
              </p>
            </div>
            <div className="border-l-4 border-accent pl-4">
              <h5 className="font-semibold text-foreground">Benefits</h5>
              <p className="text-muted-foreground text-sm">
                High accuracy for known threats, explainable results
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card p-8">
          <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
              <span className="text-white text-sm font-bold">U</span>
            </div>
            Unsupervised Learning
          </h4>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Discovers hidden patterns in data without labeled examples. 
            Essential for detecting unknown threats and zero-day attacks.
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h5 className="font-semibold text-foreground">Example: Anomaly Detection</h5>
              <p className="text-muted-foreground text-sm">
                Identify unusual behavior patterns that may indicate new threats
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h5 className="font-semibold text-foreground">Benefits</h5>
              <p className="text-muted-foreground text-sm">
                Discovers unknown threats, adapts to new attack vectors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMLSection;