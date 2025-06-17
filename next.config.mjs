/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
/** @type {import('next').NextConfig} */
module.exports = {
  // ... otras configuraciones
  
  // Forzar recarga de variables en cada build
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
}