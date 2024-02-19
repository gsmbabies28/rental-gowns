

const Background = ({image}) => {
  return (
    <div className="bg-fixed bg-cover mx-auto ">
        <img src={image} alt="" className="opacity-60"/>
    </div>
  )
}

export default Background