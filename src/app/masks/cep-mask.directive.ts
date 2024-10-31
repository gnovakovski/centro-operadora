import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCepMask]'
})
export class CepMaskDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: any): void {
    let value: string = this.el.nativeElement.value;

    // Remove tudo que não é número
    value = value.replace(/\D/g, '');

    // Aplica a máscara de CEP (XXXXX-XXX)
    if (value.length > 5) {
      value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    }

    // Limita o tamanho máximo do CEP (8 dígitos + formatação)
    if (value.length > 9) {
      value = value.substring(0, 9);
    }

    // Atualiza o valor do input com a máscara aplicada
    this.el.nativeElement.value = value;
  }

}
