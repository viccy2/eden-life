<template>
    <div class="about">
       <v-container>
           <v-col sm="10" class="pa-4 mx-auto">
               <v-card class="pa-2">
                    <v-img src="" style="height:60vh;"> </v-img>
                 
                  <v-card-actions class="pb-0">
                      <v-row class="mt-1 mx-1">
                          <v-col sm="2">
                              <v-btn small outlined color ="primary">{{post.name}}</v-btn>
                          </v-col>
                          <v-col sm="10" class="d-flex justify-end">
                              <v-btn color="success" tile @click="Buy">Buy</v-btn>
                             
                          </v-col>
                      </v-row>
                  </v-card-actions>
                  <v-card-subtitle class="headline">
                      <h3>{{post.title}}</h3>
                  </v-card-subtitle>
                  <v-card-text class="grey--text">
                      <p>{{post.content}}</p>
                      <p>{{post.created}}</p>
                  </v-card-text>
               </v-card>
           </v-col>
       </v-container>
    </div>
    
</template>
<script>
export default {
    name : 'about',

    data(){
        return {
        post : {},
        }
    },
    async created(){
        try {
            //  alert(this.$route.params.id)
            fetch('http://localhost:5000/app/api/user/'+this.$route.params.id)
            .then(response => response.json())
            .then(data => this.post = data)
            .catch(console.log(err))
      
        }
        catch(err){
            console.log(err)
        }
        
    },
    methods:{
        Buy(){
            this.$router.push({name: "home", params : {message : "Thanks for buying from us..."}});
        }
    }
   
}
</script>