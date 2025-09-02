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
  expectedReturn = '';
  annualInvestment = '';
  duration = '';

  constructor(private investmentService: InvestmentService) {}

  calculate() {
    this.investmentService.calculateInvestmentResults(
      Number(this.initialInvestment),
      Number(this.expectedReturn),
      Number(this.annualInvestment),
      Number(this.duration)
    );
  }
}
