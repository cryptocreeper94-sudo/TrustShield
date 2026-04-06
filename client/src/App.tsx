import { useEffect, Suspense, Component, type ReactNode } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PreferencesProvider, NotificationsProvider } from "@/lib/store";
import { WalletProvider } from "@/hooks/use-wallet";

// We only import what TrustShield needs
import GuardianScanner from "@/pages/guardian-scanner";
import GuardianScannerDetail from "@/pages/token-detail";
import GuardianAI from "@/pages/guardian-ai";
import GuardianAIRegistry from "@/pages/guardian-ai-registry";
import GuardianShield from "@/pages/guardian-shield";
import GuardianCertification from "@/pages/guardian-certification";
import GuardianWhitepaper from "@/pages/guardian-whitepaper";
import GuardianPortal from "@/pages/guardian-portal";
import Welcome from "@/pages/welcome";
import Pricing from "@/pages/pricing";
import NotFound from "@/pages/not-found";
import { FloatingThemeToggle } from "@/components/theme-toggle";

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, info: any) {
    console.error("[ErrorBoundary]", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: "100vh", background: "#060606", color: "#fff", fontFamily: "system-ui, sans-serif", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
          <div style={{ textAlign: "center", maxWidth: 420 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>&#9888;</div>
            <h1 style={{ fontSize: 22, marginBottom: 12, color: "#10b981" }}>Scan Interrupt</h1>
            <button
              onClick={() => window.location.reload()}
              style={{ background: "linear-gradient(135deg, #10b981, #047857)", color: "#000", border: "none", borderRadius: 12, padding: "14px 32px", cursor: "pointer", fontWeight: 600 }}
            >
              Reinitialize Optics
            </button>
            <p style={{ color: "#64748b", fontSize: 12, marginTop: 16 }}>
              {this.state.error?.message}
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function PageLoader() {
  return (
    <div className="min-h-screen bg-[#060606] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-3 border-emerald-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-emerald-500/60 font-mono text-sm tracking-widest uppercase">Initializing TrustShield...</p>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location]);
  return null;
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <ScrollToTop />
      <Switch>
      <FloatingThemeToggle />
        <Route path="/" component={GuardianScanner} />
        <Route path="/guardian-ai" component={GuardianAI} />
        <Route path="/guardian-ai-registry" component={GuardianAIRegistry} />
        <Route path="/guardian-shield" component={GuardianShield} />
        <Route path="/guardian-certification" component={GuardianCertification} />
        <Route path="/guardian-whitepaper" component={GuardianWhitepaper} />
        <Route path="/guardian-portal" component={GuardianPortal} />
        <Route path="/guardian-scanner" component={GuardianScanner} />
        <Route path="/guardian-scanner/:chain/:symbol" component={GuardianScannerDetail} />
        <Route path="/login" component={Welcome} />
        <Route path="/signup" component={Welcome} />
        <Route path="/pricing" component={Pricing} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function AppShell() {
  return (
    <>
      <Router />
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <WalletProvider>
          <PreferencesProvider>
            <NotificationsProvider>
              <TooltipProvider>
                <AppShell />
                <Toaster />
              </TooltipProvider>
            </NotificationsProvider>
          </PreferencesProvider>
        </WalletProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
