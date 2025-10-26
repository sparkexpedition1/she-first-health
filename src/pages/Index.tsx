import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Brain, FileText, Video, Shield, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-20 px-4 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        <div className="container mx-auto relative z-10 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl sm:text-7xl font-bold text-white leading-tight">
              SheFirst
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed">
              Empowering women and girls with AI-powered healthcare solutions.
              Accessible, affordable, and compassionate care for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate("/mode-selection")}
                className="w-full sm:w-auto"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-foreground"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 gradient-soft">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-slide-up">
            <h2 className="text-4xl font-bold text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Women and girls in developing nations face significant health challenges, including breast cancer 
              and menstrual health issues. These problems are often worsened by limited healthcare access, 
              lack of awareness, and cultural barriers. SheFirst bridges this gap with AI-powered solutions 
              that provide accessible, private, and expert healthcare guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animate-slide-up">
            Comprehensive Healthcare Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 gradient-soft">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">How SheFirst Works</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex gap-6 items-start animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-medium">
                  {index + 1}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="gradient-primary shadow-medium max-w-4xl mx-auto animate-scale-in">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-4xl font-bold text-white">
                Ready to Take Control of Your Health?
              </h2>
              <p className="text-xl text-white/90">
                Join thousands of women who trust SheFirst for their healthcare needs.
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate("/mode-selection")}
                className="bg-white text-primary hover:bg-white/90"
              >
                Start Your Journey
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 SheFirst. Empowering women's health with AI.</p>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced Gemini AI analyzes medical documents, X-rays, and reports to provide accurate insights and recommendations."
  },
  {
    icon: FileText,
    title: "Document Intelligence",
    description: "Upload and query medical documents instantly. Extract key information, medications, and treatment plans effortlessly."
  },
  {
    icon: Video,
    title: "Virtual Consultations",
    description: "Connect with healthcare mentors through video consultations for personalized guidance and support."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your sensitive health data is encrypted and stored securely. Complete privacy and confidentiality guaranteed."
  },
  {
    icon: Heart,
    title: "Sentiment Analysis",
    description: "Understanding emotional well-being alongside physical health for comprehensive care tailored to your needs."
  },
  {
    icon: TrendingUp,
    title: "Health Timeline",
    description: "Track your health journey with dynamic timelines that visualize your progress and medical history."
  }
];

const steps = [
  {
    title: "Choose Your Mode",
    description: "Select between Self-care mode for personal health management or Mentor mode if you're a healthcare provider supporting others."
  },
  {
    title: "Upload Medical Information",
    description: "Securely upload X-rays, diagnosis reports, PDFs, or any medical documents. Our AI extracts and organizes all relevant information."
  },
  {
    title: "Get AI-Powered Insights",
    description: "Gemini AI analyzes your data to provide early diagnosis suggestions, identify symptoms, and recommend precautions."
  },
  {
    title: "Consult with Mentors",
    description: "Connect with healthcare professionals who can review your AI analysis and provide expert guidance and support."
  },
  {
    title: "Track Your Progress",
    description: "View your health timeline, monitor changes, and access comprehensive reports anytime, anywhere."
  }
];

export default Index;
