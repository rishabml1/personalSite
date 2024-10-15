export default {
    singleProjectHeader: {
        singleProjectTitle: 'HelpBook',
        singleProjectDate: 'jan 31,2024',
        singleProjectTag: 'UI / Frontend / AI / Visualization',
    },
    projectImages: [
        {
            id: 1,
            title: 'HelpBook a recommendation system for taxi booking',
            img: require('@/assets/images/recsys1.png'),
        },
        {
            id: 2,
            title: 'HelpBook a recommendation system for taxi booking',
            img: require('@/assets/images/recsys2.png'),
        },
        {
            id: 3,
            title: 'HelpBook a recommendation system for taxi booking',
            img: require('@/assets/images/recsys3.png'),
        },
    ],
    projectInfo: {
        clientHeading: 'Project Flow',
        companyInfos: [
            {
                id: 1,
                title: 'Data Ingestion',
                details: 'SQL Server',
            },
            {
                id: 2,
                title: 'EDA',
                details: 'Seaborn, Missingno, Sklearn',
            },
            {
                id: 3,
                title: 'Map Visuals',
                details: 'Folium , Geopandas, Shapely, Pyrosm, Leafly',
            },
            {
                id: 4,
                title: 'Paths and Routes',
                details: 'osmnx',
            },
            {
                id: 5,
                title: 'Recommendor System',
                details: 'LibRecommender , Deepctr-torch',
            },
        ],
        objectivesHeading: 'Objective',
        objectivesDetails:
            'Using historical booking data from various sources, recommend taxi/chauffeur to user while considering proximity and time constraints',
        technologies: [
            {
                title: 'Tools & Technologies',
                techs: [
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'Vue.js',
                    'Flask',
                ],
            },
        ],
        projectDetailsHeading: 'Challenge',
        projectDetails: [
            {
                id: 1,
                details:
                    'One of the key challenges faced while building the taxi booking recommendation model was effectively modeling the dataset for training and generating insightful outputs. A significant hurdle was creating a reliable rating feature, since explicit user ratings weren’t available. To address this, various implicit signals such as trip frequency,  time taken, and whether a user rebooked with the same driver were used.',
            },
            {
                id: 2,
                details:
                    'These factors were combined to form a composite rating, which was then normalized to fit a standard range (e.g., 1-5) for consistent processing by the model',
            },
            {
                id: 3,
                details:
                    ' Feature selection was another critical aspect, where geospatial data like pick-up/drop-off locations and user behavior patterns such as previous bookings and ride preferences were leveraged. Additionally, ride-specific features like fare, wait time, and environmental factors such as weather and traffic conditions were incorporated.',
            },
            {
                id: 4,
                details:
                    'We tried various like Wide & Deep model , xDeepFM and lightGCN , models capable of automatically capturing complex feature interactions, such as those between weather and ride duration, without manual intervention. This helped mitigate bias and improved performance. ',
            },
            {
                id: 5,
                details:
                    'Lastly, the recommendation system was evaluated using metrics like RMSE for rating prediction, precision and recall for recommendation accuracy, and customer retention as a business-oriented outcome, ensuring a balanced approach between data insights and practical results.',
                img: require('@/assets/images/recsys arch2.svg'),

            },
        ],
        socialSharingsHeading: 'Share This',
        socialSharings: [
            {
                id: 1,
                name: 'Twitter',
                icon: 'twitter',
                url: 'https: //twitter.com/',
            },
            {
                id: 2,
                name: 'Instagram',
                icon: 'instagram',
                url: 'https: //instagram.com/',
            },
            {
                id: 3,
                name: 'Facebook',
                icon: 'facebook',
                url: 'https: //facebook.com/',
            },
            {
                id: 4,
                name: 'LinkedIn',
                icon: 'linkedin',
                url: 'https: //linkedin.com/',
            },
            {
                id: 5,
                name: 'Youtube',
                icon: 'youtube',
                url: 'https: //www.youtube.com/c/',
            },
        ],
    },
    relatedProject: {
        relatedProjectsHeading: 'Related Projects',
        relatedProjects: [
            {
                id: 1,
                title: 'Mobile UI',
                img: require('@/assets/images/mobile-project-1.jpg'),
            },
            {
                id: 2,
                title: 'Web Application',
                img: require('@/assets/images/web-project-1.jpg'),
            },
            {
                id: 3,
                title: 'UI Design',
                img: require('@/assets/images/ui-project-2.jpg'),
            },
            {
                id: 4,
                title: 'Kabul Mobile App UI',
                img: require('@/assets/images/mobile-project-2.jpg'),
            },
        ],
    },
};