import {Component, OnInit} from '@angular/core';
import {CARS} from '../../../assets/database/cars';
import {ICar} from '../../models/car.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carsList: ICar[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.setData();
  }

  setData() {
    this.carsList = CARS;
  }

  viewDetails() {
    this.router.navigate(['details'], {queryParams: this.carsList[0]});
  }
}
