import { Component } from '@angular/core';
import { DrawerService } from '../../../../drawer.service.spec';


interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrl: './users-index.component.css'
})
export class UsersIndexComponent {
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  constructor(private readonly drawerService: DrawerService) { }

  create() {
    this.drawerService.setViewDrawer(true);
  }
}
