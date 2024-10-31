import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

interface Foto {
  file: any
  name: string
}

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent {

  public viagens: any
  public form: any;
  public clientes: any;
  public cep: any;

  fotos: Foto[] = [];

  constructor(private router: Router, private service: ServiceService, public formBuilder: FormBuilder, private toastr: ToastrService) {}

  ngOnInit() {

    this.form = this.formBuilder.group({
      nome: '',
      data_nascimento: '',
      email: '',
      rg: '',
      telefone: '',
      cpf: '',
      cep: '',
      endereco: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
      documentos: {}
    });

  }

  voltar(){

    this.router.navigate(['/clientes']);

  }

  onSubmit() {

    let i = 1;

    let timestamp = `${new Date().getTime()}`

    this.form.controls['documentos'].setValue(this.fotos.map(obj => timestamp + "_" + obj.name));

     this.service.post(this.form.value, "clientes")
       .then((resp) => {

         this.toastr.success('Cliente cadastrado com sucesso!', 'Cadastrar cliente');

         this.fotos.forEach((item: any) => {

           this.upload(item.file, timestamp + "_" + item.name);

         });

         this.router.navigate(['/clientes']);
       })
       .catch((error) => {
         this.toastr.error(error, 'Erro');
       });
  }

  upload(file: any, name: any): void {
    if (file) {
      const fileName = name;
      this.service.uploadImage(file, fileName).subscribe((downloadUrl) => {
        console.log('Imagem enviada com sucesso! URL:', downloadUrl);
      }, error => {
        console.error('Erro ao Salvar imagem:', error);
      });
    }
  }

  getCep(){

    let form = this.form.getRawValue();

    if(form.cep.length > 8){
      this.service.getCep(form.cep).subscribe((resp) => {

        this.cep = resp;

        this.form.controls['endereco'].setValue(this.cep.logradouro);
        this.form.controls['estado'].setValue(this.cep.estado);
        this.form.controls['cidade'].setValue(this.cep.localidade);
        this.form.controls['bairro'].setValue(this.cep.bairro);

      });
    }
  }

  addDocumento(event: any): void {
    let documento = event.target.files[0];
    if (documento) {
      const reader = new FileReader();
      reader.onload = () => {
        let doc = reader.result;

        let fileName = documento.name;

        this.fotos.push({ file: documento, name: fileName });

        console.log(this.fotos);
      };
      reader.readAsDataURL(documento);
    }
  }

  removerDoc(index: number) {
    this.fotos.splice(index, 1);
  }

}

