const vehicleData = {
  Acura: {
    models: ["MDX", "RDX", "TLX", "Integra"],
    trims: {
      MDX: ["Base", "Technology", "A-Spec", "Advance"],
      RDX: ["Base", "Technology", "A-Spec"],
      TLX: ["Base", "Technology", "Type S"],
      Integra: ["Base", "A-Spec", "A-Spec Technology"],
    },
    tireSizes: {
      MDX: ["255/55R19", "255/50R20"],
      RDX: ["235/55R19", "255/45R20"],
      TLX: ["235/50R18", "255/35R20"],
      Integra: ["215/50R17", "235/40R18"],
    },
  },
  "Alfa Romeo": {
    models: ["Giulia", "Stelvio", "Tonale"],
    trims: {
      Giulia: ["Sprint", "Ti", "Veloce", "Quadrifoglio"],
      Stelvio: ["Sprint", "Ti", "Veloce"],
      Tonale: ["Ti", "Veloce"],
    },
    tireSizes: {
      Giulia: ["225/45R18", "225/40R19"],
      Stelvio: ["235/60R18", "255/45R20"],
      Tonale: ["235/45R19", "235/40R20"],
    },
  },
  Audi: {
    models: ["A4", "Q5", "A3", "Q7", "A6"],
    trims: {
      A4: ["Premium", "Premium Plus", "Prestige"],
      Q5: ["Premium", "Premium Plus", "Prestige"],
      A3: ["Premium", "Premium Plus"],
      Q7: ["Premium", "Premium Plus", "Prestige"],
    },
    tireSizes: {
      A4: ["245/40R18", "245/35R19"],
      Q5: ["235/60R18", "255/45R20"],
      A3: ["225/45R17", "225/40R18"],
      Q7: ["255/55R19", "285/45R20"],
    },
  },
  BMW: {
    models: ["3 Series", "5 Series", "X3", "X5", "X7"],
    trims: {
      "3 Series": ["330i", "M340i", "330e"],
      "5 Series": ["530i", "540i", "M550i"],
      X3: ["sDrive30i", "xDrive30i", "M40i"],
      X5: ["sDrive40i", "xDrive45e", "M50i"],
    },
    tireSizes: {
      "3 Series": ["225/45R18", "225/40R19"],
      "5 Series": ["245/45R18", "245/40R19"],
      X3: ["245/50R19", "245/45R20"],
      X5: ["265/50R19", "275/45R20"],
    },
  },
  Chevrolet: {
    models: ["Silverado 1500", "Equinox", "Tahoe", "Malibu", "Colorado"],
    trims: {
      "Silverado 1500": ["WT", "Custom", "LT", "RST", "High Country"],
      Equinox: ["LS", "LT", "RS", "Premier"],
      Tahoe: ["LS", "LT", "Z71", "Premier", "High Country"],
      Malibu: ["LS", "RS", "LT"],
    },
    tireSizes: {
      "Silverado 1500": ["265/70R17", "275/60R20"],
      Equinox: ["225/65R17", "235/50R19"],
      Tahoe: ["265/65R18", "275/50R22"],
      Malibu: ["205/65R16", "245/45R18"],
    },
  },
  Hyundai: {
    models: ["Elantra", "Sonata", "Tucson", "Santa Fe", "Palisade"],
    trims: {
      Elantra: ["SE", "SEL", "Limited", "N Line"],
      Sonata: ["SE", "SEL", "Limited", "N Line"],
      Tucson: ["SE", "SEL", "XRT", "Limited"],
      Palisade: ["SE", "SEL", "Limited", "Calligraphy"],
    },
    tireSizes: {
      Elantra: ["195/65R15", "225/45R17"],
      Sonata: ["205/65R16", "235/45R18"],
      Tucson: ["225/65R17", "235/55R19"],
      Palisade: ["245/60R18", "245/50R20"],
    },
  },
  Jeep: {
    models: ["Wrangler", "Grand Cherokee", "Cherokee", "Compass", "Gladiator"],
    trims: {
      Wrangler: ["Sport", "Sahara", "Rubicon", "Willys"],
      "Grand Cherokee": ["Laredo", "Limited", "Overland", "Summit"],
      Compass: ["Sport", "Latitude", "Limited", "Trailhawk"],
      Gladiator: ["Sport", "Overland", "Rubicon", "Mojave"],
    },
    tireSizes: {
      Wrangler: ["245/75R17", "285/70R17", "255/70R18"],
      "Grand Cherokee": ["245/70R17", "265/50R20"],
      Compass: ["215/65R16", "225/55R18"],
      Gladiator: ["245/75R17", "285/70R17"],
    },
  },
  Kia: {
    models: ["Sportage", "Sorento", "Telluride", "Forte", "Soul"],
    trims: {
      Sportage: ["LX", "EX", "SX", "X-Line"],
      Sorento: ["LX", "S", "EX", "SX"],
      Telluride: ["LX", "S", "EX", "SX"],
      Forte: ["FE", "LXS", "GT-Line", "GT"],
    },
    tireSizes: {
      Sportage: ["235/65R17", "235/55R19"],
      Sorento: ["235/65R17", "235/55R19"],
      Telluride: ["245/60R18", "245/50R20"],
      Forte: ["195/65R15", "225/45R17"],
    },
  },
  Lexus: {
    models: ["RX", "NX", "ES", "IS", "GX"],
    trims: {
      RX: ["350", "350h", "500h F Sport"],
      NX: ["250", "350", "350h", "450h+"],
      ES: ["250", "350", "300h"],
      IS: ["300", "350 F Sport", "500"],
    },
    tireSizes: {
      RX: ["235/65R18", "235/50R21"],
      NX: ["235/60R18", "235/50R20"],
      ES: ["215/55R17", "235/45R18"],
      IS: ["235/45R18", "235/40R19"],
    },
  },
  "Mercedes-Benz": {
    models: ["C-Class", "E-Class", "GLC", "GLE", "S-Class"],
    trims: {
      "C-Class": ["C300", "AMG C43", "AMG C63"],
      GLC: ["GLC300", "AMG GLC43"],
      GLE: ["GLE350", "GLE450", "GLE53"],
    },
    tireSizes: {
      "C-Class": ["225/50R17", "225/45R18"],
      GLC: ["235/60R18", "235/55R19"],
      GLE: ["255/50R19", "275/50R20"],
    },
  },
  Nissan: {
    models: ["Altima", "Rogue", "Sentra", "Frontier", "Pathfinder"],
    trims: {
      Altima: ["S", "SV", "SR", "SL", "Platinum"],
      Rogue: ["S", "SV", "SL", "Platinum"],
      Sentra: ["S", "SV", "SR"],
      Frontier: ["S", "SV", "PRO-X", "PRO-4X"],
    },
    tireSizes: {
      Altima: ["215/60R16", "235/40R19"],
      Rogue: ["225/65R17", "235/55R19"],
      Sentra: ["205/60R16", "215/50R17"],
      Frontier: ["265/70R16", "265/65R17"],
    },
  },
  Porsche: {
    models: ["911", "Cayenne", "Macan", "Taycan", "Panamera"],
    trims: {
      911: ["Carrera", "Targa", "Turbo", "GT3"],
      Cayenne: ["Base", "S", "GTS", "Turbo"],
      Macan: ["Base", "S", "GTS"],
    },
    tireSizes: {
      911: ["235/40R19", "245/35R20"],
      Cayenne: ["255/55R19", "285/40R21"],
      Macan: ["235/60R18", "265/45R20"],
    },
  },
  Tesla: {
    models: ["Model 3", "Model Y", "Model S", "Model X"],
    trims: {
      "Model 3": ["RWD", "Long Range", "Performance"],
      "Model Y": ["Long Range", "Performance"],
      "Model S": ["Long Range", "Plaid"],
      "Model X": ["Long Range", "Plaid"],
    },
    tireSizes: {
      "Model 3": ["235/45R18", "235/40R19"],
      "Model Y": ["255/45R19", "255/40R20"],
      "Model S": ["255/45R19", "285/30R21"],
      "Model X": ["265/45R20", "265/35R22"],
    },
  },
  Volkswagen: {
    models: ["Jetta", "Tiguan", "Atlas", "Golf", "ID.4"],
    trims: {
      Jetta: ["S", "Sport", "SE", "SEL", "GLI"],
      Tiguan: ["S", "SE", "SEL R-Line"],
      Atlas: ["SE", "SEL", "SEL Premium"],
      "ID.4": ["Standard", "Pro", "Pro S"],
    },
    tireSizes: {
      Jetta: ["205/60R16", "225/45R18"],
      Tiguan: ["215/65R17", "255/40R20"],
      Atlas: ["245/60R18", "255/50R20"],
      "ID.4": ["235/55R19", "235/50R20"],
    },
  },
  Toyota: {
    models: [
      "RAV4",
      "Camry",
      "Tacoma",
      "Highlander",
      "Corolla",
      "4Runner",
      "Tundra",
      "Prius",
    ],
    trims: {
      RAV4: ["LE", "XLE", "Adventure", "Limited", "TRD Off-Road"],
      Camry: ["LE", "SE", "XLE", "XSE", "TRD"],
      Tacoma: ["SR", "SR5", "TRD Sport", "TRD Off-Road", "Limited"],
      Highlander: ["L", "LE", "XLE", "Limited", "Platinum"],
      Corolla: ["L", "LE", "SE", "XLE", "XSE"],
      "4Runner": ["SR5", "TRD Off-Road", "TRD Pro", "Limited"],
      Tundra: ["SR", "SR5", "Limited", "Platinum", "TRD Pro"],
      Prius: ["LE", "XLE", "Limited"],
    },
    tireSizes: {
      RAV4: ["225/65R17", "235/55R19", "225/60R18"],
      Camry: ["205/65R16", "235/45R18", "215/55R17"],
      Tacoma: ["265/70R16", "265/65R17", "265/70R17"],
      Highlander: ["245/60R18", "235/55R20"],
      Corolla: ["195/65R15", "205/55R16", "225/40R18"],
      "4Runner": ["265/70R17", "275/5520"],
      Tundra: ["275/65R18", "275/55R20"],
      Prius: ["195/65R15", "215/45R17"],
    },
  },
  Honda: {
    models: ["Civic", "Accord", "CR-V", "Pilot", "HR-V", "Odyssey"],
    trims: {
      Civic: ["LX", "Sport", "EX", "Touring"],
      Accord: ["LX", "Sport", "EX-L", "Touring"],
      "CR-V": ["LX", "EX", "EX-L", "Touring"],
      Pilot: ["LX", "EX", "EX-L", "Touring", "Elite"],
      "HR-V": ["LX", "Sport", "EX-L"],
      Odyssey: ["LX", "EX", "EX-L", "Touring", "Elite"],
    },
    tireSizes: {
      Civic: ["215/55R16", "235/40R18", "215/50R17"],
      Accord: ["225/50R17", "235/45R18", "235/40R19"],
      "CR-V": ["235/60R18", "235/55R19"],
      Pilot: ["245/60R18", "245/50R20"],
      "HR-V": ["215/55R17", "215/50R18"],
      Odyssey: ["235/60R18", "235/55R19"],
    },
  },
  Ford: {
    models: ["F-150", "Escape", "Explorer", "Mustang", "Edge", "Bronco"],
    trims: {
      "F-150": ["XL", "XLT", "Lariat", "King Ranch", "Platinum", "Limited"],
      Escape: ["S", "SE", "SEL", "Titanium"],
      Explorer: ["Base", "XLT", "Limited", "ST", "Platinum"],
      Mustang: ["EcoBoost", "GT", "Mach 1"],
      Edge: ["SE", "SEL", "ST", "Titanium"],
      Bronco: ["Base", "Big Bend", "Black Diamond", "Outer Banks", "Wildtrak"],
    },
    tireSizes: {
      "F-150": ["275/65R18", "275/55R20", "265/70R17"],
      Escape: ["225/60R18", "225/55R19"],
      Explorer: ["255/55R20", "265/45R21"],
      Mustang: ["235/55R17", "255/40R19", "275/40R19"],
      Edge: ["245/60R18", "245/50R20"],
      Bronco: ["255/70R16", "285/70R17", "315/70R17"],
    },
  },
};

const els = {
  year: document.getElementById("yearSelect"),
  make: document.getElementById("makeSelect"),
  model: document.getElementById("modelSelect"),
  trim: document.getElementById("trimSelect"),
  tireSize: document.getElementById("tireSizeSelect"),
  season: document.getElementById("seasonSelect"),
  searchType: document.getElementById("searchTypeSelect"),
  tireImage: document.getElementById("tireSizeImage"),
  vehicleImage: document.getElementById("vehicleImage"),

  modelSearch: document.getElementById("modelSearch"),
  trimSearch: document.getElementById("trimSearch"),
  tireSizeSearch: document.getElementById("tireSizeSearch"),

  modelDropdown: document.getElementById("modelDropdown"),
  trimDropdown: document.getElementById("trimDropdown"),
  tireSizeDropdown: document.getElementById("tireSizeDropdown"),

  vehicleName: document.getElementById("vehicleName"),
  vehicleSpecs: document.getElementById("vehicleSpecs"),
  searchBtn: document.getElementById("searchBtn"),
};

// Remove or modify this line at the bottom of script.js
// els.searchType.dispatchEvent(new Event("change"));

// Also, ensure your "Shop Now" button is visible at the start
document.addEventListener("DOMContentLoaded", () => {
  els.tireImage.style.display = "none";
  els.vehicleImage.style.display = "none";

  // Make sure the Shop Now button is NOT hidden initially
  const toggleBtn = document.getElementById("button1");
  toggleBtn.classList.remove("hidden");

  // Make sure the search section is NOT active initially
  const searchSection = document.getElementById("searchSection");
  searchSection.classList.remove("active");
});

els.searchType.addEventListener("change", function () {
  const container = document.querySelector(".search-section");
  const staggeredContainer = document.getElementById("staggeredContainer");

  if (this.value === "size") {
    container.classList.add("size-mode");
    els.tireImage.style.display = "block";
    els.vehicleImage.style.display = "none";

    document.querySelectorAll(".form-side > .form-row").forEach((row) => {
      row.style.display = "none";
    });

    if (window.renderTireSizeForm) {
      window.renderTireSizeForm("staggeredContainer");
    }

    if (staggeredContainer) staggeredContainer.style.display = "block";
  } else if (this.value === "vehicle") {
    container.classList.remove("size-mode");
    els.tireImage.style.display = "none";

    document.querySelectorAll(".form-side > .form-row").forEach((row) => {
      row.style.display = "flex";
    });

    if (staggeredContainer) staggeredContainer.style.display = "none";

    updateVehiclePreview();
    updateVehicleImage();
  }
});

// Modal Logic
const toggleBtn = document.getElementById("button1");
const searchSection = document.getElementById("searchSection");
const closeModal = document.getElementById("closeModal");

// When opening the modal, reset everything
toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.add("hidden");
  searchSection.classList.add("active");

  // Reset the search type select to show placeholder
  els.searchType.value = "vehicle";

  // Reset all form fields
  els.year.value = "";
  els.make.value = "";
  els.model.value = "";
  els.trim.value = "";
  els.tireSize.value = "";
  els.season.value = "All Tires";

  // Reset search inputs
  els.modelSearch.value = "";
  els.trimSearch.value = "";
  els.tireSizeSearch.value = "";

  // Hide dropdowns
  els.modelDropdown.classList.remove("active");
  els.trimDropdown.classList.remove("active");
  els.tireSizeDropdown.classList.remove("active");

  // Reset model, trim, and tire size options
  modelSearchable.reset();
  trimSearchable.reset();
  tireSizeSearchable.reset();

  // Hide staggered container if visible
  const staggeredContainer = document.getElementById("staggeredContainer");
  if (staggeredContainer) {
    staggeredContainer.style.display = "none";
  }

  // Show all form rows
  document.querySelectorAll(".form-side > .form-row").forEach((row) => {
    row.style.display = "flex";
  });

  // Hide tire image
  els.tireImage.style.display = "none";

  // Remove size-mode class
  document.querySelector(".search-section").classList.remove("size-mode");
});

// When closing the modal, reset search type
closeModal.addEventListener("click", () => {
  searchSection.classList.remove("active");
  toggleBtn.classList.remove("hidden");
  // Reset search type when closing
  els.searchType.value = "";
});

// Reset on page load (in case page is refreshed with modal open)
window.addEventListener("load", function () {
  els.searchType.value = "";
});

// Populate Years
const currentYear = new Date().getFullYear();
for (let year = currentYear; year >= 1948; year--) {
  const opt = document.createElement("option");
  opt.value = year;
  opt.textContent = year;
  els.year.appendChild(opt);
}

// Populate Makes
Object.keys(vehicleData)
  .sort()
  .forEach((make) => {
    const opt = document.createElement("option");
    opt.value = make;
    opt.textContent = make;
    els.make.appendChild(opt);
  });

function setupSearchableSelect(selectEl, searchEl, dropdownEl, options = []) {
  let currentOptions = options;

  function showDropdown(opts, query = "") {
    dropdownEl.innerHTML = "";

    if (!opts.length && query) {
      const div = document.createElement("div");
      div.className = "dropdown-option";
      div.textContent = `Custom: "${query}"`;
      div.onclick = () => selectOption(query);
      dropdownEl.appendChild(div);
    } else {
      opts.forEach((opt) => {
        const div = document.createElement("div");
        div.className = "dropdown-option";
        div.textContent = opt;
        div.onclick = () => selectOption(opt);
        dropdownEl.appendChild(div);
      });
    }
    dropdownEl.classList.add("active");
  }

  function selectOption(value) {
    selectEl.value = value;
    searchEl.value = "";
    dropdownEl.classList.remove("active");
    searchEl.classList.remove("active");
    selectEl.dispatchEvent(new Event("change"));
  }

  searchEl.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase();
    showDropdown(
      currentOptions.filter((o) => o.toLowerCase().includes(q)),
      q
    );
  });

  searchEl.addEventListener("blur", () => {
    setTimeout(() => dropdownEl.classList.remove("active"), 200);
  });

  return {
    updateOptions(newOpts) {
      currentOptions = newOpts;
      selectEl.innerHTML = `<option value="">Select...</option>`;
      newOpts.forEach((o) => {
        const opt = document.createElement("option");
        opt.value = o;
        opt.textContent = o;
        selectEl.appendChild(opt);
      });
    },
    reset() {
      selectEl.value = "";
      searchEl.value = "";
      dropdownEl.classList.remove("active");
    },
  };
}

const modelSearchable = setupSearchableSelect(
  els.model,
  els.modelSearch,
  els.modelDropdown
);
const trimSearchable = setupSearchableSelect(
  els.trim,
  els.trimSearch,
  els.trimDropdown
);
const tireSizeSearchable = setupSearchableSelect(
  els.tireSize,
  els.tireSizeSearch,
  els.tireSizeDropdown
);

/* =========================
   MAKE CHANGE
========================= */
els.make.addEventListener("change", () => {
  const make = els.make.value;

  if (make && vehicleData[make]) {
    modelSearchable.updateOptions(vehicleData[make].models);
  } else {
    modelSearchable.reset();
  }

  trimSearchable.reset();
  tireSizeSearchable.reset();
  resetVehicleImage();
});

/* =========================
   MODEL CHANGE → IMAGE UPDATES HERE
========================= */
els.model.addEventListener("change", () => {
  const make = els.make.value;
  const model = els.model.value;

  // Console log the selected make and model
  console.log("Vehicle Selected:");
  console.log("Make: ", make);
  console.log("Model: ", model);

  if (make && model && vehicleData[make]?.trims[model]) {
    trimSearchable.updateOptions(vehicleData[make].trims[model]);
  } else {
    trimSearchable.reset();
  }

  tireSizeSearchable.reset();
  updateVehicleImage();
});

/* =========================
   IMAGE LOGIC (FIXED)
========================= */
function updateVehicleImage() {
  const make = els.make.value;
  const model = els.model.value;

  if (!make || !model) {
    resetVehicleImage();
    return;
  }

  // Adding 'public/' to the path because that is where your images are stored
  const imagePath = `public/${make} ${model}.png`;

  // Console log the path being sent to the image tag
  console.log("Rendering Image Path: ", imagePath);

  els.vehicleImage.src = imagePath;
  els.vehicleImage.style.display = "block";

  // Error check: if the image file doesn't exist, log it
  els.vehicleImage.onerror = function () {
    console.error("Could not find image at path: ", imagePath);
    this.style.display = "none";
  };
}

function updateVehicleImage() {
  const make = els.make.value;
  const model = els.model.value;

  if (!make || !model) {
    resetVehicleImage();
    return;
  }

  // 2. Fixed Path: Added '/public/' prefix
  // If your HTML file is in the root and images are in /public, use this:
  const imageName = `public/${make} ${model}.png`;

  console.log("- Rendering Image Path:", imageName);

  els.vehicleImage.src = imageName;
  els.vehicleImage.style.display = "block";

  // Error handling if image doesn't exist
  els.vehicleImage.onerror = function () {
    console.error("Failed to load image at:", imageName);
    this.style.display = "none";
  };
}

function resetVehicleImage() {
  els.vehicleImage.src = "";
  els.vehicleImage.style.display = "none";
}

/* =========================
   VEHICLE TEXT PREVIEW
========================= */
function updateVehiclePreview() {
  const { year, make, model, trim } = els;

  if (
    els.searchType.value !== "size" &&
    year.value &&
    make.value &&
    model.value &&
    trim.value
  ) {
    els.vehicleName.textContent = `${year.value} ${make.value} ${model.value}`;
    els.vehicleSpecs.textContent = `${trim.value} • Ready to find tires`;
  } else {
    els.vehicleName.textContent = "Select your vehicle";
    els.vehicleSpecs.textContent = "Choose year, make, model, and trim";
  }
}


/* =========================
   LEAD MODAL & NODE.JS LOGIC
========================= */

// New Lead Modal Elements
const leadModal = document.getElementById("leadModal");
const closeLeadModal = document.getElementById("closeLeadModal");
const leadForm = document.getElementById("leadForm");

/**
 * Specifically clears only the inputs inside the Customer Details modal
 */
function clearCustomerDetailsForm() {
    // Standard form reset
    leadForm.reset();
    console.log("Customer Details inputs have been cleared.");
}

// Open the Lead Collection Modal
els.searchBtn.addEventListener("click", () => {
    const isVehicleMode = els.searchType.value === "vehicle";

    if (isVehicleMode) {
        if (!els.make.value || !els.model.value) {
            alert("Please select at least a Make and Model to continue.");
            return;
        }
    }
    leadModal.classList.add("active");
});

// Logic for clicking the 'X' button on Customer Modal
closeLeadModal.addEventListener("click", () => {
    leadModal.classList.remove("active");
    clearCustomerDetailsForm(); // Clear inputs when closing without registering
});

// Handle Form Submission to Node.js Server
leadForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // 1. Format the Vehicle string
    const vehicleSummary = [
        els.year.value,
        els.make.value,
        els.model.value,
        els.trim.value,
    ].filter(Boolean).join(" ");

    // 2. Prepare the data object
    const userData = {
        name: document.getElementById("userName").value,
        email: document.getElementById("userEmail").value,
        phone: document.getElementById("userPhone").value,
        address: document.getElementById("userAddress").value,
        searchType: els.searchType.value === "vehicle" ? "By Vehicle" : "By Tire Size",
        vehicleInfo: vehicleSummary || "N/A",
        tireSize: els.tireSize.value || "Not specified",
        season: els.season.value,
    };

    try {
        const response = await fetch("http://localhost:3000/send-lead", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (response.ok) {
            alert(`Success! Registration details for ${userData.name} sent.`);

            // 3. Clear the Customer inputs after success
            clearCustomerDetailsForm();

            // 4. Close all modals
            leadModal.classList.remove("active");
            searchSection.classList.remove("active");
            toggleBtn.classList.remove("hidden");
        } else {
            alert("Failed to send details. Please check if the Node server is active.");
        }
    } catch (error) {
        console.error("Connection Error:", error);
        alert("Could not connect to the backend server.");
    }
});

// Initialize search type view
els.searchType.dispatchEvent(new Event("change"));