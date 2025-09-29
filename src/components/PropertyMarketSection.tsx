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
  return <motion.div className="relative p-4 rounded-xl bg-gradient-to-br from-white/80 via-white/70 to-slate-50/80 backdrop-blur-sm border border-slate-200/50 hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 group z-10 h-[110px] w-full flex flex-col justify-between overflow-hidden" whileHover={{
    scale: 1.03,
    y: -2
  }} transition={{
    duration: 0.2
  }}>
      <div className="flex items-start gap-2 flex-1">
        <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex-shrink-0 shadow-sm">
          <PropertyIcon className="w-4 h-4 text-primary" />
        </div>
        <div className="flex-1 min-w-0 overflow-hidden">
          <span className="text-xs font-semibold text-slate-700 block mb-1 truncate leading-tight">{label}</span>
          <div className="flex flex-col">
            <span className="text-sm font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent truncate leading-tight">
              ${price.toLocaleString()}
            </span>
            <span className="text-xs text-slate-500 leading-tight">/m²</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-1">
        <motion.div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm ${isPositive ? 'bg-gradient-to-r from-primary/90 to-accent/90 text-white border border-primary/30' : 'bg-gradient-to-r from-orange-500/90 to-red-500/90 text-white border border-orange-400/30'}`} animate={{
        scale: [1, 1.05, 1]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }}>
          <TrendIcon className="w-3 h-3" />
          <span>{Math.abs(change).toFixed(1)}%</span>
        </motion.div>
      </div>
      
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/15 via-primary/10 to-accent/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />
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
  return <motion.div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-sm border border-white/20 hover:border-primary/60 shadow-2xl hover:shadow-primary/20 transition-all duration-500 group overflow-hidden cursor-pointer z-0" whileHover={{
    scale: 1.02,
    y: -5
  }} onClick={() => setIsExpanded(!isExpanded)} transition={{
    duration: 0.3,
    ease: "easeOut"
  }}>
      <div className="relative z-10">
        <div className="mb-6">
          <motion.h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2 group-hover:from-primary group-hover:to-accent transition-all duration-300" animate={isExpanded ? {
          scale: 1.05
        } : {
          scale: 1
        }}>
            {data.stateCode}
          </motion.h3>
          <p className="text-sm text-slate-600 font-medium">
            {data.stateName}
          </p>
        </div>
        
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" animate={isExpanded ? {
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
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
      <div className="absolute -top-2 -left-2 w-16 h-16 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-all duration-700 delay-100" />
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
  return <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20" />
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      
      <div className="container relative z-10">
        <motion.div className="max-w-4xl mx-auto text-center mb-16" initial={{
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
        }} className="text-5xl bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent mb-6 font-bold md:text-6xl">
            Property Market Trends
          </motion.h2>
          <motion.p className="text-xl text-white/80 max-w-2xl mx-auto" initial={{
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