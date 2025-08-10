const BestPracticesSection = () => {
  const dos = [
    {
      title: "Verify Before You Trust",
      description: "Always verify the identity of requesters through independent channels before sharing sensitive information or performing high-risk actions.",
      icon: "✅",
      details: [
        "Call back using known numbers from directory",
        "Verify unusual requests with supervisors",
        "Use multi-factor authentication consistently",
        "Confirm wire transfers through separate channels"
      ]
    },
    {
      title: "Maintain Strong Password Hygiene",
      description: "Use unique, complex passwords with multi-factor authentication for all banking systems and regularly update credentials.",
      icon: "🔐",
      details: [
        "Use password managers for unique passwords",
        "Enable MFA on all accounts",
        "Change default passwords immediately",
        "Report suspected credential compromise"
      ]
    },
    {
      title: "Stay Alert to Social Engineering",
      description: "Recognize manipulation tactics and pressure techniques used by cybercriminals to bypass security controls.",
      icon: "🧠",
      details: [
        "Question urgent, unusual requests",
        "Be wary of emotional manipulation",
        "Verify caller identity independently",
        "Report suspicious communications"
      ]
    },
    {
      title: "Keep Systems Updated",
      description: "Maintain current security patches and software versions to prevent exploitation of known vulnerabilities.",
      icon: "🔄",
      details: [
        "Install security updates promptly",
        "Use approved software only",
        "Report outdated systems to IT",
        "Follow patch management procedures"
      ]
    },
    {
      title: "Practice Secure Communication",
      description: "Use encrypted channels and verify recipients before sharing confidential banking information.",
      icon: "📧",
      details: [
        "Use encrypted email for sensitive data",
        "Verify recipient email addresses",
        "Avoid sensitive info in unsecured messages",
        "Follow data classification guidelines"
      ]
    },
    {
      title: "Monitor and Report Anomalies",
      description: "Actively watch for unusual activities and report potential security incidents immediately.",
      icon: "👀",
      details: [
        "Monitor account activities regularly",
        "Report suspicious system behavior",
        "Watch for unusual network activity",
        "Document and escalate concerns"
      ]
    }
  ];

  const donts = [
    {
      title: "Never Share Credentials",
      description: "Never share passwords, PINs, or authentication codes with anyone, regardless of their claimed authority.",
      icon: "❌",
      warning: "High Risk",
      consequences: [
        "Account compromise and unauthorized access",
        "Regulatory violations and compliance issues",
        "Financial losses and liability exposure",
        "Customer data breaches and privacy violations"
      ]
    },
    {
      title: "Don't Click Suspicious Links",
      description: "Avoid clicking links in unexpected emails, especially those creating urgency or requesting immediate action.",
      icon: "🚫",
      warning: "Critical Risk",
      consequences: [
        "Malware installation on systems",
        "Credential harvesting through fake sites",
        "Network compromise and lateral movement",
        "Data exfiltration and business disruption"
      ]
    },
    {
      title: "Avoid Unsecured Public Networks",
      description: "Never access banking systems or handle sensitive data over public Wi-Fi or unsecured networks.",
      icon: "📶",
      warning: "Medium Risk",
      consequences: [
        "Man-in-the-middle attacks",
        "Data interception and eavesdropping",
        "Session hijacking and impersonation",
        "Credential theft and account takeover"
      ]
    },
    {
      title: "Don't Download Unauthorized Software",
      description: "Avoid installing software, browser extensions, or apps that haven't been approved by IT security.",
      icon: "💾",
      warning: "High Risk",
      consequences: [
        "Malware and ransomware infections",
        "System backdoors and persistent threats",
        "Data loss and corruption",
        "Compliance violations and audit failures"
      ]
    },
    {
      title: "Never Bypass Security Controls",
      description: "Don't circumvent security measures like VPNs, firewalls, or endpoint protection systems.",
      icon: "🔓",
      warning: "Critical Risk",
      consequences: [
        "Exposure to external threats",
        "Policy violations and disciplinary action",
        "Audit findings and regulatory penalties",
        "Increased vulnerability to attacks"
      ]
    },
    {
      title: "Avoid Mixing Personal and Work",
      description: "Don't use personal devices, accounts, or storage for banking business or vice versa.",
      icon: "📱",
      warning: "Medium Risk",
      consequences: [
        "Data leakage and privacy breaches",
        "Compliance violations and legal issues",
        "Loss of data control and governance",
        "Increased attack surface and exposure"
      ]
    }
  ];

  const getWarningColor = (warning: string) => {
    switch (warning) {
      case 'Critical Risk': return 'bg-destructive';
      case 'High Risk': return 'bg-orange-500';
      case 'Medium Risk': return 'bg-yellow-500';
      default: return 'bg-muted';
    }
  };

  return (
    <section id="best-practices" className="section-container bg-muted/30 scroll-reveal">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-foreground mb-6">
          Security <span className="text-cyber">Do's & Don'ts</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          Essential guidelines for banking staff to maintain robust cybersecurity posture 
          and protect against evolving threats in the digital banking landscape.
        </p>
      </div>

      {/* Quick Reference Card */}
      <div className="glass-card p-8 mb-16">
        <h3 className="text-2xl font-bold text-center text-foreground mb-8">
          Security Mindset: The Foundation of Cyber Defense
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🛡️</span>
            </div>
            <h4 className="font-bold text-foreground mb-2">Think Before You Act</h4>
            <p className="text-muted-foreground text-sm">
              Pause and consider security implications before clicking, sharing, or downloading anything.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🔍</span>
            </div>
            <h4 className="font-bold text-foreground mb-2">Verify Everything</h4>
            <p className="text-muted-foreground text-sm">
              Always verify identities, requests, and communications through independent channels.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">📢</span>
            </div>
            <h4 className="font-bold text-foreground mb-2">Report Immediately</h4>
            <p className="text-muted-foreground text-sm">
              When in doubt, report suspicious activities to the security team without delay.
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* DO's Section */}
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center">
            <span className="text-green-500 mr-3">✅</span>
            Security DO's
          </h3>
          <div className="space-y-6">
            {dos.map((item, index) => (
              <div key={index} className="glass-card p-6 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start mb-4">
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="ml-11">
                  <h5 className="font-semibold text-foreground mb-2">Key Actions:</h5>
                  <div className="space-y-1">
                    {item.details.map((detail, i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DON'T's Section */}
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center">
            <span className="text-red-500 mr-3">❌</span>
            Security DON'Ts
          </h3>
          <div className="space-y-6">
            {donts.map((item, index) => (
              <div key={index} className="glass-card p-6 hover:bg-white/15 transition-all duration-300 border-l-4 border-red-500">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-white text-xs font-medium ${getWarningColor(item.warning)}`}>
                    {item.warning}
                  </span>
                </div>
                <div className="ml-11">
                  <h5 className="font-semibold text-foreground mb-2">Potential Consequences:</h5>
                  <div className="space-y-1">
                    {item.consequences.map((consequence, i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{consequence}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Response Card */}
      <div className="mt-16 glass-card p-8 border-l-4 border-destructive">
        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
          <span className="text-destructive mr-3">🚨</span>
          Emergency Response: If You Suspect a Security Incident
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-foreground mb-3">Immediate Actions (First 5 Minutes):</h4>
            <div className="space-y-2">
              {[
                "Disconnect from network if system is compromised",
                "Do not attempt to \"fix\" the problem yourself", 
                "Document what happened and when",
                "Contact IT Security immediately",
                "Preserve evidence - don't delete anything"
              ].map((action, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-6 h-6 bg-destructive text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-foreground text-sm">{action}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-3">Contact Information:</h4>
            <div className="space-y-3">
              <div className="bg-destructive/10 p-3 rounded-lg">
                <div className="font-semibold text-foreground">Security Hotline</div>
                <div className="text-destructive font-bold">1-800-SECURITY</div>
                <div className="text-muted-foreground text-sm">Available 24/7 for incidents</div>
              </div>
              <div className="bg-primary/10 p-3 rounded-lg">
                <div className="font-semibold text-foreground">Email (Non-urgent)</div>
                <div className="text-primary font-bold">security@yourbank.com</div>
                <div className="text-muted-foreground text-sm">For questions and guidance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestPracticesSection;