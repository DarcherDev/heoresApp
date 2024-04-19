import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit{
  private heroesService: HeroesService;
  private activatedRoute: ActivatedRoute;
  private router : Router;

  public hero?: Hero;

  constructor(heroesService: HeroesService, activatedRoute: ActivatedRoute, router : Router){
    this.heroesService = heroesService;
    this.activatedRoute = activatedRoute;
    this.router = router;
  }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroesService.getHeroById(id)),
    ).subscribe(hero => {
      if (!hero){
        return this.router.navigate(['/heroes/list']);
      }else{
        return this.hero = hero;
      }
    })
  }
  goBack():void{
    this.router.navigateByUrl('heroes/list')
  }
}
