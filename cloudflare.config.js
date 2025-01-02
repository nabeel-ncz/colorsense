module.exports = {
    // Specify build command
    build: {
        command: "npm run build",
        directory: "dist",
        includeFiles: [
            "dist/**/*"
        ]
    },
    // Add custom headers
    headers: {
        "/*": {
            "X-Frame-Options": "DENY",
            "X-Content-Type-Options": "nosniff",
            "Referrer-Policy": "strict-origin-when-cross-origin",
            "Permissions-Policy": "camera=(), microphone=(), geolocation=()"
        },
        "/assets/*": {
            "Cache-Control": "public, max-age=31536000, immutable"
        }
    }
}