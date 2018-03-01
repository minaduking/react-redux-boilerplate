import {REQUEST_INDEX, REQUEST_SHOW, RESPONSE_INDEX, RESPONSE_SHOW} from "../constants/post";

export function request_index(){
    return { type: REQUEST_INDEX };
}

export function response_index(posts){
    return { type: RESPONSE_INDEX, posts: posts};
}

export function request_show(){
    return { type: REQUEST_SHOW };
}

export function response_show(post){
    return { type: RESPONSE_SHOW, post: post };
}