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
          skills: "ASP.NET, SQL Server, Javascript, Vuejs, SCSS",
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
          experience: {
              position: "Software Engineer",
              company: "Nihon System",
              date: "March 2022 - Current",
              location: "Japan",
              content: "<p class='pt-10'>This is a company specializing in providing technology solutions to solve user problems with web app products. At the same time, the company also creates its own products.</p><ul><li>Maintenance and adding new features to the available web app are requested from customers</li><li>I was responsible for designing the user interface using Adobe XD, and collaborating with experienced people to ensure clear and effective design,developing new pages, ensuring perfect pixel accuracy.</li><li>I also developed a web app for the project using Vuejs.</li></ul>",
              technology: "ASP.NET MVC, Vuejs, JavaScript, Knockoutjs, SQLserver, HTML, SCSS, CSS"
            }
          
        },
        ja: {
          name: 'ホ・ティ・トゥ・ヒエン',
          job: 'Web/UI開発者',
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
          description: "私は ホ・ティ・トゥ・ヒエンです。Web 開発で 2 年の経験を持つソフトウェア開発者です。C#、SCSS、JavaScript、Vue を使用して Web サイトを作成し、ユーザーフレンドリーなインターフェイスを作成することを専門としています。",
          skills: "ASP.NET, Javascript, Vuejs, SCSS",
          educations: {
            educations: [
              {
                date: "2015 - 2020",
                text: "ダナン工科大学"
              }
            ],
            certificates: [
              {
                date: "8/2022",
                text: "日本語能力試験N2"
              },
            ]
          },
          experience: {
              position: "ソフトウェアエンジニア",
              company: "日本システム",
              date: "2022年3月 - 現在",
              location: "日本",
              content: "これは、Web アプリ製品でユーザーの問題を解決するテクノロジー ソリューションを提供することに特化した会社です。同時に、同社は独自の製品も作成しています。</p><ul><li>利用可能な Web アプリのメンテナンスと新機能の追加は、顧客から要求されます</li><li>Adobe XD を使用してユーザー インターフェイスを設計し、経験豊富な人々と協力して明確で効果的なデザインを確保し、新しいページを開発し、完璧なピクセル精度を確保することを担当しました。</li><li>また、Vuejs を使用してプロジェクト用の Web アプリを開発しました。</li></ul>",
              technology: "ASP.NET MVC, Vuejs, JavaScript, Knockoutjs, SQLserver HTML, SCSS, CSS"
            }
        },

        en_base: {
          name: 'H I E N  H O',
          job: 'Web/UI Developer',
          contacts: [
            {
              text: "",
              link: "mailto:"
            },
            {
              text: "",
              link: "mailto:"
            }
          ],
          description: "I'm Hien (my nickname is Teo), a software developer with 2 years of experience in web development. I specialize in creating a website and creating user-friendly interfaces using C#, SCSS, JavaScript, and Vue.<br><br>I am Vietnamese but currently I live in Japan. I'm trying to find new fun things, and especially looking for more friends. Nice to meet you ^o^<br><br><small style='font-size: 14px'><a style='text-decoration: underline;color: cadetblue;'>This is basic information that can be made public. Please contact me if you want my detailed CV. uwu</a></small>",
          skills: "ASP.NET, SQL Server, Javascript, Vuejs, SCSS",
          educations: {
            educations: [
              {
                date: "",
                text: "Danang University of Science and Technology"
              }
            ],
            certificates: [
              {
                date: "",
                text: "Japanese Upper-intermediate"
              },
            ]
          },
          experience: {
              position: "Software Engineer",
              company: "Nihon System",
              date: "Current",
              location: "Japan",
              content: "<p class='pt-10'>Working for a company specializing in providing technology solutions to solve user problems with web app products. At the same time, the company also creates its own products.</p><p>We create web app products, winforms applications that provide tools to meet customer needs such as in the logistics industry, order management, invoices...</p>",
              technology: "ASP.NET MVC, Vuejs, JavaScript, Knockoutjs, SQLserver, HTML, SCSS, CSS"
            }
          
        },
        ja_base: {
          name: 'ヒエン・ホ',
          job: 'Web/UI開発者',
          contacts: [
            {
              text: "",
              link: "mailto:"
            },
            {
              text: "",
              link: "mailto:"
            }
          ],
          description: "私は Hien (ニックネームは Teo) です。Web 開発の経験が 2 年あるソフトウェア開発者です。C#、SCSS、JavaScript、Vue を使用して Web サイトの作成とユーザー フレンドリーなインターフェイスの作成を専門としています。<br><br>私はベトナム人ですが、現在は日本に住んでいます。新しい楽しいことを探していて、特にもっと友達を探しています。はじめまして ^o^<br><br><small style='font-size: 14px'><a style='text-decoration: underline;color: cadetblue;'>これは公開できる基本情報です。詳細な履歴書が必要な場合はご連絡ください。uwu</a></small>",
          skills: "ASP.NET, SQL Server, Javascript, Vuejs, SCSS",
          educations: {
            educations: [
              {
                date: "",
                text: "ダナン工科大学"
              }
            ],
            certificates: [
              {
                date: "",
                text: "日本語中上級"
              },
            ]
          },
          experience: {
              position: "ソフトウェアエンジニア",
              company: "日本システム",
              date: "現在",
              location: "日本",
              content: "<p class='pt-10'>Web アプリ製品でユーザーの問題を解決するテクノロジー ソリューションの提供を専門とする会社で働いています。同時に、この会社は独自の製品も作成しています。</p><p>私たちは、物流業界、注文管理、請求書などの顧客のニーズを満たすツールを提供する Web アプリ製品、WinForms アプリケーションを作成します...</p>",
              technology: "ASP.NET MVC, Vuejs, JavaScript, Knockoutjs, SQLserver, HTML, SCSS, CSS"
            }
        },
      },

      selectedLanguage: 'en' // Ngôn ngữ mặc định
    },

    mutations: {
      setLanguage(state, language) {
        state.selectedLanguage = language;
      }
    },

    actions: {
      updateLanguage({ commit }, language) {
        commit('setLanguage', language);
      }
    },

    getters: {
      getSelectedLanguage: (state) => state.selectedLanguage
    }
  })

  export default store