import { Component, OnInit, ElementRef } from '@angular/core';
declare var $: any;
import { ServiceService } from '../../service/service.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Select2Option } from 'ng-select2-component';
import { take } from 'rxjs';

@Component({
  selector: 'app-editar-nivel-acesso',
  templateUrl: './editar-nivel-acesso.component.html',
  styleUrls: ['./editar-nivel-acesso.component.css']
})
export class EditarNivelAcessoComponent implements OnInit {

  public form: any;
  public nivelAcessoId: any;
  public nivelAcesso: any;

  data: Select2Option[] = [
    { value: 'produtos', label: 'Produtos' },
    { value: 'produtos/cadastrar-produto', label: 'Cadastrar produto' },
    { value: 'produtos/editar-produto', label: 'Editar produto' },
    { value: 'clientes', label: 'Clientes' },
    { value: 'clientes/cadastrar-cliente', label: 'Cadastrar cliente' },
    { value: 'clientes/editar-cliente', label: 'Editar cliente' },
    { value: 'vendas', label: 'Vendas' },
    { value: 'vendas/cadastrar-venda', label: 'Cadastrar venda' },
    { value: 'vendas/editar-venda', label: 'Editar venda' },
    { value: 'fornecedores', label: 'Fornecedores' },
    { value: 'fornecedores/cadastrar-fornecedor', label: 'Cadastrar fornecedor' },
    { value: 'fornecedores/editar-fornecedor', label: 'Editar fornecedor' },
    { value: 'embarque-desembarque', label: 'Embarque/Desembarque' },
    { value: 'embarque-desembarque/cadastrar-embarque-desembarque', label: 'Cadastrar embarque/desembarque' },
    { value: 'embarque-desembarque/editar-embarque-desembarque', label: 'Editar embarque/desembarque' },
    { value: 'usuarios', label: 'Usuários' },
    { value: 'usuarios/cadastrar-usuario', label: 'Cadastrar usuários' },
    { value: 'usuarios/editar-usuario', label: 'Editar usuários' },
    { value: 'niveis-acesso', label: 'Níveis de acesso' },
    { value: 'niveis-acesso/cadastrar-nivel-acesso', label: 'Cadastrar níveis de acesso' },
    { value: 'niveis-acesso/editar-nivel-acesso', label: 'Editar níveis de acesso' },
    { value: 'configuracoes', label: 'Configurações' },

  ];

  public value: any = 1;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: ServiceService, public formBuilder: FormBuilder, private toastr: ToastrService, private el: ElementRef) {}


  ngOnInit() {

    this.nivelAcessoId = this.activatedRoute.snapshot.paramMap.get('id');

    this.form = this.formBuilder.group({
      nome: '',
      edicao_visualizacao: '',
      adm_sistema: '',
    });

    this.getNivelAcessoByIdß(this.nivelAcessoId)

  }

  voltar(){

    this.router.navigate(['/niveis-acesso']);

  }

  update(event: any) {
    console.log('Selecionado:', event);
  }

  onSubmit(){

    this.service.update(this.nivelAcessoId, this.form.value, "niveis_acesso")
      .then((resp) => {
        console.log(resp)
        this.toastr.success('Nível de acesso editado com sucesso!', 'Editar nível de acesso');


        this.router.navigate(['/niveis-acesso']);
      })
      .catch((error) => {
        this.toastr.error(error, 'Erro');
      });
  }

  getNivelAcessoByIdß(id: any) {

    this.service.getById(id, "niveis_acesso").pipe(take(1)).subscribe(data => {
      this.nivelAcesso = data;

      this.form.controls['nome'].setValue(this.nivelAcesso.nome);
      this.form.controls['edicao_visualizacao'].setValue(this.nivelAcesso.edicao_visualizacao);
      this.form.controls['adm_sistema'].setValue(this.nivelAcesso.adm_sistema);

    });
  }

}
