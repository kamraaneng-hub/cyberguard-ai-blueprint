import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        role: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="section-container bg-muted/30 scroll-reveal">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-foreground mb-6">
          Get in <span className="text-cyber">Touch</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          Have questions about AI/ML cybersecurity? Need guidance for your organization? 
          Reach out to our security experts for personalized assistance.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Expert Support Available</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Security Consultation</h4>
                  <p className="text-muted-foreground">
                    Get personalized guidance on implementing AI/ML security solutions for your banking organization.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Training Programs</h4>
                  <p className="text-muted-foreground">
                    Custom cybersecurity awareness training designed specifically for banking professionals and teams.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Risk Assessment</h4>
                  <p className="text-muted-foreground">
                    Comprehensive security assessments to identify vulnerabilities and recommend AI/ML solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Quick Access */}
          <div className="glass-card p-6">
            <h4 className="font-bold text-foreground mb-4">Quick Answers</h4>
            <div className="space-y-3">
              <button 
                onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full text-left p-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <span className="text-accent">→</span> What is the ROI of AI security systems?
              </button>
              <button 
                onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full text-left p-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <span className="text-accent">→</span> How do we get started with AI/ML security?
              </button>
              <button 
                onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full text-left p-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <span className="text-accent">→</span> What are the implementation challenges?
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-card p-8">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Message Sent Successfully!</h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. Our cybersecurity experts will respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-foreground font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-lg border border-border bg-background text-foreground focus:border-accent focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-foreground font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-lg border border-border bg-background text-foreground focus:border-accent focus:outline-none transition-colors"
                    placeholder="john@yourbank.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organization" className="block text-foreground font-medium mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg border border-border bg-background text-foreground focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your Bank Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-foreground font-medium mb-2">
                    Role/Position
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg border border-border bg-background text-foreground focus:border-accent focus:outline-none transition-colors"
                  >
                    <option value="">Select your role</option>
                    <option value="security-officer">Security Officer</option>
                    <option value="risk-manager">Risk Manager</option>
                    <option value="compliance-officer">Compliance Officer</option>
                    <option value="it-manager">IT Manager</option>
                    <option value="executive">Executive</option>
                    <option value="analyst">Security Analyst</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-foreground font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg border border-border bg-background text-foreground focus:border-accent focus:outline-none transition-colors"
                >
                  <option value="">Select a topic</option>
                  <option value="consultation">Security Consultation</option>
                  <option value="training">Training Programs</option>
                  <option value="assessment">Risk Assessment</option>
                  <option value="implementation">AI/ML Implementation</option>
                  <option value="compliance">Compliance Questions</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-4 rounded-lg border border-border bg-background text-foreground focus:border-accent focus:outline-none transition-colors resize-vertical"
                  placeholder="Please describe your cybersecurity challenges or questions..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-hero disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              <p className="text-muted-foreground text-sm text-center">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;