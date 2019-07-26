import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable } from 'rxjs';
import { Language } from './language';
import { Developer } from './developer';
import { tap } from 'rxjs/operators';
import { Time } from './time';

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {
  private languageUrl = 'https://github-trending-api.now.sh/languages';
  private developersUrl = 'https://github-trending-api.now.sh/developers';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getDevelopers (language: Language, since: Time): Observable<Developer[]> {
    console.log(language);
    return this.http.get<Developer[]>(this.developersUrl+'?language='+(language == null? '':language.urlParam) + '&since='+((since == null? '':since.urlParam)))
      .pipe(
        tap(_ => this.log('fetched devs'))
      );
  }

  getLanguages (): Observable<Language[]> {
    return this.http.get<Language[]>(this.languageUrl)
      .pipe(
        tap(_ => this.log('fetched languages'))
      );
  }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
