/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// This is basically made for input box in ui
// Always use first letter capital


import React,{useId} from 'react'


function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectCurrency="usd",
  amountDisable=false,
  currencyDisable=false,
  className = "",
}) {
    const amountInputID=useId()

 

  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex `}>
          <div className="w-1/2">
              <label htmlFor={amountInputID} className="text-black/40 mb-2 inline-block">
                  {label}
                  {/* isko wrap krne se variable se aa jayga data yahi vo data hai jo display ho rha hai*/}

              </label>
              {/* ab jab bhara jayga tb... */}
              <input
                id={amountInputID}
                  
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  value={amount}
                  placeholder="Amount"
                  disabled={amountDisable}
                  // ab agar amount change hogya to kya kroge user ke taraf se? to onchange lga diya.
                  // agar kisi ne ni pass ni kr rakha hai onAmountChange to possible chances hai ki ye crash ho jaaye
                 onChange={(e)=>{ onAmountChange &&
                    onAmountChange(Number(e.target.value))
                 }}
                    // Isme agr ham sirf e.target.value dete to ye string type me leta jiski vajah se crash ho sakta tha to isko number me convert kiya hai
                
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p> 
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={selectCurrency}
                  onChange={(e)=>{ onCurrencyChange &&
                    onCurrencyChange(e.target.value)
      
                }}
                disabled={currencyDisable}
                  
                    // **currency is string number**  
                  
              >
                {/* agar hamko performance laani hai loop ke andar elements ko repeat krne ke liye to hmko key pass krni hi chahiye */}
                  {currencyOptions.map((currency)=>
                  (

                    <option 
                    key={currency}value={currency}>
                    {currency}
                    </option>

                  ))}
                     
              </select>
          </div>
      </div>
  );
}


export default InputBox