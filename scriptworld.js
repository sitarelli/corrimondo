/**
 * CORRI IL MONDO - WORLD TOUR EDITION
 */

const worldCapitals = [
    // AMERICHE
    { città: "Washington D.C.", regione: "Stati Uniti", zona: "AMERICHE", curiosità: "Il 'D.C.' sta per District of Columbia e non appartiene a nessuno Stato." },
    { città: "Ottawa", regione: "Canada", zona: "AMERICHE", curiosità: "Scelta come capitale dalla Regina Vittoria perché lontana dal confine USA." },
    { città: "Città del Messico", regione: "Messico", zona: "AMERICHE", curiosità: "Costruita sulle rovine dell'antica capitale azteca Tenochtitlán." },
    { città: "L'Avana", regione: "Cuba", zona: "AMERICHE", curiosità: "Celebre per le sue auto d'epoca americane e l'architettura coloniale." },
    { città: "Brasilia", regione: "Brasile", zona: "AMERICHE", curiosità: "Costruita da zero in soli 41 mesi, vista dall'alto ha la forma di un aeroplano." },
    { città: "Buenos Aires", regione: "Argentina", zona: "AMERICHE", curiosità: "Chiamata la 'Parigi del Sud' per i suoi ampi viali." },
    { città: "Lima", regione: "Perù", zona: "AMERICHE", curiosità: "Fondata da Francisco Pizarro, è conosciuta come la 'Città dei Re'." },
    { città: "Santiago", regione: "Cile", zona: "AMERICHE", curiosità: "Circondata dalle spettacolari vette innevate della Cordigliera delle Ande." },
    { città: "Bogotà", regione: "Colombia", zona: "AMERICHE", curiosità: "Situata a 2.640 metri di altezza, è una delle capitali più alte del mondo." },
    { città: "Quito", regione: "Ecuador", zona: "AMERICHE", curiosità: "La capitale più vicina all'equatore e Patrimonio UNESCO." },

    // ASIA
    { città: "Tokyo", regione: "Giappone", zona: "ASIA", curiosità: "L'area metropolitana più popolosa al mondo." },
    { città: "Pechino", regione: "Cina", zona: "ASIA", curiosità: "Ospita la Città Proibita, il più grande complesso di palazzi al mondo." },
    { città: "Seoul", regione: "Corea del Sud", zona: "ASIA", curiosità: "Una metropoli hi-tech dove i palazzi moderni circondano antichi templi." },
    { città: "Bangkok", regione: "Thailandia", zona: "ASIA", curiosità: "Il suo nome cerimoniale è uno dei nomi di città più lunghi al mondo." },
    { città: "Nuova Delhi", regione: "India", zona: "ASIA", curiosità: "Famosa per i suoi mercati caotici, le spezie e il maestoso Forte Rosso." },
    { città: "Giacarta", regione: "Indonesia", zona: "ASIA", curiosità: "Una metropoli vibrante che sta per essere sostituita da Nusantara come capitale." },
    { città: "Singapore", regione: "Singapore", zona: "ASIA", curiosità: "Una città-stato nota per la sua pulizia impeccabile." },
    { città: "Hanoi", regione: "Vietnam", zona: "ASIA", curiosità: "Famosa per la sua architettura secolare e l'influenza francese." },
    { città: "Manila", regione: "Filippine", zona: "ASIA", curiosità: "Nota per Intramuros, il quartiere coloniale fortificato." },
    { città: "Kuala Lumpur", regione: "Malesia", zona: "ASIA", curiosità: "Dominata dalle Torri Petronas, ex edifici più alti del mondo." },
    { città: "Riad", regione: "Arabia Saudita", zona: "ASIA", curiosità: "Il centro finanziario del Paese, sorta in un'oasi nel deserto." },
    { città: "Abu Dhabi", regione: "Emirati Arabi Uniti", zona: "ASIA", curiosità: "Ospita la spettacolare Grande Moschea dello Sceicco Zayed." },
    { città: "Doha", regione: "Qatar", zona: "ASIA", curiosità: "Città modernissima famosa per i suoi musei d'arte." },
    { città: "Gerusalemme", regione: "Israele", zona: "ASIA", curiosità: "Una delle città più antiche del mondo, sacra per tre religioni." },
    { città: "Teheran", regione: "Iran", zona: "ASIA", curiosità: "Situata ai piedi dei monti Alborz." },

    // AFRICA
    { città: "Il Cairo", regione: "Egitto", zona: "AFRICA", curiosità: "La più grande città dell'Africa, vicina alle Piramidi di Giza." },
    { città: "Nairobi", regione: "Kenya", zona: "AFRICA", curiosità: "L'unica capitale al mondo con un Parco Nazionale entro i confini cittadini." },
    { città: "Città del Capo", regione: "Sudafrica", zona: "AFRICA", curiosità: "Capitale legislativa, sovrastata dalla Table Mountain." },
    { città: "Rabat", regione: "Marocco", zona: "AFRICA", curiosità: "Una delle quattro città imperiali del Marocco." },
    { città: "Addis Abeba", regione: "Etiopia", zona: "AFRICA", curiosità: "Sede dell'Unione Africana, chiamata 'Capitale dell'Africa'." },
    { città: "Dakar", regione: "Senegal", zona: "AFRICA", curiosità: "La città più occidentale dell'Africa, famosa per il rally." },
    { città: "Abuja", regione: "Nigeria", zona: "AFRICA", curiosità: "Città pianificata costruita negli anni '80." },
    { città: "Algeri", regione: "Algeria", zona: "AFRICA", curiosità: "Chiamata 'La Bianca' per il colore degli edifici sul Mediterraneo." },
    { città: "Tunisi", regione: "Tunisia", zona: "AFRICA", curiosità: "Situata vicino alle rovine dell'antica Cartagine." },
    { città: "Antananarivo", regione: "Madagascar", zona: "AFRICA", curiosità: "Il suo nome significa 'La Città dei Mille'." },

    // OCEANIA
    { città: "Canberra", regione: "Australia", zona: "OCEANIA", curiosità: "Scelta come compromesso tra Sydney e Melbourne." },
    { città: "Wellington", regione: "Nuova Zelanda", zona: "OCEANIA", curiosità: "La capitale più a sud del mondo." },
    { città: "Suva", regione: "Fiji", zona: "OCEANIA", curiosità: "Il principale porto del Pacifico meridionale." },

    // EUROPA SELEZIONATA
    { città: "Londra", regione: "Regno Unito", zona: "EUROPA", curiosità: "Ospita la metropolitana più antica del mondo." },
    { città: "Parigi", regione: "Francia", zona: "EUROPA", curiosità: "Nota come la 'Ville Lumière' per la sua illuminazione storica." },
    { città: "Roma", regione: "Italia", zona: "EUROPA", curiosità: "L'unica città al mondo a ospitare uno Stato intero (il Vaticano)." },
    { città: "Mosca", regione: "Russia", zona: "EUROPA", curiosità: "Le sue stazioni metro sono veri palazzi sotterranei." },
    { città: "Berlino", regione: "Germania", zona: "EUROPA", curiosità: "Ha più ponti di Venezia (circa 1.700)." },
    { città: "Madrid", regione: "Spagna", zona: "EUROPA", curiosità: "Si trova esattamente al centro della penisola iberica." },
    { città: "Atene", regione: "Grecia", zona: "EUROPA", curiosità: "È stata abitata per oltre 3.400 anni." },
    { città: "Amsterdam", regione: "Paesi Bassi", zona: "EUROPA", curiosità: "Poggia su circa 11 milioni di pali di legno." },
    { città: "Vienna", regione: "Austria", zona: "EUROPA", curiosità: "Famosa per i suoi caffè storici UNESCO." },
    { città: "Istanbul", regione: "Turchia", zona: "ASIA/EUROPA", curiosità: "L'unica metropoli situata su due continenti contemporaneamente." }
];

/* --- RISORSE AUDIO --- */
const soundSbanda = new Audio('sbanda.mp3');
const soundAccelera = new Audio('accelera.mp3');
soundSbanda.volume = 0.5;
soundAccelera.volume = 0.5;

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playWinSound() {
    if (state.isMuted) return;
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.type = 'sine'; 
    oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.3);
}

/* --- CONFIGURAZIONE --- */
const ROAD_SETTINGS = {
    START_Y_PERCENT: 30.5,
    ROAD_WIDTH_TOP: 80,
    ROAD_WIDTH_BOTTOM: 700,
    TEXTURE_TILE_SIZE: 100,
    TEXTURE_SPEED_FACTOR: 2900,
    ROAD_PERSPECTIVE: 1500,
    ROAD_TILT: 15,
    ROAD_OPACITY: 0.3,
    LINES_WIDTH_TOP: 15,
    LINES_WIDTH_BOTTOM: 220,
    ROTATION_DEG: 170,
    PERSPECTIVE_POWER: 9,
    NUM_SEGMENTS: 15
};

const CONSTANTS = {
    NORMAL_SPEED: 0.0019,
    TURBO_SPEED: 0.03,
    EXIT_SPEED: 0.055
};

let state = {
    isPlaying: false,
    isMuted: false,
    score: 0,
    lives: 3,
    currentLane: 1,
    currentTarget: null,
    cityQueue: [],
    gates: [],
    roadLines: [],
    lastTime: 0,
    isTurbo: false,
    waveActive: false,
    animationFrameId: null,
    textureOffset: 0
};

// Riferimenti DOM
const playerEl = document.getElementById('player');
const entitiesContainer = document.getElementById('entities-container');
const scoreEl = document.getElementById('score-display');
const livesEl = document.getElementById('lives-display');
const targetDisplay = document.getElementById('target-display');
const gameViewport = document.getElementById('game-viewport');
const particlesContainer = document.getElementById('particles-container');
const overlayStart = document.getElementById('overlay-start');
const overlayOver = document.getElementById('overlay-over');
const lastErrorDisplay = document.getElementById('last-error-display');
const didYouKnowText = document.getElementById('did-you-know-text');

function init() {
    document.addEventListener('keydown', handleInput);
    gameViewport.addEventListener('mousedown', e => {
        if (!state.isPlaying) return;
        if (e.button === 0) {
            const rect = gameViewport.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            if (clickX < width * 0.40) state.currentLane = 0;
            else if (clickX > width * 0.60) state.currentLane = 2;
            else state.currentLane = 1;
            updatePlayerPosition();
        } 
        else if (e.button === 2) activateTurbo();
    });

    gameViewport.addEventListener('contextmenu', e => e.preventDefault());

    let touchStartX = 0;
    let touchStartY = 0;

    gameViewport.addEventListener('touchstart', e => { 
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, {passive: false});

    gameViewport.addEventListener('touchend', e => {
        if (!state.isPlaying) return;
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const diffX = touchEndX - touchStartX;
        const diffY = touchStartY - touchEndY;
        if (diffY > 60) activateTurbo();
        else if (Math.abs(diffX) > 40) {
            if (diffX > 0) moveRight(); else moveLeft();
        } 
        else {
            const rect = gameViewport.getBoundingClientRect();
            const tapX = touchEndX - rect.left;
            if (tapX < rect.width * 0.33) state.currentLane = 0;
            else if (tapX > rect.width * 0.66) state.currentLane = 2;
            else state.currentLane = 1;
            updatePlayerPosition();
        }
    }, {passive: false});

    const muteBtn = document.getElementById('mute-btn');
    if (muteBtn) {
        muteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            state.isMuted = !state.isMuted;
            muteBtn.innerText = state.isMuted ? '🔇' : '🔊';
            soundSbanda.muted = state.isMuted;
            soundAccelera.muted = state.isMuted;
            muteBtn.blur();
        });
    }
}

function handleInput(e) {
    if (!state.isPlaying) return;
    if (e.key === 'ArrowLeft') moveLeft();
    if (e.key === 'ArrowRight') moveRight();
    if (e.key === 'ArrowUp') activateTurbo();
}

function activateTurbo() {
    if (!state.isTurbo && state.waveActive) {
        if (!state.isMuted) soundAccelera.play();
        state.isTurbo = true;
        playerEl.classList.add('turbo-active');
    }
}

function moveLeft() { if (state.currentLane > 0) { state.currentLane--; updatePlayerPosition(); } }
function moveRight() { if (state.currentLane < 2) { state.currentLane++; updatePlayerPosition(); } }

function updatePlayerPosition() {
    playerEl.className = '';
    playerEl.classList.add('lane-' + state.currentLane);
    if(state.isTurbo) playerEl.classList.add('turbo-active');
}

function updateScore() { scoreEl.innerText = 'PUNTI: ' + state.score; }
function updateLives() { livesEl.innerText = '❤️'.repeat(state.lives); }

function initRoad() {
    let roadSurface = document.getElementById('road-surface');
    if (!roadSurface) {
        roadSurface = document.createElement('div');
        roadSurface.id = 'road-surface';
        gameViewport.insertBefore(roadSurface, particlesContainer || gameViewport.firstChild);
    }
    roadSurface.style.cssText = `
        position: absolute; bottom: -50px; left: 50%; width: 150%;
        height: ${100 - ROAD_SETTINGS.START_Y_PERCENT + 15}%;
        background-image: url('img/strada.png'); background-repeat: repeat;
        background-size: ${ROAD_SETTINGS.TEXTURE_TILE_SIZE}px ${ROAD_SETTINGS.TEXTURE_TILE_SIZE}px;
        background-color: #333; opacity: ${ROAD_SETTINGS.ROAD_OPACITY};
        transform-origin: bottom center;
        transform: translateX(-50%) perspective(${ROAD_SETTINGS.ROAD_PERSPECTIVE}px) rotateX(${ROAD_SETTINGS.ROAD_TILT}deg);
        clip-path: polygon(calc(50% - ${ROAD_SETTINGS.ROAD_WIDTH_TOP/2}px) 0%, calc(50% + ${ROAD_SETTINGS.ROAD_WIDTH_TOP/2}px) 0%, calc(50% + ${ROAD_SETTINGS.ROAD_WIDTH_BOTTOM/2}px) 100%, calc(50% - ${ROAD_SETTINGS.ROAD_WIDTH_BOTTOM/2}px) 100%);
        z-index: -5; pointer-events: none;
    `;
    state.roadLines = [];
    document.querySelectorAll('.road-line').forEach(l => l.remove());
    [-1, 1].forEach(side => {
        for (let i = 0; i < ROAD_SETTINGS.NUM_SEGMENTS; i++) {
            const line = document.createElement('div');
            line.classList.add('road-line');
            line.style.cssText = `position: absolute; background-color: rgba(255,255,255,0.9); width: 6px; height: 40px; transform-origin: top center; z-index: -4;`;
            gameViewport.insertBefore(line, particlesContainer);
            state.roadLines.push({ element: line, progress: i / ROAD_SETTINGS.NUM_SEGMENTS, side: side });
        }
    });
}

function startGame() {
    if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(() => {});
    state.isPlaying = true; state.score = 0; state.lives = 3; state.isTurbo = false;
    state.gates = []; state.currentLane = 1; state.lastTime = performance.now();
    
    // QUI USIAMO worldCapitals
    state.cityQueue = [...worldCapitals].sort(() => Math.random() - 0.5); 
    
    updateScore(); updateLives(); updatePlayerPosition();
    entitiesContainer.innerHTML = ''; particlesContainer.innerHTML = '';
    initRoad();
    overlayStart.classList.add('hidden'); overlayOver.classList.add('hidden');
    startNextRound();
    if (state.animationFrameId) cancelAnimationFrame(state.animationFrameId);
    requestAnimationFrame(loop);
}

function startNextRound() {
    if (state.cityQueue.length === 0) { showWinScreen(); return; }
    state.currentTarget = state.cityQueue.shift();
    targetDisplay.innerText = state.currentTarget.città;
    targetDisplay.classList.add('visible');
    spawnGates();
    state.waveActive = true; state.isTurbo = false;
    playerEl.classList.remove('turbo-active');
}

function spawnGates() {
    const correct = state.currentTarget;
    let cands = worldCapitals.filter(c => c.zona === correct.zona && c.regione !== correct.regione);
    if (cands.length < 2) {
        cands = worldCapitals.filter(c => c.regione !== correct.regione);
    }
    cands.sort(() => Math.random() - 0.5);
    const opts = [correct.regione, cands[0].regione, cands[1].regione].sort(() => Math.random() - 0.5);
    
    opts.forEach((text, index) => {
        const gate = document.createElement('div');
        gate.classList.add('gate');
        gate.innerText = text;
        entitiesContainer.appendChild(gate);
        state.gates.push({ 
            element: gate, progress: 0, laneIndex: index, 
            laneOffset: (index - 1), isCorrect: (text === correct.regione), 
            crashed: false, active: true 
        });
    });
}

function handleCollision(g) {
    g.active = false; g.hit = true; state.waveActive = false;
    if (g.isCorrect) {
        if(audioCtx.state === 'suspended') audioCtx.resume();
        playWinSound();
        state.isTurbo = true; playerEl.classList.add('turbo-active');
        state.score += 100; updateScore();
        playerEl.classList.add('glow-active');
        state.gates.forEach(o => { if(o !== g) o.element.style.opacity = '0.4'; });
        setTimeout(() => playerEl.classList.remove('glow-active'), 600);
    } else {
        if (!state.isMuted) soundSbanda.play();
        showErrorPopup(state.currentTarget.regione);
        state.lives--; updateLives();
        g.crashed = true; g.element.style.zIndex = "100";
        playerEl.classList.add('crash-active'); createSmoke();
        setTimeout(() => playerEl.classList.remove('crash-active'), 500);
        state.isTurbo = false; playerEl.classList.remove('turbo-active');
        state.cityQueue.push(state.currentTarget);
        if (state.lives <= 0) gameOver(g.element.innerText);
    }
}

function loop(currentTime) {
    if (!state.isPlaying) return;
    const dt = Math.min((currentTime - state.lastTime) / 16.67, 2);
    state.lastTime = currentTime;
    if (state.gates.length === 0 && state.isPlaying) startNextRound();
    const speed = state.isTurbo ? CONSTANTS.TURBO_SPEED : CONSTANTS.NORMAL_SPEED;
    const pSpeed = state.gates.length > 0 && (!state.waveActive || state.gates[0].hit) ? CONSTANTS.EXIT_SPEED : speed;
    state.textureOffset += pSpeed * dt * ROAD_SETTINGS.TEXTURE_SPEED_FACTOR;
    const road = document.getElementById('road-surface');
    if (road) road.style.backgroundPosition = `center ${state.textureOffset}px`;
    state.roadLines.forEach(l => {
        l.progress += pSpeed * dt; if (l.progress > 1) l.progress -= 1;
        const vP = Math.pow(l.progress, ROAD_SETTINGS.PERSPECTIVE_POWER);
        const top = ROAD_SETTINGS.START_Y_PERCENT + (vP * (100 - ROAD_SETTINGS.START_Y_PERCENT));
        const w = ROAD_SETTINGS.LINES_WIDTH_TOP + (vP * (ROAD_SETTINGS.LINES_WIDTH_BOTTOM - ROAD_SETTINGS.LINES_WIDTH_TOP));
        l.element.style.top = top + '%';
        l.element.style.left = ((gameViewport.offsetWidth / 2) + ((w / 2) * l.side)) + 'px';
        l.element.style.transform = `translate(-50%, 0) scale(${0.1 + vP * 1.5}) rotate(${ROAD_SETTINGS.ROTATION_DEG * l.side}deg)`;
    });
    for (let i = state.gates.length - 1; i >= 0; i--) {
        let g = state.gates[i];
        g.progress += ( (!state.waveActive || g.hit) ? CONSTANTS.EXIT_SPEED : speed ) * dt;
        const top = ROAD_SETTINGS.START_Y_PERCENT + (g.progress * (100 - ROAD_SETTINGS.START_Y_PERCENT));
        const sc = 0.02 + g.progress * 1.2;
        g.element.style.top = top + '%';
        g.element.style.left = ((gameViewport.offsetWidth / 2) + (g.laneOffset * (175 * sc))) + 'px';
        let tr = `translate(-50%, -100%) scale(${sc})`;
        if (g.crashed) tr += ` rotate(${g.progress * 100}deg) skew(20deg)`;
        g.element.style.transform = tr;
        if (state.waveActive && g.active && !g.hit && g.progress >= 0.81 && g.laneIndex === state.currentLane) handleCollision(g);
        if (g.progress > 1.5) { g.element.remove(); state.gates.splice(i, 1); }
    }
    state.animationFrameId = requestAnimationFrame(loop);
}

function createSmoke() {
    for (let i = 0; i < 12; i++) {
        const p = document.createElement('div'); p.classList.add('smoke-particle');
        p.style.left = [30, 50, 70][state.currentLane] + '%'; p.style.bottom = '180px';
        p.style.marginLeft = ((Math.random() - 0.5) * 60) + 'px';
        const size = 15 + Math.random() * 25; p.style.width = size + 'px'; p.style.height = size + 'px';
        particlesContainer.appendChild(p); setTimeout(() => p.remove(), 800);
    }
}

function showWinScreen() {
    state.isPlaying = false; cancelAnimationFrame(state.animationFrameId);
    targetDisplay.classList.remove('visible');
    const win = document.getElementById('overlay-win');
    if (win) win.classList.remove('hidden'); else alert("HAI VINTO!");
}

function gameOver(wrong) {
    state.isPlaying = false; cancelAnimationFrame(state.animationFrameId);
    targetDisplay.classList.remove('visible');
    lastErrorDisplay.innerHTML = `Hai scelto <b>${wrong}</b>.<br>Era <b>${state.currentTarget.regione}</b>.`;
    if(state.currentTarget.curiosità) didYouKnowText.textContent = state.currentTarget.curiosità;
    overlayOver.classList.remove('hidden');
}

function resetToStart() { overlayOver.classList.add('hidden'); overlayStart.classList.remove('hidden'); entitiesContainer.innerHTML = ''; }

function showErrorPopup(correct) {
    const pop = document.getElementById('feedback-pop');
    if (!pop) return;
    pop.innerHTML = "NO!<br>ERA: " + correct;
    pop.classList.remove('hidden');
    setTimeout(() => pop.classList.add('visible'), 10);
    setTimeout(() => { pop.classList.remove('visible'); setTimeout(() => pop.classList.add('hidden'), 300); }, 2500);
}

init();