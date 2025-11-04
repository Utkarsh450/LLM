import { Link } from "react-router-dom"

const Home: React.FC = () => {
  return (
    <div className="w-full font-[satoshi] flex flex-col items-center justify-center mt-24">
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-5xl text-zinc-900 tracking-tight w-full flex gap-2 justify-center">Google <span className="text-blue-600">Aurora</span></h1>
          <h1 className="font-regular text-lg text-zinc-800">The fastest path from prompt to production with Aurora</h1>
        </div>
        <div className="w-250 h-128 mt-4 bg-sky-900 rounded-2xl overflow-hidden">
            <video className="w-full h-full object-cover" autoPlay loop muted src="https://www.gstatic.com/aistudio/welcome/v3/welcome_hero.mp4"></video>
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-fit h-fit font-bold px-3 py-2 rounded-full border-[0.01rem] bg-[#1a73e8] border-zinc-500 text-zinc-200 text-[1rem]">Try Aurora AI</div>
          <Link to="/SignUp" className="w-fit h-fit font-bold px-3 py-2 rounded-full border-[0.01rem] border-zinc-500 bg-[#1a73e8] text-zinc-200 text-[1rem]">Sign up and get started</Link>
        </div>
        <div className="w-200 h-[0.01rem] mt-10 rounded bg-zinc-700"></div>
      </div>
      <div className="min-h-screen w-full flex flex-col items-center pt-24 px-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-center text-zinc-800 max-w-3xl">
          Premium AI is included in Google Workspace plans
        </h1>
        <p className="text-center text-zinc-800 font-medium mt-4 max-w-2xl">
          AI assistance where you need it most, helping you and your teams work faster, collaborate better and uncover insights instantly.
        </p>


        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
          {/* Card 1 */}

          <div className="border rounded-2xl p-8 flex flex-col items-center text-center shadow-blue-600 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-zinc-800 mt-4">
              Get helpful AI in <br /> your favourite apps
            </h2>
            <div className="w-full mt-6 h-[0.09rem] bg-zinc-50"></div>
            <p className="text-zinc-800 mt-6 text-sm flex gap-1">

              Google Workspace with <span className="font-semibold flex gap-1 items-center text-blue-600">Aurora</span>
            </p>
            <p className="text-zinc-800 mt-3 text-sm">
              Do your best work faster with AI woven into apps you use every day like
              Gmail, Docs, Sheets, Meet, Chat, Vids and more.
            </p>
          </div>


          {/* Card 2 */}
          <div className="border rounded-2xl p-8 flex flex-col items-center shadow-[#ed841b] text-center shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl text-zinc-800 font-semibold mt-4">
              Work with your everyday <br /> AI assistant
            </h2>
            <div className="w-full mt-6 h-[0.09rem] bg-zinc-50"></div>
            <p className="text-zinc-800 mt-6 text-sm">
              <span className="font-semibold text-blue-600 flex gap-1 items-center">Aurora</span>
            </p>
            <p className="text-zinc-800 mt-3 text-sm">
              Brainstorm ideas, conduct deep research and analyse data with a team of
              AI experts to tackle your most complex projects.
            </p>
          </div>


          {/* Card 3 */}
          <div className="border rounded-2xl p-8 flex flex-col items-center shadow-[#ed841b] text-center shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-zinc-800 mt-4">
              Access your AI research and <br /> thinking partner
            </h2>
            <div className="w-full mt-6 h-[0.09rem] bg-zinc-50"></div>
            <p className=" mt-6 text-sm text-blue-600 font-semibold">
              LLM Aurora
            </p>
            <p className="text-zinc-800 mt-3 text-sm">
              Grounded in the information you trust, NotebookLM helps you go from
              complex information to actionable insights with unprecedented speed and
              confidence.
            </p>
          </div>
        </div>
      </div>
      <div className="text-zinc-800 px-6 flex flex-col items-center text-center">
        {/* Logo */}        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Enterprise-grade security and privacy
        </h2>

        {/* 3 Columns */}
        <div className="flex flex-col md:flex-row justify-center items-start md:items-stretch gap-10 md:gap-24 max-w-6xl">
          {/* Privacy */}
          <div className="flex-1 space-y-3">
            <h3 className="text-lg font-semibold">Privacy</h3>
            <p className="text-zinc-800 text-sm leading-relaxed">
              Your data is your data, and it’s not used to train Gemini models or
              for ads targeting. You can delete your content or export it.
            </p>
          </div>

          {/* Security */}
          <div className="flex-1 space-y-3">
            <h3 className="text-lg font-semibold">Security</h3>
            <p className="text-zinc-800 text-sm leading-relaxed">
              Gemini only retrieves relevant content in Workspace that the user
              has access to. You can restrict access to sensitive data with
              built-in DLP controls.
            </p>
          </div>

          {/* Compliance */}
          <div className="flex-1 space-y-3">
            <h3 className="text-lg font-semibold">Compliance</h3>
            <p className="text-zinc-800 text-sm leading-relaxed">
              Gemini attained a comprehensive set of privacy and security
              certifications, such as ISO 42001 and SOC 1/2/3, and can help meet
              HIPAA compliance.
            </p>
          </div>
        </div>

        {/* Footer Link */}
        <p className="text-zinc-800 text-sm mt-12">
          For more detailed information, please refer to the{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline"
          >
            Privacy Hub
          </a>
          .
        </p>
      </div>
      <div className="flex mt-24 flex-col items-center justify-center text-center space-y-6">
        {/* Heading */}
        <h1 className="text-4xl font-semibold text-zinc-800">
          Try Workspace at no cost for 14 days
        </h1>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded hover:bg-blue-700 transition">
            Start Free Trial
          </button>
          <button className="bg-zinc-800 text-zinc-50 font-medium px-6 py-3 rounded hover:bg-zinc-900 transition">
            Contact sales
          </button>
        </div>

        {/* Footer link */}
        <p className="text-gray-500">
          Want to experience Gemini with your personal Google Account?{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium"
          >
            Start Free Trial
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-3 mt-52">
        <div className="flex flex-col gap-3 items-center justify-center">
          <h1 className="text-zinc-500 text-6xl font-semibold">Aurora AI</h1>
          <h1 className="text-zinc-400 text-xl font-medium">Start exploring and building with Google’s latest AI models</h1>
          <Link to="/SignUp" className="w-fit mt-1 h-fit font-bold p-2 rounded-xl border-[0.01rem] border-zinc-200 text-zinc-400 text-[0.8rem]">Sign up and get started</Link>
        </div>

        <footer className="w-full bg-linear-to-t from-gray-900 to-black text-gray-300 py-24 px-10">
          <div className="flex gap-24 flex-wrap justify-center">

            {/* Column 1 — Logo / About */}
            <div className="w-48 h-38">
              <h2 className="text-2xl font-bold text-white mb-3">Aurora AI</h2>
              <p className="text-sm leading-relaxed">
                Next-gen conversational LLM built to understand, reason, and create —
                bridging humans with intelligent systems.
              </p>
            </div>

            {/* Column 2 — Quick Links */}
            <div className="w-48 h-38">
              <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white transition">Home</a></li>
                <li><a href="/features" className="hover:text-white transition">Features</a></li>
                <li><a href="/docs" className="hover:text-white transition">Docs</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            {/* Column 3 — Resources */}
            <div className="w-48 h-38">
              <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/api" className="hover:text-white transition">API Reference</a></li>
                <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
                <li><a href="/terms" className="hover:text-white transition">Terms of Use</a></li>
                <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Column 4 — Socials */}
            <div className="w-48 h-38">
              <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom text */}
          <div className="text-center border-t border-gray-700 mt-5 pt-5 text-sm text-gray-500">
            © {new Date().getFullYear()} Aurora AI. All rights reserved.
          </div>
        </footer>

      </div>
    </div>
  )
}

export default Home