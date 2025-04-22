/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "picsum.photos",
			},
			{
				protocol: "https",
				hostname: "example.com",
			},
			{
				protocol: "https",
				hostname: "s2.static.brasilescola.uol.com.br",
			},
			{
				protocol: "https",
				hostname: "encrypted-tbn0.gstatic.com",
			},
			{
				protocol: "https",
				hostname: "contraosacademicos.com.br",
			},
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
			},
			{
				protocol: "https",
				hostname: "i.ytimg.com",
			},
			{
				protocol: "https",
				hostname: "www.devotudoaocinema.com.br",
			},
			{
				protocol: "https",
				hostname: "www.planocritico.com",
			},
			{
				protocol: "https",
				hostname: "razaoinadequada.com",
			},
			{
				protocol: "https",
				hostname: "via.placeholder.com",
			},
			{
				protocol: "https",
				hostname: "static.vecteezy.com",
			},
			{
				protocol: "https",
				hostname: "contra-os-academicos-bucket.s3.us-east-2.amazonaws.com",
			},
		],
	},

	eslint: {
		ignoreDuringBuilds: true,
	},

	compress: true,

	async headers() {
		const securityHeaders = [
			{
				key: "X-DNS-Prefetch-Control",
				value: "on",
			},
			{
				key: "Strict-Transport-Security",
				value: "max-age=63072000; includeSubDomains; preload",
			},
			{
				key: "X-XSS-Protection",
				value: "1; mode=block",
			},
			{
				key: "X-Frame-Options",
				value: "SAMEORIGIN",
			},
			{
				key: "Permissions-Policy",
				value: "camera=(), microphone=(), geolocation=()",
			},
			{
				key: "X-Content-Type-Options",
				value: "nosniff",
			},
			{
				key: "Referrer-Policy",
				value: "origin-when-cross-origin",
			},
		];
		return [
			{
				source: "/:path*",
				headers: securityHeaders,
			},
			// ENABLE CORS
			{
				source: "/api/:path",
				headers: [
					{ key: "Access-Control-Allow-Credentials", value: "true" },
					{ key: "Access-Control-Allow-Origin", value: "*" },
					{
						key: "Access-Control-Allow-Methods",
						value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
					},
					{
						key: "Access-Control-Allow-Headers",
						value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
