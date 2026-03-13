import "./Button.css"

export const Button = ({ name, className = "" }) => {
  return (
    <button className={`btn ${className}`}>
      {name}
    </button>
  )
}