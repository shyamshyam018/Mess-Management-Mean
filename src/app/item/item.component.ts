import { Component } from '@angular/core';


interface Item {
  elements: string;
  item: string;
  status: string;
  action: string;
}

@Component({
  selector: 'app-item-table',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemTableComponent {
  items: Item[] = [
    { elements: 'Products', item: 'Computer', status: '', action: 'Action' },
    { elements: '$ Orders', item: 'Clothes', status: '', action: 'Action' },
    { elements: 'Members', item: 'Smartphone', status: '', action: 'Action' },
    { elements: 'Permission', item: 'Laptop', status: '', action: 'Action' },
    { elements: 'Company', item: 'Accessories', status: '', action: 'Action' },
    { elements: '', item: 'Others', status: '', action: 'Action' },
  ];

  displayedColumns: string[] = ['elements', 'item', 'status', 'action'];
}