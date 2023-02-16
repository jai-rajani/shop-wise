
function Sneakerbox({img_url,desc,price,title}){
    return(
        <div style={{flexDirection:'column',flex:4}}>
            <div style={{flex:2}}>
                <img src={img_url} alt="sneaker pic" style={{height:100,width:100}}/>
            </div>

            <div style={{flex:0.5,fontSize:10}}>
                {title}
            </div>

            <div style={{flex:1,fontSize:20}}>
                {desc}
            </div>

            <div style={{flex:0.5,fontSize:15}}>
                R{price}
            </div>


        </div>
    )
}

export default Sneakerbox