import { useState } from "react";
function Newsletter(){ 
    const [email, setEmail] = useState("");
    return(

    <section className="px-10 py-20 bg-amber-50">
        <div className="justify-between items-center gap-16 bg-amber-200 rounded-3xl shadow-lg p-10 hover:scale-100 hover:-translate-y-px hover:shadow-amber-700 transition-all duration-300">
            {/*Small Heading */}
            <h3 className="font-bold text-amber-500 text-center text-2xl">
                STAY CONNECTED
            </h3>

            {/*Big Heading */}
            <h1 className="font-extrabold text-orange-950 text-center text-3xl">
            Never Miss a Fresh Brew!!
            </h1>

            {/*Paragraph */}
            <p className="text-2xl text-center font-bold">
                Subscribe to our newsletter and be the first to
                receive 
                <br />
                Exclusive offers,
                <br />
                 New coffee launches,
                <p className="text-3xl text-orange-600">And</p> 
                Special discounts.
            </p>

            <div className="flex justify-center items-center gap-4 mt-8">
                <input 
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-96 px-6 py-4 rounded-full border-2 border-orange-600 outline-none"
                />
<button
onClick={() => {
if(email===""){
alert("Please Enter Your Email");
}
else{
alert("Subscribed Successfully!");
setEmail("");
}
}}
>
Subscribe
</button>
            </div>


        </div>

    </section>
    
    
    );
}
export default Newsletter;