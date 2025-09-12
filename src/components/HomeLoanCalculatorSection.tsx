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
  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Property Purchase Calculator</h2>
          <p className="text-lg text-muted-foreground">Calculate your home loan repayments and stamp duty</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Home Loan Calculator */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Home Loan Calculator
              </h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="property-price">Property Price</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="property-price"
                      type="text"
                      value={propertyPrice}
                      onChange={(e) => setPropertyPrice(e.target.value)}
                      className="pl-9"
                      placeholder="750,000"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="deposit">Deposit</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="deposit"
                      type="text"
                      value={deposit}
                      onChange={(e) => setDeposit(e.target.value)}
                      className="pl-9"
                      placeholder="150,000"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="interest-rate">Interest Rate (%)</Label>
                  <div className="relative">
                    <Percent className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="interest-rate"
                      type="text"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="pl-9"
                      placeholder="6.5"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="loan-term">Loan Term (years)</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="loan-term"
                      type="text"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(e.target.value)}
                      className="pl-9"
                      placeholder="30"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="repayment-type">Repayment Type</Label>
                  <Select value={repaymentType} onValueChange={(value: "principal" | "interest") => setRepaymentType(value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="principal">Principal & Interest</SelectItem>
                      <SelectItem value="interest">Interest Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Monthly Repayment</p>
                  <p className="text-2xl font-bold text-primary">
                    ${calculateMonthlyRepayment().toLocaleString('en-AU', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Stamp Duty Calculator */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Stamp Duty Calculator
              </h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="stamp-property-price">Property Price</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="stamp-property-price"
                      type="text"
                      value={stampPropertyPrice}
                      onChange={(e) => setStampPropertyPrice(e.target.value)}
                      className="pl-9"
                      placeholder="750,000"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="buyer-type">Buyer Type</Label>
                  <Select value={buyerType} onValueChange={setBuyerType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select buyer type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="first-home">First Home Buyer</SelectItem>
                      <SelectItem value="investor">Investor</SelectItem>
                      <SelectItem value="owner-occupier">Owner Occupier</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="state">State</Label>
                  <Select value={state} onValueChange={setState}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="VIC">Victoria</SelectItem>
                      <SelectItem value="NSW">New South Wales</SelectItem>
                      <SelectItem value="QLD">Queensland</SelectItem>
                      <SelectItem value="WA">Western Australia</SelectItem>
                      <SelectItem value="SA">South Australia</SelectItem>
                      <SelectItem value="TAS">Tasmania</SelectItem>
                      <SelectItem value="ACT">Australian Capital Territory</SelectItem>
                      <SelectItem value="NT">Northern Territory</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button onClick={calculateStampDuty} className="w-full">
                  Calculate Stamp Duty
                </Button>
                
                {stampDuty !== null && (
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Estimated Stamp Duty</p>
                    <p className="text-2xl font-bold text-primary">
                      ${stampDuty.toLocaleString('en-AU', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};