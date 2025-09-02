import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  initialInvestment = '';
  expectedReturn = '5';
  annualInvestment = '';
  duration = '10';

  constructor(private investmentService: InvestmentService) {}

  calculate() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: Number(this.initialInvestment),
      expectedReturn: Number(this.expectedReturn),
      annualInvestment: Number(this.annualInvestment),
      duration: Number(this.duration),
    });
  }
}
