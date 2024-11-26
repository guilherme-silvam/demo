document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
  
    links.forEach(link => {
      link.addEventListener("click", event => {
        const href = link.getAttribute("href");
  
        // Se o link é uma âncora (#), não recarregue a página
        if (href.startsWith("#")) {
          event.preventDefault(); // Impede o comportamento padrão
          const target = document.querySelector(href);
  
          if (target) {
            // Suave para a seção desejada
            target.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          // Caso contrário, é uma nova página; faz o fade-out
          event.preventDefault();
          document.body.classList.add("fade-out");
  
          setTimeout(() => {
            window.location.href = href;
          }, 500); // Ajuste o tempo para coincidir com o CSS
        }
      });
    });
  });
  