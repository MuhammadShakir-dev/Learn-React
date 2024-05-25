import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [number, setnumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenrator = useCallback(() => { 
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (setnumber) str += "0123456789";
    if (setCharacter) str += "~!@#$%^&*(){}[]><,./?+=";

    for (let i = 0; i < length; i ++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass +=  str.charAt(char)      
    }

    setPassword(pass)
  }, [length, number, character, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => { 
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 25)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => { passwordGenrator() }, [length, setnumber, setCharacter, passwordGenrator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={ passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipBoard}
          >copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
              min={8}
              max={55}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value)}}
            />
            <label htmlFor=""> Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={setnumber}
            id="numberInput"
            onChange={() => { setnumber((prev) => !prev)}}
          />
          <label htmlFor="numberInput">Numbers</label>
          </div>


        <div className="flex items-center gap-x-1">
        <input
            type="checkbox"
            defaultChecked={setCharacter}
            id="setCharacter"
            onChange={() => {setCharacter((prev) => !prev)}}
          />
          <label htmlFor="setCharacter">Character</label>   
        </div>

        </div>

        
      </div>
      
    </>
  )
}

export default App
