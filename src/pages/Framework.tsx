import React from 'react'

export default function Framework(){
  const items = [
    {cat:'Suelo', desc:'Cobertura, rotaciones, labranza conservacionista, análisis periódicos.'},
    {cat:'Biodiversidad', desc:'Cortinas, refugios, manejo integrado de plagas.'},
    {cat:'Agua', desc:'Uso eficiente, buffers ribereños, control de deriva.'},
    {cat:'Carbono', desc:'Estimación, prácticas de secuestro, evidencias.'},
    {cat:'Trazabilidad', desc:'Evidencias con geolocalización y sellos/certificados.'},
  ]
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-xl font-semibold">Framework y Categorías</h2>
        <p className="text-sm text-slate-500">Mapa conceptual de prácticas y criterios. Este módulo puede vincularse a instructivos y a evidencias dentro de la plataforma EDRA.</p>
      </header>
      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((it,i)=>(
          <li key={i} className="bg-white border border-slate-200 rounded-lg p-4">
            <h3 className="font-semibold">{it.cat}</h3>
            <p className="text-sm text-slate-600">{it.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
