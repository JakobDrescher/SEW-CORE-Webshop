import {createRouter, createWebHistory} from 'vue-router'
import ProductList from "@/components/ProductList.vue";
import AddDialog from "@/components/AddDialog.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name:'home',
            component:ProductList
        },
        {
            path:'/add',
            name:'addProduct',
            component:AddDialog
        }
    ]
})

export default router
