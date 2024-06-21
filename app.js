import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'

mongoose
	.connect(
		`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/?retryWrites=true&w=majority&appName=${process.env.DB_NAME}`
	)
	.then(() => console.log('Database OK'))
	.catch(err => console.log('Database error: ', err))

const app = express()

app.use(express.json())
app.use(cors())

app.get('/api', (req, res) => {
	res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
	console.log('Server OK')
})
