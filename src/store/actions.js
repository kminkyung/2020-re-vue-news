import {fetchAskList, fetchJobsList, fetchNewsList} from "../api";

export default  {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(({ data }) => context.commit('SET_NEWS', data)) // 받은 data를 state에 state.news = response.data 이런 식으로 곧바로 담을 수 없다.
      .catch(error => console.log(error))
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => commit('SET_ASK', data))
      .catch(error => console.log(error))
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => commit('SET_JOBS', data))
      .catch(error => console.log(error))
  }
}