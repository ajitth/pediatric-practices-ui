export default function HaveToQuestion() {
    return (
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Map Section */}
            <div className="w-fit h-[400px] md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-78.85028568468104!3d35.7326525801834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac8f8b7c5e8f3b%3A0x7b4c8b8b8b8b8b8b!2s1328%20Center%20St%2C%20Apex%2C%20NC%2027502%2C%20USA!5e0!3m2!1sen!2sin!4v1681234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
  
            {/* Contact Form Section */}
            <div className="have-to-question bg-white shadow-md rounded-lg p-8 flex flex-col justify-center">
              <h3 className="text-yellow-500 text-sm font-bold uppercase mb-2">Send Us Message</h3>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Have a Question? Let’s Talk!
                <br />
                <span className="text-gray-600 font-normal">Write Your Message Here</span>
              </h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="border border-gray-300 rounded-md p-3 text-sm w-full"
                    />
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="border border-gray-300 rounded-md p-3 text-sm w-full"
                    />
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="border border-gray-300 rounded-md p-3 text-sm w-full"
                    />
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="border border-gray-300 rounded-md p-3 text-sm w-full"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <textarea
                    placeholder="Write your message here"
                    className="border border-gray-300 rounded-md p-3 text-sm w-full h-32 mb-4"
                  ></textarea>
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="pointer bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-3 px-6 rounded-md w-full md:w-auto"
                  >
                    Submit ➔
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }