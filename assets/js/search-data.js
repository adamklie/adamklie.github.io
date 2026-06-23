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
          description: "Co-Founder &amp; Head of Technology at Gaius Therapeutics; computational biologist and ML researcher (PhD, UC San Diego); former professional basketball player.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-basketball",
          title: "basketball",
          description: "A decade in the game — UC San Diego, professional ball in Canada and Germany, and coaching.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/basketball/";
          },
        },{id: "nav-music",
          title: "music",
          description: "Guitar, songwriting, and collaboration of all kinds — solo, in a band, and in the studio.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/music/";
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
      },{id: "news-eugene-is-out-in-nature-computational-science-a-python-toolkit-for-deep-learning-analyses-of-regulatory-sequences",
          title: 'EUGENe is out in Nature Computational Science — a Python toolkit for deep...',
          description: "",
          section: "News",},{id: "news-co-authored-paper-in-developmental-cell-showing-how-single-nucleotide-variants-within-heart-enhancers-can-disrupt-development-by-tuning-tf-binding-affinity",
          title: 'Co-authored paper in Developmental Cell showing how single-nucleotide variants within heart enhancers can...',
          description: "",
          section: "News",},{id: "news-new-paper-out-in-nature-communications-on-pre-operative-stereotactic-radiosurgery-for-resectable-brain-metastases",
          title: 'New paper out in Nature Communications on pre-operative stereotactic radiosurgery for resectable brain...',
          description: "",
          section: "News",},{id: "news-defended-my-phd-in-the-bioinformatics-and-systems-biology-program-at-ucsd",
          title: 'Defended my PhD in the Bioinformatics and Systems Biology program at UCSD. 🎓...',
          description: "",
          section: "News",},{id: "news-started-as-a-schmidt-ai-postdoctoral-fellow-at-uc-san-diego",
          title: 'Started as a Schmidt AI Postdoctoral Fellow at UC San Diego. 🎉',
          description: "",
          section: "News",},{id: "news-co-founded-gaius-therapeutics-where-i-m-head-of-technology-taking-the-science-from-my-phd-and-postdoc-out-of-the-lab-and-into-a-company",
          title: 'Co-founded Gaius Therapeutics, where I’m Head of Technology — taking the science from...',
          description: "",
          section: "News",},{id: "projects-eugene",
          title: 'EUGENe',
          description: "Deep learning for regulatory genomics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/eugene/";
            },},{id: "projects-greenroom",
          title: 'Greenroom',
          description: "A music career manager for aspiring musicians",
          section: "Projects",handler: () => {
              window.location.href = "/projects/greenroom/";
            },},{id: "projects-tf-perturb-seq",
          title: 'TF Perturb-seq',
          description: "Mapping transcription factor regulation across human biosystems (IGVF)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tf_perturb_seq/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%64%61%6D@%67%61%69%75%73.%62%69%6F", "_blank");
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
          window.open("https://scholar.google.com/citations?user=kR9GSLMAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/adamklie", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/adamklie", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7600-3086", "_blank");
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
