class Ship {
  constructor(_ship) {
    this.x = canvas.width / 2 - 32;
    this.y = canvas.height - 100;
    this.speedX = 0;
    this.width = 64;
    this.height = this.width;
    this.status = 1;
    this.ship = _ship;
  }
  draw() {
    ctx.drawImage(this.ship, this.x, this.y, this.width, this.height);
  }
  update() {
    this.x += this.speedX;
    this.draw();
  }
}
