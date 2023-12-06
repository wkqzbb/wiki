import { Navbar } from  '@docusaurus/theme-common'
const navbar: Navbar = {
    hideOnScroll: true,
    title: 'wiki',
    logo: {
        alt: 'wiki Logo',
        src: 'img/logo.png',
        width: 32,
        height: 32
    },
    items: [
        {
            type: 'docSidebar',
            sidebarId: 'algorithm',
            position: 'left',
            label: '算法',
        },
        {
            type: 'docSidebar',
            sidebarId: 'java',
            position: 'left',
            label: 'Java',
        },
        {
            type: 'docSidebar',
            sidebarId: 'objectOriented',
            position: 'left',
            label: '面向对象',
        },
        {
            type: 'docSidebar',
            sidebarId: 'spring',
            position: 'left',
            label: 'Spring',
        },
        {
            type: 'localeDropdown',
            position: 'right',
        },
        {to: '/blog', label: '博客', position: 'right'},
        {
            href: 'https://github.com/wkqzbb',
            label: 'GitHub',
            position: 'right',
        },
    ],
}
export default navbar