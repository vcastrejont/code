import React from "react";
import { connect } from "react-redux";
import { fetchPosts} from "../actions";
import getVisiblePosts from '../selectors/posts';

class Posts extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;

    return (
      <section id="cards">
        {posts.map(post =>
           <div className="post" key={post.id}>
             <div className="card">

               <div className="card-body">
                 <h2>{post.title}</h2>
                 <p>{post.body}</p>
                 <p><strong> by {post.user}</strong></p>
                 <span className={"badge "+(post.active ? 'active' : 'noactive')}>{post.active ? 'Active' : 'Not active '}</span>
               </div>
             </div>
           </div>
         )}
     </section>

    );
  }
}

// const mapStateToProps = (state) => {
//   console.log(state);
//   return{
//     posts: state.posts.items
//   }
//   // filters: state
// };

const mapStateToProps = (state) => {
  console.log(state.filters);
    return {
        posts: getVisiblePosts(state.posts.items, state.filters)
    };
}

export default connect(mapStateToProps)(Posts);
