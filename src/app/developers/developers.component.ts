import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Repository } from '../Repository';
import { Language } from '../language';
import { Developer } from '../developer';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {
  developers: Developer[];
  repos: Repository[];
  languages: Language[];
  times: string[];
  selectedLanguage: Language;
  selectedTime: string;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.times=['daily', 'weekly', 'monthly'];
    this.getLanguages();
    this.getDevelopers();
  }

  getDevelopers(): void {
    this.heroService.getDevelopers(this.selectedLanguage, this.selectedTime)
    .subscribe(developers => this.developers = developers.slice(0,24));
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

  changeLanguage(language: Language): void{
    this.selectedLanguage = language;
    this.getRepos();
  }

  changeTime(time: string): void{
    this.selectedTime = time;
    this.getRepos();
  }

}
