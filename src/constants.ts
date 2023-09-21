export const navItems = [
    {name: 'about', link: '/about', path: '/about'},
    {name: 'projects', link: '/projects'},
    {name: 'news & updates', link: '/news-and-updates'},
    {
        name: 'get involved', children: [
            {
                name: 'Become a Partner',
                link: '/get-involved/become-a-partner-at-relearn',
                icon: '/partner-icon.svg'
            },
            {
                name: "Educator's Network",
                link: '/get-involved/educators-network',
                icon: '/educator-icon.svg'
            },
            {
                name: "Edtech Festival",
                link: 'https://edtechfestival.relearn.ng/',
                icon: '/edtech.svg',
                target:'_blank'
            }
        ]
    },
    {name: 'certificate portal', link: '/certificate-portal'}
];
export const mobileNavItems = [
    {name: 'about', link: '/about', path: '/about'},
    {name: 'projects', link: '/projects'},
    {name: 'news & updates', link: '/news-and-updates'},
    {name: 'Become a Partner', link: '/get-involved/become-a-partner-at-relearn'},
    {name: "Educator's Network", link: '/get-involved/educators-network'},
    {name: 'certificate portal', link: '/certificate-portal'}
];
export const faqs = [{
    q: 'How do I become part of the network?',
    a: 'To get started, fill out the online application form, here. The Educators’ Network is currently open to residents'
}, {
    q: 'Do I need to know how to code?',
    a: 'No. If you have a passion for education and are comfortable using a computer then you have enough to get started.'
},
    {
        q: 'What is STEM?',
        a: 'STEM stands for Science, Technology, Engineering and Mathematics. Our goal is to enhance te delivery of STEM lessons in schools across Nigeria.'
    }, {
        q: 'Do I need to have an education background?',
        a: 'No, classroom experience is not a requirement. The Educators’ Network is open to people from different backgrounds.'
    }, {
        q: 'What will I teach?',
        a: 'Educators are provided with content and extensive training on delivering the content in the classroom.'
    }, {
        q: 'Is this a full time role?',
        a: 'Yes. Being an Educator is a full time role that comes with a monthly and lots of benefits.'
    }]
export const partnerEmailTemplate = (data: { fullName: string, organization: string, proposal: string, email: string }) =>
    `<html>
                    <body>
                        <div class="container">
                            <p class='salutation'>Hello Admin,</p>
                            <h2>New Partner Application</h2>
                            <p>Full Name: ${data.fullName}</p>
                           <p class='message'>Organization: ${data.organization}</p>
                            <p class='message'>Proposal:${data.proposal}</p>
                            <p>Regards</p>
                        </div>
                    </body>
                    </html>`


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
                    </html>`
