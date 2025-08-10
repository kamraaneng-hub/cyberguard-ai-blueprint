const IntroSection = () => {
  return (
    <section id="intro" className="section-container scroll-reveal">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-foreground mb-6">
          Strengthening Banking Security Through 
          <span className="text-cyber"> AI Intelligence</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          In today's digital banking landscape, cybersecurity threats evolve at unprecedented speed. 
          This platform empowers banking professionals with cutting-edge AI/ML knowledge and 
          human-centered security awareness to build an impenetrable defense system.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Why This Matters */}
        <div className="glass-card p-8 hover:bg-white/15 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">Critical Importance</h3>
          <p className="text-muted-foreground leading-relaxed">
            Financial institutions face over 300% more cyberattacks than other industries. 
            AI-powered security combined with staff awareness creates multi-layered protection 
            that adapts to emerging threats in real-time.
          </p>
        </div>

        {/* The Human Element */}
        <div className="glass-card p-8 hover:bg-white/15 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">Human-AI Partnership</h3>
          <p className="text-muted-foreground leading-relaxed">
            While AI detects patterns and anomalies, human expertise provides context, 
            ethical judgment, and critical decision-making. Together, they form an 
            unbreakable security ecosystem that protects customer assets and trust.
          </p>
        </div>

        {/* Future-Ready Skills */}
        <div className="glass-card p-8 hover:bg-white/15 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">Future-Ready Skills</h3>
          <p className="text-muted-foreground leading-relaxed">
            Master next-generation security technologies including deep learning threat detection, 
            behavioral analytics, and AI-driven incident response to stay ahead of sophisticated 
            cybercriminals targeting financial institutions.
          </p>
        </div>
      </div>

      {/* Key Statistics */}
      <div className="mt-20 p-8 glass-card">
        <h3 className="text-3xl font-bold text-center text-foreground mb-12">
          By the Numbers: Banking Cybersecurity Today
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyber mb-2">$18.3B</div>
            <p className="text-muted-foreground">Annual cybercrime costs in banking</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyber mb-2">95%</div>
            <p className="text-muted-foreground">Of attacks target human error</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyber mb-2">200ms</div>
            <p className="text-muted-foreground">AI threat detection speed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyber mb-2">73%</div>
            <p className="text-muted-foreground">Reduction in false positives with ML</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;