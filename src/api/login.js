import request from '@/utils/request'

export function loginByUsername(appId, appSecret) {
  const data = {
    appId,
    appSecret
  }
  return request({
    url: '/platCompany/extapi/getAccessToken',
    method: 'get',
    params: { appId, appSecret }
  })
}

export function logout() {
  return request({
    url: '/auth/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/auth/info',
    method: 'get',
    params: { token }
  })
}

