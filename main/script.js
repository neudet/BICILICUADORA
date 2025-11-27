const defaultConfig = {
    background_color: "#000000",
    surface_color: "#0a0a0a",
    text_color: "#ffffff",
    primary_action_color: "#00ff9d",
    secondary_action_color: "#00d4ff",
    font_family: "Rajdhani",
    font_size: 16,
    hero_title: "BICIMAQUINA",
    hero_subtitle: "ENERGÍA DEL FUTURO",
    hero_description: "Tecnología revolucionaria que transforma cada pedaleo en energía limpia. El futuro de la sostenibilidad está aquí.",
    cta_primary: "Descubrir Más",
    feature_1_title: "Potencia Extrema",
    feature_2_title: "Diseño Inteligente",
    feature_3_title: "Cero Emisiones",
    stat_1_number: "500W",
    stat_1_label: "Potencia",
    stat_2_number: "100%",
    stat_2_label: "Sostenible",
    stat_3_number: "2L",
    stat_3_label: "Capacidad"
};

// Create particles
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Navbar hide on scroll down
let lastScroll = 0;
const navbar = document.getElementById('navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }

        lastScroll = currentScroll;
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax effect on stats
window.addEventListener('scroll', () => {
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;

        if (scrollPercent > 0 && scrollPercent < 1) {
            const translateY = (scrollPercent - 0.5) * 50;
            card.style.transform = `translateY(${translateY}px)`;
        }
    });
});

// Element SDK
async function onConfigChange(config) {
    const customFont = config.font_family || defaultConfig.font_family;
    const baseSize = config.font_size || defaultConfig.font_size;
    const baseFontStack = 'sans-serif';

    document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;
    document.body.style.background = config.background_color || defaultConfig.background_color;
    document.body.style.color = config.text_color || defaultConfig.text_color;

    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
        heroTitle.textContent = config.hero_title || defaultConfig.hero_title;
        heroTitle.style.fontSize = `${baseSize * 5}px`;
    }

    const heroSubtitle = document.getElementById('hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
        heroSubtitle.style.fontSize = `${baseSize * 2}px`;
    }

    const heroDescription = document.getElementById('hero-description');
    if (heroDescription) {
        heroDescription.textContent = config.hero_description || defaultConfig.hero_description;
        heroDescription.style.fontSize = `${baseSize * 1.25}px`;
    }

    const ctaPrimary = document.getElementById('cta-primary');
    if (ctaPrimary) {
        ctaPrimary.querySelector('span').textContent = config.cta_primary || defaultConfig.cta_primary;
        ctaPrimary.style.background = config.primary_action_color || defaultConfig.primary_action_color;
        ctaPrimary.style.fontSize = `${baseSize * 1.125}px`;
    }

    const feature1Title = document.getElementById('feature-1-title');
    if (feature1Title) {
        feature1Title.textContent = config.feature_1_title || defaultConfig.feature_1_title;
        feature1Title.style.fontSize = `${baseSize * 2}px`;
    }

    const feature2Title = document.getElementById('feature-2-title');
    if (feature2Title) {
        feature2Title.textContent = config.feature_2_title || defaultConfig.feature_2_title;
        feature2Title.style.fontSize = `${baseSize * 2}px`;
    }

    const feature3Title = document.getElementById('feature-3-title');
    if (feature3Title) {
        feature3Title.textContent = config.feature_3_title || defaultConfig.feature_3_title;
        feature3Title.style.fontSize = `${baseSize * 2}px`;
    }

    const stat1Number = document.getElementById('stat-1-number');
    if (stat1Number) {
        stat1Number.textContent = config.stat_1_number || defaultConfig.stat_1_number;
        stat1Number.style.fontSize = `${baseSize * 5}px`;
    }

    const stat1Label = document.getElementById('stat-1-label');
    if (stat1Label) {
        stat1Label.textContent = config.stat_1_label || defaultConfig.stat_1_label;
        stat1Label.style.fontSize = `${baseSize * 1.25}px`;
    }

    const stat2Number = document.getElementById('stat-2-number');
    if (stat2Number) {
        stat2Number.textContent = config.stat_2_number || defaultConfig.stat_2_number;
        stat2Number.style.fontSize = `${baseSize * 5}px`;
    }

    const stat2Label = document.getElementById('stat-2-label');
    if (stat2Label) {
        stat2Label.textContent = config.stat_2_label || defaultConfig.stat_2_label;
        stat2Label.style.fontSize = `${baseSize * 1.25}px`;
    }

    const stat3Number = document.getElementById('stat-3-number');
    if (stat3Number) {
        stat3Number.textContent = config.stat_3_number || defaultConfig.stat_3_number;
        stat3Number.style.fontSize = `${baseSize * 5}px`;
    }

    const stat3Label = document.getElementById('stat-3-label');
    if (stat3Label) {
        stat3Label.textContent = config.stat_3_label || defaultConfig.stat_3_label;
        stat3Label.style.fontSize = `${baseSize * 1.25}px`;
    }

    // Update primary color
    const primaryColor = config.primary_action_color || defaultConfig.primary_action_color;
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.style.background = primaryColor;
    });
    document.querySelectorAll('.btn-secondary').forEach(btn => {
        btn.style.color = primaryColor;
        btn.style.borderColor = primaryColor;
    });
}

function mapToCapabilities(config) {
    return {
        recolorables: [{
            get: () => config.background_color || defaultConfig.background_color,
            set: (value) => {
                config.background_color = value;
                if (window.elementSdk) {
                    window.elementSdk.setConfig({
                        background_color: value
                    });
                }
            }
        },
        {
            get: () => config.surface_color || defaultConfig.surface_color,
            set: (value) => {
                config.surface_color = value;
                if (window.elementSdk) {
                    window.elementSdk.setConfig({
                        surface_color: value
                    });
                }
            }
        },
        {
            get: () => config.text_color || defaultConfig.text_color,
            set: (value) => {
                config.text_color = value;
                if (window.elementSdk) {
                    window.elementSdk.setConfig({
                        text_color: value
                    });
                }
            }
        },
        {
            get: () => config.primary_action_color || defaultConfig.primary_action_color,
            set: (value) => {
                config.primary_action_color = value;
                if (window.elementSdk) {
                    window.elementSdk.setConfig({
                        primary_action_color: value
                    });
                }
            }
        },
        {
            get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
            set: (value) => {
                config.secondary_action_color = value;
                if (window.elementSdk) {
                    window.elementSdk.setConfig({
                        secondary_action_color: value
                    });
                }
            }
        }
        ],
        borderables: [],
        fontEditable: {
            get: () => config.font_family || defaultConfig.font_family,
            set: (value) => {
                config.font_family = value;
                if (window.elementSdk) {
                    window.elementSdk.setConfig({
                        font_family: value
                    });
                }
            }
        },
        fontSizeable: {
            get: () => config.font_size || defaultConfig.font_size,
            set: (value) => {
                config.font_size = value;
                if (window.elementSdk) {
                    window.elementSdk.setConfig({
                        font_size: value
                    });
                }
            }
        }
    };
}

function mapToEditPanelValues(config) {
    return new Map([
        ["hero_title", config.hero_title || defaultConfig.hero_title],
        ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
        ["hero_description", config.hero_description || defaultConfig.hero_description],
        ["cta_primary", config.cta_primary || defaultConfig.cta_primary],
        ["feature_1_title", config.feature_1_title || defaultConfig.feature_1_title],
        ["feature_2_title", config.feature_2_title || defaultConfig.feature_2_title],
        ["feature_3_title", config.feature_3_title || defaultConfig.feature_3_title],
        ["stat_1_number", config.stat_1_number || defaultConfig.stat_1_number],
        ["stat_1_label", config.stat_1_label || defaultConfig.stat_1_label],
        ["stat_2_number", config.stat_2_number || defaultConfig.stat_2_number],
        ["stat_2_label", config.stat_2_label || defaultConfig.stat_2_label],
        ["stat_3_number", config.stat_3_number || defaultConfig.stat_3_number],
        ["stat_3_label", config.stat_3_label || defaultConfig.stat_3_label]
    ]);
}

if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
    });
}