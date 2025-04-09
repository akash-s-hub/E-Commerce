export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-800">Sign Up</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full rounded-md border border-gray-300 p-3" />
          <input type="email" placeholder="Email" className="w-full rounded-md border border-gray-300 p-3" />
          <input type="password" placeholder="Password" className="w-full rounded-md border border-gray-300 p-3" />
          <button type="submit" className="w-full rounded-md bg-blue-600 text-white p-3 font-semibold hover:bg-green-700 transition">
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600">
          Already have an account?
          <a href="/login" className="ml-2 text-blue-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}