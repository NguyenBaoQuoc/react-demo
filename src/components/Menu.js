import React from 'react';
import {BrowserRouter, Route, Link } from "react-router-dom";
import About from './About';
import ViewMain from './ViewMain';
import Price from './Price'
import Login from './Login'
import '../css/Menu.css';
import RegisterAccount from './RegisterAccount';
import ManageProducts from './Product/ManageProducts';

class Menu extends React.Component
{
    render(){

      return(
 <div>
  
   <BrowserRouter>

      <div className="container position-sticky z-index-sticky top-0">

        <div className="row">

          <div className="col-12">

            <nav className="navbar navbar-expand-lg  blur blur-rounded top-10  position-absolute my-3 py-2 start-0 end-0 mx-0">
            
              <div className="container-fluid">
              
               <img className="rotateLogo" src="img/logo192.png" width={30} height={30} alt="" />
               <a style={{marginLeft:"10px" , "font-size": "1.2em" ,fontStyle: "normal" }} className="navbar-brand" href="/">
                 TechnoBIM
              </a>


               
            
         <div className="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100" id="navigation">

           
           <ul className="navbar-nav navbar-nav-hover ms-lg-12 ps-lg-5 w-100">
            
           <li className="nav-item mx-2">    
                 <Link className="nav-link ps-2 d-flex justify-content-between  align-items-center" href="#" to="/ManageProducts">                 
                  <a href="#">
                   Sản phẩm
                  </a>
                 </Link> 
             </li>
                    
           <li className="nav-item mx-2">    
                 <Link className="nav-link ps-2 d-flex justify-content-between  align-items-center" href="#" to="/Price">                 
                  <a className="">
                   Mua Phần mềm 
                  </a>
                 </Link> 
             </li>
               
          

             <li className="nav-item mx-2">    
                 <Link className="nav-link ps-2 d-flex justify-content-between  align-items-center" href="#" to="/Price">                 
                  <a className="">
                   Liên hệ
                  </a>
                 </Link> 
             </li>
     
               
   
             <li className="nav-item dropdown dropdown-hover mx-2">
                      <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" aria-expanded="false"> 
                        Đăng nhập           
                      </a>

                      <ul className="dropdown-menu dropdown-menu-animation dropdown-lg mt-0 mt-lg-3 p-3 border-radius-lg" aria-labelledby="dropdownMenuDocs">
                        <div className="d-none d-lg-block">
                          <ul className="list-group">
                            <li className="nav-item list-group-item border-0 p-0">
                   
                            <Link className="nav-link" href="#" to="/Login">
                             <a className="nav-link" href="#">Đăng nhập tài khoản</a>
                            </Link> 


                            </li>

                            <li className="nav-item list-group-item border-0 p-0">
                   
                            <Link className="nav-link" href="#" to="/register">
                             <a className="nav-link" href="#">Đăng ký tài khoản</a>
                             </Link> 

                            </li>
               
                          </ul>
                          
                        </div>
            
                      </ul>
                    </li>
                  
                 <li className="nav-item mx-2">     
                   <Link className="nav-link ps-2 d-flex justify-content-between  align-items-center" href="#" to="/Price">                 
                   </Link> 
             </li>
          
           
                <button className="button btn bg-gradient-info w-auto me-1 mb-0  btn-round mb-0 col-3  start-5">
                           Download

                           
                 </button >
                  
                  </ul>
                </div>
              </div>
            </nav>
     
          </div>
        </div>

        


      </div>

         <div className="main-route-place">


                    <Route exact path="/register" component={RegisterAccount} />


                    <Route exact path="/" component={ViewMain} />


                    <Route exact path="/Price" component={Price} />


                    <Route exact path="/About" component={About} />


                     <Route exact path="/Login" component={Login} />

                     <Route exact path="/ManageProducts" component={ManageProducts} />
                    


          </div>

  </BrowserRouter>
 </div>



    )
    }
}

export default Menu