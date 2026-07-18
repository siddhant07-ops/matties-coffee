import { FaUserCircle, FaStar } from "react-icons/fa";
function Testimonials(){
return(
    <section className="px-10 py-20 bg-amber-50">
        {/*Small Heading*/}
        <h2 className="text-center text-3xl font-extrabold text-amber-600">
            TESTIMONIALS
        </h2>
        {/*Main Heading*/}
        <h1 className="text-4xl mb-6 text-center font-extrabold">
            What Our Customers Say?
        </h1>

        {/*Card Container*/}   

        <div className="grid grid-cols-3 gap-8">

            {/*Card-1 */}

            <div className="flex flex-col items-center text-center bg-white rounded-3xl shadow-lg py-9 px-6 hover:scale-110 hover:-translate-y-px hover:shadow-amber-700 transition-all duration-300">
                <FaUserCircle className="text-5xl text-amber-700 mx-auto"/>

                <h2 className="mb-5">
                    Emma Watson
                </h2>  

            <p className="font-bold mx-auto mt-4 mb-4 text-gray-500">
                Regular Customer
            </p>

            
            <p className="flex gap-2 text-2xl items-center mb-4 text-amber-300 mx-auto">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </p>  

            <p className="text-amber-500">
              Loved by coffee lovers for our fresh brews,
              warm  atmosphere, and exceptional service.  
            </p>
            
            </div>

           {/*Card-2*/}
            <div className="flex flex-col items-center text-center bg-white rounded-3xl shadow-lg py-9 px-6 hover:scale-110 hover:-translate-y-px hover:shadow-amber-700 transition-all duration-300">
                <FaUserCircle className="text-5xl text-amber-700 mx-auto"/>

                <h2 className="mb-5">
                    Oliver Hughes 
                </h2>  

            <p className="font-bold mx-auto mt-4 mb-4 text-gray-500">
               Frequent Customer
            </p>

            
            <p className="flex gap-2 text-2xl items-center mb-4 text-amber-300 mx-auto">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </p>  

            <p className="text-amber-500">
           Hands down the freshest coffee I've ever ordered online! The rich flavor and smooth finish make my morning routine so much better.
            </p>
            
            </div>

            {/*Card-3 */}
            <div className="flex flex-col items-center text-center bg-white rounded-3xl shadow-lg py-9 px-6 hover:scale-110 hover:-translate-y-px hover:shadow-amber-700 transition-all duration-300">
                <FaUserCircle className="text-5xl text-amber-700 mx-auto"/>

                <h2 className="mb-5">
                    Charlotte Baker
                </h2>  

            <p className="font-bold mx-auto mt-4 mb-4 text-gray-500">
                Freqeunt Customer
            </p>

            
            <p className="flex gap-2 text-2xl items-center mb-4 text-amber-300 mx-auto">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </p>  
             <p className="text-amber-500">
                Incredible selection and lightning-fast delivery! The website is so easy to use, and the coffee arrives perfectly fresh every single time
            </p>
            
            </div>






        </div>

    </section>



 );
}

export default Testimonials;