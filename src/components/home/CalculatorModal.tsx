'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Calculator,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  User,
  Phone,
  Mail,
  RotateCcw,
  Sparkles,
  Award,
} from 'lucide-react';

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  calculatorTitle: string;
}

export const CalculatorModal: React.FC<CalculatorModalProps> = ({
  isOpen,
  onClose,
  calculatorTitle,
}) => {
  const [step, setStep] = useState<'input' | 'lead_form' | 'sweet_alert' | 'results'>('input');

  // Lead Form State
  const [leadData, setLeadData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  // SIP State
  const [sipMonthly, setSipMonthly] = useState<number>(10000);
  const [sipRate, setSipRate] = useState<number>(12);
  const [sipYears, setSipYears] = useState<number>(10);

  // Retirement State
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [retirementAge, setRetirementAge] = useState<number>(60);
  const [monthlyExp, setMonthlyExp] = useState<number>(50000);

  // FD State
  const [fdAmount, setFdAmount] = useState<number>(100000);
  const [fdRate, setFdRate] = useState<number>(7.5);
  const [fdYears, setFdYears] = useState<number>(3);

  // Bond State
  const [bondPrice, setBondPrice] = useState<number>(9800);
  const [bondCoupon, setBondCoupon] = useState<number>(8.5);
  const [bondTenure, setBondTenure] = useState<number>(5);

  // Loan EMI State
  const [loanAmount, setLoanAmount] = useState<number>(2500000);
  const [loanRate, setLoanRate] = useState<number>(8.5);
  const [loanTenure, setLoanTenure] = useState<number>(20);

  // Insurance State
  const [annualIncome, setAnnualIncome] = useState<number>(1200000);
  const [existingLoans, setExistingLoans] = useState<number>(2000000);

  if (!isOpen) return null;

  // Real Mathematical Computations
  const getCalculatedResults = () => {
    const titleLower = calculatorTitle.toLowerCase();

    if (titleLower.includes('retirement')) {
      const yearsLeft = Math.max(1, retirementAge - currentAge);
      const futureExpense = monthlyExp * Math.pow(1.06, yearsLeft);
      const corpusNeeded = Math.round(futureExpense * 12 * 20);
      const monthlySave = Math.round(
        (corpusNeeded * (0.12 / 12)) / (Math.pow(1 + 0.12 / 12, yearsLeft * 12) - 1)
      );

      return {
        label1: 'Required Retirement Corpus',
        val1: `₹${(corpusNeeded / 10000000).toFixed(2)} Cr`,
        label2: 'Target Monthly Savings Required',
        val2: `₹${monthlySave.toLocaleString('en-IN')}/mo`,
        label3: 'Years To Retirement',
        val3: `${yearsLeft} Years`,
      };
    }

    if (titleLower.includes('fixed deposit')) {
      const n = 4; // Quarterly compounding
      const r = fdRate / 100;
      const maturity = Math.round(fdAmount * Math.pow(1 + r / n, n * fdYears));
      const interest = maturity - fdAmount;

      return {
        label1: 'Total Maturity Amount',
        val1: `₹${maturity.toLocaleString('en-IN')}`,
        label2: 'Guaranteed Interest Earned',
        val2: `₹${interest.toLocaleString('en-IN')}`,
        label3: 'Principal Investment',
        val3: `₹${fdAmount.toLocaleString('en-IN')}`,
      };
    }

    if (titleLower.includes('bond')) {
      const faceVal = 10000;
      const annualCoupon = faceVal * (bondCoupon / 100);
      const ytm = (
        ((annualCoupon + (faceVal - bondPrice) / bondTenure) / ((faceVal + bondPrice) / 2)) *
        100
      ).toFixed(2);

      return {
        label1: 'Yield To Maturity (YTM)',
        val1: `${ytm}% p.a.`,
        label2: 'Annual Coupon Payout',
        val2: `₹${Math.round(annualCoupon).toLocaleString('en-IN')}`,
        label3: 'Purchase Price',
        val3: `₹${bondPrice.toLocaleString('en-IN')}`,
      };
    }

    if (titleLower.includes('loan') || titleLower.includes('emi')) {
      const r = loanRate / 12 / 100;
      const n = loanTenure * 12;
      const emi = Math.round((loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
      const totalPayable = emi * n;
      const totalInterest = totalPayable - loanAmount;

      return {
        label1: 'Monthly Loan EMI',
        val1: `₹${emi.toLocaleString('en-IN')}/mo`,
        label2: 'Total Interest Payable',
        val2: `₹${totalInterest.toLocaleString('en-IN')}`,
        label3: 'Total Repayment (P + I)',
        val3: `₹${totalPayable.toLocaleString('en-IN')}`,
      };
    }

    if (titleLower.includes('insurance')) {
      const coverNeeded = Math.round(annualIncome * 15 + existingLoans);
      return {
        label1: 'Recommended HLV Term Cover',
        val1: `₹${(coverNeeded / 10000000).toFixed(2)} Cr`,
        label2: 'Annual Income Replaced',
        val2: `₹${(annualIncome / 100000).toFixed(1)} Lakhs`,
        label3: 'Existing Liabilities Covered',
        val3: `₹${(existingLoans / 100000).toFixed(1)} Lakhs`,
      };
    }

    // Default Mutual Fund / SIP
    const n = sipYears * 12;
    const i = sipRate / 12 / 100;
    const invested = sipMonthly * n;
    const totalWealth = Math.round(sipMonthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i));
    const estReturns = totalWealth - invested;

    return {
      label1: 'Projected Wealth Corpus',
      val1: `₹${totalWealth.toLocaleString('en-IN')}`,
      label2: 'Estimated Wealth Gain',
      val2: `₹${estReturns.toLocaleString('en-IN')}`,
      label3: 'Total Amount Invested',
      val3: `₹${invested.toLocaleString('en-IN')}`,
    };
  };

  const results = getCalculatedResults();

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (leadData.name && leadData.phone) {
      setStep('sweet_alert');
    }
  };

  const handleResetModal = () => {
    setStep('input');
    setLeadData({ name: '', phone: '', email: '' });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop Blur Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            handleResetModal();
            onClose();
          }}
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-400/20">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">
                  {calculatorTitle || 'Financial Calculator'}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  R9 Wealth Quantitative Advisory Engine
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                handleResetModal();
                onClose();
              }}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* STEP 1: INTERACTIVE INPUT SLIDERS */}
          {step === 'input' && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-6"
            >
              <div className="p-3.5 rounded-2xl bg-blue-50/70 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Interactive Model:</strong> Adjust the parameters below to compute your estimated financial projections in real time.
                </span>
              </div>

              {/* Dynamic Inputs Based on Calculator */}
              {calculatorTitle.toLowerCase().includes('retirement') ? (
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      <span>Current Age</span>
                      <span className="text-emerald-600">{currentAge} Years</span>
                    </div>
                    <input
                      type="range"
                      min={18}
                      max={55}
                      value={currentAge}
                      onChange={(e) => setCurrentAge(Number(e.target.value))}
                      className="w-full accent-emerald-600 cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      <span>Target Retirement Age</span>
                      <span className="text-emerald-600">{retirementAge} Years</span>
                    </div>
                    <input
                      type="range"
                      min={currentAge + 5}
                      max={75}
                      value={retirementAge}
                      onChange={(e) => setRetirementAge(Number(e.target.value))}
                      className="w-full accent-emerald-600 cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      <span>Current Monthly Expenses</span>
                      <span className="text-emerald-600">₹{monthlyExp.toLocaleString('en-IN')}</span>
                    </div>
                    <input
                      type="range"
                      min={10000}
                      max={300000}
                      step={5000}
                      value={monthlyExp}
                      onChange={(e) => setMonthlyExp(Number(e.target.value))}
                      className="w-full accent-emerald-600 cursor-pointer"
                    />
                  </div>
                </div>
              ) : calculatorTitle.toLowerCase().includes('fixed deposit') ? (
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      <span>Fixed Deposit Amount</span>
                      <span className="text-teal-600">₹{fdAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <input
                      type="range"
                      min={10000}
                      max={5000000}
                      step={10000}
                      value={fdAmount}
                      onChange={(e) => setFdAmount(Number(e.target.value))}
                      className="w-full accent-teal-600 cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      <span>Interest Rate (% p.a.)</span>
                      <span className="text-teal-600">{fdRate}%</span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={11}
                      step={0.1}
                      value={fdRate}
                      onChange={(e) => setFdRate(Number(e.target.value))}
                      className="w-full accent-teal-600 cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      <span>Tenure (Years)</span>
                      <span className="text-teal-600">{fdYears} Years</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={10}
                      value={fdYears}
                      onChange={(e) => setFdYears(Number(e.target.value))}
                      className="w-full accent-teal-600 cursor-pointer"
                    />
                  </div>
                </div>
              ) : calculatorTitle.toLowerCase().includes('loan') || calculatorTitle.toLowerCase().includes('emi') ? (
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      <span>Loan Amount</span>
                      <span className="text-amber-600">₹{loanAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <input
                      type="range"
                      min={100000}
                      max={20000000}
                      step={100000}
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full accent-amber-600 cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      <span>Interest Rate (% p.a.)</span>
                      <span className="text-amber-600">{loanRate}%</span>
                    </div>
                    <input
                      type="range"
                      min={6.5}
                      max={18}
                      step={0.1}
                      value={loanRate}
                      onChange={(e) => setLoanRate(Number(e.target.value))}
                      className="w-full accent-amber-600 cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      <span>Loan Tenure</span>
                      <span className="text-amber-600">{loanTenure} Years</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={30}
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(Number(e.target.value))}
                      className="w-full accent-amber-600 cursor-pointer"
                    />
                  </div>
                </div>
              ) : (
                /* Default Mutual Fund / SIP */
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      <span>Monthly SIP Amount</span>
                      <span className="text-blue-600 font-bold">₹{sipMonthly.toLocaleString('en-IN')}</span>
                    </div>
                    <input
                      type="range"
                      min={500}
                      max={100000}
                      step={500}
                      value={sipMonthly}
                      onChange={(e) => setSipMonthly(Number(e.target.value))}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      <span>Expected Annual Return Rate</span>
                      <span className="text-blue-600 font-bold">{sipRate}% p.a.</span>
                    </div>
                    <input
                      type="range"
                      min={6}
                      max={25}
                      step={0.5}
                      value={sipRate}
                      onChange={(e) => setSipRate(Number(e.target.value))}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      <span>Investment Period</span>
                      <span className="text-blue-600 font-bold">{sipYears} Years</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={30}
                      value={sipYears}
                      onChange={(e) => setSipYears(Number(e.target.value))}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {/* Live Estimate Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-[#0B102F] to-slate-950 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">{results.label1}</div>
                  <div className="text-3xl font-extrabold text-amber-400 mt-0.5">{results.val1}</div>
                  <div className="text-[11px] text-slate-400 mt-1">{results.label2}: {results.val2}</div>
                </div>

                <button
                  onClick={() => setStep('lead_form')}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 shrink-0"
                >
                  <span>Lock Report & Calculate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: LEAD CAPTURE FORM */}
          {step === 'lead_form' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-5"
            >
              <div className="text-center max-w-sm mx-auto mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-2 border border-emerald-200">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  Unlock Detailed Wealth Breakdown
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Please enter your contact details to generate your official calculation statement.
                </p>
              </div>

              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={leadData.name}
                      onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm focus:ring-2 focus:ring-emerald-500 outline-none dark:bg-slate-800 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Mobile Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={leadData.phone}
                      onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                      placeholder="+91 Mobile number"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm focus:ring-2 focus:ring-emerald-500 outline-none dark:bg-slate-800 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={leadData.email}
                      onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm focus:ring-2 focus:ring-emerald-500 outline-none dark:bg-slate-800 dark:text-white"
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep('input')}
                    className="w-1/3 py-3 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Submit & Calculate</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* STEP 3: SWEETALERT SUCCESS POPUP */}
          {step === 'sweet_alert' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="py-8 text-center space-y-5"
            >
              {/* Glowing SweetAlert Green Checkmark */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, ease: 'backOut' }}
                className="w-20 h-20 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/40 border-4 border-emerald-200"
              >
                <CheckCircle2 className="w-10 h-10 animate-pulse" />
              </motion.div>

              <div>
                <h4 className="text-2xl font-black text-slate-900 dark:text-white">
                  Success! Calculation Report Ready
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-md mx-auto">
                  Thank you, <strong>{leadData.name}</strong>! Your customized quantitative report for <strong>{calculatorTitle}</strong> has been generated successfully.
                </p>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => setStep('results')}
                  className="px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-sm rounded-xl shadow-xl shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 mx-auto"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>View Full Calculated Results</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: FINAL RESULTS BREAKDOWN */}
          {step === 'results' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-emerald-800 dark:text-emerald-400">
                    Verified Statement for {leadData.name || 'Valued Investor'}
                  </div>
                  <div className="text-[11px] text-slate-500">{leadData.email || 'advisory@r9wealth.com'}</div>
                </div>
                <span className="text-[10px] font-extrabold px-2.5 py-1 rounded bg-emerald-600 text-white uppercase">
                  Verified Report
                </span>
              </div>

              {/* 3 Metrics Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                  <div className="text-[11px] font-bold text-slate-500 uppercase">{results.label1}</div>
                  <div className="text-xl font-extrabold text-blue-600 dark:text-blue-400 mt-1">{results.val1}</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                  <div className="text-[11px] font-bold text-slate-500 uppercase">{results.label2}</div>
                  <div className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">{results.val2}</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                  <div className="text-[11px] font-bold text-slate-500 uppercase">{results.label3}</div>
                  <div className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">{results.val3}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleResetModal}
                  className="flex-1 py-3 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Recalculate Values</span>
                </button>

                <a
                  href="/contact-us"
                  onClick={() => {
                    handleResetModal();
                    onClose();
                  }}
                  className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-lg transition-colors text-center flex items-center justify-center gap-1.5"
                >
                  <span>Book Consultation With Advisor</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
