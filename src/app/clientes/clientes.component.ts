import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public clientes: any
  public clienteById: any

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

      this.getClientes();

    }else if(this.acesso === "Agente" || this.acesso === "Sub-agente"){

      this.parametro = "=="
      this.agenteRelacionado = this.user

      this.getClientesByAgente();

    }
  }

  getClientes(){
    this.service.getCollectionData('clientes').subscribe((data) => {

      this.clientes = data;

    });

  }

  getClientesByAgente(){
    this.service.getClientesByAgente(this.parametro, this.user).subscribe((data) => {

      this.clientes = data;

    });

  }

  deletarCliente(id: any){

    this.service.getById(id, "clientes").subscribe(data => {

      this.clienteById = data;

      this.clienteById.documentos.forEach((item: any) => {

        this.service.removerFoto(item)
          .then(() => {
            console.log('Foto removida com sucesso!');
          })
          .catch(error => {
          });

      })

      this.service.delete(id, "clientes")
      .then((resp) => {

        this.toastr.success('Cliente deletado com sucesso!', 'Deletar cliente');

        this.getClientes();
      })
      .catch((error) => {
        this.toastr.error(error, 'Erro');
      });


    });



}

}
