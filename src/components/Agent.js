import { VisConfig } from "./Config.js";

// 纯前端视觉智能体调用组件
export class VisAgent {
  constructor() {
    this.config = VisConfig.model;
  }

  // 模拟调用视觉模型（前端可对接真实API）
  async invoke(imageData, prompt) {
    console.log(`🤖 调用模型：${this.config.type}`);
    // 模拟模型返回结果
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          answer: "模拟答案：100",
          success: true
        });
      }, 500);
    });
  }
}
