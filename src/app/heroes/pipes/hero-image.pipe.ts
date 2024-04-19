import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  url_image: String = 'assets/no-image.png';

  transform(hero: Hero): String {
    if (hero.alt_img) {
      this.url_image = hero.alt_img;
    } else {
      this.url_image = `assets/heroes/${hero.id}.jpg`;
    }
    return this.url_image;
  }
}
