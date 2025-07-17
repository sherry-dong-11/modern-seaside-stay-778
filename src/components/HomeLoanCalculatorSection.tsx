import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export const HomeLoanCalculatorSection = () => {
  const [propertyPrice, setPropertyPrice] = useState("");
  const [buyerType, setBuyerType] = useState("");
  const [state, setState] = useState("");
  const [stampDuty, setStampDuty] = useState<number | null>(null);

  const calculateStampDuty = () => {
    // Simplified calculation - in reality this would be more complex
    const price = parseFloat(propertyPrice.replace(/,/g, ''));
    if (price && state) {
      const rate = state === "VIC" ? 0.055 : 0.045; // Simplified rates
      const calculated = price * rate;
      setStampDuty(calculated);
    }
  };

  return (
    <section className="py-8 bg-gradient-to-br from-primary-500 to-primary-600">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              Property Purchase Calculators
            </h2>
            <p className="text-lg text-white">
              Calculate your loan capacity and estimate stamp duty costs
            </p>
          </div>

          {/* Dual Calculator Layout - Flex for consistent heights */}
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Home Loan Calculator */}
            <Card className="bg-card border border-border/20 shadow-lg rounded-xl flex-1 min-h-[480px]">
              <CardContent className="p-4 lg:p-6 h-full flex flex-col">
                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-primary font-semibold text-xl mb-1">
                    Home Loan Calculator
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Find out how much home you can afford
                  </p>
                </div>

                {/* Calculator Fields Grid */}
                <div className="space-y-3 flex-1">
                  {/* Top Row - Two columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="text-xl lg:text-2xl font-bold text-foreground mb-1">$ --</div>
                      <div className="text-xs text-muted-foreground">Suggested target price</div>
                    </div>
                    <div>
                      <div className="text-xl lg:text-2xl font-bold text-foreground mb-1">
                        $ --
                        <span className="text-xs align-super ml-1">SM</span>
                      </div>
                      <div className="text-xs text-muted-foreground">BuyAbility</div>
                    </div>
                  </div>

                  {/* Bottom Row - Three columns condensed */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <div className="text-xl lg:text-2xl font-bold text-foreground mb-1">$ --</div>
                      <div className="text-xs text-muted-foreground">Mo. payment</div>
                    </div>
                    <div>
                      <div className="text-xl lg:text-2xl font-bold text-foreground mb-1">-- %</div>
                      <div className="text-xs text-muted-foreground">Today's rate</div>
                    </div>
                    <div>
                      <div className="text-xl lg:text-2xl font-bold text-foreground mb-1">-- %</div>
                      <div className="text-xs text-muted-foreground">APR</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button - Pushed to bottom */}
                <div className="mt-auto pt-4">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-6 rounded-lg text-lg transition-colors duration-200"
                    size="lg"
                  >
                    Let's get started
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stamp Duty Calculator */}
            <Card className="bg-card border border-border/20 shadow-lg rounded-xl flex-1 min-h-[480px]">
              <CardContent className="p-4 lg:p-6 h-full flex flex-col">
                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-primary font-semibold text-xl mb-1">
                    Stamp Duty Calculator
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Estimate your stamp duty costs
                  </p>
                </div>

                {/* Input Fields */}
                <div className="space-y-4 flex-1">
                  {/* Property Price */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Property Price
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g. 750,000"
                      value={propertyPrice}
                      onChange={(e) => setPropertyPrice(e.target.value)}
                      className="text-lg"
                    />
                  </div>

                  {/* Buyer Type */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Buyer Type
                    </label>
                    <Select value={buyerType} onValueChange={setBuyerType}>
                      <SelectTrigger className="text-lg">
                        <SelectValue placeholder="Select buyer type" className="text-lg" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="first-home">First Home Buyer</SelectItem>
                        <SelectItem value="investor">Investor</SelectItem>
                        <SelectItem value="owner-occupier">Owner Occupier</SelectItem>
                        <SelectItem value="foreign-buyer">Foreign Buyer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* State */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      State
                    </label>
                    <Select value={state} onValueChange={setState}>
                      <SelectTrigger className="text-lg">
                        <SelectValue placeholder="Select state" className="text-lg" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="VIC">Victoria</SelectItem>
                        <SelectItem value="NSW">New South Wales</SelectItem>
                        <SelectItem value="QLD">Queensland</SelectItem>
                        <SelectItem value="SA">South Australia</SelectItem>
                        <SelectItem value="WA">Western Australia</SelectItem>
                        <SelectItem value="TAS">Tasmania</SelectItem>
                        <SelectItem value="NT">Northern Territory</SelectItem>
                        <SelectItem value="ACT">Australian Capital Territory</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Result Display */}
                  <div className="mt-auto">
                    <div className="bg-muted/30 rounded-lg p-4 text-center">
                      <div className="text-sm text-muted-foreground mb-1">Estimated Stamp Duty</div>
                      <div className="text-xl lg:text-2xl font-bold text-foreground">
                        {stampDuty ? `$${stampDuty.toLocaleString()}` : '$--'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button - Aligned to bottom */}
                <div className="pt-4">
                  <Button 
                    onClick={calculateStampDuty}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-6 rounded-lg text-lg transition-colors duration-200"
                    size="lg"
                    disabled={!propertyPrice || !state}
                  >
                    Calculate Stamp Duty
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};