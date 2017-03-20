<template>
	<div>
		<div class="upload-list" v-for="image in images">
			<img :src="image" alt="">
		</div>
		<div class="image-blank">
			<input type="file" class="load-input" @change="onFileChange" multiple>
			<div class="load-icon">
				<i class="">选择图片</i>
			</div>
		</div>
	</div>
</template>
<script>
	/*
		图片上传组件
	*/
	import axios from 'axios';
	export default{
		name:'upload',
		data(){
			return{
				images:['https://tp-y.zdmimg.com/201703/12/58c564dd7a1464767.png_d320.jpg','https://tp-y.zdmimg.com/201703/12/58c564dd7a1464767.png_d320.jpg']
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
					console.log('result:',response);
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
<style lang="scss" scoped>
	@import "~zdm_ui/ct-common";
	.upload-list{
		display: inline-block;
	    width: 60px;
	    height: 60px;
	    text-align: center;
	    line-height: 60px;
	    border: 1px solid transparent;
	    border-radius: 4px;
	    overflow: hidden;
	    background: #fff;
	    position: relative;
	    box-shadow: 0 1px 1px rgba(0,0,0,.2);
	    margin-right: 4px;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.image-blank{
		background: #fff;
	    border: 1px dashed #d7dde4;
	    border-radius: 4px;
	    text-align: center;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	    transition: border-color .2s ease;
		display: inline-block;
		input[type=file]{
			background-color: transparent;
			font-size: 0;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 10;
			width: 58px;
			height: 58px;
		}
		.load-icon{
			width: 58px;
		    height: 58px;
		    line-height: 58px;
		    font-size: rem(24);
		}
	}


</style>