import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  // Con la urlApi se obtiene un objeto
  data: any = {};

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // llamar al método del servicio de la api
    this.callServiceApi();
  }

  // llamar al servicio de la api
  callServiceApi() {
    this.apiService.getData().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
