export class Router {
  routes = {}

  add (routename, page) {
    this.routes[routename] = page
  }

  route(event) {
    // verificar se foi passado algum evento
    event = event || window.event;
    // evitar que o comportamento padrão seja executado
    event.preventDefault()
  // event.target.href pegar a url a partir do click feito em cima do link
    window.history.pushState({}, "", event.target.href)
  
    this.handle()
  }

  handle(){
    //  DESISTRITURAÇAO > const pathname = window.location.pathname E A MESMA COISA
    const { pathname } =window.location
    const route = this.routes[pathname] || this.routes[404]
    // console.log('antes do fecth')
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
  
    // console.log(route)
  }
}

// export default new Router()