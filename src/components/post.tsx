import { PostState } from "../posts.ts";

export const Post = (props: {post: PostState}) => (
  <div class="w-full p-12 overflow-hidden">
    <h1>{props.post.title}</h1>
    <div innerHTML={{__dangerousHtml: props.post.content}}></div>
  </div>
);
