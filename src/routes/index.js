//pages (element) import
import Home from '../pages/Home'

// router import
const {createBrowserRouter}  = require("react-router-dom");

// create router
const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
    },
])

export default router;