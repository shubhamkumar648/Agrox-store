import React from 'react'

export const Checkout = () => {
  return (
    <div className='chekout-maincontainer'>
    
    <div className='chekout flex p-1 mt-3'>
        
        <div className='adressMangement flex'> 
          
          <div className='addressdetail flex '>
                   <div className='radio-button-continer'>
                     <input type="radio" />
                   </div>

                  <div className='adressdetail'>
                   <h5>  Charile </h5>
                 <p>house no: W-201,Washignton Dc,Near settle,USA, 257894</p>
                 <p>Mobile No:-88880007</p>
                 
                   </div>
              
                
          </div>
         
          <button
              className="btn btn__primary mt-2 mr-2">
              Add Address
            </button>

      </div>

        <div className='orderdetail flex flex-col'> 
            <h5> Order Detail</h5>
            <hr />
        <table>
              <tr className="boder-btm">
                <th className="tableleftText">Item detail</th>
                <th className="tablerightText">Amount</th>
              </tr>
              <tr>
                <td className="tableleftText">Aspee MAchine -
                  Price item(1)
                 </td>
                <td className="tablerightText">100</td>
              </tr>
            </table>
             <hr />
             <h5>Billing</h5>
             <hr />
             <table>
              <tr>
                <td className="tableleftText">
                  Discount <small className="discount-color">(10%)</small>
                </td>
                <td className="tablerightText">999</td>
              </tr>
              <tr className="boder-btm">
                <td className="tableleftText">Delivery charge</td>
                <td className="tablerightText">Rs.100</td>
              </tr>
              <tr>
                <td className="tableleftText fs-l font-xl">Total:</td>
                <td className="tablerightText fs-l font-xl">500</td>
              </tr>
            </table>
             
             
            <div className='delvierto-container flex flex-col font-l p-1'>
            <hr />
            <h5 className='mt-1'>DEILVERING TO</h5>
              <hr />
            <h5 className='text-align'> Charile </h5>
            <p>house no: W-201,Washignton Dc,Near settle,USA, 257894</p>
            <p className='text-align'>Mobile No:-88880007</p>
            </div>

         </div>
    </div>
    
    </div>
  )
}
