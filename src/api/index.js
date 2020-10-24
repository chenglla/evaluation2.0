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
export function postMathResult (req) { // 提交数学能力测试结果
  return request({
    url: 'submitEvaluate',
    method: 'post',
    params: req
  })
}
export function postFiveResult (req) { // 提交数学能力测试结果
  return request({
    url: 'submitEvaluate',
    method: 'post',
    params: req
  })
}
export function postBrainResult (req) { // 脑象图能力测试结果
  return request({
    url: 'submitEvaluate',
    method: 'post',
    params: req
  })
}
export function mentalBrainResult (req) { // 心理素质能力测试结果
  return request({
    url: 'submitEvaluate',
    method: 'post',
    params: req
  })
}
export function bodyResult (req) { // 身体素质能力测试结果
  return request({
    url: 'submitEvaluate',
    method: 'post',
    params: req
  })
}
export function happyBrainResult (req) { // 积极乐观测试结果
  return request({
    url: '/basicLiteracy/submitEvaluate',
    method: 'post',
    params: req
  })
}
export function carefulResult (req) { // 细致高效测试结果
  return request({
    url: '/basicLiteracy/submitEvaluate',
    method: 'post',
    params: req
  })
}
export function adjustResult (req) { // 适应力测试结果
  return request({
    url: '/basicLiteracy/submitEvaluate',
    method: 'post',
    params: req
  })
}
export function emotionResult (req) { // 情绪测试结果
  return request({
    url: '/basicLiteracy/submitEvaluate',
    method: 'post',
    params: req
  })
}
export default function getMbtiResult(req) {//获取mbti测评结果
  return request({
    url: '/mbti/submitEvaluate',
    method: 'post',
    params: req
  })

}

export function gotoMBTIMajorCon (req) { // 获取MBTI专业数据
  return request({
    baseURL: 'https://www.zhongkeruitong.top/evaluate/evaluate/',
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
  })
}
export function postPlanResult (req) { // 提交计划力测试结果
  return request({
    url: 'basicLiteracy/submitEvaluate',
    method: 'post',
    params: req
  })
}
export function getPlanQuestion (req) { // 获取所有测评结果
  return request({
    url: 'basicLiteracy/getAll',
    method: 'get',
    params: req
  })
}
export function postHBDIResult (req) { // 提交HBDI测试结果
  return request({
    url: 'hbdi/submitEvaluate',
    method: 'post',
    params: req
  })
}
export function getProfessionInfo (req) { // 获取所有专业大类
  return request({
    url: 'profession/getAllKtType',
    method: 'get',
    params: req
  })
}
export function findCareerInfo (req) { // 获取专业大类对应的职业列表
  return request({
    url: '/profession/findByKtnameAndLabeltype',
    method: 'get',
    params: req
  })
}
export function findCaseList (req) { // 获取案例列表
  return request({
    url: 'caseInfo/getAllCaseName',
    method: 'get',
    params: req
  })
}
export function findCaseDetail (req) { // 获取案例详细信息
  return request({
    url: 'caseInfo/getCase',
    method: 'get',
    params: req
  })
}

export function getAllUserAnswers (req) { // 获取用户所有答案
  return request({
    url: '/user/getAllEvaluate',
    method: 'get',
    params: req
  })
}
export function getuserinfo (req) { // 获取用戶測評详细信息
  return request({
    url: '/testReport/showTestReportApi',
    method: 'get',
    params: req
  })
}
export function getCategoryList (req) { // 获取学科门类列表
  return request({
    url: '/majorInfo/getSubject',
    method: 'get',
    params: req
  })
}
export function getMajor (req) { // 获取具体专业
  return request({
    url: '/majorInfo/getMajor',
    method: 'get',
    params: req
  })
}
export function getMajorInfoDescribe (req) { // 获取专业信息
  return request({
    url: '/majorInfo/getMajorInfoDescribe',
    method: 'get',
    params: req
  })
}
export function getMajorInfoLike (req) { // 查询专业信息
  return request({
    url: '/majorInfo/getMajorInfoLike',
    method: 'get',
    params: req
  })
}
export function getCareerInfoLike (req) { // 查询专业信息
  return request({
    url: '/profession/getProfessionLike',
    method: 'get',
    params: req
  })
}
export function getListByName (req) { // 查询职业信息
  return request({
    url: '/profession/getListByName',
    method: 'get',
    params: req
  })
}
export function getCaseLike (req) { // 查询职业案例信息
  return request({
    url: '/caseInfo/getCaseLike',
    method: 'get',
    params: req
  })
}
export function getCaseNameByPro (req) { // 根据职业大类获得职业案例
  return request({
    url: '/caseInfo/getCaseNameByPro',
    method: 'get',
    params: req
  })
}
export function getMajorInfo (req) { // 根据id获取专业详细信息
  return request({
    url: '/majorInfo/getMajorInfo',
    method: 'get',
    params: req
  })
}
export function saveGreat (req) { // 保存点赞列表
  return request({
    url: '/great/saveGreat',
    method: 'get',
    params: req
  })
}
export function getGreatList (req) { // 根据用户id 获得点赞列表
  return request({
    url: '/great/getGreatList',
    method: 'get',
    params: req
  })
}
export function getStudentScore (req) { // 获得学生分数
  return request({
    url: '/studentscore/getStudentScore',
    method: 'get',
    params: req
  })
}
export function saveStudentScore (req) { // 保存学生分数
  return request({
    url: '/studentscore/saveStudentScore',
    method: 'get',
    params: req
  })
}
export function getListByzhiyId (req) { // 保存学生分数
  return request({
    url: '/profession/getListByzhiyId',
    method: 'get',
    params: req
  })
}
export function deleteStudentScore (req) { // 根据id删除学生成绩
  return request({
    url: '/studentscore/deleteStudentScore',
    method: 'get',
    params: req
  })
}
export function updateStudentScore (data) { // 根据id修改学生成绩
  return request({
    url: '/studentscore/updateStudentScore',
    method: 'post',
    params: data,
    dataType:'json',
    data:JSON.stringify(data),
    headers:{
      'content-Type':'application/json;',
    }
  })
}

