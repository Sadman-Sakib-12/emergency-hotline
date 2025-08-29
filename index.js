
//Love-count

function heart() {

    const heartICount = parseInt(document.getElementById("count").innerText)

    document.getElementById("count").innerText = heartICount + 1
}

// callhistory

const callHistory = [];

function button(buttonId, titleId, dNumber) {
    document.getElementById(buttonId).addEventListener('click', function () {

        const coinss = document.getElementById("coins").innerText

        const title = document.getElementById(titleId).innerText
        const emergencyNumber = document.getElementById(dNumber).innerText

        if (coinss < 20) {
            alert('❌ You do not have enough coins. You need at least 20 coins to make a call.')
            return
        }
        document.getElementById("coins").innerText = coinss - 20
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
            <div class="bg-[#fafafa] rounded-lg flex justify-between items-center p-2  gap-5">
                <div class="">
                <h1 class="font-semibold text-xs">${history.service}</h1>
                <p class="text-[#5c5c5c] text-sm">${history.number}</P>
                </div>
            <p class="text-xs">${history.time}</p>
            </div>
            `
            callHistoryContainer.appendChild(div)
        }
    })
}

 button("national-emergency", "national-emergency-title", "national-emergency-number")

 button("police-helpline-button", "police-helpline-title", "police-number")

 button("fire-service-button", "fire-service-title", "fire-service-number")

 button("ambulance-service-button", "ambulance-title", "ambulance-number")

 button("women-and-child-button", "women-and-child-title", "women-and-child-title-number")

 button("anti-corruption-button", "anti-corruption-title", "anti-corruption-number")

 button("electricity-button", "electricity-title", "electricity-number")

 button("brac-button", "brac-title", "brac-number")

 button("railway-button", "railway-title", "railway-number")

document.getElementById("clear-button").addEventListener('click', function () {
    document.getElementById("call-history-container").innerHTML = ""
    callHistory.length = 0;
})

const navCopy = document.getElementById("counts")
let navCopyCount = 0;

document.getElementById("number").addEventListener('click', function(event) {

    if (event.target.closest(".copy")) {

        const card = event.target.closest(".numbers-card")
        const emergencyNumbers = card.querySelector("p.s-number").innerText
        navigator.clipboard.writeText(emergencyNumbers)
        alert(`The number has been copied : ${emergencyNumbers}`)
        navCopyCount++
        navCopy.innerText = navCopyCount
    }

})
