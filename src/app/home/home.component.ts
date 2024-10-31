import { Component, HostListener, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public innerWidth: any;
  public banners: any

  public banner1: any
  public banner2: any
  public banner3: any
  public banner4: any
  public banner5: any
  public banner6: any

  constructor(private service: ServiceService,) { }

  ngOnInit() {

    this.innerWidth = window.innerWidth;

    this.getBannersById();

  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  getBannersById() {
    this.service.getById("Din5nman7r7LqvFfUcOF", "banners_home").subscribe(data => {

      this.banners = data

      this.service.getImageUrl(this.banners.banner1).subscribe((url) => {

        this.banner1 = url

      });

      this.service.getImageUrl(this.banners.banner2).subscribe((url) => {

        this.banner2 = url;

      });

      this.service.getImageUrl(this.banners.banner3).subscribe((url) => {

        this.banner3 = url;

      });

      this.service.getImageUrl(this.banners.banner4).subscribe((url) => {

        this.banner4 = url;

      });

      this.service.getImageUrl(this.banners.banner5).subscribe((url) => {

        this.banner5 = url;

      });

      this.service.getImageUrl(this.banners.banner6).subscribe((url) => {

        this.banner6 = url;

      });

    });
  }

}
