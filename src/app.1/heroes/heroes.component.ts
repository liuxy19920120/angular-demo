import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero'
import { HeroService } from '../service/hero.service' 
import { Router } from '@angular/router'

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: []
})
export class HeroesComponent implements OnInit{
  constructor(
    private heroService: HeroService,
    private router: Router
  ){};
  title = 'Tour of Heroes';
  selectedHero:Hero;
  heroes: Hero[];
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
  getHeroes(): void{
   this.heroService.getHeroes().then((heroes) =>{
      this.heroes = heroes;
   });
  };
  getHeroesSolwly():void{
    this.heroService.getHeroesSolwly().then((heroes) => {
      this.heroes = heroes;
    })
  };
  gotoDetail():void{
    this.router.navigate(['/heroDetails',this.selectedHero.id])
  };
  ngOnInit(): void{
    this.getHeroesSolwly();
  }
}
