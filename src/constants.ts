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
