<template>
  <section id="post">

    <div v-if="loading">
      <Buffering/>
    </div>
    
    <div v-if="!loading">

      <div v-for="post in posts" :key="post.id">
        <div v-if="$route.params.id == post.id">
          <p>
            <strong> By {{ post.parsely.meta.creator }} . </strong>
            {{ post.modified }}
          </p>

          <h2>{{ post.title.rendered }}</h2>

          <p>{{ post.content.rendered }}</p>

          <figure>
            <img :src="post.parsely.meta.image.url" alt="post image" />
          </figure>

          <p>
            {{ post.content.rendered }}
          </p>

          <p>
            {{ post.content.rendered }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section id="more-articles">
    <div>
      <h2>More Articles</h2>
    </div>
    <div class="more">
      <article class="card">
        <img src="../assets/images/Safari.jpg" alt="CSS Grid" />
        <div class="card__description">
          <p><strong> Front-end .</strong> 1 Month Ago</p>
          <h3>Css Grid</h3>
          <p>
            The CSS Grid Layout Module offers a grid-based layout system with
            rows and columns, making it easier to design web pages without
            having to use floats and positioning.
          </p>
        </div>
        <div class="card__detail">
          <p>12 Min Read</p>
          <router-link :to="`/postdetails/2354846`">
            Read Full
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
              />
            </svg>
          </router-link>
        </div>
      </article>
      <article class="card">
        <img src="../assets/images/Group.jpg" alt="CSS Grid" />
        <div class="card__description">
          <p><strong>Front-end . </strong> 2 Month Ago</p>
          <h3>Colors in Css</h3>
          <p>
            Colors play a vital role in making a web page usable or not. In CSS,
            we can control the foreground and background color of an element
            with the color and background properties.
          </p>
        </div>

        <div class="card__detail">
          <p>8 Min Read</p>
          <router-link :to="`/postdetails/2355165`">
            Read Full
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
              />
            </svg>
          </router-link>
        </div>
      </article>
      <article class="card">
        <img src="../assets/images/mini.jpg" alt="CSS Grid" />
        <div class="card__description">
          <p><strong>Front-end . </strong> 2 Month Ago</p>
          <h3>Css Variables</h3>
          <p>
            Css variables are custom properties that cascade normally and even
            inherit. They start with a reserved -- prefix, and there are no real
            rules about their value.
          </p>
        </div>
        <div class="card__detail">
          <p>10 Min Read</p>
          <router-link :to="`/postdetails/2354892`">
            Read Full
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
              />
            </svg>
          </router-link>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import Buffering from '@/components/Buffering.vue';
import { API } from "../services/API";

export default {
  components: { Buffering },
  name: "Post-details",

  data: function () {
    return {
      loading: false,
      posts: [],
      errorMessage: null,
    };
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await API.getALLPosts();
      this.loading = false;
      this.posts = response.data;
    } catch (error) {
      this.loading = false;
      this.errorMessage = error;
    }
  },
};
</script>

<style scoped></style>
