import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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

interface PropertyRowProps {
  label: string;
  price: number;
  change: number;
}

const PropertyRow: React.FC<PropertyRowProps> = ({ label, price, change }) => {
  const isPositive = change >= 0;
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;
  const isHot = Math.abs(change) > 4;
  
  return (
    <div className="flex items-center justify-between py-3 px-3 rounded-lg hover:bg-neutral-50/50 dark:hover:bg-neutral-800/50 transition-colors">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{label}</span>
        {isHot && <span className="text-xs">🔥</span>}
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
          ${price.toLocaleString()}/m²
        </span>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${
          isPositive 
            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
            : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
        }`}>
          <TrendIcon className="w-3 h-3" />
          <span>{isPositive ? '+' : ''}{change.toFixed(1)}%</span>
        </div>
      </div>
    </div>
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
  const hasHotMarket = data.properties.newHouses.change > 4 || data.properties.newApartment.change > 3;
  
  return (
    <div className="relative bg-card/90 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 group hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 transition-all duration-500 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/10">
      {hasHotMarket && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow-lg">
          🔥 HOT
        </div>
      )}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center shadow-sm">
            <h3 className="text-xl font-bold text-primary-600">
              {data.stateCode}
            </h3>
          </div>
          <div className="flex-1">
            <p className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-1">
              {data.stateName}
            </p>
            <p className="text-xs text-primary-500 font-medium uppercase tracking-wider">
              Australia • Live Data
            </p>
          </div>
        </div>
      </div>
      
      <div className="space-y-2 bg-neutral-50/50 dark:bg-neutral-800/20 rounded-xl p-4">
        <PropertyRow
          label={propertyLabels.newApartment}
          price={data.properties.newApartment.price}
          change={data.properties.newApartment.change}
        />
        <PropertyRow
          label={propertyLabels.newTownhouses}
          price={data.properties.newTownhouses.price}
          change={data.properties.newTownhouses.change}
        />
        <PropertyRow
          label={propertyLabels.newHouses}
          price={data.properties.newHouses.price}
          change={data.properties.newHouses.change}
        />
      </div>
    </div>
  );
};

export default function PropertyMarketSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-accent/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="animate-pulse">🔥</span>
            {t.propertyMarket.trending}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent mb-2">
            {t.propertyMarket.title}
          </h2>
          <p className="text-lg md:text-xl text-primary-600 font-medium mb-4">
            {t.propertyMarket.subtitle}
          </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            {t.propertyMarket.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {marketData.map((state) => (
            <StateCard
              key={state.stateCode}
              data={state}
              propertyLabels={{
                newApartment: t.propertyMarket.propertyTypes.newApartment,
                newTownhouses: t.propertyMarket.propertyTypes.newTownhouses,
                newHouses: t.propertyMarket.propertyTypes.newHouses,
              }}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-primary-500 font-medium">
            {t.propertyMarket.lastUpdated}
          </p>
        </div>
        
      </div>
    </section>
  );
}