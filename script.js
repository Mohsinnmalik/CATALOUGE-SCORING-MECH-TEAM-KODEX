const watchCatalog = 
    
    [
        { title: 'Elegant Rose Gold Women\'s Analog Watch', brand: 'Titan', image: 'https://rukminim1.flixcart.com/image/612/612/l13whow0/watch/h/c/c/-original-imagcqzchcngfd7a.jpeg?q=70', price: '₹3,754', offer: '20% off', gender: 'Women', type: 'Analog' },
        { title: 'Classic Dual Functionality Watch Combo', brand: 'Piaoma', image: 'https://rukminim1.flixcart.com/image/612/612/l08gsy80/watch/z/i/3/1-pwrm-king-piaoma-men-original-imagc2k8ch8vkstx.jpeg?q=70', price: '₹270', offer: '86% off', gender: 'Unisex', type: 'none' },
        { title: 'Sophisticated Black Dial Men\'s Analog Watch', brand: 'SONATA', image: 'https://rukminim1.flixcart.com/image/612/612/l02r1jk0/watch/v/y/f/-original-imaf8qx8rmzayqrs.jpeg?q=70', price: '₹524', offer: '25% off', gender: 'Men', type: 'Analog' },
        { title: 'Stylish Unisex Analog Day & Date Watch', brand: 'LOIS CARON', image: 'https://rukminim1.flixcart.com/image/612/612/k7z3afk0/watch/t/c/x/lcs-8188-lois-caron-original-imafq3k9ztzdkyhe.jpeg?q=70', price: '₹319', offer: '82% off', gender: 'Unisex', type: 'Analog' },
        { title: 'Trendy Designer Combo Set for All Occasions', brand: 'Rizzly', image: 'https://rukminim1.flixcart.com/image/612/612/k48rwcw0/watch/d/z/y/gents-exclusive-3-designer-combo-rizzly-original-imaf5pu2gyaznhmc.jpeg?q=70', price: '₹343', offer: '61% off', gender: 'Unisex', type: 'none' },
        { title: 'Sleek Mesh Strap Blue Men\'s Watch', brand: 'WHITE STONE', image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/watch/b/j/i/2-mesh-strap-all-blue-men-watch-free-premium-king-stone-bracelet-original-imagggbz5cvavzhk.jpeg?q=70', price: '₹200', offer: '59% off', gender: 'Men', type: 'none' },
        { title: 'Premium Titanium Analog Men\'s Watch', brand: 'Titan', image: 'https://rukminim1.flixcart.com/image/612/612/kg2l47k0-0/watch/z/t/5/1805nm02-titan-original-imafwe7aupegsngp.jpeg?q=70', price: '₹5,476', offer: '15% off', gender: 'Men', type: 'Analog' },
        { title: 'Stylish LED Shockproof Digital Watch', brand: 'hala', image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/watch/k/l/x/2-brand-a-digital-watch-with-square-led-shockproof-multi-original-imagha9hmrbvn4kg.jpeg?q=70', price: '₹258', offer: '74% off', gender: 'Unisex', type: 'Digital' },
        { title: 'Minimalist Fastrack Analog Men\'s Watch', brand: 'Fastrack', image: 'https://rukminim1.flixcart.com/image/612/612/ksw4ccw0/watch/6/b/c/38024pp25-fastrack-men-original-imag6cu9xkhbgz4y.jpeg?q=70', price: '₹680', offer: '20% off', gender: 'Men', type: 'Analog' },
        { title: 'Chic Stainless Steel Women\'s Analog Watch', brand: 'VAN HEUSEN', image: 'https://rukminim1.flixcart.com/image/612/612/kg8avm80-0/watch/2/f/c/vh000008c-van-heusen-original-imafwgaaukt5qyc8.jpeg?q=70', price: '₹1,350', offer: '54% off', gender: 'Women', type: 'Analog' },
        { title: 'Luxurious Gold-Plated Unisex Analog Watch', brand: 'HYMT', image: 'https://rukminim1.flixcart.com/image/612/612/ku1k4280/watch/q/3/j/1-hmty-7008-hymt-men-original-imag79f5qgbyn4rn.jpeg?q=70', price: '₹470', offer: '84% off', gender: 'Unisex', type: 'none' },
        { title: 'Elegant Gold-Plated Day and Date Analog Watch', brand: 'CASADO', image: 'https://rukminim1.flixcart.com/image/612/612/k1tm1e80/watch/s/k/d/csd-276-gld-casado-original-imafhrdbtjyzjyj2.jpeg?q=70', price: '₹283', offer: '90% off', gender: 'Unisex', type: 'none' },
        { title: 'Matte Grey Dial Analog Unisex Watch', brand: 'ANALOGUE', image: 'https://rukminim1.flixcart.com/image/612/612/ku1k4280/watch/0/u/d/1-anlg-428-grey-brown-analogue-men-original-imag79fpyp5esbhm.jpeg?q=70', price: '₹209', offer: '86% off', gender: 'Unisex', type: 'none' },
        { title: 'Trendy Waterproof Gym Fitness Watch', brand: 'hala', image: 'https://rukminim1.flixcart.com/image/612/612/kxxl9jk0/watch/9/8/x/1-hl-2022-new-trending-full-black-round-waterproof-gym-fitness-original-imaga9u8te7hghvz.jpeg?q=70', price: '₹266', offer: '82% off', gender: 'Unisex', type: 'none' },
        { title: 'Sporty Digital Fastrack Men\'s Watch', brand: 'Fastrack', image: 'https://rukminim1.flixcart.com/image/612/612/k4rcmfk0pkrrdj/watch-refurbished/7/c/g/c-38045pp03-fastrack-original-imaf8qx7vzuxrxr8.jpeg?q=70', price: '₹1,832', offer: '20% off', gender: 'Men', type: 'Digital' },
        { title: 'Unique Designed Waterproof Black Digital Watch', brand: 'HINISH', image: 'https://rukminim1.flixcart.com/image/612/612/l1l1rww0/watch/5/w/u/1-black-dial-digital-watch-for-boys-black-sports-watch-men-original-imagd4yzszbgba39.jpeg?q=70', price: '₹289', offer: '67% off', gender: 'Unisex', type: 'none' },
        { title: 'Stylish Silver Analog Day and Date Watch', brand: 'HMTr', image: 'https://rukminim1.flixcart.com/image/612/612/krjjde80/watch/c/o/e/7088-silver-hmtr-original-imag5b9qe7xhc4jz.jpeg?q=70', price: '₹248', offer: '84% off', gender: 'Unisex', type: 'Analog' },
        { title: 'Trendy Black and White Square Dial Watch Combo', brand: 'hala', image: 'https://rukminim1.flixcart.com/image/612/612/l3j2cnk0/watch/0/g/t/2-new-combo-of-black-and-white-square-dial-with-silicone-strap-original-imagemq4bdgd4heg.jpeg?q=70', price: '₹266', offer: '82% off', gender: 'Unisex', type: 'none' },
        { title: 'Stylish Blue-Ray Digital Men\'s Watch', brand: 'Espoir', image: 'https://rukminim1.flixcart.com/image/612/612/kcxpbww0/watch/e/w/j/checkblueray0507-espoir-original-imafty4ujpfwj3dv.jpeg?q=70', price: '₹261', offer: '85% off', gender: 'Unisex', type: 'none' },
        { title: 'Modern Bandhan Men & Women Analog Watch', brand: 'Titan', image: 'https://rukminim1.flixcart.com/image/612/612/l1b1oy80/watch/0/d/4/-original-imagcwacarf6fnfa.jpeg?q=70', price: '₹3,996', offer: '20% off', gender: 'Men', type: 'Analog' },
    { title: 'Trendy Black Dial Women\'s Analog Watch', brand: 'SONATA', image: 'https://rukminim1.flixcart.com/image/612/612/l13whow0/watch/w/k/y/-original-imagcqzcb4shdwur.jpeg?q=70', price: '₹1,299', offer: '54% off', gender: 'Women', type: 'Analog' },
    { title: 'Elegant Silver Dial Women\'s Analog Watch', brand: 'Titan', image: 'https://rukminim1.flixcart.com/image/612/612/l13whow0/watch/6/b/r/-original-imagcqw5hc4gj8bg.jpeg?q=70', price: '₹1,574', offer: '10% off', gender: 'Women', type: 'Analog' },
    { title: 'Classic Analog Men\'s Watch', brand: 'Wildcraft', image: 'https://rukminim1.flixcart.com/image/612/612/ku79vgw0/watch/h/j/n/1-wc000001a-wildcraft-men-original-imag7dud2hptvzzk.jpeg?q=70', price: '₹1,099', offer: '76% off', gender: 'Men', type: 'Analog' },
    { title: 'Tees Analog Men & Women Watch', brand: 'Fastrack', image: 'https://rukminim1.flixcart.com/image/612/612/ju04akw0/watch/z/y/b/ng38022pp07cj-fastrack-original-imaff8fd3vyfr9ag.jpeg?q=70', price: '₹713', offer: '15% off', gender: 'Women', type: 'Analog' },
    { title: 'Girls Steel Belt Analog Watch', brand: 'VIKINGS', image: 'https://rukminim1.flixcart.com/image/612/612/kwfaj680/watch/y/a/1/1-girls-v-wht-chn-vikings-girls-original-imag93zjjbswqnen.jpeg?q=70', price: '₹283', offer: '50% off', gender: 'Unisex', type: 'Analog' },
    { title: 'Elegant Women\'s Analog Watch', brand: 'SONATA', image: 'https://rukminim1.flixcart.com/image/612/612/k0wqwsw0/watch/z/g/h/nj8976sm01w-sonata-original-imafkh3gsmuzghef.jpeg?q=70', price: '₹616', offer: '89% off', gender: 'Women', type: 'Analog' },
    { title: 'Trendy Women\'s Analog Watch', brand: 'TIMEX', image: 'https://rukminim1.flixcart.com/image/612/612/kzx1a4w0/watch/l/p/o/-original-imagbszb3afn9rvt.jpeg?q=70', price: '₹1,812', offer: '70% off', gender: 'Women', type: 'Analog' },
    { title: 'High Quality Day & Date Analog Watch', brand: 'Espoir', image: 'https://rukminim1.flixcart.com/image/612/612/jxapua80/watch/y/r/h/lcs-1456-espoir-original-imafhp7xjtxjnzgf.jpeg?q=70', price: '₹273', offer: '50% off', gender: 'Unisex', type: 'Analog' },
    { title: 'Fancy Diamond Fashion Watch', brand: 'DKERAOD', image: 'https://rukminim1.flixcart.com/image/612/612/l47cu4w0/watch/k/n/u/1-original-fancy-present-all-diamond-black-dkeraod-girls-original-imagf5mc7engg67k.jpeg?q=70', price: '₹299', offer: '71% off', gender: 'Unisex', type: 'none' },
    { title: 'Hampton Men Analog Watch', brand: 'A/X ARMANI EXCHANGE', image: 'https://rukminim1.flixcart.com/image/612/612/ksnjp8w0/watch/e/n/j/1-ax2155-armani-exchange-men-original-imag669nkysfsuhh.jpeg?q=70', price: '₹6,997', offer: '85% off', gender: 'Men', type: 'Analog' },
    { title: 'Classic Analog Men\'s Watch', brand: 'Mast & Harbour', image: 'https://rukminim1.flixcart.com/image/612/612/jvgzl3k0/watch/7/b/k/2229685-mast-harbour-original-imafgdhzyczzkqbg.jpeg?q=70', price: '₹1,129', offer: '15% off', gender: 'Men', type: 'Analog' },
    { title: 'Brown Boys Series Analog Watch', brand: 'ANALOGUE', image: 'https://rukminim1.flixcart.com/image/612/612/kl175ow0/watch/k/w/a/anlg-428-brown-brwn-analogue-original-imagy8tnbzftnw3a.jpeg?q=70', price: '₹214', offer: '10% off', gender: 'Unisex', type: 'Analog' },
    {"title": "Elegant Rose Gold Analog Watch for Women", "brand": "Fastrack", "image": "https://rukminim1.flixcart.com/image/612/612/kh3qkcw0-0/watch/j/e/p/6222sm02-fastrack-original-imafx6pmzfggagrf.jpeg?q=70", "price": "₹1,436", "offer": "50% off", "gender": "Women", "type": "Analog"},
{"title": "Classy Black Chronograph Watch for Men", "brand": "TIMEX", "image": "https://rukminim1.flixcart.com/image/612/612/kf2v3ww0-0/watch/h/2/t/tw0tg7800-timex-original-imafvmmd36qsrskr.jpeg?q=70", "price": "₹749", "offer": "82% off", "gender": "Men", "type": "Analog"},
{"title": "Sophisticated Trending Day & Date Functioning Analog Watch", "brand": "LOIS CARON", "image": "https://rukminim1.flixcart.com/image/612/612/kyag87k0/watch/9/g/i/1-lcs-8190-lois-caron-men-original-imagajz5rtezmbeg.jpeg?q=70", "price": "₹319", "offer": "19% off", "gender": "Unisex", "type": "Analog"},
{"title": "Exquisite Floral Raga Analog Watch for Women", "brand": "Titan", "image": "https://rukminim1.flixcart.com/image/612/612/k4rcmfk0pkrrdj/watch-refurbished/j/u/7/c-nh9710sm01e-titan-original-imafnnnmfhc8zrz6.jpeg?q=70", "price": "₹6,599", "offer": "74% off", "gender": "Women", "type": "Analog"},
{"title": "Vintage Navy Blue Analog Watch for Women", "brand": "Fastrack", "image": "https://rukminim1.flixcart.com/image/612/612/kffq2kw0/watch/m/w/g/6222nm01-fastrack-original-imafvw75nrpjdj2d.jpeg?q=70", "price": "₹2,076", "offer": "20% off", "gender": "Women", "type": "Analog"},
{"title": "Artisanal Multicolor Belt Combo Watch Set", "brand": "Shivark", "image": "https://rukminim1.flixcart.com/image/612/612/l4oi4cw0/watch/f/r/0/new-best-artist-designer-multicolor-belt-combo-watch-for-girls-original-imagfj5esz3mhfxw.jpeg?q=70", "price": "₹290", "offer": "70% off", "gender": "Unisex", "type": "none"},
{"title": "Sapphire Blue Wayfarer Analog Watch with Free Sunglasses", "brand": "ANALOGUE", "image": "https://rukminim1.flixcart.com/image/612/612/kwv0djk0/watch/7/8/r/1-anlg-428-blue-blue-21-wayfarer-analogue-men-original-imag9g88dhdzpsbv.jpeg?q=70", "price": "₹256", "offer": "87% off", "gender": "Unisex", "type": "none"},
{"title": "Refurbished Gold Tone Analog Watch for Men", "brand": "Titan", "image": "https://rukminim1.flixcart.com/image/612/612/k4rcmfk0pkrrdj/watch-refurbished/x/h/d/c-1773yl03-titan-original-imafdcjhybzh5dmm.jpeg?q=70", "price": "₹1,489", "offer": "35% off", "gender": "Men", "type": "Analog"},
{"title": "Chic Magnetic Strap Girls Women Chain Watch", "brand": "RUSTET", "image": "https://rukminim1.flixcart.com/image/612/612/kx3l0nk0/watch/m/y/6/3-magnet-belt-girls-women-all-magnetic-chain-rustet-girls-original-imag9mvkz2cjju7e.jpeg?q=70", "price": "₹285", "offer": "78% off", "gender": "Women", "type": "none"}
  
          ];

function displayCatalog() {
    const catalogElement = document.getElementById('catalog');

    watchCatalog.forEach((watch, index) => {
        const watchCard = document.createElement('div');
        watchCard.classList.add('watch-card');
        watchCard.innerHTML = `
            <img src="${watch.image}" alt="${watch.title}" class="watch-image">
            <h3>${watch.title}</h3>
            <p><strong>Brand:</strong> ${watch.brand}</p>
            <p><strong>Price:</strong> ${watch.price}</p>
            <p><strong>Offer:</strong> ${watch.offer}</p>
            <p><strong>Gender:</strong> ${watch.gender}</p>
            <p><strong>Type:</strong> ${watch.type}</p>
        `;

        catalogElement.appendChild(watchCard);
    });
}

function initializeWatchSelection() {
    const selectElement = document.getElementById('watchSelect');

    watchCatalog.forEach((watch, index) => {
        const optionElement = document.createElement('option');
        optionElement.value = index;
        optionElement.text = watch.title;
        selectElement.add(optionElement);
    });
}

function compareWatches() {
    const selectElement = document.getElementById('watchSelect');
    const selectedIndices = Array.from(selectElement.selectedOptions).map(option => parseInt(option.value));
    const resultElement = document.getElementById('result');

    if (selectedIndices.length < 2) {
        resultElement.textContent = "Please select at least two watches for comparison.";
        return;
    }

    const scores = selectedIndices.map(index => ({ index, score: Math.floor(Math.random() * 100) + 1 }));

    resultElement.innerHTML = '<h2>Comparison Result:</h2>';
    scores.forEach(({ index, score }) => {
        resultElement.innerHTML += `<p>${watchCatalog[index].title}: ${score}%</p>`;
    });
}

displayCatalog();
initializeWatchSelection();


function compareWatches() {
    const selectElement = document.getElementById('watchSelect');
    const selectedIndices = Array.from(selectElement.selectedOptions).map(option => parseInt(option.value));
    const resultElement = document.getElementById('result');

    if (selectedIndices.length < 2) {
        resultElement.innerHTML = "<p>Please select at least two watches for comparison.</p>";
        return;
    }

    const scores = selectedIndices.map(index => ({ index, score: Math.floor(Math.random() * 100) + 1 }));

    resultElement.innerHTML = '<h2>Comparison Result:</h2>';
    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>Watch</th>
            <th>Comparison Basis</th>
            <th>Score</th>
        </tr>
    `;
    scores.forEach(({ index, score }) => {
        const watchTitle = watchCatalog[index].title;
        const row = table.insertRow();
        row.innerHTML = `<td>${watchTitle}</td><td>Random Basis</td><td>${score}%</td>`;
    });

    resultElement.appendChild(table);
}

function compareWatches() {
    const selectElement = document.getElementById('watchSelect');
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    const selectedWatches = Array.from(selectElement.selectedOptions)
        .map(option => parseInt(option.value))
        .map(index => watchCatalog[index])
        .filter(watch => watch.title.toLowerCase().includes(searchInput));

    const resultElement = document.getElementById('result');

    if (selectedWatches.length < 2) {
        resultElement.innerHTML = "<p>Please select at least two watches for comparison.</p>";
        return;
    }

    const scores = selectedWatches.map(watch => ({ watch, score: Math.floor(Math.random() * 100) + 1 }));

    resultElement.innerHTML = '<h2>Comparison Result:</h2>';
    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>Watch</th>
            <th>Image</th>
            <th>Comparison Basis</th>
            <th>Score</th>
        </tr>
    `;
    scores.forEach(({ watch, score }) => {
        const row = table.insertRow();
        row.innerHTML = `
            <td>${watch.title}</td>
            <td><img src="${watch.image}" alt="${watch.title}" style="max-width: 100px;"></td>
            <td>Compare Mean</td>
            <td>${score}%</td>
        `;
    });

    resultElement.appendChild(table);
}


function compareWatches() {
    const selectElement = document.getElementById('watchSelect');
    const selectedIndices = Array.from(selectElement.selectedOptions).map(option => parseInt(option.value));
    const selectedWatches = selectedIndices.map(index => watchCatalog[index]);
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const resultElement = document.getElementById('result');

    // Filter selected watches based on search input
    const filteredSelectedWatches = selectedWatches.filter(watch => watch.title.toLowerCase().includes(searchInput));

    // Check if there are at least two watches selected for comparison
    if (filteredSelectedWatches.length < 2) {
        resultElement.innerHTML = "<p>Please select at least two watches for comparison.</p>";
        return;
    }

    // Generate random scores for comparison
    const scores = filteredSelectedWatches.map(watch => ({ watch, score: Math.floor(Math.random() * 100) + 1 }));

    // Display comparison result
    resultElement.innerHTML = '<h2>Comparison Result:</h2>';
    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>Watch</th>
            <th>Image</th>
            <th>Comparison Basis</th>
            <th>Score</th>
        </tr>
    `;
    scores.forEach(({ watch, score }) => {
        const row = table.insertRow();
        row.innerHTML = `
            <td>${watch.title}</td>
            <td><img src="${watch.image}" alt="${watch.title}" style="max-width: 100px;"></td>
            <td>Compare Mean</td>
            <td>${score}%</td>
        `;
    });

    resultElement.appendChild(table);
}

function compareWatches() {
    const selectElement = document.getElementById('watchSelect');
    const selectedIndices = Array.from(selectElement.selectedOptions).map(option => parseInt(option.value));
    const selectedWatches = selectedIndices.map(index => watchCatalog[index]);
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const resultElement = document.getElementById('result');

    // Filter selected watches based on search input
    const filteredSelectedWatches = selectedWatches.filter(watch => watch.title.toLowerCase().includes(searchInput));

    // Check if there are at least two watches selected for comparison
    if (filteredSelectedWatches.length < 2) {
        resultElement.innerHTML = "<p>Please select at least two watches for comparison.</p>";
        return;
    }

    // Generate random scores for comparison
    const scores = filteredSelectedWatches.map(watch => ({ watch, score: Math.floor(Math.random() * 100) + 1 }));

    // Display comparison result
    resultElement.innerHTML = '<h2>Comparison Result:</h2>';
    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>Watch</th>
            <th>Image</th>
            <th>Comparison Basis</th>
            <th>Score</th>
        </tr>
    `;
    scores.forEach(({ watch, score }) => {
        const row = table.insertRow();
        row.innerHTML = `
            <td>${watch.title}</td>
            <td><img src="${watch.image}" alt="${watch.title}" style="max-width: 100px;"></td>
            <td>Commpare Mean</td>
            <td>${score}%</td>
        `;
    });

    resultElement.appendChild(table);
}
// Open the modal when the "Terms and Services" link is clicked
document.getElementById("termsBtn").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
});

// Close the modal when the close button or anywhere outside the modal is clicked
var modal = document.getElementById("modal");
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Close the modal when the close button is clicked
document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

  