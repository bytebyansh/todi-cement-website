/**
 * TCS (Todi Cement Sales) — Interactive Application Script
 * Implements Reacho.live dynamics, WhatsApp routing, Brand explorer,
 * Chat simulation, Quote generator, and Customer feedback.
 */

// Official TCS WhatsApp Contact
const TCS_WHATSAPP_NUMBER = "919831023456";

// ============================================================
// 1. BRAND DATA REPOSITORY (All 8 Brands Required by User)
// ============================================================
const BRANDS_DATA = {
  fenesta: {
    name: "Fenesta Building Systems",
    category: "DOORS & WINDOWS",
    tagline: "India's No. 1 Luxury UPVC & Aluminium Windows and Designer Doors",
    badge: "10-Year Warranty",
    highlights: [
      { icon: "🔇", title: "40dB Soundproof", desc: "Acoustic double & triple glazing cuts city traffic noise" },
      { icon: "🌪️", title: "Cyclone Proof", desc: "Tested against 245 km/h high wind gale pressures" },
      { icon: "❄️", title: "Thermal Saver", desc: "Reduces air-conditioning energy consumption by 30%" }
    ],
    description: "Fenesta from DCM Shriram is India's pioneer in precision-engineered UPVC and system aluminium architectural windows and entrance doors. Todi Cement Sales (TCS) provides complete certified on-site laser measurement, custom fabrication, and factory-trained installation across residential and commercial towers.",
    specs: [
      { label: "Profile Material", val: "High-grade UV stabilized UPVC & Thermal Break Aluminium" },
      { label: "Glazing Options", val: "Double glazed, Laminated Acoustic, Tinted, Toughened" },
      { label: "Styles Available", val: "Casement, Sliding, Tilt & Turn, Villa Windows, Slide & Fold" },
      { label: "Color Finishes", val: "Golden Oak, Walnut, Anthracite Grey, Pure White, Dark Oak" },
      { label: "Hardware Life", val: "Multi-point locking with European stainless steel fittings" },
      { label: "Rainwater System", val: "Hurricane-tested special sill drainage channels" }
    ],
    waMessage: "Hi TCS, I would like to inquire about Fenesta UPVC / Aluminium Windows and Doors. Please share catalog, price list, and arrange a site measurement."
  },

  sleek: {
    name: "Sleek by Asian Paints",
    category: "MODULAR KITCHENS & WARDROBES",
    tagline: "Custom Ergonomic Modular Kitchens, Islands & Wardrobe Solutions",
    badge: "Lifetime Hardware Warranty",
    highlights: [
      { icon: "🛡️", title: "Marine Ply Casing", desc: "100% boiling waterproof and borer/termite certified" },
      { icon: "📐", title: "Free 3D Renders", desc: "Interactive CAD modeling tailored to your floorplan" },
      { icon: "🇩🇪", title: "German Hardware", desc: "Grass & Blum soft-close tandem boxes and hinges" }
    ],
    description: "Backed by the trust of Asian Paints, Sleek delivers international-grade modular kitchens configured for Indian cooking styles. From heavy-duty spice pull-outs to acrylic high-gloss finishes and quartz countertops, TCS offers live layout mockups right inside our experience showroom.",
    specs: [
      { label: "Carcass Substrates", val: "BWP Marine Ply (IS:710 certified), HDHMR, Prelam Boards" },
      { label: "Shutter Finishes", val: "Acrylic, PU Lacquered, Ceramic Glass, Veneer, Matt Laminate" },
      { label: "Hardware Standards", val: "Lifetime warranty soft-close drawers and lift-up systems" },
      { label: "Layout Varieties", val: "L-Shaped, U-Shaped, Parallel, Island Kitchen with Breakfast Bar" },
      { label: "Storage Solutions", val: "Magic corners, Tall pantry pull-outs, Carousel trays, Cutlery trays" },
      { label: "Warranty Coverage", val: "10-Year Comprehensive Woodwork & Lifetime Hardware" }
    ],
    waMessage: "Hi TCS, I am interested in a Sleek Modular Kitchen by Asian Paints. Please share latest design portfolio and schedule a free 3D design consultation."
  },

  motto: {
    name: "Motto Luxury Tiles",
    category: "TILES & LARGE FORMAT SLABS",
    tagline: "Large-Format Glazed Vitrified Tiles, Porcelain & Bookmatch Marble Slabs",
    badge: "Ultra-Durable GVT/PGVT",
    highlights: [
      { icon: "🏛️", title: "Seamless Slabs", desc: "Gigantic 1200x2400mm & 800x1600mm continuous designs" },
      { icon: "💎", title: "Bookmatch Marble", desc: "Mirroring natural Italian Statuario and Onyx veining" },
      { icon: "🛡️", title: "Zero Absorption", desc: "Nano-polished surface resists wine, oil, turmeric & scratches" }
    ],
    description: "Motto is renowned among premier architects for high-fashion porcelain slabs and oversized vitrified tiles. TCS houses Eastern India's largest gallery of Motto full-body slabs for luxury living rooms, exterior facades, bathroom walls, and seamless kitchen islands.",
    specs: [
      { label: "Slab Dimensions", val: "1200x2400mm, 1200x1800mm, 800x1600mm, 600x1200mm" },
      { label: "Surface Textures", val: "High Gloss Polish, Silk Satin, Carving Matt, Sugar, Rustic Rock" },
      { label: "Design Series", val: "Statuario White, Armani Bronze, Calacatta Gold, Nero Marquina" },
      { label: "Breaking Strength", val: "> 2500N for heavy commercial and residential footfall" },
      { label: "Water Absorption", val: "< 0.05% (Impermeable vitrification)" },
      { label: "Ideal Usage", val: "Living hall floors, bathroom feature walls, steps, exterior claddings" }
    ],
    waMessage: "Hi TCS, I want to explore Motto luxury tiles and large format slabs. Please send digital catalog and current per-sq-ft rates."
  },

  metrowood: {
    name: "Metro Wood Tiles",
    category: "WOODEN SURFACES & PLANK TILES",
    tagline: "Authentic Wooden Plank Tiles & Warm Nordic Wood Flooring Solutions",
    badge: "100% Water & Termite Proof",
    highlights: [
      { icon: "🪵", title: "Hyper-Real Grains", desc: "3D digital relief textures mimicking real aged timbers" },
      { icon: "💧", title: "Zero Wood Rot", desc: "Washable with soap and water without swelling or bending" },
      { icon: "🔥", title: "Fire & Scratch Proof", desc: "Withstands cigarette drops, pet claws & stiletto heels" }
    ],
    description: "Metro Wood provides the organic warmth of solid hardwood flooring combined with the indestructible strength of vitrified ceramic tiles. Say goodbye to termite treatments, water damage, and seasonal wood warping. Ideal for balconies, master bedrooms, and luxury decks.",
    specs: [
      { label: "Plank Dimensions", val: "200x1200mm, 200x1000mm, 150x900mm strip formats" },
      { label: "Wood Species Mimicked", val: "American Walnut, Scandinavian Pine, Natural Teak, Antique Oak" },
      { label: "Finish Style", val: "Natural Hand-Scraped Matt, Deep Grain Anti-Skid R10" },
      { label: "Laying Patterns", val: "Herringbone, Staggered Brick, Diagonal, Basketweave" },
      { label: "Moisture Defense", val: "Zero swelling; safe for open balconies and wet bathrooms" },
      { label: "Maintenance", val: "Regular mop cleaning, zero re-polishing required ever" }
    ],
    waMessage: "Hi TCS, I am looking for Metro Wood wooden tiles for my project. Please send available shades, plank sizes, and pricing on WhatsApp."
  },

  cera: {
    name: "Cera Sanitaryware & Bath",
    category: "SANITARYWARE & WELLNESS",
    tagline: "Premium Vitreous China Sanitaryware, Faucets, Diverters & Spas",
    badge: "ISO 9001 & GreenPro Certified",
    highlights: [
      { icon: "🌪️", title: "Tornado Flush", desc: "Powerful 360-degree rimless silent vortex cleansing" },
      { icon: "✨", title: "Germ-Free Glaze", desc: "Antibacterial nano-glaze prevents stain and bacterial growth" },
      { icon: "🚿", title: "Thermostatic Showers", desc: "Safe anti-scald temperature memory diverters" }
    ],
    description: "Cera is India's premier bathroom style pioneer, providing Italian-sculpted one-piece closets, tabletop ceramic basins, sensor faucets, and luxury concealed cistern systems. TCS provides direct factory supply for residential bungalows, apartments, and hospital projects.",
    specs: [
      { label: "Sanitaryware Types", val: "Wall-hung closets, One-piece WC, Tabletop basins, Under-counter" },
      { label: "Water Consumption", val: "Dual flush 3L / 6L eco-water saving mechanisms" },
      { label: "Faucet Collections", val: "Single lever diverters, High-neck basin mixers, Waterfall spouts" },
      { label: "Faucet Finishes", val: "Chrome, Matt Black, Rose Gold, Brushed Gold, Gunmetal" },
      { label: "Wellness Line", val: "Rain sky showers, Body massage jets, Free-standing acrylic bathtubs" },
      { label: "Warranty Guarantee", val: "10-Year ceramic warranty & 7-Year cartridge warranty" }
    ],
    waMessage: "Hi TCS, I need Cera sanitaryware and bathroom fittings quotation. Please share latest price list and sanitaryware catalog."
  },

  faber: {
    name: "Faber Kitchen Appliances",
    category: "HUB & CHIMNEY",
    tagline: "Italian Filterless Auto-Clean Kitchen Chimneys & High-Flame Brass Hobs",
    badge: "12-Year Motor Warranty",
    highlights: [
      { icon: "💨", title: "1500 m³/hr Suction", desc: "Eliminates heavy Indian tadka, smoke, and oil fumes instantly" },
      { icon: "👋", title: "Motion Gesture Control", desc: "Wave your hand to adjust fan speed without greasy touch" },
      { icon: "🔥", title: "Italian Brass Burners", desc: "High efficiency triple-ring flame burners for fast cooking" }
    ],
    description: "The inventor of the domestic cooker hood in Fabriano, Italy, Faber leads the world in silent suction and intelligent heat auto-clean technology. TCS displays working chimneys and built-in glass hobs in our showroom so you can experience their whisper-quiet airflow.",
    specs: [
      { label: "Chimney Technologies", val: "3D T-Cleaner Filterless, Thermal Heat Auto-Clean with oil collector" },
      { label: "Suction Power Range", val: "1200 m³/hr to 1600 m³/hr high-capacity BLDC airflow" },
      { label: "Controls", val: "3-Speed Motion Wave Sensor + Soft Touch Digital Display" },
      { label: "Hob Configurations", val: "3-Burner & 4-Burner European Beveled Toughened Glass Hobs" },
      { label: "Safety Mechanisms", val: "Flame Failure Device (FFD) stops gas leak automatically" },
      { label: "Motor Guarantee", val: "12-Year Manufacturer Warranty on BLDC motors" }
    ],
    waMessage: "Hi TCS, please share models, specs and pricing for Faber Auto-Clean Chimneys and Built-In Gas Hobs."
  },

  franke: {
    name: "Franke Swiss Kitchen Systems",
    category: "KITCHEN SINK & FOOD PREP",
    tagline: "Swiss Engineered Fragranite Quartz & Heavy-Duty Stainless Steel Sinks",
    badge: "Swiss Precision & Lifetime Quality",
    highlights: [
      { icon: "🛡️", title: "Fragranite Composite", desc: "80% natural quartz composite resistant to 280°C heat" },
      { icon: "🔇", title: "Sound-Deadening", desc: "Thick acoustic pads mute rushing water and dish clatter" },
      { icon: "🧼", title: "Sanitized Antibacterial", desc: "Silver ion protection prevents 99% bacterial growth" }
    ],
    description: "Franke Switzerland is the world's leading manufacturer of premium kitchen sinks, food waste disposers, and professional chef taps. As an authorized TCS partner, we supply authentic Franke granite sinks and commercial-grade AISI 304 stainless steel bowls.",
    specs: [
      { label: "Material Variants", val: "Fragranite (Granite Composite) & AISI 304 1.2mm Stainless Steel" },
      { label: "Shades Available", val: "Onyx Black, Polar White, Stone Grey, Cashmere, Brushed Steel" },
      { label: "Bowl Formats", val: "Single Large Deep Bowl, Double Bowl with Drainer, 1.5 Undermount Bowl" },
      { label: "Integrated Add-ons", val: "Colander trays, Solid wood chopping boards, Roll-up drying racks" },
      { label: "Drain Waste", val: "3.5-inch pop-up basket strainer with anti-odor siphon trap" },
      { label: "Durability Test", val: "Scratch-proof against kitchen knives and heavy cast iron pans" }
    ],
    waMessage: "Hi TCS, I would like to inquire about Franke Granite and Stainless Steel Kitchen Sinks. Please share catalog and best quotation."
  },

  aosmith: {
    name: "AO Smith Water Technologies",
    category: "GEYSER & WATER HEATING",
    tagline: "Blue Diamond Glass-Lined Storage Geysers & Energy-Saving Heat Pumps",
    badge: "7-Year Inner Tank Warranty",
    highlights: [
      { icon: "💎", title: "Blue Diamond Enamel", desc: "Strongest tank defense against hard water and rust" },
      { icon: "⚡", title: "BEE 5-Star Efficient", desc: "Thick PUF insulation retains steaming heat for 24+ hours" },
      { icon: "🏢", title: "8-Bar High Pressure", desc: "Specifically engineered for high-rise residential towers" }
    ],
    description: "AO Smith USA has spent over 145 years pioneering water technology innovations. Their patented Blue Diamond glass lining and custom incoloy heating elements make them the definitive choice for homes facing high TDS or hard water scaling. Available in compact, vertical, and horizontal ceiling designs at TCS.",
    specs: [
      { label: "Capacity Options", val: "6L, 10L, 15L, 25L, 35L and 50L Storage Variants + Instant Heaters" },
      { label: "Tank Technology", val: "Blue Diamond Glass-Lined Steel Tank (Superior to Stainless Steel)" },
      { label: "Anode Rod", val: "Custom Core Anode rod with stainless steel core for 2x lifespan" },
      { label: "Display & Controls", val: "Digital temperature readout with wireless remote control option" },
      { label: "Pressure Rating", val: "8 Bar (suitable for 30+ floor high-rise pressure pumps)" },
      { label: "Heating Element", val: "Glass-coated incoloy element preventing lime-scale buildup" }
    ],
    waMessage: "Hi TCS, I need pricing and capacity options for AO Smith Blue Diamond Geysers. Please connect with me on WhatsApp."
  }
};

// ============================================================
// 2. WHATSAPP DEPARTMENT ROUTER (Section 2)
// ============================================================
const DEPARTMENT_MESSAGES = {
  all: "Hi TCS (Todi Cement Sales), I am interested in a comprehensive project estimate for full building materials & architectural brands.",
  fenesta: "Hi TCS, I am inquiring specifically about Fenesta UPVC / Aluminium Soundproof Windows and Doors for my property.",
  sleek: "Hi TCS, I need a consultation and quotation for Sleek Modular Kitchens by Asian Paints. Please share catalog.",
  tiles: "Hi TCS, I want to explore Motto large-format tiles and Metro Wood wooden plank tiles. Please share available ranges.",
  sanitary: "Hi TCS, I am inquiring about Cera sanitaryware, faucets, and bathroom fittings. Please send best price list.",
  kitchenware: "Hi TCS, please share options and price lists for Faber Auto-Clean Chimneys and Franke Quartz Sinks.",
  geyser: "Hi TCS, I need AO Smith Blue Diamond Geyser recommendations and pricing for my bathrooms.",
  cement: "Hi TCS, I need bulk supply rates for OPC/PPC Cement (UltraTech/Ambuja) and TMT Structural Steel for our construction site."
};

let currentSelectedDept = "all";

function selectDepartment(deptKey) {
  currentSelectedDept = deptKey;
  
  // Highlight active button
  const buttons = document.querySelectorAll(".dept-btn");
  buttons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.dept === deptKey);
  });

  updateWhatsAppLink();
}

function updateWhatsAppLink() {
  const customNote = document.getElementById("wa-custom-input") ? document.getElementById("wa-custom-input").value.trim() : "";
  let baseMsg = DEPARTMENT_MESSAGES[currentSelectedDept] || DEPARTMENT_MESSAGES.all;
  
  let fullMessage = baseMsg;
  if (customNote.length > 0) {
    fullMessage += ` Additional details: ${customNote}`;
  }

  // Update preview text
  const previewEl = document.getElementById("wa-preview-text");
  if (previewEl) {
    previewEl.textContent = `"${fullMessage}"`;
  }

  // Update send button href
  const sendBtn = document.getElementById("wa-send-btn");
  if (sendBtn) {
    sendBtn.href = `https://wa.me/${TCS_WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;
  }
}

// ============================================================
// 3. WHATSAPP CHAT SIMULATOR (Section 2 - Reacho.live Feature)
// ============================================================
let chatSimulationTimer = null;

function runChatSimulation() {
  const chatSteps = document.querySelectorAll(".chat-step");
  if (!chatSteps.length) return;

  // Reset all steps to hidden
  chatSteps.forEach(step => step.classList.remove("visible"));

  let delay = 350;
  chatSteps.forEach((step, index) => {
    chatSimulationTimer = setTimeout(() => {
      step.classList.add("visible");
      const chatBody = document.getElementById("chat-stream");
      if (chatBody) {
        chatBody.scrollTop = chatBody.scrollHeight;
      }
    }, delay);
    delay += (index === 2) ? 1400 : 1000;
  });
}

function restartChatSimulation() {
  if (chatSimulationTimer) clearTimeout(chatSimulationTimer);
  runChatSimulation();
}

// ============================================================
// 4. CLICKABLE BRANDS MODAL SYSTEM (Section 3)
// ============================================================
function openBrandModal(brandKey) {
  const brand = BRANDS_DATA[brandKey];
  if (!brand) return;

  // Set modal fields
  document.getElementById("m-brand-category").textContent = brand.category;
  document.getElementById("m-brand-name").textContent = brand.name;
  document.getElementById("m-brand-tagline").textContent = brand.tagline;
  document.getElementById("m-brand-desc").textContent = brand.description;

  // Render highlights
  const highContainer = document.getElementById("m-brand-highlights");
  highContainer.innerHTML = brand.highlights.map(h => `
    <div class="m-high-box">
      <div class="m-high-icon">${h.icon}</div>
      <strong>${h.title}</strong>
      <span>${h.desc}</span>
    </div>
  `).join("");

  // Render specs list
  const specsContainer = document.getElementById("m-brand-specs-list");
  specsContainer.innerHTML = brand.specs.map(s => `
    <div class="spec-item">
      <strong>${s.label}</strong>
      <span>${s.val}</span>
    </div>
  `).join("");

  // WhatsApp Button setup
  const waBtn = document.getElementById("m-brand-wa-btn");
  waBtn.href = `https://wa.me/${TCS_WHATSAPP_NUMBER}?text=${encodeURIComponent(brand.waMessage)}`;
  document.getElementById("m-brand-wa-text").textContent = `Inquire about ${brand.name.split(" ")[0]} on WhatsApp`;

  // Open modal
  const modal = document.getElementById("brand-modal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Brand Filter Function
function filterBrands(category, buttonEl) {
  // Update active pill
  document.querySelectorAll(".brands-filter-bar .filter-pill").forEach(p => p.classList.remove("active"));
  if (buttonEl) buttonEl.classList.add("active");

  const cards = document.querySelectorAll(".brand-card");
  cards.forEach(card => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "flex";
      card.style.animation = "fadeIn 0.35s ease";
    } else {
      card.style.display = "none";
    }
  });
}

// ============================================================
// 5. STRUCTURED QUOTE GENERATOR MODAL
// ============================================================
function openQuoteModal() {
  const modal = document.getElementById("quote-modal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function generateStructuredWhatsAppQuote(event) {
  event.preventDefault();

  const form = document.getElementById("quote-form");
  const projectType = form.querySelector('input[name="project_type"]:checked').value;
  const clientName = document.getElementById("quote-client-name").value.trim();
  const areaSelect = document.getElementById("quote-area-select").value;

  const selectedMaterials = [];
  form.querySelectorAll('input[name="material"]:checked').forEach(cb => {
    selectedMaterials.push(cb.value);
  });

  const structuredMessage = 
`*ESTIMATE INQUIRY TO TODI CEMENT SALES (TCS)*
---------------------------------------------
👤 *Client Name / City:* ${clientName}
🏗️ *Project Scope:* ${projectType}
📐 *Size / Layout:* ${areaSelect}
✨ *Required Materials & Brands:*
${selectedMaterials.map(m => ` • ${m}`).join("\n")}
---------------------------------------------
Please share itemized price estimates and product catalogs on WhatsApp. Thank you!`;

  closeModal("quote-modal");
  window.open(`https://wa.me/${TCS_WHATSAPP_NUMBER}?text=${encodeURIComponent(structuredMessage)}`, "_blank");
}

// ============================================================
// 6. CUSTOMER REVIEWS & FEEDBACK FILTER (Section 6)
// ============================================================
function filterReviews(role, buttonEl) {
  document.querySelectorAll(".feedback-filter-pills .f-pill").forEach(p => p.classList.remove("active"));
  if (buttonEl) buttonEl.classList.add("active");

  const cards = document.querySelectorAll(".testi-card");
  cards.forEach(card => {
    if (role === "all" || card.dataset.role === role) {
      card.style.display = "flex";
      card.style.animation = "fadeIn 0.35s ease";
    } else {
      card.style.display = "none";
    }
  });
}

function openReviewModal() {
  const modal = document.getElementById("review-modal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function setRating(val) {
  document.getElementById("review-stars-val").value = val;
  const stars = document.querySelectorAll("#star-select .star");
  stars.forEach((star, index) => {
    star.classList.toggle("selected", index < val);
  });

  const ratingLabel = document.getElementById("rating-text");
  const labels = {
    1: "1.0 - Needs Improvement",
    2: "2.0 - Fair",
    3: "3.0 - Good",
    4: "4.0 - Very Good",
    5: "5.0 - Excellent & Highly Recommended"
  };
  ratingLabel.textContent = labels[val] || `${val}.0`;
}

function submitCustomerReview(event) {
  event.preventDefault();

  const author = document.getElementById("review-author").value.trim();
  const category = document.getElementById("review-category").value;
  const reviewText = document.getElementById("review-text").value.trim();
  const starsCount = parseInt(document.getElementById("review-stars-val").value, 10);

  const starString = "★".repeat(starsCount);

  // Category title translation
  const catNames = {
    architect: "Architect / Interior Designer",
    homeowner: "Verified Homeowner",
    builder: "Turnkey Contractor / Builder"
  };

  const newCard = document.createElement("article");
  newCard.className = "testi-card";
  newCard.dataset.role = category;
  newCard.style.animation = "fadeIn 0.4s ease";
  newCard.innerHTML = `
    <div class="testi-card-top">
      <div class="testi-stars">${starString}</div>
      <span class="verified-tag">✓ Fresh Review</span>
    </div>
    <p class="testi-quote">"${reviewText}"</p>
    <div class="testi-author">
      <div class="avatar bg-emerald">${author.substring(0, 2).toUpperCase()}</div>
      <div>
        <div class="testi-name">${author}</div>
        <div class="testi-role">${catNames[category] || "Customer"}</div>
        <div class="testi-project">Category: Verified TCS Client</div>
      </div>
    </div>
  `;

  const container = document.getElementById("feedback-cards-container");
  if (container) {
    container.insertBefore(newCard, container.children[1] || container.firstChild);
  }

  closeModal("review-modal");
  alert("Thank you! Your verified review has been recorded.");
}

// ============================================================
// 7. SHOWROOM VISIT MODAL
// ============================================================
function openShowroomModal() {
  const modal = document.getElementById("showroom-modal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

// Generic Modal Closer
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function handleBackdropClick(event, modalId) {
  if (event.target.id === modalId) {
    closeModal(modalId);
  }
}

// Escape key closes open modals
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-backdrop.active").forEach(m => m.classList.remove("active"));
    document.body.style.overflow = "";
  }
});

// ============================================================
// 8. REACHO-STYLE LIVE ACTIVITY NOTIFICATION TOAST
// ============================================================
const LIVE_INQUIRIES = [
  "Ar. Sanchita Sen booked a site survey for Fenesta Windows",
  "Mr. Rajesh Khemka confirmed Sleek Modular Kitchen layout",
  "Goenka Builders ordered 800 sq. ft. of Motto 1200x2400 slabs",
  "Dr. A. Banerjee requested 12 Cera Rimless WCs quote",
  "Villa project in New Town booked Franke Granite Sink delivery",
  "Ballygunge Residence scheduled AO Smith geysers inspection",
  "Metro Wood oak plank tiles samples dispatched to Park Street"
];

let liveToastIndex = 0;
let liveToastTimer = null;

function cycleLiveToast() {
  const toast = document.getElementById("live-toast");
  const msgEl = document.getElementById("toast-msg");
  if (!toast || !msgEl) return;

  msgEl.style.opacity = "0";

  setTimeout(() => {
    liveToastIndex = (liveToastIndex + 1) % LIVE_INQUIRIES.length;
    msgEl.textContent = LIVE_INQUIRIES[liveToastIndex];
    msgEl.style.opacity = "1";
    toast.classList.add("visible");
  }, 300);
}

function closeLiveToast() {
  const toast = document.getElementById("live-toast");
  if (toast) {
    toast.classList.remove("visible");
    if (liveToastTimer) clearInterval(liveToastTimer);
  }
}

// ============================================================
// 9. MOBILE NAVIGATION & GLOBAL INITIALIZATION
// ============================================================
function toggleMobileNav() {
  const menu = document.getElementById("mobile-menu");
  const toggleBtn = document.getElementById("mobile-nav-toggle");
  if (menu && toggleBtn) {
    const isOpen = menu.classList.toggle("open");
    toggleBtn.classList.toggle("open", isOpen);
  }
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  // 1. Start Chat Simulation
  setTimeout(runChatSimulation, 600);

  // 2. Start Live Activity Toast cycling every 8 seconds
  liveToastTimer = setInterval(cycleLiveToast, 8000);

  // 3. Update current year in footer
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 4. Initialize department WhatsApp link
  updateWhatsAppLink();
});
