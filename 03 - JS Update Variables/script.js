// Declarations 

const inputs =  document.querySelectorAll('.controls input');


// Updating CSS Variables 

function changeVariables() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

inputs.forEach(input => input.addEventListener('change', changeVariables));
inputs.forEach(input => input.addEventListener('mousemove', changeVariables));
