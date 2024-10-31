import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ViagensComponent } from './viagens/viagens.component';
import { CadastrarViagemComponent} from './viagens/cadastrar-viagem/cadastrar-viagem.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CadastrarEmbarqueComponent } from './embarque/cadastrar-embarque/cadastrar-embarque.component'
import { EditarViagemComponent } from './viagens/editar-viagem/editar-viagem.component';
import { CadastrarClienteComponent } from './clientes/cadastrar-cliente/cadastrar-cliente.component';
import { VendasComponent } from './vendas/vendas.component';
import { CadastrarVendaComponent } from './vendas/cadastrar-venda/cadastrar-venda.component';
import { EditarVendaComponent } from './vendas/editar-venda/editar-venda.component';
import { EditarClienteComponent } from './clientes/cadastrar-cliente/editar-cliente/editar-cliente.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { CadastrarFornecedorComponent } from './fornecedores/cadastrar-fornecedor/cadastrar-fornecedor.component';
import { EditarFornecedorComponent } from './fornecedores/editar-fornecedor/editar-fornecedor.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NivelAcessoComponent } from './nivel-acesso/nivel-acesso.component';
import { CadastrarUsuarioComponent } from './usuarios/cadastrar-usuario/cadastrar-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { CadastrarNivelAcessoComponent } from './nivel-acesso/cadastrar-nivel-acesso/cadastrar-nivel-acesso.component';
import { EditarNivelAcessoComponent } from './nivel-acesso/editar-nivel-acesso/editar-nivel-acesso.component';
import { SobreViagemComponent } from './sobre-viagem/sobre-viagem.component';
import { EditarEmbarqueDesembarqueComponent } from './embarque/editar-embarque-desembarque/editar-embarque-desembarque.component';
import { ViagensLpComponent } from './viagens-lp/viagens-lp.component';
import { EmbarqueComponent } from './embarque/embarque.component';
import { Banners_homeComponent } from './banners_home/banners_home.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },

  {
    path: 'inicio',
    component: HomeComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'produtos',
    component: ViagensComponent
  },

  {
    path: 'clientes',
    component: ClientesComponent
  },

  {
    path: 'vendas',
    component: VendasComponent
  },

  {
    path: 'fornecedores',
    component: FornecedoresComponent
  },

  {
    path: 'usuarios',
    component: UsuariosComponent
  },

  {
    path: 'embarque-desembarque',
    component: EmbarqueComponent
  },

  {
    path: 'banners-home',
    component: Banners_homeComponent
  },

  {
    path: 'niveis-acesso',
    component: NivelAcessoComponent
  },

  {
    path: 'niveis-acesso/cadastrar-nivel-acesso',
    component: CadastrarNivelAcessoComponent
  },

  {
    path: 'niveis-acesso/editar-nivel-acesso/:id',
    component: EditarNivelAcessoComponent
  },

  {
    path: 'inicio/:id',
    component: SobreViagemComponent
  },

  {
    path: 'usuarios/cadastrar-usuario',
    component: CadastrarUsuarioComponent
  },

  {
    path: 'usuarios/editar-usuario/:id',
    component: EditarUsuarioComponent
  },

  {
    path: 'fornecedores/cadastrar-fornecedor',
    component: CadastrarFornecedorComponent
  },

  {
    path: 'fornecedores/editar-fornecedor/:id',
    component: EditarFornecedorComponent
  },

  {
    path: 'vendas/cadastrar-venda',
    component: CadastrarVendaComponent
  },

  {
    path: 'vendas/editar-venda/:id',
    component: EditarVendaComponent
  },

  {
    path: 'clientes/cadastrar-cliente',
    component: CadastrarClienteComponent
  },

  {
    path: 'clientes/editar-cliente/:id',
    component: EditarClienteComponent
  },

  {
    path: 'produtos/cadastrar-produto',
    component: CadastrarViagemComponent
  },

  {
    path: 'produtos/editar-produto/:id',
    component: EditarViagemComponent
  },

  {
    path: ':produto',
    component: ViagensLpComponent
  },

  {
    path: 'receptivos/:id',
    component: SobreViagemComponent
  },

  {
    path: 'circuitos/:id',
    component: SobreViagemComponent
  },

  {
    path: 'corporativos/:id',
    component: SobreViagemComponent
  },

  {
    path: 'eventos/:id',
    component: SobreViagemComponent
  },

  {
    path: 'embarque-desembarque/cadastrar-embarque-desembarque',
    component: CadastrarEmbarqueComponent
  },

  {
    path: 'embarque-desembarque/editar-embarque-desembarque/:id',
    component: EditarEmbarqueDesembarqueComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
