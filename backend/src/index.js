import App from './app.js'

const PORT = process.env.PORT|| 3001 ;
const app = new App();

app.run(PORT)
