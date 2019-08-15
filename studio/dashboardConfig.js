export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d55748df1a49291205deb7d',
                  title: 'Sanity Studio',
                  name: 'abonventre-sanity-gatsby-portfolio-studio',
                  apiId: '82132068-f200-49cc-81ed-4adb89be9995'
                },
                {
                  buildHookId: '5d55748d1fa6227c1c641250',
                  title: 'Portfolio Website',
                  name: 'abonventre-sanity-gatsby-portfolio',
                  apiId: 'ec948e96-15a2-42d8-821f-22bc4ea3c1f2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/abonventre/abonventre-sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://abonventre-sanity-gatsby-portfolio.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
