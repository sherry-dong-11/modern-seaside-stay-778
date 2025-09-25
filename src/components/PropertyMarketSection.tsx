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

const marketData: StateMarketData[] = [
  {
    stateCode: 'VIC',
    stateName: 'Victoria',
    properties: {
      newApartment: { price: 8500, change: 3.2 },
      newTownhouses: { price: 6200, change: 2.8 },
      newHouses: { price: 4800, change: -1.2 },
    },
  },
  {
    stateCode: 'NSW',
    stateName: 'New South Wales',
    properties: {
      newApartment: { price: 12000, change: 1.8 },
      newTownhouses: { price: 8500, change: 4.1 },
      newHouses: { price: 6200, change: 2.5 },
    },
  },
  {
    stateCode: 'QLD',
    stateName: 'Queensland',
    properties: {
      newApartment: { price: 7200, change: 4.6 },
      newTownhouses: { price: 5800, change: 3.7 },
      newHouses: { price: 4200, change: 5.2 },
    },
  },
  {
    stateCode: 'ACT',
    stateName: 'Australian Capital Territory',
    properties: {
      newApartment: { price: 9800, change: 2.1 },
      newTownhouses: { price: 7200, change: 1.9 },
      newHouses: { price: 5500, change: -0.8 },
    },
  },
  {
    stateCode: 'WA',
    stateName: 'Western Australia',
    properties: {
      newApartment: { price: 6800, change: 3.9 },
      newTownhouses: { price: 5200, change: 4.8 },
      newHouses: { price: 3800, change: 6.1 },
    },
  },
  {
    stateCode: 'SA',
    stateName: 'South Australia',
    properties: {
      newApartment: { price: 6200, change: 2.7 },
      newTownhouses: { price: 4800, change: 3.4 },
      newHouses: { price: 3500, change: 4.3 },
    },
  },
];

// Generate chart data for trends
const generateChartData = (change: number) => {
  const months = 6;
  const data = [];
  const baseValue = 100;
  const monthlyChange = change / months;
  
  for (let i = 0; i < months; i++) {
    data.push({
      month: i,
      value: baseValue + (monthlyChange * i) + (Math.random() - 0.5) * 2
    });
  }
  return data;
};

const propertyTypeIcons = {
  newApartment: Building2,
  newTownhouses: Building,
  newHouses: Home,
};

interface PropertyRowProps {
  type: 'newApartment' | 'newTownhouses' | 'newHouses';
  label: string;
  price: number;
  change: number;
}

const PropertyRow: React.FC<PropertyRowProps> = ({ type, label, price, change }) => {
  const isPositive = change >= 0;
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;
  const PropertyIcon = propertyTypeIcons[type];
  
  return (
    <motion.div 
      className="relative p-4 rounded-xl bg-gradient-to-r from-background via-background to-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <PropertyIcon className="w-4 h-4 text-primary" />
          </div>
          <div>
            <span className="text-sm font-medium text-foreground">{label}</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg font-bold text-foreground">
                ${price.toLocaleString()}
              </span>
              <span className="text-xs text-muted-foreground">/m²</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-16 h-8 flex items-center justify-center">
            <div className={`w-12 h-1 rounded-full ${isPositive ? 'bg-green-500' : 'bg-red-500'}`} />
          </div>
          <motion.div 
            className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
              isPositive 
                ? 'bg-green-100 text-green-700 border border-green-200' 
                : 'bg-red-100 text-red-700 border border-red-200'
            }`}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <TrendIcon className="w-3 h-3" />
            <span>{Math.abs(change).toFixed(1)}%</span>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

interface StateCardProps {
  data: StateMarketData;
  propertyLabels: {
    newApartment: string;
    newTownhouses: string;
    newHouses: string;
  };
}

const StateCard: React.FC<StateCardProps> = ({ data, propertyLabels }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      className="relative p-6 rounded-2xl bg-gradient-to-br from-card via-card to-muted/20 border border-border/50 hover:border-primary/40 transition-all duration-500 group overflow-hidden cursor-pointer"
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={() => setIsExpanded(!isExpanded)}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="relative z-10">
        <div className="mb-6">
          <motion.h3 
            className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300"
            animate={isExpanded ? { scale: 1.05 } : { scale: 1 }}
          >
            {data.stateCode}
          </motion.h3>
          <p className="text-sm text-muted-foreground font-medium">
            {data.stateName}
          </p>
        </div>
        
        <motion.div 
          className="space-y-4"
          animate={isExpanded ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <PropertyRow
            type="newApartment"
            label={propertyLabels.newApartment}
            price={data.properties.newApartment.price}
            change={data.properties.newApartment.change}
          />
          <PropertyRow
            type="newTownhouses"
            label={propertyLabels.newTownhouses}
            price={data.properties.newTownhouses.price}
            change={data.properties.newTownhouses.change}
          />
          <PropertyRow
            type="newHouses"
            label={propertyLabels.newHouses}
            price={data.properties.newHouses.price}
            change={data.properties.newHouses.change}
          />
        </motion.div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
    </motion.div>
  );
};

export default function PropertyMarketSection() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-16 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent mb-6"
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            Property Market Trends
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.propertyMarket.description}
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {marketData.map((state, index) => (
            <motion.div
              key={state.stateCode}
              variants={cardVariants}
              whileInView="visible"
              viewport={{ once: true }}
            >
              <StateCard
                data={state}
                propertyLabels={{
                  newApartment: t.propertyMarket.propertyTypes.newApartment,
                  newTownhouses: t.propertyMarket.propertyTypes.newTownhouses,
                  newHouses: t.propertyMarket.propertyTypes.newHouses,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}