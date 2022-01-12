import React from "react";
import LoadingPage from "../components/elementsLayout/loadingPageBlack";
import PageAnimation from "../components/styles/animatePages";
import DisplaySales from "../components/styles/displaySales";
import SaleItem from "../lib/SaleItem";

export async function getServerSideProps() {
  try {
    const result = await fetch(
      `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&category=christmas&image_type=vector`
    );
    if (!result.ok) {
      throw new Error("error fetching data");
    }
    const data = await result.json();
    return {
      props: {
        data: data.hits,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default function Sales({ data }) {
  const [productsOnSale, setProductsOnSale] = React.useState(undefined);
  React.useEffect(() => {
    console.log(data);
    setProductsOnSale(data);
  }, [data]);

  if (!productsOnSale) {
    return <DisplaySales>Loading</DisplaySales>;
  }

  return (
    <>
      <LoadingPage>
        <h2>_STYLE_&_DESIGN_</h2>
      </LoadingPage>
      <PageAnimation>
        <DisplaySales>
          <h1>
            Items on <span>sale</span>
          </h1>
          {productsOnSale &&
            productsOnSale.map((pic) => (
              <SaleItem key={pic.id} pictureData={pic} />
            ))}
        </DisplaySales>
      </PageAnimation>
    </>
  );
}
