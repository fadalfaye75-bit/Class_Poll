/**@taper{import('tailwindcss').Config} */
exporter défaut {
  contenu:[
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}"
  ],
  thème:{
    étendre:{
      espacement:{
        « zone sécurisée »:'env(safe-area-inset-bottom)',
Il y a 49 minutes

Refactorisation : Amélioration des éléments d’interface utilisateur et des dépendances
      },
      couleurs:{
        // Remplacement de 'indigo' par une palette 'Ocean Professional'
        // C'est un bleu plus profond et plus sérieux, utilisé par les grandes entreprises tech.
        indigo:{
          50:'#f0f9ff',
          100:'#e0f2fe',
          200:'#bae6fd',
          300:'#7dd3fc',
          400:'#38bdf8',
          500:'#0ea5e9', // Bleu ciel vibrant pour les accents
          600:'#0284c7', // Couleur primaire (boutons, liens)
          700:'#0369a1', // Survoler
          800:'#075985',
          900:'#0c4a6e',
          950:'#082f49',
        },
        ardoise:{
            850:'#1e293b', // Gris ardoise pour les en-têtes
        }
      },
      boîteShadow:{
        'doux':'0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
        'briller':'0 0 15px rgba(14, 165, 233, 0.3)',
il y a 8 heures

Fonction : Initialiser la structure du projet ClassPoll+
      }
    },
  },
  plugins:[],
}