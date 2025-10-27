import React from 'react'
type Row = { ingrediente: string; eiq: number; dosis: number; superficie: number }
const empty: Row = { ingrediente: '', eiq: 0, dosis: 0, superficie: 1 }

export default function EIQCalculator(){
  const [rows, setRows] = React.useState<Row[]>([{...empty}])

  const add = ()=> setRows(r=>[...r, {...empty}])
  const update = (i:number, key:keyof Row, v:string)=>{
    setRows(rs=> rs.map((r,idx)=> idx===i ? {...r, [key]: key==='ingrediente' ? v : Number(v)} : r))
  }
  const remove = (i:number)=> setRows(rs=> rs.filter((_,idx)=> idx!==i))

  const eiqField = rows.reduce((acc,r)=> acc + (r.eiq * r.dosis * r.superficie), 0)
  const valid = rows.some(r=> r.eiq>0 && r.dosis>0)

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-xl font-semibold">Calculadora de EIQ (borrador)</h2>
        <p className="text-sm text-slate-500">
          Estimación rápida del EIQ de campo: suma(EIQ ingrediente × dosis × superficie). Este módulo es un placeholder y puede ampliarse con bases de datos oficiales y fórmulas completas.
        </p>
      </header>

      <div className="space-y-3">
        {rows.map((r,i)=>(
          <div key={i} className="grid grid-cols-12 gap-2 items-center bg-slate-900/50 border border-slate-200 rounded-md p-3">
            <input value={r.ingrediente} onChange={e=>update(i,'ingrediente',e.target.value)}
                   placeholder="Ingrediente activo" className="col-span-3 bg-slate-100 rounded-md px-3 py-2 outline-none"/>
            <input type="number" step="0.01" value={r.eiq} onChange={e=>update(i,'eiq',e.target.value)}
                   placeholder="EIQ ingrediente" className="col-span-3 bg-slate-100 rounded-md px-3 py-2 outline-none"/>
            <input type="number" step="0.01" value={r.dosis} onChange={e=>update(i,'dosis',e.target.value)}
                   placeholder="Dosis (L o kg/ha)" className="col-span-3 bg-slate-100 rounded-md px-3 py-2 outline-none"/>
            <input type="number" step="0.01" value={r.superficie} onChange={e=>update(i,'superficie',e.target.value)}
                   placeholder="Superficie (ha)" className="col-span-2 bg-slate-100 rounded-md px-3 py-2 outline-none"/>
            <button onClick={()=>remove(i)} className="col-span-1 text-sm text-slate-300 hover:text-red-300">✕</button>
          </div>
        ))}
        <button onClick={add} className="px-3 py-2 rounded-md bg-edra-500 hover:bg-edra-600 text-slate-900 font-medium">Agregar fila</button>
      </div>

      <div className="bg-white border border-slate-200 rounded-md p-4">
        <p className="text-sm text-slate-500">EIQ de campo estimado</p>
        <p className="text-2xl font-semibold">{valid ? eiqField.toFixed(2) : '—'}</p>
      </div>
    </section>
  )
}
