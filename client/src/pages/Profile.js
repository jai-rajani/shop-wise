import { useSelector } from "react-redux"
import ProfileBox from "../components/ProfileBox";


const Profile=()=>{
    const sneakers=useSelector((state)=>state.auth.sneakers);
   

    return(
        <div class='container-fluid'>
        <div class='row row-cols-lg-5 row-cols-sm-3 row-cols-md-4'>
          {sneakers.map((item)=>{
            return(
                <div class='col'>
                <ProfileBox item={item}/>
                </div>
            )
          })}
        </div>
        </div>
    )



}
export default Profile