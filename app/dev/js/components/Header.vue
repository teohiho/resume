<template>
	<header class="header">
		<div class="header__inner">
			<div class="header__left">
				<div class="header__logo">
					<img src="./../../../img/maruko_conan_border_icon.png" alt="teo-logo">
				</div>
				<div class="header__hide">
					<img src="./../../../img/maruko_conan_border_icon.png" alt="teo-logo">
					hello!
				</div>
			</div>
			<div class="header__right">
				<div class="header__lang">
					<select name="lang" @change="updateLanguage">
						<option value="ja">日本語</option>
						<option value="en" selected="selected">English</option>
						<!--<option value="vn">Tiếng Việt</option>-->
					</select>
				</div>
				<div class="header__theme">
					<select name="theme" @change="changeTheme($event)">
						<option value="light" var="light">
							<i class="fa-regular fa-sun"></i> Light
						</option>
						<option value="dark" var="dark">
							Dark
						</option>
					</select>
				</div>
			</div>
		</div>
	</header>
</template>

<script>

	export default {
		props: {
            language : {
                type: String,
				default: 'en',
				required: false
            }
        },
		data(){

		},
		methods: {
			changeTheme(e) {
				document.documentElement.setAttribute('data-theme', e.target.value);
			},

			updateLanguage(event) {
				this.$store.dispatch('updateLanguage', event.target.value);


				var element = document.getElementById("app");
				if(event.target.value == "en")
	  				element.classList.add("en-fontstyle");
				else if (event.target.value == "ja")
					element.classList.add("ja-fontstyle");
			}
		}
	}
	
</script>
