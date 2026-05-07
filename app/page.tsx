'use client'

import './globals.css'
import { useEffect, useState } from 'react'

type Product = {
  name: string
  price: string
  image: string
  category: string
  badge: string
  description: string
}

type Review = {
  name: string
  title: string
  icon: string
  text: string
}

type FAQ = {
  question: string
  answer: string
}

export default function BeGoluIndiaWebsite() {
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [reviewIndex, setReviewIndex] = useState(0)

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  const phoneNumber = '918329336093'
  const instagramUrl = 'https://instagram.com/begoluindia'

  const products: Product[] = [
    {
      name: 'Handcrafted Crochet Lilly',
      price: '₹399',
      image: '/products/lilly.png',
      category: 'Crochet Flower',
      badge: 'Best Seller',
      description:
        'Aesthetic handmade crochet lily flowers crafted for gifting, decor, and premium handmade collections.',
    },
    {
      name: 'Handcrafted Crochet Sunflower',
      price: '₹279',
      image: '/products/sunflower.png',
      category: 'Crochet Art',
      badge: 'Trending',
      description:
        'Bright crochet sunflowers designed to bring warmth, happiness, and handmade charm into every space.',
    },
    {
      name: 'Crochet Mini Animal',
      price: '₹849',
      image: '/products/mini animal.png',
      category: 'Cute Collectible',
      badge: 'New',
      description:
        'Soft, adorable crochet mini animal made with love for gifting, decor, and cute collectible lovers.',
    },
  ]

  const reviews: Review[] = [
    {
      name: 'Priya S.',
      title: 'Verified Customer',
      icon: '✨',
      text: 'Absolutely loved the crochet flowers. The detailing feels premium, handmade, and perfect for gifting.',
    },
    {
      name: 'Ananya R.',
      title: 'Happy Buyer',
      icon: '🌸',
      text: 'The crochet mini animals are adorable. The product looks even better in real life and feels very special.',
    },
    {
      name: 'Sneha K.',
      title: 'Returning Customer',
      icon: '🎁',
      text: 'Beautiful handmade art with a luxury aesthetic. Perfect for Instagram-worthy gifting and home decor.',
    },
  ]

  const faqs: FAQ[] = [
    {
      question: 'How can I place an order?',
      answer:
        'Click the Order Now button on any product. WhatsApp will open automatically with your selected product name.',
    },
    {
      question: 'Are these products handmade?',
      answer:
        'Yes. Every BeGolu India product is carefully handcrafted with love, patience, and attention to detail.',
    },
    {
      question: 'Do you accept custom orders?',
      answer:
        'Yes. Custom crochet gifts, flowers, and mini animals can be discussed through Instagram DM or WhatsApp.',
    },
    {
      question: 'How long does delivery take?',
      answer:
        'Delivery time depends on product availability and customization. Since every piece is handmade, timelines are shared during order confirmation.',
    },
  ]

  const createWhatsappLink = (productName?: string) => {
    const message = productName
      ? `Hi BeGolu India, I want to order ${productName}`
      : 'Hi BeGolu India, I want to know more about your handmade crochet products'

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1600)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', updateMouse)

    return () => {
      window.removeEventListener('mousemove', updateMouse)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % reviews.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [reviews.length])

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[99999] bg-[#fffaf7] flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute w-80 h-80 bg-[#c46b58] opacity-20 blur-3xl rounded-full"></div>

          <h1 className="relative text-5xl md:text-7xl font-black text-[#7c3a2d] tracking-tight animate-pulse text-center">
            BeGolu India
          </h1>

          <p className="relative mt-4 text-gray-500 tracking-[4px] uppercase text-sm font-bold text-center">
            Handmade • Artistic • Elegant
          </p>

          <div className="relative mt-10 w-56 h-2 bg-[#f1e7e2] rounded-full overflow-hidden">
            <div className="h-full bg-[#7c3a2d] animate-[loading_2s_ease-in-out_infinite] rounded-full w-1/2"></div>
          </div>
        </div>
      )}

      {/* Cursor Glow */}
      <div
        className="fixed top-0 left-0 w-72 h-72 rounded-full pointer-events-none z-[9999] blur-3xl opacity-20 hidden md:block"
        style={{
          background:
            'radial-gradient(circle, rgba(124,58,45,0.6) 0%, rgba(124,58,45,0) 70%)',
          transform: `translate(${mousePosition.x - 140}px, ${
            mousePosition.y - 140
          }px)`,
          transition: 'transform 0.08s linear',
        }}
      />

      <div className="min-h-screen pb-28 bg-[#fffaf7] text-gray-900 font-sans relative overflow-hidden">
        {/* Luxury Background Blurs */}
        <div className="absolute top-20 left-[-120px] w-[320px] h-[320px] bg-[#f5d6cc] rounded-full blur-3xl opacity-40 pointer-events-none"></div>
        <div className="absolute top-[900px] right-[-100px] w-[280px] h-[280px] bg-[#ffd8c7] rounded-full blur-3xl opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-[500px] left-[10%] w-[260px] h-[260px] bg-[#f3d5cb] rounded-full blur-3xl opacity-30 pointer-events-none"></div>

        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-[#fffaf7]/90 backdrop-blur-xl border-b border-[#eadfd9] shadow-md">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
            <a href="#home" className="flex flex-col">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-[#7c3a2d] leading-none">
                BeGolu India
              </h1>

              <p className="hidden md:block text-sm text-gray-500 mt-1">
                Handmade • Artistic • Elegant
              </p>
            </a>

            <nav className="hidden md:flex items-center gap-10 text-[16px] font-semibold text-gray-700">
              <a href="#home" className="hover:text-[#7c3a2d] transition-all">
                Home
              </a>

              <a
                href="#products"
                className="hover:text-[#7c3a2d] transition-all"
              >
                Products
              </a>

              <a href="#about" className="hover:text-[#7c3a2d] transition-all">
                About
              </a>

              <a
                href="#reviews"
                className="hover:text-[#7c3a2d] transition-all"
              >
                Reviews
              </a>

              <a
                href="#contact"
                className="hover:text-[#7c3a2d] transition-all"
              >
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#7c3a2d] text-[#7c3a2d] px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full font-semibold text-[11px] sm:text-sm md:text-base hover:bg-[#7c3a2d] hover:text-white transition-all whitespace-nowrap"
              >
                Instagram
              </a>

              <a
                href="#products"
                className="bg-[#7c3a2d] text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-bold shadow-md hover:bg-[#5e2a20] hover:scale-105 hover:-translate-y-1 transition-all whitespace-nowrap"
              >
                Shop Now
              </a>

              <button
                className="md:hidden text-2xl text-[#7c3a2d] ml-1 flex items-center justify-center"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Open menu"
              >
                ☰
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden bg-[#fffaf7]/95 backdrop-blur-xl border-t border-[#f1e7e2] px-6 py-6 shadow-xl">
              <div className="flex flex-col gap-6 text-lg font-semibold text-[#3a1f19]">
                <a href="#home" onClick={() => setMenuOpen(false)}>
                  Home
                </a>

                <a href="#products" onClick={() => setMenuOpen(false)}>
                  Products
                </a>

                <a href="#about" onClick={() => setMenuOpen(false)}>
                  About
                </a>

                <a href="#reviews" onClick={() => setMenuOpen(false)}>
                  Reviews
                </a>

                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="text-[#7c3a2d] font-black"
                >
                  Instagram
                </a>
              </div>
            </div>
          )}
        </header>

        {/* Hero */}
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-b from-[#fffaf7] via-[#fff6f2] to-[#f8ece6]"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center px-6 pt-14 pb-20 md:py-32 relative z-10">
            <div>
              <p className="uppercase tracking-[5px] md:tracking-[6px] text-xs md:text-sm text-[#a14f3d] font-black mb-6">
                Handmade Crochet Art
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight text-[#3a1f19] mb-8">
                Crafted
                <br />
                With Love,
                <br />
                Worn With Joy.
              </h1>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mb-10">
                Discover handcrafted crochet flowers, mini animals, and artistic
                creations designed with warmth, creativity, and elegance.
              </p>

              <div className="flex flex-wrap gap-4 md:gap-5">
                <a
                  href="#products"
                  className="bg-[#7c3a2d] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-black shadow-xl hover:bg-[#5e2a20] hover:scale-105 hover:-translate-y-1 transition-all inline-flex items-center justify-center"
                >
                  Explore Collection
                </a>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#7c3a2d] text-[#7c3a2d] px-7 md:px-8 py-3 md:py-4 rounded-full font-black hover:bg-[#7c3a2d] hover:text-white hover:scale-105 hover:-translate-y-1 transition-all inline-flex items-center justify-center"
                >
                  Instagram Store
                </a>
              </div>

              <div className="flex flex-wrap gap-5 md:gap-6 mt-12 text-sm font-bold text-gray-600">
                <span>✨ Handmade in India</span>
                <span>🌸 Premium Crochet Art</span>
                <span>🎁 Perfect for Gifts</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-10 w-52 h-52 bg-pink-200 rounded-full blur-3xl opacity-40"></div>
              <div className="absolute bottom-0 right-0 w-52 h-52 bg-orange-200 rounded-full blur-3xl opacity-40"></div>

              <img
                src="/hero.png"
                alt="BeGolu India crochet collection"
                className="relative rounded-[36px] md:rounded-[44px] shadow-2xl object-cover h-[360px] sm:h-[440px] md:h-[700px] w-full hover:scale-[1.02] transition-all duration-700"
              />
            </div>
          </div>
        </section>

        {/* Trust Strip - kept only once */}
        <section className="py-8 bg-white/80 backdrop-blur border-y border-[#eadfd9]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-black text-[#7c3a2d]">100%</h3>
              <p className="text-gray-600 font-semibold text-sm">Handmade</p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-[#7c3a2d]">4.9★</h3>
              <p className="text-gray-600 font-semibold text-sm">
                Customer Love
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-[#7c3a2d]">🇮🇳</h3>
              <p className="text-gray-600 font-semibold text-sm">
                Made in India
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-[#7c3a2d]">DM</h3>
              <p className="text-gray-600 font-semibold text-sm">
                Easy Orders
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🧶',
                title: 'Handcrafted Quality',
                desc: 'Every product is carefully handmade with attention to detail.',
              },
              {
                icon: '🌸',
                title: 'Premium Aesthetic',
                desc: 'Elegant, minimal, and trendy designs crafted for modern gifting.',
              },
              {
                icon: '📸',
                title: 'Instagram Friendly',
                desc: 'Beautiful handmade pieces designed for social-first shopping.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-xl rounded-[32px] p-8 shadow-[0_12px_40px_rgba(124,58,45,0.08)] border border-[#eadfd9] hover:shadow-[0_20px_60px_rgba(124,58,45,0.16)] hover:-translate-y-2 transition-all duration-500"
              >
                <div className="text-4xl mb-5">{item.icon}</div>

                <h3 className="text-2xl font-black mb-4 text-[#7c3a2d]">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d9b7ac] to-transparent"></div>
        </div>

        {/* Products */}
        <section
          id="products"
          className="py-24 md:py-32 bg-[#fffaf7] relative z-10"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="uppercase tracking-[5px] text-sm text-[#a14f3d] font-black mb-4">
                Our Collection
              </p>

              <h2 className="text-4xl md:text-6xl font-black text-[#3a1f19] mb-6">
                Handmade Crochet Treasures
              </h2>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Crafted with creativity, warmth, and artistic passion to bring
                elegance and happiness into everyday life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="group relative bg-white/95 rounded-[36px] overflow-hidden border border-[#eadfd9] shadow-[0_12px_45px_rgba(124,58,45,0.10)] hover:shadow-[0_20px_70px_rgba(124,58,45,0.18)] hover:ring-2 hover:ring-[#e6c6bb] transition-all duration-500 hover:-translate-y-2 animate-[fadeUp_0.8s_ease]"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none z-20">
                    <div className="absolute top-0 left-[-100%] w-[60%] h-full bg-white/20 blur-2xl rotate-12 group-hover:left-[140%] transition-all duration-1000"></div>
                  </div>

                  <div className="overflow-hidden relative h-[330px] sm:h-[380px] md:h-[440px] bg-[#f8ece6]">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 z-10"></div>

                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute top-5 left-5 bg-[#7c3a2d] text-white px-4 py-2 rounded-full text-sm font-black shadow-lg z-20">
                      {product.badge}
                    </div>
                  </div>

                  <div className="p-7 flex flex-col min-h-[430px] md:min-h-[450px]">
                    <p className="uppercase tracking-[3px] text-xs font-black text-[#a14f3d] mb-3">
                      {product.category}
                    </p>

                    <div className="flex items-start justify-between min-h-[115px] mb-5 gap-4">
                      <h3 className="text-2xl md:text-3xl font-black text-[#3a1f19] leading-tight">
                        {product.name}
                      </h3>

                      <span className="text-2xl font-black text-[#7c3a2d] whitespace-nowrap">
                        {product.price}
                      </span>
                    </div>

                    <p className="text-gray-500 leading-relaxed mb-5 min-h-[100px]">
                      {product.description}
                    </p>

                    <p className="text-sm text-[#a14f3d] font-black mb-5">
                      🔥 Limited Handmade Pieces Available
                    </p>

                    <div className="flex flex-col gap-3 mt-auto pt-4">
                      <a
                        href={createWhatsappLink(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center bg-[#7c3a2d] text-white py-3 md:py-4 rounded-2xl font-black text-base md:text-lg shadow-lg hover:bg-[#5e2a20] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out"
                      >
                        Order Now
                      </a>

                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="w-full border-2 border-[#7c3a2d] text-[#7c3a2d] py-3 md:py-4 rounded-2xl font-black text-base hover:bg-[#7c3a2d] hover:text-white hover:-translate-y-1 transition-all duration-300 ease-out"
                      >
                        View Product
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Gallery */}
        <section className="py-24 bg-white relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="uppercase tracking-[6px] text-sm text-[#a14f3d] font-black mb-4">
                Instagram Gallery
              </p>

              <h2 className="text-4xl md:text-6xl font-black text-[#3a1f19] mb-6">
                Handmade Moments
              </h2>

              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Aesthetic handmade creations crafted to feel beautiful,
                thoughtful, and gift-worthy.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {['gallery1.png', 'gallery2.png', 'gallery3.png', 'gallery4.png'].map(
                (image, index) => (
                  <a
                    key={index}
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group overflow-hidden rounded-[30px] shadow-lg"
                  >
                    <img
                      src={`/${image}`}
                      alt={`BeGolu Instagram gallery ${index + 1}`}
                      className="h-[220px] md:h-[320px] w-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                  </a>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Instagram Banner */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-r from-[#7c3a2d] via-[#a14f3d] to-[#c46b58] text-white">
          <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-20"></div>

          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <p className="uppercase tracking-[6px] text-sm font-black opacity-80 mb-6">
              Follow Our Journey
            </p>

            <h2 className="text-4xl md:text-7xl font-black leading-tight mb-8">
              Crochet Art
              <br />
              Inspired By Creativity
            </h2>

            <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-3xl mx-auto mb-12">
              Explore handmade crochet flowers, mini animals, artistic
              creations, behind-the-scenes moments, and exclusive launches from
              BeGolu India.
            </p>

            <div className="flex flex-wrap justify-center gap-5 md:gap-6">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#7c3a2d] px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-lg shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all"
              >
                @begoluindia
              </a>

              <a
                href="#products"
                className="border-2 border-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-lg hover:bg-white hover:text-[#7c3a2d] hover:-translate-y-1 transition-all"
              >
                Explore Collection
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-14 text-sm font-bold opacity-90">
              <span>✨ Handmade Crochet</span>
              <span>🌸 Artistic Lifestyle</span>
              <span>🎁 Perfect Gifts</span>
              <span>🇮🇳 Made In India</span>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="py-24 md:py-28 bg-[#fffaf7] relative z-10"
        >
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-52 h-52 bg-pink-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute bottom-0 right-0 w-52 h-52 bg-orange-200 rounded-full blur-3xl opacity-30"></div>

              <img
                src="/about.png"
                alt="About BeGolu India"
                className="relative rounded-[40px] shadow-2xl h-[420px] md:h-[650px] object-cover w-full hover:scale-[1.02] transition-all duration-700"
              />
            </div>

            <div>
              <p className="uppercase tracking-[6px] text-sm text-[#a14f3d] font-black mb-6">
                About BeGolu India
              </p>

              <h2 className="text-4xl md:text-6xl font-black leading-tight text-[#3a1f19] mb-8">
                Handmade
                <br />
                Crochet Art
                <br />
                With Heart.
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                BeGolu India creates handcrafted crochet flowers, mini animals,
                and artistic creations inspired by creativity, warmth, and Indian
                craftsmanship.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Every piece is thoughtfully handmade with patience, passion, and
                love to bring joy, elegance, and artistic beauty into everyday
                life.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="bg-white p-6 rounded-3xl shadow-md border border-[#f3e5df] hover:border-[#d8b4a7] transition-all">
                  <h3 className="text-4xl font-black text-[#7c3a2d] mb-2">
                    100%
                  </h3>
                  <p className="text-gray-600 font-semibold">
                    Handmade Crochet
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-md border border-[#f3e5df] hover:border-[#d8b4a7] transition-all">
                  <h3 className="text-4xl font-black text-[#7c3a2d] mb-2">
                    🇮🇳
                  </h3>
                  <p className="text-gray-600 font-semibold">Made In India</p>
                </div>
              </div>

              <a
                href="#products"
                className="inline-flex bg-[#7c3a2d] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-lg shadow-xl hover:bg-[#5e2a20] hover:scale-105 hover:-translate-y-1 transition-all"
              >
                Explore Collection
              </a>
            </div>
          </div>
        </section>

        {/* Reviews Carousel */}
        <section id="reviews" className="py-24 md:py-28 bg-white relative z-10">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="uppercase tracking-[6px] text-sm text-[#a14f3d] font-black mb-5">
              Customer Love
            </p>

            <h2 className="text-4xl md:text-6xl font-black text-[#3a1f19] mb-6">
              Loved By Crochet Lovers
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-14">
              Beautiful words from customers who experienced the warmth,
              creativity, and handmade elegance of BeGolu India.
            </p>

            <div className="bg-[#fffaf7] rounded-[40px] p-8 md:p-14 shadow-[0_20px_70px_rgba(124,58,45,0.12)] border border-[#eadfd9]">
              <div className="text-6xl mb-6">{reviews[reviewIndex].icon}</div>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                “{reviews[reviewIndex].text}”
              </p>

              <h4 className="text-2xl font-black text-[#3a1f19]">
                {reviews[reviewIndex].name}
              </h4>

              <p className="text-[#a14f3d] font-bold mt-1">
                {reviews[reviewIndex].title}
              </p>

              <div className="flex justify-center gap-3 mt-8">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setReviewIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      reviewIndex === index
                        ? 'bg-[#7c3a2d] scale-125'
                        : 'bg-[#e7cfc6]'
                    }`}
                    aria-label={`Review ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-[#fffaf7] relative z-10">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="uppercase tracking-[6px] text-sm text-[#a14f3d] font-black mb-4">
                Questions
              </p>

              <h2 className="text-4xl md:text-6xl font-black text-[#3a1f19]">
                Before You Order
              </h2>
            </div>

            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-[28px] p-6 shadow-md border border-[#eadfd9] open:shadow-xl transition-all"
                >
                  <summary className="cursor-pointer list-none flex justify-between items-center gap-4 text-xl font-black text-[#3a1f19]">
                    {faq.question}
                    <span className="text-[#7c3a2d] group-open:rotate-45 transition-all text-3xl">
                      +
                    </span>
                  </summary>

                  <p className="text-gray-600 leading-relaxed mt-5">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="relative py-24 md:py-28 overflow-hidden bg-gradient-to-br from-[#3a1f19] via-[#4a241c] to-[#24120e] text-white"
        >
          <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-300 rounded-full blur-3xl opacity-10"></div>

          <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
            <p className="uppercase tracking-[6px] text-sm opacity-70 font-black mb-6">
              Let’s Connect
            </p>

            <h2 className="text-4xl md:text-7xl font-black leading-tight mb-8">
              Bring Handmade
              <br />
              Art Into Your Life
            </h2>

            <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto leading-relaxed mb-14">
              Connect with BeGolu India for custom crochet creations, gifting
              ideas, collaborations, and exclusive handmade collections.
            </p>

            <div className="flex flex-wrap justify-center gap-5 md:gap-6 mb-16">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#3a1f19] px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-lg shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all"
              >
                DM on Instagram
              </a>

              <a
                href={createWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-lg hover:bg-white hover:text-[#3a1f19] hover:-translate-y-1 transition-all"
              >
                WhatsApp Store
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '📩',
                  title: 'Instagram Orders',
                  desc: 'Shop directly through Instagram DMs and explore new crochet collections.',
                },
                {
                  icon: '🎁',
                  title: 'Custom Gifts',
                  desc: 'Personalized crochet gifts made with creativity, warmth, and handmade elegance.',
                },
                {
                  icon: '🇮🇳',
                  title: 'Handmade In India',
                  desc: 'Every crochet creation is handcrafted with love and artistic passion in India.',
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur rounded-[30px] p-8 border border-white/10 hover:bg-white/15 transition-all"
                >
                  <div className="text-5xl mb-5">{card.icon}</div>

                  <h3 className="text-2xl font-black mb-3">{card.title}</h3>

                  <p className="opacity-80 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-[#24120e] via-[#2f1813] to-[#140907] text-gray-300 pt-20 pb-28 md:pb-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div>
                <h2 className="text-4xl font-black text-white mb-5">
                  BeGolu India
                </h2>

                <p className="text-gray-400 leading-relaxed mb-6">
                  Handmade crochet flowers, mini animals, and artistic creations
                  crafted with love, creativity, and elegance.
                </p>

                <div className="flex gap-4">
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-[#7c3a2d] transition-all w-12 h-12 rounded-full flex items-center justify-center text-xl"
                  >
                    📸
                  </a>

                  <a
                    href={createWhatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-[#7c3a2d] transition-all w-12 h-12 rounded-full flex items-center justify-center text-xl"
                  >
                    💬
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Quick Links
                </h3>

                <div className="flex flex-col gap-4">
                  <a href="#home" className="hover:text-white transition-all">
                    Home
                  </a>

                  <a
                    href="#products"
                    className="hover:text-white transition-all"
                  >
                    Products
                  </a>

                  <a href="#about" className="hover:text-white transition-all">
                    About
                  </a>

                  <a
                    href="#reviews"
                    className="hover:text-white transition-all"
                  >
                    Reviews
                  </a>

                  <a
                    href="#contact"
                    className="hover:text-white transition-all"
                  >
                    Contact
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Collections
                </h3>

                <div className="flex flex-col gap-4">
                  <a href="#products" className="hover:text-white transition-all">
                    Crochet Flowers
                  </a>

                  <a href="#products" className="hover:text-white transition-all">
                    Mini Animals
                  </a>

                  <a href="#products" className="hover:text-white transition-all">
                    Handmade Gifts
                  </a>

                  <a href="#contact" className="hover:text-white transition-all">
                    Custom Orders
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact</h3>

                <div className="flex flex-col gap-4 text-gray-400">
                  <p>📍 India</p>

                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-all"
                  >
                    📸 @begoluindia
                  </a>

                  <a
                    href={createWhatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-all"
                  >
                    💬 WhatsApp Orders Available
                  </a>

                  <p>✨ Handmade With Love</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © 2026 BeGolu India. All rights reserved.
              </p>

              <p className="text-gray-500 text-sm">
                Crafted with ❤️ for handmade art lovers.
              </p>
            </div>
          </div>
        </footer>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 w-full md:hidden bg-white/90 backdrop-blur-xl border-t border-[#eadfd9] shadow-[0_-10px_30px_rgba(0,0,0,0.08)] z-50 px-4 py-4">
          <div className="flex gap-3">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#7c3a2d] text-white text-center py-3.5 rounded-full font-black shadow-lg"
            >
              Instagram
            </a>

            <a
              href={createWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border-2 border-[#7c3a2d] text-[#7c3a2d] text-center py-3.5 rounded-full font-black"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Floating WhatsApp - desktop only */}
        <a
          href={createWhatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex fixed md:bottom-8 right-8 z-40 bg-green-500/90 backdrop-blur-md hover:bg-green-600 text-white md:w-16 md:h-16 rounded-full items-center justify-center text-3xl shadow-2xl hover:scale-110 transition-all duration-300"
          aria-label="WhatsApp"
        >
          💬
        </a>

        {/* Product Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center px-5">
            <div className="bg-white rounded-[36px] max-w-4xl w-full overflow-hidden shadow-2xl relative">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 z-20 bg-white/90 text-[#3a1f19] w-11 h-11 rounded-full shadow-lg font-black text-xl"
                aria-label="Close product modal"
              >
                ×
              </button>

              <div className="grid md:grid-cols-2">
                <div className="h-[360px] md:h-[560px] bg-[#f8ece6]">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 md:p-10 flex flex-col">
                  <p className="uppercase tracking-[4px] text-xs font-black text-[#a14f3d] mb-4">
                    {selectedProduct.category}
                  </p>

                  <h3 className="text-3xl md:text-5xl font-black text-[#3a1f19] leading-tight mb-5">
                    {selectedProduct.name}
                  </h3>

                  <p className="text-3xl font-black text-[#7c3a2d] mb-6">
                    {selectedProduct.price}
                  </p>

                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    {selectedProduct.description}
                  </p>

                  <div className="space-y-3 text-gray-600 font-semibold mb-8">
                    <p>✨ Carefully handmade</p>
                    <p>🎁 Perfect for gifting</p>
                    <p>🌸 Premium aesthetic finish</p>
                    <p>🔥 Limited handmade stock</p>
                  </div>

                  <a
                    href={createWhatsappLink(selectedProduct.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full flex items-center justify-center bg-[#7c3a2d] text-white py-4 rounded-2xl font-black text-lg shadow-xl hover:bg-[#5e2a20] transition-all"
                  >
                    Order on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}