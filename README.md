# CPF Validator Azure Function

Este projeto utiliza o Azure Functions para validar um CPF (Cadastro de Pessoa Física). Ele provê um Nedpoint em HTTP para receber os números do CPF e retorna se é válido ou não.

## Project Structure

```
cpf-validator-function
├── HttpTrigger
│   ├── __init__.py       # Main
│   └── function.json     # Azure Function Conf
├── local.settings.json    # Configuração Local
├── requirements.txt       # Dependencias
└── README.md              # Documentação
```

## Setup Instructions

1. **Clonar o Repositório**:
   ```
   git clone <repository-url>
   cd cpf-validator-function

   ```

2. **Install dependencies**:
   Você precisa baixar todas as dependencias já listadas com pip antes de rodar o código, then run:
   ```
   pip install -r requirements.txt
   ```

3. **Configure local settings**:
   Verifique o `local.settings.json` com todas as informa~çoes de connection string necessárias.

4. **Run the Azure Function locally**:
   Use o Azure Functions Core Tools para rodar a função:
   ```
   func start
   ```

5. **Test the function**:
   Mande um solicitação de HTTP para testar o código

## Usage

A função aceita um PSOT HTTP com o JSON contendo o número de CPF para ser validado. Você pode utilizar uma ação de POST no POSTMAN para validar o retorno em HTTP.