

// PRICE SLIDER

const priceSlider = document.getElementById('price');
const priceOutput = document.getElementById('price-output');

function formatPrice(value) {
  return '₦' + Number(value).toLocaleString();
}

// Set initial value on page load
priceOutput.textContent = formatPrice(priceSlider.value);

// Update as the user drags
priceSlider.addEventListener('input', () => {
  priceOutput.textContent = formatPrice(priceSlider.value);
});
// ENDS HERE



// HIDDEN LIST AFTER STATE SELECTION
const lagosLGAs = [
  "Ikeja", "Lekki (Eti-Osa)", "Yaba", "Surulere", "Victoria Island",
  "Ikoyi", "Ajah", "Lagos Island", "Apapa", "Ikorodu",
  "Alimosho", "Badagry", "Epe", "Oshodi-Isolo", "Agege"
];

const abujaLGAs = [
  "Maitama", "Asokoro", "Wuse", "Garki", "Gwarinpa",
  "Jabi", "Utako", "Kubwa", "Lugbe", "Karu",
  "Life Camp", "Katampe", "Gwagwalada", "Nyanya"
];

const citySelect = document.getElementById('city');
const lgaGroup = document.getElementById('lga-group');
const lgaSelect = document.getElementById('lga');

citySelect.addEventListener('change', () => {
  const selectedCity = citySelect.value;
  let areas = [];

  if (selectedCity === 'lagos') {
    areas = lagosLGAs;
  } else if (selectedCity === 'abuja') {
    areas = abujaLGAs;
  }

  // Reset the LGA dropdown
  lgaSelect.innerHTML = '<option value="">All areas</option>';

  if (areas.length > 0) {
    areas.forEach(area => {
      const option = document.createElement('option');
      option.value = area.toLowerCase().replace(/\s+/g, '-');
      option.textContent = area;
      lgaSelect.appendChild(option);
    });
    lgaGroup.style.display = 'block';
  } else {
    lgaGroup.style.display = 'none';
  }
});

// ENDS HERE


// TOTOP
const totop = document.getElementById('totop');
    window.addEventListener('scroll',function(){
        if (window.pageYOffset > 100){
            totop.classList.add('active');
        }else{
            totop.classList.remove('active');
        }
    })

    totop.addEventListener('click', function(){
        window.scrollTo(0,0);
    })
    // ENDS HERE