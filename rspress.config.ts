import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'HAUST计算机类学生技能引导文档',
  base: "/", //If use GitHub Pages, set base to '/repo-name/', such as '/ceasso-skill-docs/'
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    lastUpdated: true,
    lastUpdatedText: '最后更新时间',
    enableContentAnimation: true, // Enable content animation on page load
    enableAppearanceAnimation: true, // Enable appearance animation on days/nights toggle
    hideNavbar: 'auto', // Always hide the navbar, can be 'always', 'mobile', or 'never'
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
    prevPageText: '上一页',
    nextPageText: '下一页',
  },
});
