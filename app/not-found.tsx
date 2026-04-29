export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-text-muted mb-8">The page you are looking for does not exist.</p>
        <a href="/" className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dark rounded-xl font-semibold hover:shadow-lg transition-all inline-block">
          Go Home
        </a>
      </div>
    </div>
  );
}
