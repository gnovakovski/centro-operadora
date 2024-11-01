import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

  public vendas: any

  public acesso: any
  public user: any

  public parametro: any
  public vendidoPor: any

  constructor(private service: ServiceService, private toastr: ToastrService) {}


  ngOnInit() {

    this.user = localStorage.getItem('nome')

    this.acesso = localStorage.getItem('nivel-acesso')

    if(this.acesso === "Administrador"){

      this.parametro = ""
      this.vendidoPor = ""

      this.getVendas();

    }else if(this.acesso === "Agente" || this.acesso === "Sub-agente"){

      this.parametro = "=="
      this.vendidoPor = this.user

      this.getVendasByParams(this.parametro, this.user);

    }

  }

  getVendas(){
    this.service.getCollectionData('vendas').subscribe((data) => {

      this.vendas = data;

    });

  }

  getVendasByParams(parametro: any, vendidoPor: any){

      this.service.getVendasPorVendedor(parametro, vendidoPor).subscribe((data) => {

        this.vendas = data;
  
      });

  }

  deletarVenda(id: any){

    this.service.delete(id, "vendas")
      .then((resp) => {

        this.toastr.success('Venda deletada com sucesso!', 'Deletar venda');

        this.getVendasByParams(this.parametro, this.vendidoPor);
      })
      .catch((error) => {
        this.toastr.error(error, 'Erro');
      });
}

}
