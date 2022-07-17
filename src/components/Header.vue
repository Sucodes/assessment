<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <header>
        <nav id="navbar">
            <div class="navbar__link">
                
                <router-link to="/"><img class="navbar__link--logo" src="../assets/images/dasdas.jpg" alt="Dasdas Logo"></router-link>

                <ul class="navbar__link--content">

                    <li> <a href="#"> <img src="../assets/images/twitter.jpg" alt="Twitter icon"> </a> </li>
                    <div><img src="../assets/images/dot.jpg" alt="dot"> </div>
                    <li> <a href="#"> <img src="../assets/images/dribbble.jpg" alt="Dribble icon"> </a> </li>
                    <div><img src="../assets/images/dot.jpg" alt="dot"> </div>
                    <li> <a href="#"> <img src="../assets/images/figma.jpg" alt="Figma icon"> </a></li>
                    <div> <img src="../assets/images/dot.jpg" alt="dot"></div>            
                    <li> <a href="#"> <img src="../assets/images/github.jpg" alt="GitHub icon"> </a> </li>

                </ul>

                <div v-on:click="ToggleMenu" class="navbar__mobile--menu">

                    <router-link to="/Menubutton">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
                    </router-link>

                </div>

            </div>
        </nav>
    </header>
</template>

<script>

</script>

<style scoped>

</style>