import React from 'react';

function Contact() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event: any) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "0e53c368-1178-40e6-a30e-d1d18297f266");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Message Sent Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div className="flex flex-col items-center mt-20 mb-20">
        <span className="text-white text-xl font-bold mb-8">Want to send me a message?</span>
        <form onSubmit={onSubmit} className="md:w-1/4 w-1/2">
          <input className="block text-white fond-medium text-sm mb-4 bg-current-line border-b-2 focus:border-pink focus:bg-pink focus:bg-opacity-20 transition duration-300 p-2 w-full" type="text" name="name" placeholder="Name" required/>
          <input className="block text-white fond-medium text-sm mb-4 bg-current-line border-b-2 focus:border-pink focus:bg-pink focus:bg-opacity-20 transition duration-300 p-2 w-full" type="email" name="email" placeholder="Email" required/>
          <textarea className="block text-white fond-medium text-sm mb-4 bg-current-line border-b-2 focus:border-pink focus:bg-pink focus:bg-opacity-20 transition duration-300 p-2 w-full" name="message" placeholder="Message" required></textarea>
  
          <button className="mb-4 text-white text-md font-bold border-b-2 p-2 border-pink hover:bg-pink hover:bg-opacity-50 transition duration-300" type="submit">Submit</button>
  
        </form>
        <span className="text-white text-lg font-bold">{result}</span>
  
      </div>
    );
}

export default Contact;