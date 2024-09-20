/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(txt)$/,
            type: 'asset/source'
        })
        return config
    }
}

export default nextConfig
