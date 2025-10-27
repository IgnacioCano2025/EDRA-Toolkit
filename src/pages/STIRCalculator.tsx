import React from 'react'

export default function STIRCalculator(){
  const [mezcla, setMezcla] = React.useState('')
  const [resultado, setResultado] = React.useState<number | null>(null)

  const calcular = ()=>{
    // Placeholder: una lógica básica a reemplazar por la fórmula STIR real
    const score = mezcla.trim().length ? Math.min(100, Math.max(0, mezcla.split(',').length * 12.5)) : null
    setResultado(score)
  }

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-xl font-semibold">Calculadora STIR (placeholder)</h2>
        <p className="text-sm text-slate-500">Módulo de ejemplo para cálculos de riesgo/toxicidad. Sustituir por la metodología validada por EDRA.</p>
      </header>
      <div className="bg-white border border-slate-200 rounded-md p-4 space-y-3">
        <label className="block text-sm text-slate-300">Composición de mezcla (separar por coma)</label>
        <input value={mezcla} onChange={e=>setMezcla(e.target.value)}
               placeholder="Ej: ingrediente A, ingrediente B, ingrediente C"
               className="w-full bg-slate-100 rounded-md px-3 py-2 outline-none"/>
        <button onClick={calcular} className="px-3 py-2 rounded-md bg-edra-500 hover:bg-edra-600 text-slate-900 font-medium">Calcular</button>
      </div>
      <div className="bg-white border border-slate-200 rounded-md p-4">
        <p className="text-sm text-slate-500">Resultado</p>
        <p className="text-2xl font-semibold">{resultado==null ? '—' : resultado}</p>
      </div>
    </section>
  )
}
