export type Language = 'en' | 'es'

export const siteConfig = {
  email: 'chillcoqui.dev@gmail.com',
  instagram: 'https://www.instagram.com/chillcoqui.dev',
  youtube: 'https://www.youtube.com/@ChillCoqui',
  googlePlay: 'https://play.google.com/store/apps/details?id=com.chillcoqui.pawsandseek',
  assets: {
    logo: '/chillcoqui-logo.png',
    gameIcon: '/paws-and-seek-icon.png',
    promotion: '/paws-and-seek-promo.jpg',
    screenshots: [
      '/finding_dog_1080x1920.png',
      '/big_finding_cat_1080x1920.png',
      '/achievements.png',
      '/game_menu.png',
    ],
  },
} as const

export const copy = {
  en: {
    language: 'ES', nav: { about: 'About', games: 'Games', contact: 'Contact' },
    eyebrow: 'Independent cozy games',
    heroTitle: 'Making every genre', heroAccent: 'cozy.',
    heroBody: 'ChillCoqui explores how familiar game genres can feel warmer, friendlier, and a little more relaxing — without losing their spark.',
    explore: 'Meet the latest game', scrollHint: 'Scroll to explore',
    aboutKicker: 'Hello, I’m ChillCoqui', aboutTitle: 'A softer way to play.',
    aboutOne: 'I’m an independent game developer creating games with a simple goal: making every genre a little more cozy, welcoming, and chill.',
    aboutTwo: 'Cozy games are not limited to one style. A game can still offer challenge, progression, discovery, and satisfying mechanics while giving players a warm and comfortable experience.',
    approach: 'That is what I’m exploring through ChillCoqui — one game at a time.',
    gamesKicker: 'Latest game', gamesTitle: 'Paws & Seek: Animal Finder',
    gameIntro: 'A cozy hidden-object game where players search for adorable dogs and cats across increasingly challenging rounds.',
    featuresTitle: 'A little joy in every round', features: ['Relaxing, colorful visuals', 'Quick, approachable rounds', 'High-score progression', 'Achievements to collect', 'An accessible Big Mode', 'Rare bonus animals that can grant an extra life'],
    play: 'Get it on Google Play', screenshots: 'A peek inside',
    contactKicker: 'Let’s stay in touch', contactTitle: 'Come say hello.', contactBody: 'Questions, feedback, or business inquiries? I’d love to hear from you.', email: 'Copy email address', copied: 'Email copied!', follow: 'Follow ChillCoqui',
    rights: '© 2026 ChillCoqui. All rights reserved.', menu: 'Open menu', close: 'Close menu',
  },
  es: {
    language: 'EN', nav: { about: 'Acerca de', games: 'Juegos', contact: 'Contacto' },
    eyebrow: 'Juegos indie acogedores',
    heroTitle: 'Haciendo cada género más', heroAccent: 'acogedor.',
    heroBody: 'ChillCoqui explora cómo los géneros de juego conocidos pueden sentirse más cálidos, amables y relajantes, sin perder su chispa.',
    explore: 'Conoce el juego más reciente', scrollHint: 'Desliza para explorar',
    aboutKicker: 'Hola, soy ChillCoqui', aboutTitle: 'Una forma más amable de jugar.',
    aboutOne: 'Soy un desarrollador independiente que crea juegos con un objetivo sencillo: hacer que cada género sea un poco más acogedor, agradable y tranquilo.',
    aboutTwo: 'Los juegos acogedores no se limitan a un solo estilo. Un juego puede seguir ofreciendo reto, progreso, descubrimiento y mecánicas satisfactorias, mientras brinda una experiencia cálida y confortable.',
    approach: 'Eso es lo que exploro a través de ChillCoqui — un juego a la vez.',
    gamesKicker: 'Juego más reciente', gamesTitle: 'Paws & Seek: Animal Finder',
    gameIntro: 'Un acogedor juego de objetos ocultos donde buscas adorables perros y gatos a través de rondas cada vez más desafiantes.',
    featuresTitle: 'Un poco de alegría en cada ronda', features: ['Visuales relajantes y coloridos', 'Rondas rápidas y accesibles', 'Progresión de puntuación alta', 'Logros para coleccionar', 'Un modo grande accesible', 'Animales raros que pueden otorgar una vida extra'],
    play: 'Consíguelo en Google Play', screenshots: 'Mira el juego',
    contactKicker: 'Mantengámonos en contacto', contactTitle: 'Ven a saludar.', contactBody: '¿Preguntas, comentarios o consultas de negocios? Me encantará saber de ti.', email: 'Copiar correo electrónico', copied: '¡Correo copiado!', follow: 'Sigue a ChillCoqui',
    rights: '© 2026 ChillCoqui. Todos los derechos reservados.', menu: 'Abrir menú', close: 'Cerrar menú',
  },
} as const
