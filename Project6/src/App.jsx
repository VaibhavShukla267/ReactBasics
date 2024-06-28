import { useState } from 'react'
import { InputBox } from './Component'
import UseCurrencyInfo from './hooks/useCurrencyInfo'



function App() {
  const [amount,setAmount]=useState()
  const[from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const[convertedAmount,setConvertorAmount]=useState()

  const CurrencyInfo=UseCurrencyInfo(from)
  // using the hook,now which currency is passed so 'from' is passed since we will type input in 'from' and we get output in 'to'



  const options= Object.keys(CurrencyInfo)
  // options jo ham users ko denge vo values to honge ni vo keys honge to ham object se keys nikalenge 'currency info isliye kyuki isi se to ham logo ko api ka data mil rha hai.



//  here we have swapping feature
const swap=()=>{
  setFrom(to)
  setTo(from)
  // isse options swap honge


  setConvertorAmount(amount)
  setAmount(convertedAmount)
  // isse amount swap hoga 
}


// now we have do basic multiplication in which we are converting the currency


const convert=()=>{setConvertorAmount(amount*CurrencyInfo[to])
}

 



  
return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center "
      style={{
          backgroundImage: `url(https://thumbs.dreamstime.com/b/money-background-close-up-lots-new-us-dollar-bills-58726548.jpg)`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert()
                     
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOptions={options}
                          onCurrencyChange={(currency)=>setFrom(currency)}
                          selectCurrency={from}
                          onAmountChange={(amount)=>setAmount(amount)}


                          
                          
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                          
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convertedAmount}
                          currencyOptions={options}
                          onCurrencyChange={(currency)=>setTo(currency)}
                          selectCurrency={to}
                          
                          amountDisable
                         

                          
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} TO {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
