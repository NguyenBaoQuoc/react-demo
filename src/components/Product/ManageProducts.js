import React from 'react'

import Product from './Product';

class ManageProducts extends React.Component
{
  render()
  {
      return(
        <div className="container">

            <div class="row">

              <div class="col-sm">
                  <Product 
                   ProductName="Coulumn Rebar"  numStar="6"
                  />
              </div>

               <div class="col-sm">

                 <Product 

                   ProductName="Beam Rebar"  numStar="4"

                  />
                </div>

                <div class="col-sm">
                  <Product ProductName="Rebar Image"  numStar="2"/>
                </div>
             
            </div>
            <div class="row">
     
     <div class="col-sm">
      <Product 
                   ProductName="Rebar Detail"  numStar="5"
                  />
     </div>

      <div class="col-sm">
         <Product 
                   ProductName="Copy Rebar" numStar="7"
                  />
       </div>

       <div class="col-sm">
       <Product 
                   ProductName="Cut Rebar"  numStar="5"
                  />
       </div>
    
   </div>

   <div class="row">
     
     <div class="col-sm">
          <Product 
                  ProductName="Rebar Extend"  numStar="8"
          />
     </div>

      <div class="col-sm">
            <Product 
                ProductName="Segment Length"  numStar="6"
            />
       </div>

       <div class="col-sm">
         
             <Product 
                ProductName="Rebar Wall"  numStar="9"
              />
       </div>
    
   </div>
             
      </div>
  
      )
  }
   
}

export default ManageProducts