import Deck from './deck/Deck';
import Slide from './deck/Slide';
import Reveal from './deck/Reveal';
import BrowserFrame from './components/BrowserFrame';
import PhoneFrame from './components/PhoneFrame';
import { motion } from 'framer-motion';
import { useDeck } from './deck/DeckContext';

/* ── REUSABLE COMPONENTS MATCHING REFERENCE TEMPLATE & COLOR PALETTE ── */

// 1. Signature Header Badge & Headline (Matches all 5 reference images)
function SlideHeader({
  code,
  category,
  title,
  subtitle,
}: {
  code: string;
  category: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  const { isStatic } = useDeck();
  return (
    <motion.div
      initial={isStatic ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
      style={{ marginBottom: 12 }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 6,
        }}
      >
        <span
          style={{
            background: '#D5C4F7',
            color: '#2B0B38',
            fontWeight: 700,
            fontSize: '12px',
            padding: '3px 8px',
            borderRadius: '5px',
            letterSpacing: '0.06em',
            fontFamily: 'var(--font-mono)',
          }}
        >
          {code}
        </span>
        <span style={{ fontSize: '14px', color: '#5D4B70', fontWeight: 600 }}>
          {category}
        </span>
      </div>
      <h2
        style={{
          fontSize: 'clamp(26px, 3vw, 42px)',
          fontWeight: 700,
          color: '#190928',
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          margin: 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: 'clamp(15px, 1.35vw, 19px)',
            color: '#5D4B70',
            margin: '8px 0 0',
            maxWidth: '62ch',
            lineHeight: 1.45,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

// 2. Pattern 1: Numbered Items with Hairlines (Matches Image 1)
function NumberedItem({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) {
  const { isStatic } = useDeck();
  const index = parseInt(num, 10) || 1;
  const delay = Math.min(0.35, 0.04 + index * 0.045);

  return (
    <motion.div
      initial={isStatic ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={
        isStatic
          ? undefined
          : { x: 5, backgroundColor: 'rgba(213, 196, 247, 0.22)' }
      }
      style={{
        paddingTop: 13,
        paddingBottom: 14,
        paddingInline: 8,
        marginInline: -8,
        borderRadius: 8,
        borderBottom: '1px solid rgba(90, 50, 130, 0.12)',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        cursor: 'default',
        transition: 'background-color 0.18s ease, transform 0.18s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
        <span style={{ fontWeight: 700, fontSize: '17px', color: '#7C3AED' }}>
          {num}
        </span>
        <strong
          style={{ fontSize: '17.5px', color: '#190928', fontWeight: 700 }}
        >
          {title}
        </strong>
      </div>
      <p
        style={{
          fontSize: '14.5px',
          color: '#5D4B70',
          margin: 0,
          paddingLeft: 30,
          lineHeight: 1.45,
        }}
      >
        {desc}
      </p>
    </motion.div>
  );
}

// 3. Pattern 2: Large Lavender Card Box (Matches Image 2 & Image 5)
function LavenderCard({
  title,
  children,
  highlight,
}: {
  title: string;
  children: React.ReactNode;
  highlight?: string;
}) {
  const { isStatic } = useDeck();
  return (
    <motion.div
      initial={isStatic ? false : { opacity: 0, y: 14, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.42, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={
        isStatic
          ? undefined
          : { y: -3, boxShadow: '0 12px 28px -6px rgba(90, 50, 130, 0.16)' }
      }
      style={{
        background: '#D8C7F8',
        borderRadius: '16px',
        padding: 'clamp(18px, 2.4vw, 26px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 10,
        color: '#190928',
        boxShadow: '0 6px 20px -6px rgba(90, 50, 130, 0.08)',
        height: '100%',
        transition: 'box-shadow 0.25s ease, transform 0.25s ease',
      }}
    >
      <h3
        style={{
          fontSize: 'clamp(22px, 2.3vw, 30px)',
          fontWeight: 700,
          color: '#190928',
          letterSpacing: '-0.025em',
          lineHeight: 1.15,
          margin: 0,
        }}
      >
        {title}
      </h3>
      <div style={{ fontSize: '15px', color: '#2B1340', lineHeight: 1.55 }}>
        {children}
      </div>
      {highlight && (
        <div
          style={{
            fontSize: '15.5px',
            fontWeight: 700,
            color: '#190928',
            marginTop: 4,
            paddingTop: 8,
            borderTop: '1px solid rgba(43, 11, 56, 0.15)',
          }}
        >
          {highlight}
        </div>
      )}
    </motion.div>
  );
}

// 4. Pattern 3: Dark Royal Plum Card (Matches Image 3)
function DarkPlumCard({
  title,
  children,
  highlight,
}: {
  title: string;
  children: React.ReactNode;
  highlight?: string;
}) {
  const { isStatic } = useDeck();
  return (
    <motion.div
      initial={isStatic ? false : { opacity: 0, y: 14, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.42, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={
        isStatic
          ? undefined
          : { y: -3, boxShadow: '0 16px 44px -8px rgba(43, 11, 56, 0.45)' }
      }
      style={{
        background: '#2B0B38',
        borderRadius: '16px',
        padding: 'clamp(20px, 2.5vw, 28px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 10,
        color: '#FFFFFF',
        boxShadow: '0 12px 32px -8px rgba(43, 11, 56, 0.3)',
        height: '100%',
        transition: 'box-shadow 0.25s ease, transform 0.25s ease',
      }}
    >
      <h3
        style={{
          fontSize: 'clamp(22px, 2.3vw, 30px)',
          fontWeight: 700,
          color: '#FFFFFF',
          letterSpacing: '-0.025em',
          lineHeight: 1.15,
          margin: 0,
        }}
      >
        {title}
      </h3>
      <div
        className="plum-card-content"
        style={{
          fontSize: '15px',
          color: 'rgba(255, 255, 255, 0.88)',
          lineHeight: 1.55,
        }}
      >
        {children}
      </div>
      {highlight && (
        <div
          style={{
            fontSize: '15px',
            fontWeight: 700,
            color: '#D5C4F7',
            marginTop: 4,
            paddingTop: 8,
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          }}
        >
          {highlight}
        </div>
      )}
    </motion.div>
  );
}

// 5. Pattern 4: Scope / Interactive Item Pill (Matches Image 3)
function ScopeItem({
  label,
  value,
  checked = true,
}: {
  label: string;
  value: string;
  checked?: boolean;
}) {
  const { isStatic } = useDeck();
  return (
    <motion.div
      initial={isStatic ? false : { opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={
        isStatic
          ? undefined
          : { scale: 1.015, x: 3, boxShadow: '0 6px 16px rgba(43, 11, 56, 0.12)' }
      }
      whileTap={isStatic ? undefined : { scale: 0.985 }}
      style={{
        background: '#D5C4F7',
        borderRadius: '10px',
        padding: '13px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#190928',
        fontSize: '15px',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'background-color 0.18s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 17,
            height: 17,
            borderRadius: 4,
            background: checked ? '#2B0B38' : 'transparent',
            border: '1.5px solid #2B0B38',
            color: '#FFFFFF',
            fontSize: 10,
            fontWeight: 800,
          }}
        >
          {checked ? '✓' : ''}
        </span>
        <span>{label}</span>
      </div>
      <span style={{ color: '#2B0B38', fontWeight: 700 }}>{value}</span>
    </motion.div>
  );
}

// 6. Bottom impact metric strip — fills the lower band of every module slide
function MetricStrip({ items }: { items: [string, string][] }) {
  return (
    <div
      style={{
        position: 'relative',
        zIndex: 1,
        marginTop: 'auto',
        paddingTop: 18,
        marginBottom: 44,
        display: 'grid',
        gridTemplateColumns: `repeat(${items.length}, 1fr)`,
        gap: 14,
      }}
    >
      {items.map(([value, label]) => (
        <div
          key={label}
          style={{
            background: '#F4EEFC',
            border: '1px solid rgba(90, 50, 130, 0.12)',
            borderRadius: 12,
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'baseline',
            gap: 10,
          }}
        >
          <span
            style={{
              fontSize: 'clamp(20px, 2vw, 28px)',
              fontWeight: 800,
              color: '#2B0B38',
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
            }}
          >
            {value}
          </span>
          <span style={{ fontSize: '13.5px', color: '#5D4B70', lineHeight: 1.3 }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

// 7. Illustrative portal screen (used where the live portal has no data yet)
type Cell = string | { chip: string; tone: 'ok' | 'warn' | 'bad' | 'info' } | { bar: number };
const TONES = {
  ok: ['#DDF7EC', '#0E8F5B'],
  warn: ['#FFF4D6', '#B7791F'],
  bad: ['#FFE3E8', '#D6336C'],
  info: ['#E1F0FF', '#1B7FD6'],
};
function MockScreen({
  title,
  crumb,
  stats,
  tabs,
  columns,
  rows,
}: {
  title: string;
  crumb: string;
  stats?: [string, string, string][];
  tabs?: string[];
  columns: string[];
  rows: Cell[][];
}) {
  const grid = `repeat(${columns.length}, 1fr)`;
  return (
    <div style={{ background: '#F5F8FA', fontFamily: 'inherit', position: 'relative' }}>
      <div style={{ background: '#fff', padding: '12px 20px', borderBottom: '1px solid #EEF0F4', display: 'flex', alignItems: 'baseline', gap: 10 }}>
        <strong style={{ fontSize: 15, color: '#181C32' }}>{title}</strong>
        <span style={{ fontSize: 11, color: '#A1A5B7' }}>{crumb}</span>
      </div>
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {stats && (
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${stats.length}, 1fr)`, gap: 10 }}>
            {stats.map(([n, l, c]) => (
              <div key={l} style={{ background: '#fff', borderRadius: 8, padding: '10px 0', textAlign: 'center' }}>
                <div style={{ fontSize: 22, fontWeight: 600, color: c }}>{n}</div>
                <div style={{ fontSize: 11, color: '#A1A5B7' }}>{l}</div>
              </div>
            ))}
          </div>
        )}
        {tabs && (
          <div style={{ display: 'flex', gap: 18, fontSize: 12, color: '#A1A5B7', borderBottom: '1px solid #E4E6EF' }}>
            {tabs.map((t, i) => (
              <span key={t} style={{ paddingBottom: 6, color: i === 0 ? '#009EF7' : undefined, borderBottom: i === 0 ? '2px solid #009EF7' : 'none' }}>{t}</span>
            ))}
          </div>
        )}
        <div style={{ background: '#fff', borderRadius: 8, padding: '4px 14px 8px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: grid, gap: 8, padding: '10px 0', borderBottom: '1px dashed #E4E6EF', fontSize: 11, fontWeight: 600, color: '#A1A5B7' }}>
            {columns.map((c) => <span key={c}>{c}</span>)}
          </div>
          {rows.map((r, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: grid, gap: 8, padding: '9px 0', alignItems: 'center', borderBottom: i < rows.length - 1 ? '1px dashed #F1F1F4' : 'none', fontSize: 12, color: '#181C32' }}>
              {r.map((c, j) =>
                typeof c === 'string' ? (
                  <span key={j} style={{ fontWeight: j === 0 ? 600 : 400 }}>{c}</span>
                ) : 'chip' in c ? (
                  <span key={j}><span style={{ background: TONES[c.tone][0], color: TONES[c.tone][1], padding: '2px 9px', borderRadius: 6, fontSize: 11, fontWeight: 600 }}>{c.chip}</span></span>
                ) : (
                  <span key={j} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ flex: 1, height: 6, borderRadius: 4, background: '#E4E6EF', overflow: 'hidden' }}>
                      <span style={{ display: 'block', width: `${c.bar}%`, height: '100%', background: c.bar === 100 ? '#17C964' : '#009EF7' }} />
                    </span>
                    <span style={{ fontSize: 11, color: '#7E8299' }}>{c.bar}%</span>
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>
      <span style={{ position: 'absolute', right: 10, bottom: 8, fontSize: 10, color: '#A1A5B7', fontStyle: 'italic' }}>Data ilustrasi</span>
    </div>
  );
}

export default function App() {
  return (
    <Deck>
      {/* ── SLIDE 01: COVER (split layout + product mockups) ── */}
      <Slide
        nav="Cover"
        notes="Selamat datang di presentasi Sistem HRIS Enterprise RMJ Produksi. Tekankan bahwa seluruh modul yang dipresentasikan hari ini sudah berstatus LIVE dan aktif beroperasi di portal.kolibrinektara.com."
      >
        {/* decorative gradient blobs */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            right: -140,
            top: -160,
            width: 620,
            height: 620,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(167,139,250,0.55), rgba(167,139,250,0) 68%)',
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            left: -180,
            bottom: -220,
            width: 560,
            height: 560,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(213,196,247,0.7), rgba(213,196,247,0) 68%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'relative',
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            gap: 'clamp(24px, 3vw, 56px)',
            alignItems: 'center',
            paddingBottom: 56,
          }}
        >
          <Reveal>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: '#D5C4F7',
                color: '#2B0B38',
                padding: '6px 14px',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: '0.08em',
                marginBottom: 22,
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span>RMJ-HRIS</span>
              <span style={{ opacity: 0.4 }}>|</span>
              <span style={{ fontWeight: 600 }}>ENTERPRISE ECOSYSTEM</span>
            </div>
            <h1
              style={{
                fontSize: 'clamp(40px, 5.6vw, 80px)',
                fontWeight: 800,
                color: '#190928',
                letterSpacing: '-0.04em',
                lineHeight: 1.02,
                margin: '0 0 20px',
              }}
            >
              Sistem HRIS{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #7C3AED, #A78BFA)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Enterprise
              </span>
            </h1>
            <p
              style={{
                fontSize: 'clamp(16px, 1.6vw, 22px)',
                color: '#5D4B70',
                maxWidth: 560,
                margin: '0 0 28px',
                lineHeight: 1.5,
              }}
            >
              Solusi pengelolaan SDM skala nasional: patuh regulasi, zero fraud,
              dan terintegrasi penuh dari absensi hingga payroll.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 30 }}>
              {['Patuh Regulasi', 'Zero Fraud', 'Web + Mobile'].map((t) => (
                <span
                  key={t}
                  style={{
                    background: '#F4EEFC',
                    border: '1px solid rgba(90, 50, 130, 0.14)',
                    color: '#2B0B38',
                    padding: '8px 16px',
                    borderRadius: 999,
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontSize: 14,
                color: '#2B0B38',
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: '50%',
                  background: '#10B981',
                  boxShadow: '0 0 0 4px rgba(16,185,129,0.18)',
                }}
              />
              Status LIVE per 5 November 2026 · portal.kolibrinektara.com
            </div>
          </Reveal>

          <div style={{ position: 'relative', height: 'clamp(380px, 52vh, 500px)' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, width: '80%' }}>
              <BrowserFrame url="portal.kolibrinektara.com/hris">
                <img
                  src="/screenshots/hris-v2/dash-hris.png"
                  alt="HRIS Dashboard"
                  style={{ maxHeight: 'min(34vh, 320px)' }}
                />
              </BrowserFrame>
            </div>
            <div
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: '72%',
                zIndex: 5,
                filter: 'drop-shadow(0 24px 36px rgba(25, 9, 40, 0.32))',
              }}
            >
              <BrowserFrame url="portal.kolibrinektara.com/hris/executive">
                <img
                  src="/screenshots/hris-v2/dash-executive.png"
                  alt="Dashboard Eksekutif"
                  style={{ maxHeight: 'min(34vh, 320px)' }}
                />
              </BrowserFrame>
            </div>
            <div
              style={{
                position: 'absolute',
                left: '3%',
                bottom: -26,
                width: 150,
                zIndex: 10,
                filter: 'drop-shadow(0 22px 34px rgba(25, 9, 40, 0.38))',
              }}
            >
              <PhoneFrame>
                <img
                  src="/screenshots/hris/mobile/05-mobile-absensi-geofence.jpeg"
                  alt="Absensi Mobile"
                  style={{ width: '100%', display: 'block', maxHeight: 'none', objectFit: 'fill' }}
                />
              </PhoneFrame>
            </div>
          </div>
        </div>
        <MetricStrip
          items={[
            ['13', 'modul terintegrasi'],
            ['3 Zona', 'WIB · WITA · WIT'],
            ['5.000', 'target kapasitas staf'],
            ['100%', 'status LIVE'],
          ]}
        />
      </Slide>

      {/* ── AGENDA: PETA 13 MODUL ── */}
      <Slide nav="Agenda" notes="Peta 13 modul yang akan dibahas, semuanya sudah LIVE.">
        <SlideHeader
          code="AGENDA"
          category="Peta Modul"
          title="13 Modul dalam Satu Ekosistem HRIS"
          subtitle="Mencakup siklus lengkap karyawan: rekrut, kelola, bayar, nilai, hingga offboarding."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginTop: 28 }}>
            <div style={{ background: '#F4EEFC', border: '1px solid rgba(90, 50, 130, 0.12)', borderRadius: 14, padding: '34px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 15, color: '#7C3AED' }}>01</span>
              <span style={{ fontSize: 19, fontWeight: 600, color: '#190928' }}>Core HR & Organisasi</span>
            </div>
            <div style={{ background: '#F4EEFC', border: '1px solid rgba(90, 50, 130, 0.12)', borderRadius: 14, padding: '34px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 15, color: '#7C3AED' }}>02</span>
              <span style={{ fontSize: 19, fontWeight: 600, color: '#190928' }}>Absensi & Anti-Fraud</span>
            </div>
            <div style={{ background: '#F4EEFC', border: '1px solid rgba(90, 50, 130, 0.12)', borderRadius: 14, padding: '34px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 15, color: '#7C3AED' }}>03</span>
              <span style={{ fontSize: 19, fontWeight: 600, color: '#190928' }}>Shift & Roster</span>
            </div>
            <div style={{ background: '#F4EEFC', border: '1px solid rgba(90, 50, 130, 0.12)', borderRadius: 14, padding: '34px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 15, color: '#7C3AED' }}>04</span>
              <span style={{ fontSize: 19, fontWeight: 600, color: '#190928' }}>Cuti, Izin & Lembur</span>
            </div>
            <div style={{ background: '#F4EEFC', border: '1px solid rgba(90, 50, 130, 0.12)', borderRadius: 14, padding: '34px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 15, color: '#7C3AED' }}>05</span>
              <span style={{ fontSize: 19, fontWeight: 600, color: '#190928' }}>Approval & Delegasi</span>
            </div>
            <div style={{ background: '#F4EEFC', border: '1px solid rgba(90, 50, 130, 0.12)', borderRadius: 14, padding: '34px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 15, color: '#7C3AED' }}>06</span>
              <span style={{ fontSize: 19, fontWeight: 600, color: '#190928' }}>Payroll & PPh 21 TER</span>
            </div>
            <div style={{ background: '#F4EEFC', border: '1px solid rgba(90, 50, 130, 0.12)', borderRadius: 14, padding: '34px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 15, color: '#7C3AED' }}>07</span>
              <span style={{ fontSize: 19, fontWeight: 600, color: '#190928' }}>Klaim, Kasbon & ESS</span>
            </div>
            <div style={{ background: '#F4EEFC', border: '1px solid rgba(90, 50, 130, 0.12)', borderRadius: 14, padding: '34px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 15, color: '#7C3AED' }}>08</span>
              <span style={{ fontSize: 19, fontWeight: 600, color: '#190928' }}>Kinerja KPI 360°</span>
            </div>
            <div style={{ background: '#F4EEFC', border: '1px solid rgba(90, 50, 130, 0.12)', borderRadius: 14, padding: '34px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 15, color: '#7C3AED' }}>09</span>
              <span style={{ fontSize: 19, fontWeight: 600, color: '#190928' }}>Rekrutmen & Onboarding</span>
            </div>
            <div style={{ background: '#F4EEFC', border: '1px solid rgba(90, 50, 130, 0.12)', borderRadius: 14, padding: '34px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 15, color: '#7C3AED' }}>10</span>
              <span style={{ fontSize: 19, fontWeight: 600, color: '#190928' }}>Aset & Offboarding</span>
            </div>
            <div style={{ background: '#F4EEFC', border: '1px solid rgba(90, 50, 130, 0.12)', borderRadius: 14, padding: '34px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 15, color: '#7C3AED' }}>11</span>
              <span style={{ fontSize: 19, fontWeight: 600, color: '#190928' }}>Dashboard & AI Copilot</span>
            </div>
            <div style={{ background: '#F4EEFC', border: '1px solid rgba(90, 50, 130, 0.12)', borderRadius: 14, padding: '34px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 15, color: '#7C3AED' }}>12</span>
              <span style={{ fontSize: 19, fontWeight: 600, color: '#190928' }}>Open API & Keamanan</span>
            </div>
            <div style={{ background: '#F4EEFC', border: '1px solid rgba(90, 50, 130, 0.12)', borderRadius: 14, padding: '34px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 15, color: '#7C3AED' }}>13</span>
              <span style={{ fontSize: 19, fontWeight: 600, color: '#190928' }}>Aplikasi Mobile</span>
            </div>
            <div style={{ background: '#2B0B38', borderRadius: 14, padding: '34px 22px', display: 'flex', alignItems: 'center', color: '#FFFFFF', fontSize: 16, fontWeight: 700 }}>
              Roadmap & Penutup →
            </div>
        </div>
        <MetricStrip items={[["13", "modul terintegrasi"], ["100%", "status LIVE"], ["Web + Mobile", "satu basis data"]]} />
      </Slide>

      {/* ── SLIDE 02: MODUL 01 - CORE HR & ORGANISASI (Template 1: Image 1) ── */}
      <Slide nav="01. Core HR" notes="Fondasi data karyawan dan organisasi.">
        <SlideHeader
          code="HR-01"
          category="Fondasi Organisasi"
          title="Core HR & Struktur Nasional"
          subtitle="Satu sumber data karyawan untuk seluruh cabang, dari kantor pusat hingga unit terkecil."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.35fr',
            gap: 'clamp(20px, 2.4vw, 36px)',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <NumberedItem
              num="01"
              title="Data Karyawan & Dokumen Digital"
              desc="Biodata, NIK/KK, keluarga, pendidikan, kontak darurat, dan arsip dokumen terenkripsi."
            />
            <NumberedItem
              num="02"
              title="Hierarki Bertingkat Multi-Cabang"
              desc="Struktur HO → Regional → Area → Cabang dengan kepemimpinan unit terdefinisi."
            />
            <NumberedItem
              num="03"
              title="Manajemen Kontrak PKWT/PKWTT"
              desc="Reminder otomatis masa habis kontrak pada H-30, H-14, dan H-7."
            />
            <NumberedItem
              num="04"
              title="Kuota Manpower Planning (MPP)"
              desc="Visualisasi formasi ideal vs aktual per cabang × jabatan secara real-time."
            />
            <NumberedItem
              num="05"
              title="Grade Jabatan & Rekam Jejak"
              desc="Standarisasi rentang gaji per grade, histori mutasi, promosi, & SP terpusat."
            />
          </div>
          <div>
            <BrowserFrame url="portal.kolibrinektara.com/hris/employees">
              <img
                src="/screenshots/hris-v2/01-core-hr.png"
                alt="Core HR"
              />
            </BrowserFrame>
          </div>
        </div>
        <MetricStrip items={[["4 Level", "hierarki HO → Cabang"], ["H-30/14/7", "reminder kontrak otomatis"], ["Real-time", "MPP ideal vs aktual"]]} />
      </Slide>

      {/* ── SLIDE 03: MODUL 02 - ABSENSI RIIL (Template 1: Image 1) ── */}
      <Slide nav="02. Absensi" notes="Absensi multi-lokasi dan mesin fingerprint terpadu.">
        <SlideHeader
          code="HR-02"
          category="Time & Attendance"
          title="Absensi Riil & Multi-Zona"
          subtitle="Kehadiran tercatat dari HP maupun mesin fingerprint, di semua zona waktu Indonesia."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.35fr',
            gap: 'clamp(20px, 2.4vw, 36px)',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <NumberedItem
              num="01"
              title="Presensi Mobile Multi-Lokasi"
              desc="Validasi geofence GPS per cabang, verifikasi selfie, dan whitelist perangkat."
            />
            <NumberedItem
              num="02"
              title="Mesin Fingerprint Terpadu (ADMS)"
              desc="Data absensi mesin fingerprint fisik otomatis masuk ke database sistem secara instan."
            />
            <NumberedItem
              num="03"
              title="Multi-Zona Waktu (WIB, WITA, WIT)"
              desc="Sinkronisasi zona cabang dengan kalkulasi keterlambatan dan pulang awal dalam menit."
            />
            <NumberedItem
              num="04"
              title="Kunjungan Kerja Luar Kantor"
              desc="Check-in/out dinas luar disertai foto lokasi dan koordinat GPS presisi."
            />
          </div>
          <div>
            <BrowserFrame url="portal.kolibrinektara.com/hris/attendances">
              <MockScreen title="Kehadiran" crumb="Dashboard - HRIS - Kehadiran" stats={[["14","Hadir","#17C964"],["2","Telat","#F5A524"],["1","Izin","#009EF7"],["0","Alpha","#F31260"]]} columns={["Karyawan","Masuk","Pulang","Lokasi","Sumber","Status"]} rows={[["Raka Wibowo","07:58","16:04","Kantor Pusat","Mobile",{chip:"Tepat waktu",tone:"ok"}],["Laras Ayu","08:12","16:30","Kantor Pusat","Fingerprint",{chip:"Telat 12 mnt",tone:"warn"}],["Teguh Santoso","07:51","16:01","Gudang Cikarang","Mobile",{chip:"Tepat waktu",tone:"ok"}],["Maya Kartika","08:03","16:10","Kantor Pusat","Fingerprint",{chip:"Telat 3 mnt",tone:"warn"}],["Hendra Putra","07:45","16:02","Pabrik Bekasi","Mobile",{chip:"Tepat waktu",tone:"ok"}],["Indah Permata","07:59","16:05","Kantor Pusat","Mobile",{chip:"Tepat waktu",tone:"ok"}]]} />
            </BrowserFrame>
          </div>
        </div>
        <MetricStrip items={[["2 Sumber", "mobile + fingerprint ADMS"], ["3 Zona", "WIB · WITA · WIT"], ["Per Menit", "hitung telat & pulang cepat"]]} />
      </Slide>

      {/* ── SLIDE 04: MODUL 02B - KEAMANAN ABSENSI (Template 2: Image 2) ── */}
      <Slide nav="02b. Anti-Fraud" notes="Anti fake GPS dan biometrik liveness detection.">
        <SlideHeader
          code="HR-02B"
          category="Security Engine"
          title="Zero Fraud Attendance Engine"
          subtitle="Lapisan sensor, biometrik, dan perangkat memastikan yang absen benar-benar hadir di lokasi."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(20px, 2.4vw, 36px)',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: '88%', marginRight: '12%' }}>
              <BrowserFrame url="portal.kolibrinektara.com/hris/attendance-security">
                <MockScreen title="Keamanan Absensi" crumb="Dashboard - HRIS - Keamanan Absensi" tabs={["HP Absensi","Daftar Ulang Wajah","Log Keamanan"]} columns={["Karyawan","HP baru","HP aktif","Didaftarkan","Status"]} rows={[["Raka Wibowo","Galaxy A54","Redmi Note 11","05 Nov 2026",{chip:"Menunggu",tone:"warn"}],["Laras Ayu","iPhone 13","-","04 Nov 2026",{chip:"Disetujui",tone:"ok"}],["Teguh Santoso","Oppo A78","Vivo Y20","03 Nov 2026",{chip:"Menunggu",tone:"warn"}],["Maya Kartika","Realme 10","-","02 Nov 2026",{chip:"Disetujui",tone:"ok"}],["Hendra Putra","Galaxy M14","Galaxy A12","01 Nov 2026",{chip:"Ditolak",tone:"bad"}]]} />
              </BrowserFrame>
            </div>
            <div
              style={{
                position: 'absolute',
                right: '2%',
                bottom: -14,
                width: 170,
                zIndex: 10,
                filter: 'drop-shadow(0 20px 32px rgba(25, 9, 40, 0.35))',
              }}
            >
              <PhoneFrame>
                <img
                  src="/screenshots/hris/mobile/06-mobile-verifikasi-wajah-liveness.jpeg"
                  alt="Face Liveness"
                  style={{ width: '100%', display: 'block' }}
                />
              </PhoneFrame>
            </div>
          </div>
          <div>
            <LavenderCard
              title="Proteksi Biometrik & Sensor"
              highlight="Garansi kehadiran fisik 100% otentik."
            >
              <p style={{ margin: '0 0 10px' }}>
                <strong>Anti Fake GPS:</strong> Algoritma scoring mendeteksi mock provider, sensor akselerometer statis, impossible travel, dan sinyal jitter.
              </p>
              <p style={{ margin: '0 0 10px' }}>
                <strong>Face Liveness:</strong> Deteksi pose aktif interaktif (senyum, toleh) mencegah manipulasi foto atau rekaman video.
              </p>
              <p style={{ margin: 0 }}>
                <strong>Device Lock:</strong> Karyawan hanya dapat absen di 1 HP terdaftar. Pergantian HP memerlukan persetujuan atasan.
              </p>
              <p style={{ margin: '10px 0 0' }}>
                <strong>Log Keamanan:</strong> Approval ganti HP, daftar ulang wajah, dan jejak setiap upaya presensi mencurigakan.
              </p>
            </LavenderCard>
          </div>
        </div>
        <MetricStrip items={[["5 Sinyal", "deteksi fake GPS"], ["Liveness", "anti foto & video"], ["1 HP", "per karyawan terdaftar"]]} />
      </Slide>

      {/* ── SLIDE 05: MODUL 03 - SHIFT & ROSTER (Template 1: Image 1) ── */}
      <Slide nav="03. Roster Shift" notes="Penjadwalan roster bulanan dan tukar shift P2P.">
        <SlideHeader
          code="HR-03"
          category="Scheduling & Rostering"
          title="Shift Dinamis & Roster Bulanan"
          subtitle="Jadwal kerja 24/7 tersusun otomatis tanpa spreadsheet manual supervisor."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.35fr',
            gap: 'clamp(20px, 2.4vw, 36px)',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <NumberedItem
              num="01"
              title="Shift Dinamis & Lintas Hari"
              desc="Mendukung operasional pabrik 24/7 termasuk shift malam melewati tengah malam."
            />
            <NumberedItem
              num="02"
              title="Auto-Pattern Roster Generator"
              desc="Generator pola jadwal otomatis bulanan per cabang untuk menghemat waktu supervisor."
            />
            <NumberedItem
              num="03"
              title="Tukar Shift Peer-to-Peer"
              desc="Konfirmasi rekan kerja terlebih dahulu sebelum diteruskan ke meja approval atasan."
            />
            <NumberedItem
              num="04"
              title="Kalender Hari Libur Lengkap"
              desc="Integrasi kalender libur nasional resmi, cuti bersama, dan libur internal operasional."
            />
          </div>
          <div>
            <BrowserFrame url="portal.kolibrinektara.com/hris/roster">
              <img
                src="/screenshots/hris-v2/03-roster.png"
                alt="Roster Shift"
              />
            </BrowserFrame>
          </div>
        </div>
        <MetricStrip items={[["24/7", "shift malam lintas hari"], ["Auto", "generator roster bulanan"], ["2 Tahap", "approval tukar shift"]]} />
      </Slide>

      {/* ── SLIDE 06: MODUL 04 - CUTI & LEMBUR (Template 2: Image 2) ── */}
      <Slide nav="04. Cuti & Lembur" notes="Regulasi lembur Kepmenaker 102/2004 dan saldo cuti.">
        <SlideHeader
          code="HR-04"
          category="Leaves & Overtime"
          title="Cuti, Izin & SPL Lembur"
          subtitle="Hak cuti transparan dan lembur dihitung dari jam absensi riil, bukan input manual."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: 'clamp(20px, 2.4vw, 36px)',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <div>
            <BrowserFrame url="portal.kolibrinektara.com/hris/leaves">
              <MockScreen title="Cuti" crumb="Dashboard - HRIS - Cuti" stats={[["3","Pending","#F5A524"],["12","Disetujui","#17C964"],["1","Ditolak","#F31260"],["16","Total","#009EF7"]]} columns={["Karyawan","Tipe","Dari","Sampai","Hari","Status"]} rows={[["Laras Ayu","Cuti Tahunan","10 Nov","12 Nov","3",{chip:"Pending",tone:"warn"}],["Raka Wibowo","Cuti Sakit","06 Nov","07 Nov","2",{chip:"Pending",tone:"warn"}],["Maya Kartika","Cuti Tahunan","17 Nov","21 Nov","5",{chip:"Disetujui",tone:"ok"}],["Teguh Santoso","Cuti Menikah","24 Nov","26 Nov","3",{chip:"Disetujui",tone:"ok"}],["Hendra Putra","Cuti Tahunan","03 Nov","04 Nov","2",{chip:"Ditolak",tone:"bad"}],["Indah Permata","Izin Setengah Hari","08 Nov","08 Nov","0.5",{chip:"Disetujui",tone:"ok"}]]} />
            </BrowserFrame>
          </div>
          <div>
            <LavenderCard
              title="Hak Karyawan & Regulasi Depnaker"
              highlight="Tarif lembur 100% patuh Kepmenaker 102/2004."
            >
              <p style={{ margin: '0 0 10px' }}>
                <strong>Saldo Cuti Nyata:</strong> Kebijakan per jenis cuti, saldo tahunan, carry-over, dan kewajiban upload surat dokter untuk cuti sakit.
              </p>
              <p style={{ margin: '0 0 10px' }}>
                <strong>Izin Jam Kerja:</strong> Dispensasi datang terlambat, pulang lebih awal, atau keluar kantor dengan alasan sah.
              </p>
              <p style={{ margin: 0 }}>
                <strong>SPL Lembur Otomatis:</strong> Perhitungan lembur hari kerja vs hari libur dihitung otomatis berdasarkan data absensi aktual.
              </p>
            </LavenderCard>
          </div>
        </div>
        <MetricStrip items={[["Carry-over", "saldo cuti tahunan"], ["3 Jenis", "izin jam kerja"], ["102/2004", "Kepmenaker tarif lembur"]]} />
      </Slide>

      {/* ── SLIDE 07: MODUL 05 - PERSETUJUAN & DELEGASI (Template 1: Image 1) ── */}
      <Slide nav="05. Approval Matrix" notes="Alur persetujuan berjenjang dan delegasi wewenang.">
        <SlideHeader
          code="HR-05"
          category="Workflow & Delegation"
          title="Alur Persetujuan & Delegasi"
          subtitle="Setiap pengajuan mengalir ke penyetuju yang tepat, tanpa macet saat atasan berhalangan."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.35fr',
            gap: 'clamp(20px, 2.4vw, 36px)',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <NumberedItem
              num="01"
              title="Hierarki Persetujuan Fleksibel"
              desc="Matriks approval adaptif per cabang (Atasan langsung, Kepala Cabang, Area, HR)."
            />
            <NumberedItem
              num="02"
              title="Threshold Syarat Nominal"
              desc="Otomatis mewajibkan approval level lebih tinggi untuk pengajuan bernilai besar."
            />
            <NumberedItem
              num="03"
              title="Delegasi Wewenang Otomatis"
              desc="Pengalihan hak approval saat atasan sedang cuti atau bertugas ke luar kota."
            />
            <NumberedItem
              num="04"
              title="Kotak Persetujuan di Mobile"
              desc="Approval 1-klik di aplikasi smartphone dengan push notification FCM instan."
            />
          </div>
          <div>
            <BrowserFrame url="portal.kolibrinektara.com/hris/approval-flows">
              <img
                src="/screenshots/hris-v2/05-approval.png"
                alt="Approval Flows"
              />
            </BrowserFrame>
          </div>
        </div>
        <MetricStrip items={[["Multi-Tier", "per jenis & per cabang"], ["> Rp 1 Jt", "wajib approval HR Head"], ["FCM", "push notif tiap tahapan"]]} />
      </Slide>

      {/* ── SLIDE 08: MODUL 06 - PAYROLL & KEPATUHAN (Template 3: Image 3) ── */}
      <Slide nav="06. Payroll" notes="PPh 21 TER PMK 168/2023, BPJS, dan UMK Guard.">
        <SlideHeader
          code="HR-06"
          category="Payroll & Compliance"
          title="Payroll Otomatis & PPh 21 TER"
          subtitle="Gaji, pajak, dan BPJS terhitung otomatis dari data kehadiran, siap transfer dan dijurnal."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 'clamp(20px, 2.4vw, 36px)',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                marginBottom: 12,
              }}
            >
              <ScopeItem
                label="Sinkronisasi Presensi Riil"
                value="Otomatis"
                checked={true}
              />
              <ScopeItem
                label="PPh 21 TER (PMK 168/2023)"
                value="Kepatuhan Penuh"
                checked={true}
              />
              <ScopeItem
                label="BPJS TK (JKK, JKM, JHT, JP) & Kesehatan"
                value="Terkalkulasi"
                checked={true}
              />
              <ScopeItem
                label="UMK Guard Alert per Cabang"
                value="Aktif"
                checked={true}
              />
            </div>
            <div
              style={{
                border: '1.5px solid #2B0B38',
                borderRadius: '12px',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#FFFFFF',
              }}
            >
              <span style={{ fontSize: '15px', color: '#5D4B70' }}>
                Batch Processing Queue
              </span>
              <span
                style={{
                  fontSize: '22px',
                  fontWeight: 800,
                  color: '#190928',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                1.000+ Staf / Menit
              </span>
            </div>
          </div>
          <div>
            <DarkPlumCard
              title="Kepatuhan Fiskal & Keamanan"
              highlight="Slip Gaji PDF Terproteksi Password di Mobile."
            >
              <p style={{ margin: '0 0 10px' }}>
                <strong>PMK 168/2023:</strong> Mengimplementasikan skema Tarif Efektif Rata-rata (TER) bulanan serta penyesuaian masa pajak Desember dan formulir 1721-A1.
              </p>
              <p style={{ margin: '0 0 10px' }}>
                <strong>Ekspor Bank Massal:</strong> Menghasilkan file transfer CSV yang kompatibel dengan bank mitra (BCA, Mandiri, BRI, BNI).
              </p>
              <p style={{ margin: 0 }}>
                <strong>Jurnal Akuntansi:</strong> Otomasi posting jurnal biaya gaji ke modul Accounting tanpa entri manual.
              </p>
            </DarkPlumCard>
          </div>
        </div>
        <MetricStrip items={[["PMK 168", "PPh 21 TER & 1721-A1"], ["4 Program", "BPJS TK + Kesehatan"], ["0 Entri", "jurnal manual ke Accounting"]]} />
      </Slide>

      {/* ── SLIDE 09: MODUL 07 - KLAIM & KASBON (Template 1: Image 1) ── */}
      <Slide nav="07. Klaim & Kasbon" notes="Reimbursement nota dan kasbon cicilan gaji.">
        <SlideHeader
          code="HR-07"
          category="Employee Self-Service"
          title="Klaim Struk & Kasbon Gaji"
          subtitle="Karyawan mengurus klaim, kasbon, dan informasi perusahaan sendiri lewat ponsel."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.35fr',
            gap: 'clamp(20px, 2.4vw, 36px)',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <NumberedItem
              num="01"
              title="Reimbursement Foto Struk HP"
              desc="Upload nota langsung dari kamera ponsel dengan validasi plafon per grade jabatan."
            />
            <NumberedItem
              num="02"
              title="Kasbon Pinjaman Terpotong Payroll"
              desc="Simulasi cicilan pinjaman yang otomatis dipotong pada periode slip gaji karyawan."
            />
            <NumberedItem
              num="03"
              title="Broadcast Pengumuman Perusahaan"
              desc="Distribusi info nasional atau per cabang melalui notifikasi push langsung ke ponsel."
            />
          </div>
          <div>
            <BrowserFrame url="portal.kolibrinektara.com/hris/reimbursements">
              <MockScreen title="Klaim Reimbursement" crumb="Dashboard - HRIS - Klaim" stats={[["4","Menunggu","#F5A524"],["9","Disetujui","#17C964"],["Rp 6,4 jt","Bulan ini","#009EF7"]]} columns={["Karyawan","Jenis","Nominal","Tanggal","Nota","Status"]} rows={[["Hendra Putra","Transport Dinas","Rp 450.000","05 Nov","Terlampir",{chip:"Menunggu",tone:"warn"}],["Indah Permata","Makan Lembur","Rp 125.000","04 Nov","Terlampir",{chip:"Menunggu",tone:"warn"}],["Raka Wibowo","BBM","Rp 300.000","03 Nov","Terlampir",{chip:"Disetujui",tone:"ok"}],["Maya Kartika","Perlengkapan Kantor","Rp 1.250.000","02 Nov","Terlampir",{chip:"Perlu HR Head",tone:"info"}],["Teguh Santoso","Transport Dinas","Rp 380.000","01 Nov","Terlampir",{chip:"Disetujui",tone:"ok"}]]} />
            </BrowserFrame>
          </div>
        </div>
        <MetricStrip items={[["Foto Nota", "langsung dari kamera"], ["Per Grade", "validasi plafon klaim"], ["Auto", "potong cicilan di slip"]]} />
      </Slide>

      {/* ── SLIDE 10: MODUL 08 - KPI & KINERJA (Template 2: Image 2) ── */}
      <Slide nav="08. KPI 360°" notes="Evaluasi kinerja objektif 360 derajat.">
        <SlideHeader
          code="HR-08"
          category="People Performance"
          title="Penilaian Kinerja & Evaluasi 360°"
          subtitle="Penilaian kinerja terukur dan adil sebagai dasar keputusan kontrak, promosi, dan bonus."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: 'clamp(20px, 2.4vw, 36px)',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <div>
            <BrowserFrame url="portal.kolibrinektara.com/hris/performance">
              <img
                src="/screenshots/hris-v2/08-kpi.png"
                alt="Performance KPI"
              />
            </BrowserFrame>
          </div>
          <div>
            <LavenderCard
              title="Objektivitas Berbasis Data"
              highlight="Penentu perpanjangan kontrak, promosi & bonus."
            >
              <p style={{ margin: '0 0 10px' }}>
                <strong>KPI Berbobot:</strong> Setiap posisi memiliki indikator kinerja terukur yang disepakati, dengan rekap skor rata-rata per unit cabang.
              </p>
              <p style={{ margin: '0 0 10px' }}>
                <strong>Review 360 Derajat:</strong> Kombinasi penilaian mandiri (self), atasan langsung, dan rekan kerja sejawat untuk gambaran utuh.
              </p>
              <p style={{ margin: 0 }}>
                <strong>Distribusi Rating A–E:</strong> Standardisasi kurva evaluasi kinerja untuk menjamin penilaian adil bebas favoritisme.
              </p>
            </LavenderCard>
          </div>
        </div>
        <MetricStrip items={[["360°", "self · atasan · rekan"], ["A–E", "kurva distribusi rating"], ["Per Cabang", "rekap skor rata-rata"]]} />
      </Slide>

      {/* ── SLIDE 11: MODUL 09 - REKRUTMEN MPP (Template 1: Image 1) ── */}
      <Slide nav="09. Rekrutmen" notes="Rekrutmen otomatis dari gap formasi MPP.">
        <SlideHeader
          code="HR-09"
          category="Talent Acquisition"
          title="Rekrutmen MPP & 1-Click Onboard"
          subtitle="Dari kekosongan formasi hingga karyawan siap kerja dalam satu alur terhubung."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.35fr',
            gap: 'clamp(20px, 2.4vw, 36px)',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <NumberedItem
              num="01"
              title="Lowongan Terbuka Berbasis MPP"
              desc="Pembukaan lowongan otomatis saat ada gap kuota kekosongan formasi cabang."
            />
            <NumberedItem
              num="02"
              title="Pipeline Seleksi Terstruktur"
              desc="Seleksi Berkas → Wawancara → Uji Kompetensi → Offering Letter digital."
            />
            <NumberedItem
              num="03"
              title="One-Click Onboarding Instan"
              desc="Konversi otomatis pelamar diterima menjadi akun staf, jadwal shift, dan draf PKWT."
            />
          </div>
          <div>
            <BrowserFrame url="portal.kolibrinektara.com/hris/recruitment">
              <img
                src="/screenshots/hris-v2/09-rekrutmen.png"
                alt="Recruitment"
              />
            </BrowserFrame>
          </div>
        </div>
        <MetricStrip items={[["MPP Gap", "pemicu lowongan otomatis"], ["4 Tahap", "pipeline seleksi"], ["1 Klik", "akun, shift & PKWT"]]} />
      </Slide>

      {/* ── SLIDE 12: MODUL 10 - ASET & RESIGN (Template 2: Image 2) ── */}
      <Slide nav="10. Resign Clearance" notes="Serah terima aset dan clearance resign otomatis.">
        <SlideHeader
          code="HR-10"
          category="Asset & Offboarding"
          title="Aset Karyawan & Resign Clearance"
          subtitle="Aset kembali dan kewajiban lunas sebelum karyawan resmi keluar."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: 'clamp(20px, 2.4vw, 36px)',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <div>
            <BrowserFrame url="portal.kolibrinektara.com/hris/clearances">
              <MockScreen title="Clearance Resign" crumb="Dashboard - HRIS - Clearance Resign" columns={["Karyawan","Hari terakhir","Aset","Kasbon","Progres"]} rows={[["Dimas Anggoro","30 Nov 2026",{chip:"Laptop kembali",tone:"ok"},{chip:"Lunas",tone:"ok"},{bar:100}],["Fitri Handayani","15 Des 2026",{chip:"Seragam belum",tone:"warn"},{chip:"Lunas",tone:"ok"},{bar:60}],["Joko Prasetyo","31 Des 2026",{chip:"Motor dinas",tone:"warn"},{chip:"Sisa Rp 1,2 jt",tone:"bad"},{bar:25}],["Winda Lestari","20 Des 2026",{chip:"Laptop kembali",tone:"ok"},{chip:"Lunas",tone:"ok"},{bar:80}]]} />
            </BrowserFrame>
          </div>
          <div>
            <LavenderCard
              title="Pencegahan Kerugian Inventaris"
              highlight="Paklaring hanya terbit saat clearance 100% tuntas."
            >
              <p style={{ margin: '0 0 10px' }}>
                <strong>Inventaris Digital:</strong> Serah terima laptop, kendaraan dinas, atau seragam tercatat beserta nomor seri dan kondisi fisik awal.
              </p>
              <p style={{ margin: '0 0 10px' }}>
                <strong>Checklist Otomatis:</strong> Verifikasi serah terima tugas, pengembalian aset kerja, dan pelunasan sisa kasbon sebelum tanggal efektif keluar.
              </p>
              <p style={{ margin: 0 }}>
                <strong>Transparansi Finansial:</strong> Menjamin perusahaan tidak dirugikan oleh piutang atau aset yang belum kembali.
              </p>
            </LavenderCard>
          </div>
        </div>
        <MetricStrip items={[["No. Seri", "tercatat per aset"], ["4 Cek", "aset · kasbon · klaim · tugas"], ["100%", "clearance sebelum paklaring"]]} />
      </Slide>

      {/* ── SLIDE 13: MODUL 11 - DASHBOARD EKSEKUTIF & AI (Template 1: Image 1) ── */}
      <Slide nav="11. Executive AI" notes="People analytics nasional dan AI Copilot.">
        <SlideHeader
          code="HR-11"
          category="Executive Analytics"
          title="People Analytics & Smart AI Copilot"
          subtitle="Pimpinan melihat kondisi SDM nasional dan bertanya langsung ke data dengan bahasa sehari-hari."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.35fr',
            gap: 'clamp(20px, 2.4vw, 36px)',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <NumberedItem
              num="01"
              title="People Analytics Nasional"
              desc="Metrik makro headcount, turnover bulanan, tren lembur, dan total beban payroll."
            />
            <NumberedItem
              num="02"
              title="Multi-Level Drill-Down"
              desc="Filter analitik instan: Nasional → Regional → Area → hingga Cabang spesifik."
            />
            <NumberedItem
              num="03"
              title="Smart AI Copilot (SafeQuery)"
              desc="Tanya data HR dalam bahasa manusia biasa dengan proteksi SQL SELECT-only & RBAC ketat."
            />
          </div>
          <div>
            <BrowserFrame url="portal.kolibrinektara.com/hris/executive">
              <img
                src="/screenshots/hris-v2/11-executive.png"
                alt="Executive AI"
              />
            </BrowserFrame>
          </div>
        </div>
        <MetricStrip items={[["4 Level", "nasional hingga cabang"], ["SELECT-only", "AI Copilot aman"], ["RBAC", "akses sesuai peran"]]} />
      </Slide>

      {/* ── SLIDE 14: MODUL 12 - OPEN API V1 & KEAMANAN (Template 3: Image 3) ── */}
      <Slide nav="12. API & Security" notes="Open API v1 dan perlindungan data pribadi UU PDP.">
        <SlideHeader
          code="HR-12"
          category="Architecture & Security"
          title="Open API v1 & Keamanan Data"
          subtitle="HRIS terbuka untuk sistem lain, dengan data pribadi terenkripsi dan setiap perubahan tercatat."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 'clamp(20px, 2.4vw, 36px)',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                marginBottom: 12,
              }}
            >
              <ScopeItem
                label="RESTful Open API v1"
                value="Terdokumentasi"
                checked={true}
              />
              <ScopeItem
                label="Event-Driven Webhooks"
                value="Realtime"
                checked={true}
              />
              <ScopeItem
                label="Enkripsi Kolom (NIK, Rekening, BPJS)"
                value="AES-256"
                checked={true}
              />
              <ScopeItem
                label="Audit Trail Log Perubahan"
                value="Tercatat Penuh"
                checked={true}
              />
            </div>
            <div
              style={{
                border: '1.5px solid #2B0B38',
                borderRadius: '12px',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#FFFFFF',
              }}
            >
              <span style={{ fontSize: '15px', color: '#5D4B70' }}>
                Kepatuhan Regulasi
              </span>
              <span
                style={{
                  fontSize: '18px',
                  fontWeight: 800,
                  color: '#190928',
                }}
              >
                UU PDP & ISO-Ready
              </span>
            </div>
          </div>
          <div>
            <DarkPlumCard
              title="Interoperabilitas Enterprise"
              highlight="API Key per Client dengan Rate Limiting Terkontrol."
            >
              <p style={{ margin: '0 0 10px' }}>
                <strong>Integrasi ERP & BI:</strong> Memungkinkan sistem ERP finansial perusahaan dan dashboard PowerBI menarik data kehadiran & payroll secara otomatis.
              </p>
              <p style={{ margin: '0 0 10px' }}>
                <strong>Webhook Otomatis:</strong> Memicu notifikasi saat staf baru bergabung, pengajuan cuti disetujui, atau slip gaji telah terbit.
              </p>
              <p style={{ margin: 0 }}>
                <strong>Role-Based Access Control:</strong> Hak akses granular membatasi data sensitif seperti nominal gaji hanya untuk pemegang izin sah.
              </p>
            </DarkPlumCard>
          </div>
        </div>
        <MetricStrip items={[["Open API v1", "berbasis API Key"], ["4+ Event", "webhook realtime"], ["Kolom", "enkripsi NIK, NPWP, rekening"]]} />
      </Slide>

      {/* ── SLIDE 15: MODUL 13 - APLIKASI MOBILE KARYAWAN (Template: Image 5) ── */}
      <Slide nav="13. Mobile App" notes="Aplikasi mobile untuk seluruh staf di lapangan.">
        <SlideHeader
          code="HR-13"
          category="Mobile Experience"
          title="Satu Aplikasi Mobile untuk Seluruh Staf"
          subtitle="Seluruh layanan HR ada di saku karyawan, dari absen hingga approval atasan."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.35fr 1fr',
            gap: 'clamp(20px, 2.4vw, 36px)',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 14,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <PhoneFrame>
              <img
                src="/screenshots/hris/mobile/01-mobile-beranda.jpeg"
                alt="Beranda"
                style={{ width: '100%', display: 'block' }}
              />
            </PhoneFrame>
            <PhoneFrame>
              <img
                src="/screenshots/hris/mobile/02-mobile-menu-kepegawaian.jpeg"
                alt="Menu HRIS"
                style={{ width: '100%', display: 'block' }}
              />
            </PhoneFrame>
            <PhoneFrame>
              <img
                src="/screenshots/hris/mobile/05-mobile-absensi-geofence.jpeg"
                alt="Absensi Geofence"
                style={{ width: '100%', display: 'block' }}
              />
            </PhoneFrame>
          </div>
          <div>
            <LavenderCard
              title="Portal ESS Mandiri di Saku"
              highlight="Ringan, Cepat, dan Tersedia untuk iOS & Android."
            >
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <li>
                  <strong>Presensi Wajah & GPS:</strong> Check-in akurat dalam hitungan detik.
                </li>
                <li>
                  <strong>Slip Gaji PDF Berpassword:</strong> Terproteksi aman di ponsel.
                </li>
                <li>
                  <strong>Pengajuan Cuti & Klaim Nota:</strong> Foto struk langsung dari kamera.
                </li>
                <li>
                  <strong>Kotak Approval Atasan:</strong> Setujui pengajuan staf dalam 1 ketukan.
                </li>
                <li>
                  <strong>Jadwal, KPI & Pengumuman:</strong> Lihat roster, tukar shift, pantau skor, dan baca info resmi.
                </li>
              </ul>
            </LavenderCard>
          </div>
        </div>
        <MetricStrip items={[["1 Aplikasi", "semua layanan ESS"], ["iOS & Android", "satu basis aplikasi"], ["1 Ketukan", "approval atasan"]]} />
      </Slide>

      {/* ── RINGKASAN MANFAAT ── */}
      <Slide nav="Ringkasan Manfaat" notes="Rangkum nilai bisnis sebelum masuk roadmap.">
        <SlideHeader
          code="SUMMARY"
          category="Nilai Bisnis"
          title="Apa yang Didapat Perusahaan"
          subtitle="Empat dampak utama dari 13 modul HRIS yang sudah berjalan."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 24 }}>
          <div style={{ background: '#F4EEFC', border: '1px solid rgba(90, 50, 130, 0.12)', borderRadius: 16, padding: '24px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 15, color: '#7C3AED' }}>01</span>
            <strong style={{ fontSize: 22, color: '#190928', letterSpacing: '-0.02em' }}>Zero Fraud</strong>
            <span style={{ fontSize: 15, color: '#5D4B70', lineHeight: 1.5 }}>Absensi terverifikasi wajah, GPS, dan perangkat, sehingga kecurangan titip absen hilang.</span>
          </div>
          <div style={{ background: '#F4EEFC', border: '1px solid rgba(90, 50, 130, 0.12)', borderRadius: 16, padding: '24px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 15, color: '#7C3AED' }}>02</span>
            <strong style={{ fontSize: 22, color: '#190928', letterSpacing: '-0.02em' }}>Patuh Regulasi</strong>
            <span style={{ fontSize: 15, color: '#5D4B70', lineHeight: 1.5 }}>PPh 21 TER, BPJS, UMK, dan Kepmenaker 102/2004 dihitung otomatis.</span>
          </div>
          <div style={{ background: '#F4EEFC', border: '1px solid rgba(90, 50, 130, 0.12)', borderRadius: 16, padding: '24px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 15, color: '#7C3AED' }}>03</span>
            <strong style={{ fontSize: 22, color: '#190928', letterSpacing: '-0.02em' }}>Hemat Waktu HR</strong>
            <span style={{ fontSize: 15, color: '#5D4B70', lineHeight: 1.5 }}>Roster, payroll, dan onboarding berjalan otomatis, bukan lagi lewat spreadsheet.</span>
          </div>
          <div style={{ background: '#F4EEFC', border: '1px solid rgba(90, 50, 130, 0.12)', borderRadius: 16, padding: '24px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 15, color: '#7C3AED' }}>04</span>
            <strong style={{ fontSize: 22, color: '#190928', letterSpacing: '-0.02em' }}>Keputusan Berbasis Data</strong>
            <span style={{ fontSize: 15, color: '#5D4B70', lineHeight: 1.5 }}>Dashboard nasional dan AI Copilot memberi jawaban dalam hitungan detik.</span>
          </div>
        </div>
        <MetricStrip items={[["1 Sistem", "menggantikan banyak spreadsheet"], ["Real-time", "data seluruh cabang"], ["Siap Skala", "target 5.000 karyawan"]]} />
      </Slide>

      {/* ── SLIDE 18: ROADMAP & PENUTUP ── */}
      <Slide
        nav="Roadmap & Penutup"
        notes="Roadmap masa depan dan sesi live demo / Q&A."
      >
        <SlideHeader
          code="HR-14"
          category="Skalabilitas & Masa Depan"
          title="Skalabilitas 5.000 Staf & Roadmap Pengembangan"
          subtitle="Empat tahap pengembangan berikutnya untuk menyiapkan HRIS ke skala enterprise."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 28 }}>
          <div style={{ background: '#F4EEFC', border: '1px solid rgba(90, 50, 130, 0.14)', borderRadius: 16, padding: '30px 26px', minHeight: 330, display: 'flex', flexDirection: 'column', gap: 12, position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ width: 40, height: 40, borderRadius: 12, background: '#2B0B38', color: '#fff', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 15 }}>01</span>
              <span style={{ background: '#D5C4F7', color: '#2B0B38', padding: '4px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700 }}>Keamanan data</span>
            </div>
            <strong style={{ fontSize: 26, color: '#190928', letterSpacing: '-0.02em', marginTop: 14 }}>Cloud Storage</strong>
            <span style={{ fontSize: 17, color: '#5D4B70', lineHeight: 1.5 }}>Foto presensi dan nota tersimpan di cloud dengan backup offsite berkala.</span>
          </div>
          <div style={{ background: '#F4EEFC', border: '1px solid rgba(90, 50, 130, 0.14)', borderRadius: 16, padding: '30px 26px', minHeight: 330, display: 'flex', flexDirection: 'column', gap: 12, position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ width: 40, height: 40, borderRadius: 12, background: '#2B0B38', color: '#fff', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 15 }}>02</span>
              <span style={{ background: '#D5C4F7', color: '#2B0B38', padding: '4px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700 }}>Payroll</span>
            </div>
            <strong style={{ fontSize: 26, color: '#190928', letterSpacing: '-0.02em', marginTop: 14 }}>Format Bank Resmi</strong>
            <span style={{ fontSize: 17, color: '#5D4B70', lineHeight: 1.5 }}>File batch transfer gaji disesuaikan untuk bank BUMN dan swasta utama.</span>
          </div>
          <div style={{ background: '#F4EEFC', border: '1px solid rgba(90, 50, 130, 0.14)', borderRadius: 16, padding: '30px 26px', minHeight: 330, display: 'flex', flexDirection: 'column', gap: 12, position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ width: 40, height: 40, borderRadius: 12, background: '#2B0B38', color: '#fff', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 15 }}>03</span>
              <span style={{ background: '#D5C4F7', color: '#2B0B38', padding: '4px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700 }}>Modul baru</span>
            </div>
            <strong style={{ fontSize: 26, color: '#190928', letterSpacing: '-0.02em', marginTop: 14 }}>Perjalanan Dinas</strong>
            <span style={{ fontSize: 17, color: '#5D4B70', lineHeight: 1.5 }}>Pengajuan tugas luar kota, tiket, akomodasi, dan uang harian (per-diem).</span>
          </div>
          <div style={{ background: '#F4EEFC', border: '1px solid rgba(90, 50, 130, 0.14)', borderRadius: 16, padding: '30px 26px', minHeight: 330, display: 'flex', flexDirection: 'column', gap: 12, position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ width: 40, height: 40, borderRadius: 12, background: '#2B0B38', color: '#fff', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 15 }}>04</span>
              <span style={{ background: '#D5C4F7', color: '#2B0B38', padding: '4px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700 }}>Skalabilitas</span>
            </div>
            <strong style={{ fontSize: 26, color: '#190928', letterSpacing: '-0.02em', marginTop: 14 }}>Uji Beban 5.000 Staf</strong>
            <span style={{ fontSize: 17, color: '#5D4B70', lineHeight: 1.5 }}>Uji konkurensi absensi dan payroll massal untuk skala enterprise.</span>
          </div>
        </div>
        <div
          style={{
            marginTop: 'auto',
            marginBottom: 44,
            background: '#2B0B38',
            borderRadius: 18,
            padding: '26px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            color: '#fff',
          }}
        >
          <div>
            <div style={{ fontSize: 'clamp(24px, 2.6vw, 36px)', fontWeight: 800, letterSpacing: '-0.03em' }}>
              Terima kasih · Sesi Tanya Jawab & Live Demo
            </div>
            <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.78)', marginTop: 6 }}>
              Seluruh modul inti sudah LIVE dan aktif beroperasi.
            </div>
          </div>
          <span
            style={{
              background: '#D5C4F7',
              color: '#2B0B38',
              padding: '12px 22px',
              borderRadius: 999,
              fontWeight: 700,
              fontSize: 16,
              fontFamily: 'var(--font-mono)',
              whiteSpace: 'nowrap',
            }}
          >
            portal.kolibrinektara.com
          </span>
        </div>
      </Slide>
    </Deck>
  );
}
