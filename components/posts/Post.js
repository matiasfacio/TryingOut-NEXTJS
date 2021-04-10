import PostStyle from "./postStyles";
import WeiterlessenButton from "../elementsLayout/WeiterlessenButton";

export default function Post({ article }) {
  return (
      <PostStyle key = {article.title}>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
        <WeiterlessenButton>WEITER LESSEN..</WeiterlessenButton>
      </PostStyle>
  );
}
