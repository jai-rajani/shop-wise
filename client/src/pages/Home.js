import { useEffect, useState } from "react"

import Sneakerbox from "../components/sneakerbox"
import InfiniteScroll from 'react-infinite-scroll-component';


function Home(){
const [sneakers,setSneakers]=useState([])
const [loaded,setLoaded]=useState(0)
const [hasMore, sethasMore] = useState(true);
const [page, setpage] = useState(2);

const fetchSneakers = async () => {


    const response = await fetch('/api/sneakers?page=1')
    const json = await response.json()

    if (response.ok) {
      setSneakers(json)
      console.log(json)
      setLoaded(1)
    }
  }
  const fetchMore = async () => {
    const res = await fetch(
      //`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=20`
      '/api/sneakers?page=${page}'
    );
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
},[])

return(
    <div>
    {loaded==1?
    (
    <InfiniteScroll
      dataLength={sneakers.length} 
      next={fetchData}
      hasMore={hasMore}
      
    >
      <div className="container" style={{flexWrap:'wrap',flex:1}}>
        <div className="row m-2" style={{width:'33%'}}>
          {sneakers.map((item) => {
            return  <Sneakerbox key={item.id}  img_url={item['Image Url']} price={item["CurrentPrice"]} desc={item["Description"]} title={item['Title']} />;
            
            
        })}
        </div>
      </div>
    </InfiniteScroll>
    ):
    (
        <div>

        </div>
    )}
    </div>
)

}
export default Home