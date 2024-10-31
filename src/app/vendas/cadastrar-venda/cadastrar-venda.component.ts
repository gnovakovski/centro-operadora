import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-venda',
  templateUrl: './cadastrar-venda.component.html',
  styleUrls: ['./cadastrar-venda.component.css']
})
export class CadastrarVendaComponent implements OnInit {

  public viagens: any
  public form: any;
  public clientes: any;

  constructor(private router: Router, private service: ServiceService, public formBuilder: FormBuilder, private toastr: ToastrService) {}

  ngOnInit() {



    this.getViagens();
    this.getClientes();

    this.form = this.formBuilder.group({
      viagem: '',
      forma_pagamento: '',
      data_reserva: '',
      data_pagamento: '',
      cliente: '',
      status_pagamento: '',
      valor: '',
      vendidoPor: localStorage.getItem('user'),
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

  voltar(){

    this.router.navigate(['/vendas']);

  }

  onSubmit() {

    this.form.value.valor = this.form.value.valor.replace(/[.,]/g, '');

    let valorNumerico = Number(this.form.value.valor)/ 100;

    let valorFormatado = valorNumerico.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    this.form.value.valor = valorFormatado;

    this.service.post(this.form.value, "vendas")
      .then((resp) => {
        console.log(resp)
        this.toastr.success('Venda cadastrada com sucesso!', 'Cadastrar venda');


        this.router.navigate(['/vendas']);
      })
      .catch((error) => {
        this.toastr.error(error, 'Erro');
      });
  }

}
