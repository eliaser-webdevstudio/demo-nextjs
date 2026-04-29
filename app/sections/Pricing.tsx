'use client'

import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import {
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Zap,
  Award,
  Rocket,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

// ============================================
// 1. STRUKTUR DATA
// ============================================

type CategoryType = 'instant' | '1-phase' | '2-phase'

interface PricingPackage {
  id: string
  size: string
  price: number
  type: CategoryType
  features: {
    profitSplit: number
    maxDrawdown: number
    leverage: string
    newsTrading: boolean | string
    consistencyRule: boolean | string
  }
  isMostPopular: boolean
}

// Full pricing data
const pricingData: PricingPackage[] = [
  // Instant / Zero Challenge
  { id: 'inst-5k', size: '$5,000', price: 199, type: 'instant', features: { profitSplit: 80, maxDrawdown: 8, leverage: '1:10', newsTrading: true, consistencyRule: '5 days' }, isMostPopular: false },
  { id: 'inst-10k', size: '$10,000', price: 349, type: 'instant', features: { profitSplit: 85, maxDrawdown: 8, leverage: '1:10', newsTrading: true, consistencyRule: '5 days' }, isMostPopular: true },
  { id: 'inst-25k', size: '$25,000', price: 749, type: 'instant', features: { profitSplit: 90, maxDrawdown: 8, leverage: '1:10', newsTrading: true, consistencyRule: '5 days' }, isMostPopular: false },
  { id: 'inst-50k', size: '$50,000', price: 1299, type: 'instant', features: { profitSplit: 90, maxDrawdown: 8, leverage: '1:10', newsTrading: true, consistencyRule: '5 days' }, isMostPopular: false },
  { id: 'inst-100k', size: '$100,000', price: 2499, type: 'instant', features: { profitSplit: 90, maxDrawdown: 8, leverage: '1:10', newsTrading: true, consistencyRule: '5 days' }, isMostPopular: false },
  { id: 'inst-200k', size: '$200,000', price: 4499, type: 'instant', features: { profitSplit: 90, maxDrawdown: 8, leverage: '1:10', newsTrading: true, consistencyRule: '5 days' }, isMostPopular: false },

  // 1-Phase
  { id: '1ph-5k', size: '$5,000', price: 149, type: '1-phase', features: { profitSplit: 80, maxDrawdown: 10, leverage: '1:20', newsTrading: true, consistencyRule: 'No' }, isMostPopular: false },
  { id: '1ph-25k', size: '$25,000', price: 349, type: '1-phase', features: { profitSplit: 85, maxDrawdown: 10, leverage: '1:20', newsTrading: true, consistencyRule: 'No' }, isMostPopular: true },
  { id: '1ph-50k', size: '$50,000', price: 599, type: '1-phase', features: { profitSplit: 88, maxDrawdown: 10, leverage: '1:20', newsTrading: true, consistencyRule: 'No' }, isMostPopular: false },
  { id: '1ph-100k', size: '$100,000', price: 999, type: '1-phase', features: { profitSplit: 90, maxDrawdown: 10, leverage: '1:20', newsTrading: true, consistencyRule: 'No' }, isMostPopular: false },
  { id: '1ph-200k', size: '$200,000', price: 1899, type: '1-phase', features: { profitSplit: 90, maxDrawdown: 10, leverage: '1:20', newsTrading: true, consistencyRule: 'No' }, isMostPopular: false },

  // 2-Phase
  { id: '2ph-5k', size: '$5,000', price: 99, type: '2-phase', features: { profitSplit: 80, maxDrawdown: 12, leverage: '1:30', newsTrading: 'Week 2+', consistencyRule: 'No' }, isMostPopular: false },
  { id: '2ph-25k', size: '$25,000', price: 249, type: '2-phase', features: { profitSplit: 85, maxDrawdown: 12, leverage: '1:30', newsTrading: 'Week 2+', consistencyRule: 'No' }, isMostPopular: true },
  { id: '2ph-50k', size: '$50,000', price: 449, type: '2-phase', features: { profitSplit: 88, maxDrawdown: 12, leverage: '1:30', newsTrading: 'Week 2+', consistencyRule: 'No' }, isMostPopular: false },
  { id: '2ph-100k', size: '$100,000', price: 799, type: '2-phase', features: { profitSplit: 90, maxDrawdown: 12, leverage: '1:30', newsTrading: 'Week 2+', consistencyRule: 'No' }, isMostPopular: false },
  { id: '2ph-200k', size: '$200,000', price: 1499, type: '2-phase', features: { profitSplit: 90, maxDrawdown: 12, leverage: '1:30', newsTrading: 'Week 2+', consistencyRule: 'No' }, isMostPopular: false },
]

const categories = [
  { id: 'instant' as CategoryType, label: 'Instant', subtitle: 'Zero Challenge', icon: Rocket, color: 'from-orange-500 to-amber-600' },
  { id: '1-phase' as CategoryType, label: '1-Phase', subtitle: 'Low Stakes', icon: Zap, color: 'from-violet-500 to-purple-600' },
  { id: '2-phase' as CategoryType, label: '2-Phase', subtitle: 'Standard Pro', icon: Award, color: 'from-emerald-500 to-teal-600' },
]

// Mock chart data
const chartData = [
  { month: 'Jan', traders: 120, funded: 45 },
  { month: 'Feb', traders: 180, funded: 72 },
  { month: 'Mar', traders: 250, funded: 98 },
  { month: 'Apr', traders: 320, funded: 125 },
  { month: 'May', traders: 410, funded: 168 },
  { month: 'Jun', traders: 520, funded: 215 },
]

// ============================================
// 2. KONFIGURASI EMBLA CAROUSEL
// ============================================

const OPTIONS = {
  align: 'center' as const,
  loop: false,
  containScroll: 'trimSnaps' as const,
  skipSnaps: false,
  dragFree: false,
  speed: 1,
}

// ============================================
// UI COMPONENTS
// ============================================

function FeatureRow({ label, value, isHighlight }: { label: string; value: string | boolean | number; isHighlight?: boolean }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
      <span className="text-sm text-gray-400">{label}</span>
      <span className={cn(
        'text-sm font-medium flex items-center gap-1.5',
        isHighlight ? 'text-orange-400' : 'text-white'
      )}>
        {typeof value === 'boolean' ? (
          value ? <Check className="w-4 h-4 text-emerald-400" /> : <X className="w-4 h-4 text-red-400" />
        ) : (
          value
        )}
      </span>
    </div>
  )
}

function NavButton({
  onClick,
  direction,
  disabled,
}: {
  onClick: () => void
  direction: 'prev' | 'next'
  disabled?: boolean
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'w-10 h-10 flex items-center justify-center rounded-full',
        'bg-white/10 backdrop-blur-sm border border-white/10',
        'transition-all duration-300 ease-out',
        'hidden lg:flex',
        disabled
          ? 'opacity-30 cursor-not-allowed'
          : 'hover:bg-orange-500/30 hover:border-orange-500/60 hover:scale-110 active:scale-95'
      )}
    >
      {direction === 'prev' ? (
        <ChevronLeft className="w-5 h-5 text-white" />
      ) : (
        <ChevronRight className="w-5 h-5 text-white" />
      )}
    </button>
  )
}

function DotsIndicator({
  dots,
  selectedIndex,
  onDotClick,
  showArrows,
}: {
  dots: number
  selectedIndex: number
  onDotClick?: (index: number) => void
  showArrows: boolean
}) {
  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {Array.from({ length: dots }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick?.(i)}
          className={cn(
            'rounded-full transition-all duration-500 ease-out',
            i === selectedIndex ? 'bg-orange-500 w-8 h-1.5' : 'bg-white/20 w-2 h-2 hover:bg-white/40',
            onDotClick && 'cursor-pointer'
          )}
        />
      ))}
    </div>
  )
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function Pricing() {
  const [category, setCategory] = useState<CategoryType>('instant')
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)

  // Track window width for responsive calculations
  useEffect(() => {
    setWindowWidth(window.innerWidth)
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Filter packages by category
  const filteredPackages = useMemo(() =>
    pricingData.filter(p => p.type === category),
    [category]
  )

  // Calculate visible cards based on screen size (for navigation logic)
  const visibleCards = useMemo(() => {
    if (windowWidth >= 1024) return 4   // Desktop: 4 cards (flex-[0_0_25%])
    if (windowWidth >= 768) return 2      // Tablet: 2 cards (flex-[0_0_50%])
    return 1                              // Mobile: 1 card (flex-[0_0_100%])
  }, [windowWidth])

  // Total slides that can be shown
  const totalSlides = filteredPackages.length
  const maxScrollIndex = Math.max(0, totalSlides - visibleCards)

  // Calculate number of dots/pages (each dot represents one scroll position)
  const totalDots = maxScrollIndex + 1

  // Smart navigation: show if can scroll in either direction
  const showNavigation = windowWidth >= 768 && totalSlides > visibleCards
  const canScrollPrev = selectedIndex > 0
  const canScrollNext = selectedIndex < maxScrollIndex

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  // Reset carousel when category changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(0)
      setSelectedIndex(0)
    }
  }, [category, emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const currentCategory = categories.find(c => c.id === category)!

  return (
    <section id="pricing" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs font-semibold uppercase tracking-wider text-orange-400 mb-4"
          >
            Pricing Plans
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Choose Your <span className="text-orange-400">Funding Path</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-xl mx-auto"
          >
            Select the program that fits your trading style and goals
          </motion.p>
        </div>

        {/* Category Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={cn(
                'relative flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300',
                'border',
                category === cat.id
                  ? 'bg-white/5 border-orange-500/50 shadow-lg shadow-orange-500/10'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              )}
            >
              <div className={cn(
                'w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br',
                cat.color
              )}>
                <cat.icon className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <div className={cn(
                  'font-semibold text-sm',
                  category === cat.id ? 'text-white' : 'text-gray-300'
                )}>
                  {cat.label}
                </div>
                <div className="text-xs text-gray-500">{cat.subtitle}</div>
              </div>
              {category === cat.id && (
                <motion.div
                  layoutId="cat-indicator"
                  className={cn('absolute bottom-0 left-2 right-2 h-0.5 rounded-full', cat.color)}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Embla Carousel */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing py-12" ref={emblaRef}>
            <div className="flex">
              <AnimatePresence mode="wait">
                {filteredPackages.map((pkg, index) => (
                  <div
                    key={pkg.id}
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 px-3"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                        delay: Math.min(index * 0.1, 0.3)
                      }}
                      className={cn(
                        'relative h-full bg-white/5 backdrop-blur-sm border rounded-2xl p-6 pt-10 transition-all duration-300 ease-out',
                        'hover:bg-white/[0.07] hover:border-white/20',
                        pkg.isMostPopular
                          ? 'border-orange-500 shadow-lg shadow-orange-500/20'
                          : 'border-white/10'
                      )}
                    >
                      {/* Most Popular Badge */}
                      {pkg.isMostPopular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-xs font-bold uppercase tracking-wider text-black whitespace-nowrap shadow-lg shadow-orange-500/40 z-10">
                          Most Popular
                        </div>
                      )}

                      {/* Card Header */}
                      <div className="text-center mb-6 pb-6 border-b border-white/10">
                        <span className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                          {pkg.type === 'instant' ? 'Zero Challenge' : pkg.type === '1-phase' ? '1-Phase Eval' : '2-Phase Eval'}
                        </span>
                        <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                          {pkg.size}
                        </div>
                        <div className="mt-5">
                          <span className="text-2xl lg:text-3xl font-bold text-orange-400">
                            ${pkg.price}
                          </span>
                          <span className="text-xs text-gray-500 ml-1">one-time</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        <FeatureRow label="Profit Split" value={`${pkg.features.profitSplit}%`} isHighlight />
                        <FeatureRow label="Max Drawdown" value={`${pkg.features.maxDrawdown}%`} />
                        <FeatureRow label="Leverage" value={pkg.features.leverage} />
                        <FeatureRow label="News Trading" value={pkg.features.newsTrading} />
                        <FeatureRow label="Consistency Rule" value={pkg.features.consistencyRule} />
                      </div>

                      {/* CTA Button */}
                      <button
                        className={cn(
                          'w-full py-4 rounded-xl font-semibold transition-all duration-300 ease-out',
                          pkg.isMostPopular
                            ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-black hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 active:scale-[0.98]'
                            : 'bg-white/10 text-white border border-white/10 hover:bg-white/20 hover:border-orange-500/50 hover:-translate-y-1 active:scale-[0.98]'
                        )}
                      >
                        Get Started
                      </button>
                    </motion.div>
                  </div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6">
            {showNavigation ? (
              // Desktop: Arrows + Dots
              <div className="flex items-center justify-center gap-4">
                <NavButton onClick={scrollPrev} direction="prev" disabled={!canScrollPrev} />
                <DotsIndicator
                  dots={totalDots}
                  selectedIndex={selectedIndex}
                  onDotClick={scrollTo}
                  showArrows={true}
                />
                <NavButton onClick={scrollNext} direction="next" disabled={!canScrollNext} />
              </div>
            ) : windowWidth < 768 && totalSlides > 1 ? (
              // Mobile: Dots only (if more than 1 card)
              <DotsIndicator
                dots={filteredPackages.length}
                selectedIndex={selectedIndex}
                onDotClick={scrollTo}
                showArrows={false}
              />
            ) : null}
          </div>
        </div>

        {/* Chart Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto mt-20"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Growth Overview</h3>
                <p className="text-sm text-gray-400">Funded traders over time</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500" />
                  <span className="text-sm text-gray-400">Total Traders</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-sm text-gray-400">Funded</span>
                </div>
              </div>
            </div>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorTraders" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorFunded" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(5, 5, 5, 0.9)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      color: '#f8fafc',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="traders"
                    stroke="#f97316"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorTraders)"
                  />
                  <Area
                    type="monotone"
                    dataKey="funded"
                    stroke="#10b981"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorFunded)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}