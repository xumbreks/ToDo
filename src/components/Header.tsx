import rocket from "../assets/rocket.svg";

export function Header() {
  return (
    <header>
      <div className="w-full h-[12.5rem] bg-base-700 flex items-center justify-center">
        <img className="w-[1.75rem] h-9" src={rocket} alt="rocket" />
        <span className="text-[2.5rem] text-product-300 font-black">to</span>
        <span className="text-[2.5rem] text-product-200 font-black">do</span>
      </div>
    </header>
  );
}
