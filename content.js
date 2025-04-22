//$('#content').load('commonContent.html');

window.onload = (event) => {

  const headerHTML = `
<a class="logo" href="index.html" target="_self">
<div class="logo-image"></div>
<div class="marque"></div>
</a>
<button class="menu-toggle" id="menuToggle">☰</button>
<div class="menu" id="menu">
<a href="index.html#services" target="_self">SERVICES</a>
<a href="article.html" target="_self">BLOG</a>
<a href="a-propos.html" target="_self">A PROPOS</a>
<a href="projet-ia-local.html" target="_self">PROJET IA LOCAL</a>
</div>
`;

  document.getElementById("header").innerHTML = headerHTML;

  document.getElementById("footer").innerHTML = `
<div class="footercontent">
  <div class="logo2">
    <div class="logo-image"></div>
    <div class="marque"></div>
  </div>
  <div class="footer-realisation" style="text-align: left; margin-top: 10px; margin-left: 10vw; max-width: 50vw;">
    Ce site a été entièrement réalisé à l'aide de 
    <a href="https://openai.com/" target="_blank" style="color: yellow;">CHATGPT d'OPENAI</a> et 
    <a href="https://www.anthropic.com/" target="_blank" style="color: yellow;">Claude d'ANTHROPIC</a>
  </div>
  <div class="termes-et-conditions-container" style="text-align: center; margin-top: 10px;">
    <a class="termes-et-conditions" href="https://7aidproductionsweb.github.io/cguweb" target="_blank" style="display: block; color: white; margin-bottom: 10px;">
      Termes et conditions d'utilisation du site
    </a>
    <a class="termes-et-conditions" href="https://7aidproductionsweb.github.io/privacysiteweb" target="_blank" style="display: block; color: white;">
      Politique de confidentialité
    </a>
  </div>
</div>
<div class="ai-marketing-droits" style="text-align: center; margin-top: 20px;">
  Tous droits réservés 2025
</div>
`;

const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");
  
  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("active");
      
      // Optionnel: changer l'icône du bouton hamburger
      if (menu.classList.contains("active")) {
        menuToggle.innerHTML = "✕"; // Croix quand le menu est ouvert
      } else {
        menuToggle.innerHTML = "☰"; // Hamburger quand le menu est fermé
      }
    });
    
    // Fermer le menu en cliquant sur un lien
    const menuLinks = menu.querySelectorAll("a");
    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        menuToggle.innerHTML = "☰";
      });
    });
  }
};
