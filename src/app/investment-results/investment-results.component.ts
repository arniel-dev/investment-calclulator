import { Component, computed, Input, signal } from '@angular/core';
import { AnnualInvestmentData, InvestmentService } from '../investment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  constructor(private investmentService: InvestmentService) {}

  annualData = computed(() => {
    return this.investmentService.annualData();
  });
}
