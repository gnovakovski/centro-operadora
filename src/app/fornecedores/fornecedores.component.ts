import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {

  public fornecedores: any

  constructor(private service: ServiceService, private toastr: ToastrService) {}

  ngOnInit() {

    this.getFornecedores();
  }

  getFornecedores(){
    this.service.getCollectionData('fornecedores').subscribe((data) => {

      this.fornecedores = data;

    });

  }

  deletarFornecedor(id: any){

    this.service.delete(id, "fornecedores")
      .then((resp) => {

        this.toastr.success('Fornecedor deletado com sucesso!', 'Deletar fornecedor');

        this.getFornecedores();
      })
      .catch((error) => {
        this.toastr.error(error, 'Erro');
      });
}

}
