const counters = document.querySelectorAll('.value');
const speed = 200;

const options = {
  threshold: 0.5, // Umbral de visibilidad del 50%
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Si el elemento es visible en pantalla, inicia la animación
      const counter = entry.target;
      const animate = () => {
        const value = +counter.getAttribute('akhi');
        const data = +counter.innerText.replace(/\./g, '').replace('+', ''); // Elimina los puntos y el símbolo '+'

        const time = value / speed;
        if (data < value) {
          counter.innerText = (Math.ceil(data + time)).toLocaleString('de-DE') + '+'; // Agrega el símbolo '+'
          setTimeout(animate, 1);
        } else {
          counter.innerText = value.toLocaleString('de-DE') + '+'; // Agrega el símbolo '+'
        }
      };

      animate();

      // Después de iniciar la animación, deja de observar el elemento
      observer.unobserve(entry.target);
    }
  });
}, options);

// Observa cada contador
counters.forEach((counter) => {
  observer.observe(counter);
});