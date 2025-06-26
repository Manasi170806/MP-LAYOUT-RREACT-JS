import Navbar from "./Navbar"
import Footer from "./Footer"

function App(){
    return(
        <div className="container" style={{ backgroundColor: "#87A672", height: "710px", width: "100%" }}>
          <div className="main" style={{ backgroundColor: "#FFFFFF", height: "460px", width: "50%", margin: "auto", position: "relative", top: "18%",borderRadius:"15px" }}>
            <Navbar />
            <div className="img">
              <img src="https://media.istockphoto.com/id/519687055/photo/houseplant-in-black-pot-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=5BtMu60ArWdeW_yZWZ41f8CVZdFGHtp-BIx_Tz22nvc=" style={{ height: "300px", position: "absolute", top: "78px" ,left:"6%"}} />
            </div>
            <div className="content">
              <h1 style={{fontSize:"30px",fontWeight:"300",marginLeft:"44%",marginTop:"7%",fontFamily:"arial"}}>CLASSIC PEACE LILY</h1>
              <h2 style={{fontSize:"15px",fontWeight:"300",marginLeft:"44%",marginTop:"-15px",color:"gray",fontFamily:"arial"}}>POPULAR HOUSE PLANT</h2>
              <p style={{fontSize:"50px",fontWeight:"300",marginLeft:"44%",marginTop:"20px",color:"black"}}>$ 18</p>
              <h3 style={{marginLeft:"44%",fontSize:"15px",color:"GrayText",fontFamily:"sans-serif",wordSpacing:"3px",letterSpacing:"1px",marginTop:"-30px"}}>Plants are a diverse group of eukaryotic, multicellular, and predominantly photosynthetic organisms that form the kingdom Plantae. </h3>
              <button style={{height:"50px",width:"24%",marginLeft:"44%",fontSize:"17px",marginTop:"2%",position:"relative",borderRadius:"10px",border:"none",backgroundColor:"#D5E1BE"}}>ADD TO CART</button>
              <button  style={{height:"50px",width:"24%",fontSize:"17px",marginLeft:"70%",position:"absolute",top:"75%",left:"1%",borderRadius:"10px",border:"none",backgroundColor:"#D5E1BE"}}>WISHLIST</button>
            </div>
            <Footer />
          </div>
        </div>
    )
}

export default App