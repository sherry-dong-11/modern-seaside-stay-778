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
    <section className="py-8 bg-orange-500">
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

          {/* Dual Calculator Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Home Loan Calculator */}
            <Card className="bg-card border border-border/20 shadow-lg rounded-xl">
              <CardContent className="p-6 lg:p-8">
                {/* Title */}
                <div className="mb-6">
                  <h3 className="text-primary font-semibold text-xl mb-1">
                    Home Loan Calculator
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Find out how much home you can afford
                  </p>
                </div>

                {/* Calculator Fields Grid */}
                <div className="space-y-6">
                  {/* Top Row - Two columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">$ --</div>
                      <div className="text-sm text-muted-foreground">Suggested target price</div>
                    </div>
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                        $ --
                        <span className="text-xs align-super ml-1">SM</span>
                      </div>
                      <div className="text-sm text-muted-foreground">BuyAbility</div>
                    </div>
                  </div>

                  {/* Bottom Row - Three columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">$ --</div>
                      <div className="text-sm text-muted-foreground">Mo. payment</div>
                    </div>
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">-- %</div>
                      <div className="text-sm text-muted-foreground">Today's rate</div>
                    </div>
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">-- %</div>
                      <div className="text-sm text-muted-foreground">APR</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
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
            <Card className="bg-card border border-border/20 shadow-lg rounded-xl">
              <CardContent className="p-6 lg:p-8">
                {/* Title */}
                <div className="mb-6">
                  <h3 className="text-primary font-semibold text-xl mb-1">
                    Stamp Duty Calculator
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Estimate your stamp duty costs
                  </p>
                </div>

                {/* Input Fields */}
                <div className="space-y-4 mb-6">
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
                        <SelectValue placeholder="Select buyer type" />
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
                        <SelectValue placeholder="Select state" />
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
                </div>

                {/* Result Display */}
                <div className="mb-6">
                  <div className="bg-muted/30 rounded-lg p-4 text-center">
                    <div className="text-sm text-muted-foreground mb-1">Estimated Stamp Duty</div>
                    <div className="text-2xl lg:text-3xl font-bold text-foreground">
                      {stampDuty ? `$${stampDuty.toLocaleString()}` : '$--'}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div>
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