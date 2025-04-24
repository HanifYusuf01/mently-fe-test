
  
  export default function WelcomeBanner({ name }) {
    return (
      <div className="bg-[#6F01D0] w-full text-white p-2 md:p-4 rounded-lg shadow-md flex justify-between items-center">
        <div className="flex items-center">
          <h2 className="text-[4px] md:text-[10px] lg:text-base xl:text-xl font-bold">Welcome Aboard, {name} 👋</h2>
          <div className="text-[5px] md:text-[8px] lg:ml-2 text-sm text-[#BDBDBD] xl:ml-4  px-4 py-1 rounded">
            We&apos;re thrilled to have you join Techrity Team!
          </div>
        </div>
        <button className="bg-white text-[#1F0954] text-[4px] md:text-[8px] text-sm p-1 md:px-2 md:py-1 lg:px-4 lg:py-2 rounded shadow hover:bg-gray-100 transition-colors">
          Update Profile
        </button>
      </div>
    );
  }
  