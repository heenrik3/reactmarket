import { useEffect, useState } from 'react'

import Produto from '../components/layout/Produto.js'
import Spinner from '../components/ui/Spinner.js'

function Produtos() {
  document.title = 'ReactMarket'

  const [isLoading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://spotless-underwear-fly.cyclic.app/products`
        )
        if (!res.ok) return

        const data = await res.json()

        setLoading(false)
        setProducts(
          data.data.products.map((item, index) => (
            <Produto produto={item} key={index} />
          ))
        )
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return <Spinner />
  }

  return <ul className="products">{products}</ul>
}

export default Produtos
