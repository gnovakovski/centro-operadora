import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  public nivel_acesso: any
  public form: any;

  public usuario: any;
  public usuarioId: any;

  public senha: any

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: ServiceService, public formBuilder: FormBuilder, private toastr: ToastrService) {}


  ngOnInit() {

    this.usuarioId = this.activatedRoute.snapshot.paramMap.get('id');

    this.form = this.formBuilder.group({
      nome: '',
      usuario: '',
      senha: '',
      email: '',
      nivel_acesso: '',
      status: '',
    });

    this.getNivelAcesso();
    this.getUsuarioById(this.usuarioId);

  }

  getUsuarioById(id: any) {

    this.service.getById(id, "usuarios").pipe(take(1)).subscribe(data => {
      this.usuario = data;

      this.form.controls['nome'].setValue(this.usuario.nome);
      this.form.controls['usuario'].setValue(this.usuario.usuario);
      this.form.controls['senha'].setValue(this.usuario.senha);
      this.form.controls['email'].setValue(this.usuario.email);
      this.form.controls['nivel_acesso'].setValue(this.usuario.nivel_acesso);
      this.form.controls['status'].setValue(this.usuario.status);

      this.senha = this.usuario.senha ? `${this.usuario.senha}` : '';

    });
  }


  voltar(){

    this.router.navigate(['/usuarios']);

  }

  getNivelAcesso(){
    this.service.getCollectionData('niveis_acesso').subscribe((data) => {

      this.nivel_acesso = data;

    });

  }

  editar(){

    this.service.update(this.usuarioId, this.form.value, "usuarios")
      .then((resp) => {

        this.toastr.success('Usuário editado com sucesso! Se você alterou seu próprio nível de acesso, por favor, logue novamente no sistema', 'Editar usuário');

        if(this.senha !== this.form.value.senha){

          console.log("entrou no if")

          this.updatePassword(this.form.value.senha)

        }

       this.router.navigate(['/usuarios']);
      })
      .catch((error) => {
        this.toastr.error(error, 'Erro');
      });
  }

  updatePassword(senhaNova: any) {
    this.service.changePassword(senhaNova, this.senha);



  }
}
