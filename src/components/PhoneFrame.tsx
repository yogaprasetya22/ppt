import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useDeck } from '../deck/DeckContext';

export default function PhoneFrame({
  children,
}: {
  children: ReactNode;
  title?: string;
}) {
  const { isStatic } = useDeck();

  return (
    <motion.div
      initial={isStatic ? false : { opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.44, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
      className="phone-frame"
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        borderRadius: '30px',
        border: '3px solid #2b0b38',
        background: '#190928',
        boxShadow:
          '0 20px 45px -10px rgba(40, 10, 60, 0.2), 0 0 0 1px rgba(90, 50, 130, 0.1)',
        overflow: 'hidden',
        maxWidth: 260,
        width: '100%',
        margin: '0 auto',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Top bar with Dynamic Island */}
      <div
        style={{
          height: 22,
          background: '#190928',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 14px',
        }}
      >
        <div
          style={{
            width: 64,
            height: 10,
            background: '#0a0312',
            borderRadius: 8,
          }}
        />
      </div>
      {/* Phone screen body */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: '#ffffff',
        }}
      >
        {children}
      </div>
      {/* Bottom home indicator */}
      <div
        style={{
          height: 14,
          background: '#190928',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: 60,
            height: 3.5,
            background: 'rgba(255, 255, 255, 0.4)',
            borderRadius: 3,
          }}
        />
      </div>
    </motion.div>
  );
}
