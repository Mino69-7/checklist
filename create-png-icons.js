// Vous devrez installer: npm install canvas
// Ou utiliser le générateur HTML dans le navigateur

const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

const svgContent = fs.readFileSync('app-icon.svg', 'utf8');

async function createPngIcon(size, filename) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Convertir SVG en image
    const svgBlob = `data:image/svg+xml;base64,${Buffer.from(svgContent).toString('base64')}`;
    
    try {
        const img = await loadImage(svgBlob);
        ctx.drawImage(img, 0, 0, size, size);
        
        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync(filename, buffer);
        console.log(`✅ ${filename} créé (${size}x${size})`);
    } catch (error) {
        console.error(`❌ Erreur pour ${filename}:`, error);
    }
}

async function generateAllIcons() {
    console.log('🎨 Génération des icônes...');
    
    await createPngIcon(192, 'icon-192.png');
    await createPngIcon(512, 'icon-512.png');
    await createPngIcon(32, 'favicon-32.png');
    await createPngIcon(16, 'favicon-16.png');
    
    console.log('🎉 Toutes les icônes ont été générées !');
}

generateAllIcons(); 