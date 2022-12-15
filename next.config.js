/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['q1.qlogo.cn']
  }
}

module.exports = nextConfig
