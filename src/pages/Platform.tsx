import React from 'react'

export default function Platform() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Plataforma EDRA</h2>
      <p className="text-sm text-slate-500">
        Ingresa a la plataforma EDRA para gestionar tus programas de agricultura regenerativa, cargar pruebas de evidencia y obtener la categorización de tus indicadores y lotes.
      </p>
      <a
        href="https://app.edra.bio"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 rounded-md bg-edra-500 hover:bg-edra-600 text-slate-900 font-medium transition-colors"
      >
        Ir a la plataforma
      </a>
    </section>
  );
}