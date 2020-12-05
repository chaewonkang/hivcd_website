import axios from "axios";

export function getPost(postId) {
  // return axios.get("https://jsonplaceholder.typicode.com/posts/" + postId);
  return axios.get("http://127.0.0.1:8000/api/v1/postings/" + postId);
}

export function getComments(postId) {
  // `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  return axios.get(`http://127.0.0.1:8000/api/v1/postings/${postId}/comments`);
}
