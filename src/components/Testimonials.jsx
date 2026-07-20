import { FaUserCircle, FaStar } from "react-icons/fa";
function Testimonials(){
return(
<section className="px-10 md:px-12 py-16 bg-amber-50">
        {/*Small Heading*/}
        <h2 className="text-center text-2xl md:text-2xl font-bold text-amber-700">
             TESTIMONIALS
        </h2>
       {/*Main Heading*/}
<h1 className="text-center text-3xl md:text-5xl font-extrabold  mb-12">
    What Our Customers Say
</h1>

        {/*Card Container*/}   

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/*Card-1 */}

            <div className="flex flex-col items-center text-center bg-white rounded-3xl shadow-lg py-9 px-6 hover:scale-105 hover:-translate-y-px hover:shadow-amber-700 transition-all duration-300">
                <FaUserCircle className="text-5xl w-20 h-22 text-amber-700 mx-auto"/>

                <h2 className="mt-2">
                    Emma Watson
                </h2>  

            <p className="font-bold mx-auto mt-4 mb-4 text-gray-500">
                Regular Customer
            </p>

            
            <p className="flex gap-2 text-2xl hover:scale-110 transition-transform duration-300 items-center mb-4 text-amber-300 mx-auto">
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
            <div className="flex flex-col items-center text-center bg-white rounded-3xl shadow-lg py-9 px-6 hover:scale-105 hover:-translate-y-px hover:shadow-amber-700 transition-all duration-300">
                <FaUserCircle className="text-5xl w-20 h-22 text-amber-700 mx-auto"/>

                <h2 className="mt-2">
                    Oliver Hughes 
                </h2>  

            <p className="font-bold mx-auto mt-4 mb-4 text-gray-500">
               Frequent Customer
            </p>

            
            <p className="flex gap-2 text-2xl hover:scale-110 transition-transform duration-300 items-center mb-4 text-amber-300 mx-auto">
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
            <div className="flex flex-col items-center text-center bg-white rounded-3xl shadow-lg py-9 px-6 hover:scale-105 hover:-translate-y-px hover:shadow-amber-700 transition-all duration-300">
                <FaUserCircle className="text-5xl w-20 h-22 text-amber-700 mx-auto"/>

                <h2 className="mt-2">
                    Charlotte Baker
                </h2>  

            <p className="font-bold mx-auto mt-4 mb-4 text-gray-500">
                Freqeunt Customer
            </p>

            
            <p className="flex gap-2 text-2xl hover:scale-110 transition-transform duration-300 items-center mb-4 text-amber-300 mx-auto">
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