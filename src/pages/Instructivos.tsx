import React from 'react'

export default function Instructivos(){
  const steps = [
    {title:'Alta en Plataforma EDRA', desc:'Cómo registrarte y validar tu usuario.'},
    {title:'Cargar tu primer Lote', desc:'Dibujá el polígono, subí KMZ y asociá indicadores.'},
    {title:'Subir evidencias', desc:'Fotos con geolocalización, fechas y descripciones.'},
    {title:'Categorización de Lotes', desc:'Qué condiciones cumplir y cómo obtener la categorización según framework.'},
  ]
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-xl font-semibold">Instructivos</h2>
        <p className="text-sm text-slate-500">Guías paso a paso para tareas frecuentes en EDRA.</p>
      </header>
      <ol className="grid gap-3 sm:grid-cols-2">
        {steps.map((s,i)=>(
          <li key={i} className="bg-white border border-slate-200 rounded-md p-4">
            <h3 className="font-semibold">{i+1}. {s.title}</h3>
            <p className="text-sm text-slate-500">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
