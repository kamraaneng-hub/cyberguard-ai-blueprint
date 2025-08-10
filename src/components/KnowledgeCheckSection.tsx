import { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const KnowledgeCheckSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "You receive an urgent email from your 'CEO' asking you to immediately wire $50,000 to a vendor for a critical project. The email looks official and includes the company logo. What should you do?",
      options: [
        "Process the wire transfer immediately since it's from the CEO",
        "Call the CEO using the number from the company directory to verify",
        "Forward the email to accounting to handle",
        "Reply to the email asking for more details"
      ],
      correct: 1,
      explanation: "This is a classic Business Email Compromise (BEC) attack. Always verify unusual financial requests through independent channels using known contact information, not the contact details provided in the suspicious email."
    },
    {
      id: 2,
      question: "Which of the following is the MOST effective way AI/ML helps detect banking fraud?",
      options: [
        "Blocking all international transactions automatically",
        "Analyzing patterns in real-time to identify anomalous behavior",
        "Requiring manual approval for all transactions over $1,000",
        "Using only rule-based systems for transaction monitoring"
      ],
      correct: 1,
      explanation: "AI/ML excels at pattern recognition and can analyze vast amounts of transaction data in real-time to identify subtle anomalies that might indicate fraud, while adapting to new fraud patterns automatically."
    },
    {
      id: 3,
      question: "A customer calls saying they can't access their account and asks you to verify their identity by reading their account balance over the phone. They provide their name and phone number. What's the safest approach?",
      options: [
        "Read the balance since they provided identifying information",
        "Ask them to come to the branch with proper ID",
        "Verify their identity using the bank's established authentication procedures",
        "Transfer them to a supervisor immediately"
      ],
      correct: 2,
      explanation: "Never provide account information based solely on basic details like name and phone number. Always follow your bank's established multi-factor authentication procedures, which may include security questions, verification codes, or other secure methods."
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setShowExplanation(false);
  };

  const getScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correct ? 1 : 0);
    }, 0);
  };

  const getScoreMessage = () => {
    const score = getScore();
    const percentage = (score / questions.length) * 100;
    
    if (percentage === 100) {
      return { 
        title: "Excellent! 🎉", 
        message: "You have a strong understanding of cybersecurity best practices.",
        color: "text-green-500"
      };
    } else if (percentage >= 66) {
      return { 
        title: "Good Job! 👍", 
        message: "You're on the right track, but review the areas where you missed questions.",
        color: "text-accent"
      };
    } else {
      return { 
        title: "Needs Improvement 📚", 
        message: "Consider reviewing the cybersecurity training materials more thoroughly.",
        color: "text-orange-500"
      };
    }
  };

  if (showResults) {
    const scoreMessage = getScoreMessage();
    
    return (
      <section id="knowledge-check" className="section-container scroll-reveal">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Knowledge Check <span className="text-cyber">Results</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 text-center">
            <div className="text-6xl font-bold text-cyber mb-4">
              {getScore()}/{questions.length}
            </div>
            <h3 className={`text-3xl font-bold mb-4 ${scoreMessage.color}`}>
              {scoreMessage.title}
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              {scoreMessage.message}
            </p>

            <div className="space-y-6 mb-8">
              {questions.map((question, index) => (
                <div key={index} className="text-left p-6 bg-background/50 rounded-lg">
                  <h4 className="font-bold text-foreground mb-2">
                    Question {index + 1}: {selectedAnswers[index] === question.correct ? '✅' : '❌'}
                  </h4>
                  <p className="text-muted-foreground mb-3">{question.question}</p>
                  <div className="space-y-2">
                    <div className={`p-2 rounded ${selectedAnswers[index] === question.correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      Your answer: {question.options[selectedAnswers[index]]}
                    </div>
                    {selectedAnswers[index] !== question.correct && (
                      <div className="p-2 rounded bg-green-100 text-green-800">
                        Correct answer: {question.options[question.correct]}
                      </div>
                    )}
                    <p className="text-muted-foreground text-sm italic">
                      {question.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={handleReset}
              className="btn-hero"
            >
              Take Quiz Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <section id="knowledge-check" className="section-container scroll-reveal">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-foreground mb-6">
          Quick <span className="text-cyber">Knowledge Check</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          Test your understanding of cybersecurity best practices with these scenario-based questions. 
          Real-world situations you might encounter in banking.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-muted-foreground">Progress</span>
            <span className="text-foreground font-semibold">
              {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="h-2 rounded-full bg-gradient-to-r from-accent to-primary transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Question {currentQuestion + 1}
          </h3>
          <p className="text-lg text-foreground mb-8 leading-relaxed">
            {currentQ.question}
          </p>

          {/* Answer Options */}
          <div className="space-y-4 mb-8">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showExplanation}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                  selectedAnswers[currentQuestion] === index
                    ? selectedAnswers[currentQuestion] === currentQ.correct
                      ? 'border-green-500 bg-green-100 text-green-800'
                      : 'border-red-500 bg-red-100 text-red-800'
                    : index === currentQ.correct && showExplanation
                    ? 'border-green-500 bg-green-100 text-green-800'
                    : 'border-border hover:border-accent hover:bg-accent/10'
                } ${showExplanation ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">{String.fromCharCode(65 + index)}</span>
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="p-6 bg-background/50 rounded-lg mb-6">
              <h4 className="font-bold text-foreground mb-2 flex items-center">
                <span className="mr-2">💡</span>
                Explanation
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <div className="text-muted-foreground">
              {selectedAnswers[currentQuestion] !== undefined ? (
                selectedAnswers[currentQuestion] === currentQ.correct ? (
                  <span className="text-green-500 font-semibold">✅ Correct!</span>
                ) : (
                  <span className="text-red-500 font-semibold">❌ Incorrect</span>
                )
              ) : (
                "Select an answer to continue"
              )}
            </div>
            
            {showExplanation && (
              <button 
                onClick={handleNext}
                className="btn-hero"
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'View Results'}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeCheckSection;