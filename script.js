// Base de données complète des aliments pour bébé
const alimentsData = {
    fruits: [
        { nom: "Pomme", emoji: "🍎", bienfaits: "Riche en fibres et vitamine C" },
        { nom: "Banane", emoji: "🍌", bienfaits: "Potassium et énergie" },
        { nom: "Poire", emoji: "🍐", bienfaits: "Digestion facile, fibres" },
        { nom: "Pêche", emoji: "🍑", bienfaits: "Vitamine A et C" },
        { nom: "Abricot", emoji: "🍑", bienfaits: "Bêta-carotène" }, // Utilise l'emoji pêche car pas d'abricot spécifique
        { nom: "Prune", emoji: "🟣", bienfaits: "Fibres et antioxydants" }, // Icône personnalisée

        { nom: "Framboise", emoji: "🫐", bienfaits: "Antioxydants puissants" }, // Icône personnalisée
        { nom: "Myrtille", emoji: "🫐", bienfaits: "Mémoire et vision" },
        { nom: "Mûre", emoji: "🫐", bienfaits: "Vitamine K et fibres" }, // Icône personnalisée
        { nom: "Cerise", emoji: "🍒", bienfaits: "Anti-inflammatoire" },
        { nom: "Raisin", emoji: "🍇", bienfaits: "Énergie naturelle" },
        { nom: "Orange", emoji: "🍊", bienfaits: "Vitamine C boost" },
        { nom: "Mandarine", emoji: "🍊", bienfaits: "Vitamine C douce" }, // Utilise orange car similaire
        { nom: "Clémentine", emoji: "🍊", bienfaits: "Facile à digérer" }, // Utilise orange car similaire
        { nom: "Citron", emoji: "🍋", bienfaits: "Vitamine C intense" },
        { nom: "Pamplemousse", emoji: "🍊", bienfaits: "Antioxydants" }, // Utilise icône personnalisée
        { nom: "Kiwi", emoji: "🥝", bienfaits: "Vitamine C record" },
        { nom: "Ananas", emoji: "🍍", bienfaits: "Enzymes digestives" },
        { nom: "Mangue", emoji: "🥭", bienfaits: "Vitamine A et E" },
        { nom: "Papaye", emoji: "🥭", bienfaits: "Digestion optimale" }, // Utilise icône personnalisée
        { nom: "Melon", emoji: "🍈", bienfaits: "Hydratation douce" },
        { nom: "Pastèque", emoji: "🍉", bienfaits: "Hydratation intense" },
        { nom: "Avocat", emoji: "🥑", bienfaits: "Bonnes graisses" },
        { nom: "Figue", emoji: "🟣", bienfaits: "Calcium naturel" }, // Utilise icône personnalisée
        { nom: "Datte", emoji: "🟫", bienfaits: "Énergie concentrée" }, // Utilise icône personnalisée
        { nom: "Noix de coco", emoji: "🥥", bienfaits: "Électrolytes" },
        { nom: "Grenade", emoji: "🟣", bienfaits: "Super antioxydants" }, // Utilise icône personnalisée
        { nom: "Cranberry", emoji: "🫐", bienfaits: "Voies urinaires" }, // Utilise myrtille car similaire
        { nom: "Cassis", emoji: "🫐", bienfaits: "Vitamine C intense" }, // Utilise myrtille car similaire
        { nom: "Groseille", emoji: "🍒", bienfaits: "Acide folique" }, // Utilise cerise car similaire
        { nom: "Litchi", emoji: "🟣", bienfaits: "Vitamine C exotique" }, // Utilise icône personnalisée
        { nom: "Fruit de la passion", emoji: "🟡", bienfaits: "Vitamine A" }, // Utilise icône personnalisée
        { nom: "Carambole", emoji: "⭐", bienfaits: "Vitamine C légère" }, // Utilise icône personnalisée
        { nom: "Goyave", emoji: "🟢", bienfaits: "Vitamine C record" }, // Utilise icône personnalisée
        { nom: "Physalis", emoji: "🟡", bienfaits: "Antioxydants rares" }, // Utilise icône personnalisée
        { nom: "Nectarine", emoji: "🍑", bienfaits: "Peau lisse, vitamine A" },
        { nom: "Mirabelle", emoji: "🍑", bienfaits: "Douce et sucrée" }, // Utilise pêche car similaire
        { nom: "Quetsche", emoji: "🟣", bienfaits: "Fibres douces" }, // Utilise icône personnalisée
        { nom: "Reine-claude", emoji: "🍑", bienfaits: "Digestion facile" } // Utilise pêche car similaire
    ],
    legumes: [
        { nom: "Carotte", emoji: "🥕", bienfaits: "Bêta-carotène, vision" },
        { nom: "Courgette", emoji: "🥒", bienfaits: "Douce et digestible" },
        { nom: "Haricot vert", emoji: "🫛", bienfaits: "Fibres et vitamines" },
        { nom: "Petit pois", emoji: "🫛", bienfaits: "Protéines végétales" }, // Utilise haricot car similaire
        { nom: "Brocoli", emoji: "🥦", bienfaits: "Vitamine K et C" },
        { nom: "Chou-fleur", emoji: "🥦", bienfaits: "Vitamine C et folates" }, // Utilise icône personnalisée

        { nom: "Potiron", emoji: "🎃", bienfaits: "Bêta-carotène doux" },
        { nom: "Courge butternut", emoji: "🎃", bienfaits: "Vitamines A et C" }, // Utilise icône personnalisée
        { nom: "Patate douce", emoji: "🍠", bienfaits: "Glucides complexes" },

        { nom: "Panais", emoji: "🥕", bienfaits: "Fibres et potassium" }, // Utilise icône personnalisée
        { nom: "Navet", emoji: "🥕", bienfaits: "Vitamine C douce" }, // Utilise icône personnalisée
        { nom: "Rutabaga", emoji: "🥔", bienfaits: "Vitamine C et fibres" }, // Utilise icône personnalisée
        { nom: "Céleri-rave", emoji: "🥔", bienfaits: "Potassium et fibres" }, // Utilise icône personnalisée
        { nom: "Fenouil", emoji: "🥬", bienfaits: "Digestion apaisante" }, // Utilise icône personnalisée
        { nom: "Endive", emoji: "🥬", bienfaits: "Fibres et vitamine K" }, // Utilise icône personnalisée
        { nom: "Mâche", emoji: "🥬", bienfaits: "Oméga-3 végétaux" }, // Utilise icône personnalisée
        { nom: "Laitue", emoji: "🥬", bienfaits: "Hydratation et fibres" },
        { nom: "Roquette", emoji: "🥬", bienfaits: "Vitamine K intense" }, // Utilise icône personnalisée
        { nom: "Cresson", emoji: "🥬", bienfaits: "Fer et vitamine C" }, // Utilise icône personnalisée
        { nom: "Artichaut", emoji: "🫒", bienfaits: "Fibres et antioxydants" }, // Utilise icône personnalisée
        { nom: "Asperge", emoji: "🥬", bienfaits: "Acide folique" }, // Utilise icône personnalisée
        { nom: "Aubergine", emoji: "🍆", bienfaits: "Antioxydants violets" },
        { nom: "Concombre", emoji: "🥒", bienfaits: "Hydratation pure" },

        { nom: "Poivron rouge", emoji: "🔴", bienfaits: "Vitamine C max" }, // Utilise icône personnalisée rouge
        { nom: "Poivron jaune", emoji: "🟡", bienfaits: "Caroténoïdes" }, // Utilise icône personnalisée jaune
        { nom: "Poivron vert", emoji: "🟢", bienfaits: "Vitamine C fraîche" }, // Utilise icône personnalisée verte
        { nom: "Radis", emoji: "🥕", bienfaits: "Vitamine C piquante" }, // Utilise icône personnalisée
        { nom: "Chou rouge", emoji: "🥬", bienfaits: "Anthocyanes" }, // Utilise icône personnalisée
        { nom: "Chou vert", emoji: "🥬", bienfaits: "Vitamine K et C" },
        { nom: "Chou de Bruxelles", emoji: "🥬", bienfaits: "Vitamine K record" }, // Utilise icône personnalisée
        { nom: "Chou chinois", emoji: "🥬", bienfaits: "Doux et digestible" }, // Utilise icône personnalisée
        { nom: "Blette", emoji: "🥬", bienfaits: "Magnésium et fer" }, // Utilise icône personnalisée
        { nom: "Poireau", emoji: "🧅", bienfaits: "Fibres prébiotiques" }, // Utilise icône personnalisée
        { nom: "Oignon", emoji: "🧅", bienfaits: "Antioxydants soufrés" },
        { nom: "Échalote", emoji: "🧅", bienfaits: "Saveur douce" }, // Utilise icône personnalisée
        { nom: "Ail", emoji: "🧄", bienfaits: "Antibactérien naturel" },
        { nom: "Champignon de Paris", emoji: "🍄", bienfaits: "Protéines et sélénium" },
        { nom: "Champignon shiitaké", emoji: "🍄", bienfaits: "Système immunitaire" },
        { nom: "Maïs", emoji: "🌽", bienfaits: "Énergie et fibres" },
        { nom: "Gingembre", emoji: "🫚", bienfaits: "Anti-nausée naturel" },
        { nom: "Topinambour", emoji: "🥔", bienfaits: "Prébiotiques naturels" }, // Utilise icône personnalisée
        { nom: "Betterave", emoji: "🥕", bienfaits: "Nitrates naturels" } // Utilise icône personnalisée
    ],
    prevention: {
        forbidden: [
            { nom: "Miel", emoji: "🍯", raison: "Risque de botulisme infantile" },
            { nom: "Lait de vache", emoji: "🥛", raison: "Difficile à digérer, carences" },
            { nom: "Fromage au lait cru", emoji: "🧀", raison: "Risque de listériose" },
            { nom: "Œuf cru", emoji: "🥚", raison: "Risque de salmonellose" },
            { nom: "Poisson cru", emoji: "🍣", raison: "Risque bactérien et parasitaire" },
            { nom: "Viande crue", emoji: "🥩", raison: "Risque de toxoplasmose" },
            { nom: "Alcool", emoji: "🍷", raison: "Toxique pour le système nerveux" },
            { nom: "Thé et café", emoji: "☕", raison: "Caféine néfaste pour bébé" },
            { nom: "Édulcorants", emoji: "🧪", raison: "Substances chimiques non adaptées" }
        ],
        avoid: [
            { nom: "Sel", emoji: "🧂", raison: "Reins immatures, hypertension" },
            { nom: "Sucre blanc", emoji: "🍬", raison: "Caries, addiction au sucre" },
            { nom: "Charcuterie", emoji: "🥓", raison: "Sel, nitrites, conservateurs" },
            { nom: "Fruits de mer", emoji: "🦐", raison: "Allergies, métaux lourds" },
            { nom: "Épices fortes", emoji: "🌶️", raison: "Irritation digestive" },
            { nom: "Chocolat", emoji: "🍫", raison: "Théobromine, sucre, allergènes" },
            { nom: "Noix entières", emoji: "🥜", raison: "Risque d'étouffement" },
            { nom: "Bonbons durs", emoji: "🍭", raison: "Étouffement, sucre" },
            { nom: "Pop-corn", emoji: "🍿", raison: "Risque d'étouffement" }
        ],
        later: [
            { nom: "Agrumes", emoji: "🍊", raison: "Introduire vers 8-10 mois" },
            { nom: "Fraise", emoji: "🍓", raison: "Allergène, attendre 8 mois" },
            { nom: "Kiwi", emoji: "🥝", raison: "Acidité, vers 8-10 mois" },
            { nom: "Tomate", emoji: "🍅", raison: "Acidité, vers 8 mois" },
            { nom: "Épinards", emoji: "🥬", raison: "Nitrates, vers 8 mois" },
            { nom: "Betteraves", emoji: "🥕", raison: "Nitrates, vers 8 mois" }, // Utilise icône personnalisée
            { nom: "Légumineuses", emoji: "🫘", raison: "Difficiles à digérer, vers 8 mois" },
            { nom: "Céréales avec gluten", emoji: "🍞", raison: "Introduire vers 6 mois progressivement" },
            { nom: "Produits laitiers", emoji: "🧀", raison: "Yaourt vers 6 mois, fromage vers 8 mois" }
        ]
    }
};

// Gestion de l'état de l'application
class BabyFoodTracker {
    constructor() {
        // État des évaluations et historique
        this.evaluations = this.chargerEvaluations();
        this.alimentActuel = null;
        
        // Liste des aliments goûtés (séparée du calendrier)
        this.alimentsGoutes = this.chargerAlimentsGoutes();
        
        // Paramètres de l'application
        this.settings = this.chargerParametres();
        
        // Catégorie active par défaut
        this.categorieActive = 'calendrier';
        
        // État du calendrier
        this.calendrierData = this.chargerCalendrier();
        this.dateDebutCalendrier = new Date('2025-06-01'); // 1er juin 2025
        this.semaineActuelle = this.calculerSemaineActuelle();
        this.jourActuel = null;
        this.alimentSelectionne = null;
        this.categorieRechercheActive = 'fruits';
        
        // Stocker la date actuelle pour détecter les changements de jour
        this.dernierJourVerifie = new Date().toDateString();
        
        this.init();
    }

    init() {
        this.configurerEvenements();
        this.mettreAJourStatistiques();
        this.mettreAJourProgress();
        this.mettreAJourAffichageAge();
        
        // Initialiser l'affichage par défaut sur le calendrier
        this.changerCategorie('calendrier');
        
        // Démarrer la vérification périodique du changement de jour
        this.demarrerVerificationJour();
    }

    // Empêcher le zoom double-tap sur iOS et autres gestes non désirés
    empecherZoom() {
        let lastTouchEnd = 0;
        
        // Empêcher le zoom double-tap
        document.addEventListener('touchend', function (event) {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, { passive: false });

        // Empêcher le pinch zoom
        document.addEventListener('gesturestart', function (e) {
            e.preventDefault();
        }, { passive: false });

        document.addEventListener('gesturechange', function (e) {
            e.preventDefault();
        }, { passive: false });

        document.addEventListener('gestureend', function (e) {
            e.preventDefault();
        }, { passive: false });

        // Empêcher le zoom avec la molette sur desktop
        document.addEventListener('wheel', function(e) {
            if (e.ctrlKey) {
                e.preventDefault();
            }
        }, { passive: false });

        // Empêcher les raccourcis clavier de zoom
        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '0')) {
                e.preventDefault();
            }
        });

        // Forcer la taille de la viewport
        const metaViewport = document.querySelector('meta[name="viewport"]');
        if (metaViewport) {
            metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
        }
        
        // Empêcher complètement le scroll horizontal
        this.empecherScrollHorizontal();
    }

    // Fonction dédiée pour empêcher le scroll horizontal
    empecherScrollHorizontal() {
        // Empêcher le scroll horizontal avec les touches du clavier
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                // Permettre les flèches seulement si on est dans un input
                if (!e.target.matches('input, textarea, [contenteditable]')) {
                    e.preventDefault();
                }
            }
        });

        // Empêcher le scroll horizontal avec la molette (shift + molette)
        document.addEventListener('wheel', function(e) {
            if (e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                e.preventDefault();
            }
        }, { passive: false });

        // Empêcher le glissement horizontal sur mobile
        let startX = 0;
        let startY = 0;
        
        document.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: true });

        document.addEventListener('touchmove', function(e) {
            if (!e.target.matches('input, textarea, [contenteditable]')) {
                const currentX = e.touches[0].clientX;
                const currentY = e.touches[0].clientY;
                const diffX = Math.abs(currentX - startX);
                const diffY = Math.abs(currentY - startY);
                
                // Si le mouvement est principalement horizontal, l'empêcher
                if (diffX > diffY && diffX > 10) {
                    e.preventDefault();
                }
            }
        }, { passive: false });

        // Surveiller et corriger automatiquement le scroll horizontal
        const preventHorizontalScroll = () => {
            if (window.scrollX !== 0) {
                window.scrollTo(0, window.scrollY);
            }
            
            // Vérifier aussi sur le body et html
            if (document.body.scrollLeft !== 0) {
                document.body.scrollLeft = 0;
            }
            if (document.documentElement.scrollLeft !== 0) {
                document.documentElement.scrollLeft = 0;
            }
        };

        // Surveiller en continu
        window.addEventListener('scroll', preventHorizontalScroll, { passive: true });
        
        // Vérification périodique
        setInterval(preventHorizontalScroll, 100);
        
        // Forcer les styles CSS via JavaScript pour être sûr
        const style = document.createElement('style');
        style.textContent = `
            html, body {
                overflow-x: hidden !important;
                max-width: 100vw !important;
                width: 100% !important;
            }
            * {
                max-width: 100% !important;
                box-sizing: border-box !important;
            }
        `;
        document.head.appendChild(style);
    }

    chargerEvaluations() {
        const saved = localStorage.getItem('babyFoodEvaluations');
        return saved ? JSON.parse(saved) : {};
    }

    sauvegarderEvaluations() {
        localStorage.setItem('babyFoodEvaluations', JSON.stringify(this.evaluations));
    }

    chargerAlimentsGoutes() {
        const saved = localStorage.getItem('babyFoodAlimentsGoutes');
        return saved ? JSON.parse(saved) : [];
    }

    chargerParametres() {
        const saved = localStorage.getItem('babyFoodSettings');
        return saved ? JSON.parse(saved) : {
            babyAge: 4, // Âge par défaut à 4 mois (diversification recommandée)
            babyName: ''
        };
    }

    sauvegarderParametres() {
        localStorage.setItem('babyFoodSettings', JSON.stringify(this.settings));
        this.mettreAJourAffichageAge();
    }

    mettreAJourAffichageAge() {
        const ageDisplay = document.getElementById('babyAgeDisplay');
        const ageBadge = document.getElementById('ageBadge');
        const ageNumber = document.getElementById('ageNumber');
        const subtitle = document.querySelector('.subtitle');
        
        if (ageDisplay) ageDisplay.textContent = this.settings.babyAge;
        if (ageBadge) ageBadge.textContent = `👶 ${this.settings.babyAge} mois`;
        if (ageNumber) ageNumber.textContent = this.settings.babyAge;

        // Adapter le sous-titre selon l'âge
        if (subtitle) {
            if (this.settings.babyAge < 4) {
                subtitle.innerHTML = `Découvertes gustatives de bébé (<span id="babyAgeDisplay">${this.settings.babyAge}</span> mois)<br><small style="color: rgba(255,255,255,0.8);">🍼 Préparation à la diversification</small>`;
            } else {
                subtitle.innerHTML = `Découvertes gustatives de bébé (<span id="babyAgeDisplay">${this.settings.babyAge}</span> mois et +)`;
            }
        }

        // Mettre à jour le titre si un nom est défini
        const titre = document.querySelector('.header-content h1');
        if (this.settings.babyName && titre) {
            titre.textContent = `🍎 La découverte de ${this.settings.babyName} 🍏`;
        }
    }

    configurerEvenements() {
        // Empêcher le zoom double-tap sur iOS
        this.empecherZoom();
        
        // Navigation entre onglets
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.changerCategorie(e.target.dataset.category);
            });
        });

        // Événements calendrier
        this.configurerEvenementsCalendrier();

        // Recherche
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.rechercherAliments(e.target.value);
        });

        // Modal d'évaluation
        document.getElementById('closeModal').addEventListener('click', () => {
            this.fermerModal();
        });

        // Évaluation par boutons
        document.querySelectorAll('.rating-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const rating = parseInt(e.currentTarget.dataset.rating);
                this.evaluerAliment(this.alimentActuel, rating);
            });
        });

        // Bouton "Supprimer de la liste"
        document.getElementById('removeFromListBtn').addEventListener('click', () => {
            this.supprimerAlimentDeLaListe();
        });

        // Fermer modal en cliquant à l'extérieur
        document.getElementById('ratingModal').addEventListener('click', (e) => {
            if (e.target.id === 'ratingModal') {
                this.fermerModal();
            }
        });

        // Paramètres
        document.getElementById('settingsBtn').addEventListener('click', () => {
            this.ouvrirParametres();
        });

        document.getElementById('closeSettings').addEventListener('click', () => {
            this.fermerParametres();
        });

        document.getElementById('ageMinus').addEventListener('click', () => {
            this.modifierAge(-1);
        });

        document.getElementById('agePlus').addEventListener('click', () => {
            this.modifierAge(1);
        });

        document.getElementById('saveSettings').addEventListener('click', () => {
            this.sauvegarderNouveauxParametres();
        });

        // Fermer paramètres en cliquant à l'extérieur
        document.getElementById('settingsModal').addEventListener('click', (e) => {
            if (e.target.id === 'settingsModal') {
                this.fermerParametres();
            }
        });

        // Déselection
        document.getElementById('closeDeselect').addEventListener('click', () => {
            this.fermerModalDeselection();
        });

        document.getElementById('modifyRating').addEventListener('click', () => {
            this.modifierEvaluation();
        });

        document.getElementById('removeRating').addEventListener('click', () => {
            this.supprimerEvaluation();
        });

        // Fermer déselection en cliquant à l'extérieur
        document.getElementById('deselectModal').addEventListener('click', (e) => {
            if (e.target.id === 'deselectModal') {
                this.fermerModalDeselection();
            }
        });
    }

    changerCategorie(categorie) {
        // Mettre à jour les boutons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-category="${categorie}"]`).classList.add('active');

        // Mettre à jour les sections
        document.querySelectorAll('.category-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(categorie).classList.add('active');

        this.categorieActive = categorie;
        
        // Toujours mettre à jour la progression pour tous les onglets
        this.mettreAJourProgress();
        
        if (categorie === 'stats') {
            this.mettreAJourStatistiques();
        } else if (categorie === 'prevention') {
            this.genererPrevention();
        } else if (categorie === 'calendrier') {
            // Recalculer automatiquement la semaine actuelle à chaque retour au calendrier
            this.semaineActuelle = this.calculerSemaineActuelle();
            this.genererCalendrier();
        } else {
            this.genererAliments();
        }
    }

    genererAliments() {
        const container = document.getElementById(this.categorieActive + 'Grid');
        const aliments = alimentsData[this.categorieActive];
        
        container.innerHTML = '';
        
        aliments.forEach((aliment, index) => {
            const widget = this.creerWidgetAliment(aliment, index);
            container.appendChild(widget);
        });
    }

    creerWidgetAliment(aliment, index) {
        const div = document.createElement('div');
        div.className = 'food-widget';
        div.style.animationDelay = `${index * 0.1}s`;
        
        // Vérifier si l'aliment a été goûté (présent dans le calendrier comme consommé)
        const estGoute = this.verifierAlimentGoute(aliment.nom);
        const evaluation = this.evaluations[aliment.nom];
        const estEvalue = evaluation !== undefined;
        
        if (estGoute) {
            div.classList.add('tried');
        }

        const iconHtml = EmojiManager.getAlimentIcon(aliment.nom);
        
        // Afficher l'emoji de notation seulement si l'aliment est goûté ET évalué
        const noteDisplay = (estGoute && estEvalue) ? this.genererAffichageNote(evaluation) : '';
        
        div.innerHTML = `
            ${iconHtml}
            <h3 class="food-name">${aliment.nom}</h3>
            <p class="food-benefits">${aliment.bienfaits}</p>
            ${noteDisplay}
        `;

        div.addEventListener('click', () => {
            if (!estGoute) {
                // Si pas encore goûté, le marquer comme goûté
                this.marquerAlimentCommeGoute(aliment.nom);
            } else {
                // Si déjà goûté, ouvrir la modal d'évaluation
                this.ouvrirModalEvaluation(aliment.nom);
            }
        });

        return div;
    }

    genererAffichageNote(note) {
        const emojis = ['', '😖', '😐', '😊', '😍'];
        
        return `
            <div class="rating-display-corner">
                <span class="rating-emoji-corner">${emojis[note]}</span>
            </div>
        `;
    }

    ouvrirModalEvaluation(nomAliment) {
        // NOUVELLE LOGIQUE : Vérifier que l'aliment a été goûté avant d'autoriser l'évaluation
        if (!this.verifierAlimentGoute(nomAliment)) {
            this.afficherNotificationSucces('Cet aliment doit d\'abord être goûté avant d\'être évalué !');
            return;
        }
        
        this.alimentActuel = nomAliment;
        
        // Toujours afficher la modal de notation
        document.getElementById('modalTitle').textContent = `Comment bébé a-t-il aimé ${nomAliment} ?`;
        
        // Afficher le bouton "Supprimer de la liste" puisque l'aliment est goûté
        const removeBtn = document.getElementById('removeFromListBtn');
        if (removeBtn) {
            removeBtn.style.display = 'block';
        }
        
        document.getElementById('ratingModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    fermerModal() {
        document.getElementById('ratingModal').classList.remove('active');
        document.body.style.overflow = '';
        
        // Cacher le bouton "Supprimer de la liste"
        const removeBtn = document.getElementById('removeFromListBtn');
        if (removeBtn) {
            removeBtn.style.display = 'none';
        }
        
        this.alimentActuel = null;
    }

    // Fonction de synchronisation globale pour mettre à jour tous les affichages
    synchroniserToutesLesDonnees() {
        this.mettreAJourStatistiques();
        this.mettreAJourProgress();
        
        // Mettre à jour l'affichage selon la catégorie active
        if (this.categorieActive === 'calendrier') {
            this.genererCalendrier();
        } else if (this.categorieActive === 'stats') {
            // Les stats sont déjà mises à jour avec mettreAJourStatistiques()
        } else if (this.categorieActive === 'prevention') {
            this.genererPrevention();
        } else {
            this.genererAliments();
        }
    }

    evaluerAliment(nomAliment, note) {
        const etaitDejaEvalue = this.evaluations[nomAliment] !== undefined;
        
        this.evaluations[nomAliment] = note;
        this.sauvegarderEvaluations();
        
        // NOUVELLE LOGIQUE : Plus de synchronisation automatique avec le calendrier
        // L'évaluation se fait uniquement depuis les pages fruits/légumes
        // et seulement si l'aliment a déjà été goûté
        
        // Gérer l'historique
        const maintenant = new Date();
        const historique = this.chargerHistorique();
        
        // Si l'aliment était déjà évalué, supprimer l'ancienne entrée
        if (etaitDejaEvalue) {
            const historiqueFiltre = historique.filter(entree => entree.aliment !== nomAliment);
            historiqueFiltre.unshift({
                aliment: nomAliment,
                note: note,
                date: maintenant.toISOString()
            });
            
            // Garder seulement les 10 dernières entrées
            if (historiqueFiltre.length > 10) {
                historiqueFiltre.splice(10);
            }
            
            localStorage.setItem('babyFoodHistorique', JSON.stringify(historiqueFiltre));
        } else {
            // Nouvelle évaluation, ajouter normalement
            historique.unshift({
                aliment: nomAliment,
                note: note,
                date: maintenant.toISOString()
            });
            
            // Garder seulement les 10 dernières entrées
            if (historique.length > 10) {
                historique.splice(10);
            }
            
            localStorage.setItem('babyFoodHistorique', JSON.stringify(historique));
        }
        
        this.fermerModal();
        
        // Synchronisation globale avec délai pour assurer que tout est bien sauvegardé
        setTimeout(() => {
            this.synchroniserToutesLesDonnees();
        }, 50);

        // Animation de succès
        const message = etaitDejaEvalue ? `${nomAliment} modifié ! ✏️` : `${nomAliment} évalué ! ✅`;
        this.afficherNotificationSucces(message);
    }

    chargerHistorique() {
        const saved = localStorage.getItem('babyFoodHistorique');
        return saved ? JSON.parse(saved) : [];
    }

    mettreAJourStatistiques() {
        // Récupérer tous les aliments goûtés (notés + non notés)
        const alimentsGoutes = new Set();
        
        // Ajouter les aliments de la liste des aliments goûtés
        if (this.alimentsGoutes) {
            this.alimentsGoutes.forEach(aliment => alimentsGoutes.add(aliment));
        }
        
        // Ajouter les aliments consommés dans le calendrier
        for (const [cle, donneesJour] of Object.entries(this.calendrierData)) {
            for (const [moment, alimentsMoment] of Object.entries(donneesJour)) {
                alimentsMoment.forEach(aliment => {
                    if (aliment.consomme) {
                        alimentsGoutes.add(aliment.nom);
                    }
                });
            }
        }
        
        // Statistiques basées sur les évaluations (pour coups de cœur et note moyenne)
        const evaluations = Object.values(this.evaluations);
        const totalEvalue = evaluations.length;
        const totalAdore = evaluations.filter(note => note === 4).length;
        const moyenneNote = totalEvalue > 0 ? 
            (evaluations.reduce((sum, note) => sum + note, 0) / totalEvalue).toFixed(1) : 0;

        // Afficher les statistiques
        document.getElementById('totalTried').textContent = alimentsGoutes.size; // Tous les aliments goûtés
        document.getElementById('totalLoved').textContent = totalAdore; // Seulement les notés 4
        document.getElementById('averageRating').textContent = moyenneNote; // Moyenne des notés

        this.mettreAJourHistoriqueRecent();
    }

    mettreAJourHistoriqueRecent() {
        const historique = this.chargerHistorique();
        const container = document.getElementById('recentList');
        
        if (historique.length === 0) {
            container.innerHTML = '<p style="color: var(--text-secondary); font-style: italic;">Aucune découverte encore...</p>';
            return;
        }

        container.innerHTML = '';
        
        historique.slice(0, 5).forEach(entree => {
            const aliment = this.trouverAliment(entree.aliment);
            const div = document.createElement('div');
            div.className = 'recent-item';
            
            const date = new Date(entree.date);
            const dateFormatee = date.toLocaleDateString('fr-FR', { 
                day: 'numeric', 
                month: 'short' 
            });
            
            const emojis = ['✅', '😖', '😐', '😊', '😍']; // 0 = goûté (✅), 1-4 = notes
            const ratingText = entree.note === 0 ? 'Goûté' : emojis[entree.note];
            
            // Utiliser directement le nom de l'aliment de l'historique pour obtenir l'icône
            const alimentIcon = EmojiManager.getAlimentIcon(entree.aliment);
            const recentIconHtml = alimentIcon.includes('custom-icon') ? 
                alimentIcon.replace('class="custom-icon"', 'class="recent-emoji"') : 
                alimentIcon.replace('class="food-emoji"', 'class="recent-emoji"');
            
            div.innerHTML = `
                ${recentIconHtml}
                <div class="recent-info">
                    <div class="recent-name">${entree.aliment}</div>
                    <div class="recent-date">${dateFormatee}</div>
                </div>
                <span class="rating-star">${ratingText}</span>
            `;
            
            container.appendChild(div);
        });
    }

    trouverAliment(nom) {
        for (const categorie of ['fruits', 'legumes']) {
            const aliment = alimentsData[categorie].find(a => a.nom === nom);
            if (aliment) return aliment;
        }
        return null;
    }

    // NOUVELLE FONCTION : Vérifier si un aliment a été goûté (dans la liste ou dans le calendrier comme consommé)
    verifierAlimentGoute(nomAliment) {
        // D'abord vérifier dans la liste des aliments goûtés
        if (this.alimentsGoutes && this.alimentsGoutes.includes(nomAliment)) {
            return true;
        }
        
        // Ensuite vérifier dans le calendrier s'il est présent et consommé
        for (const [cle, donneesJour] of Object.entries(this.calendrierData)) {
            for (const [moment, alimentsMoment] of Object.entries(donneesJour)) {
                if (alimentsMoment.some(a => a.nom === nomAliment && a.consomme)) {
                    return true;
                }
            }
        }
        return false;
    }

    // NOUVELLE FONCTION : Marquer un aliment comme goûté (sans l'ajouter au calendrier)
    marquerAlimentCommeGoute(nomAliment) {
        // Simplement marquer l'aliment comme goûté dans une liste séparée
        // Ne pas l'ajouter au calendrier - cela se fait uniquement depuis la page calendrier
        
        if (!this.alimentsGoutes) {
            this.alimentsGoutes = [];
        }
        
        if (!this.alimentsGoutes.includes(nomAliment)) {
            this.alimentsGoutes.push(nomAliment);
            
            // Sauvegarder la liste des aliments goûtés
            localStorage.setItem('babyFoodAlimentsGoutes', JSON.stringify(this.alimentsGoutes));
            
            // Ajouter à l'historique comme "goûté" (note 0 = goûté sans évaluation)
            const maintenant = new Date();
            const historique = this.chargerHistorique();
            
            // Vérifier si l'aliment n'est pas déjà dans l'historique récent
            const dejaPresent = historique.some(entree => entree.aliment === nomAliment);
            
            if (!dejaPresent) {
                historique.unshift({
                    aliment: nomAliment,
                    note: 0, // 0 = goûté sans évaluation
                    date: maintenant.toISOString()
                });
                
                // Garder seulement les 10 dernières entrées
                if (historique.length > 10) {
                    historique.splice(10);
                }
                
                localStorage.setItem('babyFoodHistorique', JSON.stringify(historique));
            }
            
            // Synchroniser l'affichage
            setTimeout(() => {
                this.synchroniserToutesLesDonnees();
            }, 50);
            
            this.afficherNotificationSucces(`✅ ${nomAliment} marqué comme goûté !`);
        } else {
            this.afficherNotificationSucces(`${nomAliment} est déjà marqué comme goûté !`);
        }
    }

    mettreAJourProgress() {
        const totalAliments = alimentsData.fruits.length + alimentsData.legumes.length;
        
        // Compter tous les aliments goûtés (notés + non notés)
        const alimentsGoutes = new Set();
        
        // Ajouter les aliments de la liste des aliments goûtés
        if (this.alimentsGoutes) {
            this.alimentsGoutes.forEach(aliment => alimentsGoutes.add(aliment));
        }
        
        // Ajouter les aliments consommés dans le calendrier
        for (const [cle, donneesJour] of Object.entries(this.calendrierData)) {
            for (const [moment, alimentsMoment] of Object.entries(donneesJour)) {
                alimentsMoment.forEach(aliment => {
                    if (aliment.consomme) {
                        alimentsGoutes.add(aliment.nom);
                    }
                });
            }
        }
        
        const totalEssaye = alimentsGoutes.size;
        const pourcentage = Math.round((totalEssaye / totalAliments) * 100);
        
        document.getElementById('progressFill').style.width = `${pourcentage}%`;
        document.getElementById('progressText').textContent = `${pourcentage}% découvert`;
    }

    rechercherAliments(terme) {
        if (!terme.trim()) {
            this.genererAliments();
            return;
        }

        const container = document.getElementById(this.categorieActive + 'Grid');
        const aliments = alimentsData[this.categorieActive];
        
        const alimentsFiltres = aliments.filter(aliment => 
            aliment.nom.toLowerCase().includes(terme.toLowerCase()) ||
            aliment.bienfaits.toLowerCase().includes(terme.toLowerCase())
        );
        
        container.innerHTML = '';
        
        if (alimentsFiltres.length === 0) {
            container.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary);">
                    <div style="font-size: 48px; margin-bottom: 16px;">🔍</div>
                    <p>Aucun aliment trouvé pour "${terme}"</p>
                </div>
            `;
            return;
        }
        
        alimentsFiltres.forEach((aliment, index) => {
            const widget = this.creerWidgetAliment(aliment, index);
            container.appendChild(widget);
        });
    }

    genererPrevention() {
        this.genererSectionPrevention('forbidden', 'forbiddenGrid', 'danger');
        this.genererSectionPrevention('avoid', 'avoidGrid', 'warning');
        this.genererSectionPrevention('later', 'laterGrid', 'info');
    }

    genererSectionPrevention(categorie, containerId, cssClass) {
        const container = document.getElementById(containerId);
        const aliments = alimentsData.prevention[categorie];
        
        container.innerHTML = '';
        
        aliments.forEach((aliment, index) => {
            const item = this.creerItemPrevention(aliment, cssClass, index);
            container.appendChild(item);
        });
    }

    creerItemPrevention(aliment, cssClass, index) {
        const div = document.createElement('div');
        div.className = `prevention-item ${cssClass}`;
        div.style.animationDelay = `${index * 0.1}s`;
        
        // Mapping des noms de prévention vers les noms du système d'emojis pour cohérence
        const mappingNoms = {
            'Betteraves': 'Betterave',
            'Agrumes': 'Orange',
            'Légumineuses': 'Haricot rouge',
            'Céréales avec gluten': 'Blé',
            'Produits laitiers': 'Fromage',
            'Fruits de mer': 'Crevette',
            'Épices fortes': 'Piment',
            'Noix entières': 'Noix',
            'Bonbons durs': 'Bonbon',
            'Sucre blanc': 'Sucre',
            'Fromage au lait cru': 'Fromage',
            'Œuf cru': 'Œuf',
            'Poisson cru': 'Poisson',
            'Viande crue': 'Viande',
            'Thé et café': 'Café',
            'Édulcorants': 'Sucre'
        };
        
        let preventionIconHtml;
        
        // Si l'aliment a un mapping vers notre système d'emojis, l'utiliser pour cohérence
        if (mappingNoms[aliment.nom]) {
            const nomPourEmoji = mappingNoms[aliment.nom];
            const preventionIcon = EmojiManager.getAlimentIcon(nomPourEmoji);
            
            // Vérifier si c'est le fallback pomme (indique que l'aliment n'existe pas dans notre système)
            if (preventionIcon.includes('🍎')) {
                // Utiliser l'emoji original des données de prévention
                preventionIconHtml = `<span class="prevention-emoji">${aliment.emoji}</span>`;
            } else {
                // Utiliser l'emoji/icône du système pour cohérence
                preventionIconHtml = preventionIcon.includes('custom-icon') ? 
                    preventionIcon.replace('class="custom-icon"', 'class="prevention-emoji"') : 
                    preventionIcon.replace('class="food-emoji"', 'class="prevention-emoji"');
            }
        } else {
            // Utiliser directement l'emoji défini dans les données de prévention
            preventionIconHtml = `<span class="prevention-emoji">${aliment.emoji}</span>`;
        }
        
        div.innerHTML = `
            ${preventionIconHtml}
            <div class="prevention-info">
                <div class="prevention-name">${aliment.nom}</div>
                <div class="prevention-reason">${aliment.raison}</div>
            </div>
        `;
        
        return div;
    }

    afficherNotificationSucces(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--success);
            color: white;
            padding: 12px 24px;
            border-radius: var(--radius);
            box-shadow: var(--shadow-lg);
            z-index: 2000;
            font-weight: 600;
            animation: slideInDown 0.3s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideInUp 0.3s ease reverse';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    }

    ouvrirParametres() {
        const modal = document.getElementById('settingsModal');
        const ageNumber = document.getElementById('ageNumber');
        const babyNameInput = document.getElementById('babyName');
        
        // Charger les valeurs actuelles
        ageNumber.textContent = this.settings.babyAge;
        babyNameInput.value = this.settings.babyName;
        
        modal.classList.add('active');
    }

    fermerParametres() {
        const modal = document.getElementById('settingsModal');
        modal.classList.remove('active');
    }

    modifierAge(delta) {
        const ageNumber = document.getElementById('ageNumber');
        let nouvelAge = parseInt(ageNumber.textContent) + delta;
        
        // Limiter l'âge entre 1 et 24 mois
        nouvelAge = Math.max(1, Math.min(24, nouvelAge));
        
        ageNumber.textContent = nouvelAge;
    }

    sauvegarderNouveauxParametres() {
        const ageNumber = document.getElementById('ageNumber');
        const babyNameInput = document.getElementById('babyName');
        
        const ancienAge = this.settings.babyAge;
        const ancienNom = this.settings.babyName;
        
        this.settings.babyAge = parseInt(ageNumber.textContent);
        this.settings.babyName = babyNameInput.value.trim();
        
        this.sauvegarderParametres();
        this.fermerParametres();
        
        // Afficher une notification de succès
        let message = '✅ Paramètres sauvegardés !';
        if (ancienAge !== this.settings.babyAge) {
            message = `✅ Âge mis à jour : ${this.settings.babyAge} mois`;
        }
        if (ancienNom !== this.settings.babyName && this.settings.babyName) {
            message = `✅ Bienvenue ${this.settings.babyName} ! 👶`;
        }
        
        this.afficherNotificationSucces(message);
    }

    ouvrirModalDeselection(nomAliment) {
        const modal = document.getElementById('deselectModal');
        const title = document.getElementById('deselectTitle');
        const currentRatingDisplay = document.getElementById('currentRatingDisplay');
        
        title.textContent = `🤔 ${nomAliment}`;
        
        // Afficher l'évaluation actuelle
        const noteActuelle = this.evaluations[nomAliment];
        const emojis = ['', '😖', '😐', '😊', '😍'];
        const labels = ['', 'N\'aime pas', 'Bof', 'Aime bien', 'Adore !'];
        
        currentRatingDisplay.innerHTML = `
            <div class="current-rating-item">
                <span class="current-rating-emoji">${emojis[noteActuelle]}</span>
                <span>${labels[noteActuelle]}</span>
            </div>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    fermerModalDeselection() {
        const modal = document.getElementById('deselectModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
        this.alimentActuel = null;
    }

    modifierEvaluation() {
        const nomAliment = this.alimentActuel; // Sauvegarder avant de fermer
        this.fermerModalDeselection();
        
        // Restaurer l'aliment actuel et ouvrir la modal d'évaluation
        this.alimentActuel = nomAliment;
        document.getElementById('modalTitle').textContent = `Modifier l'évaluation de ${nomAliment}`;
        document.getElementById('ratingModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    supprimerEvaluation() {
        const nomAliment = this.alimentActuel;
        
        // Supprimer de l'évaluation
        delete this.evaluations[nomAliment];
        this.sauvegarderEvaluations();
        
        // Vérifier si l'aliment existe encore dans le calendrier comme consommé
        let existeDansCalendrier = false;
        for (const [cle, donneesJour] of Object.entries(this.calendrierData)) {
            for (const [moment, alimentsMoment] of Object.entries(donneesJour)) {
                if (alimentsMoment.some(a => a.nom === nomAliment && a.consomme)) {
                    existeDansCalendrier = true;
                    break;
                }
            }
            if (existeDansCalendrier) break;
        }
        
        // Si l'aliment n'existe plus dans le calendrier, le retirer aussi de la liste des aliments goûtés
        if (!existeDansCalendrier && this.alimentsGoutes.includes(nomAliment)) {
            this.alimentsGoutes = this.alimentsGoutes.filter(aliment => aliment !== nomAliment);
            localStorage.setItem('babyFoodAlimentsGoutes', JSON.stringify(this.alimentsGoutes));
        }
        
        // Supprimer de l'historique
        const historique = this.chargerHistorique();
        const historiqueFiltre = historique.filter(entree => entree.aliment !== nomAliment);
        localStorage.setItem('babyFoodHistorique', JSON.stringify(historiqueFiltre));
        
        this.fermerModalDeselection();
        
        // Synchronisation globale avec délai pour assurer que tout est bien sauvegardé
        setTimeout(() => {
            this.synchroniserToutesLesDonnees();
        }, 50);
        
        // Notification de suppression
        this.afficherNotificationSucces(`${nomAliment} retiré de la liste ! 🗑️`);
    }

    // NOUVELLE FONCTION : Supprimer un aliment de la liste des aliments goûtés
    supprimerAlimentDeLaListe() {
        const nomAliment = this.alimentActuel;
        
        // Supprimer de la liste des aliments goûtés
        if (this.alimentsGoutes.includes(nomAliment)) {
            this.alimentsGoutes = this.alimentsGoutes.filter(aliment => aliment !== nomAliment);
            localStorage.setItem('babyFoodAlimentsGoutes', JSON.stringify(this.alimentsGoutes));
        }
        
        // Supprimer l'évaluation s'il y en a une
        if (this.evaluations[nomAliment]) {
            delete this.evaluations[nomAliment];
            this.sauvegarderEvaluations();
        }
        
        // TOUJOURS supprimer de l'historique (qu'il soit noté ou juste goûté)
        const historique = this.chargerHistorique();
        const historiqueFiltre = historique.filter(entree => entree.aliment !== nomAliment);
        localStorage.setItem('babyFoodHistorique', JSON.stringify(historiqueFiltre));
        
        this.fermerModal();
        
        // Synchronisation globale
        setTimeout(() => {
            this.synchroniserToutesLesDonnees();
        }, 50);
        
        // Notification de suppression
        this.afficherNotificationSucces(`${nomAliment} retiré de la liste ! 🗑️`);
    }

    // ===== MÉTHODES CALENDRIER =====

    chargerCalendrier() {
        const saved = localStorage.getItem('babyFoodCalendrier');
        if (saved) {
            return JSON.parse(saved);
        }
        
        // Structure par défaut : calendrier basé sur les dates
        return {};
    }

    calculerSemaineActuelle() {
        const aujourd = new Date();
        
        // Calculer le lundi de la semaine actuelle
        const lundiActuel = new Date(aujourd);
        const jourSemaine = lundiActuel.getDay();
        const diffAuLundi = jourSemaine === 0 ? -6 : 1 - jourSemaine; // Dimanche = 0, donc -6 pour aller au lundi précédent
        lundiActuel.setDate(lundiActuel.getDate() + diffAuLundi);
        
        // Calculer le lundi de la première semaine (1er juin 2024 ou le lundi le plus proche)
        const premierLundi = new Date(this.dateDebutCalendrier);
        const jourSemaineDebut = premierLundi.getDay();
        const diffAuLundiDebut = jourSemaineDebut === 0 ? -6 : 1 - jourSemaineDebut;
        premierLundi.setDate(premierLundi.getDate() + diffAuLundiDebut);
        
        // Calculer la différence en semaines
        const diffTime = lundiActuel.getTime() - premierLundi.getTime();
        const diffSemaines = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
        const semaineCalculee = diffSemaines + 1;
        
        // S'assurer que la semaine est positive et raisonnable
        if (semaineCalculee < 1) {
            return 1;
        }
        
        // Limiter à un maximum raisonnable (2 ans = 104 semaines)
        return Math.min(semaineCalculee, 104);
    }

    obtenirDatesSemaine(numeroSemaine) {
        // Calculer le lundi de la première semaine
        const premierLundi = new Date(this.dateDebutCalendrier);
        const jourSemaineDebut = premierLundi.getDay();
        const diffAuLundiDebut = jourSemaineDebut === 0 ? -6 : 1 - jourSemaineDebut;
        premierLundi.setDate(premierLundi.getDate() + diffAuLundiDebut);
        
        // Calculer le lundi de la semaine demandée
        const lundiSemaine = new Date(premierLundi);
        lundiSemaine.setDate(premierLundi.getDate() + (numeroSemaine - 1) * 7);
        
        // Le dimanche de cette semaine
        const dimancheSemaine = new Date(lundiSemaine);
        dimancheSemaine.setDate(lundiSemaine.getDate() + 6);
        
        return { premierJour: lundiSemaine, dernierJour: dimancheSemaine };
    }

    obtenirCleCalendrier(date) {
        // Générer une clé unique basée sur la date (YYYY-MM-DD)
        return date.toISOString().split('T')[0];
    }

    obtenirDonneesJour(date) {
        const cle = this.obtenirCleCalendrier(date);
        if (!this.calendrierData[cle]) {
            this.calendrierData[cle] = {
                matin: [],
                midi: [],
                gouter: [],
                soir: []
            };
        }
        return this.calendrierData[cle];
    }

    sauvegarderCalendrier() {
        localStorage.setItem('babyFoodCalendrier', JSON.stringify(this.calendrierData));
    }

    configurerEvenementsCalendrier() {
        // Navigation mois
        const prevMonth = document.getElementById('prevMonth');
        const nextMonth = document.getElementById('nextMonth');
        
        if (prevMonth) {
            prevMonth.addEventListener('click', () => this.naviguerMois(-1));
        }
        if (nextMonth) {
            nextMonth.addEventListener('click', () => this.naviguerMois(1));
        }

        // Retour à la vue mensuelle
        const backToMonth = document.getElementById('backToMonth');
        if (backToMonth) {
            backToMonth.addEventListener('click', () => this.retournerVueMensuelle());
        }

        // Navigation jour
        const prevDay = document.getElementById('prevDay');
        const nextDay = document.getElementById('nextDay');
        
        if (prevDay) {
            prevDay.addEventListener('click', () => this.naviguerJour(-1));
        }
        if (nextDay) {
            nextDay.addEventListener('click', () => this.naviguerJour(1));
        }

        // Boutons d'ajout d'aliments
        document.querySelectorAll('.add-meal-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const moment = e.target.dataset.moment;
                if (this.selectedDate) {
                    const dateKey = this.obtenirCleCalendrier(this.selectedDate);
                    this.ouvrirModalAjoutAliment(dateKey, moment);
                }
            });
        });

        // Modal calendrier
        const closeModal = document.getElementById('closeCalendrierModal');
        const cancelModal = document.getElementById('cancelCalendrierModal');
        const confirmModal = document.getElementById('confirmCalendrierModal');

        if (closeModal) {
            closeModal.addEventListener('click', () => this.fermerModalCalendrier());
        }
        if (cancelModal) {
            cancelModal.addEventListener('click', () => this.fermerModalCalendrier());
        }
        if (confirmModal) {
            confirmModal.addEventListener('click', () => this.confirmerAjoutAliment());
        }

        // Recherche d'aliments
        const searchInput = document.getElementById('alimentSearchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.rechercherAlimentsCalendrier(e.target.value));
        }

        // Catégories de recherche
        document.querySelectorAll('.search-cat-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.search-cat-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.categorieRechercheActive = e.target.dataset.searchCategory;
                this.afficherAlimentsRecherche();
            });
        });

        // Sélecteurs de durée
        const dureeMinus = document.getElementById('dureeMinus');
        const dureePlus = document.getElementById('dureePlus');
        
        if (dureeMinus) {
            dureeMinus.addEventListener('click', () => this.modifierDuree(-1));
        }
        if (dureePlus) {
            dureePlus.addEventListener('click', () => this.modifierDuree(1));
        }
    }

    genererCalendrier() {
        if (this.categorieActive !== 'calendrier') return;
        
        this.genererCalendrierIOS();
    }

    genererCalendrierIOS() {
        // Initialiser les variables si nécessaire
        if (!this.currentDate) {
            this.currentDate = new Date();
        }
        if (!this.selectedDate) {
            this.selectedDate = null;
        }
        if (!this.viewMode) {
            this.viewMode = 'month'; // 'month', 'week' ou 'day'
        }

        if (this.viewMode === 'month') {
            this.genererVueMensuelle();
        } else if (this.viewMode === 'week') {
            this.genererVueSemaine();
        } else {
            this.genererVueJour();
        }
    }

    genererVueMensuelle() {
        const monthView = document.getElementById('calendarMonthView');
        const weekView = document.getElementById('calendarWeekView');
        const dayView = document.getElementById('calendarDayView');
        
        if (monthView) monthView.style.display = 'block';
        if (weekView) {
            weekView.style.display = 'none';
            weekView.classList.remove('active');
        }
        if (dayView) dayView.style.display = 'none';

        // Mettre à jour le titre du mois
        const titleElement = document.getElementById('calendarTitle');
        if (titleElement) {
            const options = { year: 'numeric', month: 'long' };
            titleElement.textContent = this.currentDate.toLocaleDateString('fr-FR', options);
        }

        // Nettoyer les classes d'animation précédentes
        this.nettoyerAnimationsCalendrier();

        // Générer la grille du calendrier avec événements réactivés
        this.genererGrilleCalendrier();
    }

    nettoyerAnimationsCalendrier() {
        const calendarGrid = document.querySelector('.calendar-grid');
        if (calendarGrid) {
            calendarGrid.classList.remove('transitioning');
            
            // Nettoyer toutes les classes d'animation sur les jours
            const allDays = calendarGrid.querySelectorAll('.calendar-day');
            allDays.forEach(dayEl => {
                dayEl.classList.remove('selected-week', 'fade-out');
                // Réactiver les interactions
                dayEl.style.pointerEvents = '';
                dayEl.style.opacity = '';
                dayEl.style.transform = '';
            });
        }
    }

    genererVueSemaine() {
        const monthView = document.getElementById('calendarMonthView');
        const weekView = document.getElementById('calendarWeekView');
        const dayView = document.getElementById('calendarDayView');
        
        if (monthView) monthView.style.display = 'none';
        if (weekView) {
            weekView.style.display = 'block';
            // Animation d'entrée
            setTimeout(() => {
                weekView.classList.add('active');
            }, 50);
        }
        if (dayView) dayView.style.display = 'none';

        // Mettre à jour le texte de retour au mois
        const backMonthText = document.getElementById('backMonthText');
        if (backMonthText) {
            const options = { year: 'numeric', month: 'long' };
            backMonthText.textContent = this.currentDate.toLocaleDateString('fr-FR', options);
        }

        // Générer les jours de la semaine
        this.genererJoursSemaine();
        
        // Générer le contenu du jour sélectionné
        this.genererContenuJourSemaine();
    }

    genererJoursSemaine() {
        const container = document.getElementById('weekDaysContainer');
        if (!container) return;
        
        container.innerHTML = '';
        
        const weekDays = this.obtenirJoursSemaine(this.selectedDate);
        const today = new Date();
        
        weekDays.forEach(date => {
            const dayElement = document.createElement('div');
            dayElement.className = 'week-day';
            
            const isToday = this.estAujourdhui(date);
            const isSelected = this.isSameDay(date, this.selectedDate);
            const dateKey = this.obtenirCleCalendrier(date);
            const hasEvents = this.verifierAlimentsJour(dateKey);
            
            if (isToday) {
                dayElement.classList.add('today');
            }
            
            if (isSelected) {
                dayElement.classList.add('selected');
            }
            
            if (hasEvents) {
                dayElement.classList.add('has-events');
            }
            
            // Numéro du jour
            const dayNumber = document.createElement('div');
            dayNumber.className = 'week-day-number';
            dayNumber.textContent = date.getDate();
            dayElement.appendChild(dayNumber);
            
            // Indicateurs
            const indicators = this.creerIndicateursJourSemaine(dateKey);
            if (indicators.children.length > 0) {
                dayElement.appendChild(indicators);
            }
            
            // Gestionnaire de clic
            dayElement.addEventListener('click', () => {
                this.selectionnerJourSemaine(date);
            });
            
            container.appendChild(dayElement);
        });
    }

    creerIndicateursJourSemaine(dateKey) {
        const indicatorsContainer = document.createElement('div');
        indicatorsContainer.className = 'week-day-indicators';
        
        const jourData = this.calendrierData[dateKey];
        
        if (jourData) {
            let totalAliments = 0;
            ['matin', 'midi', 'gouter', 'soir'].forEach(moment => {
                if (jourData[moment] && jourData[moment].length > 0) {
                    totalAliments += jourData[moment].length;
                }
            });
            
            // Limiter à 4 indicateurs maximum
            const nombreIndicateurs = Math.min(totalAliments, 4);
            for (let i = 0; i < nombreIndicateurs; i++) {
                const indicator = document.createElement('div');
                indicator.className = 'week-day-indicator';
                indicatorsContainer.appendChild(indicator);
            }
        }
        
        return indicatorsContainer;
    }

    selectionnerJourSemaine(date) {
        this.selectedDate = new Date(date);
        
        // Mettre à jour l'affichage des jours de la semaine
        const weekDays = document.querySelectorAll('.week-day');
        weekDays.forEach(dayEl => {
            dayEl.classList.remove('selected');
        });
        
        // Marquer le jour sélectionné
        const weekDaysArray = this.obtenirJoursSemaine(this.selectedDate);
        const selectedIndex = weekDaysArray.findIndex(weekDay => 
            this.isSameDay(weekDay, date)
        );
        
        if (selectedIndex !== -1 && weekDays[selectedIndex]) {
            weekDays[selectedIndex].classList.add('selected');
            
            // Animation subtile de sélection
            weekDays[selectedIndex].style.transform = 'scale(1.08)';
            setTimeout(() => {
                if (weekDays[selectedIndex]) {
                    weekDays[selectedIndex].style.transform = '';
                }
            }, 200);
        }
        
        // Mettre à jour le contenu du jour
        this.genererContenuJourSemaine();
    }

    genererContenuJourSemaine() {
        if (!this.selectedDate) return;
        
        const dateKey = this.obtenirCleCalendrier(this.selectedDate);
        const jourData = this.obtenirDonneesJour(this.selectedDate);
        
        // Mettre à jour chaque moment de la journée
        ['matin', 'midi', 'gouter', 'soir'].forEach(moment => {
            const container = document.getElementById(`weekMeal${moment.charAt(0).toUpperCase() + moment.slice(1)}`);
            if (container) {
                container.innerHTML = '';
                
                if (jourData[moment] && jourData[moment].length > 0) {
                    jourData[moment].forEach(aliment => {
                        const alimentElement = this.creerElementAliment(aliment, dateKey, moment);
                        container.appendChild(alimentElement);
                    });
                }
            }
        });
        
        // Configurer les boutons d'ajout
        this.configurerBoutonsAjoutSemaine();
    }

    configurerBoutonsAjoutSemaine() {
        const boutons = document.querySelectorAll('.calendar-week-view .add-meal-btn');
        boutons.forEach(bouton => {
            bouton.onclick = (e) => {
                e.preventDefault();
                const moment = bouton.getAttribute('data-moment');
                const dateKey = this.obtenirCleCalendrier(this.selectedDate);
                this.ouvrirModalAjoutAliment(dateKey, moment);
            };
        });
    }

    genererGrilleCalendrier() {
        const grid = document.getElementById('calendarGrid');
        if (!grid) return;

        grid.innerHTML = '';

        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        
        // Premier jour du mois
        const firstDay = new Date(year, month, 1);
        // Dernier jour du mois
        const lastDay = new Date(year, month + 1, 0);
        
        // Premier lundi de la grille (peut être du mois précédent)
        const startDate = new Date(firstDay);
        const dayOfWeek = firstDay.getDay();
        const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Lundi = 0
        startDate.setDate(firstDay.getDate() - daysToSubtract);

        // Générer 42 jours (6 semaines)
        for (let i = 0; i < 42; i++) {
            const currentDate = new Date(startDate);
            currentDate.setDate(startDate.getDate() + i);
            
            const dayElement = this.creerElementJour(currentDate, month);
            grid.appendChild(dayElement);
        }
    }

    creerElementJour(date, currentMonth) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        
        const isCurrentMonth = date.getMonth() === currentMonth;
        const isToday = this.estAujourdhui(date);
        const dateKey = this.obtenirCleCalendrier(date);
        
        if (!isCurrentMonth) {
            dayElement.classList.add('other-month');
        }
        
        if (isToday) {
            dayElement.classList.add('today');
        }

        // Vérifier s'il y a des aliments pour ce jour
        const hasEvents = this.verifierAlimentsJour(dateKey);
        if (hasEvents) {
            dayElement.classList.add('has-events');
        }

        // Numéro du jour
        const dayNumber = document.createElement('div');
        dayNumber.className = 'day-number';
        dayNumber.textContent = date.getDate();
        dayElement.appendChild(dayNumber);

        // Indicateurs d'aliments
        const indicators = this.creerIndicateursJour(dateKey);
        dayElement.appendChild(indicators);

        // Event listener pour transition vers vue semaine
        dayElement.addEventListener('click', () => {
            if (isCurrentMonth) {
                this.transitionVersVueSemaine(date);
            }
        });

        return dayElement;
    }

    creerIndicateursJour(dateKey) {
        const indicatorsContainer = document.createElement('div');
        indicatorsContainer.className = 'day-indicators';

        const jourData = this.calendrierData[dateKey];
        if (!jourData) return indicatorsContainer;

        let totalAliments = 0;
        ['matin', 'midi', 'gouter', 'soir'].forEach(moment => {
            if (jourData[moment] && jourData[moment].length > 0) {
                totalAliments += jourData[moment].length;
            }
        });

        // Afficher jusqu'à 4 indicateurs
        const maxIndicators = Math.min(totalAliments, 4);
        for (let i = 0; i < maxIndicators; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'day-indicator';
            indicatorsContainer.appendChild(indicator);
        }

        return indicatorsContainer;
    }

    estAujourdhui(date) {
        const today = new Date();
        return date.getDate() === today.getDate() &&
               date.getMonth() === today.getMonth() &&
               date.getFullYear() === today.getFullYear();
    }

    verifierAlimentsJour(dateKey) {
        const jourData = this.calendrierData[dateKey];
        if (!jourData) return false;
        
        // Vérifier s'il y a des aliments dans au moins un moment de la journée
        return ['matin', 'midi', 'gouter', 'soir'].some(moment => 
            jourData[moment] && jourData[moment].length > 0
        );
    }

    transitionVersVueSemaine(date) {
        this.selectedDate = new Date(date);
        
        // Obtenir la semaine du jour sélectionné
        const weekDays = this.obtenirJoursSemaine(date);
        
        // Animation de transition
        const calendarGrid = document.querySelector('.calendar-grid');
        if (calendarGrid) {
            calendarGrid.classList.add('transitioning');
            
            // Désactiver temporairement les interactions pendant la transition
            const allDays = calendarGrid.querySelectorAll('.calendar-day');
            allDays.forEach((dayEl, index) => {
                dayEl.style.pointerEvents = 'none';
                
                const dayDate = this.obtenirDateFromIndex(index);
                const isInSelectedWeek = weekDays.some(weekDay => 
                    this.isSameDay(weekDay, dayDate)
                );
                
                if (isInSelectedWeek) {
                    dayEl.classList.add('selected-week');
                } else {
                    dayEl.classList.add('fade-out');
                }
            });
            
            // Transition vers la vue semaine après l'animation
            setTimeout(() => {
                this.viewMode = 'week';
                this.genererCalendrierIOS();
            }, 600);
        }
    }

    obtenirJoursSemaine(date) {
        const startOfWeek = new Date(date);
        const day = startOfWeek.getDay();
        const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1); // Lundi = début de semaine
        startOfWeek.setDate(diff);
        
        const weekDays = [];
        for (let i = 0; i < 7; i++) {
            const weekDay = new Date(startOfWeek);
            weekDay.setDate(startOfWeek.getDate() + i);
            weekDays.push(weekDay);
        }
        
        return weekDays;
    }

    obtenirDateFromIndex(index) {
        // Calculer la date basée sur l'index dans la grille
        const firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
        const startDate = new Date(firstDay);
        const dayOfWeek = firstDay.getDay();
        const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
        startDate.setDate(firstDay.getDate() + mondayOffset + index);
        
        return startDate;
    }

    isSameDay(date1, date2) {
        return date1.getDate() === date2.getDate() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getFullYear() === date2.getFullYear();
    }

    ouvrirVueJour(date) {
        this.selectedDate = new Date(date);
        this.viewMode = 'day';
        this.genererVueJour();
    }

    genererVueJour() {
        const monthView = document.getElementById('calendarMonthView');
        const dayView = document.getElementById('calendarDayView');
        
        if (monthView) monthView.style.display = 'none';
        if (dayView) dayView.style.display = 'block';

        // Mettre à jour le titre du jour
        const dayTitle = document.getElementById('dayTitle');
        const backMonthText = document.getElementById('backMonthText');
        
        if (dayTitle && this.selectedDate) {
            const options = { weekday: 'long', day: 'numeric', month: 'long' };
            dayTitle.textContent = this.selectedDate.toLocaleDateString('fr-FR', options);
        }
        
        if (backMonthText) {
            const options = { year: 'numeric', month: 'long' };
            backMonthText.textContent = this.currentDate.toLocaleDateString('fr-FR', options);
        }

        // Générer le contenu du jour
        this.genererContenuJour();
    }

    genererContenuJour() {
        if (!this.selectedDate) return;

        const dateKey = this.obtenirCleCalendrier(this.selectedDate);
        const jourData = this.obtenirDonneesJour(this.selectedDate);

        ['matin', 'midi', 'gouter', 'soir'].forEach(moment => {
            const container = document.getElementById(`meal${moment.charAt(0).toUpperCase() + moment.slice(1)}`);
            if (container) {
                container.innerHTML = '';
                
                if (jourData[moment] && jourData[moment].length > 0) {
                    jourData[moment].forEach(aliment => {
                        const foodItem = this.creerElementAliment(aliment, dateKey, moment);
                        container.appendChild(foodItem);
                    });
                }
            }
        });
    }

    creerElementAliment(aliment, dateKey, moment) {
        const foodItem = document.createElement('div');
        foodItem.className = 'food-item';
        foodItem.setAttribute('data-aliment', aliment.nom);
        foodItem.setAttribute('data-moment', moment);
        foodItem.setAttribute('data-jour', dateKey);
        
        if (aliment.consomme) {
            foodItem.classList.add('consumed');
        }

        // Emoji/Icône
        const emoji = document.createElement('div');
        emoji.className = 'food-item-emoji';
        
        // Utiliser le système unifié EmojiManager
        const iconHtml = EmojiManager.getAlimentIcon(aliment.nom);
        const finalIconHtml = iconHtml.includes('custom-icon') ? 
            iconHtml.replace('class="custom-icon"', 'class="food-item-emoji-icon"') : 
            iconHtml.replace('class="food-emoji"', 'class="food-item-emoji-icon"');
        emoji.innerHTML = finalIconHtml;
        
        foodItem.appendChild(emoji);

        // Informations
        const info = document.createElement('div');
        info.className = 'food-item-info';
        
        const name = document.createElement('div');
        name.className = 'food-item-name';
        name.textContent = aliment.nom;
        info.appendChild(name);
        
        const duration = document.createElement('div');
        duration.className = 'food-item-duration';
        duration.textContent = `${aliment.duree} jour(s)`;
        info.appendChild(duration);
        
        foodItem.appendChild(info);

        // Actions
        const actions = document.createElement('div');
        actions.className = 'food-item-actions';
        
        // Checkbox
        const checkbox = document.createElement('div');
        checkbox.className = 'food-checkbox';
        if (aliment.consomme) {
            checkbox.classList.add('checked');
        }
        
        checkbox.addEventListener('click', (e) => {
            e.stopPropagation();
            this.marquerConsommation(aliment.nom, dateKey, moment, !aliment.consomme);
        });
        
        actions.appendChild(checkbox);

        // Bouton supprimer
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'food-delete-btn';
        deleteBtn.innerHTML = '×';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.confirmerSuppressionAliment(aliment.nom, dateKey, moment);
        });
        
        actions.appendChild(deleteBtn);
        foodItem.appendChild(actions);

        return foodItem;
    }

    obtenirIconeAliment(nomAliment) {
        // Utiliser les icônes personnalisées si disponibles
        if (typeof customIcons !== 'undefined' && customIcons[nomAliment]) {
            return customIcons[nomAliment];
        }
        return '🍎'; // Icône par défaut
    }

    mettreAJourNavigationSemaine() {
        const semaineNumero = document.getElementById('semaineActuelle');
        const semaineDates = document.getElementById('semaineDates');
        const prevBtn = document.getElementById('prevSemaine');
        const nextBtn = document.getElementById('nextSemaine');

        if (semaineNumero) {
            semaineNumero.textContent = this.semaineActuelle;
        }

        if (semaineDates) {
            const { premierJour, dernierJour } = this.obtenirDatesSemaine(this.semaineActuelle);
            
            const formatDate = (date) => {
                return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;
            };
            
            semaineDates.textContent = `${formatDate(premierJour)} - ${formatDate(dernierJour)}`;
        }

        if (prevBtn) {
            prevBtn.disabled = this.semaineActuelle <= 1;
        }
        if (nextBtn) {
            nextBtn.disabled = this.semaineActuelle >= 104; // Limiter à 2 ans
        }
    }

    naviguerSemaine(direction) {
        const nouvelleSemaine = this.semaineActuelle + direction;
        if (nouvelleSemaine >= 1 && nouvelleSemaine <= 104) {
            this.semaineActuelle = nouvelleSemaine;
            this.genererCalendrier();
        }
    }

    genererSemaine() {
        const container = document.getElementById('calendrierSemaine');
        if (!container) return;

        container.innerHTML = '';
        
        const nomsJours = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
        const { premierJour } = this.obtenirDatesSemaine(this.semaineActuelle);

        for (let i = 0; i < 7; i++) {
            const dateJour = new Date(premierJour);
            dateJour.setDate(premierJour.getDate() + i);
            
            const jourData = this.obtenirDonneesJour(dateJour);
            const jourElement = this.creerJourElement(dateJour, nomsJours[i], jourData);
            container.appendChild(jourElement);
        }
    }

    creerJourElement(dateJour, nomJour, jourData) {
        const div = document.createElement('div');
        div.className = 'calendrier-jour';
        
        // Marquer aujourd'hui
        const aujourd = new Date();
        const estAujourdhui = dateJour.toDateString() === aujourd.toDateString();
        if (estAujourdhui) {
            div.classList.add('aujourd-hui');
        }
        
        const cleJour = this.obtenirCleCalendrier(dateJour);
        
        div.innerHTML = `
            <div class="jour-header">
                <button class="jour-delete-btn" data-jour="${cleJour}" title="Supprimer tous les aliments de ce jour">×</button>
                <div class="jour-nom">${nomJour}</div>
                <div class="jour-date">${dateJour.getDate()}</div>
            </div>
            <div class="jour-content">
                ${this.genererMomentsRepas(jourData, cleJour)}
                <button class="ajouter-aliment-btn" data-jour="${cleJour}">
                    <span>+</span> Ajouter
                </button>
            </div>
        `;

        // Ajouter les événements
        const btnAjouter = div.querySelector('.ajouter-aliment-btn');
        btnAjouter.addEventListener('click', () => this.ouvrirModalAjoutAliment(cleJour));

        // Ajouter l'événement de suppression de jour
        const btnSupprimerJour = div.querySelector('.jour-delete-btn');
        btnSupprimerJour.addEventListener('click', (e) => {
            e.stopPropagation();
            this.confirmerSuppressionJour(cleJour, dateJour);
        });

        // Ajouter les événements de suppression sur les aliments existants APRÈS génération du HTML
        setTimeout(() => {
            div.querySelectorAll('.aliment-item.clickable').forEach(item => {
                // Événement pour la checkbox
                const checkbox = item.querySelector('.aliment-checkbox');
                if (checkbox) {
                    checkbox.addEventListener('change', (e) => {
                        e.stopPropagation();
                        const nomAliment = item.dataset.aliment;
                        const cleJour = item.dataset.jour;
                        const moment = item.dataset.moment;
                        this.marquerConsommation(nomAliment, cleJour, moment, checkbox.checked);
                    });
                }

                // Événement pour la suppression
                const deleteBtn = item.querySelector('.aliment-delete');
                if (deleteBtn) {
                    deleteBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const nomAliment = item.dataset.aliment;
                        const moment = item.dataset.moment;
                        this.confirmerSuppressionAliment(nomAliment, cleJour, moment);
                    });
                }
            });
        }, 0);

        return div;
    }

    genererMomentsRepas(jourData, cleJour) {
        const moments = [
            { key: 'matin', nom: '🌅 Matin' },
            { key: 'midi', nom: '☀️ Midi' },
            { key: 'gouter', nom: '🍪 Goûter' },
            { key: 'soir', nom: '🌙 Soir' }
        ];

        return moments.map(moment => {
            const aliments = jourData[moment.key];
            if (aliments.length === 0) return '';

            return `
                <div class="moment-repas">
                    <div class="moment-title">${moment.nom}</div>
                    <div class="aliments-list">
                        ${aliments.map(aliment => this.genererAlimentItem(aliment, cleJour, moment.key)).join('')}
                    </div>
                </div>
            `;
        }).join('');
    }

    genererAlimentItem(aliment, cleJour, moment) {
        const iconHtml = EmojiManager.getAlimentIcon(aliment.nom);
        const finalIconHtml = iconHtml.includes('custom-icon') ? 
            iconHtml.replace('class="custom-icon"', 'class="custom-icon aliment-icon"') : 
            iconHtml.replace('class="food-emoji"', 'class="aliment-emoji"');
        
        // Vérifier si l'aliment a été consommé ce jour/moment
        const estConsomme = aliment.consomme || false;
        const consommeClass = estConsomme ? 'consomme' : '';
        
        return `
            <div class="aliment-item clickable ${consommeClass}" data-aliment="${aliment.nom}" data-jour="${cleJour}" data-moment="${moment}" title="Cliquer pour supprimer du calendrier">
                <div class="aliment-check">
                    <input type="checkbox" class="aliment-checkbox" ${estConsomme ? 'checked' : ''} title="Marquer comme consommé">
                </div>
                ${finalIconHtml}
                <div class="aliment-info">
                    <span class="aliment-nom">${aliment.nom}</span>
                    <span class="aliment-duree">${aliment.duree}j</span>
                </div>
                <div class="aliment-actions">
                    <span class="aliment-delete" title="Supprimer du calendrier">✕</span>
                </div>
            </div>
        `;
    }

    ouvrirModalAjoutAliment(dateKey, moment = null) {
        this.jourSelectionne = dateKey;
        this.momentSelectionne = moment;
        
        // Réinitialiser la modal
        this.fermerModalCalendrier();
        
        // Ouvrir la modal
        const modal = document.getElementById('calendrierModal');
        if (modal) {
            modal.classList.add('active');
            
            // Mettre à jour le titre si un moment spécifique est sélectionné
            const title = document.getElementById('calendrierModalTitle');
            if (title && moment) {
                const moments = {
                    'matin': '🌅 Ajouter un aliment - Matin',
                    'midi': '☀️ Ajouter un aliment - Midi', 
                    'gouter': '🍪 Ajouter un aliment - Goûter',
                    'soir': '🌙 Ajouter un aliment - Soir'
                };
                title.textContent = moments[moment] || '🍎 Ajouter un aliment';
                
                // Pré-sélectionner le moment dans la modal
                const momentCheckbox = document.getElementById(`moment${moment.charAt(0).toUpperCase() + moment.slice(1)}`);
                if (momentCheckbox) {
                    momentCheckbox.checked = true;
                }
            }
            
            this.afficherAlimentsRecherche();
        }
    }

    fermerModalCalendrier() {
        document.getElementById('calendrierModal').classList.remove('active');
        document.body.style.overflow = '';
        
        // Réinitialiser tous les états
        this.jourActuel = null;
        this.alimentSelectionne = null;
        
        // Réinitialiser l'affichage de la modal
        document.getElementById('alimentConfigSection').style.display = 'none';
        document.getElementById('confirmCalendrierModal').style.display = 'none';
        
        // Réinitialiser la recherche
        document.getElementById('alimentSearchInput').value = '';
        
        // Réinitialiser la sélection visuelle
        document.querySelectorAll('.aliment-result-item').forEach(item => {
            item.classList.remove('selected');
        });
        
        // Réinitialiser les moments cochés
        document.querySelectorAll('.moment-checkbox input').forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Réinitialiser la durée
        document.getElementById('dureeNumber').textContent = '1';
        
        // Réafficher les aliments par défaut
        this.afficherAlimentsRecherche();
    }

    afficherAlimentsRecherche(termRecherche = '') {
        const container = document.getElementById('alimentsResults');
        if (!container) return;

        const aliments = alimentsData[this.categorieRechercheActive];
        const alimentsFiltres = aliments.filter(aliment => 
            aliment.nom.toLowerCase().includes(termRecherche.toLowerCase())
        );

        container.innerHTML = alimentsFiltres.map(aliment => {
            const iconHtml = EmojiManager.getAlimentIcon(aliment.nom);
            const finalIconHtml = iconHtml.includes('custom-icon') ? 
                iconHtml.replace('class="custom-icon"', 'class="aliment-result-icon"') : 
                iconHtml.replace('class="food-emoji"', 'class="aliment-result-emoji"');
            
            return `
                <div class="aliment-result-item" data-aliment="${aliment.nom}">
                    ${finalIconHtml}
                    <div class="aliment-result-nom">${aliment.nom}</div>
                </div>
            `;
        }).join('');

        // Ajouter les événements de sélection
        container.querySelectorAll('.aliment-result-item').forEach(item => {
            item.addEventListener('click', () => this.selectionnerAliment(item.dataset.aliment));
        });
    }

    rechercherAlimentsCalendrier(terme) {
        this.afficherAlimentsRecherche(terme);
    }

    selectionnerAliment(nomAliment) {
        // Mettre à jour la sélection visuelle
        document.querySelectorAll('.aliment-result-item').forEach(item => {
            item.classList.remove('selected');
        });
        document.querySelector(`[data-aliment="${nomAliment}"]`).classList.add('selected');

        // Stocker l'aliment sélectionné
        this.alimentSelectionne = this.trouverAliment(nomAliment);
        
        // Afficher la section de configuration
        this.afficherConfigurationAliment();
    }

    afficherConfigurationAliment() {
        if (!this.alimentSelectionne) return;

        const container = document.getElementById('selectedAliment');
        const iconHtml = EmojiManager.getAlimentIcon(this.alimentSelectionne.nom);
        const finalIconHtml = iconHtml.includes('custom-icon') ? 
            iconHtml.replace('class="custom-icon"', 'class="selected-aliment-icon"') : 
            iconHtml.replace('class="food-emoji"', 'class="selected-aliment-emoji"');
        
        container.innerHTML = `
            ${finalIconHtml}
            <div class="selected-aliment-nom">${this.alimentSelectionne.nom}</div>
            <div class="selected-aliment-bienfaits">${this.alimentSelectionne.bienfaits}</div>
        `;

        document.getElementById('alimentConfigSection').style.display = 'block';
        document.getElementById('confirmCalendrierModal').style.display = 'block';
    }

    modifierDuree(delta) {
        const dureeNumber = document.getElementById('dureeNumber');
        let nouvelleDuree = parseInt(dureeNumber.textContent) + delta;
        
        // Limiter entre 1 et 7 jours
        nouvelleDuree = Math.max(1, Math.min(7, nouvelleDuree));
        
        dureeNumber.textContent = nouvelleDuree;
    }

    confirmerAjoutAliment() {
        if (!this.alimentSelectionne || !this.jourSelectionne) return;

        const duree = parseInt(document.getElementById('dureeNumber').textContent);
        const momentsCoches = Array.from(document.querySelectorAll('.moment-checkbox input:checked'))
            .map(cb => cb.value);

        if (momentsCoches.length === 0) {
            this.afficherNotificationSucces('Veuillez sélectionner au moins un moment de la journée !');
            return;
        }

        // Ajouter l'aliment au calendrier
        this.ajouterAlimentAuCalendrier(this.alimentSelectionne.nom, this.jourSelectionne, momentsCoches, duree);
        
        this.fermerModalCalendrier();
        this.genererCalendrier();
        this.afficherNotificationSucces(`${this.alimentSelectionne.nom} ajouté au calendrier ! ✅`);
    }

    ajouterAlimentAuCalendrier(nomAliment, cleJourDebut, moments, duree) {
        const dateDebut = new Date(cleJourDebut);
        
        for (let i = 0; i < duree; i++) {
            const dateJour = new Date(dateDebut);
            dateJour.setDate(dateDebut.getDate() + i);
            
            const jourData = this.obtenirDonneesJour(dateJour);

            moments.forEach(moment => {
                // Vérifier si l'aliment n'est pas déjà présent
                const alimentExiste = jourData[moment].find(a => a.nom === nomAliment);
                
                if (!alimentExiste) {
                    jourData[moment].push({
                        nom: nomAliment,
                        duree: duree,
                        jourDebut: i === 0 ? cleJourDebut : null,
                        dateAjout: new Date().toISOString(),
                        consomme: false
                    });
                }
            });
        }

        this.sauvegarderCalendrier();
    }

    confirmerSuppressionAliment(nomAliment, cleJour, moment) {
        const confirmation = confirm(`Êtes-vous sûr de vouloir supprimer "${nomAliment}" du ${moment} ?`);
        if (confirmation) {
            this.supprimerAlimentDuCalendrier(nomAliment, cleJour, moment);
            this.genererCalendrier();
            this.afficherNotificationSucces(`${nomAliment} supprimé du calendrier ! 🗑️`);
        }
    }

    supprimerAlimentDuCalendrier(nomAliment, cleJour, moment) {
        const jourData = this.obtenirDonneesJour(new Date(cleJour));
        const index = jourData[moment].findIndex(a => a.nom === nomAliment);
        
        if (index !== -1) {
            // Récupérer l'aliment avant suppression pour vérifier s'il était consommé
            const alimentSupprime = jourData[moment][index];
            const etaitConsomme = alimentSupprime.consomme;
            
            // Supprimer l'aliment du calendrier
            jourData[moment].splice(index, 1);
            this.sauvegarderCalendrier();
            
            // SYNCHRONISATION : Si l'aliment était consommé, vérifier s'il existe encore ailleurs
            if (etaitConsomme) {
                let existeEncoreConsomme = false;
                
                // Parcourir tout le calendrier pour voir si l'aliment existe encore comme consommé
                for (const [cle, donneesJour] of Object.entries(this.calendrierData)) {
                    for (const [momentCle, alimentsMoment] of Object.entries(donneesJour)) {
                        if (alimentsMoment.some(a => a.nom === nomAliment && a.consomme)) {
                            existeEncoreConsomme = true;
                            break;
                        }
                    }
                    if (existeEncoreConsomme) break;
                }
                
                // Si l'aliment n'existe plus nulle part comme consommé, retirer toute évaluation
                if (!existeEncoreConsomme && this.evaluations[nomAliment]) {
                    delete this.evaluations[nomAliment];
                    this.sauvegarderEvaluations();
                    
                    // Retirer de l'historique
                    const historique = this.chargerHistorique();
                    const historiqueFiltre = historique.filter(entree => entree.aliment !== nomAliment);
                    localStorage.setItem('babyFoodHistorique', JSON.stringify(historiqueFiltre));
                }
            }
        }
    }

    marquerConsommation(nomAliment, cleJour, moment, estConsomme) {
        const jourData = this.obtenirDonneesJour(new Date(cleJour));
        const aliment = jourData[moment].find(a => a.nom === nomAliment);
        
        if (aliment) {
            aliment.consomme = estConsomme;
            this.sauvegarderCalendrier();
            
            // NOUVELLE LOGIQUE : Plus d'évaluation automatique
            // Cocher dans le calendrier = juste marquer comme goûté, sans note
            
            // Si l'aliment est coché pour la première fois, l'ajouter à l'historique
            if (estConsomme) {
                const historique = this.chargerHistorique();
                const dejaPresent = historique.some(entree => entree.aliment === nomAliment);
                
                if (!dejaPresent) {
                    const maintenant = new Date();
                    historique.unshift({
                        aliment: nomAliment,
                        note: 0, // 0 = goûté sans évaluation
                        date: maintenant.toISOString()
                    });
                    
                    // Garder seulement les 10 dernières entrées
                    if (historique.length > 10) {
                        historique.splice(10);
                    }
                    
                    localStorage.setItem('babyFoodHistorique', JSON.stringify(historique));
                }
            }
            
            // Si l'aliment est décoché, on peut optionnellement retirer l'évaluation s'il n'existe nulle part ailleurs
            if (!estConsomme && this.evaluations[nomAliment]) {
                // Vérifier si cet aliment existe ailleurs dans le calendrier comme consommé
                let existeAilleurs = false;
                for (const [cle, donneesJour] of Object.entries(this.calendrierData)) {
                    for (const [momentCle, alimentsMoment] of Object.entries(donneesJour)) {
                        if (alimentsMoment.some(a => a.nom === nomAliment && a.consomme)) {
                            existeAilleurs = true;
                            break;
                        }
                    }
                    if (existeAilleurs) break;
                }
                
                // Si l'aliment n'existe nulle part ailleurs comme consommé, retirer l'évaluation
                if (!existeAilleurs) {
                    delete this.evaluations[nomAliment];
                    this.sauvegarderEvaluations();
                    
                    // Retirer de l'historique
                    const historique = this.chargerHistorique();
                    const historiqueFiltre = historique.filter(entree => entree.aliment !== nomAliment);
                    localStorage.setItem('babyFoodHistorique', JSON.stringify(historiqueFiltre));
                    
                    // Synchroniser toutes les données
                    setTimeout(() => {
                        this.synchroniserToutesLesDonnees();
                    }, 50);
                }
            }
            
            // Mettre à jour visuellement l'élément
            this.mettreAJourAffichageConsommation(nomAliment, cleJour, moment, estConsomme);
            
            // Synchroniser les statistiques et l'historique en temps réel
            setTimeout(() => {
                this.synchroniserToutesLesDonnees();
            }, 50);
            
            // Afficher une notification
            const message = estConsomme 
                ? `✅ ${nomAliment} marqué comme goûté !`
                : `⏸️ ${nomAliment} marqué comme non goûté`;
            this.afficherNotificationSucces(message);
        }
    }

    mettreAJourAffichageConsommation(nomAliment, cleJour, moment, estConsomme) {
        // Mettre à jour dans la vue semaine (vue principale)
        const alimentItem = document.querySelector(`.aliment-item[data-aliment="${nomAliment}"][data-jour="${cleJour}"][data-moment="${moment}"]`);
        if (alimentItem) {
            const checkbox = alimentItem.querySelector('.aliment-checkbox');
            if (checkbox) {
                checkbox.checked = estConsomme;
                
                // Mettre à jour les classes visuelles
                if (estConsomme) {
                    alimentItem.classList.add('consomme');
                } else {
                    alimentItem.classList.remove('consomme');
                }
            }
        }
        
        // Mettre à jour dans la vue jour si elle est active
        if (this.viewMode === 'day') {
            const foodItem = document.querySelector(`.food-item[data-aliment="${nomAliment}"][data-moment="${moment}"]`);
            if (foodItem) {
                const checkbox = foodItem.querySelector('.food-checkbox');
                if (checkbox) {
                    if (estConsomme) {
                        checkbox.classList.add('checked');
                        foodItem.classList.add('consumed');
                    } else {
                        checkbox.classList.remove('checked');
                        foodItem.classList.remove('consumed');
                    }
                }
            }
            
            // Régénérer le contenu du jour pour s'assurer que tout est à jour
            this.genererContenuJour();
        }
        
        // Mettre à jour les indicateurs dans la vue mensuelle
        if (this.viewMode === 'month') {
            this.genererGrilleCalendrier();
        }
        
        // Forcer la mise à jour de l'affichage du calendrier
        if (this.categorieActive === 'calendrier') {
            // Régénérer seulement la partie nécessaire pour éviter de perdre l'état des événements
            this.mettreAJourAffichageCalendrier();
        }
    }

    // Fonction pour mettre à jour l'affichage après modification des données
    mettreAJourAffichageCalendrier() {
        if (this.categorieActive !== 'calendrier') return;
        
        if (this.viewMode === 'month') {
            this.genererGrilleCalendrier();
        } else if (this.viewMode === 'day') {
            this.genererContenuJour();
        }
    }

    // Vérification périodique pour détecter le changement de jour
    demarrerVerificationJour() {
        // Vérifier toutes les heures si on a changé de jour
        setInterval(() => {
            const nouveauJour = new Date().toDateString();
            if (nouveauJour !== this.dernierJourVerifie) {
                this.dernierJourVerifie = nouveauJour;
                // Recalculer la semaine actuelle et mettre à jour le calendrier
                if (this.categorieActive === 'calendrier') {
                    this.semaineActuelle = this.calculerSemaineActuelle();
                    this.genererCalendrier();
                }
            }
        }, 3600000); // Vérifier toutes les heures
    }

    confirmerSuppressionJour(cleJour, dateJour) {
        const formatDate = (date) => {
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            return date.toLocaleDateString('fr-FR', options);
        };

        const dateFormatee = formatDate(dateJour);
        
        // Compter le nombre d'aliments dans ce jour
        const donneesJour = this.calendrierData[cleJour] || {};
        let totalAliments = 0;
        ['matin', 'midi', 'gouter', 'soir'].forEach(moment => {
            if (donneesJour[moment]) {
                totalAliments += donneesJour[moment].length;
            }
        });

        if (totalAliments === 0) {
            this.afficherNotificationSucces('Aucun aliment à supprimer pour ce jour.');
            return;
        }

        const confirmation = confirm(
            `Êtes-vous sûr de vouloir supprimer TOUS les aliments du ${dateFormatee} ?\n\n` +
            `Cette action supprimera ${totalAliments} aliment(s) de tous les moments de la journée ` +
            `(matin, midi, goûter, soir).\n\n` +
            `Cette action est irréversible.`
        );

        if (confirmation) {
            this.supprimerTousAlimentsJour(cleJour, dateFormatee);
        }
    }

    supprimerTousAlimentsJour(cleJour, dateFormatee) {
        // Récupérer tous les aliments consommés de ce jour avant suppression
        const alimentsConsommesSupprimes = [];
        if (this.calendrierData[cleJour]) {
            ['matin', 'midi', 'gouter', 'soir'].forEach(moment => {
                if (this.calendrierData[cleJour][moment]) {
                    this.calendrierData[cleJour][moment].forEach(aliment => {
                        if (aliment.consomme) {
                            alimentsConsommesSupprimes.push(aliment.nom);
                        }
                    });
                }
            });
        }
        
        // Supprimer toutes les données de ce jour
        if (this.calendrierData[cleJour]) {
            delete this.calendrierData[cleJour];
            this.sauvegarderCalendrier();
            
            // SYNCHRONISATION : Pour chaque aliment consommé supprimé, vérifier s'il existe encore ailleurs
            alimentsConsommesSupprimes.forEach(nomAliment => {
                let existeEncoreConsomme = false;
                
                // Parcourir tout le calendrier restant pour voir si l'aliment existe encore comme consommé
                for (const [cle, donneesJour] of Object.entries(this.calendrierData)) {
                    for (const [moment, alimentsMoment] of Object.entries(donneesJour)) {
                        if (alimentsMoment.some(a => a.nom === nomAliment && a.consomme)) {
                            existeEncoreConsomme = true;
                            break;
                        }
                    }
                    if (existeEncoreConsomme) break;
                }
                
                // Si l'aliment n'existe plus nulle part comme consommé, retirer toute évaluation
                if (!existeEncoreConsomme && this.evaluations[nomAliment]) {
                    delete this.evaluations[nomAliment];
                    this.sauvegarderEvaluations();
                    
                    // Retirer de l'historique
                    const historique = this.chargerHistorique();
                    const historiqueFiltre = historique.filter(entree => entree.aliment !== nomAliment);
                    localStorage.setItem('babyFoodHistorique', JSON.stringify(historiqueFiltre));
                }
            });
            
            // Synchroniser toutes les données
            setTimeout(() => {
                this.synchroniserToutesLesDonnees();
            }, 50);
            
            // Régénérer l'affichage du calendrier
            this.genererCalendrier();
            
            // Afficher une notification de succès
            this.afficherNotificationSucces(
                `Tous les aliments du ${dateFormatee} ont été supprimés avec succès.`
            );
        }
    }

    naviguerMois(direction) {
        this.currentDate.setMonth(this.currentDate.getMonth() + direction);
        this.genererVueMensuelle();
    }

    retournerVueMensuelle() {
        // Animation de sortie pour la vue semaine
        const weekView = document.getElementById('calendarWeekView');
        if (weekView && weekView.style.display !== 'none') {
            weekView.classList.remove('active');
            setTimeout(() => {
                this.viewMode = 'month';
                this.selectedDate = null;
                this.genererCalendrierIOS(); // Utiliser la fonction principale pour tout réinitialiser
            }, 400);
        } else {
            this.viewMode = 'month';
            this.selectedDate = null;
            this.genererCalendrierIOS(); // Utiliser la fonction principale pour tout réinitialiser
        }
    }

    naviguerJour(direction) {
        if (!this.selectedDate) return;
        
        this.selectedDate.setDate(this.selectedDate.getDate() + direction);
        
        // Si on change de mois, mettre à jour currentDate aussi
        if (this.selectedDate.getMonth() !== this.currentDate.getMonth()) {
            this.currentDate = new Date(this.selectedDate);
        }
        
        this.genererVueJour();
    }
}

// CSS pour les animations de notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', () => {
    new BabyFoodTracker();
});

// Service Worker pour PWA (fonctionnement hors ligne)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}