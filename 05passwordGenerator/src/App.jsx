import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [character, setcharacter] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (num) str += "0123456789"
    if (character) str += "~`!@#$%^&*_=-"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)
  }, [length, num, character, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, num, character, passwordGenerator])

  return (
    <>
      <div className="text-center w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-center text-white my-2">Password Generator</h1>
        <div className="flex shadow rounded-lg  overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-950 ">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              id="rangechg"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label htmlFor="rangechg">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={num}
              id="numInput"
              onChange={() => { setNum((prev) => !prev) }}
            />
            <label htmlFor="numInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={character}
              id="charInput"
              onChange={() => { setcharacter((prev) => !prev) }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
