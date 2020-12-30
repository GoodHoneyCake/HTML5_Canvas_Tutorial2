export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.speed = 0.1;
    this.current = 0;
    this.max = Math.random() * 100 + 150;
  }
  update() {
    this.current += this.speed;
    this.y = this.fixedY + Math.sin(this.current) * this.max;
  }
}
