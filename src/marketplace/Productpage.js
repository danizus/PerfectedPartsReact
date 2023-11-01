import React, { useEffect, useState } from "react";
import MyNav from "../HomePage/MyNav";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Mymodal from "../HomePage/Mymodal";
import products from "./products";
import stars from "../images/Star Star Star Star Star.png";
import minus from "../images/minus.svg";
import plus from "../images/plus.svg";
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from "../store/cartSlice";




const Productpage = ({ show, setShow }) => {
  const myid = useParams();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cart);

  const product = products.find((item) => {
    return item.id == myid.id;
  });


  const myProduct = items.find(item=> item.id === product.id)

  const [count, setCount] = useState(0);
  useEffect(() => {
    dispatch(add({...product,quantity:1}))
    setCount(myProduct.quantity)
    
  }, []);
  





  const countOrderMinus = () => {
    if (count <= 0) {
     return setCount(0);
      
    }
    dispatch(remove(product.id))
    
  
  };
  const countOrderPlus = () => {
   
    dispatch(add({...product,quantity:1}))
    
    setCount(myProduct.quantity+1);
  };

  return (
    <>
      <div className="product-nav">
        <Container fluid="md">
          <MyNav show={show} setShow={setShow} />
          {show && <Mymodal show={show} onHide={() => setShow(false)} />}
        </Container>
      </div>
      <Container>
        <div className="main-container-product">
          <div className="product-pictures-container">
            <img width="100%" src={product.image} />
            <div className="small-pictures">
              <img width="20%" src={product.image} />
              <img width="20%" src={product.image} />
              <img width="20%" src={product.image} />
              <img width="20%" src={product.image} />
            </div>
          </div>

          <div className="description-product">
            <h2>Continental Extremecontact Dws 06 Plus</h2>
            <h2>store 1</h2>
            <div style={{ margin: "5vh 0" }}>
              <img src={stars} />
              <span style={{ fontSize: "12px", color: "#57bf6c" }}>
                2 costumer review
              </span>
              <h5 style={{ color: "#57bf6c" }}>{`$${product.price}`}</h5>
            </div>
            <p style={{ fontFamily: "inter" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div>
              <select className="select-option">
                <option>choose flavour</option>
              </select>
              <button className="count-container">
                {" "}
                <span onClick={countOrderMinus}>
                  <img src={minus} />{" "}
                </span>
                {count}{" "}
                <span onClick={countOrderPlus}>
                  <img src={plus} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Productpage;
