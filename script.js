const eyes = document.querySelectorAll(".eye");
const container = document.getElementById("container");

document.addEventListener("mousemove", (e) => {
  const { clientX: mouseX, clientY: mouseY } = e;
  const rect = container.getBoundingClientRect();
  const containerX = rect.left + rect.width / 2;
  const containerY = rect.top + rect.height / 2;

  const deg = getDeg(mouseX, mouseY, containerX, containerY);

  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${deg}deg)`;
  });
});

function getDeg(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}
