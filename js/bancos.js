let bancos = [
    "Banco De Bogotá",
    "Banco Popular",
    "Itaú-Corpbanca",
    "Bancolombia",
    "Citibank",
    "Banco GNB Sudameris",
    "BBVA Colombia",
    "Itau-Helm Bank",
    "Scotiabank Colpatria",
    "Banco De Occidente",
    "Bancoldex",
    "Banco Caja Social BCSC",
    "Banco Agrario",
    "Banco Mundo Mujer",
    "Banco Davivienda",
    "Banco Av Villas",
    "Banco W",
    "Banco Credifinanciera",
    "Bancamia",
    "Banco Pichincha",
    "Bancoomeva",
    "Banco Falabella",
    "Banco Finandina",
    "Banco Santander De Negocios Colombia",
    "Banco Cooperativo Coopcentral",
    "Mibanco",
    "Banco Serfinansa",
    "Banco J.P. Morgan Colombia",
    "Financiera Juriscoop",
    "Rappipay",
    "Coop Financiera De Antioquia",// Ajuste
    "Cootrafa Cooperativa Financiera",
    "Coofinep Cooperativa Financier",
    "Confiar Cooperativa Financiera",
    "Giros Y Finanzas",
    "Coltefinanciera",
    "Nequi",
    "Daviplata",
    "TPaga"
]

let contenedor = document.getElementById('spaceBancos')
    function comp(item) {
        return `
        <div class="card">
                <div class="bank-card">
                    <h2>${item}</h2>
                </div>
                <div class="account-card">
                    <p>Ahorros #1567</p>
                </div>
                <div class="buttons-card self">
                    <a class="button button-green" href="#">Seleccionar</a>
                    <a class="button button-orange" href="#">Eliminar</a>
                </div>
        </div>
        `
    }


for (let i = 0; i < bancos.length; i++) {
    contenedor.innerHTML += comp(bancos[i])
}