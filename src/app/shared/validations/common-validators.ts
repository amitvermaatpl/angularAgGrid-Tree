import { isString } from "util";

export class CustomValidators {
    static emptyspace(str){
        console.log(' control.value.trim(): ', str.value.trim());
        return (isString(str.value) && str.value.trim() == "") ? {"required": true} : null
    }
}