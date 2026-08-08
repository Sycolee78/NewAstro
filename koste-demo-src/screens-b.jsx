// Koste — Screens 5-8 (Review, Assign, Pay, Profile)

// ═════════════════════════════════════════════════════════════
// SCREEN 5 — Review & Edit Items (post-OCR)
// ═════════════════════════════════════════════════════════════
function ScreenReview() {
  const items = [
    { name: 'Mine de Mer',         price: 280, qty: 1, conf: 'high' },
    { name: 'Octopus salad',       price: 420, qty: 1, conf: 'high' },
    { name: 'Coq au vin',          price: 780, qty: 1, conf: 'high' },
    { name: 'Boulettes (mixed)',   price: 320, qty: 1, conf: 'medium', editing: true },
    { name: 'Curry crab',          price: 950, qty: 1, conf: 'high' },
    { name: 'Phoenix Beer',        price: 120, qty: 4, conf: 'high' },
    { name: 'Rougaille saucisse',  price: 540, qty: 1, conf: 'high' },
  ];
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const tva = subtotal * 0.15;
  const service = subtotal * 0.10;
  const total = subtotal + tva + service;

  return (
    <Phone bg={C.offWhite}>
      {/* header */}
      <div style={{ padding: '62px 20px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{
          width: 40, height: 40, borderRadius: 20, background: C.white,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 1px 3px rgba(6,61,46,0.06)',
        }}>
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path d="M8 1L2 8l6 7" stroke={C.darkTeal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 9.5, letterSpacing: 1.8, color: C.lightTeal, textTransform: 'uppercase' }}>
            Step 1 of 3 · Review
          </div>
          <div style={{ marginTop: 2, fontSize: 14, fontWeight: 600, color: C.darkTeal }}>Le Château</div>
        </div>
        <div style={{
          width: 40, height: 40, borderRadius: 20, background: C.white,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 1px 3px rgba(6,61,46,0.06)',
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9.5 1l3.5 3.5L5 12.5 1 13l.5-4L9.5 1z" stroke={C.darkTeal} strokeWidth="1.6" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* title */}
      <div style={{ padding: '6px 24px 16px' }}>
        <h1 style={{
          margin: 0, fontFamily: FONT_DISPLAY, fontWeight: 400,
          fontSize: 30, lineHeight: 1.1, color: C.darkTeal, letterSpacing: -0.5,
        }}>
          We found <span style={{ fontStyle: 'italic' }}>7 items</span>.
        </h1>
        <div style={{ marginTop: 4, fontSize: 13, color: C.textMuted }}>
          Tap to edit · Long-press to merge
        </div>
      </div>

      {/* items list */}
      <div style={{ flex: 1, overflow: 'hidden', padding: '0 16px' }}>
        <div style={{
          background: C.white, borderRadius: 18,
          border: `1px solid ${C.hairline}`,
          boxShadow: '0 1px 2px rgba(6,61,46,0.04)',
          overflow: 'hidden',
        }}>
          {items.map((it, i) => {
            const last = i === items.length - 1;
            return (
              <div key={i} style={{
                position: 'relative',
                padding: '12px 14px',
                display: 'flex', alignItems: 'center', gap: 10,
                borderBottom: last ? 'none' : `1px solid ${C.hairline}`,
                background: it.editing ? C.paleTeal2 : 'transparent',
              }}>
                {/* qty stepper */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: 2, borderRadius: 10,
                  background: C.offWhite,
                  border: `1px solid ${C.hairline}`,
                  flexShrink: 0,
                }}>
                  <div style={{ width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.textMuted }}>
                    <svg width="8" height="2" viewBox="0 0 8 2"><rect width="8" height="2" rx="1" fill="currentColor"/></svg>
                  </div>
                  <div style={{ minWidth: 14, textAlign: 'center', fontFamily: FONT_MONO, fontSize: 13, fontWeight: 700, color: C.darkTeal }}>
                    {it.qty}
                  </div>
                  <div style={{ width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.primaryTeal }}>
                    <svg width="10" height="10" viewBox="0 0 10 10"><rect x="4" width="2" height="10" rx="1" fill="currentColor"/><rect y="4" width="10" height="2" rx="1" fill="currentColor"/></svg>
                  </div>
                </div>
                {/* name */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontSize: 14.5, fontWeight: 600, color: C.darkTeal,
                    letterSpacing: -0.1,
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.name}</span>
                    {it.conf === 'medium' && (
                      <span style={{
                        fontFamily: FONT_MONO, fontSize: 8.5, letterSpacing: 1,
                        color: C.amberDeep, background: '#FCE4B655',
                        padding: '2px 5px', borderRadius: 4,
                      }}>CHECK</span>
                    )}
                  </div>
                  <div style={{ marginTop: 2, fontSize: 11.5, color: C.textMuted, fontFamily: FONT_MONO }}>
                    {rs(it.price, true)} ea
                  </div>
                </div>
                {/* price */}
                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontFamily: FONT_DISPLAY, fontSize: 18, fontWeight: 500,
                    color: C.darkTeal, letterSpacing: -0.3,
                  }}>{rs(it.price * it.qty)}</div>
                </div>
                {/* delete */}
                <div style={{
                  width: 28, height: 28, borderRadius: 14,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: C.textMuted, flexShrink: 0,
                }}>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 4h9M5 4V2.5h3V4M3.5 4l.5 7h5l.5-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            );
          })}
          {/* add item row */}
          <div style={{
            padding: '13px 14px',
            display: 'flex', alignItems: 'center', gap: 10,
            background: '#F8FAF9',
            borderTop: `1px dashed ${C.hairline}`,
          }}>
            <div style={{
              width: 30, height: 30, borderRadius: 15,
              background: C.paleTeal, color: C.primaryTeal,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="11" height="11" viewBox="0 0 11 11"><rect x="4.5" width="2" height="11" rx="1" fill="currentColor"/><rect y="4.5" width="11" height="2" rx="1" fill="currentColor"/></svg>
            </div>
            <div style={{ fontSize: 14, fontWeight: 500, color: C.primaryTeal }}>Add item manually</div>
          </div>
        </div>

        {/* Summary */}
        <div style={{
          marginTop: 14, background: C.darkTeal, borderRadius: 18,
          padding: '14px 18px', color: '#fff',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
            <span style={{ opacity: 0.7 }}>Subtotal</span>
            <span style={{ fontFamily: FONT_MONO, fontWeight: 500 }}>{rs(subtotal, true)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginTop: 6 }}>
            <span style={{ opacity: 0.7 }}>TVA 15%</span>
            <span style={{ fontFamily: FONT_MONO, fontWeight: 500 }}>{rs(tva, true)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginTop: 6 }}>
            <span style={{ opacity: 0.7 }}>Service 10%</span>
            <span style={{ fontFamily: FONT_MONO, fontWeight: 500 }}>{rs(service, true)}</span>
          </div>
          <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px dashed rgba(255,255,255,0.18)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontFamily: FONT_DISPLAY, fontSize: 16, fontWeight: 500 }}>Total</span>
            <span style={{ fontFamily: FONT_DISPLAY, fontSize: 26, fontWeight: 500, color: C.amber, letterSpacing: -0.4 }}>{rs(total)}</span>
          </div>
        </div>
      </div>

      {/* primary CTA */}
      <div style={{ padding: '16px 16px 36px' }}>
        <button style={{
          width: '100%', height: 56, borderRadius: 16,
          background: C.primaryTeal, color: '#fff',
          border: 'none', cursor: 'pointer',
          fontFamily: FONT_SANS, fontSize: 16, fontWeight: 600, letterSpacing: -0.2,
          boxShadow: '0 12px 24px -12px rgba(15,110,86,0.55)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        }}>
          Split the bill
          <span style={{ fontFamily: FONT_MONO, fontSize: 12, opacity: 0.7 }}>·</span>
          <span style={{ fontFamily: FONT_MONO, fontSize: 13, opacity: 0.9 }}>{rs(total)}</span>
        </button>
      </div>
    </Phone>
  );
}

// ═════════════════════════════════════════════════════════════
// SCREEN 6 — Item Assignment
// ═════════════════════════════════════════════════════════════
function ScreenAssign() {
  const people = [
    { name: 'Benjamin', host: true, share: 1230 },
    { name: 'Priya',                 share: 1410 },
    { name: 'Ravi',                  share: 950 },
    { name: 'Chloé',                 share: 1125 },
  ];
  const items = [
    { name: 'Octopus salad',  price: 420, assignedTo: ['Priya', 'Chloé'], split: '1/2' },
    { name: 'Coq au vin',     price: 780, assignedTo: ['Ravi'] },
    { name: 'Curry crab',     price: 950, assignedTo: ['Benjamin'] },
    { name: 'Phoenix Beer ×4',price: 480, assignedTo: ['Benjamin', 'Priya', 'Ravi', 'Chloé'], split: '1/4' },
    { name: 'Rougaille saucisse', price: 540, assignedTo: null }, // unassigned
  ];
  const selected = 'Priya';

  return (
    <Phone bg={C.offWhite}>
      {/* header */}
      <div style={{ padding: '62px 20px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{
          width: 40, height: 40, borderRadius: 20, background: C.white,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 1px 3px rgba(6,61,46,0.06)',
        }}>
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path d="M8 1L2 8l6 7" stroke={C.darkTeal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 9.5, letterSpacing: 1.8, color: C.lightTeal, textTransform: 'uppercase' }}>
            Step 2 of 3 · Assign
          </div>
          <div style={{ marginTop: 2, fontSize: 14, fontWeight: 600, color: C.darkTeal }}>Le Château</div>
        </div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          background: C.lightTeal + '22', color: C.primaryTeal,
          padding: '6px 9px', borderRadius: 999,
          fontSize: 10.5, fontWeight: 600,
        }}>
          <span style={{ width: 5, height: 5, borderRadius: 3, background: C.lightTeal, animation: 'koste-pulse 1.6s ease-in-out infinite' }}/>
          Live
        </div>
      </div>

      {/* people row + progress */}
      <div style={{ padding: '8px 20px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, overflow: 'hidden' }}>
          {people.map((p) => {
            const on = p.name === selected;
            return (
              <div key={p.name} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                padding: '6px 8px 8px', borderRadius: 14,
                background: on ? C.paleTeal : 'transparent',
                border: on ? `1.5px solid ${C.primaryTeal}` : `1.5px solid transparent`,
                flex: 1,
              }}>
                <Avatar name={p.name} size={40} ring={on ? C.primaryTeal : undefined}/>
                <div style={{ fontSize: 11.5, fontWeight: 600, color: on ? C.darkTeal : C.textDark, letterSpacing: -0.1 }}>
                  {p.name}{p.host && <span style={{ color: C.amberDeep }}> ·</span>}
                </div>
                <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: on ? C.primaryTeal : C.textMuted, fontWeight: 700 }}>
                  {rs(p.share)}
                </div>
              </div>
            );
          })}
          <div style={{
            width: 44, height: 44, borderRadius: 22,
            border: `1.5px dashed ${C.hairline}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: C.textMuted, marginTop: 6,
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14"><rect x="6" width="2" height="14" rx="1" fill="currentColor"/><rect y="6" width="14" height="2" rx="1" fill="currentColor"/></svg>
          </div>
        </div>

        {/* progress */}
        <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ flex: 1, height: 6, borderRadius: 3, background: C.hairline, overflow: 'hidden' }}>
            <div style={{ width: '57%', height: '100%', background: `linear-gradient(90deg, ${C.lightTeal}, ${C.primaryTeal})`, borderRadius: 3 }}/>
          </div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11, fontWeight: 700, color: C.darkTeal }}>4 / 7</div>
        </div>
        <div style={{ marginTop: 4, fontSize: 11.5, color: C.textMuted }}>
          Tap an item to assign it to <span style={{ color: C.primaryTeal, fontWeight: 600 }}>Priya</span> · Split between to share
        </div>
      </div>

      {/* item cards */}
      <div style={{ flex: 1, overflow: 'hidden', padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((it, i) => {
          const unassigned = !it.assignedTo;
          return (
            <div key={i} style={{
              background: unassigned ? '#FFF8EC' : C.white,
              border: `1px solid ${unassigned ? '#F5D38A' : C.hairline}`,
              borderRadius: 14,
              padding: '11px 12px',
              display: 'flex', alignItems: 'center', gap: 10,
              boxShadow: '0 1px 2px rgba(6,61,46,0.03)',
            }}>
              {/* drag handle */}
              <div style={{
                width: 4, height: 28, borderRadius: 2,
                background: unassigned ? '#F5D38A' : C.hairline,
              }}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: C.darkTeal, letterSpacing: -0.1 }}>
                  {it.name}
                </div>
                <div style={{ marginTop: 2, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontFamily: FONT_MONO, fontSize: 11.5, fontWeight: 700, color: C.primaryTeal }}>{rs(it.price)}</span>
                  {it.split && (
                    <span style={{
                      fontFamily: FONT_MONO, fontSize: 9.5, letterSpacing: 0.5,
                      color: C.primaryTeal, background: C.paleTeal,
                      padding: '1px 5px', borderRadius: 4, fontWeight: 700,
                    }}>SPLIT {it.split}</span>
                  )}
                </div>
              </div>
              {/* assignees / cta */}
              {unassigned ? (
                <button style={{
                  background: C.amber, color: C.darkTeal,
                  border: 'none', cursor: 'pointer',
                  borderRadius: 10, padding: '7px 11px',
                  fontFamily: FONT_SANS, fontSize: 12, fontWeight: 700, letterSpacing: -0.1,
                }}>Assign</button>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {it.assignedTo.slice(0, 4).map((n, idx) => (
                    <div key={n} style={{ marginLeft: idx === 0 ? 0 : -7 }}>
                      <Avatar name={n} size={24} ring={C.white}/>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* your share bar */}
      <div style={{
        margin: '12px 16px 16px', padding: '12px 16px',
        background: C.darkTeal, borderRadius: 16,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        color: '#fff',
      }}>
        <div>
          <div style={{ fontSize: 11, opacity: 0.6, fontFamily: FONT_MONO, letterSpacing: 1, textTransform: 'uppercase' }}>
            Priya’s share
          </div>
          <div style={{ marginTop: 2, fontFamily: FONT_DISPLAY, fontSize: 22, fontWeight: 500, letterSpacing: -0.3 }}>
            {rs(1410)} <span style={{ fontFamily: FONT_SANS, fontSize: 11, opacity: 0.5, fontWeight: 400 }}>updating live</span>
          </div>
        </div>
        <button style={{
          background: C.amber, color: C.darkTeal,
          border: 'none', cursor: 'pointer',
          borderRadius: 12, padding: '11px 16px',
          fontFamily: FONT_SANS, fontSize: 13, fontWeight: 700, letterSpacing: -0.1,
        }}>
          Continue →
        </button>
      </div>
      <div style={{ height: 8 }}/>
    </Phone>
  );
}

// ═════════════════════════════════════════════════════════════
// SCREEN 7 — Payment Screen
// ═════════════════════════════════════════════════════════════
function ScreenPay() {
  const me = { name: 'Benjamin', amount: 1230, method: 'mcb' };
  const others = [
    { name: 'Priya',    amount: 1410, status: 'paid',    via: 'MCB PaySmart' },
    { name: 'Ravi',     amount: 950,  status: 'pending'  },
    { name: 'Chloé',    amount: 1125, status: 'paid',    via: 'POP transfer' },
  ];

  const methods = [
    { id: 'mcb',     label: 'MCB PaySmart' },
    { id: 'pop',     label: 'POP' },
    { id: 'apple',   label: '\u2009Apple Pay' },
    { id: 'google',  label: 'Google Pay' },
    { id: 'cash',    label: 'Cash' },
  ];

  return (
    <Phone bg={C.offWhite}>
      {/* faint warm haze */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 240,
        background: `radial-gradient(360px 220px at 50% -10%, ${C.paleTeal} 0%, transparent 70%)`,
      }}/>

      {/* header */}
      <div style={{ padding: '62px 20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 20, background: C.white,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 1px 3px rgba(6,61,46,0.06)',
        }}>
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path d="M8 1L2 8l6 7" stroke={C.darkTeal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 9.5, letterSpacing: 1.8, color: C.lightTeal, textTransform: 'uppercase' }}>
            Step 3 of 3 · Pay
          </div>
          <div style={{ marginTop: 2, fontSize: 14, fontWeight: 600, color: C.darkTeal }}>Le Château</div>
        </div>
        <div style={{ width: 40 }}/>
      </div>

      {/* your amount — big card */}
      <div style={{ padding: '16px 20px 0', position: 'relative', zIndex: 2 }}>
        <div style={{
          background: C.white, borderRadius: 22, padding: '20px 22px',
          border: `1px solid ${C.hairline}`,
          boxShadow: '0 1px 2px rgba(6,61,46,0.04), 0 14px 30px -20px rgba(6,61,46,0.12)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 11.5, color: C.textMuted, fontFamily: FONT_MONO, letterSpacing: 1.2, textTransform: 'uppercase' }}>
              You owe
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              fontSize: 10.5, fontWeight: 600, color: C.primaryTeal,
              background: C.paleTeal, padding: '4px 9px', borderRadius: 999,
            }}>
              <span style={{ width: 5, height: 5, borderRadius: 3, background: C.lightTeal }}/>
              2 of 4 settled
            </div>
          </div>
          <div style={{
            marginTop: 6, fontFamily: FONT_DISPLAY, fontSize: 56, fontWeight: 400,
            color: C.darkTeal, letterSpacing: -2, lineHeight: 1,
          }}>
            <span style={{ fontSize: 26, verticalAlign: 'top', letterSpacing: -0.5, marginRight: 4, color: C.textMuted }}>Rs</span>
            1,230
          </div>
          <div style={{ marginTop: 4, fontSize: 12.5, color: C.textMuted }}>
            for curry crab + 1 Phoenix · your portion
          </div>
        </div>
      </div>

      {/* method chips */}
      <div style={{ padding: '18px 20px 8px' }}>
        <div style={{ fontSize: 12, color: C.textMuted, fontFamily: FONT_MONO, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 8 }}>
          Pay with
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {methods.map((m) => {
            const on = m.id === me.method;
            return (
              <div key={m.id} style={{
                padding: '8px 12px', borderRadius: 999,
                background: on ? C.darkTeal : C.white,
                color: on ? C.amber : C.darkTeal,
                border: `1px solid ${on ? C.darkTeal : C.hairline}`,
                fontSize: 12.5, fontWeight: 600, letterSpacing: -0.1,
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                {on && <span style={{ width: 5, height: 5, borderRadius: 3, background: C.amber }}/>}
                {m.label}
              </div>
            );
          })}
        </div>
      </div>

      {/* friends list */}
      <div style={{ flex: 1, padding: '14px 16px 0', overflow: 'hidden' }}>
        <div style={{ padding: '0 4px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 16, fontWeight: 500, color: C.darkTeal }}>Your group</div>
          <div style={{ fontSize: 12, color: C.textMuted }}>Updated 18s ago</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {others.map((p) => {
            const paid = p.status === 'paid';
            return (
              <div key={p.name} style={{
                background: C.white, borderRadius: 14,
                border: `1px solid ${C.hairline}`,
                padding: '10px 12px',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <div style={{ position: 'relative' }}>
                  <Avatar name={p.name} size={36}/>
                  {paid && (
                    <div style={{
                      position: 'absolute', bottom: -2, right: -2,
                      width: 16, height: 16, borderRadius: 8, background: C.lightTeal,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      border: '2px solid #fff',
                    }}>
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M1 3l2 2 4-4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: C.darkTeal, letterSpacing: -0.1 }}>{p.name}</div>
                  <div style={{ fontSize: 11.5, color: paid ? C.primaryTeal : C.textMuted, fontWeight: paid ? 600 : 400 }}>
                    {paid ? `Paid via ${p.via}` : 'Awaiting payment'}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontFamily: FONT_DISPLAY, fontSize: 17, fontWeight: 500,
                    color: paid ? C.textMuted : C.darkTeal,
                    textDecoration: paid ? 'line-through' : 'none',
                    letterSpacing: -0.3,
                  }}>{rs(p.amount)}</div>
                  {!paid && (
                    <div style={{
                      marginTop: 2, fontSize: 10, fontFamily: FONT_MONO,
                      color: C.amberDeep, letterSpacing: 0.5, fontWeight: 700,
                    }}>NUDGE →</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* big amber CTA */}
      <div style={{ padding: '14px 16px 36px' }}>
        <button style={{
          width: '100%', height: 62, borderRadius: 18,
          background: `linear-gradient(180deg, ${C.amber} 0%, ${C.amberDeep} 100%)`,
          color: C.darkTeal,
          border: 'none', cursor: 'pointer',
          fontFamily: FONT_SANS, fontSize: 17, fontWeight: 700, letterSpacing: -0.3,
          boxShadow: '0 16px 30px -12px rgba(239,159,39,0.55), 0 1px 0 rgba(255,255,255,0.4) inset',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        }}>
          Pay {rs(1230)}
          <span style={{ fontFamily: FONT_MONO, fontSize: 11, opacity: 0.6, fontWeight: 500 }}>· via MCB</span>
        </button>
      </div>
    </Phone>
  );
}

// ═════════════════════════════════════════════════════════════
// SCREEN 8 — Profile & Settings
// ═════════════════════════════════════════════════════════════
function ScreenProfile() {
  const stats = [
    { label: 'Hosted',  value: '14' },
    { label: 'Joined',  value: '38' },
    { label: 'Total split', value: 'Rs 64.2k' },
  ];
  const settings = [
    { group: 'Account', rows: [
      { label: 'Notifications', value: 'On · 3 channels' },
      { label: 'Language', value: 'English · Français' },
      { label: 'Linked payment methods', value: '3 cards', badge: 'MCB · Apple Pay · POP' },
    ]},
    { group: 'Privacy', rows: [
      { label: 'Privacy & Data', value: 'DPA 2017' },
      { label: 'Sessions in offline mode', value: 'Allow' },
      { label: 'Export my data', value: 'Last: 02 Apr' },
    ]},
  ];

  return (
    <Phone bg={C.offWhite}>
      {/* hero */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 290,
        background: `linear-gradient(180deg, ${C.darkTeal} 0%, ${C.darkTeal} 50%, ${C.offWhite} 100%)`,
      }}/>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 290,
        background: `radial-gradient(500px 300px at 80% 10%, ${C.primaryTeal} 0%, transparent 60%)`,
      }}/>

      {/* top bar */}
      <div style={{
        position: 'relative', zIndex: 2,
        padding: '62px 20px 0',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        color: '#fff',
      }}>
        <div style={{
          width: 40, height: 40, borderRadius: 20,
          background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(20px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path d="M8 1L2 8l6 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 600 }}>Profile</div>
        <div style={{
          width: 40, height: 40, borderRadius: 20,
          background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(20px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9.5 1l3.5 3.5L5 12.5 1 13l.5-4L9.5 1z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* avatar + name */}
      <div style={{ position: 'relative', zIndex: 2, padding: '18px 24px 0', color: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            width: 72, height: 72, borderRadius: 36,
            background: C.amber, color: C.darkTeal,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 36,
            border: '3px solid rgba(255,255,255,0.2)',
          }}>B</div>
          <div>
            <div style={{ fontFamily: FONT_DISPLAY, fontSize: 28, fontWeight: 400, letterSpacing: -0.5, lineHeight: 1 }}>
              Benjamin <span style={{ fontStyle: 'italic' }}>Lim</span>
            </div>
            <div style={{ marginTop: 4, fontFamily: FONT_MONO, fontSize: 12, color: 'rgba(225,245,238,0.7)', letterSpacing: 0.5 }}>
              +230 5482 ··· 1907
            </div>
            <div style={{
              marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(239,159,39,0.18)', color: C.amber,
              padding: '3px 9px', borderRadius: 999,
              fontSize: 10.5, fontWeight: 700, letterSpacing: 0.4,
            }}>
              ★ KOSTE FOUNDER · 2026
            </div>
          </div>
        </div>

        {/* stats */}
        <div style={{
          marginTop: 18, padding: '14px 4px',
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)',
          borderRadius: 16, border: '1px solid rgba(255,255,255,0.10)',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              textAlign: 'center',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.12)' : 'none',
            }}>
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: 22, fontWeight: 500, letterSpacing: -0.4 }}>{s.value}</div>
              <div style={{ marginTop: 2, fontSize: 10.5, color: 'rgba(225,245,238,0.65)', textTransform: 'uppercase', letterSpacing: 1.2, fontFamily: FONT_MONO }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* settings list */}
      <div style={{ flex: 1, overflow: 'hidden', padding: '18px 16px 0', position: 'relative', zIndex: 2 }}>
        {settings.map((grp, gi) => (
          <div key={gi} style={{ marginBottom: 12 }}>
            <div style={{
              padding: '0 6px 6px', fontSize: 10.5, fontFamily: FONT_MONO,
              color: C.textMuted, letterSpacing: 1.5, textTransform: 'uppercase',
            }}>{grp.group}</div>
            <div style={{
              background: C.white, borderRadius: 16,
              border: `1px solid ${C.hairline}`,
              overflow: 'hidden',
            }}>
              {grp.rows.map((r, i) => (
                <div key={i} style={{
                  padding: '12px 14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  borderBottom: i < grp.rows.length - 1 ? `1px solid ${C.hairline}` : 'none',
                  gap: 12,
                }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: C.darkTeal, letterSpacing: -0.1 }}>{r.label}</div>
                    <div style={{ marginTop: 2, fontSize: 11.5, color: C.textMuted, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.value}</div>
                  </div>
                  <svg width="6" height="11" viewBox="0 0 6 11" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M1 1l4 4.5L1 10" stroke={C.textMuted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* delete account */}
        <div style={{
          background: C.white, borderRadius: 16,
          border: `1px solid ${C.error}22`,
          padding: '14px 14px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: C.error, letterSpacing: -0.1 }}>Delete account</div>
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
              <path d="M1 1l4 4.5L1 10" stroke={C.error} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div style={{ marginTop: 4, fontSize: 11, color: C.textMuted, lineHeight: 1.45 }}>
            Your data will be permanently erased within 24 hours, in line with the Mauritius Data Protection Act 2017.
          </div>
        </div>
      </div>

      <TabBar active="profile"/>
    </Phone>
  );
}

Object.assign(window, { ScreenReview, ScreenAssign, ScreenPay, ScreenProfile });
