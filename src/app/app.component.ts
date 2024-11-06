import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { CalculatorService } from './calculator.service';
import { InvestmentInput, InvestmentResult } from './investment.model';
import { InvestmentsResultsComponent } from './investments-results/investments-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentsResultsComponent],
})
export class AppComponent {
  resultsData?: InvestmentResult[];

  constructor(private calculatorService: CalculatorService) {}

  onCanculateInvestmentResults(event: InvestmentInput) {
    // console.log(event);
    this.resultsData = this.calculatorService.calculateInvestmentResults(event);
  }
}
