import React from "react";

const ContactUs: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="container m-10 bg-contact rounded-3xl h-auto w-1/2 py-10">
          <p className="text-2xl text-black font-bold text-center mb-6">
            Contact Us
          </p>
          <div className="flex-col gap-4 flex justify-center items-center">
            <div className="flex-col gap-2 w-2/4">
              <div>
                <label className="mb-2 text-black font-semibold text-left">
                  Name
                </label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-black rounded-lg p-2 w-full"
                />
              </div>
            </div>
            <div className="flex-col gap-2 w-2/4">
              <label className="mb-2 text-black font-semibold">Email</label>
              <div></div>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email id"
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
              </div>
            </div>
            <div className="flex-col gap-2 w-2/4">
              <div>
                <label className="mb-2 text-black font-semibold">
                  Comment
                </label>
              </div>
              <div>
                <textarea
                  placeholder="Comment..."
                  className="border border-gray-300 rounded-lg p-2 w-full"
                ></textarea>
              </div>
            </div>
              <div>
                <button className="mt-6 bg-black text-white text-base font-normal px-5 py-2 rounded-xl">
                  Submit
                </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
