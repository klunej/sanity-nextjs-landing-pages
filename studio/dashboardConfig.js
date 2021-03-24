export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '605bba55638ada00b946245d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jw3nuabt',
                  apiId: '497074f8-9a90-448d-8ed9-077e64c44ef2'
                },
                {
                  buildHookId: '605bba5636a44a00a44ced0a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-a1fd2xuj',
                  apiId: '72d05b35-7042-4e46-8350-dd713a2556e2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/klunej/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-a1fd2xuj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
