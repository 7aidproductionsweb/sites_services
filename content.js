//$('#content').load('commonContent.html');

window.onload = (event) => {

    document.getElementById("header").innerHTML=`
<a class="logo" href="index.html" target="_self">
<div class="logo-image"></div>
<div class="marque"></div>
</a>
<div class="menu">
<a href="index.html#services" target="_self">SERVICES</a>
<a href="article.html" target="_self">BLOG</a>
<a href="a-propos.html" target="_self">A PROPOS</a>
<a href="projet-ia-local.html" target="_self">PROJET IA LOCAL</a>
</div>`;

document.getElementById("footer").innerHTML=`
<div class="footercontent">
  <div class="logo2">
    <div class="logo-image"></div>
    <div class="marque"></div>
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
</div>`;

};