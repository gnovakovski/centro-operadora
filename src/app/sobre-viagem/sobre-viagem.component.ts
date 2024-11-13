import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


interface Foto {
  file: any
}

interface Doc {
  file: any
  name: string
}

@Component({
  selector: 'app-sobre-viagem',
  templateUrl: './sobre-viagem.component.html',
  styleUrls: ['./sobre-viagem.component.css']
})
export class SobreViagemComponent implements OnInit {

  public viagem: any;
  public viagemId: any;

  public valor: any;
  public contato: any;

  public form_venda: any
  public form_cliente: any

  public viagens: any
  public clientes: any;

  public localStorage: any

  modalRef: NgbModalRef | undefined;

  fotos: Foto[] = [];
  docs: Doc[] = [];

  constructor(private service: ServiceService, private activatedRoute: ActivatedRoute, public formBuilder: FormBuilder, private toastr: ToastrService, public modalService: NgbModal) { }

  ngOnInit() {

    this.localStorage = localStorage.getItem('nome')

    this.form_venda = this.formBuilder.group({
      viagem: '',
      forma_pagamento: '',
      data_reserva: '',
      data_pagamento: '',
      cliente: '',
      status_pagamento: '',
      valor: '',
      vendidoPor: localStorage.getItem('nome'),
    });

    this.form_cliente = this.formBuilder.group({
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
      cadastradoPor: localStorage.getItem('nome'),
      documentos: {}
    });

    this.viagemId = this.activatedRoute.snapshot.paramMap.get('id');

    this.getViagemById(this.viagemId)

    this.getContatoWhats();

    this.getClientes();
    this.getViagens();

  }

  openModal(contentModal: any) {
    this.modalRef = this.modalService.open(contentModal, { size: 'lg', ariaLabelledBy: 'modal-basic-title', centered: true, backdrop: true, keyboard: true });
  }

  post() {

    this.onSubmit();
    this.onSubmitVenda();

  }

  onSubmitVenda() {

    this.form_venda.value.valor = this.form_venda.value.valor.replace(/[.,]/g, '');

    let valorNumerico = Number(this.form_venda.value.valor)/ 100;

    let valorFormatado = valorNumerico.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    this.form_venda.value.valor = valorFormatado;

    this.form_venda.value.cliente = this.form_cliente.value.nome;

    this.service.post(this.form_venda.value, "vendas")
      .then((resp) => {
        console.log(resp)
        this.toastr.success('Venda cadastrada com sucesso!', 'Cadastrar venda');

      })
      .catch((error) => {
        this.toastr.error(error, 'Erro');
      });
  }

  onSubmit() {

    let i = 1;

    let timestamp = `${new Date().getTime()}`

    this.form_cliente.controls['documentos'].setValue(this.docs.map(obj => timestamp + "_" + obj.name));

     this.service.post(this.form_cliente.value, "clientes")
       .then((resp) => {

         this.fotos.forEach((item: any) => {

           this.upload(item.file, timestamp + "_" + item.name);

         });

         if (this.modalRef) {
          this.modalRef.close();
        }

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

    let form = this.form_cliente.getRawValue();

    if(form.cep.length > 8){
      this.service.getCep(form.cep).subscribe((resp) => {

        let cep = resp;

        this.form_cliente.controls['endereco'].setValue(cep.logradouro);
        this.form_cliente.controls['estado'].setValue(cep.estado);
        this.form_cliente.controls['cidade'].setValue(cep.localidade);
        this.form_cliente.controls['bairro'].setValue(cep.bairro);

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

        this.docs.push({ file: documento, name: fileName });

        console.log(this.docs);
      };
      reader.readAsDataURL(documento);
    }
  }

  removerDoc(index: number) {
    this.docs.splice(index, 1);
  }

  fecharModal() {
    if (this.modalRef) {
      this.modalRef.close();
    }
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

  whats() {
    window.location.href = this.contato.link
  }

  getContatoWhats() {
    this.service.getById("T8oT1pxOSCwAIXPTMYNZ", "contato_whats").subscribe(data => {
      this.contato = data;

    });
  }

  getViagemById(id: any) {
    this.service.getById(id, "viagens").subscribe(data => {

      this.viagem = data;

      this.form_venda.controls['viagem'].setValue(this.viagem.titulo);
      this.form_venda.controls['valor'].setValue(this.viagem.preco);

      if (this.viagem.foto1) {
        this.service.getImageUrl(this.viagem.foto1).subscribe((url) => {

          this.fotos.push({ file: url });

        });
      }

      if (this.viagem.foto2) {
        this.service.getImageUrl(this.viagem.foto2).subscribe((url) => {

          this.fotos.push({ file: url });

        });
      }

      if (this.viagem.foto3) {
        this.service.getImageUrl(this.viagem.foto3).subscribe((url) => {

          this.fotos.push({ file: url });

        });
      }


      if (this.viagem.foto4) {
        this.service.getImageUrl(this.viagem.foto4).subscribe((url) => {

          this.fotos.push({ file: url });

        });
      }


      if (this.viagem.foto5) {
        this.service.getImageUrl(this.viagem.foto5).subscribe((url) => {

          this.fotos.push({ file: url });

        });
      }

      console.log(this.fotos)

    });
  }

}
