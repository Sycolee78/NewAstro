// Koste — Screens 1-4 (Splash, OTP, Home, Receipt Scan)

// ═════════════════════════════════════════════════════════════
// SCREEN 1 — Splash / Welcome
// Dark teal mesh-gradient bg with subtle grain; centered wordmark;
// bilingual tagline; amber CTA. Animation: wordmark fades up + amber
// dot scales in with slight overshoot ~600ms after.
// ═════════════════════════════════════════════════════════════
function ScreenSplash() {
  // SVG noise for grain
  const noise = `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1, 0 0 0 0 1, 0 0 0 0 1, 0 0 0 0.6 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;
  return (
    <Phone dark bg={C.darkTeal} hideHome={false}>
      {/* mesh gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(800px 600px at 80% -10%, ${C.primaryTeal} 0%, transparent 55%),
          radial-gradient(700px 500px at -20% 30%, #0B5946 0%, transparent 60%),
          radial-gradient(500px 400px at 100% 100%, ${C.lightTeal}66 0%, transparent 50%),
          radial-gradient(900px 700px at 50% 110%, #032015 0%, transparent 60%)
        `,
      }}/>
      {/* grain overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: noise, opacity: 0.18, mixBlendMode: 'overlay',
      }}/>
      {/* top brand mark — tiny pill */}
      <div style={{ position: 'absolute', top: 70, left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 2 }}>
        <div style={{
          fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 2.5,
          color: 'rgba(225,245,238,0.55)', textTransform: 'uppercase',
        }}>
          Mauritius · Est. 2026
        </div>
      </div>

      {/* center stack */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 3,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '0 36px', gap: 20,
      }}>
        {/* {/* anim: fade-up 0→1 over 700ms, ease-out */}
        <Wordmark size={116} color="#FBFDFC" />
        <div style={{ height: 2, width: 28, background: C.amber, opacity: 0.8, borderRadius: 2 }}/>
        <div style={{ textAlign: 'center', marginTop: 2 }}>
          <div style={{
            fontFamily: FONT_DISPLAY, fontStyle: 'italic',
            fontSize: 22, lineHeight: 1.2, color: '#FBFDFC', fontWeight: 400,
            letterSpacing: -0.3,
          }}>
            Split the bill,<br/>not the friendship.
          </div>
          <div style={{
            marginTop: 12, fontFamily: FONT_SANS, fontSize: 13,
            color: 'rgba(225,245,238,0.55)', letterSpacing: 0.1, fontStyle: 'italic',
          }}>
            Partagez l’addition, pas l’amitié.
          </div>
        </div>
      </div>

      {/* bottom CTA */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 4,
        padding: '0 24px 40px',
      }}>
        {/* anim: button scales 0.92→1 with subtle shadow lift, 600ms after wordmark */}
        <button style={{
          width: '100%', height: 56, borderRadius: 16,
          background: C.amber, color: C.darkTeal,
          border: 'none', cursor: 'pointer',
          fontFamily: FONT_SANS, fontSize: 16.5, fontWeight: 600, letterSpacing: -0.2,
          boxShadow: '0 14px 30px -10px rgba(239,159,39,0.55), 0 1px 0 rgba(255,255,255,0.4) inset',
        }}>Get started →</button>
        <div style={{
          marginTop: 18, textAlign: 'center',
          fontFamily: FONT_MONO, fontSize: 10.5, letterSpacing: 1.5,
          color: 'rgba(225,245,238,0.45)', textTransform: 'uppercase',
        }}>
          For Mauritius restaurants · MUR only
        </div>
      </div>
    </Phone>
  );
}

// ═════════════════════════════════════════════════════════════
// SCREEN 2 — Phone Login (OTP, post-send state)
// ═════════════════════════════════════════════════════════════
function ScreenLogin() {
  const digits = ['4', '8', '2', '1', '·', '·'];
  return (
    <Phone bg={C.offWhite}>
      {/* faint mesh top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 280,
        background: `radial-gradient(400px 220px at 50% 0%, ${C.paleTeal} 0%, transparent 70%)`,
      }}/>

      {/* back chevron */}
      <div style={{ position: 'absolute', top: 64, left: 20, zIndex: 5 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 20, background: C.white,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 1px 3px rgba(6,61,46,0.06)',
        }}>
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path d="M8 1L2 8l6 7" stroke={C.darkTeal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div style={{ flex: 1, padding: '128px 24px 0', position: 'relative', zIndex: 3 }}>
        <div style={{
          fontFamily: FONT_MONO, fontSize: 10.5, letterSpacing: 2,
          color: C.lightTeal, textTransform: 'uppercase', marginBottom: 14,
        }}>Step 2 of 2 · Verify</div>
        <h1 style={{
          margin: 0, fontFamily: FONT_DISPLAY, fontWeight: 400,
          fontSize: 38, lineHeight: 1.05, color: C.darkTeal, letterSpacing: -0.8,
        }}>
          Check your <span style={{ fontStyle: 'italic' }}>messages</span>.
        </h1>
        <div style={{
          marginTop: 14, fontSize: 15, lineHeight: 1.5, color: C.textMuted, maxWidth: 320,
        }}>
          We sent a 6-digit code to <span style={{ color: C.textDark, fontWeight: 600 }}>+230 5482 1907</span>.
          It works with Emtel, Orange and MyT numbers.
        </div>

        {/* OTP boxes */}
        <div style={{
          marginTop: 36, display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 10,
        }}>
          {digits.map((d, i) => {
            const filled = d !== '·';
            const active = i === 4;
            return (
              <div key={i} style={{
                height: 64, borderRadius: 14,
                background: filled ? C.white : C.paleTeal2,
                border: `1.5px solid ${active ? C.primaryTeal : (filled ? C.hairline : 'transparent')}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: FONT_DISPLAY, fontSize: 28, fontWeight: 500,
                color: filled ? C.darkTeal : 'transparent',
                boxShadow: filled ? '0 1px 2px rgba(6,61,46,0.04)' : 'none',
                position: 'relative',
              }}>
                {filled ? d : ''}
                {active && (
                  <div style={{
                    position: 'absolute', width: 2, height: 28,
                    background: C.primaryTeal, borderRadius: 1,
                    animation: 'koste-caret 1s steps(2) infinite',
                  }}/>
                )}
              </div>
            );
          })}
        </div>

        {/* countdown / resend */}
        <div style={{
          marginTop: 22, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: 3, background: C.lightTeal, boxShadow: `0 0 0 4px ${C.lightTeal}22` }}/>
            <span style={{ fontFamily: FONT_MONO, fontSize: 13, color: C.textDark, letterSpacing: 0.5 }}>
              09:24
            </span>
            <span style={{ fontSize: 13, color: C.textMuted }}>remaining</span>
          </div>
          <button style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            fontFamily: FONT_SANS, fontSize: 14, fontWeight: 600,
            color: C.textMuted, padding: 0,
          }}>Resend code</button>
        </div>

        {/* info card */}
        <div style={{
          marginTop: 28, padding: '14px 16px',
          background: C.paleTeal, borderRadius: 14,
          display: 'flex', gap: 12, alignItems: 'flex-start',
        }}>
          <div style={{
            width: 28, height: 28, borderRadius: 14, background: C.white,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1l5 2.5v4c0 3-2.2 5.4-5 5.5-2.8-.1-5-2.5-5-5.5v-4L7 1z" stroke={C.primaryTeal} strokeWidth="1.6" strokeLinejoin="round"/>
              <path d="M4.8 7l1.6 1.6L9.4 5.6" stroke={C.primaryTeal} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div style={{ fontSize: 12.5, lineHeight: 1.45, color: C.darkTeal }}>
            Koste never stores your card. Codes are SMS-only and expire in 10 minutes.
          </div>
        </div>
      </div>

      {/* primary CTA pinned */}
      <div style={{ padding: '0 24px 40px' }}>
        <button style={{
          width: '100%', height: 56, borderRadius: 16,
          background: C.primaryTeal, color: '#fff',
          border: 'none', cursor: 'pointer',
          fontFamily: FONT_SANS, fontSize: 16, fontWeight: 600, letterSpacing: -0.2,
          boxShadow: '0 10px 24px -10px rgba(15,110,86,0.6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          Verify and continue
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M1 6h13M10 1l4 5-4 5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </Phone>
  );
}

// ═════════════════════════════════════════════════════════════
// SCREEN 3 — Home / Dashboard
// ═════════════════════════════════════════════════════════════
function ScreenHome() {
  const sessions = [
    { name: 'Le Château',     date: 'Tonight · 8:42 PM', total: 4280, status: 'Open',    people: ['Priya', 'Ravi', 'Chloé', 'Benjamin'] },
    { name: 'Grand Baie Café', date: 'Sat · 14 May',       total: 1750, status: 'Settled', people: ['Mohammed', 'Chloé', 'Benjamin'] },
    { name: 'Mahé Bistro',     date: 'Thu · 12 May',       total: 3120, status: 'Pending', people: ['Ravi', 'Anjali', 'Benjamin', 'Sanjay', 'Priya'] },
  ];
  const statusColor = {
    Open:    { bg: '#FCE4B6', fg: '#7A4A07', dot: C.amber },
    Settled: { bg: C.paleTeal, fg: C.primaryTeal, dot: C.lightTeal },
    Pending: { bg: '#F1F5F9', fg: C.textMuted, dot: C.textMuted },
  };
  return (
    <Phone bg={C.offWhite}>
      {/* warm hero gradient behind greeting */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 280,
        background: `linear-gradient(180deg, ${C.paleTeal} 0%, ${C.offWhite} 100%)`,
      }}/>

      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
        {/* greeting */}
        <div style={{
          padding: '70px 24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <div style={{
              fontFamily: FONT_MONO, fontSize: 10.5, letterSpacing: 2,
              color: C.lightTeal, textTransform: 'uppercase',
            }}>Sunday · 23 May</div>
            <div style={{
              marginTop: 6, fontFamily: FONT_DISPLAY, fontSize: 32, fontWeight: 400,
              color: C.darkTeal, letterSpacing: -0.6, lineHeight: 1.1,
            }}>
              Bonsoir, <span style={{ fontStyle: 'italic' }}>Benjamin</span> 👋
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <Avatar name="Benjamin" size={44} />
            <div style={{
              position: 'absolute', top: -2, right: -2, width: 14, height: 14, borderRadius: 7,
              background: C.amber, color: C.darkTeal, fontSize: 9, fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '2px solid #F4F8F6',
            }}>2</div>
          </div>
        </div>

        {/* Primary CTA card */}
        <div style={{ padding: '22px 24px 0' }}>
          <div style={{
            position: 'relative', overflow: 'hidden',
            borderRadius: 22, padding: '22px 22px 20px',
            background: `linear-gradient(135deg, ${C.amber} 0%, #F5B04A 100%)`,
            color: C.darkTeal,
            boxShadow: '0 18px 36px -16px rgba(239,159,39,0.55)',
          }}>
            {/* decorative receipt outline */}
            <svg style={{ position: 'absolute', right: -10, top: -6, opacity: 0.22 }} width="120" height="140" viewBox="0 0 120 140" fill="none">
              <path d="M20 6h80v128l-10-6-10 6-10-6-10 6-10-6-10 6-10-6-10 6V6z" stroke={C.darkTeal} strokeWidth="2" strokeLinejoin="round"/>
              <path d="M32 30h56M32 46h56M32 62h40M32 78h56M32 94h32" stroke={C.darkTeal} strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 2,
              textTransform: 'uppercase', opacity: 0.7,
            }}>
              <span style={{ width: 5, height: 5, borderRadius: 3, background: C.darkTeal, animation: 'koste-pulse 1.6s ease-in-out infinite' }}/>
              Ready · Live
            </div>
            <div style={{
              marginTop: 10, fontFamily: FONT_DISPLAY, fontSize: 30, fontWeight: 400,
              letterSpacing: -0.6, lineHeight: 1.1, maxWidth: 240,
            }}>
              Start a new <span style={{ fontStyle: 'italic' }}>session</span>
            </div>
            <div style={{ marginTop: 6, fontSize: 13, opacity: 0.7, maxWidth: 220 }}>
              Scan the bill, invite friends, settle in a tap.
            </div>
            <div style={{
              marginTop: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div style={{
                background: C.darkTeal, color: C.amber,
                borderRadius: 12, padding: '10px 14px',
                fontSize: 14, fontWeight: 600, letterSpacing: -0.2,
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                  <rect x="1" y="3" width="14" height="10" rx="2" stroke={C.amber} strokeWidth="1.6"/>
                  <circle cx="8" cy="8" r="2.5" stroke={C.amber} strokeWidth="1.6"/>
                  <path d="M5 3l1-2h4l1 2" stroke={C.amber} strokeWidth="1.6" strokeLinejoin="round"/>
                </svg>
                Scan receipt
              </div>
              <button style={{
                background: 'transparent', border: `1.5px solid ${C.darkTeal}40`,
                borderRadius: 12, padding: '10px 14px', cursor: 'pointer',
                fontFamily: FONT_SANS, fontSize: 13, fontWeight: 600, color: C.darkTeal,
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <rect x="0.5" y="0.5" width="4" height="4" stroke={C.darkTeal} strokeWidth="1.2"/>
                  <rect x="8.5" y="0.5" width="4" height="4" stroke={C.darkTeal} strokeWidth="1.2"/>
                  <rect x="0.5" y="8.5" width="4" height="4" stroke={C.darkTeal} strokeWidth="1.2"/>
                  <rect x="7" y="7" width="2" height="2" fill={C.darkTeal}/>
                  <rect x="10" y="10" width="2" height="2" fill={C.darkTeal}/>
                </svg>
                Join a session
              </button>
            </div>
          </div>
        </div>

        {/* recent sessions */}
        <div style={{
          padding: '28px 24px 12px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
        }}>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 20, fontWeight: 500, color: C.darkTeal, letterSpacing: -0.3 }}>
            Recent sessions
          </div>
          <div style={{ fontSize: 13, color: C.textMuted, fontWeight: 500 }}>See all</div>
        </div>
        <div style={{ padding: '0 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {sessions.map((s, i) => {
            const sc = statusColor[s.status];
            return (
              <div key={i} style={{
                background: C.white, borderRadius: 18, padding: '14px 14px 14px 16px',
                display: 'flex', flexDirection: 'column', gap: 12,
                boxShadow: '0 1px 2px rgba(6,61,46,0.04), 0 8px 24px -16px rgba(6,61,46,0.10)',
                border: `1px solid ${C.hairline}`,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{
                      fontFamily: FONT_DISPLAY, fontSize: 18, fontWeight: 500,
                      color: C.darkTeal, letterSpacing: -0.3, lineHeight: 1.1,
                    }}>{s.name}</div>
                    <div style={{ marginTop: 3, fontSize: 12, color: C.textMuted }}>{s.date}</div>
                  </div>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    background: sc.bg, color: sc.fg,
                    padding: '4px 9px', borderRadius: 999,
                    fontSize: 11, fontWeight: 600, letterSpacing: 0.1,
                  }}>
                    <span style={{ width: 5, height: 5, borderRadius: 3, background: sc.dot }}/>
                    {s.status}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex' }}>
                    {s.people.slice(0, 4).map((p, idx) => (
                      <div key={p} style={{ marginLeft: idx === 0 ? 0 : -8 }}>
                        <Avatar name={p} size={26} ring={C.white} />
                      </div>
                    ))}
                    {s.people.length > 4 && (
                      <div style={{
                        marginLeft: -8, width: 26, height: 26, borderRadius: 13,
                        background: C.paleTeal, color: C.primaryTeal,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 10, fontWeight: 700,
                        boxShadow: `0 0 0 2px ${C.white}`,
                      }}>+{s.people.length - 4}</div>
                    )}
                  </div>
                  <div style={{
                    fontFamily: FONT_DISPLAY, fontSize: 19, fontWeight: 500,
                    color: C.darkTeal, letterSpacing: -0.3,
                  }}>{rs(s.total)}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ flex: 1 }}/>
      </div>

      <TabBar active="home"/>
    </Phone>
  );
}

// ═════════════════════════════════════════════════════════════
// SCREEN 4 — Receipt Scan (camera view, scanning state)
// ═════════════════════════════════════════════════════════════
function ScreenScan() {
  return (
    <Phone dark bg="#0A0A0A">
      {/* simulated camera view — dim teal cast on near-black with table grain */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(500px 400px at 50% 40%, #1a1a1a 0%, #0a0a0a 80%),
          linear-gradient(180deg, #0a0a0a 0%, #050505 100%)
        `,
      }}/>
      {/* receipt placeholder (mid-frame) */}
      <div style={{
        position: 'absolute', top: 168, left: 65, width: 260, height: 470,
        background: `
          repeating-linear-gradient(180deg, #f6f1e6 0px, #f6f1e6 22px, #ebe5d5 22px, #ebe5d5 23px)
        `,
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        transform: 'rotate(-1.5deg)',
        opacity: 0.92,
        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), 96% 100%, 88% calc(100% - 8px), 80% 100%, 72% calc(100% - 8px), 64% 100%, 56% calc(100% - 8px), 48% 100%, 40% calc(100% - 8px), 32% 100%, 24% calc(100% - 8px), 16% 100%, 8% calc(100% - 8px), 0 100%)',
        padding: '20px 18px',
        fontFamily: FONT_MONO, color: '#3a2f1f', fontSize: 9.5, lineHeight: '12px',
      }}>
        <div style={{ textAlign: 'center', fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>LE CHÂTEAU</div>
        <div style={{ textAlign: 'center', fontSize: 8, opacity: 0.6 }}>GRAND BAIE · MU</div>
        <div style={{ borderTop: '1px dashed #3a2f1f', margin: '8px 0', opacity: 0.4 }}/>
        {['Mine de Mer', 'Octopus salad', 'Coq au vin', 'Boulettes', 'Curry crab', 'Phoenix Beer x4', 'Rougaille saucisse'].map((it, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>{it}</span><span>{[280, 420, 780, 320, 950, 480, 540][i]}.00</span>
          </div>
        ))}
        <div style={{ borderTop: '1px dashed #3a2f1f', margin: '6px 0', opacity: 0.4 }}/>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>TVA 15%</span><span>567.00</span></div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>SERVICE 10%</span><span>378.00</span></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, marginTop: 4 }}><span>TOTAL Rs</span><span>4,715.00</span></div>
      </div>

      {/* dark vignette */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(700px 700px at 50% 45%, transparent 30%, rgba(0,0,0,0.75) 100%)' }}/>

      {/* top header — close + flash + gallery */}
      <div style={{
        position: 'absolute', top: 62, left: 0, right: 0, padding: '0 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 5,
      }}>
        <div style={{
          width: 40, height: 40, borderRadius: 20,
          background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(20px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 2l10 10M12 2L2 12" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </div>
        <div style={{
          color: '#fff', fontFamily: FONT_SANS, fontSize: 14, fontWeight: 600, letterSpacing: -0.2,
        }}>Scan receipt</div>
        <div style={{
          width: 40, height: 40, borderRadius: 20,
          background: 'rgba(239,159,39,0.22)', backdropFilter: 'blur(20px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
            <path d="M8 1L1 9h4v6l7-8H8V1z" fill={C.amber}/>
          </svg>
        </div>
      </div>

      {/* scan frame */}
      <div style={{
        position: 'absolute', top: 160, left: 56, width: 278, height: 486, zIndex: 4,
      }}>
        {/* corner brackets */}
        {[
          { top: 0, left: 0, br: '4px 0 0 0', borders: 'tl' },
          { top: 0, right: 0, br: '0 4px 0 0', borders: 'tr' },
          { bottom: 0, left: 0, br: '0 0 0 4px', borders: 'bl' },
          { bottom: 0, right: 0, br: '0 0 4px 0', borders: 'br' },
        ].map((b, i) => (
          <div key={i} style={{
            position: 'absolute', width: 34, height: 34,
            top: b.top, left: b.left, right: b.right, bottom: b.bottom,
            borderTop:    b.borders.startsWith('t') ? `3px solid ${C.lightTeal}` : 'none',
            borderBottom: b.borders.startsWith('b') ? `3px solid ${C.lightTeal}` : 'none',
            borderLeft:   b.borders.endsWith('l') ? `3px solid ${C.lightTeal}` : 'none',
            borderRight:  b.borders.endsWith('r') ? `3px solid ${C.lightTeal}` : 'none',
            borderRadius: b.br,
          }}/>
        ))}
        {/* scan line — animated sweep */}
        <div style={{
          position: 'absolute', left: 6, right: 6, height: 2,
          background: `linear-gradient(90deg, transparent 0%, ${C.lightTeal} 50%, transparent 100%)`,
          boxShadow: `0 0 18px ${C.lightTeal}`,
          animation: 'koste-scan 2.4s ease-in-out infinite',
        }}/>
      </div>

      {/* instructions */}
      <div style={{
        position: 'absolute', top: 660, left: 0, right: 0, zIndex: 6,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
      }}>
        <div style={{ fontFamily: FONT_DISPLAY, fontSize: 22, fontWeight: 400, color: '#fff', letterSpacing: -0.3, fontStyle: 'italic' }}>
          Reading receipt…
        </div>
        <div style={{ fontFamily: FONT_SANS, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
          Point at the addition · Pointez vers l’addition
        </div>
      </div>

      {/* bottom controls */}
      <div style={{
        position: 'absolute', bottom: 56, left: 0, right: 0, zIndex: 6,
        display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '0 40px',
      }}>
        {/* gallery */}
        <div style={{
          width: 50, height: 50, borderRadius: 14,
          background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(20px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="2.5" y="3" width="17" height="16" rx="2.5" stroke="#fff" strokeWidth="1.6"/>
            <circle cx="7.5" cy="8.5" r="1.4" fill="#fff"/>
            <path d="M3 16l5-5 4 4 3-3 4 4" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round"/>
          </svg>
        </div>
        {/* shutter — auto */}
        <div style={{
          width: 76, height: 76, borderRadius: 38,
          background: '#fff',
          padding: 5, boxShadow: `0 0 0 3px rgba(255,255,255,0.3)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: '100%', height: '100%', borderRadius: '50%',
            background: C.lightTeal,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontFamily: FONT_MONO, fontSize: 9, letterSpacing: 1, fontWeight: 700,
          }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M5 11l4 4 8-9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        {/* flash */}
        <div style={{
          width: 50, height: 50, borderRadius: 14,
          background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(20px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
            <path d="M10 1L1 12h6v7l9-11h-6V1z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* found-items toast (success pulse) */}
      <div style={{
        position: 'absolute', top: 116, left: '50%', transform: 'translateX(-50%)', zIndex: 7,
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '8px 14px 8px 10px', borderRadius: 999,
        background: 'rgba(29,158,117,0.18)', backdropFilter: 'blur(16px)',
        border: `1px solid ${C.lightTeal}55`,
      }}>
        <div style={{
          width: 18, height: 18, borderRadius: 9, background: C.lightTeal,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4l3 3 5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span style={{ color: '#fff', fontSize: 12.5, fontWeight: 600, letterSpacing: -0.1 }}>
          Found 7 items
        </span>
      </div>
    </Phone>
  );
}

Object.assign(window, { ScreenSplash, ScreenLogin, ScreenHome, ScreenScan });
