import * as recomendationService from '../../infrastructure/services/recomendations';

export const recomendation = {
  state: {
    recomendations: []
  },
  reducers: {
    addRecomendations (state, payload) {
      console.log(payload)
      return {
        ...state,
        recomendations: payload
      }
    },
    addNewRecomendation (state, payload) {
      return {
        ...state,
        recomendations: state.recomendations.push(payload)
      }
    },
  },
  effects: (dispatch) => ({
    async getAllRecomendations () {
      dispatch.loading.setLoading(true);
      try {
        const setRecomendation = await (await recomendationService.getAllRecomendations()).data;
        dispatch.recomendation.addRecomendations(setRecomendation)
        setTimeout(() => dispatch.loading.setLoading(false), 1000)
      } catch (error) {
        console.log(error)
      }
    },
    async saveRecomendation (payload) {
      console.log(payload)
      dispatch.loading.setLoading(true);
      try {
        const recomendations = await recomendationService.addRecomendation(payload);
        dispatch.recomendation.addNewRecomendation(recomendations)
        setTimeout(() => dispatch.loading.setLoading(false), 1000)
      } catch (error) {
        console.log(error)
      }
    },
  }),
};

export default recomendation