function withInstall(comp, alias, directive) {
  const componentPlugin = comp

  componentPlugin.install = (Vue, name) => {
    Vue.component(alias || name || componentPlugin.name, comp)
    directive && Vue.directive(directive.name, directive.comp)
  }

  return componentPlugin
}

export default withInstall
