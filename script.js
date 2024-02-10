const watchCatalog = [
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
    { title: 'Rose Gold Elegance Women\'s Analog Watch', brand: 'Fastrack', image: 'https://rukminim1.flixcart.com/image/612/612/kirr24w0-0/watch/u/0/q/6215nm01-fastrack-original-imafyhp99hmgvzze.jpeg?q=70', price: '₹2,039', offer: '20% off', gender: 'Women', type: 'Analog' },
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
    { title: 'Brown Boys Series Analog Watch', brand: 'ANALOGUE', image: 'https://rukminim1.flixcart.com/image/612/612/kl175ow0/watch/k/w/a/anlg-428-brown-brwn-analogue-original-imagy8tnbzftnw3a.jpeg?q=70', price: '₹214', offer: '10% off', gender: 'Unisex', type: 'Analog' }
];
  
  function displayCatalog() {
    const catalogElement = document.querySelector('.catalog-wrapper');
  
    watchCatalog.forEach((watch, index) => {
      const watchCard = document.createElement('div');
      watchCard.classList.add('watch-card');
      watchCard.style.backgroundColor = getRandomColor(); // Add random color background
  
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
    // ... comparison logic (similar to previous version)
  }
  
  function showTerms() {
    // Implement logic to show Terms & Conditions (e.g., modal, new page)
  }
  
  function showPolicies() {
    // Implement logic to show Privacy Policy (e.g., modal, new page)
  }
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  displayCatalog();
  initializeWatchSelection();
  
  // Event listeners for Terms/Policies buttons
  document.querySelector('.terms-policies button:first-child').addEventListener('click', showTerms);
  document.querySelector('.terms-policies button:last-child').addEventListener('click', showPolicies);
  