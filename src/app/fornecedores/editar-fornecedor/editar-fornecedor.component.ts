import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editar-fornecedor',
  templateUrl: './editar-fornecedor.component.html',
  styleUrls: ['./editar-fornecedor.component.css']
})
export class EditarFornecedorComponent implements OnInit {

  public form: any;
  public form_tipo_fornecedor: any;
  public form_acomodacao: any;
  public form_quarto: any;
  public form_onibus: any;
  public form_ingresso: any;

  modalRef: NgbModalRef | undefined;

  public tipo_fornecedor: any
  public quarto: any
  public acomodacao: any
  public ingresso: any
  public onibus: any

  public fornecedorId: any
  public fornecedor: any

  public liberarAcomodacao: boolean = false;
  public liberarQuarto: boolean = false;
  public liberarOnibus: boolean = false;
  public liberarIngresso: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, public modalService: NgbModal, private router: Router, private service: ServiceService, public formBuilder: FormBuilder, private toastr: ToastrService) {}

  ngOnInit() {

    this.fornecedorId = this.activatedRoute.snapshot.paramMap.get('id');

    this.form = this.formBuilder.group({
      razao_social: '',
      nome_fantasia: '',
      cnpj: '',
      endereco: '',
      email_comercial: '',
      telefone_comercial: '',
      nome_comercial: '',
      email_financeiro: '',
      nome_financeiro: '',
      telefone_financeiro: '',
      tipo_fornecedor: '',
      acomodacao_hotel: '',
      quarto_hotel: '',
      ingresso: '',
      onibus: '',
    });

    this.form_tipo_fornecedor = this.formBuilder.group({
      tipo_fornecedor: '',
    });

    this.form_acomodacao = this.formBuilder.group({
      acomodacao: '',
    });

    this.form_quarto = this.formBuilder.group({
      quarto: '',
    });

    this.form_onibus = this.formBuilder.group({
      onibus: '',
    });

    this.form_ingresso = this.formBuilder.group({
      ingresso: '',
    });

    this.getTipoFornecedor();
    this.getcomodacoes();
    this.getQuartos();
    this.getOnibus();
    this.getTipoIngresso();

    this.getFornecedorById(this.fornecedorId);
  }

  getFornecedorById(id: any){

    this.service.getById(id, "fornecedores").subscribe(data => {

      this.fornecedor = data;

      this.form.controls['razao_social'].setValue(this.fornecedor.razao_social);
      this.form.controls['nome_fantasia'].setValue(this.fornecedor.nome_fantasia);
      this.form.controls['cnpj'].setValue(this.fornecedor.cnpj);
      this.form.controls['endereco'].setValue(this.fornecedor.endereco);
      this.form.controls['email_comercial'].setValue(this.fornecedor.email_comercial);
      this.form.controls['telefone_comercial'].setValue(this.fornecedor.telefone_comercial);
      this.form.controls['nome_comercial'].setValue(this.fornecedor.nome_comercial);
      this.form.controls['email_financeiro'].setValue(this.fornecedor.email_financeiro);
      this.form.controls['nome_financeiro'].setValue(this.fornecedor.nome_financeiro);
      this.form.controls['telefone_financeiro'].setValue(this.fornecedor.telefone_financeiro);
      this.form.controls['tipo_fornecedor'].setValue(this.fornecedor.tipo_fornecedor);
      this.form.controls['acomodacao_hotel'].setValue(this.fornecedor.acomodacao_hotel);
      this.form.controls['quarto_hotel'].setValue(this.fornecedor.quarto_hotel);
      this.form.controls['ingresso'].setValue(this.fornecedor.ingresso);
      this.form.controls['onibus'].setValue(this.fornecedor.onibus);

      if(this.fornecedor.tipo_fornecedor === "Acomodação"){

        this.liberarAcomodacao = true;
        this.liberarQuarto = true;

      }else if(this.fornecedor.tipo_fornecedor === "Ingresso"){

        this.liberarIngresso = true

      }else if(this.fornecedor.tipo_fornecedor === "Ônibus"){

        this.liberarOnibus = true

      }

    });
  }

  voltar(){

    this.router.navigate(['/fornecedores']);

  }

  openModal(contentModal: any) {
    this.modalRef = this.modalService.open(contentModal, { size: 'md', ariaLabelledBy: 'modal-basic-title', centered: true, backdrop: true, keyboard: true });
  }

  getTipoFornecedor(){
    this.service.getCollectionData('tipo_fornecedor').subscribe((data) => {

      this.tipo_fornecedor = data;

      this.form.controls['tipo_fornecedor'].setValue(this.form.value.tipo_fornecedor);

    });

  }

  getTipoIngresso(){
    this.service.getCollectionData('tipo_ingresso').subscribe((data) => {

      this.ingresso = data;

      this.form.controls['ingresso'].setValue(this.fornecedor.ingresso);

    });

  }

  getOnibus(){
    this.service.getCollectionData('tipo_onibus').subscribe((data) => {

      this.onibus = data;

      this.form.controls['onibus'].setValue(this.fornecedor.onibus);

    });

  }

  getQuartos(){
    this.service.getCollectionData('quarto_hotel').subscribe((data) => {

      this.quarto = data;

      this.form.controls['quarto_hotel'].setValue(this.fornecedor.quarto_hotel);

    });

  }

  getcomodacoes(){
    this.service.getCollectionData('acomodacao_hotel').subscribe((data) => {

      this.acomodacao = data;

      this.form.controls['acomodacao_hotel'].setValue(this.fornecedor.acomodacao_hotel);

    });

  }

  cadastrarOnibus(){

    this.service.post(this.form_onibus.value, "tipo_onibus")
    .then((resp) => {
      console.log(resp)
      this.toastr.success('Tipo de ônibus cadastrado com sucesso!', 'Cadastrar tipo de ônibus');

      this.getOnibus();

      this.form_onibus.controls['onibus'].setValue("");

      if (this.modalRef) {
        this.modalRef.close();
      }
    })
    .catch((error) => {
      this.toastr.error(error, 'Erro');
    });

  }

  cadastrarIngresso(){

    this.service.post(this.form_ingresso.value, "tipo_ingresso")
    .then((resp) => {
      console.log(resp)
      this.toastr.success('Tipo de ingresso cadastrado com sucesso!', 'Cadastrar tipo de ingresso');

      this.getTipoIngresso();

      this.form_ingresso.controls['ingresso'].setValue("");

      if (this.modalRef) {
        this.modalRef.close();
      }
    })
    .catch((error) => {
      this.toastr.error(error, 'Erro');
    });

  }

  cadastrarTipoFornecedor(){

    this.service.post(this.form_tipo_fornecedor.value, "tipo_fornecedor")
    .then((resp) => {
      console.log(resp)
      this.toastr.success('Tipo de fornecedor cadastrado com sucesso!', 'Cadastrar tipo de fornecedor');

      this.getTipoFornecedor();

      this.form_tipo_fornecedor.controls['tipo_fornecedor'].setValue("");

      if (this.modalRef) {
        this.modalRef.close();
      }
    })
    .catch((error) => {
      this.toastr.error(error, 'Erro');
    });

  }

  cadastrarAcomodacao(){

    this.service.post(this.form_acomodacao.value, "acomodacao_hotel")
    .then((resp) => {
      console.log(resp)
      this.toastr.success('Acomodação cadastrada com sucesso!', 'Cadastrar acomodação');

      this.getcomodacoes();

      this.form_acomodacao.controls['acomodacao'].setValue("");

      if (this.modalRef) {
        this.modalRef.close();
      }
    })
    .catch((error) => {
      this.toastr.error(error, 'Erro');
    });

  }

  cadastrarQuarto(){

    this.service.post(this.form_quarto.value, "quarto_hotel")
    .then((resp) => {
      console.log(resp)
      this.toastr.success('Quarto cadastrado com sucesso!', 'Cadastrar quarto');

      this.getQuartos();

      this.form_quarto.controls['quarto'].setValue("");

      if (this.modalRef) {
        this.modalRef.close();
      }
    })
    .catch((error) => {
      this.toastr.error(error, 'Erro');
    });

  }

  fecharModal() {
    if (this.modalRef) {
      this.modalRef.close();
    }
  }

  onSubmit() {

    this.service.update(this.fornecedorId, this.form.value, "fornecedores")
      .then((resp) => {
        console.log(resp)
        this.toastr.success('Fornecedor editado com sucesso!', 'Editar fornecedor');


        this.router.navigate(['/fornecedores']);
      })
      .catch((error) => {
        this.toastr.error(error, 'Erro');
      });
  }

  pegarValorTipoFornecedor(event: any){

    if(event.target.value === "Acomodação"){

      this.liberarAcomodacao = true;
      this.liberarQuarto = true;
      this.liberarOnibus = false;
      this.liberarIngresso = false;

      this.form.controls['onibus'].setValue("");
      this.form.controls['ingresso'].setValue("");

    }else if(event.target.value === "Ônibus"){
      this.liberarAcomodacao = false;
      this.liberarQuarto = false;
      this.liberarOnibus = true;
      this.liberarIngresso = false;

      this.form.controls['ingresso'].setValue("");
      this.form.controls['quarto_hotel'].setValue("");
      this.form.controls['acomodacao_hotel'].setValue("");

    }else if(event.target.value === "Ingresso"){
      this.liberarAcomodacao = false;
      this.liberarQuarto = false;
      this.liberarOnibus = false;
      this.liberarIngresso = true;

      this.form.controls['onibus'].setValue("");
      this.form.controls['quarto_hotel'].setValue("");
      this.form.controls['acomodacao_hotel'].setValue("");
    }else{
      this.liberarAcomodacao = false;
      this.liberarQuarto = false;
      this.liberarOnibus = false;
      this.liberarIngresso = false;

      this.form.controls['onibus'].setValue("");
      this.form.controls['quarto_hotel'].setValue("");
      this.form.controls['acomodacao_hotel'].setValue("");
      this.form.controls['ingresso'].setValue("");
    }

  }

}
