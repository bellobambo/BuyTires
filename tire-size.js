const tireAttributeData = {
    widths: ["435", "315", "305", "295", "285", "275", "265", "255"],
    profiles: ["30", "35", "40", "45", "50", "55", "60"],
    wheelSizes: ["18\"", "19\"", "19.5\"", "20\"", "22\""],
    seasons: ["Summer", "Winter", "All-Season", "All-Weather"],
    speedRatings: ["A4 20kmh / 12mph", "H", "V", "W", "Y"],
    loadIndexes: ["3", "91", "94", "98", "102"]
};

function renderTireSizeForm(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const formHTML = `
        <div class="staggered-form">
            <h3 class="staggered-title">ADD DIFFERENT REAR SIZE</h3>
            
            <div class="form-row">
                <label>Width <span class="asterisk">*</span></label>
                <select id="rearWidth">${generateOptions(tireAttributeData.widths)}</select>
            </div>

            <div class="form-row">
                <label>Profile <span class="asterisk">*</span></label>
                <select id="rearProfile">${generateOptions(tireAttributeData.profiles)}</select>
            </div>

            <div class="form-row">
                <label>Wheel Size <span class="asterisk">*</span></label>
                <select id="rearWheelSize">${generateOptions(tireAttributeData.wheelSizes)}</select>
            </div>

            <div class="form-row">
                <label>Season <span class="asterisk">*</span></label>
                <select id="rearSeason">${generateOptions(tireAttributeData.seasons)}</select>
            </div>

            <div class="form-row">
                <label>Speed Rating</label>
                <select id="rearSpeed">${generateOptions(tireAttributeData.speedRatings)}</select>
            </div>

            <div class="form-row">
                <label>Load Index</label>
                <select id="rearLoad">${generateOptions(tireAttributeData.loadIndexes)}</select>
            </div>

            <button class="less-options-btn" id="hideRearSize">LESS OPTIONS ^</button>
        </div>
    `;

    container.innerHTML = formHTML;
}

function generateOptions(array) {
    return array.map(opt => `<option value="${opt}">${opt}</option>`).join('');
}

window.renderTireSizeForm = renderTireSizeForm;