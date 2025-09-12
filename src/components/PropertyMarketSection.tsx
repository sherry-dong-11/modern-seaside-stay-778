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
  
  return (
    <div className="flex items-center justify-between py-2 border-b border-neutral-200 dark:border-neutral-300 last:border-b-0">
      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-700">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-900">
          ${price.toLocaleString()}/m²
        </span>
        <div className={`flex items-center gap-1 text-xs font-medium ${
          isPositive 
            ? 'text-green-600 dark:text-green-600' 
            : 'text-red-600 dark:text-red-600'
        }`}>
          <TrendIcon className="w-3 h-3" />
          <span>{Math.abs(change).toFixed(1)}%</span>
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
  return (
    <div className="card-modern group hover:shadow-primary/10 transition-all duration-300">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-900 mb-1">
          {data.stateCode}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-600">
          {data.stateName}
        </p>
      </div>
      
      <div className="space-y-1">
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
    <section className="py-6 bg-muted">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            {t.propertyMarket.title}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            {t.propertyMarket.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        
        <div className="text-center mt-8">
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            {t.propertyMarket.lastUpdated}
          </p>
        </div>
      </div>
    </section>
  );
}