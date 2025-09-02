import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { AnnualInvestmentData, InvestmentService } from './investment.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, CalculatorComponent, InvestmentResultsComponent],
})
export class AppComponent {
  constructor(private investmentService: InvestmentService) {}

  getAnnualData() {
    return this.investmentService.getAnnualData();
  }
}
