<template>
	<div class="body">
		<div class="body__container">
				<div class="info">
					<div class="info__name">
						
						<Appear :delay="200" :transition="['100px', 0]" >
							<!-- <b>H o &nbsp; T h i &nbsp; T h u &nbsp; H i e n</b>
							 -->
							 <b> {{ addSpace(en.name) }} </b>
						</Appear>
					</div>
					<div class="info__job">
						
						<b>{{ en.job }}</b>
							<!-- <transition appear :css="false" @before-enter="beforeEnter" @enter="enter">
								<div>Transitions Test</div>
							</transition> -->
							<!-- :transition="['100px', 0]" -->
							<!-- :duration="500" :delay="0" -->
						
					</div>
					<div class="info__contacts text-sm">
						<!-- <div class="info__contacts--phone"></div> -->
						<a class="info__contacts--item info__contacts--mail" href="mailto:thuhienho11@gmail.com">
							<i class="fa-solid fa-envelope"></i>
							{{ en.contacts.text }}
						</a>
						<a class="info__contacts--item info__contacts--github" href="https://github.com/teohiho">
							<i class="fa-brands fa-github"></i>
							{{ en.contacts.link }}
						</a>
					</div>
					<div class="info__description pt-10">
						I'm Ho Thi Thu Hien, a software developer with 2 years of experience in web development. I specialize in creating a website and creating user-friendly interfaces using C#, SCSS, JavaScript, and Vue.
					</div>
				</div>
				<div class="cv">
					<div class="cv__col cv__right">
						<div class="cv__item cv__experience">
							<div class="cv__title">
								<Appear :delay="200" :transition="['100px', 0]" >
									<span>W O R K  &nbsp; E X P E R I E N C E</span>
								</Appear>
							</div>
							<div class="cv__content">
								<div class="experience">
									<div class="experience__position">Software Engineer</div>
									<div class="experience__company">Nihon System</div>
									<div class="experience__detail">
										<div class="experience__detail-item ">
											<div class="experience__detail-item__time text-sm">
												<i class="fa-solid fa-calendar-days"></i>
												March 2022 - Current
											</div>
											<div class="experience__detail-item__location text-sm">
												<i class="fa-solid fa-location-dot"></i>
												Japan
											</div>
											<div style="clear:both;"></div>
											<div class="experience__detail-item__work">
												<p class="pt-10">This is a company specializing in providing technology solutions to solve user problems with web app products. At the same time, the company also creates its own products.</p>
												<ul>
													<li>Maintenance and adding new features to the available web app are requested from customers</li>
													<li>I was responsible for designing the user interface using Adobe XD, and collaborating with experienced people to ensure clear and effective design,developing new pages, ensuring perfect pixel accuracy.</li>
													<li>I also developed a web app for the project using Vuejs.</li>
												</ul>
												<div class="technology pt-10">
													<span class="fw-b">Technology:</span> ASP.NET MVC, Vuejs, JavaScript, Knockoutjs, HTML, SCSS, CSS
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="cv__col cv__center"></div>
					<div class="cv__col cv__left">
						<div class="cv__item cv__skills">
							<div class="cv__title">
								<Appear :delay="200" :transition="['100px', 0]" >
									<span>S K I L L S</span>
								</Appear>
							</div>
							<div class="cv__content">
								ASP.NET, Javascript, Vuejs, SCSS,..
							</div>
						</div>
						<div class="cv__item cv__education">
							<div class="cv__title">
								<Appear :delay="200" :transition="['100px', 0]" >
									<span>E d u c a t i o n</span>
								</Appear>
							</div>
							<div class="cv__content">
								<ul class="">
									<li>
										<span class="fw-b">Education</span>
										<ul class="inside">
											<li>2015 - 2020: Danang University of Science and Technology</li>
										</ul>
									</li>
									<li class="pt-10">
										<span class="fw-b">Certificate</span>
										<ul class="inside">
											<li>8/2022: Japanese-Language Proficiency Test N2 Certificate</li>
										</ul>
									</li>
								</ul>
								
							</div>
						</div>
					</div>
				</div>
		</div>
	</div>
</template>

<script setup>
	import Appear from '../components/Appear.vue';
</script>

<script>
	export default {
		data(){
			return {
				en: this.$store.state.data.en,
      		}
		},

		mounted() {
			console.log(this.$store.state.data.en.name)
		},

		methods: {
			beforeEnter(e) {
				e.style.opacity = 0;
			},
			enter(e) {
				e.style.transition = 'opacity 500ms ease-in-out';
				
				getComputedStyle(e);
				
				setTimeout(() => {
					e.style.opacity = 1;
				});
				
			},
			addSpace(str) {
				let temp = str.replaceAll("", "\xa0")
				return temp.split(' ').join(' ');
			}
		},
	}
	
</script>


