import React, { useState } from 'react';

const App = () => {
  const [page, setPage] = useState("home");

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <nav className="flex space-x-6 text-lg font-semibold border-b border-gray-700 pb-4">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("contact")}>Contact</button>
      </nav>
      {page === "home" ? <HomepageSection /> : <ContactUsPage />}
    </div>
  );
};

const HomepageSection = () => (
  <section className="flex flex-col md:flex-row gap-8 mt-8">
    <div className="w-full md:w-1/2 h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/600x400?text=Map')" }} />
    <div className="w-full md:w-1/2">
      <h2 className="text-2xl mb-2">GET IN TOUCH</h2>
      <form className="flex flex-col gap-4">
        <input className="p-2 rounded text-black" type="text" placeholder="Name" />
        <input className="p-2 rounded text-black" type="email" placeholder="Email" />
        <input className="p-2 rounded text-black" type="tel" placeholder="Phone" />
        <textarea className="p-2 rounded text-black" placeholder="Message" />
        <button className="bg-cyan-400 text-black py-2 px-4 rounded w-fit">Send Message →</button>
      </form>
    </div>
  </section>
);

const ContactUsPage = () => (
  <section className="mt-8 flex flex-col md:flex-row gap-8">
    <div className="md:w-1/2">
      <h2 className="text-2xl mb-2">Contact Us, We're Ready to Help!</h2>
      <p className="mb-4">Post any question and we'll get back to you.</p>
      <p className="mb-1"><strong>Chat with us:</strong> info@site.com</p>
      <p><strong>Call us:</strong> +91-1234567890</p>
    </div>
    <form className="flex flex-col gap-4 md:w-1/2">
      <select className="p-2 rounded text-black">
        <option>Select a topic</option>
        <option>Property Inquiry</option>
        <option>Service Feedback</option>
      </select>
      <input className="p-2 rounded text-black" type="text" placeholder="Name" />
      <input className="p-2 rounded text-black" type="email" placeholder="Email" />
      <textarea className="p-2 rounded text-black" placeholder="Message" />
      <button className="bg-cyan-400 text-black py-2 px-4 rounded w-fit">Submit query</button>
    </form>
  </section>
);

export default App;
