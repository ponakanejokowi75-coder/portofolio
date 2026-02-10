# 🚀 PANDUAN SETUP LENGKAP

## 📋 Struktur File yang Diperlukan

Pastikan Anda memiliki struktur folder seperti ini:

```
portfolio-premium-golden-ratio/
├── src/
│   ├── App.jsx              ← File utama portfolio (portfolio-premium.jsx)
│   └── main.jsx             ← React entry point
├── index.html               ← HTML template
├── package.json             ← Dependencies
├── vite.config.js          ← Vite configuration
├── .gitignore              ← Git ignore rules
├── README.md               ← Documentation
├── quick-start.sh          ← Linux/Mac installer
└── quick-start.bat         ← Windows installer
```

## 🔧 LANGKAH INSTALASI

### Opsi 1: Quick Start (Recommended) ⚡

#### Untuk Linux/Mac:
```bash
chmod +x quick-start.sh
./quick-start.sh
```

#### Untuk Windows:
```cmd
quick-start.bat
```

### Opsi 2: Manual Setup 🔨

#### Step 1: Buat folder project
```bash
mkdir portfolio-premium-golden-ratio
cd portfolio-premium-golden-ratio
```

#### Step 2: Buat folder src
```bash
mkdir src
```

#### Step 3: Letakkan file-file ke lokasi yang benar
- `portfolio-premium.jsx` → rename menjadi `App.jsx` dan pindahkan ke folder `src/`
- `main.jsx` → pindahkan ke folder `src/`
- File lainnya (package.json, index.html, vite.config.js, dll) → tetap di root folder

#### Step 4: Install dependencies
```bash
npm install
```

#### Step 5: Jalankan development server
```bash
npm run dev
```

#### Step 6: Buka browser
```
http://localhost:3000
```

## ✅ Checklist Setup

- [ ] Node.js 16+ terinstall
- [ ] Folder `src/` sudah dibuat
- [ ] File `src/App.jsx` ada (dari portfolio-premium.jsx)
- [ ] File `src/main.jsx` ada
- [ ] File `package.json` ada di root
- [ ] File `index.html` ada di root
- [ ] File `vite.config.js` ada di root
- [ ] Dependencies sudah terinstall (`node_modules/` folder exists)
- [ ] Server development berjalan di `http://localhost:3000`

## 🎯 Perintah NPM

```bash
# Development (dengan hot reload)
npm run dev

# Build production
npm run build

# Preview build production
npm run preview
```

## 🐛 Troubleshooting

### Problem: `npm install` gagal
**Solusi:**
```bash
# Hapus folder node_modules jika ada
rm -rf node_modules

# Hapus package-lock.json jika ada
rm package-lock.json

# Install ulang
npm install
```

### Problem: "Cannot find module './App.jsx'"
**Solusi:**
Pastikan file `portfolio-premium.jsx` sudah direname menjadi `App.jsx` dan ada di folder `src/`:
```bash
mv portfolio-premium.jsx src/App.jsx
```

### Problem: Port 3000 sudah digunakan
**Solusi:**
Edit `vite.config.js`, ubah port:
```javascript
server: {
  port: 3001, // Ganti dengan port lain
  // ...
}
```

### Problem: Fonts tidak muncul
**Solusi:**
Pastikan koneksi internet aktif (Google Fonts di-load dari CDN)

## 📦 Build untuk Production

```bash
# Build
npm run build

# Hasil build ada di folder dist/
# Upload folder dist/ ke hosting (Netlify, Vercel, dll)
```

## 🌐 Deploy ke Hosting

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop folder dist/ ke Netlify
```

### GitHub Pages
```bash
npm run build
# Upload folder dist/ ke branch gh-pages
```

## 💡 Tips

1. **Hot Reload**: Setiap perubahan di `src/App.jsx` akan langsung terlihat tanpa refresh
2. **Golden Ratio**: Lihat `README.md` untuk info tentang implementasi φ
3. **Kustomisasi**: Edit portfolio items di array `portfolioItems` di `src/App.jsx`
4. **Performance**: Build production sudah dioptimasi untuk performa maksimal

## 📞 Support

Jika masih ada masalah:
1. Cek Node.js version: `node -v` (harus 16+)
2. Cek npm version: `npm -v`
3. Pastikan semua file di lokasi yang benar
4. Coba hapus `node_modules` dan install ulang

---

**Made with ❤️ and φ = 1.618**

*Where Art Meets Mathematics*
