async function batteryPercentage() {
    let battery = await navigator.getBattery();
   return battery;
}
batteryPercentage().then(bt=>{
    console.log(bt.level*100);
})