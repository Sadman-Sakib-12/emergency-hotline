// console.log('ami asy')
function heartIcon() {

    const heartICount = parseInt(document.getElementById("heart-count").innerText)

    document.getElementById("heart-count").innerText = heartICount + 1
}

const callHistory = [];

function buttonHandler(buttonId, titleId, eNumber) {
    document.getElementById(buttonId).addEventListener('click', function () {

        const coinsCount = document.getElementById("coins-count").innerText

        const title = document.getElementById(titleId).innerText
        const emergencyNumber = document.getElementById(eNumber).innerText

        if (coinsCount < 20) {
            alert('❌ You do not have enough coins. You need at least 20 coins to make a call.')
            return
        }
        document.getElementById("coins-count").innerText = coinsCount - 20
        alert(`📞Calling ${title} ${emergencyNumber}...`)

        const history = {
            service: title,
            number: emergencyNumber,
            time: new Date().toLocaleTimeString()
        }
        callHistory.push(history)

        const callHistoryContainer = document.getElementById("call-history-container")
        callHistoryContainer.innerHTML = ""

        for (const history of callHistory) {
            const div = document.createElement('div')
            div.innerHTML = `
            <div class="bg-[#fafafa] rounded-lg p-4 flex justify-center items-center">
                <div>
                <h1 class="font-semibold text-sm">${history.service}</h1>
                <p class="text-[#5c5c5c] text-sm">${history.number}</P>
                </div>
            <p class="text-xs">${history.time}</p>
            </div>
            `
            callHistoryContainer.appendChild(div)
        }
    })
}

buttonHandler("national-emergency", "national-emergency-title", "national-emergency-number")

buttonHandler("police-helpline-button", "police-helpline-title", "police-number")

buttonHandler("fire-service-button", "fire-service-title", "fire-service-number")

buttonHandler("ambulance-service-button", "ambulance-title", "ambulance-number")

buttonHandler("women-and-child-button", "women-and-child-title", "women-and-child-title-number")

buttonHandler("anti-corruption-button", "anti-corruption-title", "anti-corruption-number")

buttonHandler("electricity-button", "electricity-title", "electricity-number")

buttonHandler("brac-button", "brac-title", "brac-number")

buttonHandler("railway-button", "railway-title", "railway-number")

document.getElementById("clear-button").addEventListener('click', function () {
    document.getElementById("call-history-container").innerHTML = ""
    callHistory.length = 0;
})

const navCopy = document.getElementById("copy-count")
let navCopyCount = 0;

document.getElementById("numbers-grid").addEventListener('click', function(event) {

    if (event.target.closest(".copy-button")) {

        const card = event.target.closest(".numbers-card")
        const emergencyNumbers = card.querySelector("p.e-number").innerText
        navigator.clipboard.writeText(emergencyNumbers)
        alert(`The number has been copied : ${emergencyNumber}`)
        navCopyCount++
        navCopy.innerText = navCopyCount
    }

})
