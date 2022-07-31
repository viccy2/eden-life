<template>
    <div class="navbar">
        <!-- NAVBAR DISPLAY ON ALL DEVICES -->
        <v-container>
            <v-app-bar fixed height="">
                <v-toolbar-title><img class="mt-1 imgs" rounded src="../assets/eden.svg" height="30" @click="Go"></v-toolbar-title>
                <v-spacer></v-spacer>
                <!-- THE SEARCH ICON -->
              
                <v-text-field rounded color="grey" class="mt-8" solo label="search breeds..." prepend-inner-icon="mdi-magnify"></v-text-field>
                
                <v-spacer></v-spacer>
                  <!-- THE NAVBAR ICON -->
                <div class="d-flex flex-column align-center">
                    <v-btn icon >
                        <v-badge dot bordered color="success" overlap>
                        <v-icon tile>mdi-account</v-icon></v-badge>
                    </v-btn>
                </div>

            </v-app-bar>
            
        </v-container>
        NAVAR FOR ALL 
    </div>
</template>
<script>
export default {
    name : 'Navbar'
}
</script>
<style scoped>
     .search-box{
    position : absolute;
    top : 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: italic;
    height: 30px;
    border-radius:40px;
    padding: 2px;
    padding-right:0px;
    width:45%;
    border: 1px solid grey;
    
  
  }
  .search-btn{
    float:right;
    width:30px;
    height:30px;
    border-radius:50%;
    background: #329732;
    display: flex;
    justify-content: center;
    align-items:center ;
    margin-top:-27px;
    cursor: pointer;
  }
  .search-txt{
    background: none;
    outline: none;
    font-family:italic;
    padding-right:-10;
    color:grey;
    font-size: 14px;
    transition:0.4s;
    line-height:-10px;
    width: 100%;
    margin-left:10px;
  }
  .imgs{
    cursor : pointer;
  }
</style>
<script>
export default {
  name : 'navbar',
  methods:{
    Go(){
      this.$router.push({name: "home"});
    }
  }
}
</script>