// 纯前端静态数据集（无后端加载）
export class VisDataset {
  // 内置测试数据集（图表理解样例）
  static testData = [
    { id: 1, type: "bar_chart", question: "图表中最大值是多少？", label: "100" },
    { id: 2, type: "line_chart", question: "趋势是上升还是下降？", label: "上升" },
    { id: 3, type: "pie_chart", question: "占比最大的部分是？", label: "A类" }
  ];

  // 获取数据
  static getDataset(taskType = "chart_understanding") {
    console.log(`✅ 前端加载数据集：${taskType}`);
    return this.testData;
  }
}
