"use client";
import { useRouter } from 'next/navigation';

export default function TermsPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
       <button onClick={() => router.back()} className="mb-4 text-green-600 font-bold self-start max-w-lg mx-auto w-full">← Back</button>
       <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-2xl font-bold text-green-600 text-center mb-6">Terms & Conditions</h1>
          <div className="space-y-6 text-gray-700 leading-relaxed overflow-y-auto max-h-[70vh] pr-4">
             <section>
                <h3 className="font-bold text-black border-b pb-1">1. Eligibility</h3>
                <p className="text-sm mt-2">You must be a Kenyan resident aged 18 years and above with a valid National ID and active M-PESA.</p>
             </section>
             <section>
                <h3 className="font-bold text-black border-b pb-1">2. Loan Approval</h3>
                <p className="text-sm mt-2">Approval is based on internal criteria including M-PESA usage history. Approval is not guaranteed.</p>
             </section>
             <section>
                <h3 className="font-bold text-black border-b pb-1">3. Fees</h3>
                <p className="text-sm mt-2">Approved loans attract processing fees as disclosed before final confirmation.</p>
             </section>
          </div>
       </div>
    </div>
  );
}