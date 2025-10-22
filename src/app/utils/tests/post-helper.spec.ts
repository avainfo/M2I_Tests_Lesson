import {Post} from '../../models/post';
import {capitalizeTitle} from '../post-helper';

describe("Post Helper", () => {
  let mockPost: Post
  beforeEach(() => {
    mockPost = {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
  });
  it("should be capitalize", () => {
    let result = "SUNT AUT FACERE REPELLAT PROVIDENT OCCAECATI EXCEPTURI OPTIO REPREHENDERIT";
    expect(capitalizeTitle(mockPost)).toBe(result);
  })
});
