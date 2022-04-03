export const loading = {
  state: {
    isLoading: false
  },
  reducers: {
    isLoading (state, payload) {
      return {
        ...state,
        isLoading: payload
      }
    },
  },
  effects: (dispatch) => ({
    async setLoading (active, state) {
      dispatch.loading.isLoading(active);
    },
  }),
};

export default loading;