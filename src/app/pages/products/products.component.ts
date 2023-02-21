import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: Product[];

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this._dataService.getProducts().subscribe(res => {
      this.products = res;
    });
  }
}
