import "../styles/styles.css"
// import RazorpayPayment from "./razorpay";
import {useNavigate} from "react-router-dom";

export const Home = () => {
    let navigate=useNavigate()
    return (
      <>
      <div>
        
          
          <div className="rs3">
        <h1>
            Be a part of <span>Crowdfunding</span>
          </h1>
          <p className="headp" style={{textAlign:"left"}}>
          Crowdfunding is the use of small amounts of capital from a large number of individuals to finance a new business venture. Depending on the type of crowdfunding, investors either donate money altruistically or get rewards such as equity in the company that raised the money.
          </p>
            {/* <button onClick={RazorpayPayment}>Donate Now</button> */}
            <button onClick={()=>{navigate("/Donate")}} >Donate Now</button>
        </div>
      
        </div>
       
     
       <div className="rks container-fluid">
       <div className="inner-box1">
       <div className="u1">
       <div className="d1">
           
       
               <form action="">
                   <label htmlFor="email">Enter Email to receive valuable updates</label>
                   <div className="input-group mb-3 input1">
                       <input required id="email" type="email" className="form-control i1" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2" size="30"/>
                       <button className="btn btn-outline-secondary pri" type="submit" id="button-addon2"><span className="material-symbols-outlined">
                         <i className="fa-solid fa-greater-than"></i>
                           </span>Search</button>
                   </div>
               </form>
            
       </div>
       <div className="d2">
           <img src="https://p4-ofp.static.pub/fes/cms/2021/07/13/i7yuirli2qwiqq1t804izy6fg0xft4483038.svg" alt=""/>
           <img src="https://p2-ofp.static.pub/fes/cms/2021/07/13/q59kynt135ngy6yenpgfp83dulr08r150287.svg" alt=""/>
           <img src="https://p2-ofp.static.pub/ShareResource/we/footer/images/linkedin-icon.png" alt=""/>
           <img src="https://p1-ofp.static.pub/fes/cms/2021/07/13/9uav8wkxhmyhu1mlutyfl8vftmkr3w675335.svg" alt=""/>
           <img src="https://p2-ofp.static.pub/ShareResource/we/footer/images/forums-icon.png" alt=""/>
       </div>
       <div className="d3">
           <form action="">
               <label htmlFor="email">Select Country / Region:</label>
               <div className="input-group mb-3 input1">
                   <select className="form-select fs1" id="inputGroupSelect02" >
                       <option selected >INDIA</option>
                       <option value="1" >JAPAN</option>
                       <option value="2">AUSTRALIA</option>
                       <option value="3">CANADA</option>
                     </select>
               </div>
           </form>
       </div>
       </div>
       <div className="u2">
           <div>
               <h6>ABOUT DONATE FOR BETTER</h6>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">Our Company</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">News
       
                 
                   </a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">Investors Relations</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">Legal Information</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">Jobs At Donate For Better</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">ESG</a>
           </div>
           <div>
               <h6>PRODUCTS & SERVICES</h6>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">Laptops & Ultrabooks
                   
                
                   
                   </a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">Smartphones
       
                   
                   </a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">Tablets</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">Desktops</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">Workstations</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">Data Center Solutions</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark"> Accessories & Software</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">Services & Warranty</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark"> Product Recalls</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">Replacement Parts</a>
             
           </div>
           <div>
               <h6>CUSTOMER SUPPORT</h6>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">Service Provider List
                   </a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark"> Where to Buy            
                   </a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">Shopping Help</a>
           
           </div>
           <div>
               <h6>RESOURCES</h6>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">Employee Purchase Program
               
                   </a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark"> Contact Us
       
                   </a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">Find a Dealer</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">Email Sign-Up</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">Support</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">Blog</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark"> Order Status</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">FAQS</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark"> Glossary</a>
         
           </div>
           <div>
               <h6>PORTFOLIO</h6>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">ThinkPad T Series
       
                  
                   </a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark"> ThinkPad X Series
       
                   </a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">ThinkPad</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">Ideapad</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">Yoga</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">M Series Tiny</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark"> ThinkCentre</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark"> Ideacentre</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark"> Tablets</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark"> Thinkstation</a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">  Data Center Solutions</a>
           </div>
           <div>
               <h6>SOLUTIONS</h6>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">Business Partners
       
                  
                   </a>
               <a href="" className="link-offset-2 link-underline link-underline-opacity-0 link-dark"> Think Progress
       
                   </a>
           </div>
       </div>
       <div className="u3">
           <small>© 2024 Donate For Better. All rights reserved.</small>
           <p><small><a className="link-offset-2 link-underline link-underline-opacity-0 link-dark" href="">Privacy</a> | <a className="link-offset-2 link-underline link-underline-opacity-0 link-dark" href="">Site Map</a> | <a className="link-offset-2 link-underline link-underline-opacity-0 link-dark" href="">Terms of Use</a> | <a className="link-offset-2 link-underline link-underline-opacity-0 link-dark" href="">External Submission Policy</a> | <a className="link-offset-2 link-underline link-underline-opacity-0 link-dark" href="">Sales terms and conditions</a> | <a className="link-offset-2 link-underline link-underline-opacity-0 link-dark" href="">Anti-Slavery and Human Trafficking Statement</a></small></p>
       </div>
       </div>
       <hr/>
       <div className="inner-box2">
   <a href="" className="link-offset-2 link-underline link-underline-opacity-0">
       <i className="fa-regular fa-face-smile pe-1"></i>
       <span>Feedback</span>
   </a>
   <span>Need Help? Call :
   
       1-800-4199-733
       </span>
   
       </div>
       </div>
       </>
    );
  };
