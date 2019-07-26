import { Component, OnInit } from '@angular/core';
import { Repository } from '../Repository';
import { Language } from '../language';
import { RepositoriesService } from '../repositories.service';
import { Time } from '../time';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repos: Repository[];
  languages: Language[];
  times: Time[];
  selectedLanguage: Language;
  selectedTime: Time;

  constructor(private repoService: RepositoriesService) { }

  ngOnInit() {
    this.times=[{urlParam:'daily', name: 'Today'},{urlParam: 'weekly', name: 'This week'},{urlParam: 'monthly', name: 'This month'}];
    this.getLanguages();
    this.getRepos();
  }

  getRepos(): void{
    this.repoService.getRepos(this.selectedLanguage, this.selectedTime)
    .subscribe(repos => this.repos = repos.slice(0,24));
    console.log(this.repos);
  }

  getLanguages(): void{
    this.languages = [];
    this.languages.push({urlParam: "unknown", name: "Unknown Languages"});
    this.repoService.getLanguages()
    .subscribe((languages) =>{
      this.languages = this.languages.concat(languages);
      console.log(this.languages);
    });
  }


  changeLanguage(language: Language): void{
    this.selectedLanguage = language;
    this.getRepos();
  }

  changeTime(time: Time): void{
    this.selectedTime = time;
    this.getRepos();
  }

}
