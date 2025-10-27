import React from 'react'

export default function Manuals(){
  const items = [
    {title: 'Indicadores de Agricultura Regenerativa', href: '#'},
    {title: 'Monitoreo y Pruebas de Evidencias (fotos geoetiquetadas)', href: '#'},
    {title: 'Carga de Lotes y Polígonos', href: '#'},
    {title: 'Categorización de Lotes', href: '#'},
  ]
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-xl font-semibold">Manuales de prácticas</h2>
        <p className="text-sm text-slate-500">Repositorio de documentos y recursos oficiales. Puede apuntar a PDFs o páginas internas.</p>
      </header>
      <ul className="space-y-2">
        {items.map((it,i)=>(
          <li key={i} className="bg-white border border-slate-200 rounded-md p-4 flex items-center justify-between">
            <span>{it.title}</span>
            <a href={it.href} className="text-edra-300 hover:text-edra-200 text-sm">Abrir</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
