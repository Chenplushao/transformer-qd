import request from '@/utils/request'

export function registerNewUser(email, gender, nickName, password, phone, username) {
  return request({
    url: 'api/users/register',
    method: 'post',
    data: {
      email,
      gender,
      nickName,
      password,
      phone,
      username
    }
  })
}
