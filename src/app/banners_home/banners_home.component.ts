import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-banners_home',
  templateUrl: './banners_home.component.html',
  styleUrls: ['./banners_home.component.css']
})
export class Banners_homeComponent implements OnInit {

  public banner1: any
  public banner2: any
  public banner3: any
  public banner4: any
  public banner5: any
  public banner6: any

  public file1: any
  public file2: any
  public file3: any
  public file4: any
  public file5: any
  public file6: any

  public erro1: boolean = false
  public erro2: boolean = false
  public erro3: boolean = false
  public erro4: boolean = false
  public erro5: boolean = false
  public erro6: boolean = false

  public banners: any

  constructor(private router: Router, private service: ServiceService, public formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {

    this.getBannersById();

  }

  addFoto1(event: any): void {
    this.file1 = event.target.files[0];
    if (this.file1) {

      const reader = new FileReader();
      reader.onload = () => {
        this.banner1 = reader.result;

        if(this.erro1){
          this.update(this.file1, this.banners.banner1)
        }else{

          this.deleteAndUpdate(this.file1, this.banners.banner1);
        }

      };
      reader.readAsDataURL(this.file1);
    }
  }

  addFoto2(event: any): void {
    this.file2 = event.target.files[0];
    if (this.file2) {

      const reader = new FileReader();
      reader.onload = () => {
        this.banner2 = reader.result;
        this.deleteAndUpdate(this.file2, this.banners.banner2);
      };
      reader.readAsDataURL(this.file2);
    }
  }

  addFoto3(event: any): void {
    this.file3 = event.target.files[0];
    if (this.file3) {

      const reader = new FileReader();
      reader.onload = () => {
        this.banner3 = reader.result;
        this.deleteAndUpdate(this.file3, this.banners.banner3);
      };
      reader.readAsDataURL(this.file3);
    }
  }

  addFoto4(event: any): void {
    this.file4 = event.target.files[0];
    if (this.file4) {

      const reader = new FileReader();
      reader.onload = () => {
        this.banner4 = reader.result;
        this.deleteAndUpdate(this.file4, this.banners.banner4);
      };
      reader.readAsDataURL(this.file4);
    }
  }

  addFoto5(event: any): void {
    this.file5 = event.target.files[0];
    if (this.file5) {

      const reader = new FileReader();
      reader.onload = () => {
        this.banner5 = reader.result;
        this.deleteAndUpdate(this.file5, this.banners.banner5);
      };
      reader.readAsDataURL(this.file5);
    }
  }

  addFoto6(event: any): void {
    this.file6 = event.target.files[0];
    if (this.file6) {

      const reader = new FileReader();
      reader.onload = () => {
        this.banner6 = reader.result;
        this.deleteAndUpdate(this.file6, this.banners.banner6);
      };
      reader.readAsDataURL(this.file6);
    }
  }

  getBannersById() {
    this.service.getById("Din5nman7r7LqvFfUcOF", "banners_home").subscribe(data => {

      this.banners = data

      this.service.getImageUrl(this.banners.banner1).subscribe((url) => {

        this.banner1 = url
        
      }, error => {
        this.erro1 = true
      });

      this.service.getImageUrl(this.banners.banner2).subscribe((url) => {

        this.banner2 = url
        
      }, error => {
        this.erro2 = true
      });


      this.service.getImageUrl(this.banners.banner3).subscribe((url) => {

        this.banner3 = url
        
      }, error => {
        this.erro3 = true
      });

      this.service.getImageUrl(this.banners.banner4).subscribe((url) => {

        this.banner4 = url
        
      }, error => {
        this.erro4 = true
      });

      this.service.getImageUrl(this.banners.banner5).subscribe((url) => {

        this.banner5 = url
        
      }, error => {
        this.erro5 = true
      });

      this.service.getImageUrl(this.banners.banner6).subscribe((url) => {

        this.banner6 = url
        
      }, error => {
        this.erro6 = true
      });

    });
  }

  deleteAndUpdate(file: any, name: any) {
    
    this.service.removerFoto(name).then(() => {

        const fileName = name;
        this.service.uploadImage(file, fileName).subscribe((downloadUrl) => {
          this.toastr.success('Banner editado com sucesso!', 'Editar banner');
        }, error => {
          this.toastr.success(error, 'Erro ao editar o banner');
        });

      })
      .catch(error => {
      });
  }

  update(file: any, name: any){

    const fileName = name;

    this.service.uploadImage(file, fileName).subscribe((downloadUrl) => {
      this.toastr.success('Banner editado com sucesso!', 'Editar banner');
    }, error => {
      this.toastr.success(error, 'Erro ao editar o banner');
    });

  }

}
