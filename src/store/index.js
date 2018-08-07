import { combineReducers } from 'redux'
import posts from '../reducers/posts'
import postsFilter from '../reducers/postsFilter'

export default combineReducers({
  posts: posts,
  filters:postsFilter
})
