export default ({ app }, inject) => {
  // Inject $myPlugin into the context
  inject('myPlugin', string => console.log("Hello " + string))
}
