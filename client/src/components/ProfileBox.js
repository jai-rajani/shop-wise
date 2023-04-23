import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const ProfileBox=({item})=>{
   
    const [data,setData]=useState();

    const navigation=useNavigate()
    

    function SneakerDetail(){

        //navigate to details
        navigation('/sneaker',{
            state:{
                img_url:data.ImageUrl,
                desc:data.Description,
                price:data.CurrentPrice,
                title:data.Title,
                product_url:data.ProductUrl,
                pricehistory:data.PriceHistory,
                store:data.Store
            }
        })
    }

    //get sneaker details
    useEffect(() => {
        (async () => {
          await fetch('/api/sneakers/sneaker', {
            method:'POST',
             headers: {
               "Content-Type": "application/json",
             },
            body:JSON.stringify({url:item.sneakerURL})
           }).then((resp) =>(resp.json()))
           .then((data) => {
             
            if (data) {
               setData(data)
               //dispatch(addSneakers(data.sneakers))
             }
              else {
               if (data.errors) console.log(data.errors);
               
             }
           })
        })();
      
        return () => {
          // this now gets called when the component unmounts
        };
      }, []);
    
    
    
    return(
        <div>

            {data?
            <div style={{flexDirection:'column',flex:1,borderWidth:1,borderColor:'black',alignItems:'center',justifyContent:"center"}}>
            <div style={{flex:2}}>
                <img src={data.ImageUrl} alt="sneaker pic" class='img-fluid'/>
            </div>

            <div style={{flex:0.5,fontSize:10}}>
                <a onClick={SneakerDetail} class='h6' style={{textDecoration: 'none'}}> {data.Title}</a>
               
            </div>

            <div style={{flex:1,fontSize:10}}>
                {data.Description}
            </div>

            <div style={{flex:0.5,fontSize:17}} class='h6'>
             ₹ {data.CurrentPrice}
            </div>
            


        </div>

        :<></>}
            
        </div>
    )



}
export default ProfileBox