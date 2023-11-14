function Calculator() {
  function dis(e) {
    document.getElementById("result").value += e.target.value;
  }
  function clr(e) {
    let a = e.target.value;
    a = " ";
    document.getElementById("result").value = a;
  }
  function total() {
    let b = document.getElementById("result").value;
    let c = eval(b);
    document.getElementById("result").value = c;
  }
  function del() {
    let d = document.getElementById("result").value;
    let e = d.slice(0, -1);
    document.getElementById("result").value = e;
  }
  return (
    <div className="main">
      <input type="text" id="result" className="result items" />

      <input type="button" value="AC" className="ac item" onClick={clr} />
      <input
        type="button"
        value="Del"
        /* onChange={"result.value = toString(result.value).slice(0, -1)"} */
        onClick={del}
        className="plmi item"
      />
      <input type="button" value="%" className="sym rem item" onClick={dis} />
      <input
        type="button"
        value="/"
        /* onclick={"result.value += '/' "} */
        onClick={dis}
        className="sym div item"
      />
      <input
        type="button"
        value="7"
        /* onClick={(e) => {
          document.getElementById("result").value += e.target.value;
        }} */
        onClick={dis}
        className="sev item"
      />
      <input
        type="button"
        value="8"
        /* onclick={"result.value += '8' "} */
        onClick={dis}
        className="eight item"
      />
      <input
        type="button"
        value="9"
        /* onclick={"result.value += '9' "} */
        onClick={dis}
        className="nine item"
      />
      <input
        type="button"
        value="*"
        /* onclick={"result.value += '*' "} */
        onClick={dis}
        className="sym star item"
      />
      <input
        type="button"
        value="6"
        /* onclick={"result.value += '6' "} */
        onClick={dis}
        className="six item"
      />
      <input
        type="button"
        value="5"
        /* onclick={"result.value += '5' "} */
        onClick={dis}
        className="five item"
      />
      <input
        type="button"
        value="4"
        /* onclick={"result.value += '4' "} */
        onClick={dis}
        className="four item"
      />
      <input
        type="button"
        value="+"
        /* onclick={"result.value += '+'"} */
        onClick={dis}
        className="sym plus item"
      />
      <input
        type="button"
        value="3"
        /*  onclick={"result.value += '3' "} */
        onClick={dis}
        className="three item"
      />
      <input
        type="button"
        value="2"
        /* onclick={"result.value += '2' "} */
        onClick={dis}
        className="two item"
      />
      <input
        type="button"
        value="1"
        /* onClick={"result.value += '1' "} */
        onClick={dis}
        className="one item"
      />
      <input
        type="button"
        value="-"
        /* onclick={"result.value = eval(result.value)"} */
        onClick={dis}
        className="sym min item"
      />
      <input
        type="button"
        value="0"
        /*  onclick={"result.value+= '0' "} */
        onClick={dis}
        className="zero item"
      />
      <input
        type="button"
        value="."
        /*  onclick={"result.value+= '.' "} */
        onClick={dis}
        className="dot item"
      />
      <input
        type="button"
        value="="
        /* onclick={total()} */ className="sym equal item"
        onClick={total}
      />
    </div>
  );
}

export default Calculator;
