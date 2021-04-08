const app = require('./server/app')
require('dotenv').config(); //variables de entorno
const { connection } = require('./database/db')

const morgan = require('morgan');

app.use(morgan('dev'));

app.listen(process.env.PORT, (() => {
    console.log("servidor corriendo en port", process.env.PORT)
    connection.sync().then(() => {
        console.log("se establecio la conexion")
    }).catch(e => {
        console.log("error al cocnectar", e.message)
    })
}))