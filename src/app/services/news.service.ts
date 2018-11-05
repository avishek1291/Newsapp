import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { map, filter, scan } from 'rxjs/operators';
const news_url='https://api.nytimes.com/svc/topstories/v2/' ;
@Injectable()

export class NewsService {

  constructor(private httpservice:Http) { }

  getSectionNews(sectionName: string): any {
    console.log('at newsservice',sectionName)
    return this.httpservice.get(news_url+ sectionName + '.json?api-key=315a5a51483b469a918246dc2753b339').pipe(
    map(res=>res.json())
    )
  }

}
