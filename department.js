let currentDeptData = null;

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const deptId = params.get('id');

    if (deptId && departments[deptId]) {
        currentDeptData = departments[deptId];
        // Ensure element exists before setting
        const nameEl = document.getElementById('deptName');
        if (nameEl) nameEl.textContent = currentDeptData.name;
    } else {
        const main = document.querySelector('main');
        if (main) main.innerHTML = '<div class="card"><h3>Department Not Found</h3><p>Please return to the previous page.</p></div>';
    }
});

function showContent(type) {
    if (!currentDeptData) return;

    const menu = document.getElementById('selectionMenu');
    const display = document.getElementById('infoDisplay');
    const title = document.getElementById('sectionTitle');
    const content = document.getElementById('sectionContent');

    // Hide Menu, Show Content
    if (menu) menu.style.display = 'none';
    if (display) display.style.display = 'block';

    if (!title || !content) return;

    switch (type) {
        case 'intro':
            title.textContent = "📝 Introduction";
            content.innerHTML = `<p>${currentDeptData.intro}</p>`;
            break;
        case 'background':
            title.textContent = "📚 Required Background";
            content.innerHTML = `<p>${currentDeptData.background}</p>`;
            break;
        case 'work':
            title.textContent = "💼 Workplaces & Salary";
            content.innerHTML = `
                <p><strong>Workplaces:</strong> ${currentDeptData.workplaces}</p>
                <p style="margin-top: 1rem;"><strong>Salary Estimate:</strong> ${currentDeptData.salary}</p>
            `;
            break;
        case 'stats':
            title.textContent = "📊 Statistics";
            content.innerHTML = `
                <p><strong>Cutting Points (Last 2 Years):</strong> ${currentDeptData.cutting_points}</p>
                <p style="margin-top: 1rem;"><strong>Student Capacity:</strong> ${currentDeptData.capacity}</p>
            `;
            break;
    }
}

function showMenu() {
    const menu = document.getElementById('selectionMenu');
    const display = document.getElementById('infoDisplay');

    if (menu) menu.style.display = 'flex'; // Was 'grid' but inline style said flex in one version, keeping consistent
    if (display) display.style.display = 'none';
}
