import Home from './components/Home'
import Menu from './components/Menu'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/about/About'
import Admin from './components/Admin'

//二级路由
import Contact from './components/about/Contact'
import History from './components/about/History'
import Delivery from './components/about/Delivery'
import OrderingGuide from './components/about/OrderingGuide'

//三级路由
import Phone from './components/about/contact/Phone'
import Person from './components/about/contact/Person'



export const routes = [
    {
        path: '/', name: 'homeLink', components: {
            default: Home,
            'orderingGuide': OrderingGuide,
            'delivery': Delivery,
            'history': History
        }
    },
    { path: '/Menu', name: 'menuLink', component: Menu },
    { path: '/login', name: 'loginLink', component: Login },
    { path: '/register', name: 'registerLink', component: Register },
    {
        path: '/about', name: 'aboutLink', redirect: '/about/contact', component: About, children: [
            {
                path: '/about/contact', name: 'contactLink', redirect: '/about/contact/phone', component: Contact, children: [
                    { path: '/about/contact/phone', name: 'phoneLink', component: Phone },
                    { path: '/about/contact/person', name: 'personLink', component: Person },
                ]
            },
            { path: '/about/hitory', name: 'historyLink', component: History },
            { path: '/about/delivery', name: 'deliveryLink', component: Delivery },
            { path: '/about/orderingGuide', name: 'orderingGuideLink', component: OrderingGuide },
        ]
    },
    { path: '/admin', name: 'adminLink', component: Admin },
    { path: '*', redirect: '/' }
]