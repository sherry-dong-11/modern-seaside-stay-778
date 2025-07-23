import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, DollarSign, TrendingUp, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ToolsHubSection() {
  const { t } = useLanguage();
  
  // Home Loan Calculator State
  const [loanData, setLoanData] = useState({
    propertyPrice: 750000,
    deposit: 150000,
    interestRate: 6.5,
    loanTerm: 30,
    repaymentType: "principal"
  });

  // Stamp Duty Calculator State
  const [stampDutyData, setStampDutyData] = useState({
    propertyPrice: 750000,
    buyerType: "first-home",
    state: "VIC",
    stampDuty: 0
  });

  const calculateMonthlyRepayment = () => {
    const principal = loanData.propertyPrice - loanData.deposit;
    const monthlyRate = loanData.interestRate / 100 / 12;
    const numPayments = loanData.loanTerm * 12;
    
    if (loanData.repaymentType === "interest") {
      return (principal * monthlyRate).toFixed(2);
    }
    
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
      (Math.pow(1 + monthlyRate, numPayments) - 1);
    return monthlyPayment.toFixed(2);
  };

  const calculateStampDuty = () => {
    const price = stampDutyData.propertyPrice;
    let duty = 0;
    
    if (stampDutyData.state === "VIC") {
      if (price <= 25000) duty = price * 0.014;
      else if (price <= 130000) duty = 350 + (price - 25000) * 0.024;
      else if (price <= 960000) duty = 2870 + (price - 130000) * 0.06;
      else duty = 52670 + (price - 960000) * 0.055;
      
      if (stampDutyData.buyerType === "first-home" && price <= 600000) {
        duty = Math.max(0, duty - 10000);
      }
    }
    
    return duty.toFixed(0);
  };

  const tools = [
    {
      id: "home-loan",
      title: "Home Loan Calculator",
      description: "Calculate your monthly repayments",
      icon: Calculator,
      color: "bg-orange-50 text-orange-600"
    },
    {
      id: "stamp-duty",
      title: "Stamp Duty Calculator", 
      description: "Estimate stamp duty costs",
      icon: FileText,
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: "investment",
      title: "Investment Calculator",
      description: "Analyze property returns",
      icon: TrendingUp,
      color: "bg-green-50 text-green-600"
    },
    {
      id: "affordability",
      title: "Affordability Calculator",
      description: "See what you can afford",
      icon: DollarSign,
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section className="section-sm bg-warm-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Property Tools Hub
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional-grade calculators to help you make informed property decisions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tools Grid */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Card key={tool.id} className="fintech-card cursor-pointer hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-xl ${tool.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-charcoal mb-2">{tool.title}</h3>
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Calculator Section */}
          <div className="lg:col-span-2">
            <Card className="tools-hub-card">
              <CardHeader>
                <CardTitle className="text-charcoal">Financial Calculators</CardTitle>
                <CardDescription>Get accurate estimates for your property investment</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="home-loan" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="home-loan">Home Loan</TabsTrigger>
                    <TabsTrigger value="stamp-duty">Stamp Duty</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="home-loan" className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="property-price" className="text-charcoal font-medium">Property Price</Label>
                          <Input
                            id="property-price"
                            type="number"
                            value={loanData.propertyPrice}
                            onChange={(e) => setLoanData({...loanData, propertyPrice: parseInt(e.target.value) || 0})}
                            className="input-modern"
                          />
                        </div>
                        <div>
                          <Label htmlFor="deposit" className="text-charcoal font-medium">Deposit</Label>
                          <Input
                            id="deposit"
                            type="number"
                            value={loanData.deposit}
                            onChange={(e) => setLoanData({...loanData, deposit: parseInt(e.target.value) || 0})}
                            className="input-modern"
                          />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="interest-rate" className="text-charcoal font-medium">Interest Rate (%)</Label>
                          <Input
                            id="interest-rate"
                            type="number"
                            step="0.1"
                            value={loanData.interestRate}
                            onChange={(e) => setLoanData({...loanData, interestRate: parseFloat(e.target.value) || 0})}
                            className="input-modern"
                          />
                        </div>
                        <div>
                          <Label htmlFor="loan-term" className="text-charcoal font-medium">Loan Term (years)</Label>
                          <Input
                            id="loan-term"
                            type="number"
                            value={loanData.loanTerm}
                            onChange={(e) => setLoanData({...loanData, loanTerm: parseInt(e.target.value) || 0})}
                            className="input-modern"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="premium-divider"></div>
                    
                    <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-2">Monthly Repayment</p>
                        <p className="text-3xl font-bold text-charcoal">${calculateMonthlyRepayment()}</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="stamp-duty" className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="sd-property-price" className="text-charcoal font-medium">Property Price</Label>
                          <Input
                            id="sd-property-price"
                            type="number"
                            value={stampDutyData.propertyPrice}
                            onChange={(e) => setStampDutyData({...stampDutyData, propertyPrice: parseInt(e.target.value) || 0})}
                            className="input-modern"
                          />
                        </div>
                        <div>
                          <Label htmlFor="buyer-type" className="text-charcoal font-medium">Buyer Type</Label>
                          <Select value={stampDutyData.buyerType} onValueChange={(value) => setStampDutyData({...stampDutyData, buyerType: value})}>
                            <SelectTrigger className="input-modern">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="first-home">First Home Buyer</SelectItem>
                              <SelectItem value="existing">Existing Property Owner</SelectItem>
                              <SelectItem value="investor">Investor</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="state" className="text-charcoal font-medium">State</Label>
                          <Select value={stampDutyData.state} onValueChange={(value) => setStampDutyData({...stampDutyData, state: value})}>
                            <SelectTrigger className="input-modern">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="VIC">Victoria</SelectItem>
                              <SelectItem value="NSW">New South Wales</SelectItem>
                              <SelectItem value="QLD">Queensland</SelectItem>
                              <SelectItem value="WA">Western Australia</SelectItem>
                              <SelectItem value="SA">South Australia</SelectItem>
                              <SelectItem value="TAS">Tasmania</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="premium-divider"></div>
                    
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-2">Estimated Stamp Duty</p>
                        <p className="text-3xl font-bold text-charcoal">${calculateStampDuty()}</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <Button className="btn-primary w-full">
                    Contact Property Expert
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}