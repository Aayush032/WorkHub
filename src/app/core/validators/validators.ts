import { Validators } from "@angular/forms";
import { NoWhiteSpaceValidator } from "./NoWhiteSpaceValidator";

export class FormValidators {
    static nameValidator = Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
        NoWhiteSpaceValidator.cannotContainSpace
    ]);
    static descriptionValidator = Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
        NoWhiteSpaceValidator.cannotContainSpace
    ]);
    static codeValidator = Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        NoWhiteSpaceValidator.cannotContainSpace
    ]);
}