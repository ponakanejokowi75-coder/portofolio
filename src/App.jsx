import React, { useState, useEffect } from 'react';
import { X, ExternalLink, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

// Golden Ratio constant
const PHI = 1.618033988749;

// Portfolio data - dozens of diverse projects
const portfolioItems = [
  {
    id: 1,
    title: "Luxora Fashion",
    category: "E-Commerce Fashion",
    industry: "Fashion & Retail",
    color: "#1a1a1a",
    accent: "#D4AF37",
    description: "Platform e-commerce fashion luxury dengan AI styling assistant",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%231a1a1a'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23D4AF37' font-size='48' font-family='serif'%3ELUXORA%3C/text%3E%3C/svg%3E"
  },
  {
    id: 2,
    title: "MediCare Pro",
    category: "Healthcare Platform",
    industry: "Healthcare",
    color: "#0A4D68",
    accent: "#05BFDB",
    description: "Sistem manajemen rumah sakit dengan telemedicine terintegrasi",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%230A4D68'/%3E%3Ccircle cx='200' cy='150' r='60' fill='none' stroke='%2305BFDB' stroke-width='4'/%3E%3Cpath d='M200,110 L200,190 M160,150 L240,150' stroke='%2305BFDB' stroke-width='8' stroke-linecap='round'/%3E%3C/svg%3E"
  },
  {
    id: 3,
    title: "CryptoVault",
    category: "Cryptocurrency Exchange",
    industry: "Fintech",
    color: "#1E1E2E",
    accent: "#00FFA3",
    description: "Platform trading cryptocurrency dengan keamanan tingkat enterprise",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%231E1E2E'/%3E%3Cstop offset='100%25' style='stop-color:%23000'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g1)'/%3E%3Cpath d='M200,80 L260,150 L200,220 L140,150 Z' fill='none' stroke='%2300FFA3' stroke-width='3'/%3E%3C/svg%3E"
  },
  {
    id: 4,
    title: "EduMaster",
    category: "E-Learning Platform",
    industry: "Education",
    color: "#2C3E50",
    accent: "#E74C3C",
    description: "Platform pembelajaran online dengan gamifikasi dan AI tutor",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%232C3E50'/%3E%3Cpath d='M150,120 L200,90 L250,120 L250,180 L200,210 L150,180 Z' fill='%23E74C3C'/%3E%3C/svg%3E"
  },
  {
    id: 5,
    title: "GreenEarth",
    category: "Sustainability Platform",
    industry: "Environment",
    color: "#1B4332",
    accent: "#95D5B2",
    description: "Platform tracking carbon footprint dengan marketplace produk ramah lingkungan",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%231B4332'/%3E%3Ccircle cx='200' cy='150' r='70' fill='%2395D5B2' opacity='0.3'/%3E%3Cpath d='M200,100 Q180,120 200,150 Q220,120 200,100' fill='%2395D5B2'/%3E%3C/svg%3E"
  },
  {
    id: 6,
    title: "FoodieDash",
    category: "Food Delivery",
    industry: "Food & Beverage",
    color: "#FF6B35",
    accent: "#F7931E",
    description: "Aplikasi food delivery dengan AI recommendation dan live tracking",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23FF6B35'/%3E%3Cpath d='M200,100 L220,160 L180,160 Z' fill='%23F7931E'/%3E%3Crect x='180' y='160' width='40' height='50' fill='%23F7931E'/%3E%3C/svg%3E"
  },
  {
    id: 7,
    title: "PropTech Elite",
    category: "Real Estate Platform",
    industry: "Real Estate",
    color: "#2C2C2C",
    accent: "#C9A961",
    description: "Platform properti luxury dengan virtual tour 3D dan blockchain",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%232C2C2C'/%3E%3Cpath d='M120,180 L200,100 L280,180 L280,220 L120,220 Z' fill='none' stroke='%23C9A961' stroke-width='4'/%3E%3C/svg%3E"
  },
  {
    id: 8,
    title: "FitLife Pro",
    category: "Fitness & Wellness",
    industry: "Health & Fitness",
    color: "#0F0F0F",
    accent: "#FF4655",
    description: "Aplikasi fitness dengan personal AI trainer dan nutrition tracker",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%230F0F0F'/%3E%3Ccircle cx='170' cy='150' r='30' fill='none' stroke='%23FF4655' stroke-width='6'/%3E%3Ccircle cx='230' cy='150' r='30' fill='none' stroke='%23FF4655' stroke-width='6'/%3E%3Cline x1='200' y1='150' x2='200' y2='150' stroke='%23FF4655' stroke-width='6'/%3E%3C/svg%3E"
  },
  {
    id: 9,
    title: "TravelLux",
    category: "Luxury Travel",
    industry: "Travel & Tourism",
    color: "#004E89",
    accent: "#FFD60A",
    description: "Platform travel premium dengan concierge service dan exclusive deals",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23004E89'/%3E%3Cpath d='M200,80 L250,150 L200,220 L150,150 Z M200,110 L220,150 L200,190 L180,150 Z' fill='%23FFD60A'/%3E%3C/svg%3E"
  },
  {
    id: 10,
    title: "AutoPilot",
    category: "Automotive Platform",
    industry: "Automotive",
    color: "#1C1C1C",
    accent: "#00D9FF",
    description: "Platform jual beli mobil dengan AR preview dan financing calculator",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%231C1C1C'/%3E%3Cellipse cx='150' cy='180' rx='35' ry='35' fill='none' stroke='%2300D9FF' stroke-width='4'/%3E%3Cellipse cx='250' cy='180' rx='35' ry='35' fill='none' stroke='%2300D9FF' stroke-width='4'/%3E%3Cpath d='M120,180 L120,140 L200,120 L280,140 L280,180' fill='none' stroke='%2300D9FF' stroke-width='4'/%3E%3C/svg%3E"
  },
  {
    id: 11,
    title: "LegalTech Pro",
    category: "Legal Services",
    industry: "Legal",
    color: "#1A1A2E",
    accent: "#B8860B",
    description: "Platform manajemen legal dengan AI contract review dan e-signature",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%231A1A2E'/%3E%3Cpath d='M200,80 L200,220 M170,100 L230,100 M180,200 L220,200' stroke='%23B8860B' stroke-width='5'/%3E%3C/svg%3E"
  },
  {
    id: 12,
    title: "EventHub",
    category: "Event Management",
    industry: "Events",
    color: "#6A0572",
    accent: "#F56EB3",
    description: "Platform event management dengan ticketing dan live streaming",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%236A0572'/%3E%3Ccircle cx='200' cy='120' r='25' fill='%23F56EB3'/%3E%3Crect x='175' y='145' width='50' height='70' rx='5' fill='%23F56EB3'/%3E%3C/svg%3E"
  },
  {
    id: 13,
    title: "SmartHome Hub",
    category: "IoT Platform",
    industry: "Smart Home",
    color: "#0D1117",
    accent: "#58A6FF",
    description: "Platform smart home dengan AI automation dan energy monitoring",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%230D1117'/%3E%3Cpath d='M200,90 L260,140 L260,210 L140,210 L140,140 Z' fill='none' stroke='%2358A6FF' stroke-width='3'/%3E%3Crect x='180' y='160' width='40' height='50' fill='%2358A6FF'/%3E%3C/svg%3E"
  },
  {
    id: 14,
    title: "ArtGallery NFT",
    category: "NFT Marketplace",
    industry: "Art & NFT",
    color: "#000000",
    accent: "#9D4EDD",
    description: "Marketplace NFT untuk seniman dengan royalty tracking otomatis",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23000'/%3E%3Crect x='100' y='80' width='200' height='140' fill='none' stroke='%239D4EDD' stroke-width='3'/%3E%3Cpath d='M130,110 L170,190 L210,130 L250,190' stroke='%239D4EDD' stroke-width='2' fill='none'/%3E%3C/svg%3E"
  },
  {
    id: 15,
    title: "BankFlow",
    category: "Banking Platform",
    industry: "Banking",
    color: "#003049",
    accent: "#F77F00",
    description: "Digital banking dengan instant transfer dan investment automation",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23003049'/%3E%3Cpath d='M140,100 L200,100 L200,80 L260,130 L200,180 L200,160 L140,160 Z' fill='%23F77F00'/%3E%3C/svg%3E"
  },
  {
    id: 16,
    title: "StreamFlix",
    category: "Video Streaming",
    industry: "Entertainment",
    color: "#141414",
    accent: "#E50914",
    description: "Platform streaming video dengan AI recommendation dan offline mode",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23141414'/%3E%3Cpath d='M150,120 L150,180 L240,150 Z' fill='%23E50914'/%3E%3C/svg%3E"
  },
  {
    id: 17,
    title: "JobConnect",
    category: "Job Platform",
    industry: "HR & Recruitment",
    color: "#2D3142",
    accent: "#EF8354",
    description: "Platform rekrutmen dengan AI matching dan video interview",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%232D3142'/%3E%3Ccircle cx='200' cy='130' r='30' fill='%23EF8354'/%3E%3Cpath d='M160,170 Q200,190 240,170 L240,210 L160,210 Z' fill='%23EF8354'/%3E%3C/svg%3E"
  },
  {
    id: 18,
    title: "InsureTech",
    category: "Insurance Platform",
    industry: "Insurance",
    color: "#1B263B",
    accent: "#00B4D8',
    description: "Platform asuransi digital dengan claim processing otomatis",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%231B263B'/%3E%3Cpath d='M200,80 Q160,150 200,220 Q240,150 200,80' fill='none' stroke='%2300B4D8' stroke-width='4'/%3E%3C/svg%3E"
  },
  {
    id: 19,
    title: "FashionAR",
    category: "Virtual Try-On",
    industry: "Fashion Tech",
    color: "#FF006E",
    accent: "#FFBE0B",
    description: "Platform virtual try-on dengan AR dan size recommendation AI",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23FF006E'/%3E%3Ccircle cx='200' cy='130' r='25' fill='%23FFBE0B'/%3E%3Cpath d='M200,155 L200,200 M180,170 L220,170 M180,210 L200,220 M220,210 L200,220' stroke='%23FFBE0B' stroke-width='4' stroke-linecap='round'/%3E%3C/svg%3E"
  },
  {
    id: 20,
    title: "GameVerse",
    category: "Gaming Platform",
    industry: "Gaming",
    color: "#0A0E27",
    accent: "#00FFF0",
    description: "Platform gaming dengan tournament system dan streaming integration",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%230A0E27'/%3E%3Crect x='140' y='120' width='120' height='80' rx='10' fill='none' stroke='%2300FFF0' stroke-width='3'/%3E%3Ccircle cx='170' cy='150' r='8' fill='%2300FFF0'/%3E%3Ccircle cx='230' cy='150' r='8' fill='%2300FFF0'/%3E%3C/svg%3E"
  },
  {
    id: 21,
    title: "AgriTech Solutions",
    category: "Agriculture Platform",
    industry: "Agriculture",
    color: "#2D6A4F",
    accent: "#B7E4C7",
    description: "Platform agritech dengan IoT monitoring dan yield prediction",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%232D6A4F'/%3E%3Cpath d='M200,100 Q180,130 200,160 Q220,130 200,100 M200,160 L200,210' stroke='%23B7E4C7' stroke-width='4' fill='none'/%3E%3C/svg%3E"
  },
  {
    id: 22,
    title: "PetCare Plus",
    category: "Pet Services",
    industry: "Pet Care",
    color: "#8338EC",
    accent: "#FFBE0B",
    description: "Platform perawatan hewan dengan vet consultation dan grooming booking",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%238338EC'/%3E%3Ccircle cx='180' cy='120' r='15' fill='%23FFBE0B'/%3E%3Ccircle cx='220' cy='120' r='15' fill='%23FFBE0B'/%3E%3Cellipse cx='200' cy='160' rx='40' ry='50' fill='%23FFBE0B'/%3E%3C/svg%3E"
  },
  {
    id: 23,
    title: "LogisticsX",
    category: "Logistics Platform",
    industry: "Logistics",
    color: "#023047",
    accent: "#FB8500",
    description: "Platform logistik dengan real-time tracking dan route optimization",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23023047'/%3E%3Cpath d='M120,150 L200,150 L200,120 L260,150 L200,180 L200,150' fill='none' stroke='%23FB8500' stroke-width='4' stroke-linejoin='round'/%3E%3C/svg%3E"
  },
  {
    id: 24,
    title: "CloudSafe",
    category: "Cloud Storage",
    industry: "Cloud Services",
    color: "#14213D",
    accent: "#FCA311",
    description: "Platform cloud storage enterprise dengan encryption dan collaboration tools",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%2314213D'/%3E%3Cpath d='M170,140 Q170,120 190,120 Q210,120 210,100 Q210,80 230,80 Q250,80 250,100 L250,140 Q250,160 230,160 L170,160 Q150,160 150,140 Z' fill='%23FCA311'/%3E%3C/svg%3E"
  },
  {
    id: 25,
    title: "MusicStream Pro",
    category: "Music Streaming",
    industry: "Music",
    color: "#1DB954",
    accent: "#191414",
    description: "Platform musik streaming dengan AI playlist dan podcast integration",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%231DB954'/%3E%3Ccircle cx='200' cy='150' r='60' fill='%23191414'/%3E%3Cpath d='M170,130 Q200,140 230,130 M170,150 Q200,160 230,150 M170,170 Q200,180 230,170' stroke='%231DB954' stroke-width='3' fill='none'/%3E%3C/svg%3E"
  },
  {
    id: 26,
    title: "SocialConnect",
    category: "Social Network",
    industry: "Social Media",
    color: "#4267B2",
    accent: "#FFFFFF",
    description: "Platform social media dengan privacy-first approach dan decentralization",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%234267B2'/%3E%3Ccircle cx='150' cy='120' r='20' fill='%23FFF'/%3E%3Ccircle cx='250' cy='120' r='20' fill='%23FFF'/%3E%3Ccircle cx='200' cy='180' r='20' fill='%23FFF'/%3E%3Cline x1='165' y1='130' x2='190' y2='170' stroke='%23FFF' stroke-width='3'/%3E%3Cline x1='235' y1='130' x2='210' y2='170' stroke='%23FFF' stroke-width='3'/%3E%3C/svg%3E"
  },
  {
    id: 27,
    title: "RestaurantOS",
    category: "Restaurant Management",
    industry: "Hospitality",
    color: "#C73E1D",
    accent: "#F4A460",
    description: "Platform manajemen restoran dengan POS, inventory, dan reservation system",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23C73E1D'/%3E%3Ccircle cx='200' cy='140' r='50' fill='none' stroke='%23F4A460' stroke-width='4'/%3E%3Cpath d='M180,120 L190,160 M200,115 L200,165 M220,120 L210,160' stroke='%23F4A460' stroke-width='3'/%3E%3C/svg%3E"
  },
  {
    id: 28,
    title: "ConstructPro",
    category: "Construction Management",
    industry: "Construction",
    color: "#FF6F00",
    accent: "#FFD600",
    description: "Platform manajemen konstruksi dengan project tracking dan BIM integration",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23FF6F00'/%3E%3Cpath d='M120,180 L200,100 L280,180 M140,180 L140,210 L260,210 L260,180' fill='none' stroke='%23FFD600' stroke-width='4'/%3E%3C/svg%3E"
  },
  {
    id: 29,
    title: "BeautyBook",
    category: "Beauty Services",
    industry: "Beauty & Wellness",
    color: "#FF69B4",
    accent: "#FFD700",
    description: "Platform booking salon dan spa dengan beauty tips dan product marketplace",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23FF69B4'/%3E%3Cpath d='M200,100 Q180,120 200,140 Q220,120 200,100 M200,140 Q180,160 200,180 Q220,160 200,140' fill='%23FFD700'/%3E%3C/svg%3E"
  },
  {
    id: 30,
    title: "DataViz Analytics",
    category: "Data Analytics",
    industry: "Analytics",
    color: "#0F172A",
    accent: "#38BDF8",
    description: "Platform business intelligence dengan real-time dashboard dan AI insights",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%230F172A'/%3E%3Crect x='130' y='160' width='25' height='50' fill='%2338BDF8'/%3E%3Crect x='170' y='130' width='25' height='80' fill='%2338BDF8'/%3E%3Crect x='210' y='140' width='25' height='70' fill='%2338BDF8'/%3E%3Crect x='250' y='110' width='25' height='100' fill='%2338BDF8'/%3E%3C/svg%3E"
  }
];

const PortfolioWebsite = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['All', ...new Set(portfolioItems.map(item => item.industry))];

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.industry === filter);

  // Generate example website based on project
  const ExampleWebsite = ({ project }) => {
    return (
      <div style={{ 
        width: '100%', 
        height: '100%', 
        background: `linear-gradient(135deg, ${project.color} 0%, ${project.accent}22 100%)`,
        overflow: 'auto',
        fontFamily: "'Playfair Display', serif"
      }}>
        {/* Hero Section */}
        <div style={{
          padding: `${80/PHI}px ${100/PHI}px`,
          background: project.color,
          borderBottom: `${PHI}px solid ${project.accent}`,
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: `${64/PHI}px`,
            fontWeight: '700',
            color: project.accent,
            marginBottom: `${30/PHI}px`,
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            {project.title}
          </div>
          <div style={{
            fontSize: `${24/PHI}px`,
            color: '#FFF',
            opacity: 0.9,
            maxWidth: `${600 * PHI}px`,
            margin: '0 auto',
            lineHeight: PHI
          }}>
            {project.description}
          </div>
          <button style={{
            marginTop: `${40/PHI}px`,
            padding: `${16/PHI}px ${48/PHI}px`,
            background: project.accent,
            color: project.color,
            border: 'none',
            borderRadius: `${PHI * 4}px`,
            fontSize: `${18/PHI}px`,
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            fontFamily: "'Inter', sans-serif"
          }}>
            Get Started
          </button>
        </div>

        {/* Features Grid */}
        <div style={{
          padding: `${100/PHI}px ${60/PHI}px`,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: `${30/PHI}px`,
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {[1, 2, 3, 4, 5, 6].map((feature) => (
            <div key={feature} style={{
              background: '#FFF',
              padding: `${40/PHI}px`,
              borderRadius: `${PHI * 8}px`,
              boxShadow: `0 ${PHI * 4}px ${PHI * 16}px rgba(0,0,0,0.1)`,
              border: `2px solid ${project.accent}33`,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = `translateY(-${PHI * 4}px)`;
              e.currentTarget.style.boxShadow = `0 ${PHI * 8}px ${PHI * 24}px rgba(0,0,0,0.15)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = `0 ${PHI * 4}px ${PHI * 16}px rgba(0,0,0,0.1)`;
            }}>
              <div style={{
                width: `${60/PHI}px`,
                height: `${60/PHI}px`,
                background: project.accent,
                borderRadius: '50%',
                marginBottom: `${20/PHI}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: `${28/PHI}px`
              }}>
                ✦
              </div>
              <h3 style={{
                fontSize: `${22/PHI}px`,
                fontWeight: '600',
                color: project.color,
                marginBottom: `${12/PHI}px`
              }}>
                Feature {feature}
              </h3>
              <p style={{
                fontSize: `${16/PHI}px`,
                color: '#666',
                lineHeight: PHI
              }}>
                Advanced capabilities that set this platform apart from competitors with cutting-edge technology.
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div style={{
          background: project.color,
          padding: `${80/PHI}px ${40/PHI}px`,
          marginTop: `${60/PHI}px`
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: `${40/PHI}px`,
            textAlign: 'center'
          }}>
            {[
              { value: '10M+', label: 'Active Users' },
              { value: '99.9%', label: 'Uptime' },
              { value: '24/7', label: 'Support' },
              { value: '150+', label: 'Countries' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div style={{
                  fontSize: `${48/PHI}px`,
                  fontWeight: '700',
                  color: project.accent,
                  marginBottom: `${12/PHI}px`
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: `${18/PHI}px`,
                  color: '#FFF',
                  opacity: 0.8
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          padding: `${100/PHI}px ${40/PHI}px`,
          textAlign: 'center',
          background: `linear-gradient(135deg, ${project.accent}11 0%, transparent 100%)`
        }}>
          <h2 style={{
            fontSize: `${42/PHI}px`,
            fontWeight: '700',
            color: project.color,
            marginBottom: `${24/PHI}px`
          }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{
            fontSize: `${20/PHI}px`,
            color: '#666',
            marginBottom: `${40/PHI}px`,
            maxWidth: `${600 * PHI}px`,
            margin: '0 auto',
            marginBottom: `${40/PHI}px`
          }}>
            Join thousands of satisfied customers who have already made the switch
          </p>
          <button style={{
            padding: `${20/PHI}px ${60/PHI}px`,
            background: project.color,
            color: '#FFF',
            border: `3px solid ${project.accent}`,
            borderRadius: `${PHI * 4}px`,
            fontSize: `${20/PHI}px`,
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontFamily: "'Inter', sans-serif"
          }}>
            Start Free Trial
          </button>
        </div>
      </div>
    );
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 100%)',
      fontFamily: "'Playfair Display', serif",
      color: '#FFF'
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.03,
        pointerEvents: 'none',
        background: `radial-gradient(circle at ${50 + scrollY * 0.01}% ${50 + scrollY * 0.02}%, #D4AF37 0%, transparent 50%)`
      }} />

      {/* Header */}
      <header style={{
        padding: `${40/PHI}px ${60/PHI}px`,
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(15, 15, 15, 0.9)'
      }}>
        <div style={{
          maxWidth: `${1600 * PHI}px`,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: `${36/PHI}px`,
            fontWeight: '700',
            background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5B0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            gap: `${12/PHI}px`
          }}>
            <Sparkles size={PHI * 16} color="#D4AF37" />
            Portfolio Premium
          </div>
          <nav style={{
            display: 'flex',
            gap: `${40/PHI}px`,
            fontFamily: "'Inter', sans-serif"
          }}>
            <a href="#" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: `${16/PHI}px` }}>Home</a>
            <a href="#" style={{ color: '#FFF', textDecoration: 'none', fontSize: `${16/PHI}px`, opacity: 0.8 }}>About</a>
            <a href="#" style={{ color: '#FFF', textDecoration: 'none', fontSize: `${16/PHI}px`, opacity: 0.8 }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        padding: `${120/PHI}px ${60/PHI}px ${80/PHI}px`,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: `${800 * PHI}px`,
          height: `${800 * PHI}px`,
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
          animation: 'pulse 4s ease-in-out infinite'
        }} />
        
        <h1 style={{
          fontSize: `${72/PHI}px`,
          fontWeight: '700',
          marginBottom: `${30/PHI}px`,
          lineHeight: 1.2,
          position: 'relative',
          zIndex: 1
        }}>
          Masterpiece of Digital Excellence
        </h1>
        <p style={{
          fontSize: `${24/PHI}px`,
          opacity: 0.9,
          maxWidth: `${800 * PHI}px`,
          margin: '0 auto',
          lineHeight: PHI,
          fontFamily: "'Inter', sans-serif",
          position: 'relative',
          zIndex: 1
        }}>
          Lebih dari 30 proyek premium senilai jutaan dollar, dirancang dengan presisi matematika Golden Ratio dan keahlian 1000 tahun pengalaman
        </p>
        
        {/* Golden Ratio Visualization */}
        <div style={{
          margin: `${60/PHI}px auto`,
          display: 'inline-block',
          position: 'relative',
          zIndex: 1
        }}>
          <svg width={PHI * 100} height={PHI * 62} viewBox="0 0 162 100">
            <rect x="0" y="0" width="100" height="100" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.5"/>
            <rect x="100" y="0" width={PHI * 38.2} height={PHI * 38.2} fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.7"/>
            <text x="81" y="55" fill="#D4AF37" fontSize="14" textAnchor="middle" fontFamily="monospace">φ = 1.618</text>
          </svg>
        </div>
      </section>

      {/* Filter Section */}
      <section style={{
        padding: `${40/PHI}px ${60/PHI}px`,
        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
        background: 'rgba(0, 0, 0, 0.3)'
      }}>
        <div style={{
          maxWidth: `${1600 * PHI}px`,
          margin: '0 auto',
          display: 'flex',
          gap: `${16/PHI}px`,
          flexWrap: 'wrap',
          justifyContent: 'center',
          fontFamily: "'Inter', sans-serif"
        }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              style={{
                padding: `${12/PHI}px ${24/PHI}px`,
                background: filter === category ? '#D4AF37' : 'transparent',
                color: filter === category ? '#000' : '#FFF',
                border: '2px solid #D4AF37',
                borderRadius: `${PHI * 20}px`,
                cursor: 'pointer',
                fontSize: `${14/PHI}px`,
                fontWeight: '600',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                if (filter !== category) {
                  e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (filter !== category) {
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section style={{
        padding: `${80/PHI}px ${40/PHI}px`,
        maxWidth: `${1600 * PHI}px`,
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: `${30/PHI}px`
        }}>
          {filteredItems.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                borderRadius: `${PHI * 12}px`,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                animation: `slideIn 0.6s ease-out ${index * 0.05}s both`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `translateY(-${PHI * 8}px) scale(1.02)`;
                e.currentTarget.style.boxShadow = `0 ${PHI * 16}px ${PHI * 32}px rgba(212, 175, 55, 0.2)`;
                e.currentTarget.style.borderColor = '#D4AF37';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
              }}
            >
              <div style={{
                height: `${200 * PHI}px`,
                backgroundImage: `url("${project.image}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: `${12/PHI}px`,
                  right: `${12/PHI}px`,
                  background: project.accent,
                  color: project.color,
                  padding: `${6/PHI}px ${12/PHI}px`,
                  borderRadius: `${PHI * 4}px`,
                  fontSize: `${11/PHI}px`,
                  fontWeight: '700',
                  fontFamily: "'Inter', sans-serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Premium
                </div>
              </div>
              <div style={{
                padding: `${24/PHI}px`
              }}>
                <h3 style={{
                  fontSize: `${24/PHI}px`,
                  fontWeight: '700',
                  marginBottom: `${8/PHI}px`,
                  color: '#D4AF37'
                }}>
                  {project.title}
                </h3>
                <p style={{
                  fontSize: `${13/PHI}px`,
                  color: project.accent,
                  marginBottom: `${12/PHI}px`,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {project.category}
                </p>
                <p style={{
                  fontSize: `${15/PHI}px`,
                  opacity: 0.8,
                  lineHeight: PHI,
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {project.description}
                </p>
                <div style={{
                  marginTop: `${20/PHI}px`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: `${8/PHI}px`,
                  color: '#D4AF37',
                  fontSize: `${14/PHI}px`,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: '600'
                }}>
                  View Project <ExternalLink size={PHI * 10} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Full Website View */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: `${40/PHI}px`,
            animation: 'fadeIn 0.3s ease-out'
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '1400px',
              height: '90vh',
              background: '#FFF',
              borderRadius: `${PHI * 12}px`,
              overflow: 'hidden',
              position: 'relative',
              boxShadow: `0 ${PHI * 20}px ${PHI * 60}px rgba(0, 0, 0, 0.5)`,
              animation: 'scaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              background: selectedProject.color,
              padding: `${20/PHI}px ${30/PHI}px`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: `3px solid ${selectedProject.accent}`
            }}>
              <div>
                <h2 style={{
                  fontSize: `${28/PHI}px`,
                  fontWeight: '700',
                  color: selectedProject.accent,
                  margin: 0
                }}>
                  {selectedProject.title}
                </h2>
                <p style={{
                  fontSize: `${14/PHI}px`,
                  color: '#FFF',
                  opacity: 0.8,
                  margin: `${4/PHI}px 0 0`,
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {selectedProject.category}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: `2px solid ${selectedProject.accent}`,
                  borderRadius: '50%',
                  width: `${40/PHI}px`,
                  height: `${40/PHI}px`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = selectedProject.accent;
                  e.currentTarget.style.transform = 'rotate(90deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'rotate(0deg)';
                }}
              >
                <X size={PHI * 14} color="#FFF" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div style={{
              height: 'calc(100% - 80px)',
              overflow: 'auto'
            }}>
              <ExampleWebsite project={selectedProject} />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
        padding: `${60/PHI}px ${40/PHI}px`,
        textAlign: 'center',
        background: 'rgba(0, 0, 0, 0.5)',
        marginTop: `${80/PHI}px`
      }}>
        <p style={{
          fontSize: `${18/PHI}px`,
          opacity: 0.8,
          fontFamily: "'Inter', sans-serif",
          marginBottom: `${20/PHI}px`
        }}>
          Crafted with Mathematical Precision & Golden Ratio Philosophy
        </p>
        <p style={{
          fontSize: `${14/PHI}px`,
          color: '#D4AF37',
          fontFamily: "'Inter', sans-serif"
        }}>
          © 2026 Portfolio Premium - Where Art Meets Mathematics
        </p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@400;600;700&display=swap');
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.1; transform: scale(1.1); }
        }
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        body {
          overflow-x: hidden;
        }
        
        ::-webkit-scrollbar {
          width: ${PHI * 8}px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1A1A1A;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #D4AF37;
          border-radius: ${PHI * 4}px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #F4E5B0;
        }
      `}</style>
    </div>
  );
};

export default PortfolioWebsite;