import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Repository } from '../Repository';
import { Language } from '../language';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  repos: Repository[];
  languages: Language[];
  times: string[];
  selectedLanguage: Language;
  selectedTime: string;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.times=['daily', 'weekly', 'monthly'];
    this.getLanguages();
    this.getRepos();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  getRepos(): void{
    this.heroService.getRepos(this.selectedLanguage, this.selectedTime)
    .subscribe(repos => this.repos = repos.slice(0,24));
    console.log(this.repos);
  }

  getLanguages(): void{
    this.languages = [];
    this.languages.push({urlParam: "unknown", name: "Unknown Languages"});
    this.heroService.getLanguages()
    .subscribe((languages) =>{
      this.languages = this.languages.concat(languages);
      console.log(this.languages);
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }


  changeLanguage(language: Language): void{
    this.selectedLanguage = language;
    this.getRepos();
  }

  changeTime(time: string): void{
    this.selectedTime = time;
    this.getRepos();
  }

}
