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
					<select name="lang">
						<option var="ja">日本語</option>
						<option var="en">English</option>
						<option var="vn">Tiếng Việt</option>
					</select>
				</div>
				<div class="header__theme">
					<select name="theme" @change="changeTheme($event)">
						<option value="light" var="light">
							&#xf0eb; Light
						</option>
						<option value="dark" var="dark">
							&#xf186; Dark
						</option>
					</select>
				</div>
			</div>
		</div>
	</header>
</template>

<script>

	export default {
		data(){

		},
		methods: {
			changeTheme(e) {
				console.log(e.target.value);
				document.documentElement.setAttribute('data-theme', e.target.value);
			}
		}
	}
	
</script>
