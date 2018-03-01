import PostList from "../components/post_list";
import {connect} from "react-redux";
import {fetch_index, fetch_show} from "../apis/post";

function select(state){
    return {
        posts: state.PostReducer.posts,
        current_post: state.PostReducer.current_post
    };
}

function actions(dispatch){
    return {
        fetch_index: () => dispatch(fetch_index()),
        fetch_show: (post_id) => dispatch(fetch_show(post_id))
    };
}

export default connect(select, actions)(PostList);