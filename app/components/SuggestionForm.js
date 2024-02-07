import Button from "./Button"

const SuggestionForm = ({setShow}) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex md:items-center">
        <div className="w-full">
            <div className="bg-[#242424] rounded-lg md:max-w-2xl md:mx-auto md:overflow-hidden">
                <h2 className="py-4 mt-4 text-center text-xl text-gray-200">Share your suggestions</h2>
                <form className="p-8">
                    <label className="block mt-4 mb-1 text-xs text-gray-300">Subject:</label>
                    <input className="w-full bg-[#242424] focus:outline-none border border-gray-700 px-3 py-1" type="text" />
                    <label className="block mt-6 mb-1 text-xs text-gray-300">Description:</label>
                    <textarea className="w-full bg-[#242424] border border-gray-700"></textarea>
                    <div className="text-right">
                        <button onClick={() => setShow(false)} className="py-1 px-3 text-gray-400 rounded-md text-sm mr-4">Cancel</button>
                        <Button classes="mt-6" primary>Create</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SuggestionForm