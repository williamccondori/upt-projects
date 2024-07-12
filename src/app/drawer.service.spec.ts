import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private viewDrawerSource = new BehaviorSubject<boolean>(false);
  viewDrawer$ = this.viewDrawerSource.asObservable();

  setViewDrawer(state: boolean) {
    this.viewDrawerSource.next(state);
  }
}
