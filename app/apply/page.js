"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ApplyPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000));
    router.push(`/loan-selection?name=${encodeURIComponent(name)}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-green-600">Inuka Hela</h1>
          <p className="text-gray-500 text-sm">Fast and Secure Kenyan Mobile Loans</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold mb-1 text-gray-700">Full Name</label>
            <input required type="text" onChange={(e)=>setName(e.target.value)} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none" placeholder="Enter full name" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1 text-gray-700">Phone Number</label>
            <input required type="tel" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none" placeholder="07XXXXXXXX" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1 text-gray-700">National ID Number</label>
            <input required type="number" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none" placeholder="ID Number" />
          </div>

          <button disabled={loading} className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition flex justify-center items-center">
            {loading ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> : "Check Loan Eligibility"}
          </button>
        </form>

        <div className="mt-6 space-y-2">
            {["Fast Approval", "Secure", "Direct to Mpesa"].map((t, i) => (
               <div key={i} className="flex items-center space-x-2 text-sm text-gray-600 font-medium">
                  <img src="/assets/icons/two.png" className="w-4 h-4" alt="tick" />
                  <span>{t}</span>
               </div>
            ))}
        </div>
      </div>
    </div>
  );
}