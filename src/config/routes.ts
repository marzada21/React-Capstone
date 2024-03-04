import Directory from "../pages/Directory";
import Landing from "../pages/Landing";
import Create from "../pages/Create";

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
        path: "",
        component: Landing,
        name: 'Home Page'
    },
    {
        path: "/directory",
        component: Directory,
        name: 'Drink Directory'
    },
    {
        path: "/create",
        component: Create,
        name: 'Create'
    },
];

export default routes