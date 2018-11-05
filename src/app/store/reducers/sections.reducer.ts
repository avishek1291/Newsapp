import { Action, State } from '@ngrx/store';

// define actions
export const LOAD_SECTIONS = '[Section] LOAD_SECTIONS';

// initial state
 const initialState = [
        'home', 'opinion', 'world', 'national', 'politics', 'business', 'technology',
        'science', 'health', 'sports', 'arts', 'books', 'movies', 'theater', 'fashion',
        'food', 'travel', 'magazine', 'realestate', 'automobiles'
    ];

// implement actions
export function sections (state=initialState, action: Action) {
    console.log('receive action',action)
    switch (action.type) {
        case LOAD_SECTIONS: {
            console.log('inside load section reducer ', state)
            console.log('initial state',initialState)
        return state;
        }
        default:
            return state;
    }
}
