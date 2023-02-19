import { useLocation } from "react-router-dom"
import LineChart from "../components/linechart"


function SneakerDetail(){
    const location=useLocation()
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
    
    return(
        <div class='container-fluid' style={{paddingTop:'5%'}}>
            <div class='row'>
                <div class='col'>
                    <img src={item.img_url} alt="sneaker pic" class='img-fluid'/>
                    <div class='row'>
                        <p class='h5'>{item.title}</p>
                    </div>
                    <div class='row'>
                        <p>{item.price}</p>
                    </div>
                </div>

                <div class='col'>
                   

                    <div class='row'>
                        <a href={item.product_url}>{item.store}</a>
                    </div>

                    <div class='row'>
                        <p>{item.desc}</p>
                    </div>

                   

                   <LineChart time={time} prices={prices}/>
                </div>
            
            </div>

        </div>
    )


}
export default SneakerDetail