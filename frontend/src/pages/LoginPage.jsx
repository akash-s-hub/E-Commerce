export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-800">Login</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full rounded-md border border-gray-300 p-3" />
          <input type="password" placeholder="Password" className="w-full rounded-md border border-gray-300 p-3" />
          <button type="submit" className="w-full rounded-md bg-blue-600 text-white p-3 font-semibold hover:bg-blue-700 transition">
            Login
          </button>
        </form>
        <p className="text-center text-gray-600">
          Don't have an account?
          <a href="/signup" className="ml-2 text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}