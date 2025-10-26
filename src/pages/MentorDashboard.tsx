import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Activity, FileSearch, TrendingUp, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MentorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-soft">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">SheFirst</h1>
              <p className="text-xs text-muted-foreground">Mentor Mode</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-2">Mentor Dashboard</h2>
            <p className="text-muted-foreground">
              Monitor and support your mentees with AI-powered healthcare insights.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up">
            <Card className="border-2 shadow-soft">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Active Mentees</CardTitle>
                  <Users className="w-5 h-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">24</p>
                <p className="text-xs text-muted-foreground mt-1">+3 this week</p>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-soft">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Consultations</CardTitle>
                  <Activity className="w-5 h-5 text-secondary" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-secondary">156</p>
                <p className="text-xs text-muted-foreground mt-1">Total this month</p>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-soft">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Documents Reviewed</CardTitle>
                  <FileSearch className="w-5 h-5 text-accent" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-accent">89</p>
                <p className="text-xs text-muted-foreground mt-1">This week</p>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-soft">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Success Rate</CardTitle>
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">94%</p>
                <p className="text-xs text-muted-foreground mt-1">Patient satisfaction</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Tabs */}
          <Tabs defaultValue="mentees" className="space-y-6 animate-scale-in">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="mentees">Mentees</TabsTrigger>
              <TabsTrigger value="cases">Active Cases</TabsTrigger>
              <TabsTrigger value="insights">AI Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="mentees" className="space-y-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Your Mentees</CardTitle>
                  <CardDescription>Manage and support your assigned patients</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mentees.map((mentee, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between p-4 rounded-lg border hover:shadow-soft transition-all cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                            <span className="text-white font-semibold">{mentee.initials}</span>
                          </div>
                          <div>
                            <p className="font-medium">{mentee.name}</p>
                            <p className="text-sm text-muted-foreground">{mentee.condition}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                            mentee.status === 'active' 
                              ? 'bg-primary/10 text-primary' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {mentee.status}
                          </div>
                          <Button variant="outline" size="sm">View Details</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cases" className="space-y-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Active Cases</CardTitle>
                  <CardDescription>Cases requiring immediate attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {activeCases.map((caseItem, index) => (
                      <div 
                        key={index} 
                        className="p-4 rounded-lg border-l-4 hover:shadow-soft transition-all cursor-pointer"
                        style={{ borderLeftColor: `hsl(var(--${caseItem.priority}))` }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <p className="font-medium">{caseItem.title}</p>
                          <span className="text-xs text-muted-foreground">{caseItem.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{caseItem.description}</p>
                        <Button variant="outline" size="sm">Review Case</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights" className="space-y-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>AI-Generated Insights</CardTitle>
                  <CardDescription>Patterns and recommendations from Gemini AI</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg gradient-primary text-white">
                      <p className="font-semibold mb-2">📊 Trend Analysis</p>
                      <p className="text-sm text-white/90">
                        15% increase in menstrual health consultations this month. Consider creating educational resources.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary text-white">
                      <p className="font-semibold mb-2">🎯 Early Detection Alert</p>
                      <p className="text-sm text-white/90">
                        3 patients showing early symptoms requiring follow-up. Review recommended.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-accent text-white">
                      <p className="font-semibold mb-2">💡 Resource Suggestion</p>
                      <p className="text-sm text-white/90">
                        Patients responding well to video consultations. Consider expanding availability.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

const mentees = [
  { initials: "AP", name: "Anonymous Patient 1", condition: "Routine Check-up", status: "active" },
  { initials: "BP", name: "Anonymous Patient 2", condition: "Follow-up Required", status: "active" },
  { initials: "CP", name: "Anonymous Patient 3", condition: "Under Observation", status: "monitoring" },
  { initials: "DP", name: "Anonymous Patient 4", condition: "Treatment Plan", status: "active" },
];

const activeCases = [
  {
    title: "New Document Uploaded - Patient 1",
    description: "Recent X-ray requires review and analysis",
    time: "2 hours ago",
    priority: "primary"
  },
  {
    title: "Symptom Analysis Required - Patient 2",
    description: "AI detected patterns requiring expert evaluation",
    time: "5 hours ago",
    priority: "secondary"
  },
  {
    title: "Timeline Update - Patient 3",
    description: "Health progress showing positive trends",
    time: "1 day ago",
    priority: "accent"
  },
];

export default MentorDashboard;
