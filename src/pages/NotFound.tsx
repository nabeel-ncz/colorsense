import { SEO } from '../components/SEO'

export const NotFound = () => {
    return (
        <>
            <SEO
                title="404 - Page Not Found | ColorSense"
                description="The page you're looking for doesn't exist."
                path="/404"
            />
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                    <p className="mb-8">The page you're looking for doesn't exist.</p>
                    <a href="/" className="text-blue-500 hover:text-blue-600">
                        Return to Home
                    </a>
                </div>
            </div>
        </>
    )
} 