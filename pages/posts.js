import Post from "../components/posts/Post";
import PostPageStyle from "../components/styles/postsPagesStyles.js";
import LoadingPage from "../components/elementsLayout/loadingPageBlack";
import PageAnimation from "../components/styles/animatePages";

export default function posts({ articles }) {
  return (
    <>
      <LoadingPage>
        <h2>_STYLE_&_DESIGN_</h2>
      </LoadingPage>
      <PageAnimation>
        <PostPageStyle>
          {articles.map((article) => (
            <Post article={article} key={article.title} />
          ))}
        </PostPageStyle>
      </PageAnimation>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=6`
    );
    if (!res.ok) {
      throw new Error("Error fetching data ohlala");
    }
    const articles = await res.json();

    return {
      props: {
        articles,
      },
      revalidate: 1,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
