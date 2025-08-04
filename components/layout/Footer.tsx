'use client';   

export default function Footer() {
  return (
    <footer className="w-full mt-20 py-6 px-4 bg-gradient-to-r from-purple-900/30 to-black/30 backdrop-blur-md border-t border-purple-500/20 text-center text-white text-sm">
      <div className="max-w-7xl mx-auto">
        © {new Date().getFullYear()} <span className="text-pink-400 font-semibold">Iqra Azam</span>. All rights reserved.
        <div className="mt-2">
          Built with <span className="text-purple-300">Next.js</span> + <span className="text-purple-300">Tailwind CSS</span>
        </div>
      </div>
    </footer>
  )
}
