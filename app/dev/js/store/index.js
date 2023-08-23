import { createStore } from 'vuex';

const store = createStore({
    state: {
			data: {
        en: {
          name: 'Ho Thi Thu Hien',
          job: 'Web/UI Developer',
          contacts: [
            {
              text: "thuhienho11@gmail.com",
              link: "mailto:thuhienho11@gmail.com"
            },
            {
              text: "https://github.com/teohiho",
              link: "mailto:thuhienho11@gmail.com"
            }
          ],
          description: "I'm Ho Thi Thu Hien, a software developer with 2 years of experience in web development. I specialize in creating a website and creating user-friendly interfaces using C#, SCSS, JavaScript, and Vue.",
          skills: "ASP.NET, Javascript, Vuejs, SCSS",
          educations: {
            educations: [
              {
                date: "2015 - 2020",
                text: "Danang University of Science and Technology"
              }
            ],
            certificates: [
              {
                date: "8/2022",
                text: "Japanese-Language Proficiency Test N2 Certificate"
              },
            ]
          },
          experience: [
            {
              position: "Software Engineer",
              company: "Nihon System",
              date: "March 2022 - Current",
              location: "Japan",
              content: "<p class='pt-10'>This is a company specializing in providing technology solutions to solve user problems with web app products. At the same time, the company also creates its own products.</p><ul><li>Maintenance and adding new features to the available web app are requested from customers</li><li>I was responsible for designing the user interface using Adobe XD, and collaborating with experienced people to ensure clear and effective design,developing new pages, ensuring perfect pixel accuracy.</li><li>I also developed a web app for the project using Vuejs.</li></ul>",
              technology: "ASP.NET MVC, Vuejs, JavaScript, Knockoutjs, HTML, SCSS, CSS"
            }
          ]
        }
      }
    },

    mutations: {
      
    }
  })

  export default store