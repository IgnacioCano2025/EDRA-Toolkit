  import React from 'react'

  const DEFAULT_ENDPOINT = import.meta.env.VITE_CERT_CHECK_URL || 'https://us-central1-edra-dev.cloudfunctions.net/certificates-checkCertificate'

  export default function Certificates(){
    const [id, setId] = React.useState('')
    const [status, setStatus] = React.useState<'idle'|'loading'|'ok'|'invalid'|'error'>('idle')
    const [raw, setRaw] = React.useState<any>(null)
    const [err, setErr] = React.useState<string>('')

    const check = async () => {
      setStatus('loading'); setErr(''); setRaw(null)
      try {
        const url = `${DEFAULT_ENDPOINT}?idCertificate=${encodeURIComponent(id)}`
        const res = await fetch(url, { headers: { 'Accept': 'application/json' } })
        const text = await res.text()
        try {
          const json = JSON.parse(text)
          setRaw(json)
          setStatus(json?.ok ? 'ok' : 'invalid')
        } catch {
          // fallback if endpoint returns HTML or not-json
          if (res.ok && text) { setRaw({ raw: text }); setStatus('ok') }
          else { setStatus('error'); setErr('No se pudo interpretar la respuesta.') }
        }
      } catch (e:any) {
        setStatus('error'); setErr(e?.message || 'Error de red')
      }
    }

    return (
      <section className="space-y-6">
        <header className="space-y-2">
          <h2 className="text-xl font-semibold">Verificador de Certificados (CDC)</h2>
          <p className="text-sm text-slate-500">Ingresá el ID exacto del certificado para validar su estado.</p>
        </header>
        <div className="bg-white border border-slate-200 rounded-md p-4 space-y-3">
          <label className="block text-sm text-slate-300">ID de certificado</label>
          <input value={id} onChange={e=>setId(e.target.value)}
                 placeholder="Ej: bqOI2ozQOcPEXTE3bbGr"
                 className="w-full bg-slate-100 rounded-md px-3 py-2 outline-none"/>
          <button onClick={check} disabled={!id || status==='loading'}
                  className="px-3 py-2 rounded-md bg-edra-500 hover:bg-edra-600 disabled:opacity-60 text-slate-900 font-medium">
            {status==='loading' ? 'Verificando…' : 'Verificar'}
          </button>
        </div>
        {status!=='idle' && (
          <div className="bg-white border border-slate-200 rounded-md p-4">
            {status==='ok' && <p className="text-green-300 font-medium">✅ Certificado válido</p>}
            {status==='invalid' && <p className="text-yellow-300 font-medium">⚠️ Certificado inválido o no encontrado</p>}
            {status==='error' && <p className="text-red-300 font-medium">❌ Error: {err}</p>}
            {raw && (
              <pre className="mt-3 text-xs whitespace-pre-wrap break-all bg-slate-950/60 rounded-md p-3 border border-slate-200/80 max-h-72 overflow-auto">
{`Respuesta cruda:
${typeof raw === 'string' ? raw : JSON.stringify(raw, null, 2)}`}
              </pre>
            )}
          </div>
        )}
      </section>
    )
  }
