import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPhoneMask]'
})
export class PhoneMaskDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: any): void {
    let value: string = this.el.nativeElement.value;

    // Remove tudo que não é número
    value = value.replace(/\D/g, '');

    // Aplica a máscara de telefone (XX) X XXXX-XXXX
    if (value.length > 0) {
      value = value.replace(/^(\d{2})(\d)/, '($1) $2'); // Adiciona os parênteses em torno do DDD
    }
    if (value.length > 5) {
      value = value.replace(/^(\(\d{2}\)) (\d)(\d{4})/, '$1 $2 $3'); // Aplica a máscara para o quinto dígito
    }
    if (value.length > 9) {
      value = value.replace(/^(\(\d{2}\)) (\d) (\d{4})(\d{4})/, '$1 $2 $3-$4'); // Adiciona o hífen para os quatro últimos dígitos
    }

    // Limita o tamanho máximo do número de telefone (11 dígitos + formatação)
    if (value.length > 16) {
      value = value.substring(0, 16);
    }

    // Atualiza o valor do input com a máscara aplicada
    this.el.nativeElement.value = value;
  }

}
