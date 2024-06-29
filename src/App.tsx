import {
    decrement,
    increment,
    incrementByValue,
} from "./redux/features/counterSlice";
import { knifeDecrement, knifeIncrement } from "./redux/features/knifeSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

const App = () => {
    const { count } = useAppSelector((state) => state.counter);
    const { knife } = useAppSelector((state) => state.knife);

    const dispatch = useAppDispatch();

    return (
        <div className="max-w-2xl mx-auto mt-10 ">
            <div className="flex flex-col justify-center items-center h-[calc(100vh-180px)]">
                <h1 className="text-2xl font-bold">Counter App</h1>
                <div className="border-2 border-fuchsia-700 w-40 mb-6 mt-2 "></div>
                <div className="flex gap-5 items-center  border-2 border-fuchsia-800 rounded-md p-16 shadow-md bg-gray-100">
                    <button
                        onClick={() => {dispatch(decrement()); dispatch(knifeDecrement())}}
                        className="bg-red-600 text-white px-3 py-2 font-semibold rounded-md shadow-md hover:bg-red-700"
                    >
                        Decrement
                    </button>
                    <h1 className="bg-fuchsia-800 text-white px-4 text-xl py-2 font-semibold rounded-md shadow-md">
                        {count}
                    </h1>
                   
                    <button
                        onClick={() => dispatch(incrementByValue(5))}
                        className="bg-green-600 text-white px-3 py-2 font-semibold rounded-md shadow-md hover:bg-green-700"
                    >
                        Increment By Value
                    </button>
                    <button
                        onClick={() => {dispatch(increment()); dispatch(knifeIncrement())}}
                        className="bg-green-600 text-white px-3 py-2 font-semibold rounded-md shadow-md hover:bg-green-700"
                    >
                        Increment
                    </button>
                </div>
            <div className="mt-5 border-2 border-fuchsia-800 rounded-md shadow-md  min-w-44  min-h-20">
            <h1 className=" text-white px-4 text-xl py-2 font-semibold">
                        {knife}
                    </h1>
            </div>
            </div>
        </div>
    );
};

export default App;
