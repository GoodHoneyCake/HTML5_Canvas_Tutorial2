export class Point {
  constructor(index, x, y) {
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.speed = 0.1;
    this.current = index;
    this.max = Math.random() * 1000 + 150;
  }
  update() {
    this.current += this.speed;
    this.y = this.fixedY + Math.sin(this.current) * this.max;
  }
}
