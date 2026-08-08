// Koste — design tokens
const C = {
  darkTeal:    '#063D2E',
  primaryTeal: '#0F6E56',
  lightTeal:   '#1D9E75',
  paleTeal:    '#E1F5EE',
  paleTeal2:   '#F2FAF6',
  amber:       '#EF9F27',
  amberDeep:   '#D88A12',
  offWhite:    '#F4F8F6',
  white:       '#FFFFFF',
  error:       '#DC2626',
  textDark:    '#1E293B',
  textMuted:   '#64748B',
  hairline:    '#E6ECEA',
};

const FONT_DISPLAY = '"Newsreader", "Cormorant Garamond", Georgia, serif';
const FONT_SANS = '"DM Sans", -apple-system, system-ui, sans-serif';
const FONT_MONO = '"DM Mono", "JetBrains Mono", ui-monospace, monospace';

// ─────────────────────────────────────────────────────────────
// Phone wrapper (390x844 — no bezel, design canvas hosts the frame)
// ─────────────────────────────────────────────────────────────
function Phone({ children, dark = false, bg = '#F4F8F6', statusBar = true, hideHome = false }) {
  return (
    <div style={{
      width: 390, height: 844, position: 'relative',
      background: bg, overflow: 'hidden',
      fontFamily: FONT_SANS,
      color: C.textDark,
      WebkitFontSmoothing: 'antialiased',
    }}>
      {/* dynamic island */}
      <div style={{
        position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)',
        width: 122, height: 36, borderRadius: 22, background: '#000', zIndex: 50,
      }} />
      {statusBar && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
          <IOSStatusBar dark={dark} />
        </div>
      )}
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
      {!hideHome && (
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 60,
          height: 34, display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
          paddingBottom: 8, pointerEvents: 'none',
        }}>
          <div style={{
            width: 134, height: 5, borderRadius: 100,
            background: dark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.85)',
          }}/>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Avatar — initial-based, deterministic teal/amber tint
// ─────────────────────────────────────────────────────────────
const AVATAR_BGS = [
  { bg: '#0F6E56', fg: '#fff' },
  { bg: '#1D9E75', fg: '#fff' },
  { bg: '#EF9F27', fg: '#063D2E' },
  { bg: '#E1F5EE', fg: '#063D2E' },
  { bg: '#063D2E', fg: '#E1F5EE' },
  { bg: '#FCE4B6', fg: '#7A4A07' },
];
function avatarTint(name) {
  let h = 0; for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return AVATAR_BGS[h % AVATAR_BGS.length];
}
function Avatar({ name, size = 36, ring, dim = false }) {
  const t = avatarTint(name);
  const initial = name.charAt(0).toUpperCase();
  return (
    <div style={{
      width: size, height: size, borderRadius: size / 2,
      background: t.bg, color: t.fg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: FONT_SANS, fontWeight: 600, fontSize: size * 0.42,
      boxShadow: ring ? `0 0 0 2px ${ring}, 0 0 0 4px ${C.white}` : 'none',
      opacity: dim ? 0.45 : 1,
      flexShrink: 0,
      letterSpacing: -0.2,
    }}>{initial}</div>
  );
}

// ─────────────────────────────────────────────────────────────
// Bottom tab bar
// ─────────────────────────────────────────────────────────────
function TabBar({ active = 'home' }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 9.5L11 3l8 6.5V18a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 18V9.5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    )},
    { id: 'sessions', label: 'Sessions', icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="4" y="3" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M7.5 8h7M7.5 11.5h7M7.5 15h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    )},
    { id: 'activity', label: 'Activity', icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 12h3.5l2-5 3 10 2-7 2 2H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )},
    { id: 'profile', label: 'Profile', icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M4 19c1.5-3.5 4-5 7-5s5.5 1.5 7 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    )},
  ];
  return (
    <div style={{
      flex: '0 0 auto',
      borderTop: `1px solid ${C.hairline}`,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      padding: '10px 8px 28px',
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
    }}>
      {tabs.map(t => {
        const on = t.id === active;
        return (
          <div key={t.id} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
            color: on ? C.darkTeal : C.textMuted,
          }}>
            {t.icon}
            <div style={{ fontSize: 10.5, fontWeight: on ? 600 : 500, letterSpacing: 0.1 }}>{t.label}</div>
          </div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Wordmark — Koste in display serif, with subtle ligature feel
// ─────────────────────────────────────────────────────────────
function Wordmark({ size = 88, color = '#fff' }) {
  return (
    <div style={{
      fontFamily: FONT_DISPLAY,
      fontSize: size, lineHeight: 0.9,
      fontWeight: 400, fontStyle: 'italic',
      color, letterSpacing: -2,
    }}>
      Koste<span style={{ color: C.amber }}>.</span>
    </div>
  );
}

// Rs formatter — Mauritius rupee, no decimals
function rs(n, decimals = false) {
  if (decimals) return 'Rs ' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return 'Rs ' + Math.round(n).toLocaleString('en-US');
}

Object.assign(window, {
  C, FONT_DISPLAY, FONT_SANS, FONT_MONO,
  Phone, Avatar, avatarTint, TabBar, Wordmark, rs,
});
