import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../components/ui/Spinner'

function ProdutoDetail() {
  const { id } = useParams()
  const [isLoading, setLoading] = useState(true)
  const [product, setProduct] = useState({})

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(
          `https://concerned-newt-flip-flops.cyclic.app/react-market/${id}`
        )

        const data = await res.json()

        setLoading(false)
        setProduct(data.data.data[0])
      }
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }, [id])

  if (isLoading) {
    return <Spinner />
  }

  if (!product) {
    return (
      <div className="product card">
        <h1>Produto não encontrado!</h1>
      </div>
    )
  }

  return (
    <figure className="product">
      <Link to="/" className="product__back">
        <span>👈 voltar</span>
      </Link>
      <picture className="product__picture" data={product.name}>
        <img src={product.image} alt={product.id} />
      </picture>
      <div className="product__details">
        <span>🌎 {product.from}</span>
        <span>🧾 {product.nutrients}</span>
        <span>📦 {product.quantity}</span>
        <span>🏷 R$ {product.price}</span>
      </div>

      <Link to="#" className="product__link">
        <span>Adicionar ao carrinho 🛒</span>
      </Link>

      <p className="product__description">{product.description}</p>

      {product.isOrganic ? (
        <span className="product__marker">Orgânico!</span>
      ) : (
        ''
      )}
    </figure>
  )
}

export default ProdutoDetail
