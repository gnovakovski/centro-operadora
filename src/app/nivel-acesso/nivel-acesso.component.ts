import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nivel-acesso',
  templateUrl: './nivel-acesso.component.html',
  styleUrls: ['./nivel-acesso.component.css']
})
export class NivelAcessoComponent implements OnInit {


  public nivel_acesso: any

  constructor(private service: ServiceService, private toastr: ToastrService) {}


  ngOnInit() {

    this.getNivelAcesso();
  }

  getNivelAcesso(){
    this.service.getCollectionData('niveis_acesso').subscribe((data) => {

      this.nivel_acesso = data;

    });

  }

  deletarVenda(id: any){

    this.service.delete(id, "niveis_acesso")
      .then((resp) => {

        this.toastr.success('Nível de acesso deletado com sucesso!', 'Deletar nível de acesso');

        this.getNivelAcesso();
      })
      .catch((error) => {
        this.toastr.error(error, 'Erro');
      });
}
}
