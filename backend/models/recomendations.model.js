import { model, Schema } from 'mongoose';

const modelSchema = new Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  instructions: {
    type: String,
  },
  why: {
    type: String,
  },
  tags: {
    type: String,
  },
  contraindications: {
    type: String,
  },
  studies: {
    type: [{
      label: {
        type: String,
      },
      link: {
        type: String,
      }
    }]
  }
});

export const recomendationModel = model('Recomendation', modelSchema);