import express from "express";
import {api} from './routes/index.js'

//import errorHandler from './middlewares/error-handler';

class App {
  constructor() {
    this.app = express();
    this.setup();
  }

  setup() {
    this.app.use('/api', api);
    /* this.app.use(errorHandler); */
  }

  run(port) {
    this.server = this.app.listen(port, () => {
      console.log(`App is listening on ${port}✨`);
    });
  }

  stop(done) {
    this.server.close(done);
  }
}
export default App;
