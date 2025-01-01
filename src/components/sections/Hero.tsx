import Button from '../ui/Button';
import { motion } from '../ui/Motion';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-purple-500/20">
              <span className="text-sm text-purple-600 dark:text-purple-400">Discover the power of colors</span>
            </div> */}
            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
              Discover your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                perfect colors
              </span>
              <br />
              instantly!
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg">
              Discover curated color collections for your next design project. From trending palettes to timeless combinations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg">
                Explore palettes
              </Button>
              <Button variant="secondary" size="lg" className="text-lg text-gray-900 dark:text-white">
                Learn more
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Interactive Color Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square relative">
              {/* Main display area with orbital elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 
                dark:from-purple-900/10 dark:to-indigo-900/10 
                backdrop-blur-xl rounded-3xl overflow-hidden 
                border border-white/20 dark:border-gray-700/30
                shadow-[0_0_50px_-12px_rgba(139,92,246,0.25)] dark:shadow-[0_0_50px_-12px_rgba(139,92,246,0.15)]
                bg-white/[0.02] dark:bg-gray-900/[0.02]">
                {[
                  { color: '#8B5CF6', duration: 15, offset: 0, size: 'h-[32rem] w-[32rem]', orbit: '85%' },
                  { color: '#6366F1', duration: 20, offset: 90, size: 'h-[28rem] w-[28rem]', orbit: '65%' },
                  { color: '#A855F7', duration: 25, offset: 180, size: 'h-[24rem] w-[24rem]', orbit: '45%' },
                  { color: '#7C3AED', duration: 30, offset: 270, size: 'h-[20rem] w-[20rem]', orbit: '35%' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${item.size} rounded-2xl shadow-lg transform -translate-x-1/2 -translate-y-1/2`}
                    style={{
                      backgroundColor: item.color,
                      left: '30%',
                      top: '30%',
                      boxShadow: `0 8px 32px ${item.color}33`
                    }}
                    animate={{
                      rotate: [item.offset, item.offset + 360],
                    }}
                    transition={{
                      rotate: {
                        duration: item.duration,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                    whileHover={{
                      scale: 1.1,
                      zIndex: 10,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        transform: `translateY(-${item.orbit})`,
                      }}
                      animate={{
                        rotate: [-item.offset, -item.offset - 360],
                      }}
                      transition={{
                        rotate: {
                          duration: item.duration,
                          repeat: Infinity,
                          ease: "linear"
                        }
                      }}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-white/30 to-transparent rounded-2xl" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;