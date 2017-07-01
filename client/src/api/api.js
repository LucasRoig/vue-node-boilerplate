import Vue from 'vue';
import VueRessource from 'vue-resource';
import config from '../config/config';

Vue.use(VueRessource);

let baseRoute = config.apiRoute;