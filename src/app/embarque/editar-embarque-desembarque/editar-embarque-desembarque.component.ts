import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editar-embarque-desembarque',
  templateUrl: './editar-embarque-desembarque.component.html',
  styleUrls: ['./editar-embarque-desembarque.component.css']
})
export class EditarEmbarqueDesembarqueComponent implements OnInit {

  public embarqueId: any;
  public viagens: any;
  public form: any;
  public clientes: any;
  public embarque: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: ServiceService, public formBuilder: FormBuilder, private toastr: ToastrService) {}

  ngOnInit() {

    this.embarqueId = this.activatedRoute.snapshot.paramMap.get('id');

    this.form = this.formBuilder.group({
      viagem: '',
      horarioEmbarqueDesembarque: '',
      EnderecoEmbarqueDesembarque: '',
      embarqueDesembarque: '',
    });

    this.getViagens();
    this.getEmbarqueById(this.embarqueId);

  }

  getEmbarqueById(id: any){

    this.service.getById(id, "embarque-desembarque").subscribe(data => {
      this.embarque = data;

      this.form.controls['horarioEmbarqueDesembarque'].setValue(this.embarque.horarioEmbarqueDesembarque);
      this.form.controls['EnderecoEmbarqueDesembarque'].setValue(this.embarque.EnderecoEmbarqueDesembarque);
      this.form.controls['viagem'].setValue(this.embarque.viagem);
      this.form.controls['embarqueDesembarque'].setValue(this.embarque.embarqueDesembarque);

    });
  }

  getViagens(){
    this.service.getCollectionData('viagens').subscribe((data) => {

      this.viagens = data;

    });

  }

  voltar(){

    this.router.navigate(['/embarque-desembarque']);

  }
  editar(){

      this.service.update(this.embarqueId, this.form.value, "embarque-desembarque")
        .then((resp) => {

          this.toastr.success('Embarque editado com sucesso!', 'Editar embarque');

         this.router.navigate(['/embarque-desembarque']);
        })
        .catch((error) => {
          this.toastr.error(error, 'Erro');
        });
  }
}
