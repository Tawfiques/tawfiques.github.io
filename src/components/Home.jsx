import img from "../assets/Self.png";
export default function Home() {
  return (
    <div className="flex flex-col gap-8 sm:flex-row items-center justify-center h-full animate-fade-in sm:px-8">
      <p className="w-1/2 text-lg sm:text-lg text-white font-Poppins">
        <span className="text-2xl sm:text-5xl  font-semibold">
          <span className="">Hello World!</span>
          <br /> I&#39;m{" "}
          <span className="text-valorantRed font-valorant">
            Tawfique Hassan
          </span>
        </span>
        &nbsp;
        <br /><span className="text-xs sm:text-lg text-valorantText">A Full Stack Developer with a deep passion for building dynamic
        websites and constantly striving to learn and improve in the process.</span>
      </p>
      <img className="object-contain sm:w-1/2 sm:h-2/3" src={img} alt="" />
    </div>
  );
}
