import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Select2Option } from 'ng-select2-component';

@Component({
  selector: 'app-editar-viagem',
  templateUrl: './editar-viagem.component.html',
  styleUrls: ['./editar-viagem.component.css']
})
export class EditarViagemComponent implements OnInit {


  public form: any;

  public viagem: any;

  public foto1: any;
  public foto2: any;
  public foto3: any;
  public foto4: any;
  public foto5: any;

  public file1: any;
  public file2: any;
  public file3: any;
  public file4: any;
  public file5: any;

  public viagemId: any;

  public embarque: any;

  public fornecedores: any;

  content = '';

  editorConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean'],                                         // remove formatting button

      ['link', 'image', 'video']                         // link and image, video
    ]
  };

  data: Select2Option[] = [];

  public value: any = 1;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: ServiceService, public formBuilder: FormBuilder, private toastr: ToastrService) {}

  ngOnInit() {

    this.viagemId = this.activatedRoute.snapshot.paramMap.get('id');

    this.form = this.formBuilder.group({
      titulo: '',
      vagas: '',
      data_ida: '',
      data_volta: '',
      whats_parceiro: '',
      tipo_negocio: '',
      valor_parcela: '',
      taxa_adm: '',
      fornecedor: '',
      markup: '',
      parcelamento: '',
      preco: '',
      roteiro: '',
      sobre_destino: '',
      servicos: '',
      passeios_opcionais: '',
      levar: '',
      documentos: '',
      aereo: '',
      rodoviario: '',
      embarque: '',
      ativo: '',
      foto1: '',
      foto2: '',
      foto3: '',
      foto4: '',
      foto5: '',
      carrossel: ''
    });

  this.getViagemById(this.viagemId);

  this.getFornecedores();
  this.getEmbarque();

}

getFornecedores(){
  this.service.getCollectionData('fornecedores').subscribe((data) => {

    this.fornecedores = data;

  });

}
  getViagemById(id: any){
    this.service.getById(id, "viagens").subscribe(data => {
      this.viagem = data;

      this.form.controls['titulo'].setValue(this.viagem.titulo);
      this.form.controls['vagas'].setValue(this.viagem.vagas);
      this.form.controls['data_ida'].setValue(this.viagem.data_ida);
      this.form.controls['data_volta'].setValue(this.viagem.data_volta);
      this.form.controls['whats_parceiro'].setValue(this.viagem.whats_parceiro);
      this.form.controls['tipo_negocio'].setValue(this.viagem.tipo_negocio);
      this.form.controls['valor_parcela'].setValue(this.viagem.valor_parcela);
      this.form.controls['taxa_adm'].setValue(this.viagem.taxa_adm);
      this.form.controls['fornecedor'].setValue(this.viagem.fornecedor);
      this.form.controls['markup'].setValue(this.viagem.markup);
      this.form.controls['parcelamento'].setValue(this.viagem.parcelamento);
      this.form.controls['preco'].setValue(this.viagem.preco);
      this.form.controls['roteiro'].setValue(this.viagem.roteiro);
      this.form.controls['sobre_destino'].setValue(this.viagem.sobre_destino);
      this.form.controls['servicos'].setValue(this.viagem.servicos);
      this.form.controls['passeios_opcionais'].setValue(this.viagem.passeios_opcionais);
      this.form.controls['levar'].setValue(this.viagem.levar);
      this.form.controls['documentos'].setValue(this.viagem.documentos);
      this.form.controls['aereo'].setValue(this.viagem.aereo);
      this.form.controls['rodoviario'].setValue(this.viagem.rodoviario);
      this.form.controls['ativo'].setValue(this.viagem.ativo);
      this.form.controls['embarque'].setValue(this.viagem.embarque);
      this.form.controls['carrossel'].setValue(this.viagem.carrossel);

      this.form.controls['foto1'].setValue(this.viagem.foto1);
      this.form.controls['foto2'].setValue(this.viagem.foto2);
      this.form.controls['foto3'].setValue(this.viagem.foto3);
      this.form.controls['foto4'].setValue(this.viagem.foto4);
      this.form.controls['foto5'].setValue(this.viagem.foto5);

     if(this.viagem.foto1){
      this.service.getImageUrl(this.viagem.foto1).subscribe((url) => {

        this.foto1 = url

       });
     }

     if(this.viagem.foto2){
      this.service.getImageUrl(this.viagem.foto2).subscribe((url) => {

        this.foto2 = url;

       });
     }

     if(this.viagem.foto3){
      this.service.getImageUrl(this.viagem.foto3).subscribe((url) => {

        this.foto3 = url;

       });
     }


     if(this.viagem.foto4){
      this.service.getImageUrl(this.viagem.foto4).subscribe((url) => {

        this.foto4 = url;

       });
     }


     if(this.viagem.foto5){
      this.service.getImageUrl(this.viagem.foto5).subscribe((url) => {

        this.foto5 = url;

       });
     }


    });
  }

  getEmbarque(){
    this.service.getCollectionData('embarque-desembarque').subscribe((data) => {

      this.embarque = data

      this.data = this.embarque.map((embarqueDesembarque: any) => {
        return { value: embarqueDesembarque.EnderecoEmbarqueDesembarque, label: embarqueDesembarque.EnderecoEmbarqueDesembarque };
      });
    });

  }

  update(event: any) {
    console.log('Selecionado:', event);
  }

  formatarValor(valor: any){

    valor = valor.replace(/[.,]/g, '');

    let valorPreco = Number(valor)/ 100;

    let valorPrecoFormatado = valorPreco.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

     return valorPrecoFormatado;

  }

  onSubmit() {

    this.form.value.preco = this.formatarValor(this.form.value.preco);
    this.form.value.markup = this.formatarValor(this.form.value.markup);
    this.form.value.taxa_adm = this.formatarValor(this.form.value.taxa_adm);
    this.form.value.valor_parcela = this.formatarValor(this.form.value.valor_parcela);

     this.service.update(this.viagemId, this.form.value, "viagens")
       .then((resp) => {

         this.toastr.success('Produto editada com sucesso!', 'Editar produto');

        if(this.file1){
          this.upload(this.file1, this.form.value.foto1);
        }

        if(this.file2){
          this.upload(this.file2, this.form.value.foto2);
        }

        if(this.file3){
          this.upload(this.file3, this.form.value.foto3);
        }

        if(this.file4){
          this.upload(this.file4, this.form.value.foto4);
        }

        if(this.file5){
          this.upload(this.file5, this.form.value.foto5);
        }

        this.router.navigate(['/produtos']);
       })
       .catch((error) => {
         this.toastr.error(error, 'Erro');
         console.error('Erro ao Salvar put imagem:', error);
       });
  }

  removeFoto1(){
    this.foto1 = "";
    this.file1 = "";

    this.form.controls['foto1'].setValue("");
  }

  removeFoto2(){
    this.foto2 = "";
    this.file2 = "";
    this.form.controls['foto2'].setValue("");

  }

  removeFoto3(){
    this.foto3 = "";
    this.file3 = "";
    this.form.controls['foto3'].setValue("");

  }

  removeFoto4(){
    this.foto4 = "";
    this.file4 = "";
    this.form.controls['foto4'].setValue("");

  }

  removeFoto5(){
    this.foto5 = "";
    this.file5 = "";
    this.form.controls['foto5'].setValue("");

  }

  removerFoto(nomeArquivo: string): void {
    this.service.removerFoto(nomeArquivo)
      .then(() => {
        console.log('Foto removida com sucesso!');
      })
      .catch(error => {
      });
  }

  voltar(){

    this.router.navigate(['/produtos']);

  }

  addFoto1(event: any): void {
    this.file1 = event.target.files[0];
    if (this.file1) {

      this.form.controls['foto1'].setValue(`minha-imagem1-${new Date().getTime()}`);

      const reader = new FileReader();
      reader.onload = () => {
        this.foto1 = reader.result;
      };
      reader.readAsDataURL(this.file1);
    }
  }

  addFoto2(event: any): void {
    this.file2 = event.target.files[0];
    if (this.file2) {

      this.form.controls['foto2'].setValue(`minha-imagem2-${new Date().getTime()}`);

      const reader = new FileReader();
      reader.onload = () => {
        this.foto2 = reader.result;
      };
      reader.readAsDataURL(this.file2);
    }
  }

  addFoto3(event: any): void {
    this.file3 = event.target.files[0];
    if (this.file3) {

      this.form.controls['foto3'].setValue(`minha-imagem3-${new Date().getTime()}`);

      const reader = new FileReader();
      reader.onload = () => {
        this.foto3 = reader.result;
      };
      reader.readAsDataURL(this.file3);
    }
  }

  addFoto4(event: any): void {
    this.file4 = event.target.files[0];
    if (this.file4) {

      this.form.controls['foto4'].setValue(`minha-imagem4-${new Date().getTime()}`);

      const reader = new FileReader();
      reader.onload = () => {
        this.foto4 = reader.result;
      };
      reader.readAsDataURL(this.file4);
    }
  }

  addFoto5(event: any): void {
    this.file5 = event.target.files[0];
    if (this.file5) {

      this.form.controls['foto5'].setValue(`minha-imagem5-${new Date().getTime()}`);

      const reader = new FileReader();
      reader.onload = () => {
        this.foto5 = reader.result;
      };
      reader.readAsDataURL(this.file5);
    }
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

}
