function convertToSauerteig() {
    let mehl = document.getElementById('mehl').valueAsNumber;
    let wasser = document.getElementById('wasser').valueAsNumber;
    let mengeMehlSauerteig = mehl * 0.75;
    let mengeSauerteig = mehl * 0.375;
    let mengeWasserSauerteig = wasser - (mengeSauerteig / 2);
    // console.log(mehl);
    // console.log(wasser);
    // console.log(mengeMehlSauerteig);
    // console.log(mengeSauerteig);
    // console.log(mengeWasserSauerteig);
    document.getElementById('mengeMehlSauerteig').value = mehl * 0.75;
    document.getElementById('mengeWasserSauerteig').value = wasser - (mengeSauerteig / 2);
    document.getElementById('mengeSauerteig').value = mehl * 0.375;
}