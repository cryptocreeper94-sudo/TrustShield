import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Shield, Zap, Crosshair, Check, ChevronRight } from "lucide-react";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Guardian Basic",
      price: billingCycle === "monthly" ? "Free" : "Free",
      description: "Basic security scanning for casual traders",
      features: [
        "10 scans per day",
        "Basic safety indicators",
        "Honeypot detection",
        "Contract verification status",
      ],
      buttonText: "Current Plan",
      buttonClass: "border-white/10 text-white/70 hover:bg-white/5",
      icon: Shield,
    },
    {
      name: "Guardian Pro",
      price: billingCycle === "monthly" ? "$29" : "$290",
      description: "Advanced intelligence for serious traders",
      features: [
        "Unlimited scans",
        "Real-time wallet tracking",
        "AI momentum predictions",
        "API access (100 req/min)",
        "Priority support",
      ],
      buttonText: "Upgrade to Pro",
      buttonClass: "bg-cyan-500 hover:bg-cyan-400 text-black font-bold",
      icon: Zap,
      popular: true,
    },
    {
      name: "Guardian Enterprise",
      price: billingCycle === "monthly" ? "$149" : "$1490",
      description: "Full suite for trading firms and DAOs",
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "Custom API limits",
        "Strike Agent auto-sniping",
        "Whitelabel reports",
      ],
      buttonText: "Contact Sales",
      buttonClass: "border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10",
      icon: Crosshair,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white pt-20 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-space bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent mb-4"
          >
            Terminal Intelligence Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/50 max-w-2xl mx-auto mb-8"
          >
            Upgrade your security posture with real-time AI insights, unlimited scanning, and enterprise-grade threat detection.
          </motion.p>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white font-medium' : 'text-white/50'}`}>Monthly</span>
            <button 
              onClick={() => setBillingCycle(c => c === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-12 h-6 rounded-full bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            >
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-cyan-400 transition-transform ${billingCycle === 'yearly' ? 'left-7' : 'left-1'}`} />
            </button>
            <span className={`text-sm flex items-center gap-2 ${billingCycle === 'yearly' ? 'text-white font-medium' : 'text-white/50'}`}>
              Yearly <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className={`relative rounded-2xl border p-8 flex flex-col ${plan.popular ? 'border-cyan-500/50 bg-cyan-500/5' : 'border-white/10 bg-white/[0.02]'}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-500 text-black text-xs font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${plan.popular ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/10 text-white/70'}`}>
                  <plan.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
              </div>
              
              <div className="mb-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Free" && <span className="text-white/50 text-sm ml-2">/ {billingCycle === "monthly" ? "mo" : "yr"}</span>}
              </div>
              <p className="text-white/50 text-sm mb-8">{plan.description}</p>
              
              <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all mb-8 ${plan.buttonClass}`}>
                {plan.buttonText}
              </button>
              
              <div className="mt-auto space-y-4">
                <div className="text-sm font-medium text-white/80 uppercase tracking-widest text-[10px]">What's included</div>
                {plan.features.map(f => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
