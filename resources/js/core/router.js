import Vue from 'vue';
import VueRouter from 'vue-router';

import Layout from './components/Layout'
import NotFound from './components/NotFound'

import auth from '../modules/auth/routes'
import common from '../modules/common/routes'
import profile from '../modules/profile/routes'

import users from '../modules/users/routes'
import roles from '../modules/roles/routes'
import permissions from '../modules/permissions/routes'
import services from '../modules/services/routes'
import categories from '../modules/categories/routes'

import schedules from '../modules/schedules/routes'
import contracts from '../modules/contracts/routes'
import configs from '../modules/configs/routes'
import doc_templates from '../modules/doc_templates/routes'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        ...common,
        ...auth,
        {
            path: '/',
            component: Layout,
            meta: { requiresAuth: true },
            children: [
                ...users,
                ...roles,
                ...permissions,
                ...schedules,
                ...services,
                ...profile,
                ...contracts,
                ...configs,
                ...doc_templates,
                ...categories,
            ],

        },
        {
            path: '*',
            name: 'not_found',
            component: NotFound,
        }
    ]
});

router.beforeEach((to, from, next) => {
    let user = JSON.parse(localStorage.getItem('user'))?.user;

    //Auth check
    if (to.matched.some(record => record.meta.requiresAuth) && !user) {
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        });
    } else {
        //Permission check
        if (to.meta.permission && !user.permissions.includes(to.meta.permission)) {
            next('/not_found');
        } else {
            next();
        }
    }
});

export default router;
