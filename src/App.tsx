import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

const App = () => {
    const { count } = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    return (
        <div className="max-w-2xl mx-auto mt-10 ">
            <div className="flex flex-col justify-center items-center h-[calc(100vh-180px)]">
                <h1 className="text-2xl font-bold">Counter App</h1>
                <div className="border-2 border-fuchsia-700 w-40 mb-6 mt-2 "></div>
                <div className="flex gap-5 items-center  border-2 border-fuchsia-800 rounded-md p-16 shadow-md bg-gray-100">
                    <button
                        onClick={() => dispatch(decrement())}
                        className="bg-red-600 text-white px-3 py-2 font-semibold rounded-md shadow-md hover:bg-red-700"
                    >
                        Decrement
                    </button>
                    <h1 className="bg-fuchsia-800 text-white px-4 text-xl py-2 font-semibold rounded-md shadow-md">
                        {count}
                    </h1>
                    <button
                        onClick={() => dispatch(increment())}
                        className="bg-green-600 text-white px-3 py-2 font-semibold rounded-md shadow-md hover:bg-green-700"
                    >
                        Increment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
