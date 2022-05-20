const express = require('express');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


const app = express()


const port = 3000;

app.get('/', (req, res) => {
    res.send('in')
})


app.listen(port, () => {
    console.log(`running on port ${port}`)
})