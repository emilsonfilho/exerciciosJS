Usando esta função, podemos dizer à bola para se desenhar na tela, chamando uma série de membros do contexto de tela 2D que definimos anteriormente (ctx). O contexto é como o papel, e agora queremos comandar nossa caneta para desenhar algo nele:

    Primeiro, usamos beginPath() para indicar que queremos desenhar uma forma no papel.
    Em seguida, usamos fillStyle para definir a cor que queremos que a forma tenha - definimos a propriedade color da nossa bola.
    Em seguida, usamos o método arc() para traçar uma forma de arco no papel. Seus parâmetros são:
        A posição x e y do centro do arco — estamos especificando as propriedades x e y da bola.
        O raio do arco — neste caso, a propriedade do tamanho da bola.
        Os dois últimos parâmetros especificam o número inicial e final de graus ao redor do círculo entre o qual o arco é desenhado. Aqui especificamos 0 graus e 2 * PI, que é o equivalente a 360 graus em radianos (irritantemente, você precisa especificar isso em radianos). Isso nos dá um círculo completo. Se você tivesse especificado apenas 1 * PI, obteria um semicírculo (180 graus).
    Por último, usamos o método fill(), que basicamente declara "terminar de desenhar o caminho que começamos com beginPath() e preencher a área que ocupa com a cor que especificamos anteriormente em fillStyle".

```javascript
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}


class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  draw() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}
}

```