import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.component.html',
  styleUrls: ['./viagens.component.css']
})
export class ViagensComponent implements OnInit {

  public viagens: any
  public img: any
  public acesso: any

  public loading: boolean = false

  constructor(private service: ServiceService, private toastr: ToastrService) { }

  ngOnInit() {

      this.getViagens();

  }

  deletaProduto(id: any){

    this.service.delete(id, "viagens")
      .then((resp) => {

        this.toastr.success('Produto deletado com sucesso!', 'Deletar produto');

        this.getVendasByParams(this.parametro, this.vendidoPor);
      })
      .catch((error) => {
        this.toastr.error(error, 'Erro');
      });
}
  vendidoPor(parametro: (parametro: any, vendidoPor: any) => void, vendidoPor: any) {
    throw new Error('Method not implemented.');
  }
  parametro(parametro: any, vendidoPor: any) {
    throw new Error('Method not implemented.');
  }
  getVendasByParams(parametro: any, vendidoPor: any) {
    throw new Error('Method not implemented.');
  }

  getViagens(){
    this.service.getCollectionData('viagens').subscribe((data) => {

      this.viagens = data;

    });

  }

  deletarProduto(id: any){

    this.service.delete(id, "viagens")
      .then((resp) => {

        this.toastr.success('Produto deletada com sucesso!', 'Deletar produto');

        this.getViagens();
      })
      .catch((error) => {
        this.toastr.error(error, 'Erro');
      });
}

}
