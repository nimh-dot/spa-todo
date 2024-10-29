
const SubmitButton = ({title, handleClick}) => {
  return (
    <div>
        <button type="submit" onClick={handleClick}>{title}</button>
    </div>
  )
}

export default SubmitButton
