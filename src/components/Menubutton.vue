<template>
   <div id="menu">
        <ul>

            <li> <a href="#"> Twitter <img src="../assets/images/twitter.jpg" alt="Twitter icon"> </a> </li>
            <li> <a href="#"> Dribble <img src="../assets/images/dribbble.jpg" alt="Dribble icon"> </a> </li>
            <li> <a href="#"> Figma <img src="../assets/images/figma.jpg" alt="Figma icon"> </a></li>
            <li> <a href="#"> GitHub <img src="../assets/images/github.jpg" alt="GitHub icon"> </a> </li>
            <router-link to="/"><button>Back to Home</button></router-link>
        </ul>
        
    </div>
</template>

<script>
export default {
    name: 'Menu-button',
    components: {},

}
</script>
