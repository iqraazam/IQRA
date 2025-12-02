// app/layout.tsx
import '../styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Iqra Dev Portfolio',
  description: 'Full-stack + AI Developer Portfolio',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Side Grid Decorations */}
        <div className="side-grid-left">
          <div className="grid-scanner"></div>
        </div>
        <div className="side-grid-right">
          <div className="grid-scanner"></div>
        </div>
        
        <Header />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

 