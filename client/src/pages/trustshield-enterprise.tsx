import { motion } from "framer-motion";
import { Shield, Brain, Lock, Layers, Network, Fingerprint, Database, Hexagon, Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import heroBg from "@/assets/generated_images/trustshield_hero.png";

function PatentFooter() {
  const patents = [
    "64/032,339", "64/047,512", "64/047,467", "64/047,496", "64/047,536"
  ];
  return (
    <div className="border-t border-white/5 py-8 mt-16 bg-[#030308]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex flex-wrap justify-center gap-2 mb-3">
          {patents.map(n => (
            <span key={n} className="text-[9px] font-mono text-cyan-400/60 px-2 py-0.5 rounded-full bg-cyan-500/5 border border-cyan-500/10">
              U.S. Pat. App. No. {n}
            </span>
          ))}
        </div>
        <p className="text-[10px] text-white/20 font-mono">Patent Pending — DarkWave Studios LLC — 2026</p>
      </div>
    </div>
  );
}

export default function TrustShieldEnterprise() {
  const pillars = [
    {
      icon: Shield, title: "Edge Validation",
      desc: "All sensor data from the Lume-Auto runtime is cryptographically signed at the hardware level before transmission, ensuring end-to-end immutability.",
      color: "from-cyan-500/20 to-cyan-500/5", accent: "text-cyan-400", border: "border-cyan-500/20",
    },
    {
      icon: Brain, title: "AI Governance",
      desc: "Every automated decision, routing logic, or data summarization is tethered to a deterministic audit trail, eliminating black-box outputs.",
      color: "from-purple-500/20 to-purple-500/5", accent: "text-purple-400", border: "border-purple-500/20",
    },
    {
      icon: Network, title: "Enterprise Trust Chain (PoA)",
      desc: "Immutable condition reports and arbitration logs are anchored to a private Proof-of-Authority ledger built specifically for closed-loop enterprise networks.",
      color: "from-emerald-500/20 to-emerald-500/5", accent: "text-emerald-400", border: "border-emerald-500/20",
    },
  ];

  const integrationFeatures = [
    { icon: Fingerprint, title: "Zero-Trust Device Identity", desc: "Every OBD-II scan generates a unique hardware-signed payload." },
    { icon: Lock, title: "Replay Verification", desc: "Arbitration disputes resolved mathematically by replaying signed scan logs." },
    { icon: Database, title: "Audit Trail Integrity", desc: "Data cannot be mutated retroactively without breaking the hash chain." },
    { icon: Hexagon, title: "Organism Bounds Validation", desc: "Verifies the 42-node deterministic runtime operated within expected safety parameters." },
  ];

  return (
    <div className="min-h-screen bg-[#030308] text-white overflow-x-hidden font-sans">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-xl bg-[#030308]/80 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <span className="font-black text-sm tracking-widest text-white">TRUSTSHIELD</span>
        </div>
        <div className="flex items-center gap-4">
          <Badge className="bg-white/5 text-white/50 border-white/10 px-3 py-1 text-xs tracking-wider">
            ENTERPRISE DEPLOYMENT
          </Badge>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-12">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-10 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030308]/60 via-[#030308]/90 to-[#030308]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-4 py-1.5 text-xs font-mono tracking-widest uppercase">
              The Security Backbone
            </Badge>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              Deterministic <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_4s_ease_infinite]">
                Verification Layer
              </span>
            </h1>

            <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
              TrustShield is the foundational security and cryptographic infrastructure supporting Lume-Auto and Lume Ops Recon. It ensures that every scan, routing decision, and system integration operates under strict deterministic governance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 px-6 bg-[#030308]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Core Infrastructure Architecture</h2>
            <p className="text-white/40 max-w-2xl mx-auto text-sm leading-relaxed">
              Designed explicitly to remove probabilistic variability from enterprise workflows.
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
                className={`bg-gradient-to-b ${p.color} border ${p.border} rounded-2xl p-8`}
              >
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 ${p.accent}`}>
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white/90">{p.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Integration Grid */}
      <section className="py-24 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-500/20 px-3 py-1 text-[10px] font-mono tracking-widest uppercase">
              System Integration
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Securing Wholesale Operations</h2>
            <p className="text-white/40 max-w-2xl text-sm leading-relaxed">
              When millions of dollars in vehicle assets move through a facility, trust cannot be assumed. TrustShield mathematically enforces integrity at every touchpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {integrationFeatures.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-[#030308] border border-white/5 rounded-xl hover:border-white/10 transition-colors"
              >
                <feat.icon className="w-5 h-5 text-white/30 mb-4" />
                <h4 className="text-sm font-bold text-white/80 mb-2">{feat.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PatentFooter />
    </div>
  );
}
