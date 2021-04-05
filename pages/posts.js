import Post from '../components/posts/Post'
import PostPageStyle from '../components/styles/postsPagesStyles.js'

export default function posts({ articles }) {
 
  return (
    <PostPageStyle>
      {articles.map((article) => (
        <Post article = {article} />
      ))}
    </PostPageStyle>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );

  const articles = await res.json();

  if (!res) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articles,
    },
    revalidate: 1,
  };
};
