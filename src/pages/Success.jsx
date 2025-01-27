import { useState } from "react"
import { PropagateLoader } from "react-spinners"


const Success = () => {
    const [loading, setLoading] = useState(false)
  return (
    <div className="flex flex-col justify-center items-center h-screen">
        <PropagateLoader />
        <h2 className="font-semibold text-3xl mb-4">Order Successful!</h2>
        <p>Your order has been successfully placed.</p>
    </div>
  )
}

export default Success