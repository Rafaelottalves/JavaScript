const html = `<p type="module">olá mundo</p> <div>sou uma div</div>`

reg = /(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/gi
console.log(html.replace(reg, '$1"-$3-"$4'))
