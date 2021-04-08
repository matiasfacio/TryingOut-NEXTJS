import Post from "../components/posts/Post";
import PostPageStyle from "../components/styles/postsPagesStyles.js";
import LoadingPage from "../components/elementsLayout/loadingPageBlack";
import PageAnimation from "../components/styles/animatePages";

export default function posts({ articles }) {
  return (
    <>
      <LoadingPage>
        <h2>myHome.de</h2>
      </LoadingPage>
      <PageAnimation>
        <PostPageStyle>
          {articles.map((article) => (
            <Post article={article} />
          ))}
        </PostPageStyle>
      </PageAnimation>
    </>
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
