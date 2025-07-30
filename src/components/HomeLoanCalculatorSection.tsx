import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { DollarSign, CreditCard, Percent, Calendar, Phone } from "lucide-react";
import { useState } from "react";
export const HomeLoanCalculatorSection = () => {
  // Home Loan Calculator state
  const [propertyPrice, setPropertyPrice] = useState("750000");
  const [deposit, setDeposit] = useState("150000");
  const [interestRate, setInterestRate] = useState("6.5");
  const [loanTerm, setLoanTerm] = useState("30");
  const [repaymentType, setRepaymentType] = useState<"principal" | "interest">("principal");

  // Stamp Duty Calculator state
  const [stampPropertyPrice, setStampPropertyPrice] = useState("");
  const [buyerType, setBuyerType] = useState("");
  const [state, setState] = useState("");
  const [stampDuty, setStampDuty] = useState<number | null>(null);

  // Calculate monthly repayment
  const calculateMonthlyRepayment = () => {
    const price = parseFloat(propertyPrice) || 0;
    const dep = parseFloat(deposit) || 0;
    const rate = parseFloat(interestRate) || 0;
    const term = parseFloat(loanTerm) || 0;
    const loanAmount = price - dep;
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = term * 12;
    if (repaymentType === "interest") {
      return loanAmount * monthlyRate;
    } else {
      const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      return monthlyPayment;
    }
  };
  const calculateStampDuty = () => {
    const price = parseFloat(stampPropertyPrice.replace(/,/g, ''));
    if (price && state) {
      const rate = state === "VIC" ? 0.055 : 0.045;
      const calculated = price * rate;
      setStampDuty(calculated);
    }
  };
  return <section className="py-6 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-6 text-center">
            <h2 className="lg:text-4xl mb-2 text-left text-slate-950 font-semibold text-2xl">
              Property Purchase Calculators
            </h2>
            <p className="text-left text-base text-slate-500">
              Calculate your loan capacity and estimate stamp duty costs
            </p>
          </div>

          {/* Dual Calculator Layout - Flex for consistent heights */}
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Home Loan Calculator */}
            <Card className="bg-card border border-border/20 shadow-lg rounded-xl flex-1 min-h-[480px]">
              <CardContent className="p-3 lg:p-4 h-full flex flex-col">
                {/* Title */}
                <div className="mb-3">
                  <h3 className="text-primary font-semibold text-xl mb-1">
                    Home Loan Calculator
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Calculate your monthly repayments
                  </p>
                </div>

                {/* Form Section - White Card */}
                <Card className="bg-white border border-gray-200 rounded-lg mb-3 flex-1">
                  <CardContent className="p-3 lg:p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 items-center">
                      {/* Property Price */}
                      <div className="space-y-1">
                        <Label className="text-xs font-medium text-gray-600">Estimated Property Price</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input type="text" value={propertyPrice} onChange={e => setPropertyPrice(e.target.value)} className="pl-9 text-sm border-gray-300" placeholder="750000" />
                        </div>
                      </div>

                      {/* Deposit */}
                      <div className="space-y-1">
                        <Label className="text-xs font-medium text-gray-600">Deposit</Label>
                        <div className="relative">
                          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input type="text" value={deposit} onChange={e => setDeposit(e.target.value)} className="pl-9 text-sm border-gray-300" placeholder="150000" />
                        </div>
                      </div>

                      {/* Interest Rate */}
                      <div className="space-y-1">
                        <Label className="text-xs font-medium text-gray-600">Interest Rate</Label>
                        <div className="relative">
                          <Percent className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input type="text" value={interestRate} onChange={e => setInterestRate(e.target.value)} className="pr-9 text-sm border-gray-300" placeholder="6.5" />
                        </div>
                      </div>

                      {/* Loan Term */}
                      <div className="space-y-1">
                        <Label className="text-xs font-medium text-gray-600">Loan Term</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input type="text" value={loanTerm} onChange={e => setLoanTerm(e.target.value)} className="pl-9 pr-12 text-sm border-gray-300" placeholder="30" />
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">Years</span>
                        </div>
                      </div>
                    </div>

                    {/* Repayment Type Toggle */}
                    <div className="space-y-2">
                      <Label className="text-xs font-medium text-gray-600">Repayment Type</Label>
                      <div className="flex bg-gray-100 rounded-lg p-1">
                        <button onClick={() => setRepaymentType("principal")} className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors ${repaymentType === "principal" ? "bg-orange-500 text-white shadow-sm" : "text-gray-600 hover:text-gray-800"}`}>
                          Principal & Interest
                        </button>
                        <button onClick={() => setRepaymentType("interest")} className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors ${repaymentType === "interest" ? "bg-gray-700 text-white shadow-sm" : "text-gray-600 hover:text-gray-800"}`}>
                          Interest Only
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Result Block - Dark Background */}
                <div className="bg-gray-800 text-white rounded-lg p-4 mt-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Left Side - Repayment */}
                    <div>
                      <div className="text-sm text-gray-300 mb-1">Estimated repayment</div>
                      <div className="text-2xl lg:text-3xl font-bold">
                        ${Math.round(calculateMonthlyRepayment()).toLocaleString()} /month
                      </div>
                    </div>

                    {/* Right Side - Contact */}
                    <div className="space-y-2">
                      <div className="text-sm text-gray-300">What's next?</div>
                      
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200" size="sm">
                        <Phone className="w-4 h-4 mr-2" />
                        Contact Agent
                      </Button>
                    </div>
                  </div>
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
                    <Input type="text" placeholder="e.g. 750,000" value={stampPropertyPrice} onChange={e => setStampPropertyPrice(e.target.value)} className="text-lg" />
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
                  <Button onClick={calculateStampDuty} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-6 rounded-lg text-lg transition-colors duration-200" size="lg" disabled={!stampPropertyPrice || !state}>
                    Calculate Stamp Duty
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};