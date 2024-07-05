import axiosClient from './axiosClient'

const blogApi = {
  getAll: (params) => {
    const url = 'blogs'
    return axiosClient.get(url, { params })
  },

  addNew: (params) => {
    const url = 'blogs'
    return axiosClient.post(url, params)
  },

  getDetail: (params) => {
    const url = `blogs/${params}`
    return axiosClient.get(url)
  }
}

export default blogApi
