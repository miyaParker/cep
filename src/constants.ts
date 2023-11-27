export const navItems = [
  { name: "about", link: "/about", path: "/about" },
  { name: "projects", link: "/projects" },
  { name: "news & updates", link: "/news-and-updates" },
  {
    name: "get involved", children: [
      {
        name: "Become a Partner",
        link: "/get-involved/become-a-partner-at-relearn",
        icon: "/partner-icon.svg"
      },
      {
        name: "Educator's Network",
        link: "/get-involved/educators-network",
        icon: "/educator-icon.svg"
      },
      {
        name: "Edtech Festival",
        link: "https://edtechfestival.relearn.ng/",
        icon: "/edtech.svg",
        target: "_blank"
      }
    ]
  },
  { name: "certificate portal", link: "/certificate-portal" }
];
export const mobileNavItems = [
  { name: "about", link: "/about", path: "/about" },
  { name: "projects", link: "/projects" },
  { name: "news & updates", link: "/news-and-updates" },
  { name: "Become a Partner", link: "/get-involved/become-a-partner-at-relearn" },
  { name: "Educator's Network", link: "/get-involved/educators-network" },
  { name: "certificate portal", link: "/certificate-portal" }
];
export const faqs = [{
  q: "How do I become part of the network?",
  a: "To get started, fill out the online application form, here. The Educators’ Network is currently open to residents"
}, {
  q: "Do I need to know how to code?",
  a: "No. If you have a passion for education and are comfortable using a computer then you have enough to get started."
},
  {
    q: "What is STEM?",
    a: "STEM stands for Science, Technology, Engineering and Mathematics. Our goal is to enhance te delivery of STEM lessons in schools across Nigeria."
  }, {
    q: "Do I need to have an education background?",
    a: "No, classroom experience is not a requirement. The Educators’ Network is open to people from different backgrounds."
  }, {
    q: "What will I teach?",
    a: "Educators are provided with content and extensive training on delivering the content in the classroom."
  }, {
    q: "Is this a full time role?",
    a: "Yes. Being an Educator is a full time role that comes with a monthly and lots of benefits."
  }];

export const programs = [
  {
    title: "Digital Literacy Workshops",
    description: "are instructor-led training on digital literacy and online safety for organisations represented in the Digital Literacy community. This is an avenue to disseminate new knowledge that can advance Digital Literacy and Online Safety adoption in Nigeria by increasing awareness among important stakeholders and reducing entry barriers to the adoption of digital literacy and online safety training in organisations and communities across the country.",
    styles: "max-w-[127px]"
  },
  {
    title: "Training the Trainers Program",
    description: "is designed to provide digital literacy and online safety training to trainers and/or facilitators of the various organisations represented in the Digital Literacy Community of Practice. Trainers will be taken through the training curriculum which will focus on the digital skills needs of various demography of citizens and will feature case/ scenario-based co-creation sessions and fireside chats on online security trends in the country.",
    styles: "max-w-[175px]"
  },
  {
    title: "Digital Literacy Pop-ups",
    description: "will take place in three major cities across Nigeria. The pop-ups will host online safety booths for online safety organisations, EdTech organisations, school leaders, teachers and learners. The pop-ups will feature online safety learning games and My Digital World Learnathons for various levels of pre-registered participants.",
    styles: "max-w-[170px]"
  },
  {
    title: "Safe Online 101 for Students",
    description: "Safe Online 101 are hybrid learning session on digital literacy and online safety curated for learners and is facilitated by Educators. Teachers who have taken part in the School Leaders' and Teachers' sessions.",
    styles: "max-w-[156px]"
  },
  {
    title: "Safe Online Campus Ambassadors Program",
    description: "This component focuses on appointing university undergraduates as campus ambassadors who will be trained in the Safe Online content for Youths.  Campus Ambassadors go on to organise digital literacy and online safety training for other undergraduates and members of their university community.",
    styles: "max-w-[195px]"
  },
  {
    title: "Safe Online Fest",
    description: "The Safe Online Fest is a closeout event for the annual campaign. It captures insights of learners from schools that participated in the campaign either through the community or external training. Learners curate and send in their Big Ideas on ways to help young people navigate digital platforms safely and responsibly in various formats including; dramas, poems, jingles, artworks, animated stories, comics, games etc. The ideas are hosted online and made available for guests to view and vote for the best entries. The top three(3) schools with the highest number of votes are rewarded with prizes.",
    styles: "max-w-[99px]"
  },
  {
    title: "Digital Literacy Stakeholder Forum",
    description: "this would be organised in a hybrid format and will be an opportunity for community members to co-reflect on the year’s impact report as well as identify important strategies required to advance the adoption of Digital Literacy and online safety in Nigeria.",
    styles: "max-w-[162px]"
  }
];

export const partnerEmailTemplate = (data: { fullName: string, organization: string, proposal: string, email: string }) =>
  `<html>
                    <body>
                        <div class="container">
                            <p class="salutation">Hello Admin,</p>
                            <h2>New Partner Application</h2>
                            <p>Full Name: ${data.fullName}</p>
                           <p class="message">Organization: ${data.organization}</p>
                            <p class="message">Proposal:${data.proposal}</p>
                            <p>Regards</p>
                        </div>
                    </body>
                    </html>`;


export const feedbackEmailTemplate = (data: { email: string, message: string }) =>
  `<html>
                    <body>
                        <div class="container">
                            <p class='salutation'>Hello Admin,</p>
                            <p>You have a new feedback from ${data.email}</p>
                            <span><strong>Message: </strong></span>
                            <p class='message'>${data.message}</p>
                            <p>Regards</p>
                        </div>
                    </body>
                    </html>`;
