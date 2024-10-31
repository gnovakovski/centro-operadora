import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRgMask]'
})
export class RgMaskDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: any): void {
    let value: string = this.el.nativeElement.value;

    // Remove tudo o que não é número
    value = value.replace(/\D/g, '');

    // Aplica a máscara do RG (XX.XXX.XXX-XX)
    if (value.length > 1) {
      value = value.replace(/^(\d{2})(\d)/, '$1.$2');
    }
    if (value.length > 5) {
      value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    }
    if (value.length > 8) {
      value = value.replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    }
    if (value.length > 9) {
      value = value.replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d{1})(\d{1})/, '$1.$2.$3-$4.$5');
    }

    // Limita o tamanho máximo do RG (9 dígitos + formatação)
    if (value.length > 13) {
      value = value.substring(0, 13);
    }

    // Atualiza o valor do input com a máscara aplicada
    this.el.nativeElement.value = value;
  }
}
