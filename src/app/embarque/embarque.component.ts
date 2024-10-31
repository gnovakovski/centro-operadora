import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-viagens',
  templateUrl: './embarque.component.html',
  styleUrls: ['./embarque.component.css']
})
export class EmbarqueComponent implements OnInit {

  public embarque: any
  public teste: any

  public loading: boolean = false
  toastr: any;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.getEmbarque()
  }

  deletarEmbarque(id: any){

    this.service.delete(id, "embarque-desembarque")
      .then((resp) => {

        this.toastr.success('Embarque deletada com sucesso!', 'Deletar embarque/desembarque');

        this.getEmbarque();
      })
      .catch((error) => {
        this.toastr.error(error, 'Erro');
      });
}

  getEmbarque(){
    this.service.getCollectionData('embarque-desembarque').subscribe((data) => {
      this.embarque = data
    });

  }
}
