import "../../styles/globals.css";

export default function Deliver() {
  return (
    <div className="bg-gray-100">
      <div className="container xl:max-w-7xl mx-auto px-4 py-2 lg:px-8 lg:py-2">
        {/* Box */}
        <div className="flex flex-col rounded-xl shadow-sm bg-white overflow-hidden">
          <div className="p-5 lg:p-6 grow w-full md:w-3/4 lg:w-3/5 xl:w-2/5 mx-auto">
            {/* Heading */}
            <div className="text-center mt-5">
              <h1 className="text-2xl font-bold mb-1">Delivery Information</h1>
              <p className="text-sm text-gray-600 font-medium mb-5">
                Enter complete job information for delivery
              </p>
            </div>
            {/* END Heading */}

            {/* Checkout Form */}
            <div className="space-y-6">
              <form className="space-y-6">
                <div className="space-y-6 p-4 rounded border bg-gray-50">
                  <div className="space-y-1">
                    <input
                      className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      type="text"
                      id="job_number"
                      name="job_number"
                      placeholder="Enter Job Number"
                    />
                  </div>
                  <div className="space-y-1">
                    <input
                      className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      type="text"
                      id="job_description"
                      name="job_description"
                      placeholder="Enter Job Description"
                    />
                  </div>
                </div>
                <div className="space-y-6 p-4 rounded border bg-gray-50">
                  <div className="space-y-1">
                    <label htmlFor="project_manager" className="font-medium">
                      Project Manager
                    </label>
                    <input
                      className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      type="text"
                      id="project_manager"
                      name="project_manager"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="model_maker" className="font-medium">
                      Model Maker
                    </label>
                    <input
                      className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      type="text"
                      id="model_maker"
                      name="model_maker"
                    />
                  </div>
                  <div className="space-y-6 sm:space-y-0 sm:flex sm:space-x-3">
                    <div className="space-y-1 grow">
                      <label htmlFor="qa_inspector" className="font-medium">
                        QA Inspector
                      </label>
                      <input
                        className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        type="text"
                        id="qa_inspector"
                        name="qa_inspector"
                      />
                    </div>
                    <div className="space-y-1 sm:w-40">
                      <label
                        htmlFor="delivery_percentage"
                        className="font-medium"
                      >
                        Delivery Percentage
                      </label>
                      <input
                        className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        type="text"
                        id="delivery_percentage"
                        name="delivery_percentage"
                      />
                    </div>
                  </div>
                </div>
                <div className="rounded border p-4 text-sm text-gray-600 font-medium text-center">
                  Delivery Time: 10:AM and 4:00 PM; Friday 1:00 PM
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

            {/* Footer */}
            <div className="text-center my-5">
              <p className="text-sm text-gray-500 font-medium">
                Congratulation for a successful Sign-off
              </p>
            </div>
            {/* Footer */}
          </div>
        </div>
        {/* END Box */}
      </div>
    </div>
  );
}
