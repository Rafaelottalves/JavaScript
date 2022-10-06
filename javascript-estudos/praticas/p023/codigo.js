const loginUser = (email, password, onSuccess) => { // lU
    setTimeout(() => {
        console.log('User logged!')

        onSuccess({ email }) //oS
    }, 1500)
}

const getUserVideos = (email, callback) => { //gv
    setTimeout(() => {
        callback(['video1', 'video2', 'video3'])
    }, 2000)
}

const getVideoDetails = (video, callback) => { //gd
    setTimeout(() => {
        callback({title:'video title'})
    } ,2500)
}

loginUser('rafael@gmail.com', '123456', (user) => { // lU  //oS
    getUserVideos(user.email, (videos) => { //gv
        console.log({ videos })
        getVideoDetails(videos[0], (videoDetails) => { //gd
            console.log({ videoDetails })
        })
    })
})
 