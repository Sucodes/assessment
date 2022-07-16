<template>
    <Menubutton
        v-if="showMenu"
        :toggle="ToggleMenu"
    />

</template>

<script>
import Menubutton from '@/components/Menubutton.vue'

export default {
    name: "Menu-page",
    components: {
        Menubutton
    },

    data () {
        return {
        showMenu: false
        }
    },
    methods: {
        ToggleMenu() {
        this.showMenu = !this.showMenu
        }
    }
}
</script>