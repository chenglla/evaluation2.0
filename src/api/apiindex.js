//输出通用axios实例
import axios from 'axios';

const instance = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': "application/json;charset=utf-8"
  }
});

export default {
  updateStudentScore(data) {
    return instance.post('https://zhongkeruitong.top/evaluate_new/evaluate_new/studentscore/updateStudentScore', JSON.stringify(data));
  },
}
