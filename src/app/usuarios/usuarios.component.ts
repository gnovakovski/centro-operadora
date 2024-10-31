import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public usuarios: any

  constructor(private service: ServiceService, private toastr: ToastrService) {}


  ngOnInit() {

    this.getUsuarios();
  }

  getUsuarios(){
    this.service.getCollectionData('usuarios').subscribe((data) => {

      this.usuarios = data;

    });

  }

  deletarUsuario(id: any){

    this.service.delete(id, "usuarios")
      .then((resp) => {

        this.toastr.success('Usuário deletado com sucesso!', 'Deletar usuário');

        this.getUsuarios();
      })
      .catch((error) => {
        this.toastr.error(error, 'Erro');
      });
}
}
