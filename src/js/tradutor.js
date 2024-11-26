const translations = {
    "en": {
      "home": "HOME",
      "about-us": "ABOUT US",
      "brands": "BRANDS",
      "vision": "VISION",
      "coming-soon": "Marine Outlet USA: Coming Soon!",
      "hero-description": "The ultimate outlet for all your maritime needs is almost here.",
      "welcome": "Welcome to Marine Outlet USA:",
      "trusted-partner": "Your Trusted Partner in the Nautical Market",
      "mission": "At Marine Outlet USA, we are committed to redefining the boating experience for the American market. Founded by a seasoned expert with over 35 years of experience in the nautical industry, our mission is to provide exceptional value to our customers by offering a curated selection of products at fair and competitive prices.",
      "values": "We understand the needs of boating enthusiasts and professionals alike, which is why we prioritize top-notch customer service and a seamless post-sale experience. From high-quality marine equipment to essential accessories, every item in our store reflects our dedication to quality, affordability, and reliability.",
      "shipping": "With ultra-fast shipping, we ensure that your purchases arrive when you need them—because we know time on the water is priceless. Whether you’re outfitting your vessel for the season or upgrading your gear, Marine Outlet is here to make your journey smooth and worry-free.",
      "value": "Marine Outlet USA: Affordable. Reliable. Ready to Ship. Explore our online store today and experience the difference of working with a team that truly understands the nautical lifestyle.",
      "learn-more": "learn more",
      "our-partners": "Our Partners",
      "partners-description": "At Marine Outlet USA, we take pride in partnering with top brands to bring you the best products. Below, you can find the logos of the exceptional companies we represent.",
      "countdown-title": "Get ready, our website will be available soon!",
      "exclusive-updates-title": "The first 100 will receive exclusive updates via email!",
      "exclusive-updates-text": "Stay tuned and sign up to not miss any updates. We’re really excited to share our new website with you!"
    },
    "es": {
      "home": "INICIO",
      "about-us": "SOBRE NOSOTROS",
      "brands": "MARCAS",
      "vision": "VISIÓN",
      "coming-soon": "¡Marine Outlet USA: Próximamente!",
      "hero-description": "El outlet definitivo para todas tus necesidades marítimas está casi aquí.",
      "welcome": "Bienvenido a Marine Outlet USA:",
      "trusted-partner": "Tu socio de confianza en el mercado náutico",
      "mission": "En Marine Outlet USA, estamos comprometidos a redefinir la experiencia de navegación para el mercado estadounidense. Fundada por un experto con más de 35 años de experiencia en la industria náutica, nuestra misión es ofrecer un valor excepcional a nuestros clientes mediante una selección de productos a precios justos y competitivos.",
      "values": "Entendemos las necesidades de los entusiastas de la navegación y los profesionales, por lo que priorizamos un servicio al cliente de primera clase y una experiencia posterior a la venta sin inconvenientes. Desde equipos náuticos de alta calidad hasta accesorios esenciales, cada artículo en nuestra tienda refleja nuestro compromiso con la calidad, la asequibilidad y la fiabilidad.",
      "shipping": "Con envíos ultrarrápidos, nos aseguramos de que tus compras lleguen cuando las necesites, porque sabemos que el tiempo en el agua no tiene precio. Ya sea que estés equipando tu embarcación para la temporada o mejorando tu equipo, Marine Outlet está aquí para que tu viaje sea tranquilo y sin preocupaciones.",
      "value": "Marine Outlet USA: Asequible. Confiable. Listo para enviar. Explora nuestra tienda en línea hoy y experimenta la diferencia de trabajar con un equipo que realmente entiende el estilo de vida náutico.",
      "learn-more": "saber más",
      "our-partners": "Nuestros socios",
      "partners-description": "En Marine Outlet USA, nos enorgullece asociarnos con las mejores marcas para ofrecerte los mejores productos. A continuación, puedes ver los logotipos de las empresas excepcionales que representamos.",
      "countdown-title": "¡Prepárate, nuestro sitio web estará disponible pronto!",
      "exclusive-updates-title": "¡Los primeros 100 recibirán actualizaciones exclusivas por correo electrónico!",
      "exclusive-updates-text": "Mantente atento y regístrate para no perderte ninguna actualización. Estamos muy emocionados de compartir nuestro nuevo sitio web contigo!"
    },
    "pt": {
      "home": "INÍCIO",
      "about-us": "SOBRE NÓS",
      "brands": "MARCAS",
      "vision": "VISÃO",
      "coming-soon": "Marine Outlet USA: Em breve!",
      "hero-description": "O outlet definitivo para todas as suas necessidades náuticas está quase aqui.",
      "welcome": "Bem-vindo ao Marine Outlet USA:",
      "trusted-partner": "Seu parceiro confiável no mercado náutico",
      "mission": "No Marine Outlet USA, estamos comprometidos em redefinir a experiência de navegação para o mercado americano. Fundado por um especialista com mais de 35 anos de experiência na indústria náutica, nossa missão é oferecer valor excepcional aos nossos clientes, oferecendo uma seleção de produtos com preços justos e competitivos.",
      "values": "Entendemos as necessidades dos entusiastas de navegação e profissionais, por isso priorizamos um atendimento ao cliente de primeira linha e uma experiência pós-venda sem complicações. Desde equipamentos náuticos de alta qualidade até acessórios essenciais, cada item em nossa loja reflete nosso compromisso com a qualidade, acessibilidade e confiabilidade.",
      "shipping": "Com envio ultra-rápido, garantimos que suas compras cheguem quando você precisar delas — porque sabemos que o tempo na água é precioso. Seja para equipar seu barco para a temporada ou melhorar seu equipamento, o Marine Outlet está aqui para tornar sua jornada tranquila e sem preocupações.",
      "value": "Marine Outlet USA: Acessível. Confiável. Pronto para enviar. Explore nossa loja online hoje e experimente a diferença de trabalhar com uma equipe que realmente entende o estilo de vida náutico.",
      "learn-more": "saiba mais",
      "our-partners": "Nossos parceiros",
      "partners-description": "No Marine Outlet USA, temos orgulho de nos associar com as melhores marcas para trazer os melhores produtos para você. Abaixo, você pode encontrar os logotipos das empresas excepcionais que representamos.",
      "countdown-title": "Prepare-se, nosso site estará disponível em breve!",
      "exclusive-updates-title": "Os primeiros 100 receberão atualizações exclusivas por e-mail!",
      "exclusive-updates-text": "Fique atento e se inscreva para não perder nenhuma atualização. Estamos muito animados para compartilhar nosso novo site com você!"
    }
  };
  
  document.getElementById("language-select").addEventListener("change", function(event) {
    const language = event.target.value;
    const elementsToTranslate = document.querySelectorAll("[data-translate]");
    
    elementsToTranslate.forEach((element) => {
      const translationKey = element.getAttribute("data-translate");
      if (translations[language] && translations[language][translationKey]) {
        element.innerText = translations[language][translationKey];
      }
    });
  });
  