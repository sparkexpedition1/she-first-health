import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, MessageSquare, Calendar, FileText, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SelfCareDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-soft">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">SheFirst</h1>
              <p className="text-xs text-muted-foreground">Self-Care Mode</p>
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
            <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
            <p className="text-muted-foreground">
              Take control of your health journey with AI-powered insights.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up">
            <Card className="border-2 hover:shadow-soft transition-all cursor-pointer">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-2">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Upload Documents</CardTitle>
                <CardDescription>
                  Add medical records, X-rays, or reports
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-soft transition-all cursor-pointer">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-2">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">AI Consultation</CardTitle>
                <CardDescription>
                  Chat with AI about your health concerns
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-soft transition-all cursor-pointer">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-2">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Health Timeline</CardTitle>
                <CardDescription>
                  View your health history and progress
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-soft transition-all cursor-pointer">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-2">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">My Documents</CardTitle>
                <CardDescription>
                  Access all your uploaded files
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Main Dashboard Tabs */}
          <Tabs defaultValue="overview" className="space-y-6 animate-scale-in">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest health interactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">Document uploaded</p>
                          <p className="text-xs text-muted-foreground">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">AI consultation completed</p>
                          <p className="text-xs text-muted-foreground">1 day ago</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">Timeline updated</p>
                          <p className="text-xs text-muted-foreground">3 days ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle>Health Insights</CardTitle>
                    <CardDescription>AI-powered recommendations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg border-l-4 border-primary bg-primary/5">
                        <p className="font-medium text-sm mb-1">Regular Check-ups</p>
                        <p className="text-xs text-muted-foreground">
                          Schedule your next health check-up within the next month
                        </p>
                      </div>
                      <div className="p-4 rounded-lg border-l-4 border-secondary bg-secondary/5">
                        <p className="font-medium text-sm mb-1">Medication Reminder</p>
                        <p className="text-xs text-muted-foreground">
                          Don't forget to take your supplements as prescribed
                        </p>
                      </div>
                      <div className="p-4 rounded-lg border-l-4 border-accent bg-accent/5">
                        <p className="font-medium text-sm mb-1">Wellness Tip</p>
                        <p className="text-xs text-muted-foreground">
                          Maintain a balanced diet and stay hydrated
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="documents" className="space-y-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>My Documents</CardTitle>
                  <CardDescription>View and manage your medical documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 space-y-4">
                    <Upload className="w-16 h-16 mx-auto text-muted-foreground" />
                    <p className="text-muted-foreground">No documents uploaded yet</p>
                    <Button variant="gradient">Upload Your First Document</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="timeline" className="space-y-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Health Timeline</CardTitle>
                  <CardDescription>Track your health journey over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 space-y-4">
                    <Calendar className="w-16 h-16 mx-auto text-muted-foreground" />
                    <p className="text-muted-foreground">Your timeline will appear here</p>
                    <Button variant="gradient">Build Your Timeline</Button>
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

export default SelfCareDashboard;
