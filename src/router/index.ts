import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FavoritesView from "../views/FavoritesView.vue"
import ContactUsView from "../views/ContactUsView.vue";
import DetailsView from "../views/DetailsView.vue";

const routerHistory = createWebHistory()

const router = createRouter({
     history: routerHistory, 
     routes: [
         {
             path: "/",
             name: "HomeView",
             component: HomeView
         },
         {
            path: "/favorites",
            name: "Favorites",
            component: FavoritesView
         },
         {
            path: "/contact-us",
            name: "Contact Us",
            component: ContactUsView
         },
         {
            path: "/details/:id",
            name: "DetailsView",
            component: DetailsView
        },
     ]
 })

  export default router;