function debounce(func, wait) {
    let timeout
    return function(...args) {
      const context = this
      clearTimeout(timeout)
      timeout = setTimeout(() => func.apply(context, args), wait)
    }
  }
  
  function sayHello() {
    console.log('My name is', this.name)
  }
  
  const amy = {
    name: 'amy',
    speak: debounce(sayHello, 200000),
  }
  
  amy.speak()
