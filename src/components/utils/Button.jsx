

const Button = ({margin,type="button",text="button"}) => {
  return (
    <button type={type} className={`tracking-widest rounded-md bg-gray-800 px-12 py-3 text-md font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 mt-${margin}`}>{text}</button>
  )
}

export default Button