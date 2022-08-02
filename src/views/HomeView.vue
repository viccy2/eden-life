<template>
 <div class="home">
      <v-container>
        <div class="search" style="margin-top:-20px">
			    <v-text-field v-model="names" rounded flat color="grey" class="" solo label="search breeds..." prepend-inner-icon="mdi-magnify" ></v-text-field>
        </div>
            <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.$route.params.message">
                {{this.$route.params.message}}
            </v-alert>
            <div class="content" style="margin-top:-10px">
            <v-row no-gutters>
                <v-col sm="4" class="pa-3" v-for="product in searchDog" :key="product" >
                    <v-card flat class="pa-1" :to=" {name : 'about', params : {id : product}}">
                         <v-img :src="product"> </v-img>
                        <v-btn class="mt-3" small outlined color ="success" width="100%">
                             {{product.toString().split("/")[4]}}
                        </v-btn>
                    </v-card>
                </v-col>
            </v-row>
            </div>
        </v-container>
 </div>
</template>

<script>
  export default {
    name: 'Home',
    data(){
        return{
          names: null,
	      }
    },
    computed:{
      searchDog(){
        var names = this.names;
         if(!names){
              return this.$store.state.products;
          }
        var dog = this.$store.state.products;
            dog = dog.filter(function(item){
              if(item.toLowerCase().indexOf(names) !== -1){
                    return item;
              }
          })
          return dog;
      },
    },
    mounted() {
    this.$store.dispatch('getProducts');
    },
    
    
  }
</script>
