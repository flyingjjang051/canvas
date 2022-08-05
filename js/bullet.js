class Bullet {
  constructor(_bullet, _x, _y) {
    this.x = _x;
    this.y = _y;
    this.speedY = 10;
    this.width = 16;
    this.height = this.width;
    this.status = 1;
    this.bullet = _bullet;
  }
  draw() {
    ctx.drawImage(this.bullet, this.x, this.y, this.width, this.height);
  }
  update() {
    this.y -= this.speedY;
    this.draw();
  }
}
