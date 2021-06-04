class TimeFactory {
    constructor() {
        this.hour = 0;
        this.min = 0;
    }
    // update time to class methods 
    updateTime() {
        console.log("updateTime()")
        var date = new Date;
        this.min = date.getMinutes();
        this.hour = date.getHours();
        if (this.hour > 12) {
            this.hour = (this.hour % 12);
        }
        console.log("hour:" + this.hour + ", min:" + this.min);
    }
    // Getter
    get timeInWord() {
        console.log("timeInWord()")        
        this.updateTime()
        return this.calcTimeInWord();

    }
    // Method
    calcTimeInWord() {
        console.log("calcTimeInWord()")
        var translator = new T2W("EN_US");

        let time = "Error!";
        
        if (this.min == 0){
            if (this.hour == 0){
                time = "midnight";
            } else{
                time = `${translator.toWords(this.hour)} o' clock`;
            }
        }
        else if (this.min == 1) {
            time = `one minute past ${translator.toWords(this.hour)}`;
        }
        else if (this.min == 59) {
            time = `one minute to ${translator.toWords(this.hour)}`;
        }
        else if (this.min == 15) {
            time = `quarter past ${translator.toWords(this.hour)}`;
        }
        else if (this.min == 30) {
            time = `half past ${translator.toWords(this.hour)}`;
        }
        else if (this.min == 45) {
            time = `quarter to ${translator.toWords(this.hour)}`;
        }
        else if (this.min <= 30) {
            time = `${translator.toWords(this.min)} minutes past ${translator.toWords(this.hour)}`;
        }
        else if (this.min > 30) {
            time = `${translator.toWords(60 - this.min)} minutes to ${translator.toWords(this.hour + 1)}`;
        }
        time = time.replace("zero", "midnight")
        return time;
    }
}