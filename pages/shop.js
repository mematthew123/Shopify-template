import { getProductsInCollection } from '../lib/shopify'
import ProductList from '../components/ProductList'
// import Hero from '../components/Hero'
// import Cta from '../components/Cta'

export default function shop({ products }) {
  return (
    <div>
      <ProductList products={products} />
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: { products }, // will be passed to the page component as props
  }
}
