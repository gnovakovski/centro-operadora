import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCpfMask]'
})
export class CpfMaskDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: any): void {
    let value: string = this.el.nativeElement.value;

    // Remove tudo que não é número
    value = value.replace(/\D/g, '');

    // Aplica a máscara de CPF (XXX.XXX.XXX-XX)
    if (value.length > 3) {
      value = value.replace(/^(\d{3})(\d)/, '$1.$2');
    }
    if (value.length > 6) {
      value = value.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    }
    if (value.length > 9) {
      value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    }

    // Limita o tamanho máximo do CPF (11 dígitos + formatação)
    if (value.length > 14) {
      value = value.substring(0, 14);
    }

    // Atualiza o valor do input com a máscara aplicada
    this.el.nativeElement.value = value;
  }

}
