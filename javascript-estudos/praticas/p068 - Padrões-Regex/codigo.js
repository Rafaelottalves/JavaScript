const palavrasRegex = /([\wÀ-ú]+)/g

const naoNum = /\D/

const ipReg = /((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)/g

const cpfReg = /(?:\d{3}\.){2}\d{3}-\d{2}/g

const validTelefone = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/g

const validSenhasFortes = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/g

const realValidEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// [^\s]+@[^\s]+\.[^\s]+(\w+)* (Permissiva)
