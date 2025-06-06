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
        this.categorieActive = 'fruits';
        this.alimentActuel = null;
        this.settings = this.chargerParametres();
        this.init();
    }

    init() {
        this.genererAliments();
        this.configurerEvenements();
        this.mettreAJourStatistiques();
        this.mettreAJourProgress();
        this.mettreAJourAffichageAge();
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
        // Navigation entre onglets
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.changerCategorie(e.target.dataset.category);
            });
        });

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
        
        if (categorie === 'stats') {
            this.mettreAJourStatistiques();
        } else if (categorie === 'prevention') {
            this.genererPrevention();
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
        this.genererAliments();
        this.mettreAJourStatistiques();
        this.mettreAJourProgress();

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
        this.genererAliments();
        this.mettreAJourStatistiques();
        this.mettreAJourProgress();
        
        // Notification de suppression
        this.afficherNotificationSucces(`${nomAliment} retiré de la liste ! 🗑️`);
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