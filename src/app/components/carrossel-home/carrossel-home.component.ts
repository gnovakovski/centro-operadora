import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-carrossel-home',
  templateUrl: './carrossel-home.component.html',
  styleUrls: ['./carrossel-home.component.scss']
})
export class CarrosselHomeComponent implements OnInit {

  @Input() valor: any

  constructor(private service: ServiceService) { }

  public slideConfig: any;

  ngOnInit() {
    this.slideConfig = {
      slidesToShow: 3,  // Exibe 3 cards em telas grandes
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1000,
      arrows: true, // Ativando as setas de navegação
      dots: false,
      pauseOnHover: false,
    };

    this.getViagensTipoAereo();
  }

  public viagens: any;

  carregandoImagens: boolean = true;

  getViagensTipoAereo() {
    this.service.getCollectionData('viagens').subscribe((data) => {
      const viagensAereas = data.filter((item: any) =>
        item.tipo_negocio === this.valor && item.carrossel !== false && item.carrossel !== ''
      );

      const totalViagens = viagensAereas.length;
      let imagensCarregadas = 0;

      this.viagens = viagensAereas.map((item: any) => {
        return {
          ...item,
          foto: '',
        };
      });

      this.viagens.forEach((item: any) => {
        this.service.getImageUrl(item.foto1).subscribe((url) => {
          item.foto = url;
          imagensCarregadas++;

          if (imagensCarregadas === totalViagens) {
            this.carregandoImagens = false;
          }
        });
      });
    });
  }
}
