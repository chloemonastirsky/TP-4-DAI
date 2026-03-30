const horaActual = new Date();

function Time() {
    this.getTime = function() {
        return horaActual.toLocaleTimeString();
    }
}

export default Time;