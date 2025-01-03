import { SEO } from '../components/SEO'

const NotFound = () => {
    return (
        <>
            <SEO
                title="404 - Page Not Found | ColorSense"
                description="The page you're looking for doesn't exist."
                path="/404"
            />
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
                <div className="text-center px-6">
                    <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        404
                    </h1>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                        Page Not Found
                    </h2>
                    <p className="mb-8 text-gray-600 dark:text-gray-400">
                        The page you're looking for doesn't exist.
                    </p>
                    <a
                        href="/"
                        className="inline-block px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 
                        transition-colors duration-200 dark:bg-blue-600 dark:hover:bg-blue-700"
                    >
                        Return to Home
                    </a>
                </div>
            </div>
        </>
    )
}

export default NotFound;