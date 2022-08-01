<template>
    <div id="app-instasearch">
	
		<div class="input-container">
			<input type="text" placeholder="Type a name" v-model="authorNameSearchString" />
		</div>
		<select name="" id="">
			<option value="affenpinscher">Affenpinscher</option>
			<option value="african"> African</option>
			<option value="airdale"> Airdale</option>
			<option value="akita"> Akita</option>
			<option value="appenzilar"> Appenzilar</option>
			<option value="Shepherd Australian">Shepherd Australian</option>
			<option value="Basenji"> Basenji</option>
			<option value="Beagle"> Beagle</option>
			

		</select>
		
			aaaa
			<div class="photo photo-animated" v-for="photo in filteredPhotoFeed" v-bind:key="photo.id">
				<img v-bind:src="photo.download_url"  style="height:100px;width:50%"/>
				<span class="author">{{ photo.author }}</span>
			</div>
			
		
	
	</div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return{
            authorNameSearchString: "",
		    photoFeed: null
        } 
		
	},
	
	mounted() {
		axios
			.get('https://picsum.photos/v2/list?page=2&limit=10')
			.then(response => {
				this.photoFeed = response.data;
			})
			.catch(error => console.log(error))
	},
	
	 computed: {
        
        filteredPhotoFeed: function () {
			
            var photos = this.photoFeed;
            var authorNameSearchString = this.authorNameSearchString;

            if(!authorNameSearchString){
                return photos;
            }

            // searchString = authorNameSearchString.trim().toLowerCase();

            photos = photos.filter(function(item){
                if(item.author.toLowerCase().indexOf(authorNameSearchString) !== -1){
                    return item;
                }
            })

            return photos;
        }
	 }
}
</script>