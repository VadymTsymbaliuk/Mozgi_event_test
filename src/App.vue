<template>
  <div class="body">
    <header>
      <div class="select__language-container">
        <div class="chose__language" @mouseover="changeLanguage">👅</div>
        <div class="drop__language">
          <div class="ua">ua</div>
          <div class="ru">ru</div>
        </div>
      </div>
      <div class="logo__container">
        <svg width="47" height="26" viewBox="0 0 47 26" class="logo" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <g id="mask" fill="#fff">
              <path id="path"
                    d="M16.4685 3.37717L20.8829 2.63031V17.8172L16.4685 17.0703V3.37717ZM14.5848 1.49379V18.9538L22.7665 20.4475V0L14.5848 1.49379ZM38.5448 10.0455V11.9279H41.1035V17.0711H36.4676V3.38508H40.4361V6.18469H42.3187V1.50274H34.5849V18.9534H42.9862V10.0455H38.5448ZM6.77874 15.5004L6.78908 15.5469C7.82331 10.8445 8.85409 6.1608 9.8797 1.50307H12.702V18.9536H10.8194V5.32289C10.7918 5.32289 7.68562 18.9624 7.68562 18.9624H5.87186C5.87186 18.9624 2.76564 5.32289 2.73816 5.32289V18.9536H0.855469V1.50307H3.67769C4.70339 6.1608 5.73426 10.8445 6.76849 15.5469L6.77257 15.5283L6.77874 15.5004ZM30.6573 3.39309H24.8761V1.51075H32.6985V3.39309L26.9171 17.079H32.6985V18.9614H24.8761V17.079L30.6573 3.39309ZM46.7539 18.9534H44.8711V1.50275H46.7539V18.9534ZM17.4461 25.374V25.0846H15.9525V24.2124H17.1106V23.923H15.9525V23.1428H17.3896V22.8534H15.6347V25.374H17.4461ZM18.9251 22.8533H19.2606L19.9491 25.0491H20.1257L20.8141 22.8533H21.1426L20.3374 25.374H19.7301L18.9251 22.8533ZM24.584 25.374V25.0846H23.0904V24.2124H24.2487V23.923H23.0904V23.1428H24.5276V22.8534H22.7727V25.374H24.584ZM28.3732 22.8533V25.374H27.8719L26.6997 23.2664H26.6218V25.374H26.3113V22.8533H26.8126L27.9848 24.961H28.0625V22.8533H28.3732ZM31.1494 23.1358H31.9757V22.8533H29.9984V23.1358H30.8315V25.374H31.1494V23.1358Z"/>
            </g>
            <mask id="logoMask">
              <use xlink:href="#mask" overflow="visible"/>
            </mask>
          </defs>
          <g mask="url(#logoMask)">
            <use xlink:href="#path" width="47" height="26" overflow="visible" stroke="#000" stroke-width="0.5"
                 fill="none"/>
            <rect width="47" height="26" fill="#000" class="logo-shader"/>
          </g>
        </svg>
      </div>
      <div class="nav__container">
        <nav class="nav_bar">
          <ul class="navbar-nav">
            <li class="navbar-item">
              <a href="#">where?</a>
            </li>
            <li class="navbar-item">
              <a href="#">who?</a>
            </li>
            <li class="navbar-item">
              <a href="#">what?</a>
            </li>
          </ul>
          <button class="toggle__menu toggle__animation">
            <span></span>
          </button>
        </nav>
      </div>

    </header>
    <main>
      <div class="container">
        <div class="text__content">
          <h1>
            FULL-CYCLE <br/>EVENT AGENCY
          </h1>

          <div class="tape__container">
            <div class="top__tape">
              <span>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</span>
            </div>
            <div class="bottom__tape">
              <span>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</span>
            </div>
          </div>
          <div class="show-reel__container">
            <img src="../src/assets/img/cirkle.svg" alt="circle">
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
window.addEventListener("DOMContentLoaded", () => {
  const logoAnim = document.querySelector('.logo-shader')
  logoAnim.style.animation = "slideUp 2s ease-out 1";
  logoAnim.style.transform = "translateY(0%)";
})

export default {
  name: 'App',
  methods: {
    logoAnimation() {

    },
    changeLanguage() {
      console.log("change language")
    }
  }
}
</script>

<style>

</style>
