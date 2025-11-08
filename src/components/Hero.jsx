import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero({ onCollapse }) {
  const [armed, setArmed] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (collapsed && onCollapse) onCollapse();
  }, [collapsed, onCollapse]);

  const handleObserve = (e) => {
    // Fancy hover light for the button
    const btn = e.currentTarget;
    btn.style.setProperty('--x', `${e.nativeEvent.offsetX}px`);
    btn.style.setProperty('--y', `${e.nativeEvent.offsetY}px`);

    if (!armed) {
      setArmed(true);
      return;
    }
    setCollapsed(true);
  };

  return (
    <section ref={containerRef} className="relative h-[88vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft glow gradient that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.25),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
        >
          <Rocket className="h-4 w-4 text-violet-300" />
          <span className="text-xs font-medium tracking-wider text-violet-100">Quantum Computing Club</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-balance text-4xl font-semibold leading-tight text-white drop-shadow sm:text-6xl"
        >
          Observe the quantum state?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 max-w-2xl text-pretty text-sm text-violet-100/90 sm:text-base"
        >
          A playful entrance to a serious journey into quantum algorithms, error correction, and hardware.
        </motion.p>

        <div className="mt-8 flex items-center gap-4">
          <motion.button
            onClick={handleObserve}
            whileTap={{ scale: 0.98 }}
            className={`group relative overflow-hidden rounded-xl px-6 py-3 text-sm font-semibold transition ${
              armed ? 'bg-violet-500 text-white' : 'bg-white/10 text-white/90'
            }`}
          >
            <span className="relative z-10">
              {armed ? 'Collapse the wavefunction' : 'Arm the detector'}
            </span>
            <span
              className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(120px 80px at var(--x,50%) var(--y,50%), rgba(255,255,255,0.35), transparent 60%)',
              }}
            />
          </motion.button>

          <AnimatePresence>
            {armed && !collapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-xs text-white/80"
              >
                Click again to reveal the site
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Collapse curtain */}
      <AnimatePresence>
        {collapsed && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            onAnimationComplete={() => onCollapse && onCollapse()}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-b from-black/60 via-black to-black"
          />
        )}
      </AnimatePresence>
    </section>
  );
}
