import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";
function Gallery (){
        const galleryImages = [
           gallery1,
           gallery2,
           gallery3,
           gallery4,
           gallery5,
           gallery6,
        ];
        return(
     <section id="gallery" className="px-10 py-40 bg-amber-50">
        <h1 className="text-2xl text-amber-500 font-extrabold text-center">
            OUR GALLERY
        </h1>
        {/*Big Heading*/}
        <h1 className="font-extrabold text-3xl mb-6 text-center text-red-950">
            Fresh Moments Captured📸
        </h1>

        {/*Grid Container*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {

                galleryImages.map((image, index) => (

                    <div
                     key={index}
                     className="group overflow-hidden rounded-4xl border border-amber-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white"
                   >
                     <img
                       src={image}
                       alt="Coffee"
                       className="w-full h-64 object-contain rounded-4xl"
                     />
                   </div>
                
                
                ))
            }


        </div>



        
    </section>



  );
}
export default Gallery;