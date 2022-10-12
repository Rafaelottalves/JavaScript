const nums = [1, 2, 3, 4, 5, 6]
const numsV2 = nums.map(el => el * 2)

console.log(numsV2)

const stud = [
    {name: 'jake', score: 6.4},
    {name: 'susan', score: 8.6},
    {name: 'emma', score: 9.4},
    {name: 'peter', score: 9.1},
]

const getScore = el => el.score

console.log(
    stud
    .map(getScore)
    .map(Math.ceil)
)
