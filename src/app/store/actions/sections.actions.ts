import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';



@Injectable()
export class SectionsAction {
    
    static LOAD_SECTIONS ='[Section] LOAD_SECTIONS';
    
    
  

    LoadSections():Action{
       return { 
           type:SectionsAction.LOAD_SECTIONS
       }
    }

}
