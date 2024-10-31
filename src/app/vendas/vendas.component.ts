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

  constructor(private service: ServiceService, private toastr: ToastrService) {}


  ngOnInit() {

    this.getVendas();
  }

  getVendas(){
    this.service.getCollectionData('vendas').subscribe((data) => {

      this.vendas = data;

    });

  }

  deletarVenda(id: any){

    this.service.delete(id, "vendas")
      .then((resp) => {

        this.toastr.success('Venda deletada com sucesso!', 'Deletar venda');

        this.getVendas();
      })
      .catch((error) => {
        this.toastr.error(error, 'Erro');
      });
}

}
