import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent implements OnInit {
  private investmentService = inject(InvestmentService);
  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      initialInvestment: ['', [Validators.required, Validators.min(1)]],
      annualInvestment: ['', [Validators.required, Validators.min(1)]],
      expectedReturn: ['', [Validators.required, Validators.min(1)]],
      duration: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log('inválido');
      return;
    }
    console.log(this.form.value);
    this.investmentService.calculateInvestmentResults(this.form.value);
    this.form.reset();
  }
}
