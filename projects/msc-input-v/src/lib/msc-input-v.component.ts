import { Component, OnInit, Input, AfterContentInit, ContentChildren } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms'

@Component({
  selector: 'msc-input-v',
  template: `
  <label class="text-nowrap" for="">{{label}}</label>
  <ng-content></ng-content>
  <span class="text-danger" *ngIf="hasError()">{{errorMessage}}</span>
  `,
  styles: []
})
export class MscInputVComponent implements OnInit, AfterContentInit {

  @Input() label: string; // label que  sera recebida por componente
  @Input() errorMessage: string; // mensagem de erro que sera recebida por componente

  input: any // input que sera exibido  atraves da diretiva ng-content

  @ContentChildren(NgModel) model: NgModel // feature angular para pegar diretiva do ngForm
  @ContentChildren(FormControlName) control: FormControlName  // feature angular para pegar diretiva do ReactiveForm

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    //ciclo de vida do componente no angular
    this.input = this.model || this.control
    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou formControlName')
      //tratativa de erro para informar que componente precisa ser utilizado com  ngModel ou formControlName
    }
  }

  hasError(): boolean {
    //metodo que verifica o Validator do input e seta mensagem para validator correspondente
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }
}
