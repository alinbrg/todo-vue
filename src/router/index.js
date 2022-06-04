import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView";
import HomeView from "../views/HomeView";

const routes = [
	{
		path: "/todo/about",
		name: "About",
		component: AboutView,
	},
	{
		path: "/todo/main",
		name: "Home",
		component: HomeView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
