import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"

const ProtectedRoutes = () => {

    const trainer = useSelector(reducer => reducer.trainer)

    if ( trainer.length >= 3 ) {
        return <Outlet />   //para poder ver las rutas
    } else {
        return <Navigate to='/' />
    }
}

export default ProtectedRoutes