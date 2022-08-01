<template>
    <div class="about">
       <v-container>
           <v-col sm="10" class="pa-4 mx-auto">
               <v-card class="pa-2">
                    <v-img :src="post" style="height:60vh;"> </v-img>
                 
                  <v-card-actions class="pb-0">
                      <v-row class="mt-1 mx-1">
                          <v-col sm="2">
                              <v-btn small outlined color ="primary">{{post.toString().split("/")[4]}}</v-btn>
                          </v-col>
                          <v-col sm="10" class="d-flex justify-end">
                              <v-btn color="success" tile @click="Buy">Buy</v-btn>
                             
                          </v-col>
                      </v-row>
                  </v-card-actions>
                  <v-card-subtitle class="headline">
                      <h3>DOG</h3>
                  </v-card-subtitle>
                  <v-card-text class="grey--text">
                      <p>This is one of the available known dogs' breed called <span class="text-color-black text-capitalize font-weight-bold text-decoration-underline" style="color:black" >
                        {{post.toString().split("/")[4]}}</span></p>
                     
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
    mounted() {
    this.post = this.$route.params.id;
    },
    methods:{
        Buy(){
            this.$router.push({name: "home", params : {message : "Thanks for buying from us..."}});
        }
    }
   
}
</script>