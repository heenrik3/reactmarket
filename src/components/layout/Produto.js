import Button from '../ui/Button'

function Produto(props) {
  const { produto } = props

  return (
    <div className="card card--product">
      <picture className="card__picture">
        <img src={produto.image} alt={produto.id} />
      </picture>
      <span>
        {produto.name}{' '}
        {produto.isOrganic ? <p className="organic">Orgânico :)</p> : ''}
      </span>

      <div className="card__actions">
        <Button link={`/${produto.slug}`}>Detalhes</Button>
      </div>
    </div>
  )
}

export default Produto
