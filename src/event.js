let count = 0;



const addOne = function() { 
    count += 1;   
    renderAgain();    
}

const subOne = () => {
    count -= 1;
    renderAgain();    
}

const resetCount = () => {  
    count = 0;
    renderAgain();
}

const renderAgain = () => {
    const template = (
        <div>
            <h1> Count: {count} </h1>
            <button className="button" id="add" onClick={addOne}>+1</button>        
            <button className="button" id="sub" onClick={subOne}>-1</button> 
            <button className="button" id="reset" onClick={resetCount}>Reset</button>
            
        </div>
    );    
    ReactDOM.render(template, document.getElementById('root'));    
}

renderAgain();


