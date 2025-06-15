# 🍎 Système d'Emojis/Icônes Unifié - La découverte de Jannounette

## 📋 Vue d'ensemble

Ce système garantit une **cohérence visuelle parfaite** pour tous les fruits et légumes utilisés dans l'application PWA "La découverte de Jannounette". Il combine les **emojis Apple iOS officiels** avec des **icônes personnalisées** de style Apple pour les aliments non disponibles dans la bibliothèque emoji standard.

## 🎯 Architecture du système

### 1. **Emojis Apple iOS Officiels** (Priorité 1)
Tous les fruits et légumes disponibles dans la bibliothèque emoji Apple utilisent leur emoji officiel :

**Fruits :**
- 🍎 Pomme, 🍌 Banane, 🍐 Poire, 🍑 Pêche/Abricot/Nectarine
- 🍒 Cerise/Groseille, 🍇 Raisin, 🍊 Orange/Mandarine/Clémentine
- 🍋 Citron, 🥝 Kiwi, 🍍 Ananas, 🥭 Mangue/Papaye
- 🍈 Melon, 🍉 Pastèque, 🥑 Avocat, 🥥 Noix de coco
- 🫐 Myrtille/Framboise/Mûre/Cranberry/Cassis, 🍓 Fraise

**Légumes :**
- 🥕 Carotte/Panais/Navet/Radis/Betterave, 🥒 Courgette/Concombre
- 🫛 Haricot vert/Petit pois, 🥦 Brocoli/Chou-fleur
- 🎃 Potiron/Courge butternut, 🍠 Patate douce, 🫑 Poivrons
- 🍆 Aubergine, 🥬 Laitue/Épinards/Choux, 🧅 Oignon/Poireau/Échalote
- 🧄 Ail, 🍄 Champignons, 🌽 Maïs, 🫚 Gingembre

### 2. **Icônes Personnalisées Style Apple** (Priorité 2)
Pour les aliments sans emoji Apple disponible, des icônes SVG personnalisées ont été créées :

**Caractéristiques des icônes :**
- ✅ Dégradés radiaux pour un effet 3D réaliste
- ✅ Couleurs harmonieuses et naturelles
- ✅ Style cohérent avec les emojis Apple iOS
- ✅ Taille optimisée (64x64px viewBox)
- ✅ Détails subtils et reconnaissables

**Fruits avec icônes personnalisées :**
- Prune, Framboise, Mûre, Pamplemousse, Papaye, Figue, Datte
- Cranberry, Cassis, Groseille, Litchi, Fruit de la passion
- Carambole, Goyave, Physalis, Mirabelle, Quetsche, Reine-claude
- Grenade, Abricot (version distincte)

**Légumes avec icônes personnalisées :**
- Haricot vert, Petit pois, Chou-fleur, Panais, Navet, Rutabaga
- Céleri-rave, Fenouil, Endive, Mâche, Roquette, Cresson
- Artichaut, Asperge, Radis, Chou rouge, Chou de Bruxelles
- Chou chinois, Blette, Poireau, Échalote, Topinambour, Betterave
- Poivron vert, Poivron jaune, Courge butternut

## 🔧 Utilisation du système

### API Centralisée : `EmojiManager`

```javascript
// Obtenir l'icône complète (HTML) d'un aliment
const iconHtml = EmojiManager.getAlimentIcon('Pomme');
// Retourne : <span class="food-emoji">🍎</span>

// Obtenir uniquement l'emoji (texte)
const emoji = EmojiManager.getAlimentEmoji('Pomme');
// Retourne : 🍎

// Vérifier si un aliment utilise une icône personnalisée
const hasCustom = EmojiManager.hasCustomIcon('Betterave');
// Retourne : true

// Obtenir tous les aliments avec leurs icônes
const allIcons = EmojiManager.getAllAlimentsWithIcons();
```

### Fonction Legacy (Compatibilité)

```javascript
// Fonction existante maintenue pour compatibilité
const icon = getAlimentIcon('Betterave');
```

## 📱 Cohérence Inter-Pages

Le système garantit que **chaque aliment utilise exactement la même représentation visuelle** sur toutes les pages :

- ✅ **Page Fruits** : Widgets d'aliments
- ✅ **Page Légumes** : Widgets d'aliments  
- ✅ **Calendrier** : Popup d'ajout et affichage des repas
- ✅ **Statistiques** : Graphiques et listes
- ✅ **Historique récent** : Liste des découvertes
- ✅ **Vue semaine** : Navigation calendrier

## 🎨 Styles CSS Associés

```css
/* Emojis standards */
.food-emoji {
    font-size: inherit;
    line-height: 1;
}

/* Icônes personnalisées */
.custom-icon {
    width: 1em;
    height: 1em;
    display: inline-block;
    vertical-align: middle;
}

/* Adaptations contextuelles */
.food-widget .custom-icon { width: 24px; height: 24px; }
.aliment-item .custom-icon { width: 16px; height: 16px; }
.calendar-popup .custom-icon { width: 20px; height: 20px; }
```

## 🔄 Maintenance et Évolution

### Ajouter un nouvel aliment :

1. **Si emoji Apple existe :** Ajouter dans `alimentsEmojis`
2. **Si pas d'emoji :** Créer icône SVG + ajouter dans `alimentsIconesPersonnalisees`
3. **Mettre à jour** `alimentsData` dans `script.js`

### Modifier une icône existante :

1. **Emoji :** Modifier dans `alimentsEmojis`
2. **Icône personnalisée :** Modifier le SVG dans `customIcons`

## 📊 Statistiques du système

- **Total aliments :** ~90 fruits et légumes
- **Emojis Apple iOS :** ~45 aliments (50%)
- **Icônes personnalisées :** ~45 aliments (50%)
- **Cohérence visuelle :** 100% garantie
- **Performance :** Optimisée (SVG vectoriel, cache navigateur)

## 🚀 Avantages

✅ **Cohérence parfaite** : Même aliment = même icône partout  
✅ **Style unifié** : Emojis Apple + icônes style Apple  
✅ **Performance optimale** : SVG légers, pas d'images externes  
✅ **Maintenance facile** : Système centralisé  
✅ **Évolutivité** : Ajout simple de nouveaux aliments  
✅ **Accessibilité** : Icônes reconnaissables et contrastées 