import React from 'react';


export const reactValidatorOptions = {
    element: (message) => <div className="font-validator-red float-left">{message}</div>,
    validators: {
        password: {  // name the rule
          message: ':attribute debe tener al menos 1 mayúscula, minúscula, número, y caracter, no puede contener espacios.',
          rule: (val, params, validator) => {
            //regex params (1 number)(1 a-z)(1 A-Z)(1 special char)(not contain special chars(space))
            return validator.helpers.testRegex(val,/^((?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[-_@.,;+{}()/*&%$#!¡¿?'|áéíóúÁÉÍÓÚ])(?!.*?[ ])).+$/i)
          },
          required: true  // optional
        }
      },
    messages: {
        required: ':attribute es un campo obligatorio.',
        email: 'el formato de :attribute es incorrecto.',
        min: ':attribute debe tener al menos :min caracteres.',
        max: ':attribute debe tener :max caracteres como máximo.',
        numeric: ':attribute debe ser un número.'
    }
}

