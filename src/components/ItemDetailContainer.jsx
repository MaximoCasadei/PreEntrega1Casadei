import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/ConfigFirebase';


const ItemDetailContainer = () => {
    const [details, setDetails] = useState()
    console.log("🚀 ~ file: ItemDetailContainer.jsx:12 ~ ItemDetailContainer ~ details:", details)
    const {id} = useParams()

    // Ejemplo anterior
    // const getProducts = new Promise ((resolve) => {
    //     setTimeout(() => {
    //         resolve(products.filter(prod => prod.id === Number(id)))
    //     }, 2000);
    // });
    
    useEffect(() => {
        const products = doc(db, "Item", `${id}`);
        getDoc(products).then((snapshot) => {
          if (snapshot.exists()) {
            setDetails({
                id: snapshot.id,
                ...snapshot.data(),
              })
        }
        });
        // Ejemplo anterior
        // .then((data) => {
        //     setDetails(data);
        // })
        // .catch((error) => {
        //     console.log(error);
        // })
    }, [])

  return (
    <div>
        {!details ?
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
        : <ItemDetail details={details}/>
        }
    </div>
  )
}

export default ItemDetailContainer