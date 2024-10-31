import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCnpjMask]'
})
export class CnpjMaskDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: any): void {
    let value: string = this.el.nativeElement.value;

    // Remove tudo que não é número
    value = value.replace(/\D/g, '');

    // Aplica a máscara de CNPJ (XX.XXX.XXX/XXXX-XX)
    if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d)/, '$1.$2');
    }
    if (value.length > 5) {
      value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    }
    if (value.length > 8) {
      value = value.replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3/$4');
    }
    if (value.length > 12) {
      value = value.replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, '$1.$2.$3/$4-$5');
    }

    // Limita o tamanho máximo do CNPJ (14 dígitos + formatação)
    if (value.length > 18) {
      value = value.substring(0, 18);
    }

    // Atualiza o valor do input com a máscara aplicada
    this.el.nativeElement.value = value;
  }

}
