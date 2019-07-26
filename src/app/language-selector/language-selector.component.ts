import { Component, OnInit } from '@angular/core';
import { Language } from '../language';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {
  languages: Language[];
  times: string[];
  selectedLanguage: Language;
  selectedTime: string;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.times=['daily', 'weekly', 'monthly'];
    this.getLanguages();
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
  }

  changeTime(time: string): void{
    this.selectedTime = time;
  }

}
