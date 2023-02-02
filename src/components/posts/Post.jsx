import Heading from "../global/Heading";
import Paragraph from "../global/Paragraph";

const Post = ({ post }) => {
  return (
    <article className="post">
      <Heading tag="h3" attributes={{ className: "postTitle" }} textContent={post.postTitle} />
      <Paragraph className="postDescription" textContent={post.postDescription} />
    </article>
  );
};

export default Post;
