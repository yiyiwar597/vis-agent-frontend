// 纯前端结果可视化组件
export class VisViewer {
  // 渲染结果到页面
  static render(result) {
    const app = document.getElementById("app");
    app.innerHTML = `
      <div style="padding:20px;font-family:Arial">
        <h2>可视化智能体评测结果</h2>
        <p>准确率：${result.accuracy}</p>
        <h3>详细数据：</h3>
        <pre>${JSON.stringify(result.details, null, 2)}</pre>
      </div>
    `;
  }
}
