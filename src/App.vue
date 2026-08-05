<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { copy, siteConfig, type Language } from './content'

const storedLanguage = window.localStorage.getItem('chillcoqui-language')
const language = ref<Language>(storedLanguage === 'es' ? 'es' : 'en')
const menuOpen = ref(false)
const emailCopied = ref(false)
const content = computed(() => copy[language.value])

function toggleLanguage() {
  language.value = language.value === 'en' ? 'es' : 'en'
}

function closeMenu() {
  menuOpen.value = false
}

async function copyEmail() {
  await navigator.clipboard.writeText(siteConfig.email)
  emailCopied.value = true
  window.setTimeout(() => { emailCopied.value = false }, 2200)
}

watch(language, (value) => {
  window.localStorage.setItem('chillcoqui-language', value)
  document.documentElement.lang = value
})

onMounted(() => {
  document.documentElement.lang = language.value
})
</script>

<template>
  <main>
    <header class="site-header">
      <a class="brand" href="#about" aria-label="ChillCoqui home" @click="closeMenu">
        <img :src="siteConfig.assets.logo" alt="ChillCoqui" />
      </a>

      <button class="menu-button" :aria-expanded="menuOpen" :aria-label="menuOpen ? content.close : content.menu" @click="menuOpen = !menuOpen">
        <span></span><span></span>
      </button>

      <nav :class="['main-nav', { 'is-open': menuOpen }]" aria-label="Main navigation">
        <a href="#about" @click="closeMenu">{{ content.nav.about }}</a>
        <a href="#games" @click="closeMenu">{{ content.nav.games }}</a>
        <a href="#contact" @click="closeMenu">{{ content.nav.contact }}</a>
        <button class="language-button" type="button" @click="toggleLanguage">{{ content.language }}</button>
      </nav>
    </header>

    <section id="about" class="hero section-shell">
      <div class="hero-copy">
        <p class="eyebrow"><span class="spark">✦</span> {{ content.eyebrow }}</p>
        <h1>{{ content.heroTitle }} <em>{{ content.heroAccent }}</em></h1>
        <p class="hero-description">{{ content.heroBody }}</p>
        <a class="button button-primary" href="#games">{{ content.explore }} <span aria-hidden="true">↓</span></a>
        <a class="scroll-hint" href="#games"><span></span>{{ content.scrollHint }}</a>
      </div>
      <div class="abstract-art" aria-hidden="true">
        <div class="abstract-shape shape-coral"></div>
        <div class="abstract-shape shape-mint"></div>
        <div class="abstract-shape shape-gold"></div>
        <span class="abstract-spark spark-one">✦</span>
        <span class="abstract-spark spark-two">✦</span>
        <span class="abstract-spark spark-three">•</span>
      </div>
    </section>

    <section class="about section-shell section-grid">
      <div class="section-intro">
        <p class="eyebrow">{{ content.aboutKicker }}</p>
        <h2>{{ content.aboutTitle }}</h2>
      </div>
      <div class="about-copy">
        <p>{{ content.aboutOne }}</p>
        <p>{{ content.aboutTwo }}</p>
        <p class="approach">{{ content.approach }}</p>
      </div>
    </section>

    <section id="games" class="games-section">
      <div class="section-shell">
        <div class="games-heading">
          <div><p class="eyebrow">{{ content.gamesKicker }}</p><h2>{{ content.gamesTitle }}</h2></div>
          <img class="game-icon" :src="siteConfig.assets.gameIcon" alt="Paws & Seek: Animal Finder icon" />
        </div>
        <div class="game-feature">
          <div class="game-promo-wrap"><img class="game-promo" :src="siteConfig.assets.promotion" alt="Paws & Seek: Animal Finder promotional art" /></div>
          <div class="game-copy">
            <p class="game-intro">{{ content.gameIntro }}</p>
            <h3>{{ content.featuresTitle }}</h3>
            <ul><li v-for="feature in content.features" :key="feature"><span>✦</span>{{ feature }}</li></ul>
            <a class="button button-store" :href="siteConfig.googlePlay" target="_blank" rel="noopener noreferrer"><span class="play-triangle">▶</span>{{ content.play }}</a>
          </div>
        </div>
        <div class="screenshots-block"><p class="eyebrow">{{ content.screenshots }}</p><div class="screenshots"><img v-for="(screenshot, index) in siteConfig.assets.screenshots" :key="screenshot" :src="screenshot" :alt="`Paws & Seek game screenshot ${index + 1}`" loading="lazy" /></div></div>
      </div>
    </section>

    <section id="contact" class="contact-section section-shell">
      <p class="eyebrow">{{ content.contactKicker }}</p><h2>{{ content.contactTitle }}</h2><p>{{ content.contactBody }}</p>
      <button class="button button-primary copy-email" type="button" @click="copyEmail"><span>{{ siteConfig.email }}</span><span aria-hidden="true">⧉</span></button>
      <p class="copy-status" aria-live="polite">{{ emailCopied ? content.copied : content.email }}</p>
      <div class="socials"><span>{{ content.follow }}</span><a :href="siteConfig.instagram" target="_blank" rel="noopener noreferrer">Instagram</a><a :href="siteConfig.youtube" target="_blank" rel="noopener noreferrer">YouTube</a></div>
    </section>
  </main>
  <footer><img :src="siteConfig.assets.logo" alt="ChillCoqui" /><p>{{ content.rights }}</p></footer>
</template>
