import countries from "i18n-iso-countries";
import english from "i18n-iso-countries/langs/en.json";

export function getCountry(code){
    countries.registerLocale(english);
    return countries.getName(code, "en")

}



