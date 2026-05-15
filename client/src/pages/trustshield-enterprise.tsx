import { motion } from "framer-motion";
import { Shield, Server, Activity, Network, Lock, Crosshair, MapPin, Clock, Database, CheckCircle, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import heroBg from "@/assets/generated_images/trustshield_hero.png";

function PatentFooter() {
  const patents = ["64/032,339", "64/047,512", "64/047,467", "64/047,496", "64/047,536"];
  return (
    <div className="border-t border-white/5 py-12 mt-20 bg-[#030308]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {patents.map(n => (
            <span key={n} className="text-[10px] font-mono text-cyan-400/50 px-2 py-0.5 rounded-full bg-cyan-500/5 border border-cyan-500/10">
              U.S. Pat. App. No. {n}
            </span>
          ))}
        </div>
        <p className="text-[11px] text-white/30 font-mono">
          Guardian Security Architecture &mdash; DarkWave Studios LLC &mdash; 2026<br/>
          Submitted for Institutional Review
        </p>
      </div>
    </div>
  );
}

const THREAT_TAXONOMY = [
  { id: "T1", name: "Localization Spoofing", desc: "Falsified vehicle or scanner positioning data (GPS/UWB) causing physical routing misdirection.", icon: MapPin },
  { id: "T2", name: "Routing Table Manipulation", desc: "Corrupting node routing algorithms to hijack physical intake flows and lot logistics.", icon: Network },
  { id: "T3", name: "Command Hijacking", desc: "Redirecting deterministic Lume-X operational commands to unauthorized devices or users.", icon: Crosshair },
  { id: "T4", name: "Denial-of-Routing", desc: "Synthetic request flooding designed to stall the 42-node facility organism.", icon: AlertTriangle },
  { id: "T5", name: "Node Impersonation", desc: "Unauthorized hardware successfully claiming a verified Lume-V cryptographic identity.", icon: Shield },
  { id: "T6", name: "Confirmation Falsification", desc: "Forging condition report deliveries to corrupt the digital physics model.", icon: CheckCircle },
  { id: "T7", name: "Timing Attacks", desc: "Disrupting the 100Hz polling rate and TDMA scheduling of the facility mesh.", icon: Clock },
  { id: "T8", name: "Physical Node Compromise", desc: "Hardware tampering of deployed scanners to extract Secure Element PKI credentials.", icon: Lock },
  { id: "T9", name: "Ledger Fraud", desc: "Settlement manipulation and replay attacks on the private PoA Trust Chain.", icon: Database },
  { id: "T10", name: "Inter-Mesh Hijacking", desc: "Redirection of traffic and commands between disparate auction lots (Global Scalability Threat).", icon: Activity },
  { id: "T11", name: "Safety Envelope Bypass", desc: "Circumvention of the Operational Safety Layer via physical or software sensor spoofing.", icon: Server },
];

export default function TrustShieldEnterprise() {
  return (
    <div className="min-h-screen bg-[#030308] text-white overflow-x-hidden font-sans selection:bg-cyan-500/20">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-xl bg-[#030308]/80 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <span className="font-black text-sm tracking-widest text-white">TRUSTSHIELD</span>
        </div>
        <div className="flex items-center gap-4">
          <Badge className="bg-white/5 text-white/50 border-white/10 px-3 py-1 text-[10px] tracking-wider font-mono">
            ENGINEERING SPECIFICATION
          </Badge>
        </div>
      </nav>

      {/* Title Page / Header */}
      <section className="relative pt-32 pb-20 border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-10 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030308]/60 via-[#030308]/90 to-[#030308]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tight mb-6 text-white/90">
              A Formal Threat Model and Defense Framework for Deterministic Infrastructure
            </h1>
            <p className="text-lg text-cyan-400/80 max-w-3xl mx-auto mb-8 font-medium">
              The Security Architecture for Identity-Governed, Invariant-Enforced Logistics Routing
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-white/40">
              <span className="bg-white/5 px-3 py-1.5 rounded-md border border-white/10">Version 2.0</span>
              <span className="bg-white/5 px-3 py-1.5 rounded-md border border-white/10">Deployed: Manheim Network</span>
              <span className="bg-white/5 px-3 py-1.5 rounded-md border border-white/10">Scale: Multi-Facility Inter-Mesh</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Abstract */}
      <section className="py-20 px-6 bg-[#030308]">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-6 text-white/90 border-b border-white/10 pb-4">1. Abstract: The Consequence Asymmetry</h2>
            <div className="space-y-6 text-sm text-white/60 leading-relaxed font-serif">
              <p>
                Logistics routing at an enterprise scale introduces a class of vulnerabilities that has no analog in traditional data networking: a successful attack on a physical operations system does not merely corrupt data—it corrupts physics. Route manipulation misdirects million-dollar vehicle assets. Denial-of-routing attacks paralyze intake lanes. Localization spoofing creates hazardous conditions in active yards. The consequences of these attacks are not service disruption; they are physical gridlock, financial loss, and operational failure.
              </p>
              <p>
                This specification defines the complete attack surface for deterministic logistics routing and specifies the <strong>Guardian Security Framework (TrustShield)</strong>. We derive eleven threat categories from first principles and prove coverage completeness by demonstrating that every path to system compromise requires the traversal of at least one formal enforcement boundary.
              </p>
              <p>
                While deployed initially for isolated facility execution, the framework scales seamlessly via inter-mesh E-BGP (Exterior Gateway Protocol) routing to govern disparate global facilities under a unified Trust Chain, ensuring secure scaling as enterprise footprint expands.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Two-Tier Architecture */}
      <section className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-6 text-white/90 border-b border-white/10 pb-4">2. Two-Tier Defense Architecture</h2>
            <p className="text-sm text-white/60 leading-relaxed font-serif mb-10">
              The architecture operates across two distinct tiers to provide defense-in-depth. Pre-transmission authentication ensures identity is verified before the first command executes.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#030308] border border-cyan-500/20 p-8 rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.05)]">
                <h3 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5" /> Innate Tier (SHDCL)
                </h3>
                <ul className="space-y-3 text-sm text-white/50 font-sans">
                  <li className="flex items-start gap-2"><div className="mt-1 w-1 h-1 bg-cyan-500 rounded-full"/> Immediate anomaly detection (13.7ms latency)</li>
                  <li className="flex items-start gap-2"><div className="mt-1 w-1 h-1 bg-cyan-500 rounded-full"/> Process recovery without classification</li>
                  <li className="flex items-start gap-2"><div className="mt-1 w-1 h-1 bg-cyan-500 rounded-full"/> Hard command hold on unresolved anomalies</li>
                  <li className="flex items-start gap-2"><div className="mt-1 w-1 h-1 bg-cyan-500 rounded-full"/> Hardware-enforced cutoff independent of software</li>
                </ul>
              </div>

              <div className="bg-[#030308] border border-purple-500/20 p-8 rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.05)]">
                <h3 className="text-lg font-bold text-purple-400 mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5" /> Adaptive Tier (Guardian)
                </h3>
                <ul className="space-y-3 text-sm text-white/50 font-sans">
                  <li className="flex items-start gap-2"><div className="mt-1 w-1 h-1 bg-purple-500 rounded-full"/> Continuous threat classification (T1-T11 mapping)</li>
                  <li className="flex items-start gap-2"><div className="mt-1 w-1 h-1 bg-purple-500 rounded-full"/> Cryptographic node quarantine and isolation</li>
                  <li className="flex items-start gap-2"><div className="mt-1 w-1 h-1 bg-purple-500 rounded-full"/> Continuous certificate chain auditing</li>
                  <li className="flex items-start gap-2"><div className="mt-1 w-1 h-1 bg-purple-500 rounded-full"/> Route origin validation via PoA Trust Chain</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Threat Taxonomy */}
      <section className="py-24 px-6 bg-[#030308]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-6 text-white/90 border-b border-white/10 pb-4">3. The 11-Point Threat Taxonomy</h2>
            <p className="text-sm text-white/60 leading-relaxed font-serif mb-12 max-w-3xl">
              Derived from first principles rather than from enumerated known attacks, this taxonomy ensures that defense covers the complete operational threat space of an enterprise logistics facility.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {THREAT_TAXONOMY.map((threat, i) => (
                <motion.div
                  key={threat.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 bg-white/[0.02] border border-white/5 rounded-lg hover:border-cyan-500/30 transition-colors group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 text-[10px] font-mono text-white/10 group-hover:text-cyan-500/20 transition-colors">
                    {threat.id}
                  </div>
                  <threat.icon className="w-5 h-5 text-cyan-400/50 mb-4 group-hover:text-cyan-400 transition-colors" />
                  <h4 className="text-sm font-bold text-white/90 mb-2">{threat.name}</h4>
                  <p className="text-xs text-white/50 leading-relaxed font-serif">{threat.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formal Security Properties */}
      <section className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-6 text-white/90 border-b border-white/10 pb-4">4. Formal Security Properties</h2>
            <p className="text-sm text-white/60 leading-relaxed font-serif mb-10">
              The Guardian framework provides coverage completeness, proving mathematically that the following four properties hold true across the entirety of the deployment.
            </p>

            <div className="space-y-6">
              {[
                { name: "Authenticity", desc: "Every participant N in the protected mesh can be verified as the entity it claims to be before any interaction is permitted." },
                { name: "Integrity", desc: "No command, condition report, or resource flow is modified in transit without detection via deterministic signature hashing." },
                { name: "Availability", desc: "The facility organism continues operating under attack with degraded but bounded service; critical operational sessions reserve dedicated capacity." },
                { name: "Non-repudiation", desc: "Every operational event is attributable to a specific authenticated participant, permanently recorded on the PoA Trust Chain." }
              ].map((prop, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-4 p-5 bg-[#030308] border border-white/5 rounded-lg">
                  <div className="sm:w-1/4 font-mono text-sm text-cyan-400 font-bold">{prop.name}</div>
                  <div className="sm:w-3/4 text-sm text-white/60 font-serif leading-relaxed">{prop.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <PatentFooter />
    </div>
  );
}
