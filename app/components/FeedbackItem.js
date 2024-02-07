
const FeedbackItem = () => {
  return (
    <div className="bg-[#252727] px-4 py-3 rounded-lg flex items-center gap-2 my-6">
        <div className="flex flex-col gap-1">
            <h2 className="font-semibold">Unhygenic canteen</h2>
            <p className="text-gray-400 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. At ad necessitatibus quas asperior doloremque ea impedit cumque? Vero, eum ab dignissimos!</p>
        </div>
        <div>
            <button className="flex items-center justify-center shadow-md shadow-gray-700 rounded-lg bg-gray-500 px-1 py-[2px] text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
                98
            </button>
        </div>
    </div>
  )
}

export default FeedbackItem