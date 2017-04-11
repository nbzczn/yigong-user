const base = 'http://yigong.local/'
const OauthApi = {
  token: base + 'oauth/token'
}
const VerifyApi = {
  send: base + 'sms/verify-code'
}
const UserApi = {
  register: base + 'api/user'
}

export {
  OauthApi,
  VerifyApi,
  UserApi
}
