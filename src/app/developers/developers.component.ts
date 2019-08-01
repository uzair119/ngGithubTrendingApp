import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { Language } from '../language';
import { Developer } from '../developer';
import { DevelopersService } from '../developers.service';
import { Time } from '../time';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {
  developers: Developer[];
  repos: Repository[];
  languages: Language[];
  times: Time[];
  selectedLanguage: Language;
  selectedTime: Time;

  constructor(private devService: DevelopersService) { }

  ngOnInit() {
    this.times=[{urlParam:'daily', name: 'Today'},{urlParam: 'weekly', name: 'This week'},{urlParam: 'monthly', name: 'This month'}];
    this.getLanguages();
    this.getDevelopers();
  }

  getDevelopers(): void {
    this.devService.getDevelopers(this.selectedLanguage, this.selectedTime)
    .subscribe(developers => this.developers = developers.slice(0,24));
    console.log(this.developers);
  }

  getLanguages(): void{
    this.languages = [];
    this.languages.push({urlParam: "unknown", name: "Unknown Languages"});
    this.devService.getLanguages()
    .subscribe((languages) =>{
      this.languages = this.languages.concat(languages);
      console.log(this.languages);
    });
  }

  changeLanguage(language: Language): void{
    this.selectedLanguage = language;
    this.getDevelopers();
  }

  changeTime(time: Time): void{
    this.selectedTime = time;
    this.getDevelopers();
  }

}
