import { Router } from 'express';
import { recomendationService } from '../../services';

export class RecomendationRoute {
  constructor() {
    this.router = Router();
    this.router.get('/recomendations', this.getAll)
    this.router.post('/recomendations', this.create)
  }

  getAll (req, res, next) {
    recomendationService.getAll().then(data => res.send(data)).catch(next)
  }

  create (req, res, next) {
    const recomendation = req.body
    console.log(recomendation)
    recomendationService.create(recomendation).then(data => res.send(data)).catch(next)
  }
}

export default new RecomendationRoute().router;