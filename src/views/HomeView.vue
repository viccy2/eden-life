<template>
 <div class="home">
      <v-container>
            <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.$route.params.message">
                {{this.$route.params.message}}
            </v-alert>
            <v-row no-gutters>
                <v-col sm="4" class="pa-3" v-for="product in products" :key="product" >
                    <v-card flat class="pa-1" :to=" {name : 'about', params : {id : product._id}}">
                         <v-img :src="product"> </v-img>
                        <v-btn class="mt-3" small outlined color ="success" width="100%">
                          DOGs
                             <!-- {{product.substring(0,10)+"..."}} -->
                        </v-btn>
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
