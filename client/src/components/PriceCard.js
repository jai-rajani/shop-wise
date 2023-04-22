
const PriceCard=({price,colour,label})=>{

    return(
        <div class='card text-center  rounded-3'  style={{backgroundColor:colour}}>
           

            <div class='card-body'>
            <h6 class="card-title">{label}</h6>
            <h4 class='card-title'>₹ {price.toLocaleString()}</h4>
            </div>

        </div>
    )



}
export default PriceCard