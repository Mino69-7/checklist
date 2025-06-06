// Icônes SVG personnalisées pour les aliments
const customIcons = {
    // Fruits
    'Abricot': `<svg viewBox="0 0 64 64" class="custom-icon"><circle cx="32" cy="32" r="26" fill="#FFB366"/><circle cx="28" cy="28" r="4" fill="#FF8C42"/><path d="M32 6 Q38 12 32 18 Q26 12 32 6" fill="#8FBC8F"/></svg>`,
    
    'Prune': `<svg viewBox="0 0 64 64" class="custom-icon"><ellipse cx="32" cy="32" rx="22" ry="26" fill="#8B4A9C"/><ellipse cx="32" cy="30" rx="18" ry="22" fill="#9966CC"/><path d="M32 6 Q36 10 32 14 Q28 10 32 6" fill="#228B22"/></svg>`,
    
    'Framboise': `<svg viewBox="0 0 64 64" class="custom-icon"><g fill="#DC143C"><circle cx="28" cy="20" r="4"/><circle cx="36" cy="20" r="4"/><circle cx="24" cy="28" r="4"/><circle cx="32" cy="28" r="4"/><circle cx="40" cy="28" r="4"/><circle cx="28" cy="36" r="4"/><circle cx="36" cy="36" r="4"/><circle cx="32" cy="44" r="4"/></g></svg>`,
    
    'Mûre': `<svg viewBox="0 0 64 64" class="custom-icon"><g fill="#2F2F2F"><circle cx="28" cy="18" r="3"/><circle cx="36" cy="18" r="3"/><circle cx="24" cy="26" r="3"/><circle cx="32" cy="26" r="3"/><circle cx="40" cy="26" r="3"/><circle cx="24" cy="34" r="3"/><circle cx="32" cy="34" r="3"/><circle cx="40" cy="34" r="3"/><circle cx="28" cy="42" r="3"/><circle cx="36" cy="42" r="3"/><circle cx="32" cy="48" r="3"/></g></svg>`,
    
    'Pamplemousse': `<svg viewBox="0 0 64 64" class="custom-icon"><circle cx="32" cy="32" r="26" fill="#FF69B4"/><circle cx="32" cy="32" r="20" fill="#FFB6C1"/><g stroke="#FF1493" stroke-width="2" fill="none"><path d="M16 32 L48 32"/><path d="M32 16 L32 48"/><path d="M22 22 L42 42"/><path d="M22 42 L42 22"/></g></svg>`,
    
    'Papaye': `<svg viewBox="0 0 64 64" class="custom-icon"><ellipse cx="32" cy="32" rx="20" ry="26" fill="#FFAB40"/><ellipse cx="32" cy="32" rx="14" ry="20" fill="#FF8F65"/><g fill="#654321"><circle cx="32" cy="24" r="2"/><circle cx="28" cy="28" r="2"/><circle cx="36" cy="28" r="2"/><circle cx="30" cy="32" r="2"/><circle cx="34" cy="32" r="2"/><circle cx="32" cy="36" r="2"/></g></svg>`,
    
    'Figue': `<svg viewBox="0 0 64 64" class="custom-icon"><path d="M32 8 Q20 12 20 32 Q20 48 32 56 Q44 48 44 32 Q44 12 32 8 Z" fill="#8B4513"/><ellipse cx="32" cy="32" rx="12" ry="16" fill="#DDA0DD"/><path d="M32 8 Q36 12 32 16 Q28 12 32 8" fill="#228B22"/></svg>`,
    
    'Datte': `<svg viewBox="0 0 64 64" class="custom-icon"><ellipse cx="32" cy="32" rx="16" ry="24" fill="#8B4513"/><ellipse cx="32" cy="32" rx="12" ry="20" fill="#A0522D"/><ellipse cx="32" cy="32" rx="6" ry="12" fill="#654321"/></svg>`,
    
    'Cranberry': `<svg viewBox="0 0 64 64" class="custom-icon"><circle cx="32" cy="32" r="22" fill="#DC143C"/><circle cx="32" cy="32" r="18" fill="#B22222"/><ellipse cx="28" cy="28" rx="4" ry="2" fill="#FF6B6B" opacity="0.7"/></svg>`,
    
    'Cassis': `<svg viewBox="0 0 64 64" class="custom-icon"><circle cx="32" cy="32" r="20" fill="#2F2F2F"/><circle cx="32" cy="32" r="16" fill="#1C1C1C"/><circle cx="28" cy="28" r="3" fill="#333" opacity="0.8"/></svg>`,
    
    'Groseille': `<svg viewBox="0 0 64 64" class="custom-icon"><circle cx="32" cy="32" r="18" fill="#FF6347"/><g stroke="#FF4500" stroke-width="1" fill="none"><circle cx="32" cy="32" r="14"/><circle cx="32" cy="32" r="10"/><circle cx="32" cy="32" r="6"/></g></svg>`,
    
    'Litchi': `<svg viewBox="0 0 64 64" class="custom-icon"><circle cx="32" cy="32" r="20" fill="#FFB6C1"/><g fill="#FF69B4"><circle cx="26" cy="26" r="2"/><circle cx="38" cy="28" r="2"/><circle cx="24" cy="36" r="2"/><circle cx="40" cy="38" r="2"/><circle cx="30" cy="42" r="2"/><circle cx="36" cy="44" r="2"/></g><ellipse cx="32" cy="32" rx="14" ry="16" fill="#FFF" opacity="0.8"/></svg>`,
    
    'Fruit de la passion': `<svg viewBox="0 0 64 64" class="custom-icon"><circle cx="32" cy="32" r="20" fill="#8B4513"/><circle cx="32" cy="32" r="16" fill="#FFD700"/><g fill="#FF8C00"><circle cx="28" cy="28" r="2"/><circle cx="36" cy="28" r="2"/><circle cx="24" cy="32" r="2"/><circle cx="32" cy="32" r="2"/><circle cx="40" cy="32" r="2"/><circle cx="28" cy="36" r="2"/><circle cx="36" cy="36" r="2"/></g></svg>`,
    
    'Carambole': `<svg viewBox="0 0 64 64" class="custom-icon"><g fill="#FFD700"><path d="M32 8 L36 24 L52 24 L40 36 L44 52 L32 40 L20 52 L24 36 L12 24 L28 24 Z"/></g><g fill="#FFA500"><path d="M32 12 L34 26 L46 26 L38 34 L40 48 L32 38 L24 48 L26 34 L18 26 L30 26 Z"/></g></svg>`,
    
    'Goyave': `<svg viewBox="0 0 64 64" class="custom-icon"><circle cx="32" cy="32" r="22" fill="#98FB98"/><circle cx="32" cy="32" r="18" fill="#FFB6C1"/><g fill="#FF69B4"><circle cx="28" cy="28" r="2"/><circle cx="36" cy="28" r="2"/><circle cx="26" cy="34" r="2"/><circle cx="32" cy="34" r="2"/><circle cx="38" cy="34" r="2"/><circle cx="30" cy="40" r="2"/><circle cx="34" cy="40" r="2"/></g></svg>`,
    
    'Physalis': `<svg viewBox="0 0 64 64" class="custom-icon"><circle cx="32" cy="36" r="12" fill="#FFD700"/><g fill="#228B22" opacity="0.8"><path d="M20 20 Q24 16 32 20 Q40 16 44 20 Q42 28 38 32 Q34 36 32 36 Q30 36 26 32 Q22 28 20 20" stroke="#9ACD32" stroke-width="2" fill="none"/></g><circle cx="32" cy="36" r="8" fill="#FFA500"/></svg>`,
    
    'Nectarine': `<svg viewBox="0 0 64 64" class="custom-icon"><circle cx="32" cy="32" r="24" fill="#FFB347"/><circle cx="32" cy="32" r="20" fill="#FFA500"/><ellipse cx="28" cy="28" rx="6" ry="4" fill="#FF8C00" opacity="0.7"/><path d="M32 8 Q36 12 32 16 Q28 12 32 8" fill="#228B22"/></svg>`,
    
    'Mirabelle': `<svg viewBox="0 0 64 64" class="custom-icon"><circle cx="32" cy="32" r="22" fill="#FFD700"/><circle cx="32" cy="32" r="18" fill="#FFFF99"/><ellipse cx="28" cy="28" rx="4" ry="3" fill="#FFA500" opacity="0.6"/><path d="M32 10 Q34 14 32 18 Q30 14 32 10" fill="#228B22"/></svg>`,
    
    'Quetsche': `<svg viewBox="0 0 64 64" class="custom-icon"><ellipse cx="32" cy="32" rx="18" ry="24" fill="#8B008B"/><ellipse cx="32" cy="32" rx="14" ry="20" fill="#9932CC"/><ellipse cx="28" cy="28" rx="3" ry="4" fill="#DA70D6" opacity="0.7"/><path d="M32 8 Q34 12 32 16 Q30 12 32 8" fill="#228B22"/></svg>`,
    
    'Reine-claude': `<svg viewBox="0 0 64 64" class="custom-icon"><circle cx="32" cy="32" r="22" fill="#9ACD32"/><circle cx="32" cy="32" r="18" fill="#ADFF2F"/><ellipse cx="28" cy="28" rx="4" ry="3" fill="#98FB98" opacity="0.8"/><path d="M32 10 Q34 14 32 18 Q30 14 32 10" fill="#228B22"/></svg>`,
    
    // Légumes
    'Haricot vert': `<svg viewBox="0 0 64 64" class="custom-icon"><path d="M16 32 Q32 20 48 32 Q32 44 16 32 Z" fill="#228B22"/><g fill="#90EE90"><circle cx="20" cy="30" r="2"/><circle cx="26" cy="28" r="2"/><circle cx="32" cy="26" r="2"/><circle cx="38" cy="28" r="2"/><circle cx="44" cy="30" r="2"/></g></svg>`,
    
    'Petit pois': `<svg viewBox="0 0 64 64" class="custom-icon"><path d="M20 16 Q16 20 16 32 Q16 44 20 48 L44 48 Q48 44 48 32 Q48 20 44 16 Z" fill="#90EE90"/><g fill="#32CD32"><circle cx="26" cy="26" r="4"/><circle cx="32" cy="32" r="4"/><circle cx="38" cy="38" r="4"/></g></svg>`,
    
    'Chou-fleur': `<svg viewBox="0 0 64 64" class="custom-icon"><g fill="#F5F5DC"><circle cx="32" cy="28" r="6"/><circle cx="24" cy="32" r="5"/><circle cx="40" cy="32" r="5"/><circle cx="28" cy="40" r="4"/><circle cx="36" cy="40" r="4"/><circle cx="32" cy="36" r="4"/></g><g fill="#90EE90"><path d="M20 44 Q24 48 32 48 Q40 48 44 44" stroke="#228B22" stroke-width="2" fill="none"/></g></svg>`,
    
    'Panais': `<svg viewBox="0 0 64 64" class="custom-icon"><path d="M32 8 L28 56 L36 56 Z" fill="#F5DEB3"/><path d="M32 8 L30 56 L34 56 Z" fill="#FAEBD7"/><path d="M32 8 Q36 12 32 16 Q28 12 32 8" fill="#228B22"/></svg>`,
    
    'Navet': `<svg viewBox="0 0 64 64" class="custom-icon"><circle cx="32" cy="38" r="18" fill="#F5F5DC"/><circle cx="32" cy="38" r="14" fill="#FFFACD"/><g fill="#9ACD32"><path d="M26 20 Q32 16 38 20 Q35 24 32 24 Q29 24 26 20"/><path d="M28 18 L28 12"/><path d="M32 16 L32 10"/><path d="M36 18 L36 12"/></g></svg>`,
    
    'Rutabaga': `<svg viewBox="0 0 64 64" class="custom-icon"><circle cx="32" cy="36" r="20" fill="#DAA520"/><circle cx="32" cy="36" r="16" fill="#F0E68C"/><ellipse cx="32" cy="30" rx="8" ry="4" fill="#9ACD32"/><g fill="#228B22"><path d="M28 16 L28 24"/><path d="M32 14 L32 22"/><path d="M36 16 L36 24"/></g></svg>`,
    
    'Céleri-rave': `<svg viewBox="0 0 64 64" class="custom-icon"><circle cx="32" cy="38" r="18" fill="#F5F5DC"/><g stroke="#8FBC8F" stroke-width="2" fill="none"><circle cx="32" cy="38" r="14"/><circle cx="32" cy="38" r="10"/></g><g fill="#228B22"><path d="M24 20 L24 12"/><path d="M28 18 L28 10"/><path d="M32 16 L32 8"/><path d="M36 18 L36 10"/><path d="M40 20 L40 12"/></g></svg>`,
    
    'Fenouil': `<svg viewBox="0 0 64 64" class="custom-icon"><ellipse cx="32" cy="42" rx="16" ry="14" fill="#F5F5DC"/><g fill="#228B22"><path d="M16 20 Q32 16 48 20" stroke-width="2" fill="none" stroke="#90EE90"/><path d="M20 24 Q32 20 44 24" stroke-width="2" fill="none" stroke="#90EE90"/><path d="M24 28 Q32 24 40 28" stroke-width="2" fill="none" stroke="#90EE90"/></g></svg>`,
    
    'Endive': `<svg viewBox="0 0 64 64" class="custom-icon"><ellipse cx="32" cy="32" rx="12" ry="24" fill="#FFFACD"/><ellipse cx="32" cy="32" rx="8" ry="20" fill="#F0F8FF"/><g fill="#90EE90"><ellipse cx="32" cy="20" rx="6" ry="4"/><path d="M32 16 Q28 12 32 8 Q36 12 32 16"/></g></svg>`,
    
    'Mâche': `<svg viewBox="0 0 64 64" class="custom-icon"><g fill="#228B22"><ellipse cx="28" cy="24" rx="8" ry="12" transform="rotate(-30 28 24)"/><ellipse cx="36" cy="24" rx="8" ry="12" transform="rotate(30 36 24)"/><ellipse cx="32" cy="36" rx="8" ry="14"/><ellipse cx="24" cy="40" rx="6" ry="10" transform="rotate(-45 24 40)"/><ellipse cx="40" cy="40" rx="6" ry="10" transform="rotate(45 40 40)"/></g></svg>`,
    
    'Roquette': `<svg viewBox="0 0 64 64" class="custom-icon"><g fill="#228B22"><path d="M32 8 Q28 16 24 24 Q28 32 32 40 Q36 32 40 24 Q36 16 32 8"/><path d="M20 20 Q24 28 28 36"/><path d="M44 20 Q40 28 36 36"/><path d="M16 32 Q20 36 24 40"/><path d="M48 32 Q44 36 40 40"/></g></svg>`,
    
    'Cresson': `<svg viewBox="0 0 64 64" class="custom-icon"><g fill="#228B22"><circle cx="24" cy="20" r="6"/><circle cx="40" cy="20" r="6"/><circle cx="32" cy="32" r="6"/><circle cx="20" cy="40" r="5"/><circle cx="44" cy="40" r="5"/><circle cx="32" cy="48" r="5"/></g><g stroke="#90EE90" stroke-width="2" fill="none"><path d="M24 20 L32 32"/><path d="M40 20 L32 32"/><path d="M32 32 L20 40"/><path d="M32 32 L44 40"/><path d="M32 32 L32 48"/></g></svg>`,
    
    'Artichaut': `<svg viewBox="0 0 64 64" class="custom-icon"><ellipse cx="32" cy="36" rx="16" ry="20" fill="#9ACD32"/><g fill="#228B22"><ellipse cx="32" cy="30" rx="12" ry="6"/><ellipse cx="32" cy="36" rx="10" ry="6"/><ellipse cx="32" cy="42" rx="8" ry="6"/></g><path d="M32 16 Q28 20 32 24 Q36 20 32 16" fill="#228B22"/></svg>`,
    
    'Asperge': `<svg viewBox="0 0 64 64" class="custom-icon"><rect x="30" y="16" width="4" height="40" fill="#90EE90"/><ellipse cx="32" cy="16" rx="3" ry="8" fill="#228B22"/><g fill="#9ACD32"><ellipse cx="28" cy="24" rx="2" ry="4"/><ellipse cx="36" cy="28" rx="2" ry="4"/><ellipse cx="28" cy="36" rx="2" ry="4"/><ellipse cx="36" cy="40" rx="2" ry="4"/></g></svg>`,
    
    'Radis': `<svg viewBox="0 0 64 64" class="custom-icon"><ellipse cx="32" cy="40" rx="12" ry="16" fill="#FF6347"/><ellipse cx="32" cy="40" rx="8" ry="12" fill="#FF4500"/><path d="M32 24 L28 16 L32 8 L36 16 Z" fill="#228B22"/><circle cx="32" cy="44" r="2" fill="#FFF"/></svg>`,
    
    'Chou rouge': `<svg viewBox="0 0 64 64" class="custom-icon"><circle cx="32" cy="32" r="22" fill="#8B008B"/><g stroke="#9932CC" stroke-width="2" fill="none"><circle cx="32" cy="32" r="18"/><circle cx="32" cy="32" r="14"/><circle cx="32" cy="32" r="10"/></g><g fill="#228B22"><path d="M20 12 Q24 16 20 20"/><path d="M44 12 Q40 16 44 20"/></g></svg>`,
    
    'Chou de Bruxelles': `<svg viewBox="0 0 64 64" class="custom-icon"><circle cx="32" cy="32" r="18" fill="#90EE90"/><g stroke="#228B22" stroke-width="1" fill="none"><circle cx="32" cy="32" r="14"/><circle cx="32" cy="32" r="10"/><circle cx="32" cy="32" r="6"/></g><path d="M32 14 Q28 18 32 22 Q36 18 32 14" fill="#228B22"/></svg>`,
    
    'Chou chinois': `<svg viewBox="0 0 64 64" class="custom-icon"><ellipse cx="32" cy="32" rx="14" ry="22" fill="#F0F8FF"/><g stroke="#90EE90" stroke-width="2" fill="none"><path d="M22 20 Q32 18 42 20"/><path d="M22 28 Q32 26 42 28"/><path d="M22 36 Q32 34 42 36"/><path d="M22 44 Q32 42 42 44"/></g></svg>`,
    
    'Blette': `<svg viewBox="0 0 64 64" class="custom-icon"><g fill="#228B22"><ellipse cx="26" cy="24" rx="6" ry="12"/><ellipse cx="32" cy="28" rx="6" ry="14"/><ellipse cx="38" cy="24" rx="6" ry="12"/></g><g fill="#F5F5DC"><rect x="26" y="36" width="4" height="16"/><rect x="30" y="38" width="4" height="16"/><rect x="34" y="36" width="4" height="16"/></g></svg>`,
    
    'Poireau': `<svg viewBox="0 0 64 64" class="custom-icon"><ellipse cx="32" cy="44" rx="8" ry="12" fill="#F5F5DC"/><rect x="28" y="16" width="8" height="32" fill="#90EE90"/><g fill="#228B22"><path d="M24 16 L24 32"/><path d="M28 14 L28 30"/><path d="M32 12 L32 28"/><path d="M36 14 L36 30"/><path d="M40 16 L40 32"/></g></svg>`,
    
    'Échalote': `<svg viewBox="0 0 64 64" class="custom-icon"><ellipse cx="32" cy="38" rx="12" ry="18" fill="#8B4513"/><ellipse cx="32" cy="38" rx="8" ry="14" fill="#CD853F"/><g fill="#228B22"><path d="M28 20 L28 12"/><path d="M32 18 L32 10"/><path d="M36 20 L36 12"/></g></svg>`,
    
    'Topinambour': `<svg viewBox="0 0 64 64" class="custom-icon"><ellipse cx="32" cy="36" rx="18" ry="20" fill="#D2B48C"/><g fill="#F5DEB3"><ellipse cx="28" cy="32" rx="4" ry="6"/><ellipse cx="36" cy="32" rx="4" ry="6"/><ellipse cx="32" cy="42" rx="6" ry="4"/></g><g fill="#228B22"><path d="M26 16 L26 24"/><path d="M32 14 L32 22"/><path d="M38 16 L38 24"/></g></svg>`,
    
    'Betterave': `<svg viewBox="0 0 64 64" class="custom-icon"><circle cx="32" cy="38" r="18" fill="#8B0000"/><circle cx="32" cy="38" r="14" fill="#DC143C"/><circle cx="32" cy="38" r="10" fill="#B22222"/><g fill="#228B22"><path d="M24 20 Q28 16 32 20 Q36 16 40 20" stroke="#9ACD32" stroke-width="3" fill="none"/><path d="M26 18 L26 12"/><path d="M30 16 L30 10"/><path d="M34 16 L34 10"/><path d="M38 18 L38 12"/></g><g stroke="#8B0000" stroke-width="1" fill="none"><circle cx="32" cy="38" r="6"/></g></svg>`,
    
    'Poivron vert': `<svg viewBox="0 0 64 64" class="custom-icon"><path d="M20 24 Q20 16 28 16 L36 16 Q44 16 44 24 L44 44 Q44 52 36 52 L28 52 Q20 52 20 44 Z" fill="#228B22"/><path d="M22 24 Q22 18 28 18 L36 18 Q42 18 42 24 L42 44 Q42 50 36 50 L28 50 Q22 50 22 44 Z" fill="#32CD32"/><g fill="#90EE90"><ellipse cx="28" cy="30" rx="3" ry="6"/><ellipse cx="36" cy="30" rx="3" ry="6"/><ellipse cx="32" cy="42" rx="4" ry="6"/></g><path d="M32 16 Q28 12 32 8 Q36 12 32 16" fill="#228B22"/></svg>`,
    
    'Poivron jaune': `<svg viewBox="0 0 64 64" class="custom-icon"><path d="M20 24 Q20 16 28 16 L36 16 Q44 16 44 24 L44 44 Q44 52 36 52 L28 52 Q20 52 20 44 Z" fill="#DAA520"/><path d="M22 24 Q22 18 28 18 L36 18 Q42 18 42 24 L42 44 Q42 50 36 50 L28 50 Q22 50 22 44 Z" fill="#FFD700"/><g fill="#FFFF99"><ellipse cx="28" cy="30" rx="3" ry="6"/><ellipse cx="36" cy="30" rx="3" ry="6"/><ellipse cx="32" cy="42" rx="4" ry="6"/></g><path d="M32 16 Q28 12 32 8 Q36 12 32 16" fill="#228B22"/></svg>`,
    
    // Icônes additionnelles pour compléter
    'Mandarine': `<svg viewBox="0 0 64 64" class="custom-icon"><circle cx="32" cy="32" r="22" fill="#FF8C00"/><circle cx="32" cy="32" r="18" fill="#FFA500"/><g stroke="#FF4500" stroke-width="1" fill="none"><circle cx="32" cy="32" r="14"/><circle cx="32" cy="32" r="10"/></g><ellipse cx="28" cy="28" rx="3" ry="2" fill="#FFB347" opacity="0.8"/><path d="M32 10 Q28 14 32 18 Q36 14 32 10" fill="#228B22"/></svg>`,
    
    'Clémentine': `<svg viewBox="0 0 64 64" class="custom-icon"><circle cx="32" cy="32" r="20" fill="#FFD700"/><circle cx="32" cy="32" r="16" fill="#FFFF99"/><g stroke="#FFA500" stroke-width="1" fill="none"><circle cx="32" cy="32" r="12"/><circle cx="32" cy="32" r="8"/></g><ellipse cx="28" cy="28" rx="2" ry="1" fill="#FFE135" opacity="0.9"/><path d="M32 12 Q30 16 32 20 Q34 16 32 12" fill="#228B22"/></svg>`,
    
    'Courge butternut': `<svg viewBox="0 0 64 64" class="custom-icon"><path d="M32 16 Q28 20 28 32 Q28 36 24 40 Q20 44 20 52 Q20 56 24 56 L40 56 Q44 56 44 52 Q44 44 40 40 Q36 36 36 32 Q36 20 32 16 Z" fill="#DEB887"/><path d="M32 18 Q30 22 30 32 Q30 36 26 40 Q22 44 22 52 Q22 54 24 54 L40 54 Q42 54 42 52 Q42 44 38 40 Q34 36 34 32 Q34 22 32 18 Z" fill="#F5DEB3"/><path d="M32 16 Q28 12 32 8 Q36 12 32 16" fill="#228B22"/></svg>`,
    
    'Grenade': `<svg viewBox="0 0 64 64" class="custom-icon"><circle cx="32" cy="36" r="20" fill="#8B0000"/><circle cx="32" cy="36" r="16" fill="#DC143C"/><circle cx="32" cy="36" r="12" fill="#B22222"/><g fill="#FF6B6B"><circle cx="26" cy="30" r="2"/><circle cx="32" cy="28" r="2"/><circle cx="38" cy="30" r="2"/><circle cx="24" cy="36" r="2"/><circle cx="32" cy="34" r="2"/><circle cx="40" cy="36" r="2"/><circle cx="26" cy="42" r="2"/><circle cx="32" cy="44" r="2"/><circle cx="38" cy="42" r="2"/></g><g fill="#8B4513"><path d="M28 16 Q30 14 32 16 Q34 14 36 16"/><rect x="30" y="12" width="1" height="6"/><rect x="33" y="12" width="1" height="6"/><path d="M29 18 Q31 16 33 18 Q35 16 37 18" stroke="#CD853F" stroke-width="1" fill="none"/></g><g fill="#228B22"><ellipse cx="28" cy="18" rx="2" ry="3"/><ellipse cx="32" cy="16" rx="2" ry="4"/><ellipse cx="36" cy="18" rx="2" ry="3"/></g></svg>`
};

// Fonction pour obtenir l'icône d'un aliment
function getAlimentIcon(nom) {
    if (customIcons[nom]) {
        return customIcons[nom];
    }
    return null; // Utiliser l'émoji par défaut
} 