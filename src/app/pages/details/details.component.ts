import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CARS} from '../../../assets/database/cars';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public carsList = null;
  public carDetails = null;
  public routeQueryParamMap = null;

  constructor(private route: ActivatedRoute, private viewportScroller: ViewportScroller) {
    this.viewportScroller.scrollToAnchor('home-section');
  }

  ngOnInit(): void {
    this.setCarData();
    this.setCarsList();
  }

  setCarData() {
    this.routeQueryParamMap = this.route.snapshot.queryParamMap;
    this.carDetails = this.routeQueryParamMap.params;
  }

  setCarsList() {
    this.carsList = CARS;
  }
}
