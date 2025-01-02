import { Helmet } from 'react-helmet-async'

interface SEOProps {
    title: string
    description: string
    path: string
    image?: string
}

export const SEO = ({ title, description, path, image }: SEOProps) => {
    const siteUrl = 'https://colorsense.pages.dev'
    const fullUrl = `${siteUrl}${path}`
    const imageUrl = image ? `${siteUrl}${image}` : `${siteUrl}/og-image.png`

    return (
        <Helmet>
            {/* Basic */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph */}
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
        </Helmet>
    )
} 