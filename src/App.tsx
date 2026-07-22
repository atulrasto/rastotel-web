// src/App.tsx
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top navigation */}
      <Navbar />

      {/* Page content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
