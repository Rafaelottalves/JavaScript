const loginUser = (email, password, onSuccess, onError) => {
    setTimeout(() => {
        const error = false

        if(error) {
            return onError(new Error('Error in login'))
        }

        console.log('User logged!')

        onSuccess({ email })
    }, 1500)
}

const user = loginUser('rafael@gmail.com', '123456', (user) => {
    console.log(user)
}, (error) => {
    console.log({ error })
})
// console.log({ user })
