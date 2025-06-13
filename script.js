// Base de données complète des aliments pour bébé
const alimentsData = {
    fruits: [
        { nom: "Pomme", emoji: "🍎", bienfaits: "Riche en fibres et vitamine C" },
        { nom: "Banane", emoji: "🍌", bienfaits: "Potassium et énergie" },
        { nom: "Poire", emoji: "🍐", bienfaits: "Digestion facile, fibres" },
        { nom: "Pêche", emoji: "🍑", bienfaits: "Vitamine A et C" },
        { nom: "Abricot", emoji: "🟠", bienfaits: "Bêta-carotène" },
        { nom: "Prune", emoji: "🟤", bienfaits: "Fibres et antioxydants" },

        { nom: "Framboise", emoji: "🔴", bienfaits: "Antioxydants puissants" },
        { nom: "Myrtille", emoji: "🫐", bienfaits: "Mémoire et vision" },
        { nom: "Mûre", emoji: "⚫", bienfaits: "Vitamine K et fibres" },
        { nom: "Cerise", emoji: "🍒", bienfaits: "Anti-inflammatoire" },
        { nom: "Raisin", emoji: "🍇", bienfaits: "Énergie naturelle" },
        { nom: "Orange", emoji: "🍊", bienfaits: "Vitamine C boost" },
        { nom: "Mandarine", emoji: "🟠", bienfaits: "Vitamine C douce" },
        { nom: "Clémentine", emoji: "🟡", bienfaits: "Facile à digérer" },
        { nom: "Citron", emoji: "🍋", bienfaits: "Vitamine C intense" },
        { nom: "Pamplemousse", emoji: "🩷", bienfaits: "Antioxydants" },
        { nom: "Kiwi", emoji: "🥝", bienfaits: "Vitamine C record" },
        { nom: "Ananas", emoji: "🍍", bienfaits: "Enzymes digestives" },
        { nom: "Mangue", emoji: "🥭", bienfaits: "Vitamine A et E" },
        { nom: "Papaye", emoji: "🧡", bienfaits: "Digestion optimale" },
        { nom: "Melon", emoji: "🍈", bienfaits: "Hydratation douce" },
        { nom: "Pastèque", emoji: "🍉", bienfaits: "Hydratation intense" },
        { nom: "Avocat", emoji: "🥑", bienfaits: "Bonnes graisses" },
        { nom: "Figue", emoji: "🟤", bienfaits: "Calcium naturel" },
        { nom: "Datte", emoji: "🟫", bienfaits: "Énergie concentrée" },
        { nom: "Noix de coco", emoji: "🥥", bienfaits: "Électrolytes" },
        { nom: "Grenade", emoji: "🔴", bienfaits: "Super antioxydants" },
        { nom: "Cranberry", emoji: "🔴", bienfaits: "Voies urinaires" },
        { nom: "Cassis", emoji: "⚫", bienfaits: "Vitamine C intense" },
        { nom: "Groseille", emoji: "🔴", bienfaits: "Acide folique" },
        { nom: "Litchi", emoji: "🤍", bienfaits: "Vitamine C exotique" },
        { nom: "Fruit de la passion", emoji: "🟡", bienfaits: "Vitamine A" },
        { nom: "Carambole", emoji: "⭐", bienfaits: "Vitamine C légère" },
        { nom: "Goyave", emoji: "🟢", bienfaits: "Vitamine C record" },
        { nom: "Physalis", emoji: "🟡", bienfaits: "Antioxydants rares" },
        { nom: "Nectarine", emoji: "🍑", bienfaits: "Peau lisse, vitamine A" },
        { nom: "Mirabelle", emoji: "🟡", bienfaits: "Douce et sucrée" },
        { nom: "Quetsche", emoji: "🟣", bienfaits: "Fibres douces" },
        { nom: "Reine-claude", emoji: "🟢", bienfaits: "Digestion facile" }
    ],
    legumes: [
        { nom: "Carotte", emoji: "🥕", bienfaits: "Bêta-carotène, vision" },
        { nom: "Courgette", emoji: "🥒", bienfaits: "Douce et digestible" },
        { nom: "Haricot vert", emoji: "🫛", bienfaits: "Fibres et vitamines" },
        { nom: "Petit pois", emoji: "🟢", bienfaits: "Protéines végétales" },
        { nom: "Brocoli", emoji: "🥦", bienfaits: "Vitamine K et C" },
        { nom: "Chou-fleur", emoji: "🤍", bienfaits: "Vitamine C et folates" },

        { nom: "Potiron", emoji: "🎃", bienfaits: "Bêta-carotène doux" },
        { nom: "Courge butternut", emoji: "🎃", bienfaits: "Vitamines A et C" },
        { nom: "Patate douce", emoji: "🍠", bienfaits: "Glucides complexes" },

        { nom: "Panais", emoji: "🤍", bienfaits: "Fibres et potassium" },
        { nom: "Navet", emoji: "🟡", bienfaits: "Vitamine C douce" },
        { nom: "Rutabaga", emoji: "🟤", bienfaits: "Vitamine C et fibres" },
        { nom: "Céleri-rave", emoji: "🤍", bienfaits: "Potassium et fibres" },
        { nom: "Fenouil", emoji: "🤍", bienfaits: "Digestion apaisante" },
        { nom: "Endive", emoji: "🤍", bienfaits: "Fibres et vitamine K" },
        { nom: "Mâche", emoji: "🍃", bienfaits: "Oméga-3 végétaux" },
        { nom: "Laitue", emoji: "🥬", bienfaits: "Hydratation et fibres" },
        { nom: "Roquette", emoji: "🍃", bienfaits: "Vitamine K intense" },
        { nom: "Cresson", emoji: "🍃", bienfaits: "Fer et vitamine C" },
        { nom: "Artichaut", emoji: "🫒", bienfaits: "Fibres et antioxydants" },
        { nom: "Asperge", emoji: "🥬", bienfaits: "Acide folique" },
        { nom: "Aubergine", emoji: "🍆", bienfaits: "Antioxydants violets" },
        { nom: "Concombre", emoji: "🥒", bienfaits: "Hydratation pure" },

        { nom: "Poivron rouge", emoji: "🫑", bienfaits: "Vitamine C max" },
        { nom: "Poivron jaune", emoji: "🟡", bienfaits: "Caroténoïdes" },
        { nom: "Poivron vert", emoji: "🟢", bienfaits: "Vitamine C fraîche" },
        { nom: "Radis", emoji: "🔴", bienfaits: "Vitamine C piquante" },
        { nom: "Chou rouge", emoji: "🟣", bienfaits: "Anthocyanes" },
        { nom: "Chou vert", emoji: "🥬", bienfaits: "Vitamine K et C" },
        { nom: "Chou de Bruxelles", emoji: "🥬", bienfaits: "Vitamine K record" },
        { nom: "Chou chinois", emoji: "🥬", bienfaits: "Doux et digestible" },
        { nom: "Blette", emoji: "🍃", bienfaits: "Magnésium et fer" },
        { nom: "Poireau", emoji: "🧅", bienfaits: "Fibres prébiotiques" },
        { nom: "Oignon", emoji: "🧅", bienfaits: "Antioxydants soufrés" },
        { nom: "Échalote", emoji: "🟣", bienfaits: "Saveur douce" },
        { nom: "Ail", emoji: "🧄", bienfaits: "Antibactérien naturel" },
        { nom: "Champignon de Paris", emoji: "🍄", bienfaits: "Protéines et sélénium" },
        { nom: "Champignon shiitaké", emoji: "🍄", bienfaits: "Système immunitaire" },
        { nom: "Maïs", emoji: "🌽", bienfaits: "Énergie et fibres" },
        { nom: "Gingembre", emoji: "🫚", bienfaits: "Anti-nausée naturel" },
        { nom: "Topinambour", emoji: "🥔", bienfaits: "Prébiotiques naturels" }
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
            { nom: "Épinards", emoji: "🍃", raison: "Nitrates, vers 8 mois" },
            { nom: "Betteraves", emoji: "🔴", raison: "Nitrates, vers 8 mois" },
            { nom: "Légumineuses", emoji: "🫘", raison: "Difficiles à digérer, vers 8 mois" },
            { nom: "Céréales avec gluten", emoji: "🍞", raison: "Introduire vers 6 mois progressivement" },
            { nom: "Produits laitiers", emoji: "🧀", raison: "Yaourt vers 6 mois, fromage vers 8 mois" }
        ]
    }
};

// Gestion de l'état de l'application
class BabyFoodTracker {
    constructor() {
        this.evaluations = this.chargerEvaluations();
        this.categorieActive = 'calendrier';
        this.alimentActuel = null;
        this.settings = this.chargerParametres();
        
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
        
        const evaluation = this.evaluations[aliment.nom];
        const estEssaye = evaluation !== undefined;
        
        if (estEssaye) {
            div.classList.add('tried');
        }

        const customIcon = getAlimentIcon(aliment.nom);
        const iconHtml = customIcon ? customIcon : `<span class="food-emoji">${aliment.emoji}</span>`;
        
        div.innerHTML = `
            ${iconHtml}
            <h3 class="food-name">${aliment.nom}</h3>
            <p class="food-benefits">${aliment.bienfaits}</p>
            ${estEssaye ? this.genererAffichageNote(evaluation) : ''}
            ${estEssaye ? `<div class="status-badge rating-${evaluation}"></div>` : ''}
        `;

        div.addEventListener('click', () => {
            this.ouvrirModalEvaluation(aliment.nom);
        });

        return div;
    }

    genererAffichageNote(note) {
        const emojis = ['', '😖', '😐', '😊', '😍'];
        const couleurs = ['', '#ef4444', '#f59e0b', '#eab308', '#10b981'];
        
        return `
            <div class="rating-display">
                <span class="rating-star" style="color: ${couleurs[note]}">${emojis[note]}</span>
            </div>
        `;
    }

    ouvrirModalEvaluation(nomAliment) {
        this.alimentActuel = nomAliment;
        
        // Vérifier si l'aliment est déjà évalué
        if (this.evaluations[nomAliment]) {
            this.ouvrirModalDeselection(nomAliment);
        } else {
            document.getElementById('modalTitle').textContent = `Comment bébé a-t-il aimé ${nomAliment} ?`;
            document.getElementById('ratingModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    fermerModal() {
        document.getElementById('ratingModal').classList.remove('active');
        document.body.style.overflow = '';
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
        const evaluations = Object.values(this.evaluations);
        const totalEssaye = evaluations.length;
        const totalAdore = evaluations.filter(note => note === 4).length;
        const moyenneNote = totalEssaye > 0 ? 
            (evaluations.reduce((sum, note) => sum + note, 0) / totalEssaye).toFixed(1) : 0;

        document.getElementById('totalTried').textContent = totalEssaye;
        document.getElementById('totalLoved').textContent = totalAdore;
        document.getElementById('averageRating').textContent = moyenneNote;

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
            
            const emojis = ['', '😖', '😐', '😊', '😍'];
            
            div.innerHTML = `
                <span class="recent-emoji">${aliment ? aliment.emoji : '🍎'}</span>
                <div class="recent-info">
                    <div class="recent-name">${entree.aliment}</div>
                    <div class="recent-date">${dateFormatee}</div>
                </div>
                <span class="rating-star">${emojis[entree.note]}</span>
            `;
            
            container.appendChild(div);
        });
    }

    trouverAliment(nom) {
        for (const categorie of Object.values(alimentsData)) {
            const aliment = categorie.find(a => a.nom === nom);
            if (aliment) return aliment;
        }
        return null;
    }

    mettreAJourProgress() {
        const totalAliments = alimentsData.fruits.length + alimentsData.legumes.length;
        const totalEssaye = Object.keys(this.evaluations).length;
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
        
        div.innerHTML = `
            <span class="prevention-emoji">${aliment.emoji}</span>
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
        
        // Calculer le lundi de la première semaine (1er juin 2025 ou le lundi le plus proche)
        const premierLundi = new Date(this.dateDebutCalendrier);
        const jourSemaineDebut = premierLundi.getDay();
        const diffAuLundiDebut = jourSemaineDebut === 0 ? -6 : 1 - jourSemaineDebut;
        premierLundi.setDate(premierLundi.getDate() + diffAuLundiDebut);
        
        // Calculer la différence en semaines
        const diffTime = lundiActuel.getTime() - premierLundi.getTime();
        const diffSemaines = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
        const semaineCalculee = diffSemaines + 1;
        
        // Limiter entre 1 et 52 semaines
        return Math.max(1, Math.min(52, semaineCalculee));
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
        // Navigation semaines
        const prevBtn = document.getElementById('prevSemaine');
        const nextBtn = document.getElementById('nextSemaine');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.naviguerSemaine(-1));
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.naviguerSemaine(1));
        }

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
        
        this.mettreAJourNavigationSemaine();
        this.genererSemaine();
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
            nextBtn.disabled = this.semaineActuelle >= 52; // Limiter à 1 an
        }
    }

    naviguerSemaine(direction) {
        const nouvelleSemaine = this.semaineActuelle + direction;
        if (nouvelleSemaine >= 1 && nouvelleSemaine <= 52) {
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

        // Ajouter les événements de suppression sur les aliments existants APRÈS génération du HTML
        setTimeout(() => {
            div.querySelectorAll('.aliment-item.clickable').forEach(item => {
                // Événement pour la checkbox de consommation
                const checkbox = item.querySelector('.aliment-checkbox');
                if (checkbox) {
                    checkbox.addEventListener('change', (e) => {
                        e.stopPropagation();
                        const nomAliment = item.dataset.aliment;
                        const moment = item.dataset.moment;
                        this.marquerConsommation(nomAliment, cleJour, moment, checkbox.checked);
                    });
                }

                // Événement pour l'évaluation
                const evalBtn = item.querySelector('.aliment-eval-btn');
                if (evalBtn) {
                    evalBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const nomAliment = item.dataset.aliment;
                        this.ouvrirModalEvaluationCalendrier(nomAliment);
                    });
                }

                // Événement pour la modification d'évaluation existante
                const noteDiv = item.querySelector('.aliment-note');
                if (noteDiv) {
                    noteDiv.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const nomAliment = item.dataset.aliment;
                        this.ouvrirModalEvaluationCalendrier(nomAliment);
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
        const alimentData = this.trouverAliment(aliment.nom);
        const customIcon = getAlimentIcon(aliment.nom);
        const iconHtml = customIcon ? customIcon.replace('class="custom-icon"', 'class="custom-icon aliment-icon"') : `<span class="aliment-emoji">${alimentData ? alimentData.emoji : '🍎'}</span>`;
        
        // Vérifier si l'aliment a déjà été évalué
        const evaluation = this.evaluations[aliment.nom];
        const estEvalue = evaluation && evaluation.note !== undefined;
        const noteClass = estEvalue ? `note-${evaluation.note}` : '';
        const noteDisplay = estEvalue ? this.genererAffichageNote(evaluation.note) : '';
        
        // Vérifier si l'aliment a été consommé ce jour/moment
        const estConsomme = aliment.consomme || false;
        const consommeClass = estConsomme ? 'consomme' : '';
        
        return `
            <div class="aliment-item clickable ${noteClass} ${consommeClass}" data-aliment="${aliment.nom}" data-jour="${cleJour}" data-moment="${moment}" title="${estEvalue ? 'Cliquer pour modifier/supprimer' : 'Cliquer pour évaluer/supprimer'}">
                <div class="aliment-check">
                    <input type="checkbox" class="aliment-checkbox" ${estConsomme ? 'checked' : ''} title="Marquer comme consommé">
                </div>
                ${iconHtml}
                <div class="aliment-info">
                    <span class="aliment-nom">${aliment.nom}</span>
                    <span class="aliment-duree">${aliment.duree}j</span>
                </div>
                <div class="aliment-actions">
                    ${estEvalue ? `<div class="aliment-note">${noteDisplay}</div>` : `<button class="aliment-eval-btn" title="Évaluer cet aliment">⭐</button>`}
                    <span class="aliment-delete" title="Supprimer du calendrier">✕</span>
                </div>
            </div>
        `;
    }

    ouvrirModalAjoutAliment(cleJour) {
        this.jourActuel = cleJour;
        this.alimentSelectionne = null;
        
        // Reset de la modal
        document.getElementById('alimentSearchInput').value = '';
        document.getElementById('dureeNumber').textContent = '1';
        document.querySelectorAll('.moment-checkbox input').forEach(cb => cb.checked = false);
        document.getElementById('alimentConfigSection').style.display = 'none';
        document.getElementById('confirmCalendrierModal').style.display = 'none';
        
        // Affichage des aliments
        this.afficherAlimentsRecherche();
        
        // Ouvrir la modal
        const date = new Date(cleJour);
        const nomJour = date.toLocaleDateString('fr-FR', { weekday: 'long' });
        document.getElementById('calendrierModalTitle').textContent = `🍎 Ajouter un aliment - ${nomJour.charAt(0).toUpperCase() + nomJour.slice(1)} ${date.getDate()}/${date.getMonth() + 1}`;
        document.getElementById('calendrierModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    fermerModalCalendrier() {
        document.getElementById('calendrierModal').classList.remove('active');
        document.body.style.overflow = '';
        this.jourActuel = null;
        this.alimentSelectionne = null;
    }

    afficherAlimentsRecherche(termRecherche = '') {
        const container = document.getElementById('alimentsResults');
        if (!container) return;

        const aliments = alimentsData[this.categorieRechercheActive];
        const alimentsFiltres = aliments.filter(aliment => 
            aliment.nom.toLowerCase().includes(termRecherche.toLowerCase())
        );

        container.innerHTML = alimentsFiltres.map(aliment => {
            const customIcon = getAlimentIcon(aliment.nom);
            const iconHtml = customIcon ? customIcon.replace('class="custom-icon"', 'class="aliment-result-icon"') : `<span class="aliment-result-emoji">${aliment.emoji}</span>`;
            
            return `
                <div class="aliment-result-item" data-aliment="${aliment.nom}">
                    ${iconHtml}
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
        const customIcon = getAlimentIcon(this.alimentSelectionne.nom);
        const iconHtml = customIcon ? customIcon.replace('class="custom-icon"', 'class="selected-aliment-icon"') : `<span class="selected-aliment-emoji">${this.alimentSelectionne.emoji}</span>`;
        
        container.innerHTML = `
            ${iconHtml}
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
        if (!this.alimentSelectionne || !this.jourActuel) return;

        const duree = parseInt(document.getElementById('dureeNumber').textContent);
        const momentsCoches = Array.from(document.querySelectorAll('.moment-checkbox input:checked'))
            .map(cb => cb.value);

        if (momentsCoches.length === 0) {
            this.afficherNotificationSucces('Veuillez sélectionner au moins un moment de la journée !');
            return;
        }

        // Ajouter l'aliment au calendrier
        this.ajouterAlimentAuCalendrier(this.alimentSelectionne.nom, this.jourActuel, momentsCoches, duree);
        
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
            jourData[moment].splice(index, 1);
            this.sauvegarderCalendrier();
        }
    }

    ouvrirModalEvaluationCalendrier(nomAliment) {
        // Marquer que nous venons du calendrier
        this.evalueDepuisCalendrier = true;
        
        // Utiliser la modal d'évaluation existante
        this.ouvrirModalEvaluation(nomAliment);
        
        // Ajouter un callback pour régénérer le calendrier après évaluation
        const originalFermerModal = this.fermerModal.bind(this);
        this.fermerModal = () => {
            originalFermerModal();
            if (this.evalueDepuisCalendrier) {
                // Forcer la mise à jour immédiate et complète
                setTimeout(() => {
                    this.genererCalendrier(); // Régénérer le calendrier pour afficher la nouvelle évaluation
                    
                    // Mettre à jour les statistiques et la progression depuis le calendrier
                    this.mettreAJourStatistiques();
                    this.mettreAJourProgress();
                    
                    // Rafraîchir les autres catégories si on change d'onglet
                    if (this.categorieActive !== 'calendrier') {
                        this.genererAliments();
                    }
                }, 50); // Délai court pour s'assurer que les données sont bien sauvegardées
                
                this.evalueDepuisCalendrier = false;
            }
            this.fermerModal = originalFermerModal; // Restaurer la fonction originale
        };
    }

    marquerConsommation(nomAliment, cleJour, moment, estConsomme) {
        const jourData = this.obtenirDonneesJour(new Date(cleJour));
        const aliment = jourData[moment].find(a => a.nom === nomAliment);
        
        if (aliment) {
            aliment.consomme = estConsomme;
            this.sauvegarderCalendrier();
            
            // Mettre à jour visuellement l'élément
            this.mettreAJourAffichageConsommation(nomAliment, cleJour, moment, estConsomme);
            
            // Afficher une notification
            const message = estConsomme 
                ? `✅ ${nomAliment} marqué comme consommé !`
                : `⏸️ ${nomAliment} marqué comme non consommé`;
            this.afficherNotificationSucces(message);
        }
    }

    mettreAJourAffichageConsommation(nomAliment, cleJour, moment, estConsomme) {
        // Trouver l'élément dans le DOM
        const alimentElement = document.querySelector(`[data-aliment="${nomAliment}"][data-jour="${cleJour}"][data-moment="${moment}"]`);
        if (alimentElement) {
            if (estConsomme) {
                alimentElement.classList.add('consomme');
            } else {
                alimentElement.classList.remove('consomme');
            }
        }
    }

    // Vérification périodique pour détecter le changement de jour
    demarrerVerificationJour() {
        // Vérifier toutes les minutes si on a changé de jour
        setInterval(() => {
            const jourActuel = new Date().toDateString();
            if (jourActuel !== this.dernierJourVerifie) {
                this.dernierJourVerifie = jourActuel;
                
                // Si on est sur le calendrier, recalculer la semaine actuelle
                if (this.categorieActive === 'calendrier') {
                    const nouvelleSemaine = this.calculerSemaineActuelle();
                    if (nouvelleSemaine !== this.semaineActuelle) {
                        this.semaineActuelle = nouvelleSemaine;
                        this.genererCalendrier();
                        
                        // Notification subtile du changement de jour
                        this.afficherNotificationSucces('📅 Nouveau jour ! Calendrier mis à jour');
                    } else {
                        // Même semaine mais nouveau jour, juste rafraîchir l'affichage
                        this.genererCalendrier();
                    }
                }
            }
        }, 60000); // Vérifier toutes les minutes
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