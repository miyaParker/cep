export const navbarItems = {
    main: [
        {name: 'about', link: '/about'},
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
                }
            ]
        },
        {name: 'certificate portal', link: '/certificate-portal'}
    ]
};
export const partnerEmailTemplate =(data:{ fullName: string, organization: string, proposal: string, email: string })=>
    `<html>
                    <style>
                        .container{
                        width: 100%;
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #FFF;
                        color: #333438;
                        font-size: 20px;
                        padding: 48px 24px;
                        }
                        .salutation, .message{
                            margin-bottom: 24px;
                        }
                    </style>
                    <body>
                        <div class="container">
                            <p class='salutation'>Hello Admin,</p>
                            <h2>New artner Application</h2>
                            <p>Full Name: ${data.fullName}</p>
                           <p class='message'>Organization: ${data.organization}</p>
                            <p class='message'>Proposal:${data.proposal}</p>
                            <p>Regards</p>
                        </div>
                    </body>
                    </html>`



export const feedbackEmailTemplate =(data:{email:string, message:string})=>
    `<html>
                    <style>
                        .container{
                        width: 100%;
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #FFF;
                        color: #333438;
                        font-size: 20px;
                        padding: 48px 24px;
                        }
                        .salutation, .message{
                            margin-bottom: 24px;
                        }
                    </style>
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
