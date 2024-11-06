import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
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

  // funciona das 3 maneiras abaixo:
  // get results() {
  //   return this.investmentService.resultData;
  // }
  results = computed(() => this.investmentService.resultData());
  // results = this.investmentService.resultData.asReadonly();
}
