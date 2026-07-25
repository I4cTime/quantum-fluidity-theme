/**
 * Quantum Fluidity — palette definitions.
 *
 * Every theme variant is a flat palette object consumed by template.mjs.
 * Edit colors here, then `npm run build` to regenerate themes/*.json.
 *
 * Role guide:
 *   bg / bgAlt / container / containerHover — surface ramp (Obsidian Void → Midnight Mist)
 *   bgTop  — chrome above the editor (title bar, tab strip): "light falls from above"
 *   bgSide — sidebar, activity bar, panel, terminal: one subtle step off the editor
 *   accent      — UI energy color (cursor, focus, active tab) and functions/methods
 *   violet      — keywords, operators, badges ("agentic" depth)
 *   green       — classes, types, additions
 *   amber       — numbers, constants, warnings
 *   pink        — strings, tags, errors
 *   brackets    — 6-level nesting gradient (accent → violet → pink)
 */

export const palettes = [
  // ── Dark 1: the signature Obsidian Void ────────────────────────────────
  {
    id: 'void',
    name: 'Quantum Fluidity',
    file: 'quantum-fluidity-color-theme.json',
    type: 'dark',
    uiTheme: 'vs-dark',

    bg: '#050505',
    bgTop: '#0E0E1A',
    bgSide: '#090911',
    bgAlt: '#0A0A0A',
    container: '#1A1A2E',
    containerHover: '#2A2A4E',
    fg: '#F8F9FA',
    comment: '#7A8490',

    accent: '#00D1FF',
    accentBright: '#33DDFF',
    violet: '#B266FF',
    violetBright: '#C888FF',
    green: '#00E676',
    greenBright: '#33FFAA',
    amber: '#FFB800',
    amberBright: '#FFD133',
    pink: '#FF0055',
    pinkBright: '#FF3377',

    brackets: ['#00D1FF', '#4A8CFF', '#8070FF', '#B266FF', '#D833AA', '#FF0055'],
    ghost: '#8B7DB0',
    inlay: '#7A8490',

    terminal: {
      black: '#050505',
      red: '#FF0055',
      green: '#00E676',
      yellow: '#FFB800',
      blue: '#00D1FF',
      magenta: '#B266FF',
      cyan: '#00D1FF',
      white: '#F8F9FA',
      brightBlack: '#3A3A5E',
      brightRed: '#FF3377',
      brightGreen: '#33FFAA',
      brightYellow: '#FFD133',
      brightBlue: '#33DDFF',
      brightMagenta: '#C888FF',
      brightCyan: '#33DDFF',
      brightWhite: '#FFFFFF',
    },
  },

  // ── Dark 2: Midnight Mist — softer navy surfaces, gentler neons ────────
  {
    id: 'mist',
    name: 'Quantum Fluidity Mist',
    file: 'quantum-fluidity-mist-color-theme.json',
    type: 'dark',
    uiTheme: 'vs-dark',

    bg: '#131324',
    bgTop: '#1E1E38',
    bgSide: '#16162A',
    bgAlt: '#1A1A2E',
    container: '#262645',
    containerHover: '#32325C',
    fg: '#E9EBF5',
    comment: '#8890A8',

    accent: '#3BD5FF',
    accentBright: '#66E0FF',
    violet: '#BE83FF',
    violetBright: '#D3A6FF',
    green: '#2EE68A',
    greenBright: '#5CF0A8',
    amber: '#FFC53D',
    amberBright: '#FFD666',
    pink: '#FF4D7E',
    pinkBright: '#FF7AA0',

    brackets: ['#3BD5FF', '#5FA4FF', '#8A87FF', '#BE83FF', '#E060C0', '#FF4D7E'],
    ghost: '#9C8FC4',
    inlay: '#8890A8',

    terminal: {
      black: '#131324',
      red: '#FF4D7E',
      green: '#2EE68A',
      yellow: '#FFC53D',
      blue: '#3BD5FF',
      magenta: '#BE83FF',
      cyan: '#3BD5FF',
      white: '#E9EBF5',
      brightBlack: '#4A4A75',
      brightRed: '#FF7AA0',
      brightGreen: '#5CF0A8',
      brightYellow: '#FFD666',
      brightBlue: '#66E0FF',
      brightMagenta: '#D3A6FF',
      brightCyan: '#66E0FF',
      brightWhite: '#FFFFFF',
    },
  },

  // ── Light 1: Ghost White — crisp, cool, high contrast ──────────────────
  {
    id: 'light',
    name: 'Quantum Fluidity Light',
    file: 'quantum-fluidity-light-color-theme.json',
    type: 'light',
    uiTheme: 'vs',

    bg: '#F8F9FA',
    bgTop: '#FFFFFF',
    bgSide: '#F2F4F6',
    bgAlt: '#F0F2F5',
    container: '#E5E7EB',
    containerHover: '#D1D5DB',
    fg: '#16161D',
    comment: '#6B7280',

    accent: '#007399',
    accentBright: '#0099CC',
    violet: '#7C24D9',
    violetBright: '#9933FF',
    green: '#067A43',
    greenBright: '#00B359',
    amber: '#A36A00',
    amberBright: '#D99900',
    pink: '#CC0044',
    pinkBright: '#FF0055',

    brackets: ['#007399', '#0066CC', '#5B2FCC', '#7C24D9', '#A61E7E', '#CC0044'],
    ghost: '#9077C2',
    inlay: '#6B7280',

    terminal: {
      black: '#16161D',
      red: '#CC0044',
      green: '#067A43',
      yellow: '#A36A00',
      blue: '#0066CC',
      magenta: '#7C24D9',
      cyan: '#007399',
      white: '#6B7280',
      brightBlack: '#4B5563',
      brightRed: '#FF0055',
      brightGreen: '#00935A',
      brightYellow: '#D99900',
      brightBlue: '#0099CC',
      brightMagenta: '#9933FF',
      brightCyan: '#0099CC',
      brightWhite: '#9CA3AF',
    },
  },

  // ── Light 2: Dawn — warm paper surfaces, earthy quantum accents ─────────
  {
    id: 'dawn',
    name: 'Quantum Fluidity Dawn',
    file: 'quantum-fluidity-dawn-color-theme.json',
    type: 'light',
    uiTheme: 'vs',

    bg: '#FAF5EC',
    bgTop: '#FFFBF3',
    bgSide: '#F4EEDF',
    bgAlt: '#F2EBDD',
    container: '#E7DCC8',
    containerHover: '#D9CBB0',
    fg: '#2B2119',
    comment: '#75695A',

    accent: '#0E7490',
    accentBright: '#0891B2',
    violet: '#8B2FC9',
    violetBright: '#A855F7',
    green: '#2E7D32',
    greenBright: '#43A047',
    amber: '#A05A08',
    amberBright: '#C77414',
    pink: '#B3264A',
    pinkBright: '#E11D48',

    brackets: ['#0E7490', '#3D63B8', '#6A48C4', '#8B2FC9', '#A62D93', '#B3264A'],
    ghost: '#9C7FB0',
    inlay: '#8A7A66',

    terminal: {
      black: '#2B2119',
      red: '#B3264A',
      green: '#2E7D32',
      yellow: '#A05A08',
      blue: '#2563AE',
      magenta: '#8B2FC9',
      cyan: '#0E7490',
      white: '#75695A',
      brightBlack: '#59503F',
      brightRed: '#E11D48',
      brightGreen: '#43A047',
      brightYellow: '#C77414',
      brightBlue: '#3B82C4',
      brightMagenta: '#A855F7',
      brightCyan: '#0891B2',
      brightWhite: '#A89A82',
    },
  },
];
