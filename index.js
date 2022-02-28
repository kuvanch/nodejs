import express from 'express'

const app = express()
const port = 5000

app.all('/hello', (req, res, next) => {
    console.log('All');
    next()
})
const cd = (req, res, next) => {
    console.log('CD');
    next()
}
app.get('/hello', cd, (req, res) => {
    console.log('GET');
    res.send('Hello GET')
})


app.post('/hello', (req, res) => {
    res.send('Hello POST')
})


app.listen(port, () => {
    console.log('Connecting');
})