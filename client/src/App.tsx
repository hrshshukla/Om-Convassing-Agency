import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/Landing";
import { HelmetProvider } from "react-helmet-async";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </HelmetProvider>
  );
}

export default App;
