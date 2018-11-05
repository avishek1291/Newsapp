import { Component, OnInit } from '@angular/core';
import  {Store} from '@ngrx/store';
import {SectionsAction} from '../../store/actions/sections.actions';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'

import {NewsService} from '../../services/news.service'
@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  
  constructor(private store :Store<any>,private sectionAction:SectionsAction,private newsservice:NewsService,private router:Router) { }
  sectionList:any=[]
  ngOnInit() {
    //1.dispatch  the action
    this.store.dispatch(this.sectionAction.LoadSections());
    this.store.select('sectionList').subscribe(sections=>{
    this.sectionList=sections;
    })
    
  }

   navigateItem(sectionName){
 //  this.router.navigate(['/'+sectionName]);

    this.newsservice.getSectionNews(sectionName).subscribe(res=>{
      console.log(res)
    })
    
  }
  
}
