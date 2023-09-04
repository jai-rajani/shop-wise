import { useLocation } from "react-router-dom"
import LineChart from "../components/linechart"
import { Link } from 'react-router-dom';
import PriceCard from "../components/PriceCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addSneakers, setSneakers } from "../reducers/authReducer";


function SneakerDetail(){
    const sneakers=useSelector((state)=>state.auth.sneakers);
    console.log(sneakers)
    const location=useLocation();
    const dispatch=useDispatch();
    const item=location.state
    var pricehistory=item.pricehistory
    var time=[]
    var prices=[]

    //get price history in array format
    for(var i=0;i<pricehistory.length;i++){
        for (var x in pricehistory[i]) {   
            time.push(x.substring(0,10))
            prices.push(pricehistory[i][x]);  
            }
    }

    let sort_prices=prices.slice()
    sort_prices.sort()
    const user=useSelector((state)=>state.auth.user);
    const date=new Date();

    //check if sneaker is already in profle
    const [tracked,setTracked]=useState(false);
    //console.log(tracked)
    useEffect(()=>{
        for(let i=0;i<sneakers.length;i++){
            if(sneakers[i].sneakerURL==item.product_url){
                setTracked(true);
            }
        }
    },[sneakers]);


    //call api to add sneaker 
    const addSneaker=async()=>{
        await fetch('/api/user/add', {
            method:'POST',
             headers: {
               "Content-Type": "application/json",
             },
            body:JSON.stringify({email:user.email,url:item.product_url,price:item.price,date:date})
           }).then((resp) =>(resp.json()))
           .then((data) => {
             
            if (data.ok) {
               console.log('dta is ok',data)
               setTracked(true)
               
              dispatch(setSneakers(data.sneakers))
             }
              else {
               if (data.errors) console.log(data.msg);
               
             }
           })
        
    }

    //call api to delete sneakers
    const deleteSneaker=async()=>{
        await fetch('/api/user/delete', {
            method:'POST',
             headers: {
               "Content-Type": "application/json",
             },
            body:JSON.stringify({email:user.email,url:item.product_url})
           }).then((resp) =>(resp.json()))
           .then((data) => {
             
            if (data.ok) {
               console.log('deleted')
              //dispatch(addSneaker(item.product_url))
             }
              else {
               if (data.errors) console.log(data.errors);
               
             }
           })
        
    }

     

    
    return(
        <div class='container-fluid' style={{paddingTop:'2%'}}>
            <div class='row ms-2'>

                <div class='col-5 ms-5 border' style={{backgroundColor:'white'}}>

                     <div class='row mt-5'>
                        <p class='h3'>{item.title}</p>
                      </div>
                    
                    <img src={item.img_url} alt="sneaker pic" class='img-fluid'/>
                   

                    <div class='row'>
                        <p>{item.desc}</p>
                    </div>


                    <div class='row'>
                        <div class='col rounded-5'><PriceCard label='Current Price' price={parseInt(item.price)} colour={'#ccddff'}/></div>
                        <div class='col'><PriceCard label='Minimum Price' price={parseInt(sort_prices[0])} colour={'rgb(230, 255, 242)'}/></div>
                        <div class='col'><PriceCard label='Maximum Price' price={parseInt(sort_prices.slice(-1)[0])} colour={'rgb(255, 204, 204)'}/></div>
                    </div>

                    <div class='row mt-3 mb-5'>
                    <Link to={item.product_url}>
                    <button type="button" class="btn btn-outline-primary btn-large">Buy on {item.store}</button>
                    </Link>
                    </div>

                    <div class='row'>
                        {!tracked?
                        <button type="button" class="btn btn-primary" onClick={()=>{addSneaker()}}>Add to Track List</button>
                        :
                        <button type="button" class="btn btn-primary" onClick={()=>{deleteSneaker()}}>Remove from Track List</button>
                        }
                        
                    </div>
                </div>

                <div class='col-6' style={{backgroundColor:'white'}}>
                    <div class='row mb-5'>
                        <p class='h1 mx-auto'>Price History</p>
                    </div>
                    
                    <div class='row'>
                    <LineChart time={time} prices={prices}/>
                    </div>
                </div>
            
            </div>

        </div>
    )


}
export default SneakerDetail