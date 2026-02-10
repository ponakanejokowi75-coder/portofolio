import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Golden Ratio constant for configuration
const PHI = 1.618033988749

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable Fast Refresh for optimal development experience
      fastRefresh: true,
      // Babel configuration for optimal React performance
      babel: {
        plugins: [react()],
        babelrc: false,
        configFile: false,
      },
    }),
  ],
  
  // Server configuration
  server: {
    port: 3000,
    host: true,
    open: true,
    strictPort: false,
    // CORS configuration
    cors: true,
    // HMR configuration
    hmr: {
      overlay: true,
    },
  },
  
  // Build configuration optimized for production
  build: {
    // Output directory
    outDir: 'dist',
    // Assets directory
    assetsDir: 'assets',
    // Generate sourcemaps for debugging
    sourcemap: false,
    // Minify with esbuild for speed
    minify: 'esbuild',
    // Target modern browsers
    target: 'es2015',
    // Optimize chunks
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'icons': ['lucide-react'],
        },
        // Asset file naming with hash for cache busting
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`
          } else if (/woff|woff2|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Chunk size warning limit (in kB) - using golden ratio
    chunkSizeWarningLimit: Math.floor(1000 * PHI), // ~1618 kB
    // CSS code splitting
    cssCodeSplit: true,
    // Report compressed size
    reportCompressedSize: true,
  },
  
  // Preview server configuration
  preview: {
    port: 4173,
    host: true,
    open: true,
    strictPort: false,
  },
  
  // CSS configuration
  css: {
    // CSS modules configuration
    modules: {
      localsConvention: 'camelCase',
    },
    // PostCSS configuration
    postcss: {},
    // Preprocessor options
    preprocessorOptions: {},
    devSourcemap: true,
  },
  
  // Optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
    exclude: [],
  },
  
  // Resolve configuration
  resolve: {
    alias: {
      // You can add path aliases here if needed
      // '@': '/src',
      // '@components': '/src/components',
    },
  },
  
  // Base public path
  base: '/portofolio/',
  
  // Public directory
  publicDir: 'public',
  
  // Define global constants
  define: {
    __GOLDEN_RATIO__: PHI,
    __APP_VERSION__: JSON.stringify('1.618.0'),
  },
})
