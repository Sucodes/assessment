<template>
    <main class="container">

        <h1>Listed posts</h1>

        <div style="overflow-x: auto;">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Link</th>
                        <th>Title</th>
                        <!--<th>Content</th>-->
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="post in posts" :key="post.id">
                        <td>{{post.id}}</td>
                        <td>{{post.date}}</td>
                        <td>{{post.link}}</td>
                        <td>{{post.title.rendered}}</td>
                        <!--<td>{{post.content}}</td>-->
                    </tr>
                </tbody>
            </table>
        </div>

    </main>
</template>

<script>
    import Listedpost from '../components/Listedpost';
    import { API } from '../services/API';

    export default {
        name: Listedpost,
        
        data: function() {
            return {
                loading: false,
                posts: [],
                errorMessage: null
            };
        },
        created : async function() {
            try {
                this.loading = true;
                let response = await API.getALLPosts();
                this.loading = false;
                this.posts = response.data
            } 
            
            catch (error) {
                this.loading = false;
                this.errorMessage = error;
            }
        }
    };

</script>


<style lang="scss" scoped>
    table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;

        th, td {
            text-align: left;
            padding: 16px;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
    }
</style>