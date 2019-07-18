import name from './common/name'
import NavBar from './components/nav-bar'
import Loading from './components/loading'
import ProgressBar from './components/progress-bar'


const components = {
  NavBar,
  Loading,
  ProgressBar
}

const prefixComponent = ''

prefixComponent = name.libShortName

const install = function (Vue, ops = {}) {
  if (install.installed) return
  Object.keys(components).forEach(key => {
    Vue.component(prefixComponent + components[key].name, components[key]);
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
}