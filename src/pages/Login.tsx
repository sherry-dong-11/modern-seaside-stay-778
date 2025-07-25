import { useState } from "react";
import { Chrome } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header with logo */}
      <div className="w-full p-4">
        <Link to="/" className="inline-flex items-center">
          <img 
            src="/lovable-uploads/45e89a4e-b7de-45de-9bb3-c273d5f1e5c1.png" 
            alt="YEP" 
            className="h-8 w-auto"
          />
        </Link>
      </div>
      
      {/* Login form centered */}
      <div className="flex-1 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-8">
              {isSignUp ? "Create Account!" : "Welcome back!"}
            </h1>
          </div>

          <div className="space-y-6">
            {/* Continue with Google button */}
            <Button 
              className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg flex items-center justify-center gap-2"
              onClick={() => {
                // This would handle Google authentication
                console.log("Continue with Google clicked");
              }}
            >
              <Chrome className="h-5 w-5" />
              Continue with Google
            </Button>

            <div className="relative">
              <Separator className="my-6" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-background px-4 text-muted-foreground">or</span>
              </div>
            </div>

            {/* Email and Password Form */}
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isSignUp ? "Create Account" : "Sign In"}
              </Button>
            </form>

            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                {isSignUp ? "Already have an account?" : "Do not have an account?"}{" "}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-primary hover:underline font-medium"
                >
                  {isSignUp ? "Sign in" : "Sign up"}
                </button>
                .
              </p>

              {!isSignUp && (
                <Link 
                  to="/forgot-password" 
                  className="text-orange-500 hover:text-orange-600 font-medium"
                >
                  Forget Password?
                </Link>
              )}
            </div>

            <Separator className="my-6" />

            {/* Professional portals */}
            <div className="text-center text-sm text-muted-foreground">
              <p className="mb-2">
                If you are an agent or a developer, please sign in to Yephome{" "}
                <Link to="/agent-portal" className="text-blue-600 hover:underline">
                  Agent Portal
                </Link>{" "}
                or{" "}
                <Link to="/developer-portal" className="text-blue-600 hover:underline">
                  Developer Portal
                </Link>
                .
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}