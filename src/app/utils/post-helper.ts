import {Post} from '../models/post';

export function capitalizeTitle(post: Post) {
  return post.title.toUpperCase();
}
