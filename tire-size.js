const tireAttributeData = {
  widths: ["435", "315", "305", "295", "285", "275", "265", "255"],
  profiles: ["30", "35", "40", "45", "50", "55", "60"],
  wheelSizes: ['18"', '19"', '19.5"', '20"', '22"'],
  seasons: ["Summer", "Winter", "All-Season", "All-Weather"],
  speedRatings: [
    "A1 5kmh / 3mph", "A2 10kmh / 6mph", "A3 15kmh / 9mph", "A4 20kmh / 12mph",
    "A5 25kmh / 16mph", "A6 30kmh / 19mph", "A7 35kmh / 22mph", "A8 40kmh / 25mph",
    "B 50kmh / 31mph", "C 60kmh / 37mph", "D 65kmh / 40mph", "E 70kmh / 43mph",
    "F 80kmh / 50mph", "G 90kmh / 56mph", "J 100kmh / 62mph", "K 110kmh / 68mph",
    "L 120kmh / 75mph", "M 130kmh / 81mph", "N 140kmh / 87mph", "P 150kmh / 94mph",
    "Q 160kmh / 100mph", "R 170kmh / 106mph", "S 180kmh / 112mph", "T 190kmh / 118mph",
    "U 200kmh / 124mph", "H 210kmh / 130mph", "V 240kmh / 149mph", 
    "Z over 240kmh / over 149mph", "W 270kmh / 168mph", 
    "(W) over 270kmh / over 168mph", "Y 300kmh / 186mph"
  ],
  loadIndexes: Array.from({ length: 250 }, (_, i) => (i + 1).toString())
};

function generateOptions(array) {
  return `<option value="">- Select -</option>` + 
         array.map((opt) => `<option value="${opt}">${opt}</option>`).join("");
}

// showExtra now defaults to true
function renderTireSizeForm(containerId, isStaggered = false, showExtra = true) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const formHTML = `
    <div class="staggered-layout">
        <div class="tire-column">
            <div class="column-header">
                <h3>FRONT TIRES</h3>
                ${!isStaggered ? `<span class="staggered-toggle-link" id="addRearBtn">ADD DIFFERENT REAR SIZE</span>` : ''}
            </div>
            <div class="form-row">
                <label>Width <span class="asterisk">*</span></label>
                <select id="frontWidth">${generateOptions(tireAttributeData.widths)}</select>
            </div>
            <div class="form-row">
                <label>Profile <span class="asterisk">*</span></label>
                <select id="frontProfile">${generateOptions(tireAttributeData.profiles)}</select>
            </div>
            <div class="form-row">
                <label>Wheel Size <span class="asterisk">*</span></label>
                <select id="frontWheelSize">${generateOptions(tireAttributeData.wheelSizes)}</select>
            </div>

            ${(!isStaggered && showExtra) ? `
                <div class="form-row">
                    <label>Speed Rating</label>
                    <select id="speedRating">${generateOptions(tireAttributeData.speedRatings)}</select>
                </div>
                <div class="form-row">
                    <label>Load Index</label>
                    <select id="loadIndex">${generateOptions(tireAttributeData.loadIndexes)}</select>
                </div>
            ` : ''}
        </div>

        ${isStaggered ? `
        <div class="tire-column">
            <div class="column-header">
                <h3>REAR TIRES</h3>
                <span class="staggered-toggle-link" id="hideRearBtn">HIDE REAR SIZE</span>
            </div>
            <div class="form-row">
                <label>Width <span class="asterisk">*</span></label>
                <select id="rearWidth">${generateOptions(tireAttributeData.widths)}</select>
            </div>
            <div class="form-row">
                <label>Profile <span class="asterisk">*</span></label>
                <select id="rearProfile" class="disabled-select">${generateOptions(tireAttributeData.profiles)}</select>
            </div>
            <div class="form-row">
                <label>Wheel Size <span class="asterisk">*</span></label>
                <select id="rearWheelSize" class="disabled-select">${generateOptions(tireAttributeData.wheelSizes)}</select>
            </div>
        </div>
        ` : ''}
    </div>

    <div class="form-row season-full-width">
        <label>Tire Season <span class="asterisk">*</span></label>
        <select id="mainTireSeason">${generateOptions(tireAttributeData.seasons)}</select>
    </div>

    ${!isStaggered ? `
    <div style="margin-top: 10px;">
        <span class="staggered-toggle-link" id="toggleExtraBtn">
            ${showExtra ? 'LESS OPTIONS ' : 'MORE OPTIONS '}
        </span>
    </div>
    ` : ''}
  `;

  container.innerHTML = formHTML;

  // Listeners
  const addBtn = document.getElementById('addRearBtn');
  const hideBtn = document.getElementById('hideRearBtn');
  const toggleBtn = document.getElementById('toggleExtraBtn');

  if (addBtn) addBtn.onclick = () => renderTireSizeForm(containerId, true, false);
  if (hideBtn) hideBtn.onclick = () => renderTireSizeForm(containerId, false, true);
  if (toggleBtn) toggleBtn.onclick = () => renderTireSizeForm(containerId, false, !showExtra);
}