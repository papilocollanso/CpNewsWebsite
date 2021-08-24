// eslint-disable-next-line no-unused-vars
import axios from 'axios'

// eslint-disable-next-line no-unused-vars
import {VUE_APP_ACCESS_KEY}  from 'dotenv'

const state ={
  news:  []
};
const getters ={};
const actions={

// eslint-disable-next-line no-unused-vars
async fetchNews({commit}){
    
   
const response= await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.VUE_APP_ACCESS_KEY}`);

commit('setNews',response.data);

},

async getFilter({commit},q){
  const response= await axios.get(`https://newsapi.org/v2/top-headlines?country=${q}&apiKey=${process.env.VUE_APP_ACCESS_KEY}`);

  commit('setFilter',response.data);

}



};
const mutations={

setNews: (state,news)=>(state.news = news),
setFilter: (state,news)=>(state.news=news)

};

export default{
    state,
    getters,
    actions,
    mutations
}