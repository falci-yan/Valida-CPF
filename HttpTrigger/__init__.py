import azure.functions as func
from flask import Flask
import json

def main(req):

    def validate_cpf(cpf):
        cpf = ''.join(filter(str.isdigit, cpf))
        if len(cpf) != 11 or cpf == cpf[0] * 11:
            return False

        def calculate_digit(cpf, factor):
            total = sum(int(digit) * factor for digit, factor in zip(cpf[:factor-1], range(factor, 1, -1)))
            remainder = total % 11
            return '0' if remainder < 2 else str(11 - remainder)

        first_digit = calculate_digit(cpf, 10)
        second_digit = calculate_digit(cpf, 11)

        return cpf[-2:] == first_digit + second_digit

    cpf = req.params.get('cpf')
    if not cpf:
        return func.HttpResponse(
            json.dumps({f"Error": "CPF inválido."}),
            status_code=400,
            mimetype="application/json"
        )

    is_valid = validate_cpf(cpf)
    return func.HttpResponse(
        json.dumps({f"CPF é válido!": {is_valid}}),
        status_code=200,
        mimetype="application/json"
    )