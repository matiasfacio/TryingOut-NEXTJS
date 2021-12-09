import Image from "next/image";
import PageAnimation from "../components/styles/animatePages";
import LoadingPage from "../components/elementsLayout/loadingPageBlack";

export default function Unplash(props) {
  console.log(props);
  return (
    <div>
      <LoadingPage>
        <h2>_STYLE_&_DESIGN_</h2>
      </LoadingPage>
      <PageAnimation>
        <h2 style={{ textAlign: "center" }}>Unplash</h2>
        <div
          style={{
            display: "flex",
            flewWrap: "wrap",
            width: "100vw",
            flexShrink: 0,
            flexGrow: 1,
            overflow: "scroll",
          }}
        >
          {props.data &&
            props.data.map((pic) => {
              return (
                <div
                  key={pic.alt_description}
                  style={{ padding: 20, minWidth: "200px" }}
                >
                  <Image width={200} height={200} src={pic.urls.raw} />
                  {pic.user.name}
                </div>
              );
            })}
        </div>
      </PageAnimation>
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const result = await fetch("http://localhost:3001/api/unplash");
    if (!result.ok) {
      throw new Error("error fetching unplash");
    }
    const data = await result.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
