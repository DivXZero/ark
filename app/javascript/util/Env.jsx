import React from 'react'

// TODO: get base_url from system environment (add to ~/.profile or .bashrc?)
export const BASE_URL = process.env.BASE_URL

export const JSON_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}
