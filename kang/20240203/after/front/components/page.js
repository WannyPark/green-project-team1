
import { useState } from "react";

export default function page(){
    const [url,setUrl] = useState("home");


return(
    <>
     <div>
        <span>홈</span>
        <span>About</span>
        <span>로그인</span>
     </div>
    </>
);
}