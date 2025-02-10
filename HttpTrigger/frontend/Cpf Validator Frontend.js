import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CPFValidator() {
  // Estado para armazenar o CPF e a resposta da API
  const [cpf, setCpf] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  // Funcao para validar o CPF utilizando o backend
  const validateCPF = async () => {
    setError(null);
    setResponse(null);
    
    try {
      const res = await fetch("https://seu-endpoint-azure.com/api/validate-cpf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cpf }),
      });
      
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.Error || "Erro ao validar CPF");
      }
      
      setResponse(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardContent>
          <h1 className="text-xl font-bold text-center mb-4">Validador de CPF</h1>
          
          {/* Campo de entrada para o CPF */}
          <Input
            type="text"
            placeholder="Digite o CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            className="mb-4"
          />
          
          {/* Botao para validar o CPF */}
          <Button onClick={validateCPF} className="w-full">Validar</Button>
          
          {/* Exibicao da resposta da API */}
          {response && (
            <div className="mt-4 text-green-600 font-semibold">
              {JSON.stringify(response)}
            </div>
          )}
          
          {/* Exibicao de erros caso ocorram */}
          {error && (
            <div className="mt-4 text-red-600 font-semibold">
              {error}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
