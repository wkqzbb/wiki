import {MultiColumnFooter,SimpleFooter} from '@docusaurus/theme-common';
const footer: MultiColumnFooter| SimpleFooter = {
    style: 'dark',
    links: [
        // {
        //     title: 'Docs',
        //     items: [
        //         {
        //             label: 'Tutorial',
        //             to: '/docs/intro',
        //         },
        //     ],
        // },
        // {
        //     title: 'Community',
        //     items: [
        //         {
        //             label: 'Stack Overflow',
        //             href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //         },
        //         {
        //             label: 'Discord',
        //             href: 'https://discordapp.com/invite/docusaurus',
        //         },
        //         {
        //             label: 'Twitter',
        //             href: 'https://twitter.com/docusaurus',
        //         },
        //     ],
        // },
        // {
        //     title: 'More',
        //     items: [
        //         {
        //             label: 'Blog',
        //             to: '/blog',
        //         },
        //         {
        //             label: 'GitHub',
        //             href: 'https://github.com/facebook/docusaurus',
        //         },
        //     ],
        // },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} site.wkq.pub 陇ICP备2021003596号.`,
}
export default footer;
