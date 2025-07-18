import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star,
  Users,
  Trophy,
  Gamepad2,
  Wifi,
  Coffee,
  Shield,
  ChevronRight,
  Play,
  Calendar,
  Award,
  Target,
  Zap,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const heroSlides = [
    {
      title: "WELCOME TO XP ZONE",
      subtitle: "Gaming Café & Esports Arena",
      description: "Experience the ultimate gaming destination in Patna with high-end gaming PCs, tournaments, and more!",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      title: "COMPETE & WIN",
      subtitle: "Join Daily Tournaments",
      description: "Participate in exciting esports tournaments and win amazing cash prizes every day!",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      title: "PREMIUM GAMING",
      subtitle: "High-End Gaming Setup",
      description: "Play on the latest gaming PCs with RTX graphics cards and mechanical keyboards!",
      image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    }
  ];

  const services = [
    {
      icon: <Gamepad2 className="w-12 h-12" />,
      title: "Gaming Stations",
      description: "High-performance gaming PCs with RTX 3060 Ti, 16GB RAM, and 144Hz monitors for the ultimate gaming experience.",
      price: "₹60/hour",
      features: ["RTX 3060 Ti Graphics", "16GB DDR4 RAM", "144Hz Gaming Monitor", "Mechanical Keyboard"]
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Esports Tournaments",
      description: "Daily tournaments in popular games like BGMI, Valorant, CS2, and FIFA with exciting cash prizes.",
      price: "Entry ₹50",
      features: ["Daily Tournaments", "Cash Prizes", "Multiple Games", "Professional Setup"]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Group Gaming",
      description: "Book multiple stations for your squad and enjoy team gaming sessions with friends and family.",
      price: "₹250/hour (5 PCs)",
      features: ["Team Bookings", "Group Discounts", "Private Sessions", "Custom Tournaments"]
    },
    {
      icon: <Coffee className="w-12 h-12" />,
      title: "Gaming Café",
      description: "Enjoy delicious snacks, beverages, and meals while gaming in our comfortable gaming lounge.",
      price: "₹30 onwards",
      features: ["Fresh Snacks", "Cold Beverages", "Hot Meals", "Gaming Lounge"]
    }
  ];

  const features = [
    { 
      icon: <Zap className="w-8 h-8" />, 
      title: "High-Speed Internet", 
      desc: "1Gbps Fiber Connection",
      detail: "Ultra-fast internet with zero lag for competitive gaming"
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: "Secure Environment", 
      desc: "24/7 CCTV Monitoring",
      detail: "Safe and secure gaming environment with full surveillance"
    },
    { 
      icon: <Wifi className="w-8 h-8" />, 
      title: "Free WiFi", 
      desc: "Complimentary Internet",
      detail: "Free high-speed WiFi for all customers"
    },
    { 
      icon: <Clock className="w-8 h-8" />, 
      title: "Extended Hours", 
      desc: "10 AM - 12 AM Daily",
      detail: "Open 14 hours daily for your gaming convenience"
    }
  ];

  const testimonials = [
    {
      name: "Rahul Kumar",
      rating: 5,
      text: "Best gaming café in Patna! Amazing setup with RTX graphics cards and super fast internet. The staff is very friendly and helpful.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      game: "Valorant Player"
    },
    {
      name: "Priya Singh",
      rating: 5,
      text: "Love the tournaments here! Won ₹2000 in BGMI tournament last week. Great community and competitive gaming environment.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      game: "BGMI Champion"
    },
    {
      name: "Amit Sharma",
      rating: 5,
      text: "Perfect place for gaming with friends. Clean environment, comfortable chairs, and the latest games. Highly recommended!",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      game: "CS2 Player"
    }
  ];

  const galleryImages = [
    {
      url: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Gaming Stations"
    },
    {
      url: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Tournament Setup"
    },
    {
      url: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Premium PCs"
    },
    {
      url: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Gaming Lounge"
    },
    {
      url: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Esports Arena"
    },
    {
      url: "https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Team Gaming"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  XP ZONE
                </span>
                <div className="text-xs text-gray-400 -mt-1">Gaming Café</div>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </motion.button>
              ))}
              <motion.button
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-black/95 backdrop-blur-md border-t border-purple-500/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-4">
                {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left text-gray-300 hover:text-purple-400 transition-colors py-2"
                  >
                    {item}
                  </button>
                ))}
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-white font-semibold">
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
          >
            <img
              src={heroSlides[currentSlide].image}
              alt="Gaming"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-purple-900/50" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {heroSlides[currentSlide].title}
            </motion.h1>
            
            <motion.h2
              className="text-2xl md:text-4xl text-purple-300 font-semibold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {heroSlides[currentSlide].subtitle}
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {heroSlides[currentSlide].description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Gamepad2 className="w-5 h-5" />
                <span>Start Gaming Now</span>
              </motion.button>
              
              <motion.button
                className="border-2 border-purple-500 px-8 py-4 rounded-full text-purple-400 font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoPlaying(true)}
              >
                <Play className="w-5 h-5" />
                <span>Watch Tour</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-purple-500 w-8' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience premium gaming services with state-of-the-art equipment and unmatched gaming atmosphere in Patna
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-purple-900/30 to-black/50 p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group backdrop-blur-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="text-purple-400 mb-4 group-hover:text-pink-400 transition-colors duration-300 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                    <div className="text-purple-400 font-bold text-xl mb-4">{service.price}</div>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-400">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Why Choose XP Zone?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We provide the best gaming experience in Patna with premium facilities and unmatched service quality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center group bg-gradient-to-b from-purple-900/20 to-transparent p-6 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(feature.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-purple-400 font-semibold mb-2">{feature.desc}</p>
                <p className="text-gray-400 text-sm">{feature.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About XP Zone
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                XP Zone Gaming Café is Patna's premier gaming destination, offering state-of-the-art gaming equipment, 
                comfortable seating, and an atmosphere designed for serious gamers and casual players alike.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Since our establishment, we've been committed to providing the best gaming experience with high-performance PCs 
                featuring RTX graphics cards, mechanical keyboards, and 144Hz monitors for competitive gaming.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our daily tournaments, comfortable gaming lounge, and friendly community make us the go-to destination 
                for gamers in Patna. Join us and level up your gaming experience!
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">1000+</div>
                  <div className="text-gray-400">Happy Gamers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">25+</div>
                  <div className="text-gray-400">Gaming Stations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">14</div>
                  <div className="text-gray-400">Hours Daily</div>
                </div>
              </div>

              <motion.button
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Visit Us Today</span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="XP Zone Gaming Setup"
                  className="rounded-3xl shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-3xl" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Premium Gaming Experience</h3>
                  <p className="text-gray-200">RTX Graphics • 144Hz Monitors • Mechanical Keyboards</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Gallery
            </h2>
            <p className="text-xl text-gray-400">Take a look at our amazing gaming setup and facilities</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-2xl group cursor-pointer bg-gradient-to-b from-purple-900/20 to-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              What Gamers Say
            </h2>
            <p className="text-xl text-gray-400">Hear from our satisfied customers and gaming community</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-purple-900/30 to-black/50 p-8 rounded-3xl border border-purple-500/20 backdrop-blur-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 border-2 border-purple-500"
                  />
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-purple-400 text-sm">{testimonial.game}</p>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-400">Ready to level up your gaming experience? Visit us or get in touch!</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 text-white">Visit XP Zone Gaming Café</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Address</h4>
                    <p className="text-gray-400">Near Boring Canal Road, Patna, Bihar 800001</p>
                    <p className="text-gray-400">Opposite City Mall, Ground Floor</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Phone</h4>
                    <p className="text-gray-400">+91 98765 43210</p>
                    <p className="text-gray-400">+91 87654 32109</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Email</h4>
                    <p className="text-gray-400">info@xpzonecafe.com</p>
                    <p className="text-gray-400">bookings@xpzonecafe.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Opening Hours</h4>
                    <p className="text-gray-400">Monday - Sunday: 10:00 AM - 12:00 AM</p>
                    <p className="text-gray-400">14 hours of non-stop gaming!</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-white font-bold text-lg mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, name: 'Facebook' },
                    { icon: Instagram, name: 'Instagram' },
                    { icon: Twitter, name: 'Twitter' },
                    { icon: Youtube, name: 'YouTube' }
                  ].map((social, index) => (
                    <motion.a
                      key={social.name}
                      href="#"
                      className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-b from-purple-900/30 to-black/50 p-8 rounded-3xl border border-purple-500/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-purple-900/30 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-purple-900/30 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      className="w-full px-4 py-3 bg-purple-900/30 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 bg-purple-900/30 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-purple-900/50 to-black py-12 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Gamepad2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    XP ZONE
                  </span>
                  <div className="text-xs text-gray-400 -mt-1">Gaming Café</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Patna's premier gaming destination with high-end gaming PCs, tournaments, and the best gaming community.
              </p>
              <div className="text-sm text-gray-500">
                <p>Near Boring Canal Road, Patna</p>
                <p>Open: 10 AM - 12 AM Daily</p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-purple-400 transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-purple-400 transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#gallery" className="hover:text-purple-400 transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-4">Gaming Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Gaming Stations (₹60/hr)</li>
                <li>Esports Tournaments</li>
                <li>Group Gaming Sessions</li>
                <li>Gaming Café & Snacks</li>
                <li>Private Party Bookings</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📞 +91 98765 43210</p>
                <p>📧 info@xpzonecafe.com</p>
                <p>📍 Near Boring Canal Road, Patna</p>
                <p>🕒 10 AM - 12 AM Daily</p>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 XP Zone Gaming Café, Patna. All rights reserved.</p>
            <p className="text-sm mt-2">Designed for gamers, by gamers. Level up your gaming experience!</p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              className="relative max-w-4xl w-full aspect-video bg-black rounded-lg overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="w-full h-full bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-xl">XP Zone Gaming Café Tour</p>
                  <p className="text-gray-300 mt-2">Virtual tour coming soon...</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;