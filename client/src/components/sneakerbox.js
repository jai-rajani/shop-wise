
function Sneakerbox({img_url,desc,price,title,product_url}){
    return(
        <div style={{flexDirection:'column',flex:1,borderWidth:1,borderColor:'black',alignItems:'center',justifyContent:"center"}}>
            <div style={{flex:2}}>
                <img src={img_url} alt="sneaker pic" class='img-fluid'/>
            </div>

            <div style={{flex:0.5,fontSize:10}}>
                <a href={product_url} class='h6' style={{textDecoration: 'none'}}> {title}</a>
               
            </div>

            <div style={{flex:1,fontSize:10}}>
                {desc}
            </div>

            <div style={{flex:0.5,fontSize:17}} class='h6'>
             ₹ {price}
            </div>


        </div>
    )
}

export default Sneakerbox