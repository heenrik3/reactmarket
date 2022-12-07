import { Link } from 'react-router-dom'

function Button(props) {
  let button

  if (props.link) {
    button = (
      <Link to={props.link} className="btn">
        {props.children}
      </Link>
    )
  } else {
    button = (
      <button className="btn" onClick={props.onClick}>
        {props.children}
      </button>
    )
  }

  return button
}

export default Button
