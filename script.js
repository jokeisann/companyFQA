// 详情页点击展开收起
document.addEventListener("DOMContentLoaded", function () {
    const detailsElements = document.querySelectorAll("details");

    detailsElements.forEach((detail) => {
    detail.addEventListener("toggle", function () {
    if (this.open) {
    detailsElements.forEach((otherDetail) => {
    if (otherDetail !== this) {
    otherDetail.removeAttribute("open");
                        }
                      });
                    }
                  });
                });
});
              

// 让页面随窗口缩放
function scalew() {
  console.log("scalew() 执行了"); // 检查是否调用了
  const w = document.querySelector('.w');
  if (!w) {
    console.log("没有找到 .w 元素");
    return;
  }

  const baseWidth = 1440;
  const baseHeight = 1024;
  const scaleX = window.innerWidth / baseWidth;
  const scaleY = window.innerHeight / baseHeight;
  const scale = Math.min(scaleX, scaleY);

  w.style.transform = `translate(-50%, -50%) scale(${scale})`;  // 确保居中和缩放都应用
}

window.addEventListener('resize', scalew);
scalew();


