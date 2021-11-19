import request from '@/utils/request'

export function registerNewUser(email, gender, nickname, password, phone, username) {
  return request({
    url: 'api/users/register',
    method: 'post',
    data: {
      email,
      gender,
      nickname,
      password,
      phone,
      username
    }
  })
}
