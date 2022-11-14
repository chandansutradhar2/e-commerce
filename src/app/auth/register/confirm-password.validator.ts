import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function comparePasswordValidator(
  controls: AbstractControl[]
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return controls[0].value == controls[1].value ? null : { compare: true };
  };
}
