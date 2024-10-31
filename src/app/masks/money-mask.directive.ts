import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[moneyMask]' // Nome da diretiva que você vai usar no HTML
})
export class MoneyMaskDirective {

  private el: HTMLInputElement;

  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  @HostListener('input', ['$event'])
  onInputChange(event: any): void {
    // Remove tudo que não for número ou vírgula
    let value = this.el.value.replace(/\D/g, '');

    // Formata com casas decimais e adiciona os separadores de milhar
    value = this.formatMoney(value);

    // Atualiza o valor do campo de input
    this.el.value = value;
  }

  private formatMoney(value: string): string {
    // Se não houver valor, retorna vazio
    if (value === '') return '';

    // Insere as vírgulas (ponto flutuante com 2 casas)
    let intValue = parseInt(value, 10).toString();
    let decimalPart = value.substring(value.length - 2);
    let formattedValue = intValue.substring(0, intValue.length - 2) + ',' + decimalPart;

    // Adiciona os separadores de milhar
    formattedValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return formattedValue;
  }
}
