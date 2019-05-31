import { Component, OnInit } from '@angular/core';
import { ClienteRepositoryService } from 'src/app/repository/clienteRepository.service';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  displayedColumns = ['id', 'nome', 'email', 'actions'];
  dataSource = new ClienteDataSource(this.clienteRepository)

  constructor(private clienteRepository: ClienteRepositoryService) { }

  ngOnInit() {

  }

  removeCliente(id) {
    this.clienteRepository.remove(id).subscribe(
      ok => this.dataSource = new ClienteDataSource(this.clienteRepository)
    )
  }
}

export class ClienteDataSource extends DataSource<any>{
  constructor(private clienteRepository: ClienteRepositoryService){
    super()
  }

  connect(): Observable<Cliente[]> {
    return this.clienteRepository.getAll()
  }

  disconnect() {

  }
}
