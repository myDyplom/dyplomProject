import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ICar} from '../../models/car.interface';

@Component({
  selector: 'app-car-item',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent implements OnInit {
  @Input() data: ICar;
  @Input() isExclusive: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {}

  viewDetails() {
    this.router.navigate(['details'], { queryParams: this.data });
  }
}

