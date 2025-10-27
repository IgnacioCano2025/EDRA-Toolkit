import React from 'react'
import { Link } from 'react-router-dom'
import { Sprout, FlaskConical, ClipboardList, BookOpen, ExternalLink, BadgeCheck } from 'lucide-react'

const Card = ({to, title, desc, icon}:{to:string,title:string,desc:string,icon:React.ReactNode}) => (
  <Link to={to} className="group bg-white border border-slate-200 rounded-lg p-5 hover:border-edra-500 hover:shadow-soft transition-all block">
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-md bg-slate-100 text-slate-700 group-hover:bg-edra-50 group-hover:text-edra-700">{icon}</div>
      <div>
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-sm text-slate-500">{desc}</p>
      </div>
    </div>
  </Link>
)

export default function ToolkitHome(){
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold">EDRA - Toolbox Programa McCain AG 2025-2026</h2>
        <p className="text-slate-500 max-w-2xl">
          Accedé a calculadoras, instructivos y recursos para adoptar y demostrar tus prácticas de agricultura regenerativa. Todo en un solo lugar.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<a
  href="https://edra-eiq-calculator.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="group bg-white border border-slate-200 rounded-lg p-5 hover:border-edra-500 hover:shadow-soft transition-all block"
>
  <div className="flex items-center gap-3">
    <div className="p-2 rounded-md bg-slate-100 text-slate-700 group-hover:bg-edra-50 group-hover:text-edra-700">
      <FlaskConical />
    </div>
    <div>
      <h3 className="text-base font-semibold">Calculadora de EIQ</h3>
      <p className="text-sm text-slate-500">
        Índice de Impacto Ambiental para manejo responsable de fitosanitarios.
      </p>
    </div>
  </div>
</a>
        <Card to="/tools/stir" title="Calculadora STIR"
          desc="Assessments de riesgo y parámetros para aplicaciones seguras."
          icon={<Sprout />} />
        <Card to="/docs/instructivos" title="Instructivos"
          desc="Guías paso a paso: carga de lotes, evidencias, fotos geolocalizadas y más."
          icon={<ClipboardList />} />
        <Card to="/docs/manuales" title="Manuales de prácticas"
          desc="Buenas prácticas de agricultura regenerativa para mejorar tus indicadores."
          icon={<BookOpen />} />
        <Card to="/tools/certificates" title="Framework y categorización"
          desc="Verificá el framwork en base al cual categorizamos indicadores y lotes."
          icon={<BadgeCheck />} />
        <a className="group bg-white border border-slate-200 rounded-lg p-5 hover:border-edra-500 hover:shadow-soft transition-all block"
           href="/platform">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-slate-100 text-slate-700 group-hover:bg-edra-50 group-hover:text-edra-700"><ExternalLink /></div>
            <div>
              <h3 className="text-base font-semibold">Plataforma EDRA</h3>
              <p className="text-sm text-slate-500">Ingresá a la plataforma para gestionar tus programas y proporcionar tus pruebas de evidencia.</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
