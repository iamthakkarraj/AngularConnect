export class AppConstants{

    static TagListLimit:number = 10;

    static NameValidatorRegex = '^[a-zA-Z0-9]*[a-z A-Z]+[a-zA-Z0-9]*$';

    static EmailValidatorRegex = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";

    static IndianPhoneNoValidatorRegex = '^[1-9]\d{9}$';

    static StrongPasswordValidatorRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&amp;\*])(?=.{8,})$';

}