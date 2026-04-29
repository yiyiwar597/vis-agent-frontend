// 纯前端工具函数：评测指标计算、数据处理
export class VisUtils {
  // 计算准确率
  static calculateAccuracy(predicts, labels) {
    const correct = predicts.filter((p, i) => p === labels[i]).length;
    return (correct / predicts.length).toFixed(4);
  }

  // 模拟相似度计算
  static calculateSimilarity(pred, label) {
    return Math.random().toFixed(4);
  }

  // 格式化结果
  static formatResult(result) {
    return {
      score: Number(result.accuracy),
      task: result.task,
      timestamp: new Date().toISOString()
    };
  }
}
