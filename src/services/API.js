import axios from 'axios'

export class API {
    static posts = [];

    static getALLPosts(){
        let dataURL = 'https://techcrunch.com/wp-json/wp/v2/posts'
        return axios.get(dataURL);
    }
}