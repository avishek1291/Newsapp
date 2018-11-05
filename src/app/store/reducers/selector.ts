import {createSelector, State } from '@ngrx/store';
import { getNewsList, getFilter } from './news.reducer';

export const getNews = createSelector(getNewsList(State))
