// Icônes SVG personnalisées pour les aliments - Style Apple iOS
const customIcons = {
    // Fruits avec icônes personnalisées améliorées
    'Abricot': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="abricotGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#FFD700"/><stop offset="100%" stop-color="#FF8C00"/></radialGradient></defs><circle cx="32" cy="32" r="24" fill="url(#abricotGrad)"/><path d="M32 8 Q36 12 32 16 Q28 12 32 8" fill="#228B22"/><ellipse cx="28" cy="28" rx="3" ry="2" fill="#FFE55C" opacity="0.8"/></svg>`,
    
    'Prune': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="pruneGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#9966CC"/><stop offset="100%" stop-color="#663399"/></radialGradient></defs><ellipse cx="32" cy="32" rx="20" ry="24" fill="url(#pruneGrad)"/><path d="M32 8 Q36 12 32 16 Q28 12 32 8" fill="#228B22"/><ellipse cx="28" cy="28" rx="3" ry="2" fill="#B19CD9" opacity="0.7"/></svg>`,
    
    'Framboise': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="framboiseGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#FF6B9D"/><stop offset="100%" stop-color="#DC143C"/></radialGradient></defs><g fill="url(#framboiseGrad)"><circle cx="28" cy="20" r="3.5"/><circle cx="36" cy="20" r="3.5"/><circle cx="24" cy="28" r="3.5"/><circle cx="32" cy="28" r="3.5"/><circle cx="40" cy="28" r="3.5"/><circle cx="28" cy="36" r="3.5"/><circle cx="36" cy="36" r="3.5"/><circle cx="32" cy="44" r="3.5"/></g><path d="M32 12 Q28 8 32 4 Q36 8 32 12" fill="#228B22"/></svg>`,
    
    'Mûre': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="mureGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#4A4A4A"/><stop offset="100%" stop-color="#1C1C1C"/></radialGradient></defs><g fill="url(#mureGrad)"><circle cx="28" cy="18" r="3"/><circle cx="36" cy="18" r="3"/><circle cx="24" cy="26" r="3"/><circle cx="32" cy="26" r="3"/><circle cx="40" cy="26" r="3"/><circle cx="24" cy="34" r="3"/><circle cx="32" cy="34" r="3"/><circle cx="40" cy="34" r="3"/><circle cx="28" cy="42" r="3"/><circle cx="36" cy="42" r="3"/><circle cx="32" cy="48" r="3"/></g></svg>`,
    
    'Pamplemousse': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="pampleGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#FFB6C1"/><stop offset="100%" stop-color="#FF69B4"/></radialGradient></defs><circle cx="32" cy="32" r="24" fill="url(#pampleGrad)"/><circle cx="32" cy="32" r="18" fill="#FFC0CB"/><g stroke="#FF1493" stroke-width="1.5" fill="none"><path d="M16 32 L48 32"/><path d="M32 16 L32 48"/><path d="M22 22 L42 42"/><path d="M22 42 L42 22"/></g></svg>`,
    
    'Papaye': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="papayeGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#FFAB40"/><stop offset="100%" stop-color="#FF8F65"/></radialGradient></defs><ellipse cx="32" cy="32" rx="18" ry="24" fill="url(#papayeGrad)"/><ellipse cx="32" cy="32" rx="12" ry="18" fill="#FFB366"/><g fill="#654321"><circle cx="32" cy="24" r="1.5"/><circle cx="28" cy="28" r="1.5"/><circle cx="36" cy="28" r="1.5"/><circle cx="30" cy="32" r="1.5"/><circle cx="34" cy="32" r="1.5"/><circle cx="32" cy="36" r="1.5"/></g></svg>`,
    
    'Figue': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="figueGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#9370DB"/><stop offset="100%" stop-color="#663399"/></radialGradient></defs><path d="M32 8 Q20 12 20 32 Q20 48 32 56 Q44 48 44 32 Q44 12 32 8 Z" fill="url(#figueGrad)"/><ellipse cx="32" cy="32" rx="10" ry="14" fill="#DDA0DD"/><path d="M32 8 Q36 12 32 16 Q28 12 32 8" fill="#228B22"/></svg>`,
    
    'Datte': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="datteGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#CD853F"/><stop offset="100%" stop-color="#8B4513"/></radialGradient></defs><ellipse cx="32" cy="32" rx="14" ry="22" fill="url(#datteGrad)"/><ellipse cx="32" cy="32" rx="10" ry="18" fill="#A0522D"/><ellipse cx="32" cy="32" rx="5" ry="10" fill="#654321"/></svg>`,
    
    'Cranberry': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="cranGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#FF6B6B"/><stop offset="100%" stop-color="#DC143C"/></radialGradient></defs><circle cx="32" cy="32" r="20" fill="url(#cranGrad)"/><circle cx="32" cy="32" r="16" fill="#B22222"/><ellipse cx="28" cy="28" rx="3" ry="2" fill="#FF8E8E" opacity="0.8"/></svg>`,
    
    'Cassis': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="cassisGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#4A4A4A"/><stop offset="100%" stop-color="#1C1C1C"/></radialGradient></defs><circle cx="32" cy="32" r="18" fill="url(#cassisGrad)"/><circle cx="32" cy="32" r="14" fill="#2F2F2F"/><circle cx="28" cy="28" r="2" fill="#666" opacity="0.8"/></svg>`,
    
    'Groseille': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="groseGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#FF7F7F"/><stop offset="100%" stop-color="#FF6347"/></radialGradient></defs><circle cx="32" cy="32" r="16" fill="url(#groseGrad)"/><g stroke="#FF4500" stroke-width="1" fill="none"><circle cx="32" cy="32" r="12"/><circle cx="32" cy="32" r="8"/><circle cx="32" cy="32" r="4"/></g></svg>`,
    
    'Litchi': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="litchiGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#FFB6C1"/><stop offset="100%" stop-color="#FF69B4"/></radialGradient></defs><circle cx="32" cy="32" r="18" fill="url(#litchiGrad)"/><g fill="#FF1493"><circle cx="26" cy="26" r="1.5"/><circle cx="38" cy="28" r="1.5"/><circle cx="24" cy="36" r="1.5"/><circle cx="40" cy="38" r="1.5"/><circle cx="30" cy="42" r="1.5"/><circle cx="36" cy="44" r="1.5"/></g><ellipse cx="32" cy="32" rx="12" ry="14" fill="#FFF" opacity="0.7"/></svg>`,
    
    'Fruit de la passion': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="passionGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#8B4513"/><stop offset="100%" stop-color="#654321"/></radialGradient></defs><circle cx="32" cy="32" r="18" fill="url(#passionGrad)"/><circle cx="32" cy="32" r="14" fill="#FFD700"/><g fill="#FF8C00"><circle cx="28" cy="28" r="1.5"/><circle cx="36" cy="28" r="1.5"/><circle cx="24" cy="32" r="1.5"/><circle cx="32" cy="32" r="1.5"/><circle cx="40" cy="32" r="1.5"/><circle cx="28" cy="36" r="1.5"/><circle cx="36" cy="36" r="1.5"/></g></svg>`,
    
    'Carambole': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="caramGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#FFD700"/><stop offset="100%" stop-color="#FFA500"/></radialGradient></defs><g fill="url(#caramGrad)"><path d="M32 8 L36 24 L52 24 L40 36 L44 52 L32 40 L20 52 L24 36 L12 24 L28 24 Z"/></g><g fill="#FFFF99"><path d="M32 12 L34 26 L46 26 L38 34 L40 48 L32 38 L24 48 L26 34 L18 26 L30 26 Z"/></g></svg>`,
    
    'Goyave': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="goyaveGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#98FB98"/><stop offset="100%" stop-color="#90EE90"/></radialGradient></defs><circle cx="32" cy="32" r="20" fill="url(#goyaveGrad)"/><circle cx="32" cy="32" r="16" fill="#FFB6C1"/><g fill="#FF69B4"><circle cx="28" cy="28" r="1.5"/><circle cx="36" cy="28" r="1.5"/><circle cx="26" cy="34" r="1.5"/><circle cx="32" cy="34" r="1.5"/><circle cx="38" cy="34" r="1.5"/><circle cx="30" cy="40" r="1.5"/><circle cx="34" cy="40" r="1.5"/></g></svg>`,
    
    'Physalis': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="physGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#FFD700"/><stop offset="100%" stop-color="#FFA500"/></radialGradient></defs><circle cx="32" cy="36" r="10" fill="url(#physGrad)"/><g fill="#228B22" opacity="0.8"><path d="M20 20 Q24 16 32 20 Q40 16 44 20 Q42 28 38 32 Q34 36 32 36 Q30 36 26 32 Q22 28 20 20" stroke="#9ACD32" stroke-width="1.5" fill="none"/></g><circle cx="32" cy="36" r="6" fill="#FFFF99"/></svg>`,
    
    'Nectarine': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="nectGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#FFB347"/><stop offset="100%" stop-color="#FFA500"/></radialGradient></defs><circle cx="32" cy="32" r="22" fill="url(#nectGrad)"/><circle cx="32" cy="32" r="18" fill="#FFCC99"/><ellipse cx="28" cy="28" rx="5" ry="3" fill="#FF8C00" opacity="0.7"/><path d="M32 10 Q36 14 32 18 Q28 14 32 10" fill="#228B22"/></svg>`,
    
    'Mirabelle': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="miraGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#FFD700"/><stop offset="100%" stop-color="#FFFF99"/></radialGradient></defs><circle cx="32" cy="32" r="20" fill="url(#miraGrad)"/><circle cx="32" cy="32" r="16" fill="#FFFACD"/><ellipse cx="28" cy="28" rx="3" ry="2" fill="#FFA500" opacity="0.6"/><path d="M32 12 Q34 16 32 20 Q30 16 32 12" fill="#228B22"/></svg>`,
    
    'Quetsche': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="quetGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#9932CC"/><stop offset="100%" stop-color="#8B008B"/></radialGradient></defs><ellipse cx="32" cy="32" rx="16" ry="22" fill="url(#quetGrad)"/><ellipse cx="32" cy="32" rx="12" ry="18" fill="#DA70D6"/><ellipse cx="28" cy="28" rx="2" ry="3" fill="#DDA0DD" opacity="0.7"/><path d="M32 10 Q34 14 32 18 Q30 14 32 10" fill="#228B22"/></svg>`,
    
    'Reine-claude': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="reineGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#9ACD32"/><stop offset="100%" stop-color="#ADFF2F"/></radialGradient></defs><circle cx="32" cy="32" r="20" fill="url(#reineGrad)"/><circle cx="32" cy="32" r="16" fill="#98FB98"/><ellipse cx="28" cy="28" rx="3" ry="2" fill="#90EE90" opacity="0.8"/><path d="M32 12 Q34 16 32 20 Q30 16 32 12" fill="#228B22"/></svg>`,
    
    'Grenade': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="grenadeGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#DC143C"/><stop offset="100%" stop-color="#8B0000"/></radialGradient></defs><circle cx="32" cy="36" r="18" fill="url(#grenadeGrad)"/><circle cx="32" cy="36" r="14" fill="#B22222"/><g fill="#FF6B6B"><circle cx="26" cy="30" r="1.5"/><circle cx="32" cy="28" r="1.5"/><circle cx="38" cy="30" r="1.5"/><circle cx="24" cy="36" r="1.5"/><circle cx="32" cy="34" r="1.5"/><circle cx="40" cy="36" r="1.5"/><circle cx="26" cy="42" r="1.5"/><circle cx="32" cy="44" r="1.5"/><circle cx="38" cy="42" r="1.5"/></g><g fill="#8B4513"><path d="M28 18 Q30 16 32 18 Q34 16 36 18"/><rect x="30" y="14" width="1" height="5"/><rect x="33" y="14" width="1" height="5"/></g><g fill="#228B22"><ellipse cx="28" cy="20" rx="1.5" ry="2"/><ellipse cx="32" cy="18" rx="1.5" ry="3"/><ellipse cx="36" cy="20" rx="1.5" ry="2"/></g></svg>`,

    // Légumes avec icônes personnalisées améliorées
    'Haricot vert': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="haricotGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#32CD32"/><stop offset="100%" stop-color="#228B22"/></radialGradient></defs><path d="M12 32 Q32 16 52 32 Q32 48 12 32 Z" fill="url(#haricotGrad)" stroke="#1F5F1F" stroke-width="1"/><g fill="#90EE90"><ellipse cx="18" cy="30" rx="2.5" ry="4"/><ellipse cx="26" cy="27" rx="2.5" ry="4"/><ellipse cx="34" cy="25" rx="2.5" ry="4"/><ellipse cx="42" cy="27" rx="2.5" ry="4"/><ellipse cx="48" cy="30" rx="2.5" ry="4"/></g><path d="M12 32 Q32 20 52 32" stroke="#228B22" stroke-width="1" fill="none"/></svg>`,
    
    'Petit pois': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="poisGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#90EE90"/><stop offset="100%" stop-color="#32CD32"/></radialGradient><radialGradient id="grainePois" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#98FB98"/><stop offset="100%" stop-color="#228B22"/></radialGradient></defs><path d="M18 14 Q14 18 14 32 Q14 46 18 50 L46 50 Q50 46 50 32 Q50 18 46 14 Z" fill="url(#poisGrad)" stroke="#1F5F1F" stroke-width="1"/><g fill="url(#grainePois)"><circle cx="24" cy="24" r="4"/><circle cx="32" cy="32" r="4"/><circle cx="40" cy="40" r="4"/></g><path d="M18 14 Q32 12 46 14" stroke="#228B22" stroke-width="1" fill="none"/></svg>`,
    
    'Chou-fleur': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="choufleurGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#FFFACD"/><stop offset="100%" stop-color="#F5F5DC"/></radialGradient></defs><g fill="url(#choufleurGrad)"><circle cx="32" cy="28" r="5"/><circle cx="24" cy="32" r="4"/><circle cx="40" cy="32" r="4"/><circle cx="28" cy="40" r="3.5"/><circle cx="36" cy="40" r="3.5"/><circle cx="32" cy="36" r="3.5"/></g><g fill="#90EE90"><path d="M20 44 Q24 48 32 48 Q40 48 44 44" stroke="#228B22" stroke-width="1.5" fill="none"/></g></svg>`,
    
    'Panais': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="panaisGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#FAEBD7"/><stop offset="100%" stop-color="#F5DEB3"/></radialGradient></defs><path d="M32 8 L28 56 L36 56 Z" fill="url(#panaisGrad)"/><path d="M32 8 L30 56 L34 56 Z" fill="#FFFACD"/><path d="M32 8 Q36 12 32 16 Q28 12 32 8" fill="#228B22"/></svg>`,
    
    'Navet': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="navetGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#FFFACD"/><stop offset="100%" stop-color="#F5F5DC"/></radialGradient></defs><circle cx="32" cy="38" r="16" fill="url(#navetGrad)"/><circle cx="32" cy="38" r="12" fill="#FFF8DC"/><g fill="#9ACD32"><path d="M26 20 Q32 16 38 20 Q35 24 32 24 Q29 24 26 20"/><path d="M28 18 L28 12"/><path d="M32 16 L32 10"/><path d="M36 18 L36 12"/></g></svg>`,
    
    'Rutabaga': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="rutaGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#F0E68C"/><stop offset="100%" stop-color="#DAA520"/></radialGradient></defs><circle cx="32" cy="36" r="18" fill="url(#rutaGrad)"/><circle cx="32" cy="36" r="14" fill="#FFFFE0"/><ellipse cx="32" cy="30" rx="6" ry="3" fill="#9ACD32"/><g fill="#228B22"><path d="M28 16 L28 24"/><path d="M32 14 L32 22"/><path d="M36 16 L36 24"/></g></svg>`,
    
    'Céleri-rave': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="celeriGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#FFFACD"/><stop offset="100%" stop-color="#F5F5DC"/></radialGradient></defs><circle cx="32" cy="38" r="16" fill="url(#celeriGrad)"/><g stroke="#8FBC8F" stroke-width="1.5" fill="none"><circle cx="32" cy="38" r="12"/><circle cx="32" cy="38" r="8"/></g><g fill="#228B22"><path d="M24 20 L24 12"/><path d="M28 18 L28 10"/><path d="M32 16 L32 8"/><path d="M36 18 L36 10"/><path d="M40 20 L40 12"/></g></svg>`,
    
    'Fenouil': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="fenouilGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#FFFACD"/><stop offset="100%" stop-color="#F5F5DC"/></radialGradient></defs><ellipse cx="32" cy="42" rx="14" ry="12" fill="url(#fenouilGrad)"/><g fill="#228B22"><path d="M16 20 Q32 16 48 20" stroke-width="1.5" fill="none" stroke="#90EE90"/><path d="M20 24 Q32 20 44 24" stroke-width="1.5" fill="none" stroke="#90EE90"/><path d="M24 28 Q32 24 40 28" stroke-width="1.5" fill="none" stroke="#90EE90"/></g></svg>`,
    
    'Endive': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="endiveGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#F0F8FF"/><stop offset="100%" stop-color="#FFFACD"/></radialGradient></defs><ellipse cx="32" cy="32" rx="10" ry="22" fill="url(#endiveGrad)"/><ellipse cx="32" cy="32" rx="6" ry="18" fill="#FFF"/><g fill="#90EE90"><ellipse cx="32" cy="20" rx="5" ry="3"/><path d="M32 16 Q28 12 32 8 Q36 12 32 16"/></g></svg>`,
    
    'Mâche': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="macheGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#32CD32"/><stop offset="100%" stop-color="#228B22"/></radialGradient></defs><g fill="url(#macheGrad)"><ellipse cx="28" cy="24" rx="6" ry="10" transform="rotate(-30 28 24)"/><ellipse cx="36" cy="24" rx="6" ry="10" transform="rotate(30 36 24)"/><ellipse cx="32" cy="36" rx="6" ry="12"/><ellipse cx="24" cy="40" rx="5" ry="8" transform="rotate(-45 24 40)"/><ellipse cx="40" cy="40" rx="5" ry="8" transform="rotate(45 40 40)"/></g></svg>`,
    
    'Roquette': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="roquetteGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#32CD32"/><stop offset="100%" stop-color="#228B22"/></radialGradient></defs><g fill="url(#roquetteGrad)"><path d="M32 8 Q28 16 24 24 Q28 32 32 40 Q36 32 40 24 Q36 16 32 8"/><path d="M20 20 Q24 28 28 36"/><path d="M44 20 Q40 28 36 36"/><path d="M16 32 Q20 36 24 40"/><path d="M48 32 Q44 36 40 40"/></g></svg>`,
    
    'Cresson': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="cressonGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#32CD32"/><stop offset="100%" stop-color="#228B22"/></radialGradient></defs><g fill="url(#cressonGrad)"><circle cx="24" cy="20" r="5"/><circle cx="40" cy="20" r="5"/><circle cx="32" cy="32" r="5"/><circle cx="20" cy="40" r="4"/><circle cx="44" cy="40" r="4"/><circle cx="32" cy="48" r="4"/></g><g stroke="#90EE90" stroke-width="1.5" fill="none"><path d="M24 20 L32 32"/><path d="M40 20 L32 32"/><path d="M32 32 L20 40"/><path d="M32 32 L44 40"/><path d="M32 32 L32 48"/></g></svg>`,
    
    'Artichaut': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="artichaGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#9ACD32"/><stop offset="100%" stop-color="#228B22"/></radialGradient></defs><ellipse cx="32" cy="36" rx="14" ry="18" fill="url(#artichaGrad)"/><g fill="#32CD32"><ellipse cx="32" cy="30" rx="10" ry="5"/><ellipse cx="32" cy="36" rx="8" ry="5"/><ellipse cx="32" cy="42" rx="6" ry="5"/></g><path d="M32 16 Q28 20 32 24 Q36 20 32 16" fill="#228B22"/></svg>`,
    
    'Asperge': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="aspergeGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#90EE90"/><stop offset="100%" stop-color="#32CD32"/></radialGradient></defs><rect x="30" y="16" width="4" height="40" fill="url(#aspergeGrad)"/><ellipse cx="32" cy="16" rx="2.5" ry="6" fill="#228B22"/><g fill="#9ACD32"><ellipse cx="28" cy="24" rx="1.5" ry="3"/><ellipse cx="36" cy="28" rx="1.5" ry="3"/><ellipse cx="28" cy="36" rx="1.5" ry="3"/><ellipse cx="36" cy="40" rx="1.5" ry="3"/></g></svg>`,
    
    'Radis': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="radisGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#FF6B6B"/><stop offset="100%" stop-color="#FF4500"/></radialGradient></defs><ellipse cx="32" cy="40" rx="10" ry="14" fill="url(#radisGrad)"/><ellipse cx="32" cy="40" rx="6" ry="10" fill="#FF7F7F"/><path d="M32 24 L28 16 L32 8 L36 16 Z" fill="#228B22"/><circle cx="32" cy="44" r="1.5" fill="#FFF"/></svg>`,
    
    'Chou rouge': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="chourougeGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#9932CC"/><stop offset="100%" stop-color="#8B008B"/></radialGradient></defs><circle cx="32" cy="32" r="20" fill="url(#chourougeGrad)"/><g stroke="#DA70D6" stroke-width="1.5" fill="none"><circle cx="32" cy="32" r="16"/><circle cx="32" cy="32" r="12"/><circle cx="32" cy="32" r="8"/></g><g fill="#228B22"><path d="M20 12 Q24 16 20 20"/><path d="M44 12 Q40 16 44 20"/></g></svg>`,
    
    'Chou de Bruxelles': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="bruxellesGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#90EE90"/><stop offset="100%" stop-color="#32CD32"/></radialGradient></defs><circle cx="32" cy="32" r="16" fill="url(#bruxellesGrad)"/><g stroke="#228B22" stroke-width="1" fill="none"><circle cx="32" cy="32" r="12"/><circle cx="32" cy="32" r="8"/><circle cx="32" cy="32" r="4"/></g><path d="M32 14 Q28 18 32 22 Q36 18 32 14" fill="#228B22"/></svg>`,
    
    'Chou chinois': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="chinoisGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#F0F8FF"/><stop offset="100%" stop-color="#E6F3FF"/></radialGradient></defs><ellipse cx="32" cy="32" rx="12" ry="20" fill="url(#chinoisGrad)"/><g stroke="#90EE90" stroke-width="1.5" fill="none"><path d="M22 20 Q32 18 42 20"/><path d="M22 28 Q32 26 42 28"/><path d="M22 36 Q32 34 42 36"/><path d="M22 44 Q32 42 42 44"/></g></svg>`,
    
    'Blette': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="bletteGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#32CD32"/><stop offset="100%" stop-color="#228B22"/></radialGradient></defs><g fill="url(#bletteGrad)"><ellipse cx="26" cy="24" rx="5" ry="10"/><ellipse cx="32" cy="28" rx="5" ry="12"/><ellipse cx="38" cy="24" rx="5" ry="10"/></g><g fill="#F5F5DC"><rect x="26" y="36" width="3" height="14"/><rect x="30" y="38" width="3" height="14"/><rect x="34" y="36" width="3" height="14"/></g></svg>`,
    
    'Poireau': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="poireauGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#FFFACD"/><stop offset="100%" stop-color="#F5F5DC"/></radialGradient></defs><ellipse cx="32" cy="44" rx="6" ry="10" fill="url(#poireauGrad)"/><rect x="28" y="16" width="8" height="32" fill="#90EE90"/><g fill="#228B22"><path d="M24 16 L24 32"/><path d="M28 14 L28 30"/><path d="M32 12 L32 28"/><path d="M36 14 L36 30"/><path d="M40 16 L40 32"/></g></svg>`,
    
    'Échalote': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="echaloteGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#CD853F"/><stop offset="100%" stop-color="#8B4513"/></radialGradient></defs><ellipse cx="32" cy="38" rx="10" ry="16" fill="url(#echaloteGrad)"/><ellipse cx="32" cy="38" rx="6" ry="12" fill="#DEB887"/><g fill="#228B22"><path d="M28 20 L28 12"/><path d="M32 18 L32 10"/><path d="M36 20 L36 12"/></g></svg>`,
    
    'Topinambour': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="topiGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#F5DEB3"/><stop offset="100%" stop-color="#D2B48C"/></radialGradient></defs><ellipse cx="32" cy="36" rx="16" ry="18" fill="url(#topiGrad)"/><g fill="#FAEBD7"><ellipse cx="28" cy="32" rx="3" ry="5"/><ellipse cx="36" cy="32" rx="3" ry="5"/><ellipse cx="32" cy="42" rx="5" ry="3"/></g><g fill="#228B22"><path d="M26 16 L26 24"/><path d="M32 14 L32 22"/><path d="M38 16 L38 24"/></g></svg>`,
    
    'Betterave': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="betteraveGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#DC143C"/><stop offset="100%" stop-color="#8B0000"/></radialGradient></defs><circle cx="32" cy="38" r="16" fill="url(#betteraveGrad)"/><circle cx="32" cy="38" r="12" fill="#B22222"/><circle cx="32" cy="38" r="8" fill="#DC143C"/><g fill="#228B22"><path d="M24 20 Q28 16 32 20 Q36 16 40 20" stroke="#9ACD32" stroke-width="2" fill="none"/><path d="M26 18 L26 12"/><path d="M30 16 L30 10"/><path d="M34 16 L34 10"/><path d="M38 18 L38 12"/></g><g stroke="#8B0000" stroke-width="1" fill="none"><circle cx="32" cy="38" r="5"/></g></svg>`,
    
    'Poivron rouge': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="poivronrougeGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#FF6B6B"/><stop offset="100%" stop-color="#DC143C"/></radialGradient></defs><path d="M18 22 Q18 14 26 14 L38 14 Q46 14 46 22 L46 44 Q46 54 38 54 L26 54 Q18 54 18 44 Z" fill="url(#poivronrougeGrad)" stroke="#B22222" stroke-width="1"/><path d="M20 22 Q20 16 26 16 L38 16 Q44 16 44 22 L44 44 Q44 52 38 52 L26 52 Q20 52 20 44 Z" fill="#FF7F7F"/><g fill="#FFB6C1"><ellipse cx="26" cy="28" rx="2" ry="6"/><ellipse cx="38" cy="28" rx="2" ry="6"/><ellipse cx="32" cy="44" rx="3" ry="6"/></g><path d="M32 14 Q28 10 32 6 Q36 10 32 14" fill="#228B22"/></svg>`,
    
    'Poivron vert': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="poivronvertGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#32CD32"/><stop offset="100%" stop-color="#228B22"/></radialGradient></defs><path d="M18 22 Q18 14 26 14 L38 14 Q46 14 46 22 L46 44 Q46 54 38 54 L26 54 Q18 54 18 44 Z" fill="url(#poivronvertGrad)" stroke="#1F5F1F" stroke-width="1"/><path d="M20 22 Q20 16 26 16 L38 16 Q44 16 44 22 L44 44 Q44 52 38 52 L26 52 Q20 52 20 44 Z" fill="#90EE90"/><g fill="#98FB98"><ellipse cx="26" cy="28" rx="2" ry="6"/><ellipse cx="38" cy="28" rx="2" ry="6"/><ellipse cx="32" cy="44" rx="3" ry="6"/></g><path d="M32 14 Q28 10 32 6 Q36 10 32 14" fill="#228B22"/></svg>`,
    
    'Poivron jaune': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="poivronjauneGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#FFD700"/><stop offset="100%" stop-color="#DAA520"/></radialGradient></defs><path d="M18 22 Q18 14 26 14 L38 14 Q46 14 46 22 L46 44 Q46 54 38 54 L26 54 Q18 54 18 44 Z" fill="url(#poivronjauneGrad)" stroke="#B8860B" stroke-width="1"/><path d="M20 22 Q20 16 26 16 L38 16 Q44 16 44 22 L44 44 Q44 52 38 52 L26 52 Q20 52 20 44 Z" fill="#FFFF99"/><g fill="#FFFACD"><ellipse cx="26" cy="28" rx="2" ry="6"/><ellipse cx="38" cy="28" rx="2" ry="6"/><ellipse cx="32" cy="44" rx="3" ry="6"/></g><path d="M32 14 Q28 10 32 6 Q36 10 32 14" fill="#228B22"/></svg>`,
    
         'Courge butternut': `<svg viewBox="0 0 64 64" class="custom-icon"><defs><radialGradient id="butternutGrad" cx="0.3" cy="0.3"><stop offset="0%" stop-color="#F5DEB3"/><stop offset="100%" stop-color="#DEB887"/></radialGradient></defs><path d="M32 16 Q28 20 28 32 Q28 36 24 40 Q20 44 20 52 Q20 56 24 56 L40 56 Q44 56 44 52 Q44 44 40 40 Q36 36 36 32 Q36 20 32 16 Z" fill="url(#butternutGrad)"/><path d="M32 18 Q30 22 30 32 Q30 36 26 40 Q22 44 22 52 Q22 54 24 54 L40 54 Q42 54 42 52 Q42 44 38 40 Q34 36 34 32 Q34 22 32 18 Z" fill="#FAEBD7"/><path d="M32 16 Q28 12 32 8 Q36 12 32 16" fill="#228B22"/></svg>`
};

// Système centralisé de gestion des emojis/icônes - Cohérence Apple iOS
const EmojiManager = {
    // Mapping centralisé : nom aliment -> emoji/icône
    alimentsEmojis: {
        // Fruits avec emojis Apple iOS officiels
        'Pomme': '🍎',
        'Banane': '🍌', 
        'Poire': '🍐',
        'Pêche': '🍑',
        'Cerise': '🍒',
        'Raisin': '🍇',
        'Orange': '🍊',
        'Citron': '🍋',
        'Kiwi': '🥝',
        'Ananas': '🍍',
        'Mangue': '🥭',
        'Melon': '🍈',
        'Pastèque': '🍉',
        'Avocat': '🥑',
        'Noix de coco': '🥥',
        'Myrtille': '🫐',
        'Nectarine': '🍑',
        'Fraise': '🍓',
        'Tomate': '🍅',
        
        // Fruits similaires utilisant emojis Apple existants
        'Mandarine': '🍊',
        'Clémentine': '🍊', 
        'Pamplemousse': '🍊',
        'Papaye': '🥭',
        'Abricot': '🍑',
        'Mirabelle': '🍑',
        'Reine-claude': '🍑',
        'Framboise': '🫐',
        'Mûre': '🫐',
        'Cranberry': '🫐',
        'Cassis': '🫐',
        'Groseille': '🍒',
        
        // Légumes avec emojis Apple iOS officiels
        'Carotte': '🥕',
        'Courgette': '🥒',
        'Concombre': '🥒',
        'Haricot vert': '🫛',
        'Petit pois': '🫛',
        'Brocoli': '🥦',
        'Chou-fleur': '🥦',
                 'Potiron': '🎃',
         'Courge butternut': '🎃',
         'Patate douce': '🍠',
        'Aubergine': '🍆',
        'Laitue': '🥬',
        'Chou vert': '🥬',
        'Épinards': '🥬',
        'Oignon': '🧅',
        'Ail': '🧄',
        'Champignon de Paris': '🍄',
        'Champignon shiitaké': '🍄',
        'Maïs': '🌽',
        'Gingembre': '🫚',
        'Légumineuses': '🫘',
        'Haricot rouge': '🫘',
        
        // Autres aliments pour cohérence avec page prévention
        'Blé': '🌾',
        'Crevette': '🦐',
        'Piment': '🌶️',
        'Noix': '🥜',
        'Bonbon': '🍬',
        'Sucre': '🍬',
        'Café': '☕',
        'Poisson': '🐟',
        'Viande': '🥩',
        'Fromage': '🧀',
        'Œuf': '🥚',
        
        // Légumes similaires utilisant emojis Apple existants
        'Panais': '🥕',
        'Navet': '🥕',
        'Radis': '🥕',
        'Betterave': '🥕',
        'Betteraves': '🥕',
        'Rutabaga': '🥔',
        'Céleri-rave': '🥔',
        'Topinambour': '🥔',
        'Fenouil': '🥬',
        'Endive': '🥬',
        'Mâche': '🥬',
        'Roquette': '🥬',
        'Cresson': '🥬',
        'Asperge': '🥬',
        'Chou rouge': '🥬',
        'Chou de Bruxelles': '🥬',
        'Chou chinois': '🥬',
        'Blette': '🥬',
        'Poireau': '🧅',
        'Échalote': '🧅',
        'Artichaut': '🫒'
    },
    
         // Aliments nécessitant des icônes personnalisées (pas d'emoji Apple disponible)
     alimentsIconesPersonnalisees: [
         'Prune', 'Framboise', 'Mûre', 'Pamplemousse', 'Papaye', 'Figue', 'Datte',
         'Cranberry', 'Cassis', 'Groseille', 'Litchi', 'Fruit de la passion',
         'Carambole', 'Goyave', 'Physalis', 'Mirabelle', 'Quetsche', 'Reine-claude',
         'Grenade', 'Abricot', 'Haricot vert', 'Petit pois', 'Chou-fleur', 'Panais',
         'Navet', 'Rutabaga', 'Céleri-rave', 'Fenouil', 'Endive', 'Mâche', 'Roquette',
         'Cresson', 'Artichaut', 'Asperge', 'Radis', 'Chou rouge', 'Chou de Bruxelles',
         'Chou chinois', 'Blette', 'Poireau', 'Échalote', 'Topinambour', 'Betterave',
         'Poivron rouge', 'Poivron vert', 'Poivron jaune', 'Courge butternut'
     ],
    
    // Fonction principale pour obtenir l'emoji/icône d'un aliment
    getAlimentIcon(nomAliment) {
        // 1. Vérifier si une icône personnalisée existe
        if (this.alimentsIconesPersonnalisees.includes(nomAliment) && customIcons[nomAliment]) {
            // CORRECTION: Générer des IDs uniques pour éviter les conflits SVG
            const timestamp = Date.now();
            const random = Math.random().toString(36).substr(2, 9);
            const uniqueId = `${nomAliment.toLowerCase().replace(/[^a-z0-9]/g, '')}_${timestamp}_${random}`;
            
            // Remplacer tous les IDs dans le SVG par des IDs uniques
            let svgContent = customIcons[nomAliment];
            
            // Extraire et remplacer tous les IDs de gradients
            const gradientMatches = svgContent.match(/id="([^"]+)"/g);
            if (gradientMatches) {
                gradientMatches.forEach(match => {
                    const originalId = match.match(/id="([^"]+)"/)[1];
                    const newId = `${originalId}_${uniqueId}`;
                    
                    // Remplacer la définition de l'ID
                    svgContent = svgContent.replace(new RegExp(`id="${originalId}"`, 'g'), `id="${newId}"`);
                    // Remplacer toutes les références à cet ID
                    svgContent = svgContent.replace(new RegExp(`url\\(#${originalId}\\)`, 'g'), `url(#${newId})`);
                });
            }
            
            return svgContent;
        }
        
        // 2. Utiliser l'emoji Apple iOS officiel
        if (this.alimentsEmojis[nomAliment]) {
            return `<span class="food-emoji">${this.alimentsEmojis[nomAliment]}</span>`;
        }
        
        // 3. Fallback par défaut
        return `<span class="food-emoji">🍎</span>`;
    },
    
    // Fonction pour obtenir uniquement l'emoji (sans HTML)
    getAlimentEmoji(nomAliment) {
        if (this.alimentsEmojis[nomAliment]) {
            return this.alimentsEmojis[nomAliment];
        }
        return '🍎'; // Fallback
    },
    
    // Fonction pour vérifier si un aliment utilise une icône personnalisée
    hasCustomIcon(nomAliment) {
        return this.alimentsIconesPersonnalisees.includes(nomAliment) && customIcons[nomAliment];
    },
    
    // Fonction pour obtenir la liste de tous les aliments avec leurs icônes
    getAllAlimentsWithIcons() {
        const result = {};
        
        // Ajouter tous les aliments avec emojis
        Object.keys(this.alimentsEmojis).forEach(nom => {
            result[nom] = {
                type: 'emoji',
                icon: this.alimentsEmojis[nom],
                html: `<span class="food-emoji">${this.alimentsEmojis[nom]}</span>`
            };
        });
        
        // Ajouter tous les aliments avec icônes personnalisées
        this.alimentsIconesPersonnalisees.forEach(nom => {
            if (customIcons[nom]) {
                result[nom] = {
                    type: 'custom',
                    icon: customIcons[nom],
                    html: customIcons[nom]
                };
            }
        });
        
        return result;
    }
};

// Remplacer la fonction getAlimentIcon existante pour utiliser le système centralisé
function getAlimentIcon(nom) {
    return EmojiManager.getAlimentIcon(nom);
} 