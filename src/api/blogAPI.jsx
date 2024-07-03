import axiosClient from './axiosClient'

const blogApi = {
  getAll: (params) => {
    const url = 'blogs'
    return axiosClient.get(url, { params })
  },

  addNew: (params) => {
    const url = 'blogs'
    return axiosClient.post(url, params)
  }
}

export default blogApi
