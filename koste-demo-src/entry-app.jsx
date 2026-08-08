// ─────────────────────────────────────────────────────────────
// Interactive navigator — tap-through the real Koste screens.
// Uses the screen components defined above (ScreenSplash … ScreenProfile).
// ─────────────────────────────────────────────────────────────
const KOSTE_SCREENS = [
  { id: "splash", label: "Splash", Comp: ScreenSplash },
  { id: "login", label: "Phone login (OTP)", Comp: ScreenLogin },
  { id: "home", label: "Home", Comp: ScreenHome },
  { id: "scan", label: "Receipt scan", Comp: ScreenScan },
  { id: "review", label: "Review & edit", Comp: ScreenReview },
  { id: "assign", label: "Assign items", Comp: ScreenAssign },
  { id: "pay", label: "Payment", Comp: ScreenPay },
  { id: "profile", label: "Profile", Comp: ScreenProfile },
];

const kBtn = {
  fontFamily: '"DM Sans", system-ui, sans-serif',
  fontSize: 14,
  fontWeight: 600,
  color: "#063D2E",
  background: "#E1F5EE",
  border: "none",
  borderRadius: 10,
  padding: "9px 16px",
  cursor: "pointer",
};

function KosteDemo() {
  const [i, setI] = React.useState(0);
  const n = KOSTE_SCREENS.length;
  const go = d => setI(v => (v + d + n) % n);

  React.useEffect(() => {
    const onKey = e => {
      if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const stageRef = React.useRef(null);
  const [scale, setScale] = React.useState(0.5);
  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const fit = () => setScale(Math.min(el.clientWidth / 390, el.clientHeight / 844));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const Cur = KOSTE_SCREENS[i].Comp;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100dvh", padding: 16, boxSizing: "border-box", gap: 12 }}>
      <div ref={stageRef} style={{ position: "relative", flex: 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ width: 390, height: 844, flexShrink: 0, transform: `scale(${scale})`, transformOrigin: "center center", borderRadius: 46, overflow: "hidden", boxShadow: "0 24px 70px rgba(0,0,0,0.45)", background: "#000" }}>
          <Cur key={KOSTE_SCREENS[i].id} />
        </div>
        <button aria-label="Previous screen" onClick={() => go(-1)} style={{ position: "absolute", top: 0, left: 0, width: "28%", height: "100%", background: "transparent", border: "none", cursor: "pointer" }} />
        <button aria-label="Next screen" onClick={() => go(1)} style={{ position: "absolute", top: 0, right: 0, width: "28%", height: "100%", background: "transparent", border: "none", cursor: "pointer" }} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <button onClick={() => go(-1)} style={kBtn}>‹ Prev</button>
          <div style={{ fontFamily: '"DM Mono", ui-monospace, monospace', fontSize: 13, color: "#E1F5EE", minWidth: 168, textAlign: "center" }}>
            {String(i + 1).padStart(2, "0")} · {KOSTE_SCREENS[i].label}
          </div>
          <button onClick={() => go(1)} style={kBtn}>Next ›</button>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {KOSTE_SCREENS.map((s, k) => (
            <button
              key={s.id}
              aria-label={s.label}
              aria-current={k === i}
              onClick={() => setI(k)}
              style={{ width: k === i ? 24 : 8, height: 8, borderRadius: 8, border: "none", cursor: "pointer", background: k === i ? "#EF9F27" : "rgba(225,245,238,0.4)", transition: "all .2s", padding: 0 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<KosteDemo />);
