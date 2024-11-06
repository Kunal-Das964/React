import { useState } from "react"

function App() {

  const [color, setColor] = useState("black")
  const externalStyle = {
    right: "87%",
    top: "75px",
    px: "20px"
  }
  
  return (

    <div className="w-full h-screen  duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-8 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center px-1 py-1 gap-7 bg-white  rounded-full">
          <button
            onClick={() => setColor("red")}
            className="bg-red-500 rounded-full px-3 py-1  text-black"
            style={{ backgroundColor: "red" }}>Red</button>
          <button
            onClick={() => setColor("green")}
            className="bg-red-500 rounded-full px-3 py-1 text-black"
            style={{ backgroundColor: "green" }}>Green</button>
          <button
            onClick={() => setColor("purple")}
            className="bg-red-500 rounded-full px-3 py-1 text-black"
            style={{ backgroundColor: "purple" }}>Purple</button>
          <button
            onClick={() => setColor("blue")}
            className="bg-red-500 rounded-full px-3 py-1 text-black"
            style={{ backgroundColor: "blue" }}>Blue</button>
          <button
            onClick={() => setColor("Pink")}
            className="bg-red-500 rounded-full px-3 py-1 text-black"
            style={{ backgroundColor: "Pink" }}>Pink</button>
          <button
            onClick={() => setColor("yellow")}
            className="bg-red-500 rounded-full px-3 py-1 text-black"
            style={{ backgroundColor: "yellow" }}>yellow</button>
          <button
            onClick={() => setColor("Brown ")}
            className="bg-red-500 rounded-full px-3 py-1 text-black"
            style={{ backgroundColor: "Brown " }}>Brown </button>
          <button
            onClick={() => setColor("orange")}
            className="bg-red-500 rounded-full px-3 py-1 text-black"
            style={{ backgroundColor: "orange" }}>orange</button>
          <button
            onClick={() => setColor("Gray ")}
            className="bg-red-500 rounded-full px-3 py-1 text-black"
            style={{ backgroundColor: "Gray " }}>Gray </button>
        </div>
      </div>
      <div className="fixed flex flex-wrap justify-center right-2 top-8 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center px-1 py-1 gap-1 bg-white  rounded-full">
          <button
            onClick={() => setColor("DarkRed")}
            className="bg-red-500 rounded-full px-3 py-1  text-black"
            style={{ backgroundColor: "DarkRed" }}>DarkRed</button>
          <button
            onClick={() => setColor("Olive")}
            className="bg-red-500 rounded-full px-3 py-1 text-black"
            style={{ backgroundColor: "Olive" }}>Olive</button>
          <button
            onClick={() => setColor("Indigo")}
            className="bg-red-500 rounded-full px-3 py-1 text-black"
            style={{ backgroundColor: "Indigo" }}>Indigo</button>
          <button
            onClick={() => setColor("Aqua")}
            className="bg-red-500 rounded-full px-3 py-1 text-black"
            style={{ backgroundColor: "Aqua" }}>Aqua</button>
          <button
            onClick={() => setColor("HotPink")}
            className="bg-red-500 rounded-full px-3 py-1 text-black"
            style={{ backgroundColor: "HotPink" }}>HotPink</button>
          <button
            onClick={() => setColor("DarkKhaki")}
            className="bg-red-500 rounded-full px-3 py-1 text-black"
            style={{ backgroundColor: "DarkKhaki" }}>DarkKhaki</button>
          <button
            onClick={() => setColor("Chocolate")}
            className="bg-red-500 rounded-full px-3 py-1 text-black"
            style={{ backgroundColor: "Chocolate" }}>Chocolate</button>
          <button
            onClick={() => setColor("Tomato")}
            className="bg-red-500 rounded-full px-3 py-1 text-black"
            style={{ backgroundColor: "Tomato" }}>Tomato</button>
          <button
            onClick={() => setColor("DarkSlateGray")}
            className="bg-red-500 rounded-full px-3 py-1 text-black"
            style={{ backgroundColor: "DarkSlateGray" }}>DarkSlateGray</button>
        </div>
      </div>
      <div className="fixed flex flex-wrap justify-center  inset-x-0 px-2" style={{ right: externalStyle.right, top: externalStyle.top }}>
        <div className="flex flex-wrap justify-center px-1 py-1 gap-1 bg-white" style={{ borderRadius: externalStyle.px }}>
          <div>
            <button
              onClick={() => setColor("LightSalmon")}
              className="bg-red-500 block rounded-full px-3 py-1 m-auto mb-8 text-black"
              style={{ backgroundColor: "LightSalmon" }}>LightSalmon</button>
            <button
              onClick={() => setColor("SeaGreen")}
              className="bg-red-500 block rounded-full px-3 py-1 m-auto mb-8 text-black"
              style={{ backgroundColor: "SeaGreen" }}>SeaGreen</button>
            <button
              onClick={() => setColor("Lavender")}
              className="bg-red-500 block rounded-full px-3 py-1 m-auto mb-8 text-black"
              style={{ backgroundColor: "Lavender" }}>Lavender</button>
            <button
              onClick={() => setColor("Aquamarine")}
              className="bg-red-500 block rounded-full px-3 py-1 m-auto mb-8 text-black"
              style={{ backgroundColor: "Aquamarine" }}>Aquamarine</button>
            <button
              onClick={() => setColor("LightPink")}
              className="bg-red-500 block rounded-full px-3 py-1 m-auto mb-8 text-black"
              style={{ backgroundColor: "LightPink" }}>LightPink</button>
            <button
              onClick={() => setColor("PeachPuff")}
              className="bg-red-500 block rounded-full px-3 py-1 m-auto mb-8 text-black"
              style={{ backgroundColor: "PeachPuff" }}>PeachPuff</button>
            <button
              onClick={() => setColor("Maroon")}
              className="bg-red-500 block rounded-full px-3 py-1 m-auto mb-8 text-black"
              style={{ backgroundColor: "Maroon" }}>Maroon</button>
            <button
              onClick={() => setColor("DarkOrange")}
              className="bg-red-500 block rounded-full px-3 py-1 m-auto mb-8 text-black"
              style={{ backgroundColor: "DarkOrange" }}>DarkOrange</button>
            <button
              onClick={() => setColor("Silver")}
              className="bg-red-500 block rounded-full px-3 py-1 m-auto text-black"
              style={{ backgroundColor: "Silver" }}>Silver</button>
          </div>
        </div>
      </div>
      <div className="fixed flex flex-wrap justify-center  inset-x-0 px-2" style={{ left: externalStyle.right, top: externalStyle.top }}>
        <div className="flex flex-wrap justify-center px-1 py-1 gap-1 bg-white" style={{ borderRadius: externalStyle.px }}>
          <div>
            <button
              onClick={() => setColor("MistyRose")}
              className="bg-red-500 block rounded-full px-3 py-1 m-auto mb-8 text-black"
              style={{ backgroundColor: "MistyRose" }}>MistyRose</button>
            <button
              onClick={() => setColor("LavenderBlush")}
              className="bg-red-500 block rounded-full px-3 py-1 m-auto mb-8 text-black"
              style={{ backgroundColor: "LavenderBlush" }}>LavenderBlush</button>
            <button
              onClick={() => setColor("Linen")}
              className="bg-red-500 block rounded-full px-3 py-1 m-auto mb-8 text-black"
              style={{ backgroundColor: "Linen" }}>Linen</button>
            <button
              onClick={() => setColor("AntiqueWhite")}
              className="bg-red-500 block rounded-full px-3 py-1 m-auto mb-8 text-black"
              style={{ backgroundColor: "AntiqueWhite" }}>AntiqueWhite</button>
            <button
              onClick={() => setColor("Beige")}
              className="bg-red-500 block rounded-full px-3 py-1 m-auto mb-8 text-black"
              style={{ backgroundColor: "Beige" }}>Beige</button>
            <button
              onClick={() => setColor("SeaShell")}
              className="bg-red-500 block rounded-full px-3 py-1 m-auto mb-8 text-black"
              style={{ backgroundColor: "SeaShell" }}>SeaShell</button>
            <button
              onClick={() => setColor("AliceBlue")}
              className="bg-red-500 block rounded-full px-3 py-1 m-auto mb-8 text-black"
              style={{ backgroundColor: "AliceBlue" }}>AliceBlue</button>
            <button
              onClick={() => setColor("HoneyDew")}
              className="bg-red-500 block rounded-full px-3 py-1 m-auto mb-8 text-black"
              style={{ backgroundColor: "HoneyDew" }}>HoneyDew</button>
            <button
              onClick={() => setColor("WhiteSmoke")}
              className="bg-red-500 block rounded-full px-3 py-1 m-auto text-black"
              style={{ backgroundColor: "WhiteSmoke" }}>WhiteSmoke</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
