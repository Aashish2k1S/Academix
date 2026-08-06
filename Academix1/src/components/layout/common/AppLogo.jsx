const AppLogo = () => {
    return (
        <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-red-600 to-red-800 shadow-xl shadow-red-600/30">
                <img className="w-40" src="./src/assets/icons/academixIcon.svg" alt="logo" />
            </div>

            <div>
                <h1 className="text-2xl font-bold tracking-tight">
                    Academix
                </h1>

                <p className="text-xs text-gray-500">
                    Academic Management Platform
                </p>
            </div>
        </div>
    );
};

export default AppLogo;