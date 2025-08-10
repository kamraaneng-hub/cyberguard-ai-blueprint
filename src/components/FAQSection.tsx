import { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the ROI of implementing AI/ML cybersecurity systems in banking?",
      answer: "Banks typically see 300-500% ROI within 2-3 years through reduced fraud losses, operational efficiency gains, and improved compliance. For example, JPMorgan Chase reported saving over $1.2 billion annually in prevented fraud losses. Additional benefits include 60% reduction in false positives, 75% faster threat detection, and 40% decrease in manual investigation time.",
      category: "Business Value"
    },
    {
      question: "How do we get started with AI/ML cybersecurity implementation?",
      answer: "Start with a comprehensive assessment of your current security posture and data infrastructure. Begin with pilot projects in high-impact areas like fraud detection or phishing prevention. Key steps include: 1) Data preparation and quality assessment, 2) Staff training and change management, 3) Vendor evaluation and technology selection, 4) Phased implementation with continuous monitoring, 5) Regular model validation and improvement.",
      category: "Implementation"
    },
    {
      question: "What are the main challenges in implementing AI/ML security systems?",
      answer: "Common challenges include data quality and availability, integration with legacy systems, staff training and change management, regulatory compliance, and managing false positives. Success factors include executive support, dedicated project teams, adequate budget allocation, and realistic timeline expectations. Most implementations take 6-18 months depending on scope and complexity.",
      category: "Implementation"
    },
    {
      question: "How do AI/ML systems handle new, previously unseen threats?",
      answer: "AI/ML systems use multiple approaches: unsupervised learning detects anomalies and patterns in data without prior knowledge, behavioral analysis identifies deviations from normal patterns, and ensemble methods combine multiple models for broader coverage. Continuous learning capabilities allow systems to adapt to new threats automatically, while threat intelligence feeds provide updates on emerging attack vectors.",
      category: "Technology"
    },
    {
      question: "What regulatory considerations apply to AI/ML in banking cybersecurity?",
      answer: "Key regulations include GDPR for data privacy, Basel III for operational risk, PCI DSS for payment security, and emerging AI-specific regulations. Requirements typically cover model explainability, bias testing, data governance, audit trails, and risk management. Many regulators now require AI impact assessments and ongoing monitoring of algorithmic decision-making systems.",
      category: "Compliance"
    },
    {
      question: "How can we ensure AI/ML systems don't discriminate against certain customer groups?",
      answer: "Implement comprehensive bias testing throughout the model lifecycle, use diverse training datasets, conduct regular fairness audits, and establish clear governance frameworks. Techniques include statistical parity testing, equalized odds assessment, and demographic parity analysis. Many banks now employ dedicated AI ethics teams and use automated bias detection tools to ensure fair treatment.",
      category: "Ethics & Fairness"
    },
    {
      question: "What happens if our AI/ML security systems fail or are compromised?",
      answer: "Robust contingency planning includes backup manual processes, redundant systems, rapid response procedures, and clear escalation paths. Most banks implement layered security with both AI and traditional rule-based systems. Key components include system health monitoring, automatic failover mechanisms, incident response teams, and regular disaster recovery testing.",
      category: "Risk Management"
    },
    {
      question: "How do we measure the effectiveness of AI/ML cybersecurity systems?",
      answer: "Key metrics include detection accuracy rates, false positive/negative ratios, mean time to detection (MTTD), mean time to response (MTTR), threat coverage, and business impact measures. Advanced metrics cover model drift, bias measurements, and explainability scores. Most banks establish baseline measurements and track improvements over time using comprehensive dashboards and reporting systems.",
      category: "Performance"
    },
    {
      question: "What skills do our staff need to work effectively with AI/ML security systems?",
      answer: "Essential skills include basic AI/ML literacy, data analysis capabilities, cybersecurity fundamentals, and system monitoring competencies. Training programs should cover threat pattern recognition, model interpretation, incident response procedures, and ethical AI principles. Many banks invest in certification programs and ongoing education to keep staff current with evolving technologies.",
      category: "Training"
    },
    {
      question: "How do we balance automation with human oversight in cybersecurity?",
      answer: "Effective human-AI collaboration involves automated detection with human validation for critical decisions, escalation procedures for high-risk scenarios, and regular human review of system decisions. Best practices include maintaining human expertise through training, preserving decision-making authority for complex cases, and ensuring humans can override system decisions when necessary."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const categories = Array.from(new Set(faqs.map(faq => faq.category).filter(Boolean)));

  return (
    <section id="faq" className="section-container scroll-reveal">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-foreground mb-6">
          Frequently Asked <span className="text-cyber">Questions</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          Get answers to common questions about AI/ML cybersecurity implementation, 
          best practices, and challenges in banking environments.
        </p>
      </div>

      {/* Category Overview */}
      <div className="glass-card p-8 mb-16">
        <h3 className="text-2xl font-bold text-center text-foreground mb-8">
          FAQ Categories
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <h4 className="font-semibold text-foreground text-sm">{category}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="glass-card overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-6 hover:bg-white/5 transition-colors focus:outline-none focus:bg-white/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
                  {faq.category && (
                    <span className="inline-block mt-2 px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                      {faq.category}
                    </span>
                  )}
                </div>
                <div className="flex-shrink-0 ml-4">
                  <svg
                    className={`w-6 h-6 text-muted-foreground transition-transform duration-200 ${
                      openFAQ === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </button>
            
            {openFAQ === index && (
              <div className="px-6 pb-6">
                <div className="border-t border-border pt-4">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="mt-16 glass-card p-8">
        <h3 className="text-2xl font-bold text-center text-foreground mb-8">
          Need More Information?
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h4 className="font-bold text-foreground mb-3">Expert Consultation</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Schedule a personalized consultation with our cybersecurity experts to discuss your specific needs.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-accent hover:text-accent/80 font-semibold"
            >
              Contact Us →
            </button>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 className="font-bold text-foreground mb-3">Training Resources</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Access comprehensive training materials and certification programs for your team.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-accent hover:text-accent/80 font-semibold"
            >
              Learn More →
            </button>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h4 className="font-bold text-foreground mb-3">Assessment Tools</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Evaluate your current security posture with our comprehensive assessment framework.
            </p>
            <button 
              onClick={() => document.getElementById('knowledge-check')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-accent hover:text-accent/80 font-semibold"
            >
              Take Assessment →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;