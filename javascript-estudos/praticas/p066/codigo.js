const html = '<p type="module">Olá mundo</p> <div>sou uma div</div>'

reg = /<(\w+).*?>.+?<\/\1>/gi
console.log(html.match(reg))
