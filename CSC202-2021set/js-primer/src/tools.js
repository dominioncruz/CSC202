var log = (output) => {
    console.log(output)
}
export default log

export var appName = "My app";

export var dummyFunction = () => {
    return "This is a dummy function";
}

export var weatherTag = (string, temperature) => {
    let substring0 = string[0];
    let substring1 = string[1];
    let weatherCondition;
    if (temperature > 26) {
        weatherCondition = "hot day"
    } else {
        weatherCondition = "cool day"
    }
    return `${substring0}${temperature}${substring1}${weatherCondition}`
}

export const genericFunction = () => {
    let languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++'];
    let [firstLang, secondLang, , ...otherLanguages] = languages;
    return `First language is ${firstLang} and the second is ${secondLang}. The rest are ${otherLanguages}`
}

const toTitleCase = (str) => {
    str.toLowerCase();
    return str.substring(0, 0) + str[0].toUpperCase() + str.substring(1);
}

export class Person {
    constructor(firstName, lastName, gender, height) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height;
    }
    getFirstName() {
        return toTitleCase(this.firstName)
    }
};

export class User extends Person {
    constructor(username, password, firstName, lastName, gender, height) {
        super(firstName, lastName, gender, height);
        this.username = username;
        this.password = password;
    }
}

export class CustomMath {
    static sqrt(a) {
        return Math.sqrt(a);
    }
    static pow(a, b) {
        return Math.pow(a, b);
    }
}





