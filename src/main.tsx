import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './styles/globals.css'
import ToolkitHome from './pages/ToolkitHome'
import EIQCalculator from './pages/EIQCalculator'
import STIRCalculator from './pages/STIRCalculator'
import Manuals from './pages/Manuals'
import Instructivos from './pages/Instructivos'
import Platform from './pages/Platform'
import Framework from './pages/Framework'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <ToolkitHome /> },
      { path: 'tools/eiq', element: <EIQCalculator /> },
      { path: 'tools/stir', element: <STIRCalculator /> },
      { path: 'docs/manuales', element: <Manuals /> },
      { path: 'docs/instructivos', element: <Instructivos /> },
      { path: 'platform', element: <Platform /> },
      { path: 'docs/framework', element: <Framework /> },
    ]
  }
])

const root = createRoot(document.getElementById('root')!)
root.render(<RouterProvider router={router} />)
