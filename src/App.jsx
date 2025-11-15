import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Play, Sparkles } from 'lucide-react'

function HalftoneOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-40">
      {/* Red dots */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,0,64,0.6) 1px, transparent 1px)',
          backgroundSize: '6px 6px',
          backgroundPosition: '0 0',
          filter: 'contrast(110%)',
        }}
      />
      {/* Blue dots */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(rgba(0,128,255,0.55) 1px, transparent 1px)',
          backgroundSize: '8px 8px',
          backgroundPosition: '3px 3px',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  )
}

function Noise() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
      style={{
        backgroundImage:
          'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'2\' stitchTiles=\'stitch\'/><feColorMatrix type=\'saturate\' values=\'0\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.5\'/></svg>")',
        backgroundSize: 'cover',
      }}
    />
  )
}

function MockupCard({ title, subtitle }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0a0a0f] to-[#0a0a0f]/80 p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_80px_-20px_rgba(255,0,64,0.35)]">
      <div className="absolute -inset-1 bg-gradient-to-r from-red-500/10 via-transparent to-blue-500/10 blur-xl" />
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br from-red-900/40 via-slate-900 to-blue-900/40">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,0,64,0.25), rgba(0,128,255,0.25))',
            }}
          />
          <div className="absolute inset-0 border border-white/10 rounded-xl" />
          {/* Faux layout */}
          <div className="absolute top-4 left-4 right-4 space-y-3">
            <div className="h-4 w-2/3 rounded bg-white/20" />
            <div className="h-3 w-1/2 rounded bg-white/10" />
          </div>
          <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
            <div className="h-16 rounded bg-white/10" />
            <div className="h-16 rounded bg-white/10" />
            <div className="h-16 rounded bg-white/10" />
          </div>
        </div>
        <HalftoneOverlay />
        <Noise />
      </div>
      <div className="relative mt-4 flex items-start justify-between">
        <div>
          <h3 className="text-base font-semibold tracking-wide text-white">{title}</h3>
          <p className="mt-1 text-sm text-white/60">{subtitle}</p>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition-colors group-hover:bg-white/10">
          <ArrowRight size={18} />
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#05060a] text-white">
      {/* Hero */}
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/hinHjJppKaZFIbCr/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        {/* Dark gradient edges */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#05060a]/70 via-[#05060a]/40 to-[#05060a]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_var(--x,50%)_var(--y,50%),rgba(255,0,64,0.25),transparent_60%)]" />
        <HalftoneOverlay />
        <Noise />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <Sparkles size={14} />
            Grungy halftone • Red & Blue vibe
          </div>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
            Entinuxe: a city for shrinking people
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
            A moody, futuristic landing built with a gritty halftone duotone. Drag around to reveal red grid energy in the background.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#mockups"
              className="inline-flex items-center gap-2 rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_50px_-15px_rgba(255,0,64,0.75)] transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400/50"
            >
              Explore mockups
              <ArrowRight size={18} />
            </a>
            <a
              href="/test"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
            >
              <Play size={18} />
              System check
            </a>
          </div>
        </div>
      </section>

      {/* Mockups section */}
      <section id="mockups" className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="absolute inset-x-0 -top-24 -z-0 h-48 bg-gradient-to-b from-red-500/10 to-transparent blur-3xl" />
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Landing page mockups</h2>
            <p className="mt-2 max-w-xl text-sm text-white/60">
              Three variations exploring red/blue duotone with halftone grit.
            </p>
          </div>
          <a
            href="#"
            className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 sm:inline-flex"
          >
            See all concepts
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <MockupCard title="Nocturne Skyline" subtitle="Bold hero with duotone city" />
          <MockupCard title="Neon Arteries" subtitle="Grid-reactive interactions" />
          <MockupCard title="Retro Print" subtitle="Heavy halftone texture" />
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-white/60">
            Need a different vibe? We can iterate on layout, texture, and motion.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_50px_-15px_rgba(0,128,255,0.65)] transition hover:bg-blue-600"
          >
            Request a variation
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 px-6 py-10 text-center text-sm text-white/50">
        <p>
          © {new Date().getFullYear()} Entinuxe. Built with a gritty halftone duotone aesthetic.
        </p>
      </footer>
    </div>
  )
}
