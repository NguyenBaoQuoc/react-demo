import React from 'react'
import '../../css/Product.css';
import { Link, Redirect } from 'react-router-dom';

import {withRouter} from 'react-router-dom';

export class Product extends React.Component
{     
     constructor(props)
     {   
       super(props);
       
       this.state={numStar : this.props.numStar}
     }


     nextPath(path) 
     {
       this.props.history.push(path);
     }
   

     render()
     {  
        const a1=[]; 
        
        const a2=[];

        for(let i=1; i<= this.state.numStar;i++)
        { 
           a1.push(i);
        }       

        for(let i=a1.length +1; i<=10; i++)
        {
          a2.push(i);
        }
 
       const listStarchecked    = a1.map( x => (<span  class="rotateStar fa fa-star checked "></span> ) );
       
       const listStarNotchecked = a2.map( x => (<span  class="rotateStar fa fa-star  "></span> ) );
        
       return(
        
           <div className="inner" onClick={() => this.nextPath('/About') } style={{marginTop:"100px"}}>

           <div className="row pt-4 m-auto"> 
            
             <div className="col-md-14 col-lg-12 pb-4  rotateImge">  
              
               <div style={{'borderRadius':'25px'}} className="card card-custom bg-white border-white border-10">
               
               
               <div className=" card-custom-img" style={{backgroundImage: 'url(http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg)'}} />
               
                 <div className="card-custom-avatar ">

                   <img className="img-fluid" src="img/LogoRevit.jpg" alt="Avatar" />
                 </div>
               
                 <div className="card-body ">
                 
                   <h3 style={{ color: "#993366" }} className="card-title">{this.props.ProductName}</h3>
         
 
                   <hr></hr>
         
                   <div style={{ height:"200px"}} >
                   <small style={{ margin: "auto"  , textAlign:"center"}}>
                   <cite >
                     
                    The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) 
                    that doesn't distract from the layout. A practice not without controversy, 
                    laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
                
                   </cite>
                   </small>
                   </div>
                 </div>
                
                
                 <div  style={{ textAlign:"center" }} class="card-footer inner">
         
         
                 <div className="" style={{ margin: "auto"  , textAlign:"center"}} >
                      
                      {listStarchecked }

                      {listStarNotchecked}
                     
                      
                   </div>   
                 </div>
         
               
               </div>
           
             </div>
           
           </div>
        
         </div>
 
         )
     }
  
  }
  export default withRouter(Product);