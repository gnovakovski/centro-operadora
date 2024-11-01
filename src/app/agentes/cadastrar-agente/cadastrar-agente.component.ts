import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-agente',
  templateUrl: './cadastrar-agente.component.html',
  styleUrls: ['./cadastrar-agente.component.css']
})
export class CadastrarAgenteComponent implements OnInit {

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
      agenteVinculado: localStorage.getItem('user'),
    });

  }

  voltar(){

    this.router.navigate(['/agentes']);

  }

  onSubmit() {

    this.service.post(this.form.value, "agentes")
      .then((resp) => {
        console.log(resp)
        this.toastr.success('Agente cadastrado com sucesso!', 'Cadastrar agente');

          this.service.registerWithEmail(this.form.value.email, this.form.value.senha)
            .then((result) => {
              console.log('Agente registrado com sucesso:', result);
            })
            .catch((error) => {
              console.error('Erro ao registrar:', error);
            });


        this.router.navigate(['/agentes']);
      })
      .catch((error) => {
        this.toastr.error(error, 'Erro');
      });
  }

}
