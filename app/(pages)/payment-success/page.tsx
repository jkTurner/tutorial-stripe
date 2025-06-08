import Link from 'next/link';
 
export default function PaymentSuccessPage({
    searchParams: { amount },
}: {
    searchParams: { amount: string };
}) {
    const formattedAmount = amount ? `$${amount}` : 'your payment';
 
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-[600px] min-h-[60vh] mx-auto px-4 text-center">
            <div className=" bg-white shadow-lg rounded-xl p-[24px] w-full">
                <h1 className="text-3xl text-slate-700 font-bold mb-4">Payment Successful!</h1>
                <p className="text-slate-500 mb-2">
                    Thank you for your purchase. We’ve received <strong className="text-teal-500">{formattedAmount}</strong>.
                </p>
                <p className="text-sm text-gray-500 mb-6">
                    You’ll receive a confirmation email shortly.
                </p>
                <Link
                    href="/"
                    className="inline-block px-6 py-2 bg-violet-400 text-white rounded-lg hover:bg-violet-500 transition"
                    >Return to Home
                </Link>
            </div>
        </div>
  );
}