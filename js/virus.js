class Virus {
  constructor(_virus) {
    this.x = Math.random() * canvas.width;
    this.y = -100;
    this.rotation = 0;
    this.speedX = 0;
    this.speedY = Math.random() * 2 + 1;
    this.speedR = Math.random() + 0.5;
    this.width = Math.random() * 50 + 50;
    this.height = this.width;
    this.status = 1;
    this.virus = _virus;
  }
  draw() {
    ctx.drawImage(this.virus, this.x, this.y, this.width, this.height);
  }
  update() {
    if (this.x > canvas.width || this.y > canvas.height) {
      this.status = 0;
    }
    if (pointX > this.x && pointX < this.x + this.width && pointY > this.y && pointY < this.y + this.height) {
      this.status = 0;
      score++;
      console.log(score);
    }
    this.x += this.speedX;
    this.y += this.speedY;
    this.rotation += this.speedR;
    this.draw();
  }
}
