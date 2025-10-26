import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Stethoscope, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ModeSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-soft flex flex-col">
      {/* Header */}
      <header className="p-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-5xl w-full space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Choose Your Mode
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select how you'd like to use SheFirst. You can manage your own health or support others as a healthcare mentor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-8">
            {/* Self-Care Mode */}
            <Card 
              className="border-2 hover:shadow-medium transition-all duration-300 cursor-pointer hover:scale-105 group animate-slide-up"
              onClick={() => navigate("/self-care")}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-glow transition-all duration-300">
                  <User className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl">Self-Care Mode</CardTitle>
                <CardDescription className="text-base">
                  Take control of your personal health journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Upload and analyze your medical documents</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Track your health timeline and progress</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Get AI-powered health insights and recommendations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Connect with healthcare mentors when needed</span>
                  </li>
                </ul>
                <Button 
                  variant="gradient" 
                  className="w-full mt-6"
                  size="lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/self-care");
                  }}
                >
                  Start Self-Care Journey
                </Button>
              </CardContent>
            </Card>

            {/* Mentor Mode */}
            <Card 
              className="border-2 hover:shadow-medium transition-all duration-300 cursor-pointer hover:scale-105 group animate-slide-up"
              style={{ animationDelay: "0.1s" }}
              onClick={() => navigate("/mentor")}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-glow transition-all duration-300">
                  <Stethoscope className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl">Mentor Mode</CardTitle>
                <CardDescription className="text-base">
                  Support and guide others on their health journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>Monitor and assist multiple patients</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>Review AI analysis and provide expert guidance</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>Analyze symptoms for early diagnosis</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>Build comprehensive health timelines</span>
                  </li>
                </ul>
                <Button 
                  variant="secondary" 
                  className="w-full mt-6"
                  size="lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/mentor");
                  }}
                >
                  Start as Mentor
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModeSelection;
