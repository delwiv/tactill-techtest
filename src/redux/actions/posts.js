import { createAction } from 'redux-actions';

export const getPosts = createAction('GET_POSTS', () => {
    return {
        promise: fetch('/api/posts', {
            method: 'get'
        })
    };
});

export const getCategories = createAction('GET_CATEGORIES', () => {
    return {
        promise: fetch('/api/posts/categories', {
            method: 'get'
        })
    };
});

export const getAuthors = createAction('GET_AUTHORS', () => {
    return {
        promise: fetch('/api/posts/authors', {
            method: 'get'
        })
    };
});

export const createPost = createAction('CREATE_POST', () => {
    return {
        promise: fetch('/api/posts', {
            method: 'post'
        })
    };
});

export const createCategory = createAction('CREATE_CATEGORY', () => {
    return {
        promise: fetch('/api/posts/categories', {
            method: 'post'
        })
    };
});

export const createAuthor = createAction('CREATE_AUTHOR', () => {
    return {
        promise: fetch('/api/posts/authors', {
            method: 'post'
        })
    };
});


// // import contentful from 'contentful-management';
//
// // const spaceId = '1wsvbvldx9yb';
// //
// // const client = contentful.createClient({
// //   accessToken: '3202e98b4c3bb779c65047ba05a4bfa8ac175161ad8b7f7aa4bdb35c4ffe513e',
// //   secure: true,
// //   space: spaceId
// // });
//
// // const oAuthHeaders = { headers: {
// //     Authorization: 'Bearer 3202e98b4c3bb779c65047ba05a4bfa8ac175161ad8b7f7aa4bdb35c4ffe513e'
// // } };
// // const base = `https://api.contentful.com/spaces/${spaceId}`;
// //
// export const init = createAction('INIT', () => ({
//     promise: client.getSpace(spaceId).then(response => {
//         return response.getEntries();
//     })
// }));
//
// export const getAll = createAction('GET_ALL', payload => ({
//     promise: payload.getEntries()
// }));
//
// // curl -v https://api.contentful.com/spaces/1wsvbvldx9yb/entries -H 'Authorization: Bearer 3202e98b4c3bb779c65047ba05a4bfa8ac175161ad8b7f7aa4bdb35c4ffe513e'
