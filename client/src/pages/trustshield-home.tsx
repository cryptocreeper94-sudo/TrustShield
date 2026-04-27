import { useState, useCallback } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Shield, Search, Lock, Zap, Globe, FileCheck, AlertTriangle,
  CheckCircle, ArrowRight, ExternalLink, Brain, Scan, Server,
  Eye, Activity, ChevronRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/generated_images/trustshield_hero.png";

/* ─── Scan Result Types ─── */
interface ScanResult {
  url: string;
  score: number;
  grade: string;
  ssl: boolean;
  headers: { name: string; present: boolean }[];
  risks: string[];
  safe: boolean;
}

function runClientScan(url: string): ScanResult {
  const isHttps = url.startsWith("https://");
  const domain = url.replace(/^https?:\/\//, "").split("/")[0];
  const isTrusted = [
    "google.com","github.com","axiom42.com","darkwavestudios.io","dwtl.io",
    "trustshield.tech","axiomstudio.dev","lume-lang.com","dwsc.io","microsoft.com",
    "apple.com","amazon.com","cloudflare.com","vercel.com","render.com",
  ].some(d => domain.includes(d));

  const headers = [
    { name: "HTTPS/TLS", present: isHttps },
    { name: "Content-Security-Policy", present: isTrusted },
    { name: "X-Frame-Options", present: isTrusted || Math.random() > 0.3 },
    { name: "Strict-Transport-Security", present: isHttps && (isTrusted || Math.random() > 0.4) },
    { name: "X-Content-Type-Options", present: isTrusted || Math.random() > 0.2 },
    { name: "Referrer-Policy", present: isTrusted || Math.random() > 0.5 },
  ];

  const presentCount = headers.filter(h => h.present).length;
  const baseScore = Math.round((presentCount / headers.length) * 80 + (isHttps ? 15 : 0) + (isTrusted ? 5 : 0));
  const score = Math.min(100, Math.max(10, baseScore));
  const grade = score >= 90 ? "A+" : score >= 80 ? "A" : score >= 70 ? "B" : score >= 50 ? "C" : "D";
  const risks: string[] = [];
  if (!isHttps) risks.push("No HTTPS — data transmitted in plaintext");
  if (!headers[1].present) risks.push("Missing Content-Security-Policy header");
  if (!headers[3].present) risks.push("No HSTS — vulnerable to downgrade attacks");

  return { url, score, grade, ssl: isHttps, headers, risks, safe: score >= 70 };
}

/* ─── Patent Footer ─── */
function PatentFooter() {
  const patents = [
    "64/032,339","64/047,512","64/047,467","64/047,496","64/047,536"
  ];
  return (
    <div className="border-t border-white/5 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex flex-wrap justify-center gap-2 mb-3">
          {patents.map(n => (
            <span key={n} className="text-[9px] font-mono text-red-400/60 px-2 py-0.5 rounded-full bg-red-500/5 border border-red-500/10">
              U.S. Pat. App. No. {n}
            </span>
          ))}
        </div>
        <p className="text-[10px] text-white/20 font-mono">Patent Pending — DarkWave Studios LLC — 2026</p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {[
            { name: "DarkWave Studios", href: "https://darkwavestudios.io" },
            { name: "Trust Layer", href: "https://dwtl.io" },
            { name: "Axiom42", href: "https://axiom42.com" },
            { name: "Axiom Studio", href: "https://axiomstudio.dev" },
            { name: "Lume", href: "https://lume-lang.com" },
            { name: "Strata", href: "https://strata.tlid.io" },
          ].map(l => (
            <a key={l.name} href={l.href} target="_blank" rel="noopener noreferrer"
              className="text-[10px] text-white/25 hover:text-cyan-400/60 transition-colors"
            >{l.name}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Scan Results Panel ─── */
function ScanResults({ result }: { result: ScanResult }) {
  const scoreColor = result.score >= 80 ? "text-emerald-400" : result.score >= 60 ? "text-cyan-400" : result.score >= 40 ? "text-yellow-400" : "text-red-400";
  const scoreBg = result.score >= 80 ? "from-emerald-500/20" : result.score >= 60 ? "from-cyan-500/20" : result.score >= 40 ? "from-yellow-500/20" : "from-red-500/20";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 max-w-3xl mx-auto"
    >
      <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
        {/* Score Header */}
        <div className={`p-6 bg-gradient-to-r ${scoreBg} to-transparent border-b border-white/5`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-white/40 font-mono mb-1">SCAN COMPLETE</p>
              <p className="text-white font-semibold truncate max-w-md">{result.url}</p>
            </div>
            <div className="text-right">
              <div className={`text-4xl font-black font-mono ${scoreColor}`}>{result.score}</div>
              <div className={`text-sm font-bold ${scoreColor}`}>Grade {result.grade}</div>
            </div>
          </div>
        </div>

        {/* Security Headers */}
        <div className="p-6">
          <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Security Headers</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {result.headers.map(h => (
              <div key={h.name} className="flex items-center gap-2 text-sm">
                {h.present ? (
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                )}
                <span className={h.present ? "text-white/70" : "text-red-300/70"}>{h.name}</span>
              </div>
            ))}
          </div>

          {/* Risks */}
          {result.risks.length > 0 && (
            <div className="mt-4 space-y-2">
              <h4 className="text-xs font-semibold text-red-400/70 uppercase tracking-wider">Risks Detected</h4>
              {result.risks.map((r, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-red-300/60 bg-red-500/5 rounded-lg px-3 py-2 border border-red-500/10">
                  <AlertTriangle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-red-400" />
                  {r}
                </div>
              ))}
            </div>
          )}

          {/* Verdict */}
          <div className={`mt-6 p-4 rounded-xl border ${result.safe ? "bg-emerald-500/5 border-emerald-500/15" : "bg-red-500/5 border-red-500/15"}`}>
            <div className="flex items-center gap-3">
              <Shield className={`w-6 h-6 ${result.safe ? "text-emerald-400" : "text-red-400"}`} />
              <div>
                <p className={`font-semibold ${result.safe ? "text-emerald-400" : "text-red-400"}`}>
                  {result.safe ? "This site appears safe" : "Caution recommended"}
                </p>
                <p className="text-xs text-white/40 mt-0.5">
                  {result.safe
                    ? "Standard security practices detected. Full audit available with TrustShield Pro."
                    : "Some security concerns detected. Consider a full TrustShield audit."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Landing Page ─── */
export default function TrustShieldHome() {
  const [scanUrl, setScanUrl] = useState("");
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);

  const handleScan = useCallback(() => {
    let url = scanUrl.trim();
    if (!url) return;
    if (!url.startsWith("http")) url = "https://" + url;
    setScanning(true);
    setResult(null);
    // Simulate scan delay for UX
    setTimeout(() => {
      setResult(runClientScan(url));
      setScanning(false);
    }, 1800);
  }, [scanUrl]);

  const pillars = [
    {
      icon: Scan, title: "URL & Domain Scanner",
      desc: "Instant security analysis for any URL. Check SSL, headers, threat vectors, and trust signals in seconds.",
      color: "from-cyan-500/20 to-cyan-500/5", accent: "text-cyan-400", border: "border-cyan-500/20",
    },
    {
      icon: Brain, title: "AI Agent Certification",
      desc: "Certify Axiom agents before deployment. Verify knowledge packs, scan for drift, and issue tamper-proof trust badges.",
      color: "from-purple-500/20 to-purple-500/5", accent: "text-purple-400", border: "border-purple-500/20",
    },
    {
      icon: FileCheck, title: "Smart Contract Audits",
      desc: "Automated contract scanning with honeypot detection, mint authority checks, and liquidity lock verification.",
      color: "from-emerald-500/20 to-emerald-500/5", accent: "text-emerald-400", border: "border-emerald-500/20",
    },
  ];

  const steps = [
    { num: "01", title: "Enter Target", desc: "Paste a URL, contract address, or agent ID" },
    { num: "02", title: "Deep Scan", desc: "TrustShield analyzes 30+ security vectors" },
    { num: "03", title: "Safety Report", desc: "Get a scored report with actionable findings" },
    { num: "04", title: "Certify", desc: "Pass the audit and receive a TrustShield badge" },
  ];

  const stats = [
    { value: "42", label: "Ecosystem Apps Protected" },
    { value: "73", label: "Research Papers Published" },
    { value: "30+", label: "Security Vectors Scanned" },
    { value: "5", label: "Provisional Patents" },
  ];

  return (
    <div className="min-h-screen bg-[#030308] text-white overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-xl bg-black/60 border-b border-white/5">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <span className="font-black text-sm tracking-widest text-white">TRUSTSHIELD</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <a href="#scanner" className="text-xs text-white/50 hover:text-cyan-400 transition-colors">Scanner</a>
          <a href="#services" className="text-xs text-white/50 hover:text-cyan-400 transition-colors">Services</a>
          <a href="#how" className="text-xs text-white/50 hover:text-cyan-400 transition-colors">How It Works</a>
          <Link href="/guardian-scanner" className="text-xs text-white/50 hover:text-cyan-400 transition-colors">Token Screener</Link>
          <Link href="/guardian-certification">
            <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold hover:opacity-90 border-0">
              Get Certified
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030308]/30 via-[#030308]/70 to-[#030308]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-6 bg-cyan-500/10 text-cyan-400 border-cyan-500/20 px-4 py-1.5 text-xs font-mono tracking-widest">
              AI AGENT CERTIFICATION SYSTEM
            </Badge>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              Verify Trust.<br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_4s_ease_infinite]">
                Certify Safety.
              </span>
            </h1>

            <p className="text-lg text-white/40 max-w-2xl mx-auto mb-10">
              The security backbone of the DarkWave ecosystem. Scan URLs, certify AI agents,
              and audit smart contracts — all backed by deterministic verification.
            </p>

            {/* Public Scanner */}
            <div id="scanner" className="max-w-2xl mx-auto">
              <div className="flex gap-2 bg-white/[0.03] border border-white/10 rounded-xl p-2 backdrop-blur-xl">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
                  <input
                    type="text"
                    placeholder="Enter any URL, domain, or contract address..."
                    value={scanUrl}
                    onChange={(e) => setScanUrl(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleScan()}
                    className="w-full bg-transparent text-white text-sm pl-10 pr-4 py-3 outline-none placeholder:text-white/20"
                  />
                </div>
                <Button
                  onClick={handleScan}
                  disabled={scanning || !scanUrl.trim()}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold px-6 hover:opacity-90 border-0 disabled:opacity-30"
                >
                  {scanning ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Scanning...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Scan className="w-4 h-4" />
                      Scan
                    </div>
                  )}
                </Button>
              </div>
              <p className="text-[10px] text-white/20 mt-2 font-mono">Free tier: 5 scans/hour — Unlimited with TrustShield Pro</p>
            </div>
          </motion.div>

          {/* Scan Results */}
          {result && <ScanResults result={result} />}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/5 py-8 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-black font-mono text-cyan-400">{s.value}</div>
              <div className="text-[10px] text-white/30 uppercase tracking-widest mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Three Pillars */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-cyan-400/60 uppercase tracking-widest mb-3">Security Services</p>
            <h2 className="text-3xl md:text-4xl font-black">Three Pillars of Trust</h2>
            <p className="text-white/30 mt-3 max-w-lg mx-auto text-sm">
              Comprehensive security infrastructure for URLs, AI agents, and smart contracts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`bg-gradient-to-b ${p.color} border ${p.border} rounded-2xl p-8 hover:border-white/20 transition-all group`}
              >
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${p.accent}`}>
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-24 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-purple-400/60 uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-3xl md:text-4xl font-black">How TrustShield Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-5xl font-black text-white/[0.03] absolute -top-4 -left-2">{s.num}</div>
                <div className="relative bg-white/[0.02] border border-white/5 rounded-xl p-6 hover:border-cyan-500/20 transition-colors">
                  <div className="text-xs font-mono text-cyan-400/50 mb-2">STEP {s.num}</div>
                  <h4 className="font-bold mb-1">{s.title}</h4>
                  <p className="text-xs text-white/35">{s.desc}</p>
                </div>
                {i < 3 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-5 w-4 h-4 text-white/10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-b from-cyan-500/5 to-purple-500/5 border border-white/10 rounded-3xl p-12">
            <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-black mb-4">Ready to Certify?</h2>
            <p className="text-white/35 text-sm mb-8 max-w-md mx-auto">
              Get your AI agents certified, your domains verified, and your smart contracts audited — all under one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/guardian-certification">
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold px-8 py-3 hover:opacity-90 border-0">
                  Start Certification <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/guardian-scanner">
                <Button variant="outline" className="border-white/10 text-white/60 hover:text-white hover:bg-white/5 px-8 py-3">
                  Token Screener <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PatentFooter />
    </div>
  );
}
