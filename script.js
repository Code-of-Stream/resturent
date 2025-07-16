// Sample menu data
const menuData = [
    {
        title: "Bruschetta",
        desc: "Grilled bread with garlic, tomatoes, olive oil, and basil.",
        price: "",
        category: "starters",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWwlMjBpbmRpYW4lMjBmb29kfGVufDB8fDB8fHww"
    },
    {
        title: "Caesar Salad",
        desc: "Crisp romaine, parmesan, croutons, and Caesar dressing.",
        price: "$10",
        category: "starters",
        img: "https://images.unsplash.com/photo-1722239312556-a6c37214279d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlYWwlMjBpbmRpYW4lMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Truffle Risotto",
        desc: "Creamy risotto with truffle oil and wild mushrooms.",
        price: "$18",
        category: "main",
        img: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
    },
    {
        title: "Grilled Salmon",
        desc: "Fresh salmon fillet, grilled to perfection, with lemon butter.",
        price: "$22",
        category: "main",
        img: "https://media.istockphoto.com/id/979914742/photo/chole-bhature-or-chick-pea-curry-and-fried-puri-served-in-terracotta-crockery-over-white.jpg?s=2048x2048&w=is&k=20&c=zhmGombUCMWWkdI2COP1vh1bDma-3wS_FOv4GmHE41s="
    },
    {
        title: "Tiramisu",
        desc: "Classic Italian dessert with mascarpone and espresso-soaked ladyfingers.",
        price: "$9",
        category: "desserts",
        img: "https://plus.unsplash.com/premium_photo-1668703459956-b8f36cd2bfbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Panna Cotta",
        desc: "Silky vanilla panna cotta with berry compote.",
        price: "$8",
        category: "desserts",
        img: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D"
    }
];

function renderMenu(category = "all") {
    const menuContainer = document.getElementById('menuItems');
    menuContainer.innerHTML = '';
    let filtered = menuData;
    if (category !== 'all') {
        filtered = menuData.filter(item => item.category === category);
    }
    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <div class="menu-card-content">
                <div class="menu-card-title">${item.title}</div>
                <div class="menu-card-desc">${item.desc}</div>
                <div class="menu-card-price">${item.price}</div>
            </div>
        `;
        menuContainer.appendChild(card);
    });
}

// Filter menu
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderMenu(this.dataset.category);
    });
});
// Render all menu by default
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    filterBtns[0].classList.add('active');
});

// Reservation Modal
const reserveBtn = document.getElementById('reserveBtn');
const modal = document.getElementById('reservationModal');
const closeModal = document.getElementById('closeModal');

reserveBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Reservation form submit
const reservationForm = document.getElementById('reservationForm');
reservationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your reservation! We look forward to serving you.');
    modal.style.display = 'none';
    reservationForm.reset();
});

// Contact form submit
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    contactForm.reset();
});
