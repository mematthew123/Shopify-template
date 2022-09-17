import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";
import Head from "next/head";
import Nav from "../components/Nav";

export default function Home({ products }) {
  return (
    <div className="">
      <Head>
        <title>ACEP 365 Swag shop</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ACESP 365 Swag shop" />
        <meta property="og:description" content="ACESP 365 Swag shop" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Hero />
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products }, // will be passed to the page component as props
  };
}
