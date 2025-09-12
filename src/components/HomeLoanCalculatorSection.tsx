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
  return;
};