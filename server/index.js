const dotenv = require('dotenv');
const mongoose = require('mongoose');

/**
 * Todo el código relacionado con express se encuentra
 * en el archivo "app.js"
 */
const app = require('./app');

dotenv.config();

mongoose.set('strictQuery', true);

const PORT = process.env.PORT || 6001;

console.log('💭 Iniciando el servidor y la base de datos...');
mongoose
  .connect(
    process.env.MONGODB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    console.log('✅ ---> Conexión correcta a MongoDB!')
  )
  .then(() => {
    /** Lanzamos el servidor despues de conectarnos
     * correctamente a MongoDB
     */
    app.listen(PORT, () => {
      console.log(`✅ ---> Servidor activo en ${PORT}`);
    });
  })
  .catch((err) => console.log(`❌ ---> ${err} `));
