import {BACK_HOST} from '@env'
import httpAdapter from 'axios/lib/adapters/http'

const axios = require('axios')

axios.defaults.adapter = httpAdapter

const Services = {

  createUserEnrollment(state, token) {
    token = token || localStorage.getItem('token')
    return axios.post(BACK_HOST + '/api/enrollments/', state, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response)
  },
  updateUserEnrollment(state, token) {
    token = token || localStorage.getItem('token')
    return axios.patch(BACK_HOST + '/api/enrollments/' + state.enrollment.id, state, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response)
  },
  getUserEnrollment(id, token) {
    token = token || localStorage.getItem('token')
    return axios.get(BACK_HOST + '/api/enrollments/' + id, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.data)
  },
  getUserEnrollments(token) {
    token = token || localStorage.getItem('token')
    return axios.get(BACK_HOST + '/api/enrollments/', {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.data)
  },
  triggerUserEnrollment(action, enrollment) {
    const token = localStorage.getItem('token')
    return axios.patch(BACK_HOST + '/api/enrollments/' + enrollment.id + '/trigger', {
      event: action,
      enrollment
    }, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    }).then(response => response)
  },
  deleteUserEnrollment(token, id) {
    return axios.delete(BACK_HOST + '/api/enrollments/' + id, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response)
  },
  getResourceProviderService() {
    return axios.get(BACK_HOST + '/api/resource_providers').then(response => response.data)
  },
  getSirenInformation(siren) {
    return axios.get(`https://sirene.entreprise.api.gouv.fr/v1/siren/${siren}`)
  }
}

export default Services