export const programmes = [
  "Virtual STEM Hub (VSH)",
  "Innovative Teachers Fellowship (ITF)",
  "Lagos East Teachers Fellowship",
  "Teachers Lounge"
];
export const projects = [
  {
    name: "Teachers' Lounge",
    img: "/teachers-lounge.jpg",
    details: {
      summary: ["A state-of-the-art community that offers teachers access to qualified trainers, teaching resources and devices, to support their professional growth and meet the needs of 21st century learners."],
      info: {
        title: "Our Objectives",
        keyPoints: ["To build a community of 21st century teachers",
          "To create a safe haven where teachers can work, network and unwind"]
      }
    },
    impact: [{
      location: "lagos",
      info: [{ number: 465, description: "Teachers" }, { number: 13950, description: "Students" }]
    }, {
      location: "kenya",
      info: [{ number: 99, description: "Teachers" }, { number: 2970, description: "Students" }]
    }],
    cta: { text: "Join the Teachers’ Lounge", link: "http://bit.ly/TEACHERSLOUNGE" }
  },
  {
    name: "Lagos State STEM Cells Project",
    img: "/stem.jpg",
    details: {
      summary: ["The role of Science, Technology, Engineering and Mathematics(STEM) education in bringing about national development and global competitiveness cannot be overemphasized.",
        "However, the current education system in Nigeria does not equip students with the skills required to bring about scientific discoveries that are capable of being translated into technological developments at the national and international levels.",
        "Characterized by low teacher quality, poor teaching methodology, outdated curriculum and abstract theories, there is a need to apply innovation to the teaching and learning of STEM education in Nigeria.",
        "The Lagos State Ministry of Education aims to bring about a change to the state of science and technology education in Lagos State through the project, Transforming STEM Education in Lagos."],
      info: {
        title: "The ProjectDetails aims to achieve the following:",
        keyPoints: ["The use of Digital Laboratories for teaching STEM Subjects in Lagos",
          "The transition from instructional method to inquiry-based learning as a more effective teaching methodology for STEM education",
          "Set up of a Community of Practice as a practical model for Continuing Professional Development (CPD) for teachers."],
        description: ["Designed to run for a year as a pilot project, twenty schools from the six education districts in the state were selected to participate in the project for one academic year.",
          "The project kicked off with a school assessment and selection phase followed by an orientation event for science teachers from selected schools."]
      }
    },
    impact: [{ number: 20, description: "Schools across 6 districts in Lagos state" }, {
      number: 118,
      description: "Teachers"
    }, { number: 5342, description: "Students" }]
  },
  {
    name: "Safe Online with Meta",
    link: "/projects/safe-online-with-meta",
    img: "/safe-online.jpg"
  },
  {
    name: "CcHUB / ACT Foundation Edtech Fellowship",
    img: "/edtech.jpg",
    details: {
      summary: ["In partnership with the ACT Foundation, we organised The EdTech Fellowship were we empowered 41 fellows with the knowledge and skills required to become Instructional Designers and build a career in the EdTech space",
        "The key result from the fellowship is the creation of 6 digital EdTech Prototypes from 21 fellows across Nairobi, Lagos and Ijebu"],
      info: {
        title: "In its first two years,",
        description: ["The programme successfully trained over 11,000 students in 200 schools across 10 cities across Nigeria. In 2020, the programme has successfully virtually trained over 5000 internet users in Nigeria despite the restrictions from COVID-19."]
      }
    },
    impact: [{ number: 6, description: "EDtech Prototypes" }, {
      number: 21,
      description: "Instructional Designers"
    }, { number: 27, description: "Teachers Trained" }]
  },
  {
    name: "Lagos East Teachers’s Fellowship (LETF)",
    img: "/letf.jpg",
    details: {
      summary: ["The Lagos East Teachers’ Fellowship is a pipeline for continuing professional development training for teachers across the five local governments in Lagos East Senatorial District.",
        "The Fellowship is being organized by the Tokunbo Abiru Campaign Team (TACT) of Senator Abiru Innovation Lab (SAIL) in partnership with re:learn the Education practice at Co-creation Hub."],
      info: {
        title: "The aim of this project is to -",
        description: ["The programme has grown from its initial 3 pilot countries with over 600 teachers developing and using Inquiry Learning Spaces to training and providing support to STEM teachers in Uganda, Ghana, Zambia and Senegal."]
      }
    },
    impact: [{ number: 1000, description: "Teachers Trained" }, {
      number: 5000,
      description: "Students"
    }]
  },
  {
    name: "GO-GA",
    img: "/goga.jpg",
    details: {
      summary: ["The GO-GA project is a European Union-funded project which seeks to accelerate the adoption of richer learning environments and learning outcomes for STEM in Africa.",

        "This programme consists of 8 consortium members from 8 countries that conducted large scale onboarding of teachers in 3 initial pilot countries- Nigeria, Kenya and Benin republic – upskilling them to use Inquiry Based Methods of Teaching as well as using the Go-Lab Ecosystem to design inquiry learning spaces for teaching STEM."],
      info: {
        title: "Spanning 3 years,",
        description: ["Empower teachers with the skills necessary to leverage technology and innovative teaching and learning models to transform education across Secondary Schools in the Senatorial District.", "Outcomes from this partnership will strategically position the TACT Team to deliver one of the Senator’s initiatives to drive youth empowerment in the District while also contributing to the vision of a Greater Lagos."]
      }
    },
    impact: [{ number: 359, description: "Teachers in Lagos state trained" }, {
      number: 57,
      description: "Champions of inquiry based learning"
    }]
  },
  {
    name: "Innovative Teachers’ Fellowship",
    img: "/itf.jpg",
    details: {
      summary: ["TThis fellowship was a 6 week training program designed to empower STEM and Non-STEM teachers across Nigeria. The training focused on leveraging technology to deliver 21st century learning, content creation, lesson delivery & assessments.",

        "This programme consists of 8 consortium members from 8 countries that conducted large scale onboarding of teachers in 3 initial pilot countries- Nigeria, Kenya and Benin republic – upskilling them to use Inquiry Based Methods of Teaching as well as using the Go-Lab Ecosystem to design inquiry learning spaces for teaching STEM."]
    },
    impact: [{ number: 7500, description: "Students" }, {
      number: 250,
      description: "Teachers"
    }]
  },
  {
    name: "STEM Extra",
    img: "/mcarthur.jpg",
    details: {
      summary: ["Funded by the Mac-Arthur Foundation in Nigeria, this project ran as a pilot in 3 Nigerian states (Lagos, Jigawa and Kano) with 20 schools and over 800 students in SS1. We designed digital labs that mirrored the curriculum for physics, chemistry, and biology and trained the teachers to tutor their students using the digital labs as opposed to traditional methods.",

        "At the end of the project, majority of the students demonstrated better understanding and retention of modules that were taught using the digital labs."],
      info: {
        title: "Spanning 3 years,",
        description: ["Empower teachers with the skills necessary to leverage technology and innovative teaching and learning models to transform education across Secondary Schools in the Senatorial District.", "Outcomes from this partnership will strategically position the TACT Team to deliver one of the Senator’s initiatives to drive youth empowerment in the District while also contributing to the vision of a Greater Lagos."]
      }
    },
    impact: [{ number: 830, description: "Students (60% Female)" }, {
      number: 20,
      description: "Teachers"
    }, { number: 4, description: "States" }, {
      project: "Educators’ Network",
      info: [{ number: 37, description: "Educators Trained" }, {
        number: 68,
        description: "Training Hours"
      }, { number: 3, description: "Key Community Engagement Activities" }]
    }, {
      project: "STEM Club",
      info: [{ number: 39, description: "Hours of Content Created" }, {
        number: 23,
        description: "PHYSICS"
      }, { number: 13, description: "Chemistry" }, { number: 3, description: "BIOLOGY" }, {
        number: 2,
        description: "PILOT TEST Sessions Held"
      }, { number: 45, description: "EDUCator Content Peer Review" }]
    }, {
      project: "Multi-stakeholder Network",
      info: [{ number: 2, description: "SUMMITS HELD" }, {
        number: 90,
        description: "MEMBERS"
      }]
    }]
  }, {
    name: "Virtual STEM Hub",
    img: "/stem-club.jpg",
    details: {
      summary: ["Designed as a COVID-19 intervention to provide a learning and support platform for STEM teachers in Nigeria and Kenya during the shut down of schools as a result of the pandemic.",
        "The training sessions held on WhatsApp, recorded over 500 teachers in its 2 cohorts that took place during the lockdown."]
    },
    impact: [{ number: 465, description: "Teachers in Nigeria" }, {
      number: 99,
      description: "Teachers in Kenya"
    }]
  },
  {
    name: "NextGen Teachers Fellowship",
    img: "/nextgen.svg",
    details: {
      summary: ["The NextGen Teachers Fellowship was designed to provide a learning and support platform for pre-service teachers in Kenya and Nigeria during COVID 19 shut down of schools."]
    },
    impact: [{ number: 50, description: "Fellows in Nigeria" }, {
      number: 49,
      description: "Fellows in Kenya"
    }]
  },
  {
    name: "Summer of Code",
    img: "/soc.svg",
    details: {
      summary: ["Summer of Code was a 4 week long holiday programme that taught kids aged 5-18 computer science and programming, in fun and interactive ways.",

        "Kids learnt to design their own games, interactive stories, animations, web pages, and computer applications."]
    },
    impact: [{ number: 1600, description: "Students" }, {
      number: 5,
      description: "States - Lagos, Abuja, Oyo, Imo, KWARA"
    }]
  }
];
export const years = [2020, 2021, 2022];
export const articles = [
  {
    name: "Teachers’ Day celebration: Teachers’" +
      "Lounge",
    img: "/news-latest.jpg",
    category: "Events",
    datePublished: "3 hours ago",
    description: "We trained 21 fellows in Lagos and Kenya in the application of technology for teaching, learning and education management."
  },
  {
    name: "EdTech Festival 2021",
    img: "/sample1.jpg",
    category: "Events",
    datePublished: "2 days ago",
    description: "A STEM exploration festival organized to" +
      "provoke children’s interest in science ..."

  }, {
    name: "Introducing Viable",
    img: "/sample2.jpg",
    category: "Community",
    datePublished: "2 weeks ago",
    description: "Viable is the first community for EdTech" +
      "product designers, developers ..."

  }, {
    name: "Safe Online by Meta",
    img: "/sample3.jpg",
    category: "Programme Update",
    datePublished: "November 11, 2022",
    description: "The Safe online programme is designed" +
      "to introduce teenagers to digital ..."

  }];
