import Header from './Header'

function Layout(props) {
  return (
    <div className="app">
      <Header />
      {props.children}
    </div>
  )
}

export default Layout
