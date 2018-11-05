import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderComponent} from './components/header/header.component'
import { AppComponent } from './app.component';
import { SectionsComponent } from './components/sections/sections.component';
import {StoreModule} from '@ngrx/store';
import {sections} from '../app/store/reducers/sections.reducer';
import {NewsActions} from '../app/store/actions/news.actions';
import {SectionsAction} from '../app/store/actions/sections.actions'
import { initialState } from './store/reducers/news.reducer';
import { NewsService } from './services/news.service';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import { NewsComponent } from './components/news/news.component'
@NgModule({
  declarations: [
    AppComponent,HeaderComponent, SectionsComponent, NewsComponent
  ],
  imports: [
    BrowserModule,StoreModule.forRoot({sectionList:sections}),HttpModule,RouterModule.forRoot(routes)
  ],
  providers: [NewsActions,SectionsAction,NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
