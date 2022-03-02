import React from "react";
import { useEffect, useState } from "react";
import { Card, Col, Row, Spinner, Breadcrumb } from "react-bootstrap";
import { useParams } from "react-router";
import  baseDeDatos  from "../Productos/productos.json"
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";



export const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState([""]);
     
    const {id} = useParams();   


    const obtenerProductoBD = (nombreProducto) => {
        
        return new Promise((resolve, reject)=> {
            const arregloProductosBD = baseDeDatos;           
            const productoEncontrado = arregloProductosBD.find((elemento)=>elemento.id === nombreProducto);   
            setTimeout(() => { 
                resolve(productoEncontrado)
            }, 2000);
        })
    }

    useEffect(()=>{
        const obtenerProducto = async(id) => { 
            const responsePromise = await obtenerProductoBD(id);
            setProducto(responsePromise)
        }
        obtenerProducto(id);   
        
    },[id])
  

    console.log("parametro recibido", id)
    console.log("producto", baseDeDatos[id])
    
    return(
        <>
            {baseDeDatos[id] && id ? (
                <section className="container mt-3">
                    <Breadcrumb>
                        <Link className="breadcrumb-item" to="/" style={{ color: "black" }}>
                            Home
                        </Link>                    
                    </Breadcrumb>
                    <ItemDetail productos={baseDeDatos[id]} idProducto={id} />
                        
                </section>
            ) : (
                <section className="d-flex justify-content-center mt-3">
                    <Spinner animation="border" variant="warning" />
                </section>
            )}
        </>
    );
}

        /*<Card style={{ width: "90%", margin: "auto" }}>
            <Row>
                <Col xs={12} md={8}>
                    <Card.Img
                        src={baseDeDatos[id].img}
                        alt={baseDeDatos[id].img}
                        style={{ height: "25rem", objectFit: "contain" }}
                    />

                <Col xs={12} md={4} className="d-flex"></Col>
                    <Card.Body>
                        <Card.Title>{baseDeDatos[id].name}</Card.Title>
                        <Card.Text>{baseDeDatos[id].description}</Card.Text>
                        <Card.Text style={{ fontSize: "1.5rem" }}>
                            ${new Intl.NumberFormat().format(baseDeDatos[id].price)}
                        </Card.Text>

                        <Card.Text>(Quedan {baseDeDatos[id].stock} disponibles)</Card.Text>
                        <>
                            <ItemCount  
                            stock={baseDeDatos[id].stock} 
                            initial={1} 
                            onAdd={onAdd}/>

                            <div className="d-flex mb-3">
                                <Link to={`/cart`} className="btn btn-outline-primary ms-2" >
                                Terminar mi compra    
                                </Link>
                            </div>
                        </>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}

{  
                <img src={baseDeDatos[id].img} alt="img"></img>,
                <h2>Producto {baseDeDatos[id].name}</h2>,
                <h3>Descripción: {baseDeDatos[id].description}</h3>,
                <h3>STOCK: {baseDeDatos[id].stock}</h3>,
                <h1> PRECIO:$ {baseDeDatos[id].price}</h1>,                
                <ItemCount  stock={baseDeDatos[id].stock} initial={1} onAdd={onAdd}/>
                <br/>
                <Link to={`/cart`} className="btn btn-outline-primary ms-2" >
                    Terminar mi compra    
                </Link>
        </div>    
    )    
}



export default function ItemDetail(){
    
    const {id} = useParams();    
    console.log("Parametro recibido")
    return(
        <div>
            <div>                
                <div className="ItemContainerDetail">
                    <h1>{baseDeDatos[id].name}</h1>
                    <img src={baseDeDatos[id].img} alt={baseDeDatos[id].name}/>
                    <p>{baseDeDatos[id].description}</p>
                    <p>{baseDeDatos[id].descriptionExtra}</p>
                    <p className="ItemPriceDetail">$ {baseDeDatos[id].price}</p>
                </div>
            </div>
        </div>
    )
}*/