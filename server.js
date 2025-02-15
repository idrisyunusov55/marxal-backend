import express from 'express'
import StandartKingimgRouter from './router/standartKingimgRoutes.js'
import KingBalconyRouter from './router/kingBalconyRoutes.js'
import TwinBalconyRouter from './router/twinBalconyRoutes.js'
import DeluxeSuideRouter from './router/deluxeSuiteRoutes.js'
import TripleRouter from './router/tripleRoutes.js'
import CornerSuideRouter from './router/cornerSuideRoutes.js'
import CoupleVillaRouter from './router/coupleVillaRoutes.js'
import StandartVillaRouter from './router/standardVillaRoutes.js'
import SizeVillaRouter from './router/sizeVillaRoutes.js'
import BigVillaRouter from './router/bigVillaRoutes.js'
import AmbassadorRouter from './router/ambassadorRoutes.js'
import RoyalRouter from './router/royalSuiteRoutes.js'
import RoomRouter from './router/roomRoutes.js'
import cors from 'cors'
import { configDotenv } from 'dotenv'
import { connectDb } from './config/config.js'



configDotenv()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors('*'))



app.use('/standartKingimg', StandartKingimgRouter)
app.use('/kingbalconyimg', KingBalconyRouter)
app.use('/twinbalconyimg', TwinBalconyRouter) 
app.use('/tripleimg', TripleRouter)
app.use('/deluxesuideimg', DeluxeSuideRouter)
app.use('/cornersuideimg', CornerSuideRouter)
app.use('/couplevillaimg', CoupleVillaRouter)
app.use('/standartvillaimg', StandartVillaRouter)
app.use('/sizevillaimg', SizeVillaRouter)
app.use('/bigvillaimg', BigVillaRouter)
app.use('/ambassadorsuiteimg', AmbassadorRouter)
app.use('/royalsuiteimg', RoyalRouter)
app.use('/room', RoomRouter)




connectDb()


app.listen(8800, () => {
    console.log("server qaldirildi");
    
})
