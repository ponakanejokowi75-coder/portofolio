@echo off
REM Portfolio Premium - Golden Ratio Quick Start Script (Windows)
REM φ = 1.618033988749

echo ================================================
echo   🌟 PORTFOLIO PREMIUM - GOLDEN RATIO 🌟
echo ================================================
echo.
echo φ = 1.618033988749
echo.
echo Starting installation...
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ Node.js detected
node -v
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ Installation failed!
    pause
    exit /b 1
)

echo.
echo ================================================
echo   ✨ INSTALLATION COMPLETE! ✨
echo ================================================
echo.
echo To start the development server:
echo   npm run dev
echo.
echo To build for production:
echo   npm run build
echo.
echo Made with Mathematical Precision 📐
echo Where Art Meets Mathematics ✨
echo.
pause
