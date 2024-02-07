const Button = (props) => {
  return (
    <button 
        {...props} 
        className={`bg-blue-600 py-1 px-3 rounded-md text-sm ${props.classes} ${props.primary?"bg-blue-600":""}`} 
    />
  )
}

export default Button