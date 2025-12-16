# Mini application web dans le cadre du test pour le poste de Frontend Developer

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
- Tailwind CSS 4
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
│   ├── index.css                  # Directives Tailwind & styles
```

## Installation

1. **Cloner le projet**

    ```bash
    git clone https://github.com/SaoureT13/Kaybic-Africa-frontend-developer-project.git
    cd backend
    ```

2. **Installer les dépendances**

    ```bash
    npm install
    ```

3. **Lancer le serveur**
    ```bash
    npm run dev
    ```

L'application sera accessible sur `http://localhost:5173`.

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
