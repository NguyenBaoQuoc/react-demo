import React from 'react'
import Card from './Card'
import Payments from './Payments'



class Price extends React.Component
{
    render()
    {
        return( 
            <div style={{marginTop:"100px"}}  className="container" >
            <div className="row">

            <div className="col">
                <div className="card hover" style={{'borderRadius':'25px'}} >

                 <Card   
                   name ="Student"
                   OldPrice ={0}
                   sale={0}
                   content1="Hỗ trợ 24/7"
                   content2="Luôn cập nhật" 
                   content3="Hỗ trợ giá khi mua" 
                   content4="Thời gian : 90 (ngày)"   
                 >

                 </Card>
                 

                </div>
                
              </div> 
              <div className="col">
                <div className="card  hover"  style={{'borderRadius':'25px'}}> 
                 
                <Card 
                   name ="Month" 
                   time ="30" 
                   OldPrice ={170000}
                   sale={0}
                   content1="Hỗ trợ 24/7"
                   content2="Luôn cập nhật" 
                   content3="Thời gian : 30 (ngày)"   
                   content4="Hỗ trợ nâng gói sản phẩm"            
                >
                </Card>
                </div>
              </div>
              
              
              <div className="col">
                <div className="card  hover"  style={{'borderRadius':'25px' }}> 
                <Card
                 name ="Year"
                  time ="365" 
                   OldPrice ={2000000} 
                   sale={40}
                   content1="Hỗ trợ 24/7"
                   content2="Luôn cập nhật" 
                   content3="Thời gian : 360 (ngày)"   
                   content4="Hỗ trợ nâng gói sản phẩm"  
                   ></Card>
                </div>
              </div>

              <div className="col">
                <div className="card hover"  style={{'borderRadius':'25px'}}>
           
                <Card
                  name ="Indefinite" 

                  OldPrice ={6000000} 
                  sale={20}
                  content1="Hỗ trợ 24/7"
                  content2="Cập nhật 1 năm" 
                  content3="Thời gian : ∞ (ngày)"   
                  content4="không giới hiện thời gian"  
                  >
                      
                </Card>
                 
                </div>
                
              </div>    
          

            
            </div>


           <div style={{ marginTop: 40 ,flex: 0.2}}>
             <p className="text-center">
                 Lưu ý: Chi phí trên chưa bao gồm giá trị xuất hóa đơn VAT, 
                 hoặc chính sách giảm giá khi mua số lượng lớn, chi tiết
                  liên hệ hotline: 0367890970 
            </p>
           </div>

          <hr></hr>

          <h2 className="font-weight-bold pb-3 text-center" >PHƯƠNG THỨC THANH TOÁN</h2>
     
          <Payments name="Nguyễn Chí Linh "src="img/vietcombank.png"  stk= "194513504" bankName="Vietcombank" address="Chi nhánh Quảng Bình" ></Payments>
         
          <hr></hr>
     
          <Payments name="Nguyễn Chí Linh " src="img/bidv.png"  stk= "194513504" bankName="BIDV" address="Chi nhánh Quảng Bình" ></Payments>
  
          <hr></hr>
     
           <Payments name="Nguyễn Chí Linh " src="img/MOMO.png"  stk= "0367890970" bankName="MOMO" address="Chi nhánh Việt Nam" ></Payments>

          </div>
        
        )
    }
}

export default Price