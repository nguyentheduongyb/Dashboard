import Home from "~/Pages/Home";
import Login from "~/Pages/Login";
import Register from "~/Pages/Register";
import Users from "~/SubPages/Users";
import Genre from "~/SubPages/Genre";
import Category from "~/SubPages/Category";

//Public Routes
const publicRoutes = [
    { path: "/login", component: Login, layout: null },
    { path: "/register", component: Register, layout: null },
    { path: "/users", component: Users },
    { path: "/genre", component: Genre },
    { path: "/category", component: Category },
    { path: "/dashboard", component: Home },
];

//Public Routes
const privateRoutes = [];
export { publicRoutes, privateRoutes };
