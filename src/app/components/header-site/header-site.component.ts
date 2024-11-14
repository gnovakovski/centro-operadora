import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header-site',
  templateUrl: './header-site.component.html',
  styleUrls: ['./header-site.component.css']
})
export class HeaderSiteComponent implements OnInit {

  public innerWidth: any;
  public menu: boolean = false;
  public contato: any
  public form_agente: any

  modalRef: NgbModalRef | undefined;

  constructor(public modalService: NgbModal, private router: Router, private service: ServiceService, public formBuilder: FormBuilder, private toastr: ToastrService) {}

  ngOnInit() {

    this.innerWidth = window.innerWidth;

    this.getContatoWhats();

    this.form_agente = this.formBuilder.group({
      nome: '',
      usuario: '',
      senha: '',
      email: '',
      nivel_acesso: 'Agente',
      status: 'false',
    });

  }

  openModal(contentModal: any) {
    this.modalRef = this.modalService.open(contentModal, { size: 'lg', ariaLabelledBy: 'modal-basic-title', centered: true, backdrop: true, keyboard: true });
  }

  post(){

      this.service.post(this.form_agente.value, "agentes")
        .then((resp) => {
          console.log(resp)
          this.toastr.success('Agente registrado com sucesso! aguarde um administrador entrar em contato', 'Cadastrar');
  
            this.service.registerWithEmail(this.form_agente.value.email, this.form_agente.value.senha)
              .then((result) => {
                console.log('sucesso', result);
              })
              .catch((error) => {
                console.error('Erro ao registrar:', error);
              });
  
              if (this.modalRef) {
                this.modalRef.close();
              }

              this.form_agente = this.formBuilder.group({
                nome: '',
                usuario: '',
                senha: '',
                email: '',
                nivel_acesso: 'Agente',
                status: 'false',
              });

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

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  abrirMenu(){

    this.menu = !this.menu

  }

  whats(){
    window.location.href = this.contato.link
  }

  getContatoWhats(){
    this.service.getById("T8oT1pxOSCwAIXPTMYNZ", "contato_whats").subscribe(data => {
      this.contato = data;

    });
  }
}
