
import { Button, Container, Navbar, Modal} from 'react-bootstrap';
import { useState, useContext } from 'react';
import { Cartcontext } from "../CartContext";
import ProductCard from './productCard';
import CardProduct from './CartProduct';

function NavbarComponent(){

    const cart = useContext(Cartcontext);
    const  [ show, setShow] = useState(false);
    const handleClose = ()=> setShow(false);
    const handleShow = ()=> setShow(true);

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
    return(
        <>
            <Navbar expand="sm">
                <Navbar.Brand href='/'>Maisha Soko Online Store</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Button onClick={handleShow}>Cart ({productsCount} items)</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show ={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                    <>
                        <p>Items in your cart:</p>
                        {cart.items.map((currentProduct, idx) =>(
                            < CardProduct key={idx} id={currentProduct.id} quantity ={currentProduct.quantity} ></CardProduct>
                        ))}
                        <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                        <Button variant='success'>Purchase items</Button>
                    </>

                    :
                        <h1>There are no items in your Cart!</h1>
                    }
                </Modal.Body>
            </Modal>
        </>

    )

}
export default NavbarComponent;