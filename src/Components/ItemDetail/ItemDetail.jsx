import '../Item/style.css'

const ItemDetail = ({ itemSelected }) => {
    return (
      <div className='CardConteiner'>
          <h2 className='Title'>{itemSelected?.title}</h2>
          <img src={itemSelected?.image} alt={itemSelected?.title} width={70} />
          <div className='DivDescription'>
              <p>{itemSelected?.description}</p>
          </div>
  
          <p>${itemSelected?.price}</p>
      </div>
    )
  }
export default ItemDetail;