import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { Heroes } from '../data/mock-heroes'

@Injectable()
export class HeroService{
    getHeroes() : Promise<Hero[]>{
        return Promise.resolve(Heroes);
    }
    getHeroesSolwly() : Promise<Hero[]>{
        return new Promise((resolve) =>{
           setTimeout(() =>{
               resolve(this.getHeroes())
           },2000)
        })
    }
    getHero(id:number): Promise<Hero>{
        return this.getHeroes()
         .then(heroes => heroes.find(hero => hero.id === id));
    }
}