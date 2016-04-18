import { Map, Record } from 'immutable';
import { handleActions } from 'redux-actions';

const InitialState = Record({
    categories: new Map(),
    authors: new Map(),
    posts: new Map(),
    loaded: false,
});

const initialState = new InitialState();

export default handleActions({
    GET_POSTS: (state, action) => {
        return state.update('posts', posts => posts.merge(action.payload));
    },
    GET_CATEGORIES: (state, action) => {
        return state.update('categories', categories => categories.merge(action.payload));
    },
    GET_AUTHORS: (state, action) => {
        return state.update('authors', authors => authors.merge(action.payload));
    },
    GET_POST: (state, action) => {
        return state.update('posts', posts => posts.set(action.payload._id, action.payload));
    },
    GET_CATEGORY: (state, action) => {
        return state.update('categories', categories => categories.set(action.payload._id, action.payload));
    },
    GET_AUTHOR: (state, action) => {
        return state.update('authors', authors => authors.set(action.payload._id, action.payload));
    },
    UPDATE_POST: (state, action) => {
        return state.update('posts', posts => posts.set(action.payload._id, action.payload));
    },
    UPDATE_CATEGORY: (state, action) => {
        return state.update('categories', categories => categories.set(action.payload._id, action.payload));
    },
    UPDATE_AUTHOR: (state, action) => {
        return state.update('authors', authors => authors.set(action.payload._id, action.payload));
    },
    CREATE_POST: (state, action) => {
        return state.update('posts', posts => posts.merge(action.payload));
    },
    CREATE_CATEGORY: (state, action) => {
        return state.update('categories', categories => categories.merge(action.payload));
    },
    CREATE_AUTHOR: (state, action) => {
        return state.update('authors', authors => authors.merge(action.payload));
    },
    DELETE_POST: (state, action) => {
        return state.update('posts', posts => posts.delete(action.payload._id, action.payload));
    },
    DELETE_CATEGORY: (state, action) => {
        return state.update('categories', categories => categories.delete(action.payload._id, action.payload));
    },
    DELETE_AUTHOR: (state, action) => {
        return state.update('authors', authors => authors.delete(action.payload._id, action.payload));
    },
}, initialState);
