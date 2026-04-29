import { VisAgent } from "./Agent.js";
import { VisDataset } from "./Dataset.js";
import { VisUtils } from "./Utils.js";
import { VisConfig } from "./Config.js";

// 纯前端评测引擎（核心组件）
export class VisBenchmark {
  constructor() {
    this.agent = new VisAgent();
    this.dataset = VisDataset.getDataset(VisConfig.benchmark.taskType);
    this.results = [];
  }

  // 运行完整评测
  async run() {
    console.log("🚀 纯前端评测开始");
    const predicts = [];
    const labels = [];

    for (const item of this.dataset) {
      const res = await this.agent.invoke(null, item.question);
      predicts.push(res.answer);
      labels.push(item.label);
      this.results.push({ ...item, predict: res.answer });
    }

    // 前端计算指标
    const accuracy = VisUtils.calculateAccuracy(predicts, labels);
    const finalResult = { accuracy, details: this.results };
    
    console.log("✅ 评测完成", finalResult);
    return finalResult;
  }
}
