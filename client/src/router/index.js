import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Posts from '@/components/articles/Posts'
import NewPost from '@/components/articles/NewPost'
import EditPost from '@/components/articles/EditPost'
import ViewPost from '@/components/articles/ViewPost'
import Notes from '@/components/notes/Notes'
import NewNote from '@/components/notes/NewNote'
import ViewNote from '@/components/notes/ViewNote'
import EditNote from '@/components/notes/EditNote'
import Cheatsheets from '@/components/templates/HTML_CSS_Cheat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      alias: '/home'
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/posts/edit/:id',
      name: 'EditPost',
      component: EditPost
    },
    {
      path: '/posts/:id',
      name: 'ViewPost',
      component: ViewPost
    },
    {
      path: '/notes',
      name: 'Notes',
      component: Notes
    },
    {
      path: '/notes/new',
      name: 'NewNote',
      component: NewNote
    },
    {
      path: '/notes/edit/:id',
      name: 'EditNote',
      component: EditNote
    },
    {
      path: '/notes/:id',
      name: 'ViewNote',
      component: ViewNote
    },
    {
      path: '/cheatsheets',
      name: 'Cheatsheets',
      component: Cheatsheets
    }
  ]
})
