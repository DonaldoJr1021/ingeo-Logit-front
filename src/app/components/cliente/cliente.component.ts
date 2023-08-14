// cliente.component.ts
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service/cliente.service';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [ClienteService]
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private httpCliente: ClienteService) { }

  getClients(): void{
    this.httpCliente.getAllClientes().subscribe(res => {
      this.clientes = res.data
    })
  }

  ngOnInit(): void {
    this.getClients();
  }
}
