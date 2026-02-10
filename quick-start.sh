#!/bin/bash

# Portfolio Premium - Golden Ratio Quick Start Script
# φ = 1.618033988749

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🌟 PORTFOLIO PREMIUM - GOLDEN RATIO 🌟"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "φ = 1.618033988749"
echo ""
echo "Starting installation..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "⚠️  Node.js version is too old (v$NODE_VERSION)"
    echo "Please upgrade to Node.js 16 or higher"
    exit 1
fi

echo "✓ Node.js detected: $(node -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Installation failed!"
    exit 1
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ✨ INSTALLATION COMPLETE! ✨"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "To start the development server:"
echo "  npm run dev"
echo ""
echo "To build for production:"
echo "  npm run build"
echo ""
echo "Made with Mathematical Precision 📐"
echo "Where Art Meets Mathematics ✨"
echo ""
