export default {
  namespaced: true,
  state: {
    showState: false,
    feedbackObject: {
      img: '',
      name: '',
      description: '',
      rate: '',
    },
  },
  mutations: {
    showOverlay(state: any) {
      state.showState = true;
    },
    updateFeedbackObject(state: any, feedbackObject: object) {
      state.feedbackObject = feedbackObject;
    },
    close(state: any) {
      state.showState = false;
      state.feedbackObject = {
        img: '',
        name: '',
        description: '',
        rate: '',
      };
    },
  },
  actions: {
    showFeedbackOverlay({ commit }: any, feedback: any) {
      commit('showOverlay');
      commit('updateFeedbackObject', feedback);
    },
  },
  modules: {},
};
