import React from 'react'

import { BASE_URL } from './Env'

export const getSetting = (id, callback) => {
  fetch(BASE_URL + '/setting/get', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: id })
  })
  .then(res => res.json())
  .then(resJSON => {
    callback(resJSON)
  })
}

export const setSetting = (id, value, callback) => {
  fetch(BASE_URL + '/setting/set', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: id, value: value })
  })
  .then(res => res.json())
  .then(resJSON => {
    callback(resJSON)
  })
}
