import Users from "../api/users.json";

export const FETCH_POSTS_BEGIN   = 'FETCH_POSTS_BEGIN';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchPostsBegin = () => ({
  type: FETCH_POSTS_BEGIN
});

export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { posts }
});

export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: { error }
});


export function fetchPosts() {
  return dispatch => {
    dispatch(fetchPostsBegin());
    // This is how a real API should be requested with fetch or axios
    return fetch("./api/posts.json")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {

        var posts = json.map(function(p) {
          let u = Users.find(u => u.id === p.userId);
           return {
             id: p.id,
             title: p.title,
             body: p.body,
             active: p.active,
             user: u.name
           };
        });

        dispatch(fetchPostsSuccess(posts));
        return posts;
      })
      .catch(error => dispatch(fetchPostsFailure(error)));
  };
}


function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
