// Função para gerar uma cor aleatória em formato hexadecimal
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Função para aplicar gradiente aos blocos
function applyGradientToBlocks() {
  for (let i = 1; i <= 23; i++) {
    const bloco = document.querySelector(`.bloco${i}`);
    if (bloco) {
      const color1 = getRandomColor();
      const color2 = getRandomColor();
      const gradient = `linear-gradient(256deg, rgba(${hexToRgb(color1).r}, ${hexToRgb(color1).g}, ${hexToRgb(color1).b}, 0.00) 17.22%, rgba(${hexToRgb(color2).r}, ${hexToRgb(color2).g}, ${hexToRgb(color2).b}, 0.20) 68.99%), linear-gradient(116deg, ${color1} 1.97%, ${color2} 54.33%)`;
      bloco.style.background = gradient;
    }
  }
}

// Função para converter cor hexadecimal para RGB
function hexToRgb(hex) {
  let bigint = parseInt(hex.slice(1), 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;
  return { r, g, b };
}

// Chama a função quando o documento está carregado
document.addEventListener('DOMContentLoaded', applyGradientToBlocks);
