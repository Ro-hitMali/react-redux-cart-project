// import React from 'react'
import Table from 'react-bootstrap/Table'

const CardsDetails = () => {
  return (
    <>
    <div className="container mt-2">
        <h2 className="text-center">Items details Page</h2>
        <section className="container mt-3 border">
            <div className="itemsdetails d-flex justify-content-center">
                <div className="items_img">
                    <img src="https://b.zmtcdn.com/data/pictures/chains/1/113401/59f29399060caefcc575d59dc9402ce8_o2_featured_v2.jpg" alt="" style={{padding:"5px", borderRadius:"20px"}} />
                </div>
                <div className="details">
                    <Table>
                        <tr>
                            <td>
                                <p><strong>Restaurant</strong> : Massala Theoryy</p>
                                <p><strong>Price</strong> : 300</p>
                                <p><strong>Dishes</strong> : North Indian</p>
                                <p><strong>Total</strong> : 500</p>
                            </td>
                            <td>
                                <p><strong>Rating : </strong> <span style={{background:"green", color:"#fff", padding:"2px 5px", borderRadius:"5px"}}>3.5 ★</span></p>
                                <p><strong>Order Review: </strong> <span>1175+ orders placed from here recently</span></p>
                                <p><strong>Remove : </strong> <span><i className='fas fa-trash' style={{color:"red", fontSize:20, cursor:"pointer"}}></i></span></p>
                            </td>
                        </tr>
                    </Table>
                </div>
            </div>

        </section>
    </div>
    </>
  )
}

export default CardsDetails
