import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastrar-embarque',
  templateUrl: './cadastrar-embarque.component.html',
  styleUrls: ['./cadastrar-embarque.component.css']
})
export class CadastrarEmbarqueComponent implements OnInit {

  public viagens: any
  public form: any;
  public clientes: any;

  constructor(private router: Router, private service: ServiceService, public formBuilder: FormBuilder, private toastr: ToastrService) {}

  ngOnInit() {

    this.getViagens();
    this.getClientes();

    this.form = this.formBuilder.group({
      viagem: '',
      horarioEmbarqueDesembarque: '',
      EnderecoEmbarqueDesembarque: '',
      embarqueDesembarque: '',
    });

  }

  getViagens(){
    this.service.getCollectionData('viagens').subscribe((data) => {

      this.viagens = data;

    });

  }

  getClientes(){
    this.service.getCollectionData('clientes').subscribe((data) => {

      this.clientes = data;

    });

  }

  voltar(){

    this.router.navigate(['/embarque-desembarque']);

  }

  onSubmit() {

    this.service.post(this.form.value, "embarque-desembarque")
      .then((resp) => {
        console.log(resp)
        this.toastr.success('Embarque/Desembarque cadastrado com sucesso!');


        this.router.navigate(['/embarque']);
      })
      .catch((error) => {
        this.toastr.error(error, 'Erro');
      });
  }
}
