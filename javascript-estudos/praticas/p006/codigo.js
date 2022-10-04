const myFunc = callback => {
    const value = 77

    callback(value)
}

myFunc(num => {
    console.log(num)
})

