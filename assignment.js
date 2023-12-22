document.addEventListener('DOMContentLoaded', function () {

    toggleCategory('men');
});

window.toggleCategory = function (category) {
    const allSections = document.querySelectorAll('.category-section');
    allSections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedSection = document.getElementById(category);
    if (selectedSection) {
        selectedSection.style.display = 'flex';
        selectedSection.classList.add('active');
    }

    calculatePercentOff(category);
};

function calculatePercentOff(category) {
    const products = {
        men: { price: 20, compareAtPrice: 30 },
        women: { price: 25, compareAtPrice: 35 },
        kids: { price: 15, compareAtPrice: 25 }
    };

    const product = products[category];

    if (product) {
        const percentOff = ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100;
        const percentOffElement = document.querySelector(`#${category} .percent-off`);
        percentOffElement.textContent = `Save ${percentOff.toFixed(0)}%`;
    }
}