import React from "react";
import { useState } from "react";
import Navbar from './Navbar';



const Home = () => {
    let [cartValue, setCartValue] = useState(0);
    let [toggle1, setToggle1] = useState(true);
    let [toggle2, setToggle2] = useState(true);
    let [toggle3, setToggle3] = useState(true);

    // let addToCart = () => {
    //     setCartValue(cartValue + 1 )
    // }
  return (
    <>
      <Navbar value= {cartValue} />

      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>
      <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">

                            <div className="badge bg-dark text-white position-absolute" style={{"top": "0.5rem", "right": "0.5rem"}}>Sale</div>

                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                            <div className="card-body p-4">
                                <div className="text-center">

                                    <h5 className="fw-bolder">Sale Item</h5>

                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                           

                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">

                                </div>
                                {
                                    toggle1? <div className="text-center"><button className="btn btn-outline-dark mt-auto" href="javascript(void)" onClick={() => {
                                        setCartValue(cartValue +1 ) 
                                        setToggle1(!toggle1)
                                    }}>Add to cart</button></div>
                                    :
                                    <div className="text-center"><button className="btn btn-outline-dark mt-auto" href="javascript(void)" onClick={() => {
                                        setCartValue(cartValue -1 )
                                        setToggle1(!toggle1)
                                    }}>Remove from cart</button></div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">

                            <div className="badge bg-dark text-white position-absolute" style={{"top": "0.5rem", "right": "0.5rem"}}>Sale</div>

                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                            <div className="card-body p-4">
                                <div className="text-center">

                                    <h5 className="fw-bolder">Special Item</h5>

                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>

                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>

                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                 <div className="text-center">

                                </div>
                                {
                                    toggle2 ? <div className="text-center"><button className="btn btn-outline-dark mt-auto" href="javascript(void)" onClick={() => {
                                        setCartValue( cartValue +1)
                                        setToggle2(!toggle2)
                                    }}>Add to cart</button></div> 
                                    :
                                    <div className="text-center"><button className="btn btn-outline-dark mt-auto" href="javascript(void)" onClick={() => {
                                        setCartValue( cartValue -1)
                                        setToggle2(!toggle2)
                                    }}>Remove from cart</button></div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">

                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                            <div className="card-body p-4">
                                <div className="text-center">

                                    <h5 className="fw-bolder">Popular Item</h5>

                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>

                                    $40.00
                                </div>
                            </div>

                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">

                                </div>
                                {
                                    toggle3 ? <div className="text-center"><button className="btn btn-outline-dark mt-auto" href="javascript(void)" onClick={() => {
                                        setCartValue(cartValue + 1)
                                        setToggle3(!toggle3)
                                    }}>Add to cart</button></div>
                                    :
                                    <div className="text-center"><button className="btn btn-outline-dark mt-auto" href="javascript(void)" onClick={() => {
                                        setCartValue(cartValue -1)
                                        setToggle3(!toggle3)
                                    }}>Remove from  cart</button></div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
    </>
  );
};

export default Home;
