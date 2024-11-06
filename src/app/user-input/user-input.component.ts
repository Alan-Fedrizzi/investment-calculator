import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import type { InvestmentInput } from '../investment.model';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent implements OnInit {
  @Output() calculate = new EventEmitter<InvestmentInput>();
  form: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private calculatorService: CalculatorService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      initialInvestment: ['', [Validators.required, Validators.min(1)]],
      annualInvestment: ['', [Validators.required, Validators.min(1)]],
      expectedReturn: ['', [Validators.required, Validators.min(1)]],
      duration: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    // if (this.form.invalid) return;
    if (this.form.invalid) {
      console.log('inválido');
      return;
    }
    console.log(this.form.value);

    this.calculate.emit(this.form.value);

    // const results = this.calculatorService.calculateInvestmentResults({
    //   // transformar para number
    //   initialInvestment: +this.form.value.initialInvestment,
    //   annualInvestment: +this.form.value.annualInvestment,
    //   expectedReturn: +this.form.value.expectedReturn,
    //   duration: +this.form.value.duration,
    // });
    // this.calculate.emit(results);
    this.form.reset();
  }

  /*
  test() {
    // patchValue: This method is used to update one or more properties of the form controls. It’s safer to use when you are not updating every control in the form (you can pass only the ones you want to update).
    // setValue: This method is used when you want to update every property in the form group, and it requires the full set of values for all controls.
    // this.form.patchValue({
    //   initialInvestment: 10,
    // });
    this.form.setValue({
      initialInvestment: 10,
      annualInvestment: 10,
      expectedReturn: 10,
      duration: 10,
    });
  }
  */
}
