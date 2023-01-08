import "../../styles/globals.css";
import date from "date-and-time";

export default function Receive() {
  return (
    <div className="bg-gray-100">
      <div className="container xl:max-w-12xl mx-auto px-4 py-2 lg:px-8 lg:py-2">
        {/* Box */}
        <div className="flex flex-col rounded-xl shadow-sm bg-white overflow-hidden">
          <div className="p-5 lg:p-6 grow w-full md:w-3/4 lg:w-3/5 xl:w-2/5 mx-auto">
            {/* Heading */}
            <div className="text-center mt-2">
              <h1 className="text-2xl font-bold mb-1">Receipt Confirmation</h1>
              <p className="text-sm text-gray-600 font-medium mb-5">
                Scan Receiver Id and Enter Name
              </p>
            </div>
            {/* END Heading */}

            {/* Checkout Form */}
            <div className="space-y-6">
              <form className="space-y-6">
                <div className="space-y-6 p-4 rounded border bg-gray-50">
                  <div className="space-y-1">
                    <label htmlFor="job_number" className="font-medium">
                      Job Information
                    </label>
                    <input
                      className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      type="text"
                      id="job_number"
                      name="job_number"
                      placeholder="Enter Job Number"
                    />
                    <p className="leading-relaxed text-gray-600 mt-1">
                      We carefully handcrafted a vast collection of UI
                      components to build all kinds of web applications.
                    </p>
                  </div>
                </div>
                <div className="space-y-2 p-4 rounded border bg-gray-50">
                  <div className="space-y-1">
                    <label htmlFor="receiver_id" className="font-medium">
                      Scan Receiver Id
                    </label>
                    <input
                      className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      type="text"
                      id="receiver_id"
                      name="receiver_id"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="receiver_name" className="font-medium">
                      Receiver Name
                    </label>
                    <input
                      className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      type="text"
                      id="receiver_name"
                      name="receiver_name"
                    />
                  </div>
                </div>
                <div className="rounded border p-4 text-sm text-gray-600 font-medium text-center">
                  Date & Time Received:{"  "}
                  <h2 className="text-lg font-bold ">
                    {date.format(new Date(), "ddd, MMM DD YYYY h:mm A")}
                  </h2>
                </div>
                <button
                  type="submit"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700"
                >
                  <span>Submit</span>
                </button>
              </form>
            </div>
            {/* END Checkout Form */}
          </div>
        </div>
        {/* END Box */}
      </div>
    </div>
  );
}
