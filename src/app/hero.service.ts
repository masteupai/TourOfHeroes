import { Injectable } from '@angular/core';

import { Observable, of } from  'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class HeroService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient
    ){ }

    /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
    }
  private heroesUrl = 'api/heroes';  // URL to web api

  //get heroes with httpclient


  // getHeroes(): Observable<Hero[]> {
  //  this.messageService.add('HeroService: fetched heroes')
  // return of(HEROES);
  // } 
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  /** GET heroes from the server */
  getHeroess (): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  
}
