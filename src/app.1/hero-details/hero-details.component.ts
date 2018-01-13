import { Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import { Hero } from '../model/hero'
import {HeroService} from '../service/hero.service'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'hero-details',
  styleUrls:['./hero-details.component.css'],
  templateUrl: './hero-details.component.html'
})
export class HeroDetailsComponent implements OnInit{
  @Input() selectedHero:Hero;
  constructor(
    private heroService:HeroService,
    private route:ActivatedRoute,
    private location:Location
  ){}
 ngOnInit(): void {
  this.route.paramMap
    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
    .subscribe(hero => this.selectedHero = hero);
  }
  goBack():void{
    this.location.back();
  }
}
