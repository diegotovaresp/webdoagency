import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex);
const getDefaultState = () => {
    return {
        isMobile: false,
        routes: null,
        routesObject: null,
        showSpinner: false,
        showLoginbox:false,
        showInscribete: false,
        conectado:false,
        user: {
            loggedIn: false,
            data: null
        },
        paises: [],
        pais:{},
        negocios:[],
        pnegocios:[],
        tipopagos:[],
        tipoentradas:[],
        tipoeventos:[],
        tipopago:{},
        tipoentrada:{},
        tipoevento:{},
        bancos:[],
        banco:{},
        tipomembresias:[],
        tipomembresia:{},
        estadocarnets:[],
        estadocarnet:{},
        evento:{},
        sexos:[],
        sexo:{},
        cliente: {},
        clientes: [],
        dias:[],
        dia:{},
        negocio: {},
        pnegocio: {},
        tnegocios: false,
        usuario:{},
        vacuna:{},
        ticket:{},
        qrticket:{}
    }
}
const state = getDefaultState()

export default new Vuex.Store({
    state,
  getters: {
    user(state){
      return state.user
    },
      conectado(state){
        return state.conectado
      },
    usuario(state){
      return state.usuario
    },
      vacuna(state){
          return state.vacuna
      },
      cliente(state){
          return state.cliente
      },
      ticket(state){
          return state.ticket
      },
      qrticket(state){
          return state.qrticket
      },
      clientes(state){
          return state.clientes
      },
      pais(state){
          return state.pais
      },
      dia(state){
          return state.dia
      },
      banco(state){
        return state.banco
      },
    negocios(state){
      return state.negocios
    },
      pnegocios(state){
          return state.pnegocios
      },
      dias(state){
        return state.dias
      },
      bancos(state){
        return state.bancos
      },
    negocio(state){
      return state.negocio
    },
      pnegocio(state){
          return state.pnegocio
      },
      evento(state){
          return state.evento
      },
    paises(state){
      return state.paises
    },
      tipopagos(state){
          return state.tipopagos
      },
      tipoeventos(state){
          return state.tipoeventos
      },
      tipoentradas(state){
          return state.tipoentradas
      },
      tipoentrada(state){
        return state.tipoentrada
      },
      tipopago(state){
        return state.tipopago
      },
      tipoevento(state){
        return state.tipoevento
      },
      tipomembresias(state){
        return state.tipomembresias
      },
      tipomembresia(state){
        return state.tipomembresia
      },
      estadocarnets(state){
          return state.estadocarnets
      },
      estadocarnet(state){
          return state.estadocarnet
      },
      sexos(state){
          return state.sexos
      },
      sexo(state){
          return state.sexo
      },

      showInscribete(state){
          return state.showInscribete
      }

  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
      resetState (state) {
          Object.assign(state, getDefaultState())
      },
    SET_USER(state, data) {
      state.user.data = data;
    },
      showInscripcion(state) {
          state.showInscribete = true;
      },
      hideInscripcion(state) {
          state.showInscribete = false;
      },
      SET_CLIENTE(state, data) {
          state.cliente = data
      },
      SET_TICKET(state, data) {
          state.ticket = data
      },
      SET_QRTICKET(state, data) {
          state.qrticket = data
      },
      SET_EVENTO(state, data) {
          state.evento = data
      },
      showPreloader(state) {
          state.showSpinner = true;
      },
      hidePreloader(state) {
          state.showSpinner = false;
      },

      conectarse(state){
        state.conectado = true
      },
      desconectarse(state){
        state.conectado = false
      },
      connegocios(state){
          state.tnegocios = true
      },
      sinnegocios(state){
          state.tnegocios = false
      },
      updateResolution(state, payload) {
          state.isMobile = payload;
      },
      SET_NEGOCIO(state, data) {
        state.negocio = data;
      },
      SET_PNEGOCIO(state, data) {
          state.pnegocio = data.pnegocio;
      },
      SET_TIPOENTRADAS(state, data) {
          for( var item in data){
              state.tipoentradas.push(data[item]);
          }
      },
      SET_TIPOEVENTOS(state, data) {
          for( var item in data){
              state.tipoeventos.push(data[item]);
          }
      },
      SET_TIPOPAGOS(state, data) {
          for( var item in data){

              state.tipopagos.push(data[item]);
          }
      },
      SET_TIPOMEMBRESIAS(state, data) {
          for( var item in data){
              state.tipomembresias.push(data[item]);
          }
      },
      SET_ESTADOCARNETS(state, data) {
          for( var item in data){
              state.estadocarnets.push(data[item]);
          }
      },
      SET_SEXOS(state, data) {
          for( var item in data){
              state.sexos.push(data[item]);
          }
      },
      SET_NEGOCIOS(state, data) {

        for( var item in data){
            if(state.negocios.indexOf(data[item].negocio) !==-1) {
                console.log('negocio ya existia')
            }else{
                state.negocios.push(data[item].negocio);
            }

        }
      },
      SET_PNEGOCIOS(state, data) {
          for( var item in data){
              if(state.pnegocios.indexOf(data[item]) !==-1){
                  console.log('negocio ya existia')
              }else{
                  state.pnegocios.push(data[item]);
              }

          }
      },
      SET_CLIENTES(state, data) {

          for( var item in data){
              state.clientes.push(data[item].cliente);
          }
      },
      SET_BANCOS(state, data) {
          for( var item in data){
              state.bancos.push(data[item]);
          }
      },
      SET_DIAS(state, data) {
          for( var item in data){
              state.dias.push(data[item]);
          }
      },
      SET_PAISES(state, data) {
        for( var item in data){
          state.paises.push(data[item]);
        }
      },
      ADD_NEGOCIO(state,data){
        state.negocios.push(data);
      },
    SET_USUARIO(state, data){
        state.usuario = data
    },
      SET_VACUNA(state, data){
          state.vacuna = data
      }
  },
  actions: {
      showPreloader: ({commit}) => commit('showPreloader'),
      hidePreloader: ({commit}) => commit('hidePreloader'),
      showLoginbox: ({commit}) => commit('showLoginbox'),
      hideLoginbox: ({commit}) => commit('hideLoginbox'),

      showInscripcion: ({commit}) => commit('showInscripcion'),
      hideInscripcion: ({commit}) => commit('hideInscripcion'),
      conectarse: ({commit}) => commit('conectarse'),
      desconectarse: ({commit}) => commit('desconectarse'),

      resetState: ({commit}) => commit('resetState'),
      connegocios: ({commit}) => commit('connegocios'),
      sinnegocios: ({commit}) => commit('sinnegocios'),
      updateResolution: ({commit}, payload) => commit('updateResolution', payload),
      fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    },
      fetchNegocios({ commit }, negocios) {
      commit("SET_NEGOCIOS", negocios);
        },

      fetchpNegocios({ commit }, negocios) {
          commit("SET_PNEGOCIOS", negocios);
      },

      fetchClientes({ commit }, clientes) {
          commit("SET_CLIENTES", clientes);
      },
      fetchTipoEntradas({ commit }, tipoentradas) {
          commit("SET_TIPOENTRADAS", tipoentradas);
      },
      fetchTicket({ commit }, evento) {
          commit("SET_TICKET", evento);
      },
      fetchQrTicket({ commit }, evento) {
          commit("SET_QRTICKET", evento);
      },
      fetchTipoEventos({ commit }, tipoeventos) {
          commit("SET_TIPOEVENTOS", tipoeventos);
      },
      fetchTipoPagos({ commit }, tipopagos) {
          commit("SET_TIPOPAGOS", tipopagos);
      },
      fetchBancos({ commit }, bancos) {
          commit("SET_BANCOS", bancos);
      },
      fetchDias({ commit }, dias) {
          commit("SET_DIAS", dias);
      },
      fetchTipoMembresias({ commit }, tipomembresias) {
          commit("SET_TIPOMEMBRESIAS", tipomembresias);
      },
      fetchEstadoCarnets({ commit }, estadocarnets) {
          commit("SET_ESTADOCARNETS", estadocarnets);
      },
      fetchSexos({ commit }, sexos) {
          commit("SET_SEXOS", sexos);
      },
      fetchNegocio({ commit }, negocio) {
            commit("SET_NEGOCIO", negocio);
        },
      fetchpNegocio({ commit }, negocio) {
          commit("SET_PNEGOCIO", negocio);
      },
      fetchEvento({ commit }, evento) {
          commit("SET_EVENTO", evento);
      },
      fetchCliente({ commit }, cliente) {
          commit("SET_CLIENTE", cliente);
      },
      insertnegocios({ commit }, negocio) {
        commit("ADD_NEGOCIO", negocio);
      },
    fetchUsuario({commit},usuario){
        commit("SET_USUARIO", usuario);
    },
      fetchVacuna({commit},vacuna){
          commit("SET_VACUNA", vacuna);
      }
  },
    plugins:[
        createPersistedState({
            getState: (key) => Cookies.get(key),
            setState: (key,state) => Cookies.set(key,state,{expires:3, secure:true}),
            storage:{
                getItem : key => Cookies.get(key),
                setItem : (key,value) => Cookies.set(key,value,{expires:3, secure:true}),
                removeItem: key => Cookies.remove(key)
            }
        })
    ]
});