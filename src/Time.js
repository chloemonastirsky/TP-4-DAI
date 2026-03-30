import dayjs from "dayjs";

class Time {
    getTime() {
        return dayjs().format('HH:mm:ss');
    }

    getDate() {
        return dayjs().format('DD/MM/YYYY');
    }

    getFullDate() {
        return dayjs().format('DD/MM/YYYY HH:mm:ss');
    }
}

export default Time;