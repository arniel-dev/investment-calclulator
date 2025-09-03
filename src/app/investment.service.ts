import { Injectable, signal } from '@angular/core';

export interface AnnualInvestmentData {
  year: number;
  investmentValue: number;
  interest: number;
  totalInterest: number;
  investedCapital: number;
}

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  annualData = signal<AnnualInvestmentData[]>([]);
  constructor() {}

  calculateInvestmentResults(inputData: {
    initialInvestment: number;
    expectedReturn: number;
    annualInvestment: number;
    duration: number;
  }) {
    const { initialInvestment, expectedReturn, annualInvestment, duration } =
      inputData;
    let data = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interest = investmentValue * (expectedReturn / 100);
      investmentValue += interest + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      const investedCapital = initialInvestment + annualInvestment * year;

      data.push({
        year,
        investmentValue,
        interest,
        totalInterest,
        investedCapital,
      });
    }

    this.annualData.set(data);
  }
}
