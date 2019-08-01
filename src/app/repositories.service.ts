import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Language } from './language';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Repository } from './repository';
import { Time } from './time';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  private languageUrl = 'https://github-trending-api.now.sh/languages';
  private reposUrl = 'https://github-trending-api.now.sh/repositories';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    
    getRepos (language: Language, since: Time): Observable<Repository[]> {
      // var httpparams = new HttpParams();
      // if(language != null)
      //   httpparams.set('language', language.name);
      // httpparams.set('since', time);
      //console.log(httpparams);
      console.log(language);
      return this.http.get<Repository[]>(this.reposUrl+'?language='+(language == null? '':language.urlParam) + '&since='+((since == null? '':since.urlParam)))
        .pipe(
          tap(_ => this.log('fetched repos'))
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
