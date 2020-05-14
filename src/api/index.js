import request from '@/utils/request'

export function getLearnQuestion (req) { // 获取单选模型题型
  return request({
    url: 'getExercisesByType',
    method: 'get',
    params: req
  })
}
export function postPersonResult (req) { // 提交人格测试结果
  return request({
    url: 'bigFive/submitEvaluate',
    method: 'post',
    params: req
  })
}
export function postMBTIResult (req) { // 提交MBTI测试结果
  return request({
    url: 'submitEvaluate',
    method: 'post',
    params: req
  })
}
export function gotoMBTIMajorCon (req) { // 获取MBTI专业数据
  return request({
    baseURL: 'http://www.zhongkeruitong.top/evaluate/evaluate/',
    url: 'profession/getList',
    method: 'get',
    params: req
  })
}
export function postLearnAnswer (req) { // 学习力模型结果
  return request({
    url: 'submitEvaluate',
    method: 'post',
    params: req
    // contentType: 'application/json; charset=utf-8',
    // // contentType: 'application/x-www-form-urlencoded',
    // // data: req
    // data: [JSON.stringify(req)],
    // dataType: 'json'
  })
}
