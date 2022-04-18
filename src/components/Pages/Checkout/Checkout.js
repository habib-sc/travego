import React, { useState } from 'react';

const Checkout = ({service}) => {
    const {name, text, img, price} = service;

    const [count, setCount] = useState(1);

    const plusCount = () => {
        if (count < 15) {
            setCount(count + 1);
        }
    }

    const minusCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const totalPrice = count * price;

    return (
        <div className='container'>
            <div className='text-center my-5'>
                <h2>Checkout</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col">
                    <form  className='d-flex flex-column mx-auto'>
                        <input  type="text" name='name' placeholder='Name' className='tg-form-input my-2 border-0 rounded-3' />
                        <input  type="email" name='email' placeholder='Email' required className='tg-form-input my-2 border-0 rounded-3' />
                        <input  type="text" name='phone' placeholder='Phone' required className='tg-form-input my-2 border-0 rounded-3' />
                        <input type="text" name='address' required placeholder='Address' className='tg-form-input my-2 border-0 rounded-3' />
                        <button className='tg-submit-btn btn btn-primary border-0 mt-2'>Confirm Checkout</button>
                    </form>
                </div>
                <div className="col border rounded-3">
                    <div className='d-flex justify-content-center align-items-center gap-4 py-3 px-1'>
                        <img src={img} style={{'height': '150px'}} alt="" />
                        <div>
                            <h3>{name}</h3>
                            <p>{text}</p>
                        </div>
                    </div>
                    <hr />
                    <div className='row row-cols-1 row-cols-md-3'>
                        <div>
                            <h4>Price: {price}$</h4>
                        </div>
                        <div>
                            <button onClick={minusCount} className='border rounded-pill px-3'>-</button>
                            <span className='mx-2'>{count} days</span>
                            <button onClick={plusCount} className='border rounded-pill px-3'>+</button>
                        </div>
                        <div>
                            <h4>Total: {totalPrice}$</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;