const base = 'http://yigong.local/'
const OauthApi = {
  token: base + 'oauth/token'
}
const VerifyApi = {
  send: base + 'sms/verify-code'
}
const UserApi = {
  register: base + 'api/user',
  updateProfile: base + 'api/user_profile/update',
  profile: base + 'api/user_profile',
  detail: base + 'api/user/detail'
}

export {
  OauthApi,
  VerifyApi,
  UserApi
}
