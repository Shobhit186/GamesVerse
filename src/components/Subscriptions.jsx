import { subscriptionPlans } from "../constants/constants";
import { CheckCircle2 } from "lucide-react";

const Subscriptions = () => {
  return (
    <div className="container max-w-7xl mx-auto" id="subscriptions">
    <div className="my-2 mx-3 flex items-center justify-center px-4 py-8">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center">Subscriptions</h1>
    </div>
    <div className="flex flex-wrap relative">
            {subscriptionPlans.map((plan, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 p-2"
              >
                <div className="p-10 border border-neutral-700 rounded-xl items-center flex flex-col h-full relative">
                  <p className="text-4xl font-semibold mb-4">{plan.planName}{plan.planName === "Premium" && <span className="bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent text-sm">( Most Popular )</span>}</p>
                  <p className="text-5xl text-lg mb-8 mt-6 mr-2">${plan.price}<span className="text-sm tracking-tight">/{plan.billingCycle}</span></p>
                  <ul className="mb-2">
                    {plan.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center mb-2">
                        <CheckCircle2 className="mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-gradient-to-r from-cyan-500 to-orange-500 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-6 rounded-md mb-2 mt-4 absolute bottom-0 z-20 py-2 px-2">
                    Subscribe
                  </button>
                </div>
              </div>
            ))}
          </div>
          </div>
  )
}

export default Subscriptions