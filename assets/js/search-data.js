// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-software",
          title: "software",
          description: "Open-source tools for computational biology and machine learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/software/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "A summary of my academic, professional, and athletic career.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-2025-the-road-goes-ever-on-and-on",
        
          title: "2025: The Road Goes Ever On and On",
        
        description: "New beginnings. Postdoc, company, and the long road ahead.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/the-road-goes-ever-on/";
          
        },
      },{id: "post-2024",
        
          title: "2024",
        
        description: "The final year of the PhD and the beginning of what comes next.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/2024/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-my-advice-for-a-type-a-phd-student",
        
          title: "My Advice for a Type-A PhD Student",
        
        description: "What I wish someone had told me going in. For the planners, the doers, the people who need to feel productive to feel okay.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advice-for-typea-phd-student/";
          
        },
      },{id: "post-2023-it-39-s-showtime",
        
          title: "2023: It&#39;s Showtime",
        
        description: "The year things started coming together — papers, talks, and the first real signs of a scientific identity.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/its-showtime/";
          
        },
      },{id: "post-haikus",
        
          title: "Haikus",
        
        description: "A collection of fully caffeinated haikus.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/haikus/";
          
        },
      },{id: "post-2022-i-like-to-learn-deeply",
        
          title: "2022: I Like to Learn Deeply",
        
        description: "Conferences, Alaska, and the rediscovery of what makes science worth doing.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/i-like-to-learn-deeply/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-my-favorite-quotes",
        
          title: "My Favorite Quotes",
        
        description: "A living collection of quotes I keep coming back to.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/my-favorite-quotes/";
          
        },
      },{id: "post-2021-does-organizing-my-notion-count-as-research",
        
          title: "2021: Does Organizing My Notion Count as Research?",
        
        description: "Year three of the PhD. Getting deeper into the work, finding a rhythm, and asking whether productivity theater is real work.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/does-organizing-notion-count-as-research/";
          
        },
      },{id: "post-2020-converting-learning-to-research",
        
          title: "2020: Converting Learning to Research",
        
        description: "The transition from student to researcher. COVID, a new lab, and figuring out what questions are worth asking.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/converting-learning-to-research/";
          
        },
      },{id: "post-2019-relearning-how-to-learn-fall-2019",
        
          title: "2019: Relearning How to Learn — Fall 2019",
        
        description: "First semester of the Bioinformatics PhD program. Bootcamp, cohort, and the rediscovery of being a student.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/relearning-how-to-learn/";
          
        },
      },{id: "post-the-deep-breath-before-the-plunge-spring-summer-2019",
        
          title: "The Deep Breath Before the Plunge: Spring–Summer 2019",
        
        description: "The transition from professional basketball to graduate school.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/deep-breath-before-the-plunge/";
          
        },
      },{id: "post-ich-bin-ein-rackelos-fall-2018-winter-2019",
        
          title: "Ich bin ein Rackelos? Fall 2018–Winter 2019",
        
        description: "Playing professional basketball in Germany with the Giessen 46ers.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/ich-bin-ein-rackelos/";
          
        },
      },{id: "post-what-39-s-a-river-lion-winter-2017-spring-2018",
        
          title: "What&#39;s a River Lion? Winter 2017–Spring 2018",
        
        description: "My first professional basketball season, playing in St. Catharines, Ontario, Canada.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/whats-a-river-lion/";
          
        },
      },{id: "post-ucsd-undergrad-2013-2017",
        
          title: "UCSD Undergrad: 2013–2017",
        
        description: "Leaving Alaska, finding a home in La Jolla, and four years as a student-athlete.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/ucsd-undergrad/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-eugene",
          title: 'EUGENe',
          description: "Deep learning for regulatory genomics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/eugene/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
