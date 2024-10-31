import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editar-venda',
  templateUrl: './editar-venda.component.html',
  styleUrls: ['./editar-venda.component.css']
})
export class EditarVendaComponent implements OnInit {

  public vendaId: any
  public viagens: any
  public form: any
  public venda: any
  public clientes: any

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: ServiceService, public formBuilder: FormBuilder, private toastr: ToastrService) {}

  ngOnInit() {

    this.vendaId = this.activatedRoute.snapshot.paramMap.get('id');

    this.form = this.formBuilder.group({
      viagem: '',
      forma_pagamento: '',
      data_reserva: '',
      data_pagamento: '',
      cliente: '',
      status_pagamento: '',
      valor: '',
    });

    this.getViagens();
    this.getClientes();

    this.getVendaById(this.vendaId);

  }

  getVendaById(id: any){

    this.service.getById(id, "vendas").subscribe(data => {
      this.venda = data;

      this.form.controls['viagem'].setValue(this.venda.viagem);
      this.form.controls['forma_pagamento'].setValue(this.venda.forma_pagamento);
      this.form.controls['data_reserva'].setValue(this.venda.data_reserva);
      this.form.controls['data_pagamento'].setValue(this.venda.data_pagamento);
      this.form.controls['cliente'].setValue(this.venda.cliente);
      this.form.controls['status_pagamento'].setValue(this.venda.status_pagamento);
      this.form.controls['valor'].setValue(this.venda.valor);

    });
  }

  getViagens(){
    this.service.getCollectionData('viagens').subscribe((data) => {

      this.viagens = data;

    });

  }

  getClientes(){
    this.service.getCollectionData('clientes').subscribe((data) => {

      this.clientes = data;

    });

  }

  editar(){

    this.form.value.valor = this.form.value.valor.replace(/[.,]/g, '');

    let valorNumerico = Number(this.form.value.valor)/ 100;

    let valorFormatado = valorNumerico.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    this.form.value.valor = valorFormatado;

      this.service.update(this.vendaId, this.form.value, "vendas")
        .then((resp) => {

          this.toastr.success('Venda editada com sucesso!', 'Editar venda');

         this.router.navigate(['/vendas']);
        })
        .catch((error) => {
          this.toastr.error(error, 'Erro');
        });
  }

  voltar(){

    this.router.navigate(['/vendas']);

  }

}
