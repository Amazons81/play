import Link from 'next/link';

export default function HomePage() {
  const features = ["No CRB Checks", "No Paperwork", "No Collateral Required", "No Gurantors"];
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* 1. LOGO + WELCOME */}
      <img src="/assets/icons/favic.png" alt="Logo" className="w-20 h-20 object-contain" />
      <h1 className="text-3xl font-bold text-green-600 mt-2">Inuka Loans</h1>

      {/* 2. MENU CARD */}
      <div className="mt-8 w-full max-w-sm bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center text-black">Instant Mobile Loans</h2>
        <p className="text-center text-gray-600 mt-2 text-sm leading-relaxed">
          Borrow up to Ksh 10,000 and Receive money to M-PESA Within Minutes.
        </p>

        <div className="mt-6 space-y-3">
          {features.map((item, i) => (
            <div key={i} className="flex items-center space-x-3">
              <img src="/assets/icons/two.png" alt="tick" className="w-5 h-5" />
              <span className="text-gray-800 font-medium">{item}</span>
            </div>
          ))}
        </div>

        <Link href="/apply">
          <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition duration-300">
            Apply Now →
          </button>
        </Link>

        <div className="mt-6 space-y-2 border-t pt-4">
          {["SSL Secured & Data Protected", "Direct Mpesa Disbursement", "Trusted By Kenyan Youths"].map((text, i) => (
            <div key={i} className="flex items-center space-x-2">
              <img src="/assets/icons/favicon.png" alt="star" className="w-4 h-4" />
              <span className="text-xs text-gray-600 font-semibold uppercase tracking-wider">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER LINKS */}
      <div className="mt-8 flex space-x-3 text-sm font-bold text-green-600">
        <Link href="/terms">Terms and Conditions</Link>
        <span className="text-gray-400">|</span>
        <Link href="/privacy">Privacy Policy</Link>
      </div>
    </div>
  );
}