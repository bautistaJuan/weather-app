import Inputs from "./components/Inputs";
import TopButtons from "./components/TopButtons";

export default function App() {
  return (
    <div className="mx-auto max-w-screen-lg text-white mt-4 py-6 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700">
      <TopButtons />
      <Inputs />
    </div>
  );
}
