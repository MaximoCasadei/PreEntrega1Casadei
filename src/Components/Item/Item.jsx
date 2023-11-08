import './style.css';

const Item = ({ title, description, price, image }) => {
  return (
    <div className='CardConteiner'>
        <h2 className='Title'>{title}</h2>
        <img src={image} alt={title} width={70} />
        <div className='DivDescription'>
            <p>{description}</p>
        </div>

        <p>${price}</p>
    </div>
  )
}

export default Item;