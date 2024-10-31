import { Component, HostListener, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-header-site',
  templateUrl: './header-site.component.html',
  styleUrls: ['./header-site.component.css']
})
export class HeaderSiteComponent implements OnInit {

  public innerWidth: any;
  public menu: boolean = false;
  public contato: any

  constructor(private service: ServiceService,) { }

  ngOnInit() {

    this.innerWidth = window.innerWidth;

    this.getContatoWhats();

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
