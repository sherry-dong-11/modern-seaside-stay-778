import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Building, Home, Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ResponsiveContainer, LineChart, Line } from 'recharts';
interface PropertyTypeData {
  price: number;
  change: number;
}
interface StateMarketData {
  stateCode: string;
  stateName: string;
  properties: {
    newApartment: PropertyTypeData;
    newTownhouses: PropertyTypeData;
    newHouses: PropertyTypeData;
  };
}
const marketData: StateMarketData[] = [{
  stateCode: 'VIC',
  stateName: 'Victoria',
  properties: {
    newApartment: {
      price: 8500,
      change: 3.2
    },
    newTownhouses: {
      price: 6200,
      change: 2.8
    },
    newHouses: {
      price: 4800,
      change: -1.2
    }
  }
}, {
  stateCode: 'NSW',
  stateName: 'New South Wales',
  properties: {
    newApartment: {
      price: 12000,
      change: 1.8
    },
    newTownhouses: {
      price: 8500,
      change: 4.1
    },
    newHouses: {
      price: 6200,
      change: 2.5
    }
  }
}, {
  stateCode: 'QLD',
  stateName: 'Queensland',
  properties: {
    newApartment: {
      price: 7200,
      change: 4.6
    },
    newTownhouses: {
      price: 5800,
      change: 3.7
    },
    newHouses: {
      price: 4200,
      change: 5.2
    }
  }
}, {
  stateCode: 'ACT',
  stateName: 'Australian Capital Territory',
  properties: {
    newApartment: {
      price: 9800,
      change: 2.1
    },
    newTownhouses: {
      price: 7200,
      change: 1.9
    },
    newHouses: {
      price: 5500,
      change: -0.8
    }
  }
}, {
  stateCode: 'WA',
  stateName: 'Western Australia',
  properties: {
    newApartment: {
      price: 6800,
      change: 3.9
    },
    newTownhouses: {
      price: 5200,
      change: 4.8
    },
    newHouses: {
      price: 3800,
      change: 6.1
    }
  }
}, {
  stateCode: 'SA',
  stateName: 'South Australia',
  properties: {
    newApartment: {
      price: 6200,
      change: 2.7
    },
    newTownhouses: {
      price: 4800,
      change: 3.4
    },
    newHouses: {
      price: 3500,
      change: 4.3
    }
  }
}];

// Generate chart data for trends
const generateChartData = (change: number) => {
  const months = 6;
  const data = [];
  const baseValue = 100;
  const monthlyChange = change / months;
  for (let i = 0; i < months; i++) {
    data.push({
      month: i,
      value: baseValue + monthlyChange * i + (Math.random() - 0.5) * 2
    });
  }
  return data;
};
const propertyTypeIcons = {
  newApartment: Building2,
  newTownhouses: Building,
  newHouses: Home
};
interface PropertyRowProps {
  type: 'newApartment' | 'newTownhouses' | 'newHouses';
  label: string;
  price: number;
  change: number;
}
const PropertyRow: React.FC<PropertyRowProps> = ({
  type,
  label,
  price,
  change
}) => {
  const isPositive = change >= 0;
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;
  const PropertyIcon = propertyTypeIcons[type];
  return <motion.div className="relative p-3 rounded-xl bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group z-10 h-[120px] w-full flex flex-col justify-between" whileHover={{
    scale: 1.02,
    y: -2
  }} transition={{
    duration: 0.2
  }}>
      <div className="flex items-start gap-2 flex-1">
        <div className="p-1.5 rounded-lg bg-gradient-to-br from-primary to-primary-foreground shadow-sm flex-shrink-0">
          <PropertyIcon className="w-3.5 h-3.5 text-white" />
        </div>
        <div className="flex-1">
          <span className="text-xs font-semibold text-gray-900 block mb-1 leading-tight">{label}</span>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-900 leading-tight whitespace-nowrap">
              ${price.toLocaleString()}
            </span>
            <span className="text-xs text-gray-600 leading-tight font-medium">/m²</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-1">
        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold shadow-sm ${isPositive ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' : 'bg-gradient-to-r from-red-500 to-rose-500 text-white'}`}>
          <TrendIcon className="w-3 h-3" />
          <span>{Math.abs(change).toFixed(1)}%</span>
        </div>
      </div>
      
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
    </motion.div>;
};
interface StateCardProps {
  data: StateMarketData;
  propertyLabels: {
    newApartment: string;
    newTownhouses: string;
    newHouses: string;
  };
}
const StateCard: React.FC<StateCardProps> = ({
  data,
  propertyLabels
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return <motion.div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden cursor-pointer z-0" whileHover={{
    scale: 1.02,
    y: -4
  }} onClick={() => setIsExpanded(!isExpanded)} transition={{
    duration: 0.3,
    ease: "easeOut"
  }}>
      <div className="relative z-10">
        <div className="mb-8">
          <motion.h3 className="text-3xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300 drop-shadow-lg" animate={isExpanded ? {
          scale: 1.05
        } : {
          scale: 1
        }}>
            {data.stateCode}
          </motion.h3>
          <p className="text-base text-gray-200 font-semibold">
            {data.stateName}
          </p>
        </div>
        
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" animate={isExpanded ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.3
      }}>
          <PropertyRow type="newApartment" label={propertyLabels.newApartment} price={data.properties.newApartment.price} change={data.properties.newApartment.change} />
          <PropertyRow type="newTownhouses" label={propertyLabels.newTownhouses} price={data.properties.newTownhouses.price} change={data.properties.newTownhouses.change} />
          <PropertyRow type="newHouses" label={propertyLabels.newHouses} price={data.properties.newHouses.price} change={data.properties.newHouses.change} />
        </motion.div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-blue-400/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 to-blue-500/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
    </motion.div>;
};
export default function PropertyMarketSection() {
  const {
    t
  } = useLanguage();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return <section className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-transparent to-blue-600/20" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <motion.div className="max-w-5xl mx-auto text-center mb-20" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }}>
          <motion.h2 animate={{
          backgroundPosition: ["0%", "100%", "0%"]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }} className="text-5xl bg-gradient-to-r from-orange-400 via-white to-blue-400 bg-clip-text text-transparent mb-8 font-bold md:text-6xl drop-shadow-2xl">
            Property Market Trends
          </motion.h2>
          <motion.p className="text-xl text-gray-200 max-w-3xl mx-auto font-medium leading-relaxed" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            {t.propertyMarket.description}
          </motion.p>
        </motion.div>
        
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="visible">
          {marketData.map((state, index) => <motion.div key={state.stateCode} variants={cardVariants} whileInView="visible" viewport={{
          once: true
        }}>
              <StateCard data={state} propertyLabels={{
            newApartment: t.propertyMarket.propertyTypes.newApartment,
            newTownhouses: t.propertyMarket.propertyTypes.newTownhouses,
            newHouses: t.propertyMarket.propertyTypes.newHouses
          }} />
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
}