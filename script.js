const products = [
    {
        id: "ac-pistola-elite-9mm",
        name: "Pistola 9mm Elite Compact",
        category: "armas-curtas",
        shortCategory: "Arma curta",
        description: "Plataforma compacta para porte velado, com ergonomia otimizada e trilho para acessórios.",
        spec: "Calibre 9×19mm • Capacidade 15+1 • Ação semiautomática",
        price: 11800,
        image: "fotos/9mm-compact.png"
    },
    {
        id: "ac-pistola-full-9mm",
        name: "Pistola 9mm Duty Full Size",
        category: "armas-curtas",
        shortCategory: "Arma curta",
        description: "Versão full size voltada para uso em estande e aplicações operacionais.",
        spec: "Calibre 9×19mm • Capacidade 17+1 • Cano 5\"",
        price: 12500,
        image: "fotos/dutty-full-size.png"
    },
    {
        id: "ac-revolver-357",
        name: "Revólver .357 Magnum Classic",
        category: "armas-curtas",
        shortCategory: "Arma curta",
        description: "Revólver clássico com acabamento premium e ação suave para tiro esportivo.",
        spec: "Calibre .357 Magnum • Capacidade 6 tiros",
        price: 9700,
        image: "fotos/revolver-357.png"
    },

    {
        id: "al-carabina-556",
        name: "Carabina 5,56 Plataforma Tática",
        category: "armas-longas",
        shortCategory: "Arma longa",
        description: "Carabina em plataforma tática com trilho superior integral e coronha ajustável.",
        spec: "Calibre 5,56×45mm • Carregador 30 tiros",
        price: 21600,
        image: "fotos/carabina-556.png"
    },
    {
        id: "al-carabina-22lr",
        name: "Carabina .22LR Precision",
        category: "armas-longas",
        shortCategory: "Arma longa",
        description: "Carabina de ferrolho para tiro esportivo de precisão, com coronha sintética.",
        spec: "Calibre .22LR • Trilho para óptica",
        price: 4200,
        image: "fotos/carabina-22lr.png"
    },
    {
        id: "al-espingarda-12",
        name: "Espingarda Cal. 12 Pump Tactical",
        category: "armas-longas",
        shortCategory: "Arma longa",
        description: "Espingarda de repetição com cano ventilado e capacidade otimizada.",
        spec: "Calibre 12 • Capacidade 7+1",
        price: 7800,
        image: "fotos/calibre-12.png"
    },

    // Munições
    {
        id: "mu-9mm-treino",
        name: "Munição 9mm Treino CX 50",
        category: "municoes",
        shortCategory: "Munição",
        description: "Linha de treinamento com carga equilibrada e foco em regularidade de disparo.",
        spec: "Calibre 9×19mm • Ogival • CX c/ 50 un.",
        price: 380,
        image: "fotos/9mm-ammo.png"
    },
    {
        id: "mu-9mm-defesa",
        name: "Munição 9mm Defesa CX 20",
        category: "municoes",
        shortCategory: "Munição",
        description: "Projétil expansivo para aplicações de defesa, conforme autorização e legislação.",
        spec: "Calibre 9×19mm • Expansiva • CX c/ 20 un.",
        price: 620,
        image: "fotos/9mm-ammo-20.png"
    },
    {
        id: "mu-556",
        name: "Munição 5,56×45mm Tática CX 50",
        category: "municoes",
        shortCategory: "Munição",
        description: "Cartuchos para uso operacional e esportivo avançado em plataformas 5,56.",
        spec: "Calibre 5,56×45mm • CX c/ 50 un.",
        price: 820,
        image: "fotos/ammo-tatica-50.png"
    },

    // Acessórios
    {
        id: "acess-coldre-kydex",
        name: "Coldre Kydex Porta Interna",
        category: "acessorios",
        shortCategory: "Acessório",
        description: "Coldre em kydex de baixo perfil, ajustável e compatível com diferentes plataformas.",
        spec: "Regulagem de retenção • Posição ambidestra",
        price: 420,
        image: "fotos/colde-carregador.png"
    },
    {
        id: "acess-case-rigido",
        name: "Case rígido para armas curtas",
        category: "acessorios",
        shortCategory: "Acessório",
        description: "Maleta rígida com espuma recortável e pontos de cadeado para transporte seguro.",
        spec: "Compatível com até 2 pistolas e carregadores",
        price: 380,
        image: "fotos/case.png"
    },
    {
        id: "acess-mira-vermelha",
        name: "Mira holográfica compacta",
        category: "acessorios",
        shortCategory: "Acessório",
        description: "Mira de ponto vermelho para plataformas curtas e longas, com ajuste fino.",
        spec: "Brilho regulável • Trilho picatinny",
        price: 1480,
        image: "fotos/mira.png"
    },

    // Equipamentos táticos
    {
        id: "eq-colete-tatico",
        name: "Colete tático modular",
        category: "equipamentos-taticos",
        shortCategory: "Equip. tático",
        description: "Colete modular com sistema MOLLE, painéis ajustáveis e suporte a placas balísticas (não incluídas).",
        spec: "Ajuste por velcros e fivelas • Linha profissional",
        price: 960,
        image: "fotos/colete.png"
    },
    {
        id: "eq-mochila-24h",
        name: "Mochila tática 24h",
        category: "equipamentos-taticos",
        shortCategory: "Equip. tático",
        description: "Mochila compacta para operações e deslocamentos de curta duração.",
        spec: "Capacidade 24L • Compartimentos internos",
        price: 520,
        image: "fotos/mochila-tatica.png"
    },
    {
        id: "eq-luvas-taticas",
        name: "Luvas táticas reforçadas",
        category: "equipamentos-taticos",
        shortCategory: "Equip. tático",
        description: "Luvas com reforço em áreas estratégicas para maior proteção e aderência.",
        spec: "Reforços em pontos de impacto • Tecido respirável",
        price: 210,
        image: "fotos/luvas-taticas.png"
    },

    // Defesa pessoal autorizada
    {
        id: "dp-spray",
        name: "Spray de defesa (placeholder)",
        category: "defesa-pessoal",
        shortCategory: "Defesa pessoal",
        description: "Recurso de defesa pessoal não letal, sujeito à disponibilidade e regulamentação.",
        spec: "Dispositivo de uso restrito • Consulte condições",
        price: 180,
        image: "fotos/spray-de-defesa.png"
    },
    {
        id: "dp-lanterna",
        name: "Lanterna tática compacta",
        category: "defesa-pessoal",
        shortCategory: "Defesa pessoal",
        description: "Lanterna de alta intensidade, ideal para uso cotidiano e complementar.",
        spec: "LED de alto brilho • Modos selecionáveis",
        price: 260,
        image: "fotos/lanterna.png"
    },
    {
        id: "dp-alarme-pessoal",
        name: "Alarme pessoal sonoro",
        category: "defesa-pessoal",
        shortCategory: "Defesa pessoal",
        description: "Dispositivo sonoro portátil para situações de emergência e pedido de ajuda.",
        spec: "Acionamento rápido • Tamanho compacto",
        price: 120,
        image: "fotos/alarme-de-bolso.png"
    }
];

const LEGAL_NOTE = "Venda restrita a pessoas autorizadas. Sujeito à apresentação de documentação válida.";

const cart = [];

const selectors = {
    productsGrid: '[data-category]',
    cartCount: '#cartCount',
    cartItems: '#cartItems',
    cartEmpty: '#cartEmpty',
    cartTableWrapper: '#cartTableWrapper',
    cartTotal: '#cartTotal',
    clearCartBtn: '#clearCartBtn'
};

function formatCurrency(value) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

function getProductById(id) {
    return products.find(p => p.id === id);
}

function showCartFeedback(product) {
    const cartBtn = document.getElementById('cartBtn');
    const toast = document.getElementById('cartToast');
    if (!cartBtn || !toast) return;

    cartBtn.classList.add('cart-bump');
    setTimeout(() => {
        cartBtn.classList.remove('cart-bump');
    }, 350);

    toast.textContent = `${product.name} adicionado ao carrinho`;
    toast.classList.add('visible');

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.classList.remove('visible');
    }, 1800);
}


function addToCart(id) {
    const product = getProductById(id);
    if (!product) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            category: product.shortCategory,
            price: product.price,
            quantity: 1
        });
    }
    renderCart();
    showCartFeedback(product)
}

function updateGoToCartButton(totalItems) {
    const btn = document.getElementById('goToCartBtn');
    if (!btn) return;

    if (totalItems > 0) {
        btn.classList.add('visible');
    } else {
        btn.classList.remove('visible');
    }
}


function removeFromCart(id) {
    const index = cart.findIndex(item => item.id === id);
    if (index >= 0) {
        cart.splice(index, 1);
        renderCart();
    }
}

function updateCartQuantity(id, quantity) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    const q = Math.max(1, quantity || 1);
    item.quantity = q;
    renderCart();
}

function clearCart() {
    cart.length = 0;
    renderCart();
}

function renderCart() {
    const cartCountEl = document.querySelector(selectors.cartCount);
    const cartItemsEl = document.querySelector(selectors.cartItems);
    const cartEmptyEl = document.querySelector(selectors.cartEmpty);
    const cartTableWrapperEl = document.querySelector(selectors.cartTableWrapper);
    const cartTotalEl = document.querySelector(selectors.cartTotal);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountEl.textContent = totalItems;

    // atualiza o botão flutuante
    updateGoToCartButton(totalItems);

    if (cart.length === 0) {
        cartEmptyEl.style.display = "block";
        cartTableWrapperEl.style.display = "none";
        cartTotalEl.textContent = "Total: R$ 0,00";
        cartItemsEl.innerHTML = "";
        return;
    }

    cartEmptyEl.style.display = "none";
    cartTableWrapperEl.style.display = "block";

    let html = "";
    let total = 0;

    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        html += `
          <tr>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>
              <input
                type="number"
                class="form-input cart-item-qty"
                data-product-id="${item.id}"
                min="1"
                value="${item.quantity}"
              />
            </td>
            <td>${formatCurrency(item.price)}</td>
            <td>${formatCurrency(subtotal)}</td>
            <td>
              <button type="button" class="btn-link" data-remove-id="${item.id}">remover</button>
            </td>
          </tr>
        `;
    });

    cartItemsEl.innerHTML = html;
    cartTotalEl.textContent = `Total: ${formatCurrency(total)}`;
}


function updateGoToCartButton(totalItems) {
    const btn = document.getElementById('goToCartBtn');
    if (!btn) return;

    if (totalItems > 0) {
        btn.classList.add('visible');
    } else {
        btn.classList.remove('visible');
    }
}


function generateProducts() {
    const grids = document.querySelectorAll(selectors.productsGrid);
    const map = {};
    grids.forEach(grid => {
        const category = grid.getAttribute('data-category');
        if (category) {
            map[category] = grid;
        }
    });

    products.forEach(product => {
        const grid = map[product.category];
        if (!grid) return;

        const card = document.createElement('article');
        card.className = 'product-card reveal';
        card.dataset.productId = product.id;
        card.dataset.productName = product.name.toLowerCase();

        card.innerHTML = `
  <div class="product-image">
    <span class="badge-category">${product.shortCategory}</span>
    ${product.image ? `<img src="${product.image}" alt="${product.name}">` : ""}
  </div>
  <div class="product-title">${product.name}</div>
  <div class="product-meta">${product.description}</div>
  <div class="product-spec">${product.spec}</div>
  <div class="product-legal">${LEGAL_NOTE}</div>
  <div class="product-footer">
    <div class="product-price">
      ${formatCurrency(product.price)}
    </div>
        <button type="button" class="btn-add-cart" data-add-id="${product.id}">
    <i class="ri-shopping-cart-line"></i>
    Adicionar
        </button>

  </div>
`;

        grid.appendChild(card);
    });
}

function setupProductEvents() {
    document.body.addEventListener('click', (event) => {
        const addBtn = event.target.closest('[data-add-id]');
        const removeBtn = event.target.closest('[data-remove-id]');
        const categoryCard = event.target.closest('.category-card');

        if (addBtn) {
            const id = addBtn.getAttribute('data-add-id');
            addToCart(id);
        }

        if (removeBtn) {
            const id = removeBtn.getAttribute('data-remove-id');
            removeFromCart(id);
        }

        if (categoryCard && categoryCard.hasAttribute('data-target')) {
            const target = categoryCard.getAttribute('data-target');
            const el = document.querySelector(target);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });

    const cartItemsEl = document.querySelector(selectors.cartItems);
    cartItemsEl.addEventListener('input', (event) => {
        if (event.target.classList.contains('cart-item-qty')) {
            const id = event.target.getAttribute('data-product-id');
            const value = parseInt(event.target.value, 10);
            updateCartQuantity(id, isNaN(value) ? 1 : value);
        }
    });

    const clearCartBtn = document.querySelector(selectors.clearCartBtn);
    clearCartBtn.addEventListener('click', () => {
        if (cart.length === 0) return;
        if (confirm("Deseja realmente esvaziar o carrinho?")) {
            clearCart();
        }
    });
}

function setupHeaderNavigation() {
    const navLinks = document.querySelectorAll('#navLinks a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const nav = document.getElementById('navLinks');
            nav.classList.remove('open');
        });
    });

    const cartBtn = document.getElementById('cartBtn');
    const goToCartBtn = document.getElementById('goToCartBtn');

    function scrollToCart() {
        const cartSection = document.getElementById('carrinho');
        if (cartSection) {
            cartSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    if (cartBtn) {
        cartBtn.addEventListener('click', scrollToCart);
    }

    if (goToCartBtn) {
        goToCartBtn.addEventListener('click', scrollToCart);
    }

    const ctaCatalogo = document.getElementById('ctaCatalogo');
    if (ctaCatalogo) {
        ctaCatalogo.addEventListener('click', () => {
            const categoriasSection = document.getElementById('categorias');
            if (categoriasSection) {
                categoriasSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    const menuToggle = document.getElementById('menuToggle');
    const navLinksContainer = document.getElementById('navLinks');

    if (menuToggle && navLinksContainer) {
        menuToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('open');
        });

        document.addEventListener('click', (event) => {
            const insideNav = event.target.closest('.header-inner');
            if (!insideNav) {
                navLinksContainer.classList.remove('open');
            }
        });
    }
}


function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        const cards = document.querySelectorAll('.product-card');
        let firstVisible = null;

        cards.forEach(card => {
            const name = card.dataset.productName || "";
            const match = query.length === 0 || name.includes(query);
            card.style.display = match ? "flex" : "none";
            if (match && !firstVisible) firstVisible = card;
        });

        if (firstVisible && query.length > 0) {
            firstVisible.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
}

function setupWhatsAppShortcuts() {
    const heroBtn = document.getElementById('ctaWhatsAppHero');
    const contactBtn = document.getElementById('contactWhatsApp');

    function openWhatsAppShort(message) {
        const base = "https://wa.me/556784213698";
        const text = encodeURIComponent(message);
        window.open(`${base}?text=${text}`, "_blank");
    }

    if (heroBtn) {
        heroBtn.addEventListener('click', () => {
            openWhatsAppShort("Olá, gostaria de falar com um especialista da Armory Elite sobre armas, munições ou equipamentos táticos.");
        });
    }

    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            openWhatsAppShort("Olá, estou entrando em contato a partir do site da Armory Elite.");
        });
    }
}

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('contatoNome').value.trim();
        const email = document.getElementById('contatoEmail').value.trim();
        const telefone = document.getElementById('contatoTelefone').value.trim();
        const mensagem = document.getElementById('contatoMensagem').value.trim();

        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha pelo menos Nome, E-mail e Mensagem.");
            return;
        }

        let texto = "Olá, estou entrando em contato pelo site da Armory Elite.\n\n";
        texto += `Nome: ${nome}\n`;
        texto += `E-mail: ${email}\n`;
        texto += `Telefone/WhatsApp: ${telefone || "não informado"}\n\n`;
        texto += "Mensagem:\n";
        texto += mensagem;

        const numeroWhatsApp = "556784213698";
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");

        contactForm.reset();
    });
}

function setupLoginPlaceholder() {
    const loginBtn = document.getElementById('loginBtn');
    loginBtn.addEventListener('click', () => {
        alert(".");
    });
}

function setupCheckout() {
    const finalizarBtn = document.getElementById('finalizarWhatsApp');
    finalizarBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert("Seu carrinho está vazio. Adicione itens antes de finalizar o pedido.");
            return;
        }

        const nome = document.getElementById('clienteNome').value.trim();
        const cpf = document.getElementById('clienteCPF').value.trim();
        const email = document.getElementById('clienteEmail').value.trim();
        const telefone = document.getElementById('clienteTelefone').value.trim();
        const cidadeUF = document.getElementById('clienteCidadeUF').value.trim();
        const cr = document.getElementById('clienteCR').value.trim();

        if (!nome || !cpf || !email || !telefone || !cidadeUF) {
            alert("Por favor, preencha todos os campos obrigatórios antes de finalizar o pedido.");
            return;
        }

        let message = "Olá, gostaria de registrar um pedido através do site da Armory Elite.%0A%0A";
        message += "*Dados do cliente:*%0A";
        message += `Nome: ${nome}%0A`;
        message += `CPF: ${cpf}%0A`;
        message += `E-mail: ${email}%0A`;
        message += `Telefone/WhatsApp: ${telefone}%0A`;
        message += `Cidade/UF: ${cidadeUF}%0A`;
        message += `CR (se aplicável): ${cr || "informar/confirmar durante o atendimento"}%0A%0A`;

        message += "*Itens selecionados:*%0A";

        let total = 0;
        cart.forEach(item => {
            const subtotal = item.price * item.quantity;
            total += subtotal;
            message += `• ${item.name} (${item.category}) | Qtde: ${item.quantity} | Preço unitário: ${formatCurrency(item.price)}%0A`;
        });

        message += `%0A*Total aproximado:* ${formatCurrency(total)}%0A%0A`;
        message += "Observação: Pedido sujeito à apresentação da documentação exigida por lei, análise da equipe e disponibilidade de estoque.%0A";

        const url = `https://wa.me/556784213698?text=${message}`;
        window.open(url, "_blank");
    });
}

function setupScrollReveal() {
    const elements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        elements.forEach(el => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    elements.forEach(el => observer.observe(el));
}

function setCurrentYear() {
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
    generateProducts();
    setupProductEvents();
    renderCart();

    setupHeaderNavigation();
    setupSearch();
    setupWhatsAppShortcuts();
    setupContactForm();
    setupLoginPlaceholder();
    setupCheckout();
    setupScrollReveal();
    setCurrentYear();
});
