import countries from "./countriesJson";

export const findContinent = (country: string) => {
    let continent = '';
    for (let i in countries) {
        if (countries[i].value === country) {
            continent = countries[i].continent;
            break;
        }
    }
    return continent;
}