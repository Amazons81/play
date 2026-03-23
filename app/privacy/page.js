"use client";
import { useRouter } from 'next/navigation';

export default function PrivacyPolicy() {
  const router = useRouter();
  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
       <button onClick={() => router.push('/')} className="mb-4 text-green-600 font-bold self-start max-w-lg mx-auto w-full">← Home</button>
       <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-2xl font-bold text-green-600 text-center mb-6">Privacy Policy</h1>
          <div className="space-y-6 text-gray-700 leading-relaxed">
             <p className="text-sm">Your privacy is important to us at Inuka Loans. We use your data to assess loan eligibility and process transactions.</p>
             <div>
                <h3 className="font-bold text-black">Data Security</h3>
                <p className="text-sm mt-1">We use technical measures to protect your info from unauthorized access. We do not sell your personal data.</p>
             </div>
             <div>
                <h3 className="font-bold text-black">Your Rights</h3>
                <p className="text-sm mt-1">You may request access to or deletion of your data at any time via our contact channels.</p>
             </div>
          </div>
       </div>
    </div>
  );
}