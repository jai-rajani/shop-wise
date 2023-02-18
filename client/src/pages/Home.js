import { useEffect, useState } from "react"

import Sneakerbox from "../components/sneakerbox"
import InfiniteScroll from 'react-infinite-scroll-component';
import './Home.css';
import axios from 'axios';
import Filters from "./Filters";
import { useSelector } from "react-redux";
import Searchbar from "../components/searchbar";

function Home(){
const [sneakers,setSneakers]=useState([])
const [loaded,setLoaded]=useState(0)
const [hasMore, sethasMore] = useState(true);
const [page, setpage] = useState(2);
const [checked, setChecked] = useState(false);
const [filters,setFilters]=useState('');

const resellers=useSelector((state)=>state.resellers.finalValue);
const search=useSelector((state)=>state.resellers.search);
//console.log('main filters are ',resellers)


  const handleChange = () => {
    setChecked(!checked);
  };


const fetchSneakers = async () => {
    
    let str='';
    
    for(let i=0;i<resellers.length;i++){
        str=str.concat('&reseller[]='+resellers[i])

    }
   
    let url='/api/sneakers?page=1';
    url=url.concat(str)
    if(search!=''){
        url=url.concat('&search='+search);
    }
    console.log('url is',url)
    const response = await fetch(url)
    
    const json = await response.json()

    if (response.ok) {
      setSneakers(json)
      //console.log(json)
      setLoaded(1)
    }
  }

  const fetchMore = async () => {

    let str='';
    
    for(let i=0;i<resellers.length;i++){
        str=str.concat('&reseller[]='+resellers[i])

    }
    //console.log('query request is',str)
    let url='/api/sneakers?page=1';
    url=url.concat(str)
    if(search!=''){
        url=url.concat('&search='+search);
    }
    console.log('url is',url)
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  const fetchData = async () => {
    const moreSneakers = await fetchMore();

    setSneakers([...sneakers, ...moreSneakers]);
    if (moreSneakers.length === 0 || moreSneakers.length < 20) {
      sethasMore(false);
    }
    setpage(page + 1);
  };


useEffect(()=>{
      fetchSneakers()
},[resellers,search])




return(
    <div class="container-fluid" style={{paddingTop:'5%'}}>
        
     <div class="row row-cols-1">
     
     <div class="col-1" style={{}}>
       <Filters/>

    </div>

    <div class="col-11" style={{}}>

    <div class="row" style={{marginTop:'2%',marginBottom:'2%'}}>
    
    <div class="col-8">
        <p class='h3'>{search==''?'Sneakers':search}</p>
    </div>
    <div class="col-4">
    <Searchbar/>
    </div>


    </div>
    {sneakers.length==0?
    (
        <div>
            Sorry! No results
        </div>
    )
    :
    (
        <></>
    )}
    {loaded==1?
    (
    <InfiniteScroll
      dataLength={sneakers.length} 
      next={fetchData}
      hasMore={hasMore}
      style={{}}
      useWindow={false}
    >
      <div
      class="row row-cols-5"
      >
        
          {sneakers.map((item) => {
            return (
            
            <div className="col border border-light box" key={item.id}>
            <Sneakerbox key={item.id}  img_url={item['Image Url']} price={item["CurrentPrice"]} desc={item["Description"]} title={item['Title']} product_url={item["Product Url"]}/>
           </div>
            );
            
            
        })}
        
      </div>
      
    </InfiniteScroll>
    ):
    (
        <div>

        </div>
    )}
    </div>

    </div>
    </div>
)

}
export default Home