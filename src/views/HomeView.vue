<template>
 <div class="home">
      <v-container>
            <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.$route.params.message">
                {{this.$route.params.message}}
            </v-alert>
            <v-row no-gutters>
                <v-col sm="4" class="pa-3" v-for="product in products" :key="product._id" >
                    <v-card flat class="pa-1" :to=" {name : 'about', params : {id : product._id}}">
                         <v-img :src="product.image"> </v-img>
                        <v-btn class="ml-4 mt-3" small outlined color ="indigo">
                             {{product.name}}
                        </v-btn>
                        <v-card-title>
                            {{product._id}}
                        </v-card-title>
                        <v-card-text class="py-0">
                            <!-- <p>{{post._id.substring(0,100)+"..."}}</p> -->
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
 </div>
</template>

<script>
  export default {
    name: 'Home',
    computed:{
      products(){
        return this.$store.state.products;
      }
    },
    mounted() {
    this.$store.dispatch('getProducts');
    },
    
  }
</script>
