export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 px-6">
      <div className="text-center">
        <h1 className="text-6xl font-black text-black dark:text-white mb-4">404</h1>
        <p className="text-2xl font-bold text-black dark:text-white mb-8">Page Not Found</p>
        <a
          href="/"
          className="inline-block px-8 py-4 bg-gather-green dark:bg-gather-green text-black dark:text-white font-black uppercase border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark hover:shadow-brutal dark:hover:shadow-brutal-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}
