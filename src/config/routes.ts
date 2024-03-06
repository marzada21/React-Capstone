import Directory from "../pages/Directory";
import Landing from "../pages/Landing";

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
];

export default routes