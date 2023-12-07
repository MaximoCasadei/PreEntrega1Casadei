import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import './styles/ILC.css'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/ConfigFirebase";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoriaId } = useParams();

  //Llamando a Firebase

  // Este objeto lo creo para guardar las diferentes peticiones de firebase
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  // setLoading(true);

  // Inicio Opción 1 - Hacer petición a un único documento con el id de firebase
  // Aprendamos de las adversidades de otros y tengan en cuenta que si bien la diapositiva dice "items" el profe Rosendo puso "products"
  // const products = doc(db, "products", "DOHSZOUoYX5j5kSR750H");
  // getDoc(products).then((snapshot) => {
  // OJO! uso exists()
  // if (snapshot.exists()) {
  //     setItems({id: snapshot.id, ... snapshot.data()});
  //   }
  //   setLoading(false);
  // });
  // Fin Opción 1

  // Inicio Opción 2 - Hacer petición a una colección completa es decir mi array de productos
  // Aprendamos de las adversidades de otros y tengan en cuenta que si bien la diapositiva dice "items" el profe Rosendo puso "products"
  // const products = collection(db, "products");
  // getDocs(products).then((snapshot) => {
  // OJO uso size para el tamaño de ese array
  //     if (snapshot.size !== 0) {
  //       setItems(snapshot.docs.map((doc) => ({id: doc.id, ... doc.data()})));
  //     }
  //     setLoading(false);
  //   });
  // Fin Opción 2

  // Inicio Opción 3 - Hacer petición query con o sin limite
  // Aprendamos de las adversidades de otros y tengan en cuenta que si bien la diapositiva dice "items" el profe Rosendo puso "products"
  // En este ejemplo busco traer todos los productos de la categoria remeras y limitarlo a 5 resultados
  // const products = query(collection(db, "products"), where("categoria", "==", "remeras"), limit(5));
  // getDocs(products).then((snapshot) => {
  // OJO uso size para el tamaño de ese array
  //     if (snapshot.size !== 0) {
  //       setItems(snapshot.docs.map((doc) => ({id: doc.id, ... doc.data()})));
  //     }
  //     setLoading(false);
  //   });
  // Fin Opción 3

  // }, []);

  useEffect(() => {
    setLoading(true);

    const products = collection(db, "Item");
    getDocs(products).then((snapshot) => {
      if (snapshot.size !== 0) {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const prodFiltrados = data.filter(
          (prod) => prod.Categoría === categoriaId
        );
        setItems(categoriaId ? prodFiltrados : data);
      }
    });
    setLoading(false);

    // Ejemplo anterior a firebase
    // const getProducts = new Promise((resolve) => {
    //     const prodFiltrados = products.filter(
    //         (prod) => prod.categoria === categoriaId
    //     );
    //     setTimeout(() => {
    //       categoriaId ? resolve(prodFiltrados) : resolve(products);
    //     }, 2000);
    // });
    // getProducts
    //     .then((data) => {
    //         setItems(data);
    //         setLoading(false);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
  }, [categoriaId]);

  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;