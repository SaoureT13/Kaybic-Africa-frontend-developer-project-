# EasyTransfert - Frontend

Application web de gestion de transactions construite avec React et Vite.

## Tests d'intégration

Ce projet répond aux **Test 1** (Intégration UI) et **Test 2** (Consommation d'API) :

### Test 1 - Intégration UI
- Interface responsive affichant une liste de transactions
- Design moderne basé sur les spécifications du fichier `project_style.json`
- Code structuré et lisible avec composants réutilisables
- Animations et transitions fluides

### Test 2 - Consommation d'API
- Simulation d'appels API avec mock data
- Gestion des états de chargement (spinner)
- Gestion des erreurs avec possibilité de retry
- Affichage dynamique des données

## Fonctionnalités

- Affichage de la liste des transactions
- Badges de statut (Succès, Échoué, En attente)
- Affichage des opérateurs source et destination
- Interface responsive (mobile, tablette, desktop)
- États de chargement et d'erreur
- Animation au survol des cartes

## Technologies utilisées

- React 18
- Vite (build tool)
- Tailwind CSS 4 (styling utility-first)
- API mockée pour la simulation

## Structure du projet

```
frontend/
├── src/
│   ├── components/
│   │   ├── TransactionCard.jsx    # Composant carte de transaction
│   │   └── TransactionList.jsx    # Composant liste avec gestion d'état
│   ├── services/
│   │   └── api.js                 # Service API mockée
│   ├── mockData.js                # Données de test
│   ├── App.jsx                    # Composant principal
│   ├── index.css                  # Directives Tailwind & styles globaux
│   └── main.jsx                   # Point d'entrée
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js             # Configuration Tailwind CSS
├── postcss.config.js              # Configuration PostCSS
└── project_style.json             # Guide de style du projet
```

## Installation

1. Installer les dépendances :
```bash
npm install
```

## Démarrage

Lancer le serveur de développement :
```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## Build de production

Créer un build optimisé pour la production :
```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

## Preview du build

Pour prévisualiser le build de production localement :
```bash
npm run preview
```

## Format des données de transaction

```json
{
  "id": "9a1f4231-110a-41dc-8f59-d1c11d7774b6",
  "reference": "EFB.75981007",
  "amount": 5000,
  "status": true,
  "from_operator": "orange",
  "to_operator": "wave",
  "created_at": "2025-12-16T22:07:16.224Z"
}
```

## Gestion des états

L'application gère 4 états principaux :

1. **Chargement** : Affichage d'un spinner pendant la récupération des données
2. **Succès** : Affichage de la liste des transactions
3. **Erreur** : Message d'erreur avec bouton de retry
4. **Vide** : Message informatif si aucune transaction

## Design System

Le projet suit le guide de style défini dans `project_style.json` et configuré dans Tailwind CSS :

- **Couleur primaire** : #1768AB
- **Fonts** : Outfit (titres), Poppins (texte)
- **Border radius** : 12px (cartes), 8px (boutons)
- **Statuts** : Succès (#4CAF50), Échoué (#F44336), En attente (#FFA500)

Toutes ces valeurs sont définies dans `tailwind.config.js` et utilisées via des classes utilitaires Tailwind.

## API Mockée

Le service API simule :
- Délai de latence réseau (1s)
- Erreurs aléatoires (10% de chance)
- Méthodes disponibles :
  - `getTransactions()` : Récupère toutes les transactions
  - `getTransactionById(id)` : Récupère une transaction spécifique
  - `getTransactionsByStatus(status)` : Filtre par statut

## Responsive Design

L'interface s'adapte à toutes les tailles d'écran :
- **Desktop** : Layout horizontal complet
- **Tablette** : Adaptation des espacements
- **Mobile** : Layout vertical optimisé

## Déploiement

Pour déployer sur des plateformes comme Vercel, Netlify ou GitHub Pages :

1. Build le projet : `npm run build`
2. Déployer le contenu du dossier `dist/`

### Exemple avec Vercel

```bash
npm install -g vercel
vercel --prod
```

### Exemple avec Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## Améliorations futures

- Filtrage par statut
- Recherche par référence
- Pagination
- Export des données
- Thème sombre
- Détails de transaction en modal

## Auteur

Projet EasyTransfert

## Licence

MIT
