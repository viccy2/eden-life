<template>
 <div class="home">
      <v-container>
        <div class="input-container">
			<input type="text" placeholder="Type a name" v-model="dogName" />
		  </div>
            <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.$route.params.message">
                {{this.$route.params.message}}
            </v-alert>
            <v-row no-gutters>
                <v-col sm="4" class="pa-3" v-for="product in products" :key="product" >
                    <v-card flat class="pa-1" :to=" {name : 'about', params : {id : product}}">
                         <v-img :src="product"> </v-img>
                        <v-btn class="mt-3" small outlined color ="success" width="100%">
                             {{product.toString().split("/")[4]}}
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
    data() {
        return{
            dogName: "",
	
        }
    },
    computed:{
      products(){
        return this.$store.state.products;
      },
      searchDog(){
         if(!dogName){
              return this.$store.state.products;
            }
        var dog = this.$store.state.products;
          dog = dog.filter(function(item){
              if(item.message.toLowerCase().indexOf(dogName) !== -1){
                    return item;
                }
          })
      },
    },
    mounted() {
    this.$store.dispatch('getProducts');
    },
    
    
  }
</script>
