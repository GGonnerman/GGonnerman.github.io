import { add, multiply, fraction, equal } from 'mathjs';

export class Holder {
    constructor(display="") {
        this.display = display;
        //this.value = fraction("0");
        //this.syncValue();
        this.isSuccessful = true;
    }

    freeze() {
        if(!this.display) { this.display = "0"; }
    }

    getDisplay() {
        return this.display;
    }

    setDisplay(display) {
        if(display.match("[^0-9-/.]")) return;
        while(display.length > 1 && display[0] === "0") {
            display = display.substr(1);
        }
        this.display = display;
        this.syncValue();
    }

    getValue() {
        return this.value;
    }

    syncValue() {
        try {
            this.value = fraction(this.display)
            this.isSuccessful = true;
            console.log("Synced Values Successfully");
        } catch {
            this.isSuccessful = false;
            console.log("Errors Syncing Value");
        }
        return this.value;
    }

    syncDisplay() {
        try {
            if(this.value.d === "1" || this.value.d === 1) {
                this.display = this.value.n;
            } else {
                this.display = this.value.n + "/" + this.value.d;
            }
            if(this.value.s === "-1" || this.value.s === -1) {
                this.display = "-" + this.display;
            }
        } catch {
            console.log("Errors Syncing Display");
        }
    }

    add(factor, other) {
        this.syncValue();
        other.syncValue();
        let result = add(this.value, multiply(factor, other.value));
        if(equal(this.value, result)) return false;
        // TODO: Clean up and add this checking to other options (multiply, i guess swap doesnt exist; probably make it exist)
        console.log(this.value, result);
        this.value = result;
        this.syncDisplay();
        return true;
    }

    multiply(factor) {
        this.syncValue();
        let result = multiply(factor, this.value);
        console.log("YO");
        console.log(this.value, result, factor);
        if(equal(this.value, result)) return false;
        this.value = result;
        this.syncDisplay();
        return true;
    }
}