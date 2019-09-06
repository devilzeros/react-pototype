import React from 'react';


const HomePage = React.lazy(() => import('../pages/Home'));
const HomeDetail = React.lazy(() => import('../pages/Home/detail'));

// const AboutPage = React.lazy(() => import('./views/AboutPage'));
// const BlogsPage = React.lazy(() => import('./views/BlogsPage'));
// const ContactPage = React.lazy(() => import('./views/ContactPage'));
// const EventsPage = React.lazy(() => import('./views/EventsPage'));
// const MarketPage = React.lazy(() => import('./views/MarketPage'));
// const SpacePage = React.lazy(() => import('./views/SpacePage'));

const routes = [
  // { path: '/', name: 'HomePage',},
  { path: '/',exact: true, name: 'HomePage', component: HomePage },
  { path: '/home',exact: true, name: 'HomePage', component: HomePage },
  // { path: '/about', exact: true, name: 'about', component: AboutPage },
  // { path: '/blogs', exact: true, name: 'blogs', component: BlogsPage },
  // { path: '/contact', exact: true, name: 'contact', component: ContactPage },
  // { path: '/events', exact: true, name: 'events', component: EventsPage },
  // { path: '/market', exact: true, name: 'market', component: MarketPage },
  // { path: '/space',  exact: true, name: 'space', component: SpacePage },
  
  { path: '/home/:id', exact: true, name: 'blogs list', component: HomeDetail },
  // { path: '/blogs/:id', exact: true, name: 'blogs list', component: BlogsPage },
  // { path: '/events/:id', exact: true, name: 'events list', component: EventsPage },
  // { path: '/market/:id', exact: true, name: 'market list', component: MarketPage },
  // { path: '/space/:id', exact: true, name: 'space list', component: SpacePage },
];


export default routes;
