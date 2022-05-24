import { Router } from './router.js'

const router = new Router()
router.add("/" , "/pages/home.html")
router.add("/about" , "/pages/about.html")
router.add("/contact" , "/pages/contact.html")
router.add( 404 , "/pages/404.html")


router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()


// criando nossas rotas , mapeamento das rotas
// const routes = {
//   "/" : "/pages/home.html",
//   "/about" : "/pages/about.html",
//   "/contact" : "/page/contact.html",
//   404 : "/pages/404.html"
// }


// handle()

// window.onpopstate = () => handle()
// window.route = () => route()