import React from 'react';
import ReactDOM from 'react-dom';
import CalculadoraService from './calculadora.service';



describe('Teste do CalculadoraService', () => { 
  const [calcular, concatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] = CalculadoraService();

  it('deve garatir que 1+ 4 = 5.', () => {
     let soma = calcular(1, 4, SOMA);
     expect(soma).toEqual(5);
  });

  it('deve garatir que 1 - 4 = -3', () => {
    let subtracao = calcular(1, 4, SUBTRACAO);
    expect(subtracao).toEqual(-3);
  });

  it('deve garatir que 1 / 4 = 0.25', () => {
     let divisao = calcular(1, 4, DIVISAO);
     expect(divisao).toEqual(0.25);
  });

  it('deve garatir que 1 * 4 = 4', ()=> {
    let vezes = calcular(1, 4, MULTIPLICACAO);
    expect(vezes).toEqual(4);
  });
  it('deve retornar operacao invalida', ()=>{
      let operacaoInvalida = calcular(3, 4, '%');
      expect(operacaoInvalida).toEqual(0);
      
  });
});