export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d111ca613ee960175fbdab3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jv18bmm7',
                  apiId: '0d12e0ea-6f41-4e98-9c1c-b3050729f951'
                },
                {
                  buildHookId: '5d111ca6f2718e01787083bb',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-q1werhci',
                  apiId: '56970020-4cf9-419b-9fbc-53f9503f5c40'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/trevortrevdc/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-q1werhci.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
