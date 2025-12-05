class ElementCard extends HTMLElement {
  connectedCallback() {
    const num = this.getAttribute("num");
    const sym = this.getAttribute("sym");
    const name = this.getAttribute("name");
    const mass = this.getAttribute("mass");
    const config = this.getAttribute("config");
    const color = this.getAttribute("color");

    this.innerHTML = `
      <div class="card" style="--color: ${color}">
        <div class="card-inner">
          <div class="card-front">
            <span class="number">${num}</span>
            <span class="symbol">${sym}</span>
            <span class="name">${name}</span>
          </div>
          <div class="card-back">
            <span class="symbol">${sym}</span>
            <span class="mass">${mass}</span>
            <span class="config">${config}</span>
          </div>
        </div>
      </div>
    `;

    this.style.cursor = "pointer";
    this.addEventListener("click", () => {
      window.open(`https://en.wikipedia.org/wiki/${name}`, "_blank");
    });
  }
}
customElements.define("element-card", ElementCard);

// Colors by category
const COLORS = {
  alkaliMetal: "#ff6b6b",      // Red
  alkalineEarth: "#ffb74d",    // Orange
  transitionMetal: "#80deea",  // Cyan
  postTransition: "#4db6ac",   // Teal
  metalloid: "#e0aaff",        // Purple
  nonmetal: "#81d4fa",         // Light blue
  halogen: "#fff176",          // Yellow
  nobleGas: "#c5e1a5",         // Light green
  lanthanide: "#f48fb1",       // Pink
  actinide: "#ce93d8",         // Light purple
};

// col, row define periodic table position
const elements = [
  // Row 1
  { num: 1, sym: "H", name: "Hydrogen", mass: "1.008", config: "1s¹", color: COLORS.nonmetal, col: 1, row: 1 },
  { num: 2, sym: "He", name: "Helium", mass: "4.003", config: "1s²", color: COLORS.nobleGas, col: 18, row: 1 },
  // Row 2
  { num: 3, sym: "Li", name: "Lithium", mass: "6.941", config: "[He]2s¹", color: COLORS.alkaliMetal, col: 1, row: 2 },
  { num: 4, sym: "Be", name: "Beryllium", mass: "9.012", config: "[He]2s²", color: COLORS.alkalineEarth, col: 2, row: 2 },
  { num: 5, sym: "B", name: "Boron", mass: "10.81", config: "[He]2s²2p¹", color: COLORS.metalloid, col: 13, row: 2 },
  { num: 6, sym: "C", name: "Carbon", mass: "12.01", config: "[He]2s²2p²", color: COLORS.nonmetal, col: 14, row: 2 },
  { num: 7, sym: "N", name: "Nitrogen", mass: "14.01", config: "[He]2s²2p³", color: COLORS.nonmetal, col: 15, row: 2 },
  { num: 8, sym: "O", name: "Oxygen", mass: "16.00", config: "[He]2s²2p⁴", color: COLORS.nonmetal, col: 16, row: 2 },
  { num: 9, sym: "F", name: "Fluorine", mass: "19.00", config: "[He]2s²2p⁵", color: COLORS.halogen, col: 17, row: 2 },
  { num: 10, sym: "Ne", name: "Neon", mass: "20.18", config: "[He]2s²2p⁶", color: COLORS.nobleGas, col: 18, row: 2 },
  // Row 3
  { num: 11, sym: "Na", name: "Sodium", mass: "22.99", config: "[Ne]3s¹", color: COLORS.alkaliMetal, col: 1, row: 3 },
  { num: 12, sym: "Mg", name: "Magnesium", mass: "24.31", config: "[Ne]3s²", color: COLORS.alkalineEarth, col: 2, row: 3 },
  { num: 13, sym: "Al", name: "Aluminum", mass: "26.98", config: "[Ne]3s²3p¹", color: COLORS.postTransition, col: 13, row: 3 },
  { num: 14, sym: "Si", name: "Silicon", mass: "28.09", config: "[Ne]3s²3p²", color: COLORS.metalloid, col: 14, row: 3 },
  { num: 15, sym: "P", name: "Phosphorus", mass: "30.97", config: "[Ne]3s²3p³", color: COLORS.nonmetal, col: 15, row: 3 },
  { num: 16, sym: "S", name: "Sulfur", mass: "32.07", config: "[Ne]3s²3p⁴", color: COLORS.nonmetal, col: 16, row: 3 },
  { num: 17, sym: "Cl", name: "Chlorine", mass: "35.45", config: "[Ne]3s²3p⁵", color: COLORS.halogen, col: 17, row: 3 },
  { num: 18, sym: "Ar", name: "Argon", mass: "39.95", config: "[Ne]3s²3p⁶", color: COLORS.nobleGas, col: 18, row: 3 },
  // Row 4
  { num: 19, sym: "K", name: "Potassium", mass: "39.10", config: "[Ar]4s¹", color: COLORS.alkaliMetal, col: 1, row: 4 },
  { num: 20, sym: "Ca", name: "Calcium", mass: "40.08", config: "[Ar]4s²", color: COLORS.alkalineEarth, col: 2, row: 4 },
  { num: 21, sym: "Sc", name: "Scandium", mass: "44.96", config: "[Ar]3d¹4s²", color: COLORS.transitionMetal, col: 3, row: 4 },
  { num: 22, sym: "Ti", name: "Titanium", mass: "47.87", config: "[Ar]3d²4s²", color: COLORS.transitionMetal, col: 4, row: 4 },
  { num: 23, sym: "V", name: "Vanadium", mass: "50.94", config: "[Ar]3d³4s²", color: COLORS.transitionMetal, col: 5, row: 4 },
  { num: 24, sym: "Cr", name: "Chromium", mass: "52.00", config: "[Ar]3d⁵4s¹", color: COLORS.transitionMetal, col: 6, row: 4 },
  { num: 25, sym: "Mn", name: "Manganese", mass: "54.94", config: "[Ar]3d⁵4s²", color: COLORS.transitionMetal, col: 7, row: 4 },
  { num: 26, sym: "Fe", name: "Iron", mass: "55.85", config: "[Ar]3d⁶4s²", color: COLORS.transitionMetal, col: 8, row: 4 },
  { num: 27, sym: "Co", name: "Cobalt", mass: "58.93", config: "[Ar]3d⁷4s²", color: COLORS.transitionMetal, col: 9, row: 4 },
  { num: 28, sym: "Ni", name: "Nickel", mass: "58.69", config: "[Ar]3d⁸4s²", color: COLORS.transitionMetal, col: 10, row: 4 },
  { num: 29, sym: "Cu", name: "Copper", mass: "63.55", config: "[Ar]3d¹⁰4s¹", color: COLORS.transitionMetal, col: 11, row: 4 },
  { num: 30, sym: "Zn", name: "Zinc", mass: "65.38", config: "[Ar]3d¹⁰4s²", color: COLORS.transitionMetal, col: 12, row: 4 },
  { num: 31, sym: "Ga", name: "Gallium", mass: "69.72", config: "[Ar]3d¹⁰4s²4p¹", color: COLORS.postTransition, col: 13, row: 4 },
  { num: 32, sym: "Ge", name: "Germanium", mass: "72.63", config: "[Ar]3d¹⁰4s²4p²", color: COLORS.metalloid, col: 14, row: 4 },
  { num: 33, sym: "As", name: "Arsenic", mass: "74.92", config: "[Ar]3d¹⁰4s²4p³", color: COLORS.metalloid, col: 15, row: 4 },
  { num: 34, sym: "Se", name: "Selenium", mass: "78.97", config: "[Ar]3d¹⁰4s²4p⁴", color: COLORS.nonmetal, col: 16, row: 4 },
  { num: 35, sym: "Br", name: "Bromine", mass: "79.90", config: "[Ar]3d¹⁰4s²4p⁵", color: COLORS.halogen, col: 17, row: 4 },
  { num: 36, sym: "Kr", name: "Krypton", mass: "83.80", config: "[Ar]3d¹⁰4s²4p⁶", color: COLORS.nobleGas, col: 18, row: 4 },
  // Row 5
  { num: 37, sym: "Rb", name: "Rubidium", mass: "85.47", config: "[Kr]5s¹", color: COLORS.alkaliMetal, col: 1, row: 5 },
  { num: 38, sym: "Sr", name: "Strontium", mass: "87.62", config: "[Kr]5s²", color: COLORS.alkalineEarth, col: 2, row: 5 },
  { num: 39, sym: "Y", name: "Yttrium", mass: "88.91", config: "[Kr]4d¹5s²", color: COLORS.transitionMetal, col: 3, row: 5 },
  { num: 40, sym: "Zr", name: "Zirconium", mass: "91.22", config: "[Kr]4d²5s²", color: COLORS.transitionMetal, col: 4, row: 5 },
  { num: 41, sym: "Nb", name: "Niobium", mass: "92.91", config: "[Kr]4d⁴5s¹", color: COLORS.transitionMetal, col: 5, row: 5 },
  { num: 42, sym: "Mo", name: "Molybdenum", mass: "95.95", config: "[Kr]4d⁵5s¹", color: COLORS.transitionMetal, col: 6, row: 5 },
  { num: 43, sym: "Tc", name: "Technetium", mass: "(98)", config: "[Kr]4d⁵5s²", color: COLORS.transitionMetal, col: 7, row: 5 },
  { num: 44, sym: "Ru", name: "Ruthenium", mass: "101.1", config: "[Kr]4d⁷5s¹", color: COLORS.transitionMetal, col: 8, row: 5 },
  { num: 45, sym: "Rh", name: "Rhodium", mass: "102.9", config: "[Kr]4d⁸5s¹", color: COLORS.transitionMetal, col: 9, row: 5 },
  { num: 46, sym: "Pd", name: "Palladium", mass: "106.4", config: "[Kr]4d¹⁰", color: COLORS.transitionMetal, col: 10, row: 5 },
  { num: 47, sym: "Ag", name: "Silver", mass: "107.9", config: "[Kr]4d¹⁰5s¹", color: COLORS.transitionMetal, col: 11, row: 5 },
  { num: 48, sym: "Cd", name: "Cadmium", mass: "112.4", config: "[Kr]4d¹⁰5s²", color: COLORS.transitionMetal, col: 12, row: 5 },
  { num: 49, sym: "In", name: "Indium", mass: "114.8", config: "[Kr]4d¹⁰5s²5p¹", color: COLORS.postTransition, col: 13, row: 5 },
  { num: 50, sym: "Sn", name: "Tin", mass: "118.7", config: "[Kr]4d¹⁰5s²5p²", color: COLORS.postTransition, col: 14, row: 5 },
  { num: 51, sym: "Sb", name: "Antimony", mass: "121.8", config: "[Kr]4d¹⁰5s²5p³", color: COLORS.metalloid, col: 15, row: 5 },
  { num: 52, sym: "Te", name: "Tellurium", mass: "127.6", config: "[Kr]4d¹⁰5s²5p⁴", color: COLORS.metalloid, col: 16, row: 5 },
  { num: 53, sym: "I", name: "Iodine", mass: "126.9", config: "[Kr]4d¹⁰5s²5p⁵", color: COLORS.halogen, col: 17, row: 5 },
  { num: 54, sym: "Xe", name: "Xenon", mass: "131.3", config: "[Kr]4d¹⁰5s²5p⁶", color: COLORS.nobleGas, col: 18, row: 5 },
  // Row 6
  { num: 55, sym: "Cs", name: "Cesium", mass: "132.9", config: "[Xe]6s¹", color: COLORS.alkaliMetal, col: 1, row: 6 },
  { num: 56, sym: "Ba", name: "Barium", mass: "137.3", config: "[Xe]6s²", color: COLORS.alkalineEarth, col: 2, row: 6 },
  // Lanthanides placeholder at col 3
  { num: 72, sym: "Hf", name: "Hafnium", mass: "178.5", config: "[Xe]4f¹⁴5d²6s²", color: COLORS.transitionMetal, col: 4, row: 6 },
  { num: 73, sym: "Ta", name: "Tantalum", mass: "180.9", config: "[Xe]4f¹⁴5d³6s²", color: COLORS.transitionMetal, col: 5, row: 6 },
  { num: 74, sym: "W", name: "Tungsten", mass: "183.8", config: "[Xe]4f¹⁴5d⁴6s²", color: COLORS.transitionMetal, col: 6, row: 6 },
  { num: 75, sym: "Re", name: "Rhenium", mass: "186.2", config: "[Xe]4f¹⁴5d⁵6s²", color: COLORS.transitionMetal, col: 7, row: 6 },
  { num: 76, sym: "Os", name: "Osmium", mass: "190.2", config: "[Xe]4f¹⁴5d⁶6s²", color: COLORS.transitionMetal, col: 8, row: 6 },
  { num: 77, sym: "Ir", name: "Iridium", mass: "192.2", config: "[Xe]4f¹⁴5d⁷6s²", color: COLORS.transitionMetal, col: 9, row: 6 },
  { num: 78, sym: "Pt", name: "Platinum", mass: "195.1", config: "[Xe]4f¹⁴5d⁹6s¹", color: COLORS.transitionMetal, col: 10, row: 6 },
  { num: 79, sym: "Au", name: "Gold", mass: "197.0", config: "[Xe]4f¹⁴5d¹⁰6s¹", color: COLORS.transitionMetal, col: 11, row: 6 },
  { num: 80, sym: "Hg", name: "Mercury", mass: "200.6", config: "[Xe]4f¹⁴5d¹⁰6s²", color: COLORS.transitionMetal, col: 12, row: 6 },
  { num: 81, sym: "Tl", name: "Thallium", mass: "204.4", config: "[Xe]4f¹⁴5d¹⁰6s²6p¹", color: COLORS.postTransition, col: 13, row: 6 },
  { num: 82, sym: "Pb", name: "Lead", mass: "207.2", config: "[Xe]4f¹⁴5d¹⁰6s²6p²", color: COLORS.postTransition, col: 14, row: 6 },
  { num: 83, sym: "Bi", name: "Bismuth", mass: "209.0", config: "[Xe]4f¹⁴5d¹⁰6s²6p³", color: COLORS.postTransition, col: 15, row: 6 },
  { num: 84, sym: "Po", name: "Polonium", mass: "(209)", config: "[Xe]4f¹⁴5d¹⁰6s²6p⁴", color: COLORS.metalloid, col: 16, row: 6 },
  { num: 85, sym: "At", name: "Astatine", mass: "(210)", config: "[Xe]4f¹⁴5d¹⁰6s²6p⁵", color: COLORS.halogen, col: 17, row: 6 },
  { num: 86, sym: "Rn", name: "Radon", mass: "(222)", config: "[Xe]4f¹⁴5d¹⁰6s²6p⁶", color: COLORS.nobleGas, col: 18, row: 6 },
  // Row 7
  { num: 87, sym: "Fr", name: "Francium", mass: "(223)", config: "[Rn]7s¹", color: COLORS.alkaliMetal, col: 1, row: 7 },
  { num: 88, sym: "Ra", name: "Radium", mass: "(226)", config: "[Rn]7s²", color: COLORS.alkalineEarth, col: 2, row: 7 },
  // Actinides placeholder at col 3
  { num: 104, sym: "Rf", name: "Rutherfordium", mass: "(267)", config: "[Rn]5f¹⁴6d²7s²", color: COLORS.transitionMetal, col: 4, row: 7 },
  { num: 105, sym: "Db", name: "Dubnium", mass: "(268)", config: "[Rn]5f¹⁴6d³7s²", color: COLORS.transitionMetal, col: 5, row: 7 },
  { num: 106, sym: "Sg", name: "Seaborgium", mass: "(271)", config: "[Rn]5f¹⁴6d⁴7s²", color: COLORS.transitionMetal, col: 6, row: 7 },
  { num: 107, sym: "Bh", name: "Bohrium", mass: "(270)", config: "[Rn]5f¹⁴6d⁵7s²", color: COLORS.transitionMetal, col: 7, row: 7 },
  { num: 108, sym: "Hs", name: "Hassium", mass: "(277)", config: "[Rn]5f¹⁴6d⁶7s²", color: COLORS.transitionMetal, col: 8, row: 7 },
  { num: 109, sym: "Mt", name: "Meitnerium", mass: "(276)", config: "[Rn]5f¹⁴6d⁷7s²", color: COLORS.transitionMetal, col: 9, row: 7 },
  { num: 110, sym: "Ds", name: "Darmstadtium", mass: "(281)", config: "[Rn]5f¹⁴6d⁸7s²", color: COLORS.transitionMetal, col: 10, row: 7 },
  { num: 111, sym: "Rg", name: "Roentgenium", mass: "(282)", config: "[Rn]5f¹⁴6d⁹7s²", color: COLORS.transitionMetal, col: 11, row: 7 },
  { num: 112, sym: "Cn", name: "Copernicium", mass: "(285)", config: "[Rn]5f¹⁴6d¹⁰7s²", color: COLORS.transitionMetal, col: 12, row: 7 },
  { num: 113, sym: "Nh", name: "Nihonium", mass: "(286)", config: "[Rn]5f¹⁴6d¹⁰7s²7p¹", color: COLORS.postTransition, col: 13, row: 7 },
  { num: 114, sym: "Fl", name: "Flerovium", mass: "(289)", config: "[Rn]5f¹⁴6d¹⁰7s²7p²", color: COLORS.postTransition, col: 14, row: 7 },
  { num: 115, sym: "Mc", name: "Moscovium", mass: "(290)", config: "[Rn]5f¹⁴6d¹⁰7s²7p³", color: COLORS.postTransition, col: 15, row: 7 },
  { num: 116, sym: "Lv", name: "Livermorium", mass: "(293)", config: "[Rn]5f¹⁴6d¹⁰7s²7p⁴", color: COLORS.postTransition, col: 16, row: 7 },
  { num: 117, sym: "Ts", name: "Tennessine", mass: "(294)", config: "[Rn]5f¹⁴6d¹⁰7s²7p⁵", color: COLORS.halogen, col: 17, row: 7 },
  { num: 118, sym: "Og", name: "Oganesson", mass: "(294)", config: "[Rn]5f¹⁴6d¹⁰7s²7p⁶", color: COLORS.nobleGas, col: 18, row: 7 },
  // Lanthanides (Row 9 in display, below main table)
  { num: 57, sym: "La", name: "Lanthanum", mass: "138.9", config: "[Xe]5d¹6s²", color: COLORS.lanthanide, col: 3, row: 9 },
  { num: 58, sym: "Ce", name: "Cerium", mass: "140.1", config: "[Xe]4f¹5d¹6s²", color: COLORS.lanthanide, col: 4, row: 9 },
  { num: 59, sym: "Pr", name: "Praseodymium", mass: "140.9", config: "[Xe]4f³6s²", color: COLORS.lanthanide, col: 5, row: 9 },
  { num: 60, sym: "Nd", name: "Neodymium", mass: "144.2", config: "[Xe]4f⁴6s²", color: COLORS.lanthanide, col: 6, row: 9 },
  { num: 61, sym: "Pm", name: "Promethium", mass: "(145)", config: "[Xe]4f⁵6s²", color: COLORS.lanthanide, col: 7, row: 9 },
  { num: 62, sym: "Sm", name: "Samarium", mass: "150.4", config: "[Xe]4f⁶6s²", color: COLORS.lanthanide, col: 8, row: 9 },
  { num: 63, sym: "Eu", name: "Europium", mass: "152.0", config: "[Xe]4f⁷6s²", color: COLORS.lanthanide, col: 9, row: 9 },
  { num: 64, sym: "Gd", name: "Gadolinium", mass: "157.3", config: "[Xe]4f⁷5d¹6s²", color: COLORS.lanthanide, col: 10, row: 9 },
  { num: 65, sym: "Tb", name: "Terbium", mass: "158.9", config: "[Xe]4f⁹6s²", color: COLORS.lanthanide, col: 11, row: 9 },
  { num: 66, sym: "Dy", name: "Dysprosium", mass: "162.5", config: "[Xe]4f¹⁰6s²", color: COLORS.lanthanide, col: 12, row: 9 },
  { num: 67, sym: "Ho", name: "Holmium", mass: "164.9", config: "[Xe]4f¹¹6s²", color: COLORS.lanthanide, col: 13, row: 9 },
  { num: 68, sym: "Er", name: "Erbium", mass: "167.3", config: "[Xe]4f¹²6s²", color: COLORS.lanthanide, col: 14, row: 9 },
  { num: 69, sym: "Tm", name: "Thulium", mass: "168.9", config: "[Xe]4f¹³6s²", color: COLORS.lanthanide, col: 15, row: 9 },
  { num: 70, sym: "Yb", name: "Ytterbium", mass: "173.0", config: "[Xe]4f¹⁴6s²", color: COLORS.lanthanide, col: 16, row: 9 },
  { num: 71, sym: "Lu", name: "Lutetium", mass: "175.0", config: "[Xe]4f¹⁴5d¹6s²", color: COLORS.lanthanide, col: 17, row: 9 },
  // Actinides (Row 10 in display, below lanthanides)
  { num: 89, sym: "Ac", name: "Actinium", mass: "(227)", config: "[Rn]6d¹7s²", color: COLORS.actinide, col: 3, row: 10 },
  { num: 90, sym: "Th", name: "Thorium", mass: "232.0", config: "[Rn]6d²7s²", color: COLORS.actinide, col: 4, row: 10 },
  { num: 91, sym: "Pa", name: "Protactinium", mass: "231.0", config: "[Rn]5f²6d¹7s²", color: COLORS.actinide, col: 5, row: 10 },
  { num: 92, sym: "U", name: "Uranium", mass: "238.0", config: "[Rn]5f³6d¹7s²", color: COLORS.actinide, col: 6, row: 10 },
  { num: 93, sym: "Np", name: "Neptunium", mass: "(237)", config: "[Rn]5f⁴6d¹7s²", color: COLORS.actinide, col: 7, row: 10 },
  { num: 94, sym: "Pu", name: "Plutonium", mass: "(244)", config: "[Rn]5f⁶7s²", color: COLORS.actinide, col: 8, row: 10 },
  { num: 95, sym: "Am", name: "Americium", mass: "(243)", config: "[Rn]5f⁷7s²", color: COLORS.actinide, col: 9, row: 10 },
  { num: 96, sym: "Cm", name: "Curium", mass: "(247)", config: "[Rn]5f⁷6d¹7s²", color: COLORS.actinide, col: 10, row: 10 },
  { num: 97, sym: "Bk", name: "Berkelium", mass: "(247)", config: "[Rn]5f⁹7s²", color: COLORS.actinide, col: 11, row: 10 },
  { num: 98, sym: "Cf", name: "Californium", mass: "(251)", config: "[Rn]5f¹⁰7s²", color: COLORS.actinide, col: 12, row: 10 },
  { num: 99, sym: "Es", name: "Einsteinium", mass: "(252)", config: "[Rn]5f¹¹7s²", color: COLORS.actinide, col: 13, row: 10 },
  { num: 100, sym: "Fm", name: "Fermium", mass: "(257)", config: "[Rn]5f¹²7s²", color: COLORS.actinide, col: 14, row: 10 },
  { num: 101, sym: "Md", name: "Mendelevium", mass: "(258)", config: "[Rn]5f¹³7s²", color: COLORS.actinide, col: 15, row: 10 },
  { num: 102, sym: "No", name: "Nobelium", mass: "(259)", config: "[Rn]5f¹⁴7s²", color: COLORS.actinide, col: 16, row: 10 },
  { num: 103, sym: "Lr", name: "Lawrencium", mass: "(266)", config: "[Rn]5f¹⁴7s²7p¹", color: COLORS.actinide, col: 17, row: 10 },
];

const grid = document.querySelector(".grid");
elements.forEach(el => {
  const card = document.createElement("element-card");
  card.setAttribute("num", el.num);
  card.setAttribute("sym", el.sym);
  card.setAttribute("name", el.name);
  card.setAttribute("mass", el.mass);
  card.setAttribute("config", el.config);
  card.setAttribute("color", el.color);
  card.style.gridColumn = el.col;
  card.style.gridRow = el.row;
  grid.appendChild(card);
});

// Add lanthanide/actinide placeholder markers
const lanthanidePlaceholder = document.createElement("div");
lanthanidePlaceholder.className = "series-placeholder";
lanthanidePlaceholder.textContent = "57-71";
lanthanidePlaceholder.style.gridColumn = 3;
lanthanidePlaceholder.style.gridRow = 6;
lanthanidePlaceholder.style.background = COLORS.lanthanide;
grid.appendChild(lanthanidePlaceholder);

const actinidePlaceholder = document.createElement("div");
actinidePlaceholder.className = "series-placeholder";
actinidePlaceholder.textContent = "89-103";
actinidePlaceholder.style.gridColumn = 3;
actinidePlaceholder.style.gridRow = 7;
actinidePlaceholder.style.background = COLORS.actinide;
grid.appendChild(actinidePlaceholder);
