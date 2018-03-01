import {request_index, request_show, response_index, response_show} from "../actions/post";
import {API_URL} from "../constants/app";

export function fetch_index(){
    return ((dispatch) => {
        dispatch(request_index());
        fetch(API_URL+"/api/posts")
            .then(response => response.json())
            .then(json => dispatch(response_index(json)))
    });
}

export function fetch_show(post_id){
    return ((dispatch) => {
        dispatch(request_show());
        fetch(API_URL+"/api/post/"+post_id)
            .then(response => response.json())
            .then(json => dispatch(response_show(json)))
    });
}
