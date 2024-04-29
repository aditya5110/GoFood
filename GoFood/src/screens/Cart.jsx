import React from "react";
import { useCart, useDispatchCart } from "../components/ContextReducer";
// import trash from "../trash.svg"
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3">The cart is empty</div>
      </div>
    );
  }
  const handleCheckout = async()=>{
    let userEmail = localStorage.getItem("userEmail")
    let response = await fetch('http://localhost:5000/api/orderData',{
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json'    
      },
      body: JSON.stringify({
        order_data:data,
        email:userEmail,
        order_date: new Date().toDateString()
      })
    })
    console.log("Order Response:" , response)
    if(response.status === 200){
      dispatch({type:"DROP"})
    }
  }
  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  console.log("data is :", data);
  return (
    <div>
      <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
        <table className="table table-hover">
          <thead className="text-success fs-4">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {console.log("data in table:", data, "type is", typeof data)}
            {console.log(data.map)}
            {/* {
                        Object.keys(data).forEach(key => {
                            <tr>
                            <th scope='row'> {key + 1} </th>
                            <td> {data[key].name} </td>
                            <td> {data[key].qty} </td>
                            <td> {data[key].size} </td> 
                            <td> {data[key].price} </td>
                <td ><button type="button" className="btn p-0"><button onClick={() => { dispatch({ type: "REMOVE", index: key }) }} />delete</button> </td></tr>
                        })
                    } */}

            {data.map((food, index) => (
              // eslint-disable-next-line react/jsx-key
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button
                    type="button"
                    className="btn p-0"
                    onClick={() => {
                      dispatch({ type: "REMOVE", index: index });
                    }}
                  >
                    Delete
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="fs-2">Total Price : {totalPrice}/-</h1>
        </div>
        <div>
          <button className="btn bg-success mt-5" onClick={handleCheckout}>Check Out</button>
        </div>
      </div>
    </div>
  );
}
