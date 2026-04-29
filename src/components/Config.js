// 纯前端全局配置组件
export const VisConfig = {
  // 模型配置
  model: {
    type: "gpt-4v",
    apiKey: "", // 用户自行填写
    maxTokens: 1024
  },
  // 评测配置
  benchmark: {
    taskType: "chart_understanding",
    metrics: ["accuracy", "similarity"]
  },
  // 前端渲染配置
  ui: {
    theme: "light",
    showResult: true
  }
};

// 导出修改配置方法
export function updateConfig(newConfig) {
  Object.assign(VisConfig, newConfig);
  return VisConfig;
}
