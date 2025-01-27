import { useEffect, useState } from "react"
import { PropagateLoader } from "react-spinners"


const Success = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            {
                loading ? (<PropagateLoader color={'#4CAF50'} />) :
                    (<div>
                        <h2 className="font-semibold text-3xl mb-4 text-center">Order Successful!</h2>
                        <p>Your order has been successfully placed.</p>
                    </div>)
            }

        </div>
    )
}

export default Success