// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - RelaySwitch Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowUp, Bolt, Gauge, Grid3X3, Keyboard, Settings, TriangleAlert, Volume2, X } from "lucide-react";


export type GameSettingsRelayswitchLiteActionId = "close-1" | "casual-2" | "normal-3" | "overload-4" | "cancel-5" | "apply-override-6" | "grid-os-1" | "power-stats-2" | "overload-logs-3" | "system-cfg-4";

export interface GameSettingsRelayswitchLiteProps {
  actions?: Partial<Record<GameSettingsRelayswitchLiteActionId, () => void>>;

}

export function GameSettingsRelayswitchLite({ actions }: GameSettingsRelayswitchLiteProps) {
  return (
    <>
      {/* Simulated Gameplay Background */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 bg-no-repeat" data-alt="A dark, abstract representation of a futuristic circuit board or power grid. The scene features deep obsidian blacks illuminated by stark, geometric lines of neon cyan and magenta. The composition suggests high-speed data transfer or electrical current flowing through a complex network. The lighting is dramatic and moody, with a strong cyber-electric aesthetic typical of arcade-style interfaces."></div>
      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{backgroundImage: "linear-gradient(#00f3ff 1px, transparent 1px), linear-gradient(90deg, #00f3ff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
      {/* Side NavBar (Hidden on mobile, present on desktop for navigation consistency) */}
      <nav className="hidden md:flex flex-col fixed left-0 top-0 h-full z-40 pt-grid-unit w-64 bg-surface-container-lowest/90 backdrop-blur-xl border-r border-outline-variant">
      <div className="px-margin-edge mb-8">
      <h2 className="font-hazard-alert text-hazard-alert text-secondary">OPERATOR_01</h2>
      <p className="font-data-label text-data-label text-tertiary-fixed-dim mt-1">VOLTAGE: 220V</p>
      </div>
      <ul className="flex flex-col gap-2">
      <li>
      <a className="flex items-center gap-4 px-margin-edge py-3 font-data-label text-data-label text-outline hover:text-on-surface-variant hover:bg-surface-variant/30 transition-colors" href="#" data-action-id="grid-os-1" onClick={(event) => { event.preventDefault(); actions?.["grid-os-1"]?.(); }}>
      <Grid3X3 aria-hidden={true} focusable="false" />
                          GRID_OS
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-4 px-margin-edge py-3 font-data-label text-data-label text-outline hover:text-on-surface-variant hover:bg-surface-variant/30 transition-colors" href="#" data-action-id="power-stats-2" onClick={(event) => { event.preventDefault(); actions?.["power-stats-2"]?.(); }}>
      <Bolt aria-hidden={true} focusable="false" />
                          POWER_STATS
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-4 px-margin-edge py-3 font-data-label text-data-label text-outline hover:text-on-surface-variant hover:bg-surface-variant/30 transition-colors" href="#" data-action-id="overload-logs-3" onClick={(event) => { event.preventDefault(); actions?.["overload-logs-3"]?.(); }}>
      <TriangleAlert aria-hidden={true} focusable="false" />
                          OVERLOAD_LOGS
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-4 px-margin-edge py-3 font-data-label text-data-label text-tertiary-container font-bold border-r-4 border-tertiary-container bg-tertiary-container/10 active-nav-item" href="#" data-action-id="system-cfg-4" onClick={(event) => { event.preventDefault(); actions?.["system-cfg-4"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" />
                          SYSTEM_CFG
                      </a>
      </li>
      </ul>
      </nav>
      {/* Settings Overlay Canvas */}
      <main className="relative z-50 w-full max-w-2xl mx-margin-edge bg-surface-container-low/80 backdrop-blur-md border border-primary-container/30 shadow-[0_0_24px_rgba(0,243,255,0.1)] flex flex-col md:ml-72">
      {/* Header */}
      <header className="px-6 py-4 border-b border-primary-container/30 flex justify-between items-center bg-surface-container/50">
      <div>
      <h1 className="font-hud-display-sm text-hud-display-sm text-primary-container tracking-wider drop-shadow-[0_0_8px_rgba(0,243,255,0.5)]">SYSTEM_CFG</h1>
      <p className="font-data-label text-data-label text-outline mt-1 uppercase">Parameters override sequence initiated</p>
      </div>
      <button className="text-outline hover:text-primary-container transition-colors" type="button" aria-label="Close" data-action-id="close-1" onClick={actions?.["close-1"]}>
      <X className="text-3xl" aria-hidden={true} focusable="false" />
      </button>
      </header>
      {/* Content */}
      <div className="p-6 overflow-y-auto max-h-[716px] flex flex-col gap-8">
      {/* Game Speed */}
      <section className="space-y-4">
      <div className="flex justify-between items-center">
      <label className="font-data-label text-data-label text-tertiary-fixed-dim uppercase tracking-widest flex items-center gap-2">
      <Gauge className="text-sm" aria-hidden={true} focusable="false" />
                              Cycle Rate (Speed)
                          </label>
      <span className="font-data-label text-data-label text-primary-container">1.0x</span>
      </div>
      <input className="w-full focus:outline-none" max="2.0" min="0.5" step="0.1" type="range" defaultValue="1.0" />
      </section>
      {/* Difficulty */}
      <section className="space-y-4">
      <label className="font-data-label text-data-label text-tertiary-fixed-dim uppercase tracking-widest flex items-center gap-2">
      <TriangleAlert className="text-sm" aria-hidden={true} focusable="false" />
                          Threat Level (Difficulty)
                      </label>
      <div className="grid grid-cols-3 gap-2">
      <button className="py-3 border border-outline-variant text-outline font-data-label text-data-label uppercase hover:bg-surface-variant hover:text-on-surface-variant transition-colors" type="button" data-action-id="casual-2" onClick={actions?.["casual-2"]}>Casual</button>
      <button className="py-3 border border-primary-container bg-primary-container/10 text-primary-container font-data-label text-data-label uppercase relay-bloom shadow-primary-container" type="button" data-action-id="normal-3" onClick={actions?.["normal-3"]}>Normal</button>
      <button className="py-3 border border-secondary-container text-secondary font-data-label text-data-label uppercase hover:bg-secondary-container hover:text-on-secondary-container transition-colors relative overflow-hidden group" type="button" data-action-id="overload-4" onClick={actions?.["overload-4"]}>
      <span className="relative z-10">Overload</span>
      <div className="absolute inset-0 bg-secondary-container/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
      </button>
      </div>
      </section>
      {/* Audio */}
      <section className="space-y-6">
      <label className="font-data-label text-data-label text-tertiary-fixed-dim uppercase tracking-widest flex items-center gap-2 border-b border-outline-variant/50 pb-2">
      <Volume2 className="text-sm" aria-hidden={true} focusable="false" />
                          Acoustics
                      </label>
      <div className="space-y-4">
      <div>
      <div className="flex justify-between items-center mb-2">
      <span className="font-data-label text-data-label text-outline uppercase">Master Vol</span>
      <span className="font-data-label text-data-label text-primary-container">80%</span>
      </div>
      <input className="w-full" max="100" min="0" type="range" defaultValue="80" />
      </div>
      <div>
      <div className="flex justify-between items-center mb-2">
      <span className="font-data-label text-data-label text-outline uppercase">SFX Gain</span>
      <span className="font-data-label text-data-label text-primary-container">100%</span>
      </div>
      <input className="w-full" max="100" min="0" type="range" defaultValue="100" />
      </div>
      </div>
      </section>
      {/* Input Help */}
      <section className="mt-4 p-4 border border-outline-variant bg-surface-container-highest/50">
      <label className="font-data-label text-data-label text-tertiary-fixed-dim uppercase tracking-widest flex items-center gap-2 mb-4">
      <Keyboard className="text-sm" aria-hidden={true} focusable="false" />
                          Input Matrix
                      </label>
      <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center gap-3">
      <div className="flex gap-1">
      <div className="w-8 h-8 border border-primary-container/50 flex items-center justify-center text-primary-container font-data-label bg-surface-container"><ArrowUp className="text-sm" aria-hidden={true} focusable="false" /></div>
      <div className="w-8 h-8 border border-primary-container/50 flex items-center justify-center text-primary-container font-data-label bg-surface-container"><ArrowDown className="text-sm" aria-hidden={true} focusable="false" /></div>
      </div>
      <span className="font-data-label text-data-label text-outline uppercase">Route Energy</span>
      </div>
      <div className="flex items-center gap-3">
      <div className="px-4 h-8 border border-tertiary-container/50 flex items-center justify-center text-tertiary-container font-data-label bg-surface-container">SPACE</div>
      <span className="font-data-label text-data-label text-outline uppercase">Halt/Pause</span>
      </div>
      </div>
      </section>
      </div>
      {/* Actions */}
      <footer className="p-6 border-t border-primary-container/30 bg-surface-container/80 flex justify-end gap-4">
      <button className="px-6 py-3 border border-outline-variant text-outline font-data-label text-data-label uppercase hover:bg-surface-variant hover:text-on-surface-variant transition-colors" type="button" data-action-id="cancel-5" onClick={actions?.["cancel-5"]}>
                      Cancel
                  </button>
      <button className="px-6 py-3 bg-primary-container text-on-primary-container font-data-label text-data-label font-bold uppercase hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors relay-bloom shadow-primary-container" type="button" data-action-id="apply-override-6" onClick={actions?.["apply-override-6"]}>
                      Apply Override
                  </button>
      </footer>
      </main>
    </>
  );
}
