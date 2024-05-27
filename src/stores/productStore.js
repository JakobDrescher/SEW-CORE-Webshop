import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useProductStore = defineStore('productStore', () => {
    const products = ref([{
        name: "NERF Elite 2.0 Double Punch",
        price: "47,99",
        description: "This flywheel powered blaster comes equipped with two barrels which each feed of there own magazine and shoot alternately by pressing the binary trigger. The blaster comes with 50 NERF Elite-Darts which is more than enough to fill up the two included magazines each of which having a ten dart capacity.",
        img: "https://m.media-amazon.com/images/I/617YpZgOrPL._AC_SX679_.jpg"
    }]);

    return {products}
})
