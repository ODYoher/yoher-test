import { init } from '@rematch/core';
import recomendation from '../models/recomendations';
import loading from '../models/loading';

const store = init({
  models: {
    recomendation,
    loading,
  },
  redux: {
    rootReducers: {
      RESET_APP: () => { },
    },
  },
})

export default store;