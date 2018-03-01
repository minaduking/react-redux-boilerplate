import {REQUEST_INDEX, REQUEST_SHOW, RESPONSE_INDEX, RESPONSE_SHOW} from "../constants/post";

const initialState = {
    posts: [],
    current_post: {
        id: 0,
        title: '',
        description: '',
        image_url: ''
    }
};

export default function PostReducer(state = initialState, action = {}){
    switch (action.type) {
        case REQUEST_INDEX:
            return state;
        case RESPONSE_INDEX:
            return state;
        case REQUEST_SHOW:
            return state;
        case RESPONSE_SHOW:
            return state;
        default:
            return state;
    }
};