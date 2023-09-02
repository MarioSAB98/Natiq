import { Link } from "react-router-dom";

export default function Error() {
    return (
        <>
            <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="flex justify-center items-center h-screen">
                        <div>
                            <h1 className="lg:text-6xl font-bold text-2xl text-red-600">Oops!</h1>
                            <p className="text-xl text-black">
                                Sorry, an unexpected error has occurred.
                            </p>
                            <p className="text-3xl text-white">
                            </p>
                            <div className="mt-4">
                                <Link
                                    to="/"
                                    className="px-5 py-2 bg-gray-400 rounded-md hover:bg-gray-300"
                                >
                                    go back
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}