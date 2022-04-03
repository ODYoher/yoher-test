import { recomendationModel } from '../models';

export class RecomendationService {
  constructor() {
    this.model = recomendationModel;
  }

  async create (body) {
    const recomendation = new this.model(body);
    return await recomendation.save()
  }

  async getAll () {
    return await this.model.find({});
  }
}

export const recomendationService = new RecomendationService();
export default recomendationService