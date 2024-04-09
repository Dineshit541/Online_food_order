const Contact = () => {
   return <div className=" flex justify-center p-10 m-10">
      <div className=" max-w-md w-full mx-auto p-6 bg-gray-600 rounded-lg shadow-md">
         <h2 className=" text-3xl text-center text-pink-600 font-bold mb-6">Contact Us</h2>
         <form action="">
            <div className="mb-4">
               <label className=" block text-white text-sm font-semibold mb-2" htmlFor="">Your Name</label>
               <input placeholder="John Cane" className=" w-full px-3 py-2 border rounded-lg bg-white focus:border-blue-500 focus:outline-none" type="text"/>
            </div>
             <div className="mb-4">
               <label className=" block text-white text-sm font-semibold mb-2" htmlFor="">Your Email</label>
               <input placeholder="john@example.com" className=" w-full px-3 py-2 border rounded-lg bg-white focus:border-blue-500 focus:outline-none" type="email"/>
            </div>
             <div className="mb-4">
               <label  className=" block text-white text-sm font-semibold mb-2" htmlFor="">Your Message</label>
               <textarea rows="4" placeholder="Type your message here..." className=" w-full px-3 py-2 border rounded-lg bg-white focus:border-blue-500 focus:outline-none" type="text"/>
            </div>
            <div className=" flex justify-center">
               <button type="submit" className=" bg-pink-500 text-white font-semibold px-2 py-3 rounded-lg focus:outline-white">
               Send Message
               </button>
            </div>
         </form>     
          </div>   
          </div>
};

export default Contact;