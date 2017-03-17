<template>
	<div v-if="!image" class="image-blank">
		<h2>选择图片</h2>
		<input type="file" class="load-input" @change="onFileChange">
	</div>
	<div v-else>
		<img :src="image" alt="">
		<button @click="removeImage">删除图片</button>
	</div>	
</template>
<script>
	import axios from 'axios';
	export default{
		name:'upload',
		data(){
			return{
				image:''
			};
		},
		props:{
			url:{
				type: String,
				required: true
			}
		},
		mounted(){
			console.log('url:',this.url);
		},
		methods:{
			onFileChange(e){
				let files = e.target.files || e.dataTransfer.files;
				if(!files.length) return;
				this.upLoadImage(files);
			},
			upLoadImage(file){
				let self = this;
				let formData = new FormData();
				formData.append('uploadImg',file);
				axios({
					method: 'post',
					url: self.url,
					data:formData
				}).then((response) => {
					console.log(response);
				}).catch((error)=>{
					console.log(error);
				});
			},
			removeImage(){
				this.image = "";
			}
		}
	}
</script>
<style lang="scss">
	
</style>