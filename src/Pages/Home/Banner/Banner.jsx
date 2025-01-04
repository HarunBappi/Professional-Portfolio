import bannerImage from "../../../assets/harun.png";
import "../../../index.css";
export default function Banner() {
  return (
    <div className="bg-gray-100 h-screen flex items-center relative">
      <div className="w-1/2 bg-blue-300 h-full flex flex-col justify-center p-10">
        <h2 className="text-white text-4xl font-bold">Hi, I'm Harunur Rosid</h2>
        <p className="text-white mt-4">
          Front End Developer Crafting beautiful & functional Web Experience
        </p>
      </div>
      {/* right */}
      <div className="w-1/2 h-full bg-[#011324] relative overflow-hidden">
        {/* Shape */}
        <div
          className="absolute top-0 left-0  h-full w-3/4  bg-[#001F3F]"
          style={{ "clip-path": "polygon(100% 35%, 100% 0, 0 0, 0% 100%)" }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
          <img
            src={bannerImage}
            alt=""
            className="w-3/4 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
