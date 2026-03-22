"use client"; import { useState } from "react";

const shapes = ["square","coffin","almond","stiletto"];

// 💰 YOUR CUSTOM PRICING (EDIT ANYTIME) const pricing = { base: 20, chrome: 10, rhinestones: 15, charms: 15, extraLong: 10, rush: 15 };

// 🛍️ YOUR SHOP SETS (ADD YOUR OWN IMAGES IN /public) const shopSets = [ { name: "Blush Baby 💕", price: 25, image: "/nails1.jpg" }, { name: "Purple Dream 💜", price: 40, image: "/nails2.jpg" } ];

function generateImage(prompt) { const encoded = encodeURIComponent(a realistic hand with ${prompt} press on nails, soft lighting, pastel aesthetic, lavender theme); return https://image.pollinations.ai/prompt/${encoded}; }

export default function Page() { const [design, setDesign] = useState(null); const [shape, setShape] = useState("square"); const [userInput, setUserInput] = useState(""); const [addons, setAddons] = useState({}); const [rush, setRush] = useState(false);

function toggleAddon(name) { setAddons(prev => ({ ...prev, [name]: !prev[name] })); }

function calculatePrice() { let total = pricing.base;

Object.keys(addons).forEach(key => {
  if (addons[key]) total += pricing[key] || 0;
});

if (rush) total += pricing.rush;

return total;

}

function handleGenerate() { if (!userInput) return;

setDesign({
  name: "Custom Set 💅🏾",
  description: userInput,
  shape,
  image: generateImage(`${userInput}, ${shape} shape`)
});

}

function orderDesign() { if (!design) return;

const total = calculatePrice();

const subject = encodeURIComponent("New Nail Order 💅🏾");
const body = encodeURIComponent(

`✨ NEW ORDER ✨

Design: ${design.description} Shape: ${design.shape}

Total Price: $${total}

Name: Nail Size (XS, S, M, L): Length (Short, Medium, Long):

Rush Order: ${rush ? "Yes (+$15)" : "No"}

Extra Notes:

📸 Attach inspo pic if needed 💜` );

window.location.href = `mailto:juniesnailsco@gmail.com?subject=${subject}&body=${body}`;

}

return ( <main className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 p-6 text-center"> <h1 className="text-4xl font-bold mb-2 text-purple-700">Juniesnails 💜</h1> <p className="mb-6">Custom Press-On Nails ✨</p>

<div className="max-w-md mx-auto bg-white p-5 rounded-2xl shadow space-y-4">

    <input
      placeholder="Describe your dream nails..."
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
      className="w-full p-2 border rounded-xl"
    />

    <select value={shape} onChange={(e) => setShape(e.target.value)} className="w-full p-2 border rounded-xl">
      {shapes.map((s) => <option key={s}>{s}</option>)}
    </select>

    {/* ADD-ONS */}
    <div className="text-left">
      <p className="font-bold">Add-ons 💎</p>
      {Object.keys(pricing).filter(p => p !== "base" && p !== "rush").map((item) => (
        <label key={item} className="block">
          <input type="checkbox" onChange={() => toggleAddon(item)} /> {item} (+${pricing[item]})
        </label>
      ))}
    </div>

    {/* RUSH OPTION */}
    <label>
      <input type="checkbox" onChange={() => setRush(!rush)} /> Rush Order (+$15)
    </label>

    <button onClick={handleGenerate} className="bg-purple-400 text-white px-4 py-2 rounded-full">Generate ✨</button>

    {design && (
      <div className="space-y-3">
        <p className="font-bold text-lg">{design.name}</p>
        <p>{design.description}</p>
        <p>Shape: {design.shape}</p>

        <img src={design.image} className="rounded-2xl" />

        <p className="font-bold">Total: ${calculatePrice()}</p>

        <button onClick={orderDesign} className="bg-pink-300 px-4 py-2 rounded-full">
          Order This Set 💌
        </button>
      </div>
    )}
  </div>

  {/* SHOP SECTION */}
  <div className="mt-10">
    <h2 className="text-2xl font-bold text-purple-700">Shop Sets 🛍️</h2>
    <div className="grid grid-cols-2 gap-4 mt-4">
      {shopSets.map((item, i) => (
        <div key={i} className="bg-white p-3 rounded-xl shadow">
          <img src={item.image} className="rounded-xl" />
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  </div>
</main>

); }
