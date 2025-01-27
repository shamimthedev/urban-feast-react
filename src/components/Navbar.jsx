import { useDispatch } from "react-redux"
import { setSearch } from '../redux/slices/SearchSlice'

const Navbar = () => {
    const dispatch = useDispatch()
    return (
        <nav className="mx-6 py-3 mb-10 flex flex-col gap-3 lg:flex-row justify-between">
            <div>
                <h4 className="text-lg text-gray-600 font-bold">{new Date().toUTCString().slice(0, 16)}</h4>
                <h1 className="text-2xl font-bold">Urban Feast</h1>
            </div>
            <div>
                <input className="p-3 text-sm border border-gray-400 outline-none rounded-lg w-full lg:w-[25vw]" type="search" name="search" id="" placeholder="search here" autoComplete="off" 
                onChange={(e)=>dispatch(setSearch(e.target.value))}/>
            </div>
        </nav>
    )
}

export default Navbar