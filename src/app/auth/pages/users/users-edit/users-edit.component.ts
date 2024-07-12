import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DrawerService } from '../../../../drawer.service.spec';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrl: './users-edit.component.css'
})
export class UsersEditComponent implements OnInit, OnDestroy {
  visible = false;
  private subscription!: Subscription;

  constructor(private readonly drawerService: DrawerService) {

  }

  ngOnInit() {
    this.subscription = this.drawerService.viewDrawer$.subscribe(state => {
      this.visible = state;
    });
  }

  close() {
    this.visible = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
