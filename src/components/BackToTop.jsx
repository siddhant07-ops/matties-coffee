import { FaArrowUp } from "react-icons/fa";

function BackToTop(){

return(

<button

onClick={()=>window.scrollTo({

top:0,

behavior:"smooth"

})}

className="fixed bottom-5 text-center right-5 bg-amber-700 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all">

<FaArrowUp/>

</button>

);

}

export default BackToTop;