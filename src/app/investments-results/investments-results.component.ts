import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investments-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investments-results.component.html',
  styleUrl: './investments-results.component.css',
})
export class InvestmentsResultsComponent {
  private investmentService = inject(InvestmentService);

  get results() {
    return this.investmentService.resultData;
  }
}
