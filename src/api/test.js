import request from '@/utils/request'

/**
 * Test 모듈
 *
 * @param text
 */
export function uploadImgFile(text) {
  const formData = new FormData()
  formData.append('text', text)

  return request({
    url: '/callTest.do',
    method: 'post',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}