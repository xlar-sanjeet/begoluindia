'use client'

import { useState } from 'react'
export default function BeGoluIndiaWebsite() {
const [menuOpen, setMenuOpen] = useState(false)
  const products = [
  {
    name: 'Handcrafted Crochet Lilly',
    price: '₹399',
    image: '/products/lilly.png',
  },
  {
    name: 'Handcrafted Crochet Sunflower',
    price: '₹279',
    image: '/products/sunflower.png',
  },
  {
    name: 'Crochet Mini Animal',
    price: '₹849',
    image: '/products/mini animal.png',
  },
  ];

  return (
    <div className="min-h-screen bg-[#fffaf7] text-gray-900 font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#fffaf7]/95 backdrop-blur border-b border-[#f1e7e2] shadow-sm">

  <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

    {/* Logo */}
    <div className="flex flex-col">
      <h1 className="text-2xl md:text-3xl font-black tracking-tight text-[#7c3a2d] leading-none">
        BeGolu India
      </h1>

      <p className="hidden md:block text-sm text-gray-500 mt-1">
        Handmade • Artistic • Elegant
      </p>
    </div>

    {/* Navigation */}
    <nav className="hidden md:flex items-center gap-10 text-[16px] font-semibold text-gray-700">

      <a href="#home" className="hover:text-[#7c3a2d] transition-all duration-300">
        Home
      </a>

      <a href="#products" className="hover:text-[#7c3a2d] transition-all duration-300">
        Products
      </a>

      <a href="#about" className="hover:text-[#7c3a2d] transition-all duration-300">
        About
      </a>

      <a href="#contact" className="hover:text-[#7c3a2d] transition-all duration-300">
        Contact
      </a>

    </nav>

  {/* Right Buttons */}
<div className="flex items-center gap-2 md:gap-4">

  {/* Instagram Button */}
  <a
    href="https://instagram.com/begoluindia"
    target="_blank"
    rel="noopener noreferrer"
    className="
      border border-[#7c3a2d]
      text-[#7c3a2d]
      px-3 md:px-5
      py-2 md:py-2.5
      rounded-full
      font-semibold
      text-xs sm:text-sm md:text-base
      hover:bg-[#7c3a2d]
      hover:text-white
      transition-all
      whitespace-nowrap
    "
  >
    Instagram
  </a>

  {/* Shop Button */}
  <button
    className="
      bg-[#7c3a2d]
      text-white
      px-4 md:px-6
      py-2 md:py-2.5
      rounded-full
      text-xs sm:text-sm md:text-base
      font-bold
      shadow-md
      hover:bg-[#5e2a20]
      hover:scale-105
      transition-all
      whitespace-nowrap
    "
  >
    Shop Now
  </button>

  {/* Hamburger */}
  <button
    className="
      md:hidden
      text-2xl
      text-[#7c3a2d]
      ml-1
      flex items-center justify-center
    "
    onClick={() => setMenuOpen(!menuOpen)}
  >
    ☰
  </button>
</div>
</div>
{/* Mobile Menu */}
{menuOpen && (

  <div className="md:hidden bg-[#fffaf7] border-t border-[#f1e7e2] px-6 py-6 shadow-lg">

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

      <a href="#contact" onClick={() => setMenuOpen(false)}>
        Contact
      </a>
<a
  href="https://instagram.com/begoluindia"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setMenuOpen(false)}
  className="text-[#7c3a2d] font-bold"
>
  Instagram
</a>
    </div>

  </div>

)}

</header>
      
      {/* Hero Section */}
      <section
  id="home"
  className="relative overflow-hidden bg-gradient-to-b from-[#fffaf7] to-[#f8ece6]"
>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6 py-24 md:py-32">

    {/* LEFT CONTENT */}
    <div>

      <p className="uppercase tracking-[6px] text-sm text-[#a14f3d] font-bold mb-6">
        Handmade Crochet Art
      </p>

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight text-[#3a1f19] mb-8">

        Crafted
        <br />

        With Love,
        <br />

        Worn With Joy.

      </h1>

      <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-10">

        Discover handcrafted crochet flowers, mini animals, and artistic creations designed with warmth, creativity, and elegance.

      </p>

      {/* BUTTONS */}
      <div className="flex flex-wrap gap-5">

        <button className="bg-[#7c3a2d] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-[#5e2a20] hover:scale-105 transition-all">

          Explore Collection

        </button>

        <a
  href="https://instagram.com/begoluindia"
  target="_blank"
  rel="noopener noreferrer"
  className="border-2 border-[#7c3a2d] text-[#7c3a2d] px-8 py-4 rounded-full font-bold hover:bg-[#7c3a2d] hover:text-white transition-all inline-block"
>

  Instagram Store

</a>

      </div>

      {/* TRUST TAGS */}
      <div className="flex flex-wrap gap-6 mt-12 text-sm font-semibold text-gray-600">

        <span>✨ Handmade in India</span>

        <span>🌸 Premium Crochet Art</span>

        <span>🎁 Perfect for Gifts</span>

      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="relative">

      {/* Background Glow */}
      <div className="absolute -top-10 -left-10 w-52 h-52 bg-pink-200 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-0 right-0 w-52 h-52 bg-orange-200 rounded-full blur-3xl opacity-40"></div>

      <img
        src="/hero.png"
        alt="BeGolu Hero"
        className="relative rounded-[40px] shadow-2xl object-cover h-[450px] md:h-[700px] w-full hover:scale-[1.02] transition-all duration-500"
      />

    </div>

  </div>

</section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Handcrafted Quality',
              desc: 'Every product is carefully handmade with attention to detail.',
            },
            {
              title: 'Premium Aesthetic',
              desc: 'Minimal, elegant and trendy designs crafted for modern India.',
            },
            {
              title: 'Instagram Friendly',
              desc: 'Beautiful presentation designed for social-first shopping.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#7c3a2d]">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 bg-[#fffaf7]">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">

      <p className="uppercase tracking-[5px] text-sm text-[#a14f3d] font-bold mb-4">
        Our Collection
      </p>

      <h2 className="text-4xl md:text-6xl font-black text-[#3a1f19] mb-6">
        Handmade Crochet Treasures
      </h2>

      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Crafted with creativity, warmth, and artistic passion to bring elegance and happiness into everyday life.
      </p>

    </div>

    {/* Product Grid */}
    <div className="grid md:grid-cols-3 gap-10">

      {products.map((product, index) => (

        <div
          key={index}
          className="
  group
  bg-white
  rounded-[35px]
  overflow-hidden
  shadow-md
  hover:shadow-2xl
  hover:-translate-y-2
  transition-all
  duration-500
  border border-[#f3e5df]
"
        >

          {/* Image */}
          <div className="overflow-hidden relative bg-[#f8ece6]">

            <img
  src={product.image}
  alt={product.name}
  className="
    h-[320px] md:h-[420px]
    w-full
    object-cover
    transition-transform duration-700 ease-out
    group-hover:scale-110
    group-hover:rotate-1
  "
/>
            {/* Floating Badge */}
            <div className="absolute top-5 left-5 bg-[#7c3a2d] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              Handmade
            </div>

          </div>

          {/* Content */}
          <div className="p-7 flex flex-col h-full">

            {/* Product Name + Price */}
            <div className="flex items-start justify-between min-h-[90px] mb-5 gap-4">

              <h3 className="text-3xl font-black text-[#3a1f19] leading-tight">
                {product.name}
              </h3>

              <span className="text-2xl font-black text-[#7c3a2d] whitespace-nowrap">
                {product.price}
              </span>

            </div>

            {/* Small Description */}
            <p className="text-gray-500 leading-relaxed mb-6">
              Premium handmade crochet art designed with love and creativity.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-4 mt-auto">

              <button className="w-full bg-[#7c3a2d] text-white py-4 rounded-full font-bold text-lg hover:bg-[#5e2a20] hover:scale-[1.02] transition-all shadow-lg">

                Add to Cart

              </button>

              <button className="w-full border-2 border-[#7c3a2d] text-[#7c3a2d] py-4 rounded-full font-bold hover:bg-[#7c3a2d] hover:text-white transition-all">

                View Details

              </button>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

      {/* Instagram Banner */}
      <section className="relative py-16 md:py-28 overflow-hidden bg-gradient-to-r from-[#7c3a2d] via-[#a14f3d] to-[#c46b58] text-white">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-20"></div>

  <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-20"></div>

  <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

    {/* Small Text */}
    <p className="uppercase tracking-[6px] text-sm font-bold opacity-80 mb-6">

      Follow Our Journey

    </p>

    {/* Main Heading */}
    <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">

      Crochet Art
      <br />

      Inspired By Creativity

    </h2>

    {/* Description */}
    <p className="text-xl opacity-90 leading-relaxed max-w-3xl mx-auto mb-12">

      Explore handmade crochet flowers, mini animals, artistic creations, behind-the-scenes moments, and exclusive launches from BeGolu India.

    </p>

    {/* Buttons */}
    <div className="flex flex-wrap justify-center gap-6">

      {/* Instagram Button */}
      <a
        href="https://instagram.com/begoluindia"
        target="_blank"
        className="bg-white text-[#7c3a2d] px-10 py-5 rounded-full font-black text-lg shadow-2xl hover:scale-105 transition-all"
      >

        @begoluindia

      </a>

      {/* Explore Button */}
      <button className="border-2 border-white px-10 py-5 rounded-full font-black text-lg hover:bg-white hover:text-[#7c3a2d] transition-all">

        Explore Collection

      </button>

    </div>

    {/* Bottom Tags */}
    <div className="flex flex-wrap justify-center gap-8 mt-14 text-sm font-semibold opacity-90">

      <span>✨ Handmade Crochet</span>

      <span>🌸 Artistic Lifestyle</span>

      <span>🎁 Perfect Gifts</span>

      <span>🇮🇳 Made In India</span>

    </div>

  </div>

</section>

      {/* About */}
      <section id="about" className="py-28 bg-[#fffaf7]">

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-20 items-center">

    {/* LEFT IMAGE */}
    <div className="relative">

      {/* Glow Effects */}
      <div className="absolute -top-10 -left-10 w-52 h-52 bg-pink-200 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-52 h-52 bg-orange-200 rounded-full blur-3xl opacity-30"></div>

      <img
        src="/about.png"
        alt="About BeGolu India"
        className="relative rounded-[40px] shadow-2xl h-[420px] md:h-[650px] object-cover w-full hover:scale-[1.02] transition-all duration-500"
      />

    </div>

    {/* RIGHT CONTENT */}
    <div>

      {/* Small Title */}
      <p className="uppercase tracking-[6px] text-sm text-[#a14f3d] font-bold mb-6">

        About BeGolu India

      </p>

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight text-[#3a1f19] mb-8">

        Handmade
        <br />

        Crochet Art
        <br />

        With Heart.

      </h2>

      {/* Description */}
      <p className="text-lg text-gray-600 leading-relaxed mb-8">

        BeGolu India creates handcrafted crochet flowers, mini animals, and artistic creations inspired by creativity, warmth, and Indian craftsmanship.

      </p>

      <p className="text-lg text-gray-600 leading-relaxed mb-10">

        Every piece is thoughtfully handmade with patience, passion, and love to bring joy, elegance, and artistic beauty into everyday life.

      </p>

      {/* Features */}
      <div className="grid grid-cols-2 gap-6 mb-12">

        <div className="bg-white p-6 rounded-3xl shadow-md border border-[#f3e5df]">

          <h3 className="text-4xl font-black text-[#7c3a2d] mb-2">
            100%
          </h3>

          <p className="text-gray-600 font-medium">
            Handmade Crochet
          </p>

        </div>

        <div className="bg-white p-6 rounded-3xl shadow-md border border-[#f3e5df]">

          <h3 className="text-4xl font-black text-[#7c3a2d] mb-2">
            🇮🇳
          </h3>

          <p className="text-gray-600 font-medium">
            Made In India
          </p>

        </div>

      </div>

      {/* Button */}
      <button className="bg-[#7c3a2d] text-white px-7 md:px-10 py-4 md:py-5 rounded-full font-black text-lg shadow-xl hover:bg-[#5e2a20] hover:scale-105 transition-all">

        Explore Collection

      </button>

    </div>

  </div>

</section>

{/* Testimonials */}
<section className="py-28 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">

      <p className="uppercase tracking-[6px] text-sm text-[#a14f3d] font-bold mb-5">

        Customer Love

      </p>

      <h2 className="text-5xl md:text-6xl font-black text-[#3a1f19] mb-6">

        Loved By Crochet Lovers

      </h2>

      <p className="text-lg text-gray-600 max-w-3xl mx-auto">

        Beautiful words from customers who experienced the warmth, creativity, and handmade elegance of BeGolu India.

      </p>

    </div>

    {/* Testimonial Cards */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* Card 1 */}
      <div className="bg-[#fffaf7] rounded-[35px] p-10 shadow-md border border-[#f3e5df] hover:shadow-2xl transition-all duration-500">

        <div className="text-5xl mb-6">
          ✨
        </div>

        <p className="text-gray-600 leading-relaxed text-lg mb-8">

          Absolutely loved the crochet flowers. The detailing and quality feel truly handmade and premium.

        </p>

        <div>

          <h4 className="text-2xl font-black text-[#3a1f19]">
            Priya S.
          </h4>

          <p className="text-[#a14f3d] font-semibold mt-1">
            Verified Customer
          </p>

        </div>

      </div>

      {/* Card 2 */}
      <div className="bg-[#fffaf7] rounded-[35px] p-10 shadow-md border border-[#f3e5df] hover:shadow-2xl transition-all duration-500">

        <div className="text-5xl mb-6">
          🌸
        </div>

        <p className="text-gray-600 leading-relaxed text-lg mb-8">

          The crochet mini animals are adorable. Packaging was aesthetic and perfect for gifting.

        </p>

        <div>

          <h4 className="text-2xl font-black text-[#3a1f19]">
            Ananya R.
          </h4>

          <p className="text-[#a14f3d] font-semibold mt-1">
            Happy Buyer
          </p>

        </div>

      </div>

      {/* Card 3 */}
      <div className="bg-[#fffaf7] rounded-[35px] p-10 shadow-md border border-[#f3e5df] hover:shadow-2xl transition-all duration-500">

        <div className="text-5xl mb-6">
          🎁
        </div>

        <p className="text-gray-600 leading-relaxed text-lg mb-8">

          Beautiful handmade art with a luxury aesthetic. Perfect for Instagram-worthy gifting.

        </p>

        <div>

          <h4 className="text-2xl font-black text-[#3a1f19]">
            Sneha K.
          </h4>

          <p className="text-[#a14f3d] font-semibold mt-1">
            Returning Customer
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Contact */}
      {/* Contact */}
<section
  id="contact"
  className="relative py-28 overflow-hidden bg-[#3a1f19] text-white"
>

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-10"></div>

  <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-300 rounded-full blur-3xl opacity-10"></div>

  <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

    {/* Small Title */}
    <p className="uppercase tracking-[6px] text-sm opacity-70 font-bold mb-6">

      Let’s Connect

    </p>

    {/* Main Heading */}
    <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">

      Bring Handmade
      <br />

      Art Into Your Life

    </h2>

    {/* Description */}
    <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed mb-14">

      Connect with BeGolu India for custom crochet creations, gifting ideas, collaborations, and exclusive handmade collections.

    </p>

    {/* Buttons */}
    <div className="flex flex-wrap justify-center gap-6 mb-16">

      {/* Instagram */}
      <a
        href="https://instagram.com/begoluindia"
        target="_blank"
        className="bg-white text-[#3a1f19] px-10 py-5 rounded-full font-black text-lg shadow-2xl hover:scale-105 transition-all"
      >

        DM on Instagram

      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        className="border-2 border-white px-10 py-5 rounded-full font-black text-lg hover:bg-white hover:text-[#3a1f19] transition-all"
      >

        WhatsApp Store

      </a>

    </div>

    {/* Contact Cards */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-white/10 backdrop-blur rounded-[30px] p-8 border border-white/10">

        <div className="text-5xl mb-5">
          📩
        </div>

        <h3 className="text-2xl font-black mb-3">

          Instagram Orders

        </h3>

        <p className="opacity-80 leading-relaxed">

          Shop directly through Instagram DMs and explore new crochet collections.

        </p>

      </div>

      {/* Card 2 */}
      <div className="bg-white/10 backdrop-blur rounded-[30px] p-8 border border-white/10">

        <div className="text-5xl mb-5">
          🎁
        </div>

        <h3 className="text-2xl font-black mb-3">

          Custom Gifts

        </h3>

        <p className="opacity-80 leading-relaxed">

          Personalized crochet gifts made with creativity, warmth, and handmade elegance.

        </p>

      </div>

      {/* Card 3 */}
      <div className="bg-white/10 backdrop-blur rounded-[30px] p-8 border border-white/10">

        <div className="text-5xl mb-5">
          🇮🇳
        </div>

        <h3 className="text-2xl font-black mb-3">

          Handmade In India

        </h3>

        <p className="opacity-80 leading-relaxed">

          Every crochet creation is handcrafted with love and artistic passion in India.

        </p>

      </div>

    </div>

  </div>

</section>

      {/* Footer */}
     {/* Footer */}
<footer className="bg-[#24120e] text-gray-300 pt-20 pb-10">

  <div className="max-w-7xl mx-auto px-6">

    {/* Top Footer */}
    <div className="grid md:grid-cols-4 gap-12 mb-16">

      {/* Brand */}
      <div>

        <h2 className="text-4xl font-black text-white mb-5">

          BeGolu India

        </h2>

        <p className="text-gray-400 leading-relaxed mb-6">

          Handmade crochet flowers, mini animals, and artistic creations crafted with love, creativity, and elegance.

        </p>

        {/* Social Icons */}
        <div className="flex gap-4">

          <a
            href="https://instagram.com/begoluindia"
            target="_blank"
            className="bg-white/10 hover:bg-[#7c3a2d] transition-all w-12 h-12 rounded-full flex items-center justify-center text-xl"
          >

            📸

          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            className="bg-white/10 hover:bg-[#7c3a2d] transition-all w-12 h-12 rounded-full flex items-center justify-center text-xl"
          >

            💬

          </a>

          <a
            href="#"
            className="bg-white/10 hover:bg-[#7c3a2d] transition-all w-12 h-12 rounded-full flex items-center justify-center text-xl"
          >

            📌

          </a>

        </div>

      </div>

      {/* Quick Links */}
      <div>

        <h3 className="text-2xl font-bold text-white mb-6">

          Quick Links

        </h3>

        <div className="flex flex-col gap-4">

          <a href="#home" className="hover:text-white transition-all">
            Home
          </a>

          <a href="#products" className="hover:text-white transition-all">
            Products
          </a>

          <a href="#about" className="hover:text-white transition-all">
            About
          </a>

          <a href="#contact" className="hover:text-white transition-all">
            Contact
          </a>

        </div>

      </div>

      {/* Collections */}
      <div>

        <h3 className="text-2xl font-bold text-white mb-6">

          Collections

        </h3>

        <div className="flex flex-col gap-4">

          <a href="#" className="hover:text-white transition-all">
            Crochet Flowers
          </a>

          <a href="#" className="hover:text-white transition-all">
            Mini Animals
          </a>

          <a href="#" className="hover:text-white transition-all">
            Handmade Gifts
          </a>

          <a href="#" className="hover:text-white transition-all">
            Custom Orders
          </a>

        </div>

      </div>

      {/* Contact */}
      <div>

        <h3 className="text-2xl font-bold text-white mb-6">

          Contact

        </h3>

        <div className="flex flex-col gap-4 text-gray-400">

          <p>
            📍 India
          </p>

          <a
  href="https://instagram.com/begoluindia"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition-all"
>
  📸 @begoluindia
</a>

          <p>
            💬 WhatsApp Orders Available
          </p>

          <p>
            ✨ Handmade With Love
          </p>

        </div>

      </div>

    </div>

    {/* Bottom Footer */}
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
{/* Floating WhatsApp Button */}
<a
  href="https://wa.me/918329336093"
  target="_blank"
  className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition-all duration-300"
>

  <img
  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
  alt="WhatsApp"
  className="w-8 h-8"
/>

</a>
    </div>
  );
}

