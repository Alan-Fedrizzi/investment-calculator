import { Component, signal } from '@angular/core';
import { InvestmentService } from './investment.service';
import { HeaderComponent } from './header/header.component';
import { InvestmentInput, InvestmentResult } from './investment.model';
import { InvestmentsResultsComponent } from './investments-results/investments-results.component';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentsResultsComponent],
})
export class AppComponent {}
