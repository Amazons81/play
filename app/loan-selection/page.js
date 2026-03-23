"use client";
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

// 1. This is the actual page content
function LoanContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || "Customer";
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const options = [
    { amount: "Ksh 5,500", fee: "100" },
    { amount: "Ksh 7,000", fee: "130" },
    { amount: "Ksh 8,500", fee: "170" },
    { amount: "Ksh 10,500", fee: "230" },
    { amount: "Ksh 12,200", fee: "270" },
  ];

  const handleApply = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-sm bg-white p-5 rounded-xl shadow mb-4 border-l-4 border-green-600">
        <p className="font-bold text-lg text-gray-800">Hi {name.split(" ")[0]}, Select your loan</p>
        <p className="text-xs text-gray-500">2-Month term • 10% interest • M-Pesa</p>
      </div>

      <div className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-xl space-y-3">
        <h3 className="font-bold text-gray-700 mb-2">Available Loan Amounts</h3>
        {options.map((opt, i) => (
          <div key={i} onClick={() => setSelected(i)} className={`p-4 border-2 rounded-xl cursor-pointer transition ${selected === i ? 'border-green-600 bg-green-50' : 'border-gray-100 hover:bg-gray-50'}`}>
            <p className="text-green-600 font-bold text-lg">{opt.amount}</p>
            <p className="text-sm text-gray-400 font-medium font-mono uppercase">Fee: Ksh {opt.fee}</p>
          </div>
        ))}

        <button onClick={handleApply} disabled={selected === null || loading} className={`w-full py-4 rounded-xl font-bold text-white transition mt-4 ${selected === null ? 'bg-green-300' : 'bg-green-600 hover:bg-green-700 shadow-lg'}`}>
          {loading ? "Processing..." : "Apply Now"}
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-xs w-full shadow-2xl text-center">
            <h2 className="text-2xl font-bold mb-3 text-gray-800">Confirm</h2>
            <p className="text-gray-600">Proceed with <span className="text-green-600 font-bold">{options[selected].amount}</span></p>
            <div className="mt-8 flex justify-end space-x-4">
              <button onClick={() => setShowModal(false)} className="text-gray-400 font-bold uppercase text-xs">Cancel</button>
              <button onClick={() => alert("Processing request...")} className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold">Proceed</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// 2. This is the wrapper that fixes the "Prerendering" error
export default function LoanSelection() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading selection...</div>}>
      <LoanContent />
    </Suspense>
  );
}