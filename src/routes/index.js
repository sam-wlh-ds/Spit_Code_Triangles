//pages (element) import
import Home from '../pages/Home'
import Dashboard_Page from '../pages/Dashboard_Page'
import Visualization from '../pages/Visualization';

// router import
const {createBrowserRouter}  = require("react-router-dom");

// create router
const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/dashboard",
        element: <Dashboard_Page/>
    },
    {
        path:"/visualization",
        element: <Visualization/>
    }
])

export default router;