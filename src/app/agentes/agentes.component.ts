import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.css']
})
export class AgentesComponent implements OnInit {

  public agentes: any

  public acesso: any
  public user: any

  public parametro: any
  public agenteRelacionado: any

  constructor(private service: ServiceService, private toastr: ToastrService) {}


  ngOnInit() {

    this.user = localStorage.getItem('user')

    this.acesso = localStorage.getItem('nivel-acesso')

    if(this.acesso === "Administrador"){

      this.parametro = ""
      this.agenteRelacionado = ""

      this.getAgente();

    }else if(this.acesso === "Agente" || this.acesso === "Sub-agente"){

      this.parametro = "=="
      this.agenteRelacionado = this.user

      this.getAgentesByAgente();

    }
  }

  getAgente(){
    this.service.getCollectionData('agentes').subscribe((data) => {

      this.agentes = data;

    });

  }

  getAgentesByAgente(){

    this.service.getAgentesByAgente(this.parametro, this.user).subscribe((data) => {

      this.agentes = data;

    });

  }

  deletarAgente(id: any){

    this.service.delete(id, "agentes")
      .then((resp) => {

        this.toastr.success('Agente deletado com sucesso!', 'Deletar agente');

        this.getAgente();
      })
      .catch((error) => {
        this.toastr.error(error, 'Erro');
      });
}

}
