import axios from 'axios';

// axios 인스턴스 생성
const service = axios.create({
  baseURL: '/',
  timeout: 500000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

// interceptors 요청 전
service.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전에 수행할 일
    // ...
    return config;
  },
  function (error) {
    // 오류 요청을 보내기전 수행할 일
    // ...
    return Promise.reject(error);
  }
);

// interceptors 응답 후
service.interceptors.response.use(
  function (response) {
    // 응답 데이터를 가공
    // ...
    return response;
  },
  function (error) {
    // 오류 응답을 처리
    // ...
    return Promise.reject(error);
  }
);

export default service;
