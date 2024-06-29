const App = () => {
    return (
        <div className="max-w-2xl mx-auto mt-10">
            <div className="flex gap-5 items-center">
                <button className="bg-red-600 text-white px-3 py-2 font-semibold rounded-md shadow-md hover:bg-red-700">Decrement</button>
                <h1 className="bg-fuchsia-800 text-white px-4 text-xl py-2 font-semibold rounded-md shadow-md">0</h1>
                <button className="bg-green-600 text-white px-3 py-2 font-semibold rounded-md shadow-md hover:bg-green-700">Increment</button>
            </div>
        </div>
    );
};

export default App;
