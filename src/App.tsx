import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import clsx from 'clsx'
import logoEdra from './assets/logoEdra.png'

export default function App() {
  const [open, setOpen] = React.useState(false)
  const link = 'px-3 py-2 rounded-md hover:bg-slate-100 transition-colors'
  const active = ({isActive}:{isActive:boolean}) => clsx(link, isActive && 'bg-slate-200 text-slate-900')

  return (
    <div className="min-h-screen text-slate-800 bg-slate-50">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center gap-3">
          <button className="lg:hidden" onClick={() => setOpen(v => !v)} aria-label="Abrir menú">
            <Menu />
          </button>

       <div className="flex items-center gap-3">
  <img src={logoEdra} alt="Logo EDRA" className="w-24 h- object-contain" />
  <div>
    <h1 className="text-lg font-semibold leading-tight">
      EDRA - HUB McCain Growers AG
    </h1>
    <p className="text-xs text-slate-500 -mt-0.5">
      Herramientas para Productores – Programa de Agricultura Regenerativa 2025-2026
    </p>
  </div>
</div>

          <nav className="ml-auto hidden lg:flex items-center gap-1">
            <NavLink to="/" className={active}>Home</NavLink>
            <NavLink to="/docs/manuales" className={active}>Manuales/Instructivos</NavLink>
            <a href="/platform" className={link}>EDRA App</a>
          </nav>
        </div>

        {open ? (
          <div className="lg:hidden border-t border-slate-200 bg-white/70">
            <div className="max-w-6xl mx-auto px-4 py-3 grid grid-cols-2 gap-2">
              <NavLink to="/docs/manuales" className={active} onClick={() => setOpen(false)}>
                Manuales
              </NavLink>
              <NavLink to="/platform" className={active} onClick={() => setOpen(false)}>
                Plataforma EDRA
              </NavLink>
            </div>
          </div>
        ) : null}
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>

   <footer className="mx-auto max-w-6xl px-4 pb-10 text-xs text-slate-500 text-center flex justify-center">
  <p>EDRA - AIOTEK {new Date().getFullYear()}</p>
</footer>
    </div>
  )
}
