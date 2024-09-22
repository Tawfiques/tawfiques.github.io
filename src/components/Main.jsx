// eslint-disable-next-line react/prop-types
export default function Main({ children }) {
  return (
    <div className="col-start-2 row-start-2 row-span-full col-span-full bg-white/10 shadow-lg backdrop-blur-lg rounded-lg m-4 p-4 font-Poppins">
      {children}
    </div>
  )
}


