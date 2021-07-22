const express = require('express')
const app = express()
const { SummarizerManager } = require("node-summarizer");

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Running')
})

app.post('/summary', async (req, res) => {
    var sentence = Number(req.query.sentence)
    if (!sentence) var sentence = 5

    if (!req.body.text) {
        res.json({ status: false, msg: "please provide text" })
    } else {
        try {
            var Summarizer = new SummarizerManager(req.body.text, sentence);
            var summary = await Summarizer.getSummaryByRank()
            res.json({ status: true, summary: summary.summary })
        } catch (error) {
            res.json({ status: false, msg: "something went wrong" })
        }
    }
})

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Listening at Port: ${port}`)
})