
// Data and Configuration
const FEATURE_DISPLAY_NAMES = {
    'Aroma': 'Aroma',
    'Flavor': 'Sabor',
    'Aftertaste': 'Retrogosto',
    'Acidity': 'Acidez',
    'Body': 'Corpo',
    'Balance': 'Equilíbrio',
    'Uniformity': 'Uniformidade',
    'Sweetness': 'Doçura'
};
const CLUSTER_CENTERS = {
    1: [0.41944629492218893, 0.4723857823557305, 0.4848905224798441, 0.4361523060513304,
        0.41366629447017683, 0.4657101139055356, 0.1209403436754183, 0.023290951628598497],
    2: [-0.6753657692118803, -0.7606055676916418, -0.7807399055912947, -0.7022647267025152,
    -0.6660591797901838, -0.7498568305769068, -0.1947304558983343, -0.03750161022459263]
};

const FEATURE_NAMES = ['Aroma', 'Flavor', 'Aftertaste', 'Acidity', 'Body', 'Balance', 'Uniformity', 'Sweetness'];

const NORMALIZATION_STATS = {
    Aroma: { mean: 7.567, std: 0.378 },
    Flavor: { mean: 7.52, std: 0.398 },
    Aftertaste: { mean: 7.491, std: 0.404 },
    Acidity: { mean: 7.536, std: 0.38 },
    Body: { mean: 7.517, std: 0.37 },
    Balance: { mean: 7.518, std: 0.409 },
    Uniformity: { mean: 9.855, std: 0.555 },
    Sweetness: { mean: 9.957, std: 0.616 }
};

const COFFEE_DATABASE = {
    // Cluster 1: Cafés de Seleção Especial
    1: [
        {
            name: "Orfeu (Linha Especiais/Microlotes)",
            description: "Bourbon Amarelo ou Catuaí. Alta doçura, notas de caramelo e acidez cítrica brilhante. Perfil Premium.",
            price: "R$ 92,00+",
            image: "Orfeu.png",
            url: "https://www.amazon.com.br/Caf%C3%A9-Gr%C3%A3os-Cl%C3%A1ssico-Orfeu-1kg/dp/B07HDSL78H/ref=asc_df_B07HDSL78H?mcid=7dd8010eaa6d3fb6afaf28dd4054fa2d&tag=googleshopp00-20&linkCode=df0&hvadid=709974871616&hvpos=&hvnetw=g&hvrand=11256080917773340375&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9220266&hvtargid=pla-850176142937&language=pt_BR&gad_source=1&th=1"
        },
        {
            name: "Baggio (Linha Bourbon)",
            description: "Grãos 100% Arábica de alta qualidade, corpo médio e finalização doce. Perfil equilibrado e marcante.",
            price: "R$ 80,00+",
            image: "Baggio.png",
            url: "https://www.amazon.com.br/Baggio-Bourbon-Espresso-Gr%C3%A3o-Caf%C3%A9/dp/B07GD2YLBW/ref=asc_df_B07GD2YLBW?mcid=69a307ed0023396285182b809597b63d&tag=googleshopp00-20&linkCode=df0&hvadid=709974871616&hvpos=&hvnetw=g&hvrand=17534066530836170492&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9220266&hvtargid=pla-664983118523&psc=1&language=pt_BR&gad_source=1"
        },
        {
            name: "Unique Cafés (Fazendas Premiadas)",
            description: "Variedades raras (Ex: Geisha) ou microlotes com notas florais e acidez complexa. Excelência em rastreabilidade.",
            price: "R$ 110,00+",
            image: "Unique.png",
            url: "https://www.amazon.com.br/Fazenda-Floresta-CAF%C3%89-GOURMET-GR%C3%83OS/dp/B099HB1DM3/ref=asc_df_B099HB1DM3?mcid=2480bf069f303044a1b690d1bed37233&tag=googleshopp00-20&linkCode=df0&hvadid=709964583482&hvpos=&hvnetw=g&hvrand=12782827271672118219&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9220266&hvtargid=pla-1673923385032&psc=1&language=pt_BR&gad_source=1"
        }
    ],
    // Cluster 2: Cafés de Seleção do Tradicional
    2: [
        {
            name: "Três Corações (Linha Dark Roast)",
            description: "Perfil intenso e encorpado. Torra escura que acentua o amargor e o corpo, reduzindo a acidez.",
            price: "R$ 60,00+",
            // CORRIGIDO: O nome do arquivo na sua pasta é 'TresCoracoes.png' (T maiúsculo)
            image: "TresCoracoes.png",
            url: "https://www.amazon.com.br/Torrado-Mo%C3%ADdo-Roast-Gourmet-Cora%C3%A7%C3%B5es/dp/B09VMDMNZD/ref=asc_df_B09VMDMNZD?mcid=a8528ca54806302390b6a2978cff458d&tag=googleshopp00-20&linkCode=df0&hvadid=709964583482&hvpos=&hvnetw=g&hvrand=7400245965034949408&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9220266&hvtargid=pla-2015437088045&psc=1&language=pt_BR&gad_source=1"
        },
        {
            name: "Pilão (Extra-Forte)",
            description: "Café com alto amargor e torra muito escura. Característica 'forte' tradicional brasileira. Baixa complexidade.",
            price: "R$ 40,00+",
            // CORRIGIDO: O nome do arquivo na sua pasta é 'Pilao.png'
            image: "Pilao.png",
            url: "https://www.amazon.com.br/Torrado-Mo%C3%ADdo-Extra-Forte-Pil%C3%A3o/dp/B07CZ51RMT/ref=asc_df_B07CZ51RMT?mcid=6804e98cc45a3531b69523ffcae9098a&tag=googleshopp00-20&linkCode=df0&hvadid=709964583482&hvpos=&hvnetw=g&hvrand=1381177032518699814&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9220266&hvtargid=pla-1147144156266&language=pt_BR&gad_source=1&th=1"
        },
        {
            name: "Melitta (Linha Tradicional)",
            description: "Perfil clássico, consistente, com notas simples e amargor moderado. Café de grande consumo.",
            price: "R$ 38,00+",
            image: "Melitta.png",
            url: "https://www.melitta.com.br/cafe-melitta-tradicional-vacuo-500g/p"
        }
    ]
};
const CLUSTER_PROFILES = {
    1: {
        name: "Cafés de Seleção Especial",
        description: "Cafés premium com valores acima da média em todas as características. Alta qualidade, uniformidade e doçura.",
        color: "#5D4037"
    },
    2: {
        name: "Cafés de Seleção do Tradicional",
        description: "Cafés com características mais variadas, valores abaixo da média. Perfis únicos e distintos que fogem do padrão tradicional.",
        color: "#8B4513"
    }
};

const sliderConfig = {
    Aroma: { min: 'Suave', max: 'Intenso', range: '(6.0-8.5)', realMin: 6.0, realMax: 8.5 },
    Flavor: { min: 'Leve', max: 'Complexo', range: '(6.0-8.5)', realMin: 6.0, realMax: 8.5 },
    Aftertaste: { min: 'Curto', max: 'Longo', range: '(6.0-8.5)', realMin: 6.0, realMax: 8.5 },
    Acidity: { min: 'Baixa', max: 'Alta', range: '(6.5-8.5)', realMin: 6.5, realMax: 8.5 },
    Body: { min: 'Leve', max: 'Encorpado', range: '(6.5-8.5)', realMin: 6.5, realMax: 8.5 },
    Balance: { min: 'Desbalanceado', max: 'Harmonioso', range: '(6.5-8.5)', realMin: 6.5, realMax: 8.5 },
    Uniformity: { min: 'Variável', max: 'Uniforme', range: '(8.0-10.0)', realMin: 8.0, realMax: 10.0 },
    Sweetness: { min: 'Moderada', max: 'Alta', range: '(9.0-10.0)', realMin: 9.0, realMax: 10.0 }
};

const profile = {
    Aroma: 7.5,
    Flavor: 7.5,
    Aftertaste: 7.4,
    Acidity: 7.5,
    Body: 7.5,
    Balance: 7.5,
    Uniformity: 9.8,
    Sweetness: 9.9
};

// Initialize sliders
function initSliders() {
    const container = document.getElementById('sliders');
    FEATURE_NAMES.forEach(feature => {
        const config = sliderConfig[feature];
        const div = document.createElement('div');
        div.className = 'slider-group';
        div.innerHTML = `
                    <div class="slider-header">
                        <label class="slider-label">${FEATURE_DISPLAY_NAMES[feature]} ${config.range}</label>
                        <input type="number" class="slider-input" id="input-${feature}" 
                            min="${config.realMin}" max="${config.realMax}" step="0.1" value="${profile[feature]}">
                    </div>
                    <input type="range" class="slider" id="slider-${feature}" 
                        min="${config.realMin}" max="${config.realMax}" step="0.01" value="${profile[feature]}">
                    <div class="slider-labels">
                        <span>${config.min}</span>
                        <span>${config.max}</span>
                    </div>
                `;
        container.appendChild(div);

        // Event listeners
        const slider = div.querySelector(`#slider-${feature}`);
        const input = div.querySelector(`#input-${feature}`);

        slider.addEventListener('input', (e) => {
            profile[feature] = parseFloat(e.target.value);
            input.value = profile[feature];
        });

        input.addEventListener('change', (e) => {
            const val = parseFloat(e.target.value);
            if (!isNaN(val) && val >= config.realMin && val <= config.realMax) {
                profile[feature] = val;
                slider.value = val;
            } else {
                e.target.value = profile[feature];
            }
        });
    });
}

function normalize(value, feature) {
    const { mean, std } = NORMALIZATION_STATS[feature];
    return (value - mean) / std;
}

function calculateCluster() {
    const normalizedValues = FEATURE_NAMES.map(feature => normalize(profile[feature], feature));

    console.log('Valores de entrada:', profile);
    console.log('Valores normalizados:', normalizedValues);

    let minDistance = Infinity;
    let assignedCluster = 1;
    const distances = {};

    [1, 2].forEach(clusterId => {
        const center = CLUSTER_CENTERS[clusterId];
        const distance = normalizedValues.reduce((sum, val, idx) =>
            sum + Math.pow(val - center[idx], 2), 0
        );

        distances[clusterId] = distance;
        console.log(`Distância para Cluster ${clusterId}:`, distance);

        if (distance < minDistance) {
            minDistance = distance;
            assignedCluster = clusterId;
        }
    });

    console.log('Cluster atribuído:', assignedCluster);

    const radarData = FEATURE_NAMES.map((name, idx) => ({
        feature: name,
        'Seu Perfil': normalizedValues[idx],
        'Centro do Cluster': CLUSTER_CENTERS[assignedCluster][idx]
    }));

    displayResults({
        cluster: assignedCluster,
        distance: Math.sqrt(minDistance),
        distances: { cluster1: Math.sqrt(distances[1]), cluster2: Math.sqrt(distances[2]) },
        radarData,
        recommendations: COFFEE_DATABASE[assignedCluster]
    });
}

function displayResults(result) {
    document.getElementById('emptyState').classList.add('hidden');
    const resultsDiv = document.getElementById('results');
    resultsDiv.classList.remove('hidden');

    const profile = CLUSTER_PROFILES[result.cluster];

    resultsDiv.innerHTML = `
        <div class="result-card" style="border-color: ${profile.color};">
            <div class="cluster-header">
                <div>
                    <div style="font-size: 0.875rem; font-weight: 600; margin-bottom: 0.25rem; color: #5D4037;">
                        Cluster Identificado
                    </div>
                    <div class="cluster-number" style="color: ${profile.color};">
                        Cluster ${result.cluster}
                    </div>
                </div>
                <div class="cluster-badge" style="background-color: ${profile.color};">
                    🏆
                </div>
            </div>
            <h3 class="cluster-name">${profile.name}</h3>
            <p class="cluster-description">${profile.description}</p>
            <div class="distances">
                <div><strong>Distância ao Cluster 1:</strong> ${result.distances.cluster1.toFixed(3)}</div>
                <div><strong>Distância ao Cluster 2:</strong> ${result.distances.cluster2.toFixed(3)}</div>
                <div style="margin-top: 0.5rem; font-size: 0.75rem; color: #8B4513;">
                    (Menor distância = maior similaridade)
                </div>
            </div>
        </div>

        <div class="result-card" style="border-color: #5D4037; background: #FFFFFF;">
            <h3 style="font-size: 1.125rem; font-weight: bold; margin-bottom: 1rem; color: #222222; display: flex; align-items: center; gap: 0.5rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5D4037" stroke-width="2">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                Perfil Sensorial Comparativo
            </h3>
            <canvas id="radarChart"></canvas>
        </div>

        <div class="result-card" style="border-color: #5D4037; background: rgba(255, 255, 255, 0.9);">
            <h3 style="font-size: 1.125rem; font-weight: bold; margin-bottom: 1rem; color: #222222; display: flex; align-items: center; gap: 0.5rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5D4037" stroke-width="2">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                </svg>
                Grãos Recomendados
            </h3>
            <div>
                ${result.recommendations.map(coffee => `
                    <div class="coffee-item" style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem; border-bottom: 1px dashed #E8D5C8; padding-bottom: 1rem;">
                        
                        <div class="coffee-image-container" style="min-width: 60px; height: 80px; background-color: #F7F3F0; border-radius: 4px; overflow: hidden; border: 1px solid #D7C7C0; cursor: pointer;"
                            onclick="window.open('${coffee.url}', '_blank')">
                            <img src="images/${coffee.image ? coffee.image : 'placeholder.png'}" 
                                alt="Embalagem de ${coffee.name}" 
                                style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div class="coffee-content" style="flex-grow: 1; display: flex; justify-content: space-between;">
                            <div class="coffee-info">
                                <div class="coffee-name" style="font-weight: bold; color: #5D4037;">${coffee.name}</div>
                                <div class="coffee-desc" style="font-size: 0.875rem; color: #8B4513;">${coffee.description}</div>
                            </div>
                            <div class="coffee-price" style="font-weight: bold; color: #5D4037; font-size: 1.1rem; min-width: 60px; text-align: right;">${coffee.price}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    drawRadarChart(result.radarData);
}

function drawRadarChart(data) {
    const canvas = document.getElementById('radarChart');
    const ctx = canvas.getContext('2d');
    const width = canvas.offsetWidth;
    const height = 320;
    canvas.width = width;
    canvas.height = height;

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.35;

    ctx.clearRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = 'rgba(93, 64, 55, 0.3)';
    ctx.lineWidth = 1;
    for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        for (let j = 0; j <= data.length; j++) {
            const angle = (j * 2 * Math.PI) / data.length - Math.PI / 2;
            const r = (radius * i) / 5;
            const x = centerX + r * Math.cos(angle);
            const y = centerY + r * Math.sin(angle);
            if (j === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
    }

    // Draw axes and labels
    ctx.strokeStyle = 'rgba(93, 64, 55, 0.3)';
    ctx.fillStyle = '#222222';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    data.forEach((item, i) => {
        const angle = (i * 2 * Math.PI) / data.length - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
        ctx.stroke();

        const labelRadius = radius + 30;
        const labelX = centerX + labelRadius * Math.cos(angle);
        const labelY = centerY + labelRadius * Math.sin(angle);
        ctx.fillText(FEATURE_DISPLAY_NAMES[item.feature], labelX, labelY);
    });

    // Normalize data to 0-1 range for drawing
    const maxVal = Math.max(...data.flatMap(d => [Math.abs(d['Seu Perfil']), Math.abs(d['Centro do Cluster'])]));

    // Draw user profile
    ctx.strokeStyle = '#5D4037';
    ctx.fillStyle = 'rgba(93, 64, 55, 0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    data.forEach((item, i) => {
        const angle = (i * 2 * Math.PI) / data.length - Math.PI / 2;
        const value = ((item['Seu Perfil'] + maxVal) / (2 * maxVal));
        const r = radius * value;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw cluster center
    ctx.strokeStyle = '#8B4513';
    ctx.fillStyle = 'rgba(139, 69, 19, 0.3)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    data.forEach((item, i) => {
        const angle = (i * 2 * Math.PI) / data.length - Math.PI / 2;
        const value = ((item['Centro do Cluster'] + maxVal) / (2 * maxVal));
        const r = radius * value;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw legend
    const legendY = height - 30;
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'left';

    // User profile legend
    ctx.fillStyle = '#5D4037';
    ctx.fillRect(width / 2 - 150, legendY, 15, 15);
    ctx.fillText('Seu Perfil', width / 2 - 130, legendY + 8);

    // Cluster center legend
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(width / 2 + 20, legendY, 15, 15);
    ctx.fillText('Centro do Cluster', width / 2 + 40, legendY + 8);
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', initSliders);