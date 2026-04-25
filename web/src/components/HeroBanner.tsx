import { Link } from "react-router-dom";

interface HeroBannerProps {
  badge?: string;
  mainHeading?: string;
  subHeading?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  productImage?: string;
  features?: Array<{ label: string; value: string }>;
}

export const HeroBanner = ({
  badge = "LIMITED RELEASE: EDITION 001",
  mainHeading = "Minimal",
  subHeading = "Maximum Presence.",
  description = "Engineered for those who move in silence. The Lumina Silhouette combines surgical precision with unmatched technical sophistication.",
  primaryButtonText = "SHOP NOW",
  primaryButtonLink = "/products",
  secondaryButtonText = "EXPLORE COLLECTION",
  secondaryButtonLink = "/products",
  productImage = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
  features = [
    { label: "ULTRALIGHT", value: "420g" },
    { label: "FIBER CARBON", value: "Carbon" },
    { label: "ECO MADE", value: "Recycled" },
  ],
}: HeroBannerProps) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 blur-3xl opacity-40 pointer-events-none" />
      
      {/* Main container with border glow */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="relative rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-md overflow-hidden p-8 lg:p-16">
          {/* Glow effect behind */}
          <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-emerald-500/10 to-transparent blur-2xl opacity-50 pointer-events-none" />
          
          <div className="relative z-10">
            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-20">
              {/* Left Content */}
              <div className="flex flex-col space-y-8">
                {/* Badge */}
                <div className="inline-flex w-fit items-center space-x-2">
                  <div className="h-px w-8 bg-emerald-500/50" />
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/80 font-medium">
                    {badge}
                  </p>
                </div>

                {/* Heading */}
                <div className="space-y-3">
                  <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                    {mainHeading}
                    <span className="block">
                      <span className="text-emerald-400 italic font-light">
                        {subHeading}
                      </span>
                    </span>
                  </h1>
                </div>

                {/* Description */}
                <p className="text-base lg:text-lg leading-relaxed text-white/60 max-w-md">
                  {description}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {/* Primary Button */}
                  <Link
                    to={primaryButtonLink}
                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-black font-bold uppercase text-sm tracking-wider rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 active:scale-95"
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center gap-2">
                      {primaryButtonText}
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11l-4-4m0 0l-4 4m4-4v12" />
                      </svg>
                    </span>
                  </Link>

                  {/* Secondary Button */}
                  <Link
                    to={secondaryButtonLink}
                    className="group inline-flex items-center justify-center px-8 py-4 border border-emerald-500/40 text-white font-bold uppercase text-sm tracking-wider rounded-full transition-all duration-300 hover:bg-emerald-500/10 hover:border-emerald-500/60"
                  >
                    <span className="flex items-center gap-2">
                      {secondaryButtonText}
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right Content - Product Image */}
              <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
                {/* Image glow background */}
                <div className="absolute -inset-20 bg-gradient-to-br from-emerald-500/30 via-emerald-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
                
                {/* Product card with rotation */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/40 via-transparent to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  <img
                    src={productImage}
                    alt="Featured Product"
                    className="relative w-full h-full object-cover rounded-2xl transform -rotate-12 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 ease-out shadow-2xl"
                  />
                  
                  {/* Shine effect overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Features Stats */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 pt-8 lg:pt-12 border-t border-emerald-500/20">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
                    {feature.label}
                  </p>
                  <p className="text-2xl lg:text-3xl font-bold text-white">
                    {feature.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
     
    </div>
  );
};

export default HeroBanner;

