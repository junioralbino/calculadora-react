import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './calculadora.css';
import { Container, Row, Col, Button, FormControl }  from 'react-bootstrap';
import CalculadoraService from './calculadora.service';


function Calculadora() {

  const [calcular, concatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] = CalculadoraService();

  const [txtNumeros, setTxtNumeros ] = useState('0');
  const [numero1, setNumero1 ] = useState('0');
  const [numero2, setNumero2 ] = useState(null);
  const [operacao, setOperacao ] = useState(null);

  function adicionarNumero(numero){
    let resultado;

    if(operacao === null){  
     resultado = concatenarNumero(numero1, numero);
      setNumero1(resultado);
    }else{
     resultado = concatenarNumero(numero2, numero);
      setNumero2(resultado);
    }
    setTxtNumeros(operacao);
  }

  function definirOperacao(op){
    //apenas difina operacao se ela exista
    if(operacao === null){
      setOperacao(op);
      return;
    }


    //se a operacao estive definida com numero 2 selecionado, realiza o calculo
    if(numero2 !== null){
      const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao);
      setOperacao(op);
      setNumero1(resultado.toString());
      setNumero2(null);
      setTxtNumeros(resultado.toString());
    }
  }
  function acaoCalcular(){
    if(numero2 === null){
      return;
    }
    const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao);
    setTxtNumeros(resultado);
  }

  function limpar(){
    setOperacao(null);
    setNumero1('0');
    setNumero2(null);
    setTxtNumeros('0');
  }

  return (
       <>
        <Container style={{backgroundColor: '#007bff', padding: 5 }}>
              <Row>
               <Col xs="3">
                 <Button variant="danger"
                   onClick={limpar}
                 >C</Button>
               </Col>

                <Col xs="9">
                 <FormControl 
                  type="text" 
                  value={txtNumeros}
                  name="textNumeros" 
                  style={{ marginTop: 5, marginLeft: 0, textAlign:'right'}}
                  />
               </Col>
             </Row>

             <Row>
               <Col>
                 <Button  variant="light"
                  onMouseUp={()=>adicionarNumero('7')}
                 >7</Button>
               </Col>
               <Col>
                 <Button  variant="light"
                  onClick={()=>adicionarNumero('8')}
                 >8</Button>
               </Col>
               <Col>
                 <Button  variant="light"
                  onClick={()=>adicionarNumero('9')}
                 >9</Button>
               </Col>
               <Col>
                 <Button  variant="warning"
                   onClick={()=>definirOperacao(DIVISAO)}
                 >/</Button>
               </Col>
             </Row>

             <Row>
               <Col>
                 <Button  variant="light"
                  onClick={()=>adicionarNumero('4')}
                 >4</Button>
               </Col>
               <Col>
                 <Button  variant="light"
                  onClick={()=>adicionarNumero('5')}
                 >5</Button>
               </Col>
               <Col>
                 <Button  variant="light"
                   onClick={()=>adicionarNumero('6')}
                 >6</Button>
               </Col>
               <Col>
                 <Button  variant="warning"
                    onClick={()=>definirOperacao(MULTIPLICACAO)}
                 >*</Button>
               </Col>
             </Row>

             <Row>
               <Col>
                 <Button  variant="light"
                   onClick={()=>adicionarNumero('1')}
                 >1</Button>
               </Col>
               <Col>
                 <Button  variant="light"
                  onClick={()=>adicionarNumero('2')}
                 >2</Button>
               </Col>
               <Col>
                 <Button  variant="light"
                  onClick={()=>adicionarNumero('3')}
                 >3</Button>
               </Col>
               <Col>
                 <Button  variant="warning"
                    onClick={()=>definirOperacao(SUBTRACAO)}
                 >-</Button>
               </Col>
             </Row>

             <Row>
               <Col>
                 <Button  variant="light"
                  onClick={()=>adicionarNumero('0')}
                 >0</Button>
               </Col>
               <Col>
                 <Button  variant="light"
                   onClick={()=>adicionarNumero('.')}
                 >.</Button>
               </Col>
               <Col>
                 <Button  variant="success"
                  onClick={acaoCalcular}
                 >=</Button>
               </Col>
               <Col>
                 <Button  variant="warning"
                    onClick={()=>definirOperacao(SOMA)}
                 >+</Button>
               </Col>
             </Row>

        </Container>

        </>
  );
}

export default Calculadora;
