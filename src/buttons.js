import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

const endRegex = /[+\-/*]$/g;
const addRegex = /([\*\/]\-)$/g;


const decRegex = /(\d+\.\d*)$/g;
const complexDecimal = /\d+\.\d+([+\-*/]\d+\.)/g;

function Buttons () {
    let [result, setResult] = useState("0");
    let [exp, setExp] = useState("");

    const handleClick = (x) =>{
        result === '0' ? setResult(x) : setResult(result + x);
        exp === "0" ?    setExp(x) : setExp(exp + x);
    }


    const handleMult = (x) =>{
        if(endRegex.test(result)){
            let str = result.replace(endRegex,x);
            setResult(str);
            setExp(str);
        }else{
            setResult(result + x);
            setExp(exp + x);
        }
    }

    const handleDiv = (x) =>{
        if(endRegex.test(result)){
            let str = result.replace(endRegex,x);
            setResult(str);
            setExp(str);
        }else{
            setResult(result + x);
            setExp(exp + x);
        }
    }

    const handleAdd = (x) =>{
        if(addRegex.test(result)){
            let str = result.replace(addRegex,x)
            setResult(str);
            setExp(str);
        }else if(endRegex.test(result)){
            let str = result.replace(endRegex,x);
            setResult(str);
            setExp(str);
        }else{
            setResult(result + x);
            setExp(exp + x);
        }
    }






    const handleDecimal = (x) => {
        if(decRegex.test(result) ){
            setResult(result);
            setExp(exp);
       
        }else if (!(complexDecimal.test(result))){
            setResult(result + x);
            setExp(exp + x);
        }
    }
    
    const equal = () =>{
        if(/[+\-*/.]$/g.test(result)){
            setResult(result);
            setExp(result);
        }else{
            setResult(eval(result));
            setExp(exp + "=" + eval(result));
        }
        
    }

    const clear = () =>{
        setResult("0");
        setExp("");
    }


    return(
     <>  
     
    <div className="container">

        <div className="row">
        
            <input className="btn btn-dark col-12 expression" type="input" value={exp} disabled/>
            <input id="display" className="btn btn-dark col-12 display" type="input" value={result} />
        </div>

        <div className="row">
        <Button id='clear' className="col-6 btn btn-danger btn-outline-dark btn-lg" onClick={()=>clear()} >C</Button>
        <Button id='equals' className="col-6 btn btn-success btn-outline-dark btn-lg" onClick={()=>equal()}>=</Button>
        </div>

        <div className="row">
            <Button id='seven' className="col-3 btn btn-dark" onClick={()=>handleClick('7')}>7</Button>
            <Button id='eight' className="col-3 btn btn-dark" onClick={()=>handleClick('8')}>8</Button>
            <Button id='nine'  className="col-3 btn btn-dark" onClick={()=>handleClick('9')}>9</Button>
            <Button id='multiply' className="col-3 btn btn-light btn-outline-dark btn-lg" onClick={()=>handleMult('*')}>x</Button>
        </div>

        <div className="row">
            <Button id='four' className="col-3 btn btn-dark" onClick={()=>handleClick('4')}>4</Button>
            <Button id='five' className="col-3 btn btn-dark" onClick={()=>handleClick('5')}>5</Button>
            <Button id='six' className="col-3 btn btn-dark" onClick={()=>handleClick('6')}>6</Button>
            <Button id='divide' className="col-3 btn btn-light btn-outline-dark btn-lg" onClick={()=>handleDiv('/')}>/</Button>
        </div>

        <div className="row">
            <Button id='one' className="col-3 btn btn-dark" onClick={()=>handleClick('1')}>1</Button>
            <Button id='two' className="col-3 btn btn-dark" onClick={()=>handleClick('2')}>2</Button>
            <Button id='three' className="col-3 btn btn-dark" onClick={()=>handleClick('3')}>3</Button>
            <Button id='add' className="col-3 btn btn-light btn-outline-dark btn-lg" onClick={()=>handleAdd("+")}>+</Button>
        </div>

        <div className="row">
            <Button id='zero' className="col-3 btn btn-dark" onClick={()=>handleClick('0')}>0</Button>
            <Button id='decimal' className="col-6 btn btn btn-dark " onClick={()=>handleDecimal('.')}>.</Button>
            <Button id='subtract' className="col-3 btn btn-light btn-outline-dark btn-lg" onClick={()=>handleClick("-")}>-</Button>
        </div>    
        
           
    
    </div>    
    </>
    )
}

export default Buttons;