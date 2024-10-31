import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  public nivel_acesso: any
  public form: any;

  constructor(private router: Router, private service: ServiceService, public formBuilder: FormBuilder, private toastr: ToastrService) {}


  ngOnInit() {

    this.form = this.formBuilder.group({
      nome: '',
      usuario: '',
      senha: '',
      email: '',
      nivel_acesso: '',
      status: '',
    });

    this.getNivelAcesso();
  }

  voltar(){

    this.router.navigate(['/usuarios']);

  }

  getNivelAcesso(){
    this.service.getCollectionData('niveis_acesso').subscribe((data) => {

      this.nivel_acesso = data;

    });

  }

  onSubmit() {

    this.service.post(this.form.value, "usuarios")
      .then((resp) => {
        console.log(resp)
        this.toastr.success('Usuário cadastrado com sucesso!', 'Cadastrar usuário');

          this.service.registerWithEmail(this.form.value.email, this.form.value.senha)
            .then((result) => {
              console.log('Usuário registrado com sucesso:', result);
            })
            .catch((error) => {
              console.error('Erro ao registrar:', error);
            });


        this.router.navigate(['/usuarios']);
      })
      .catch((error) => {
        this.toastr.error(error, 'Erro');
      });
  }

}
