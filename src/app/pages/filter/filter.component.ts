import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  filterItems = [
    {
      title: 'Categories',
      items: [
        'Womens Bag',
        'Bottles',
        'Mens Shoe',
        'Toddler Dress',
      ]
    },
    {
      title: 'Availability',
      items: [
        'In Stock',
        'Out of Stock',
      ]
    },
    {
      title: 'Size',
      items: [
        'XS',
        'S',
        'M',
        'L',
        'XL',
        'XXL'
      ]
    },
    {
      title: 'Vendor',
      items: [
        'Bynd',
        'Hammer',
        'Polo',
        'Idea',
        'Codol',
        'Hubspot',
        'Salesforce'
      ]
    },
    {
      title: 'Product Type',
      items: [
        'Body Suit',
        'Hoodie',
        'Jacket',
        'Legging',
        'Short',
        'Top',
        'UG'
      ]
    },
  ]
}
