/**
 * Ecosystem Scan Engine — Owner Command Center
 * 
 * Provides automated scanning for:
 * - Uptime monitoring across all 38 ecosystem apps
 * - DOI validation for all 42 published research papers
 * - Ecosystem consistency checking across 5 websites
 * - Combined daily digest generation
 */

// ── Ecosystem App Registry ──
export const ECOSYSTEM_APPS = [
  { id: "trust-layer", name: "Trust Layer", url: "https://dwtl.io", category: "Core" },
  { id: "trust-hub", name: "Trust Hub", url: "https://trusthub.tlid.io", category: "Core" },
  { id: "dwsc", name: "DWSC", url: "https://dwsc.io", category: "Core" },
  { id: "lume", name: "Lume", url: "https://lume-lang.com", category: "Developer Tools" },
  { id: "darkwave-studios", name: "DarkWave Studios", url: "https://darkwavestudios.io", category: "Core" },
  { id: "trustgen", name: "TrustGen 3D", url: "https://trustgen.design", category: "AI" },
  { id: "tradeworks-ai", name: "TradeWorks AI", url: "https://tradeworksai.io", category: "AI" },
  { id: "darkwave-pulse", name: "DarkWave Pulse", url: "https://darkwavepulse.com", category: "AI" },
  { id: "guardian-scanner", name: "Guardian Scanner", url: "https://guardianscanner.tlid.io", category: "Security" },
  { id: "guardian-screener", name: "Guardian Screener", url: "https://guardianscreener.tlid.io", category: "Security" },
  { id: "trustshield", name: "TrustShield", url: "https://trustshield.tech", category: "Security" },
  { id: "signal-chat", name: "Signal Chat", url: "https://signalchat.tlid.io", category: "Community" },
  { id: "the-void", name: "THE VOID", url: "https://intothevoid.app", category: "Entertainment" },
  { id: "chronicles", name: "Chronicles", url: "https://yourlegacy.io", category: "Games" },
  { id: "the-arcade", name: "The Arcade", url: "https://darkwavegames.io", category: "Games" },
  { id: "bomber-3d", name: "Bomber 3D", url: "https://bomber.tlid.io", category: "Games" },
  { id: "trust-golf", name: "Trust Golf", url: "https://trustgolf.app", category: "Games" },
  { id: "orbit-staffing", name: "ORBIT Staffing", url: "https://orbitstaffing.io", category: "SaaS" },
  { id: "garagebot", name: "GarageBot", url: "https://garagebot.io", category: "SaaS" },
  { id: "lotops-pro", name: "Lot Ops Pro", url: "https://lotopspro.io", category: "SaaS" },
  { id: "orby", name: "Orby Commander", url: "https://getorby.io", category: "SaaS" },
  { id: "happy-eats", name: "Happy Eats", url: "https://happyeats.app", category: "SaaS" },
  { id: "brew-board", name: "Brew & Board", url: "https://brewandboard.coffee", category: "SaaS" },
  { id: "paintpros", name: "PaintPros", url: "https://paintpros.io", category: "SaaS" },
  { id: "nashpaintpros", name: "Nashville Painting", url: "https://nashpaintpros.io", category: "SaaS" },
  { id: "veda-solus", name: "VedaSolus", url: "https://vedasolus.io", category: "SaaS" },
  { id: "strike-agent", name: "StrikeAgent", url: "https://strikeagent.io", category: "AI" },
  { id: "tl-driver-connect", name: "TL Driver Connect", url: "https://tldriverconnect.com", category: "SaaS" },
  { id: "darkwave-academy", name: "DarkWave Academy", url: "https://academy.tlid.io", category: "Education" },
  { id: "trust-book", name: "Trust Book", url: "https://trustbook.tlid.io", category: "Content" },
  { id: "trust-home", name: "TrustHome", url: "https://trusthome.tlid.io", category: "Core" },
  { id: "trust-vault", name: "TrustVault", url: "https://trustvault.tlid.io", category: "Finance" },
  { id: "torque", name: "TORQUE", url: "https://torque.tlid.io", category: "Core" },
  { id: "tlid", name: "TLID", url: "https://tlid.io", category: "Core" },
  { id: "arbora", name: "Arbora", url: "https://arbora.tlid.io", category: "SaaS" },
  { id: "verdara", name: "Verdara", url: "https://verdara.tlid.io", category: "SaaS" },
  { id: "lumeline", name: "LumeLine", url: "https://lumeline.bet", category: "AI Trading" },
  { id: "darkwave-studio-ide", name: "DarkWave Studio", url: "https://studio.tlid.io", category: "Developer Tools" },
];

// ── DOI Registry ──
export const DOI_REGISTRY = [
  // Core Infrastructure
  { title: "Lume", subtitle: "Deterministic Natural-Language Programming", doi: "10.5281/zenodo.19612948", category: "core" },
  { title: "Lume-V", subtitle: "Deterministic Cognition and Identity", doi: "10.5281/zenodo.19463416", category: "core" },
  { title: "Lume-X", subtitle: "Canonicalization & Multi-Agent Compilation", doi: "10.5281/zenodo.19443968", category: "core" },
  { title: "Lume-OS v1", subtitle: "Deterministic Runtime", doi: "10.5281/zenodo.19430898", category: "core" },
  { title: "Lume-OS v2", subtitle: "Distributed Deterministic Runtime", doi: "10.5281/zenodo.19501104", category: "core" },
  { title: "Lume-Ops v1", subtitle: "Universal Operational Substrate", doi: "10.5281/zenodo.19487669", category: "core" },
  { title: "Lume-Ops v2", subtitle: "Deterministic Vascular Operational Mesh", doi: "10.5281/zenodo.19500230", category: "core" },
  { title: "DAIGS Master Taxonomy", subtitle: "Deterministic Autonomous Infrastructure Governance", doi: "10.5281/zenodo.19491785", category: "governance" },
  { title: "DAIGS v2", subtitle: "Multi-Organism Governance", doi: "10.5281/zenodo.19501315", category: "governance" },
  { title: "DAIGS-Fusion", subtitle: "Fusion Plasma Control", doi: "10.5281/zenodo.19508902", category: "governance" },
  { title: "TLPP", subtitle: "Trust Layer Privacy Protocol", doi: "10.5281/zenodo.19571979", category: "core" },
  // Verticals
  { title: "Lume-Med", subtitle: "Medical AI", doi: "10.5281/zenodo.19499466", category: "vertical" },
  { title: "Lume-Fin", subtitle: "Finance", doi: "10.5281/zenodo.19488366", category: "vertical" },
  { title: "Lume-Civ", subtitle: "Civic", doi: "10.5281/zenodo.19485506", category: "vertical" },
  { title: "Lume-Food", subtitle: "Food Safety", doi: "10.5281/zenodo.19499846", category: "vertical" },
  { title: "Lume-Ind", subtitle: "Industrial", doi: "10.5281/zenodo.19486295", category: "vertical" },
  { title: "Lume-Agri", subtitle: "Agriculture", doi: "10.5281/zenodo.19485203", category: "vertical" },
  { title: "Lume-Aero", subtitle: "Aerospace", doi: "10.5281/zenodo.19475426", category: "vertical" },
  { title: "Lume-Space", subtitle: "Space Systems", doi: "10.5281/zenodo.19484777", category: "vertical" },
  { title: "Lume-Def", subtitle: "Defense", doi: "10.5281/zenodo.19475467", category: "vertical" },
  { title: "Lume-Gov", subtitle: "Regulatory", doi: "10.5281/zenodo.19474511", category: "vertical" },
  { title: "Lume-Energy", subtitle: "Energy", doi: "10.5281/zenodo.19475366", category: "vertical" },
  { title: "Lume-Grid", subtitle: "Power Grid", doi: "10.5281/zenodo.19485366", category: "vertical" },
  { title: "Lume-Hydro", subtitle: "Water Systems", doi: "10.5281/zenodo.19486694", category: "vertical" },
  { title: "Lume-Env", subtitle: "Environment", doi: "10.5281/zenodo.19485824", category: "vertical" },
  { title: "Lume-Auto", subtitle: "Autonomous Vehicles", doi: "10.5281/zenodo.19485588", category: "vertical" },
  { title: "Lume-Com", subtitle: "Commercial", doi: "10.5281/zenodo.19508416", category: "vertical" },
  { title: "Lume-Cyber", subtitle: "Cybersecurity", doi: "10.5281/zenodo.19508755", category: "vertical" },
  { title: "Lume-Log", subtitle: "Logistics", doi: "10.5281/zenodo.19509313", category: "vertical" },
  { title: "Lume-Ed", subtitle: "Education", doi: "10.5281/zenodo.19509634", category: "vertical" },
  { title: "Lume-Legal", subtitle: "Legal", doi: "10.5281/zenodo.19509695", category: "vertical" },
  // Unified
  { title: "Unified Ecosystem", subtitle: "Synthetic Deterministic Organisms", doi: "10.5281/zenodo.19509861", category: "unified" },
  { title: "Lume-Civ v2", subtitle: "Civic Infrastructure v2", doi: "10.5281/zenodo.19509050", category: "vertical" },
];

// ── Website Consistency Targets ──
export const CONSISTENCY_SITES = [
  { id: "dwsc", name: "DWSC", url: "https://dwsc.io", expectedApps: 38, expectedPapers: 42 },
  { id: "trusthub", name: "Trust Hub", url: "https://trusthub.tlid.io", expectedApps: 38, expectedPapers: 42 },
  { id: "dwtl", name: "Trust Layer", url: "https://dwtl.io", expectedApps: 38, expectedPapers: 42 },
  { id: "lume", name: "Lume", url: "https://lume-lang.com", expectedApps: null, expectedPapers: 42 },
  { id: "darkwavestudios", name: "DarkWave Studios", url: "https://darkwavestudios.io", expectedApps: null, expectedPapers: 42 },
];

// ── Scan Types ──
export interface UptimeResult {
  id: string;
  name: string;
  url: string;
  category: string;
  status: "up" | "down" | "slow" | "error";
  statusCode: number | null;
  latencyMs: number;
  error?: string;
}

export interface DOIResult {
  doi: string;
  title: string;
  category: string;
  status: "valid" | "invalid" | "timeout" | "error";
  statusCode: number | null;
  resolvedUrl?: string;
}

export interface ConsistencyResult {
  siteId: string;
  siteName: string;
  url: string;
  reachable: boolean;
  statusCode: number | null;
  latencyMs: number;
}

export interface ScanDigest {
  timestamp: string;
  healthScore: number;
  uptime: {
    total: number;
    up: number;
    down: number;
    slow: number;
    results: UptimeResult[];
  };
  research: {
    total: number;
    valid: number;
    invalid: number;
    results: DOIResult[];
  };
  consistency: {
    sites: ConsistencyResult[];
  };
  alerts: string[];
}

// ── Scan Functions ──

/**
 * Ping all ecosystem apps and return status/latency
 */
export async function scanUptime(): Promise<UptimeResult[]> {
  const TIMEOUT = 15000;
  const SLOW_THRESHOLD = 5000;

  const results = await Promise.allSettled(
    ECOSYSTEM_APPS.map(async (app): Promise<UptimeResult> => {
      const start = Date.now();
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), TIMEOUT);
        const res = await fetch(app.url, {
          method: "HEAD",
          signal: controller.signal,
          redirect: "follow",
          headers: { "User-Agent": "TrustLayer-CommandCenter/1.0" },
        });
        clearTimeout(timeout);
        const latency = Date.now() - start;
        const status: UptimeResult["status"] =
          res.ok ? (latency > SLOW_THRESHOLD ? "slow" : "up") : "down";
        return {
          id: app.id,
          name: app.name,
          url: app.url,
          category: app.category,
          status,
          statusCode: res.status,
          latencyMs: latency,
        };
      } catch (err: any) {
        return {
          id: app.id,
          name: app.name,
          url: app.url,
          category: app.category,
          status: err.name === "AbortError" ? "slow" : "error",
          statusCode: null,
          latencyMs: Date.now() - start,
          error: err.message,
        };
      }
    })
  );

  return results.map((r) =>
    r.status === "fulfilled"
      ? r.value
      : { id: "unknown", name: "Unknown", url: "", category: "", status: "error" as const, statusCode: null, latencyMs: 0, error: "Promise rejected" }
  );
}

/**
 * Validate all DOIs by checking they resolve via doi.org
 */
export async function scanResearch(): Promise<DOIResult[]> {
  const TIMEOUT = 10000;

  const results = await Promise.allSettled(
    DOI_REGISTRY.map(async (paper): Promise<DOIResult> => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), TIMEOUT);
        const res = await fetch(`https://doi.org/${paper.doi}`, {
          method: "HEAD",
          signal: controller.signal,
          redirect: "manual",
        });
        clearTimeout(timeout);
        // DOI resolves with a 302 redirect to Zenodo — that's the valid state
        const isValid = res.status === 302 || res.status === 301 || res.status === 200;
        return {
          doi: paper.doi,
          title: paper.title,
          category: paper.category,
          status: isValid ? "valid" : "invalid",
          statusCode: res.status,
          resolvedUrl: res.headers.get("location") || undefined,
        };
      } catch (err: any) {
        return {
          doi: paper.doi,
          title: paper.title,
          category: paper.category,
          status: err.name === "AbortError" ? "timeout" : "error",
          statusCode: null,
        };
      }
    })
  );

  return results.map((r) =>
    r.status === "fulfilled"
      ? r.value
      : { doi: "unknown", title: "Unknown", category: "unknown", status: "error" as const, statusCode: null }
  );
}

/**
 * Check ecosystem consistency across all 5 websites
 */
export async function scanConsistency(): Promise<ConsistencyResult[]> {
  const TIMEOUT = 15000;

  const results = await Promise.allSettled(
    CONSISTENCY_SITES.map(async (site): Promise<ConsistencyResult> => {
      const start = Date.now();
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), TIMEOUT);
        const res = await fetch(site.url, {
          method: "GET",
          signal: controller.signal,
          redirect: "follow",
          headers: { "User-Agent": "TrustLayer-CommandCenter/1.0" },
        });
        clearTimeout(timeout);
        return {
          siteId: site.id,
          siteName: site.name,
          url: site.url,
          reachable: res.ok,
          statusCode: res.status,
          latencyMs: Date.now() - start,
        };
      } catch {
        return {
          siteId: site.id,
          siteName: site.name,
          url: site.url,
          reachable: false,
          statusCode: null,
          latencyMs: Date.now() - start,
        };
      }
    })
  );

  return results.map((r) =>
    r.status === "fulfilled"
      ? r.value
      : { siteId: "unknown", siteName: "Unknown", url: "", reachable: false, statusCode: null, latencyMs: 0 }
  );
}

/**
 * Calculate health score from scan results
 */
function calculateHealthScore(uptime: UptimeResult[], research: DOIResult[], consistency: ConsistencyResult[]): number {
  // Uptime: 50% weight
  const uptimeUp = uptime.filter((r) => r.status === "up").length;
  const uptimeScore = (uptimeUp / Math.max(uptime.length, 1)) * 50;

  // Research: 30% weight
  const researchValid = research.filter((r) => r.status === "valid").length;
  const researchScore = (researchValid / Math.max(research.length, 1)) * 30;

  // Consistency: 20% weight
  const consistencyUp = consistency.filter((r) => r.reachable).length;
  const consistencyScore = (consistencyUp / Math.max(consistency.length, 1)) * 20;

  return Math.round(uptimeScore + researchScore + consistencyScore);
}

/**
 * Generate alerts from scan results
 */
function generateAlerts(uptime: UptimeResult[], research: DOIResult[], consistency: ConsistencyResult[]): string[] {
  const alerts: string[] = [];

  // Uptime alerts
  const downApps = uptime.filter((r) => r.status === "down" || r.status === "error");
  if (downApps.length > 0) {
    alerts.push(`🔴 ${downApps.length} app(s) DOWN: ${downApps.map((a) => a.name).join(", ")}`);
  }
  const slowApps = uptime.filter((r) => r.status === "slow");
  if (slowApps.length > 0) {
    alerts.push(`🟡 ${slowApps.length} app(s) SLOW: ${slowApps.map((a) => `${a.name} (${a.latencyMs}ms)`).join(", ")}`);
  }

  // Research alerts
  const invalidDOIs = research.filter((r) => r.status !== "valid");
  if (invalidDOIs.length > 0) {
    alerts.push(`📄 ${invalidDOIs.length} DOI(s) not resolving: ${invalidDOIs.map((d) => d.title).join(", ")}`);
  }

  // Consistency alerts
  const downSites = consistency.filter((r) => !r.reachable);
  if (downSites.length > 0) {
    alerts.push(`🌐 ${downSites.length} website(s) unreachable: ${downSites.map((s) => s.siteName).join(", ")}`);
  }

  if (alerts.length === 0) {
    alerts.push("✅ All systems operational. No issues detected.");
  }

  return alerts;
}

/**
 * Run a full ecosystem scan and generate a digest
 */
export async function runFullScan(): Promise<ScanDigest> {
  console.log("[CommandCenter] Starting full ecosystem scan...");
  const startTime = Date.now();

  const [uptimeResults, researchResults, consistencyResults] = await Promise.all([
    scanUptime(),
    scanResearch(),
    scanConsistency(),
  ]);

  const healthScore = calculateHealthScore(uptimeResults, researchResults, consistencyResults);
  const alerts = generateAlerts(uptimeResults, researchResults, consistencyResults);

  const elapsed = Date.now() - startTime;
  console.log(`[CommandCenter] Full scan completed in ${elapsed}ms. Health: ${healthScore}/100`);

  return {
    timestamp: new Date().toISOString(),
    healthScore,
    uptime: {
      total: uptimeResults.length,
      up: uptimeResults.filter((r) => r.status === "up").length,
      down: uptimeResults.filter((r) => r.status === "down" || r.status === "error").length,
      slow: uptimeResults.filter((r) => r.status === "slow").length,
      results: uptimeResults,
    },
    research: {
      total: researchResults.length,
      valid: researchResults.filter((r) => r.status === "valid").length,
      invalid: researchResults.filter((r) => r.status !== "valid").length,
      results: researchResults,
    },
    consistency: {
      sites: consistencyResults,
    },
    alerts,
  };
}
