import { Link } from 'react-router-dom'
// import Button from '../ui/Button'

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        ReactMarket
      </Link>

      {/* <nav className="header__nav">
        <ul>
          <li>
            <Button link="/produtos">Produtos</Button>
          </li>
        </ul>
      </nav> */}
    </header>
  )
}

export default Header
