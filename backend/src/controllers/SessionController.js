export class SessionController {
  constructor({ sessionService }) {
    this.sessionService = sessionService;
  }
  async post(req, res) {
    const user = req.body;
    try {
      const data = await this.sessionService.login(user);
     res.json(data)
    } catch (err) {
      return res.status(err.status).json(err.message);
    }
  }
  async createNewUser(req, res) {
    const user = req.body;
    try {
      const data = await this.sessionService.addNewUser(user);
      data.results.affectedRows > 0 ?  res.status(201).json({message :"Thanks for your registration "}) :
     res.status(404).json({message : "Something wrong wrong , pleas try again"})
    } catch (err) {
      return res.status(err.status).json(err.message);
    }
  }
}
