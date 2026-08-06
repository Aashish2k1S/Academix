import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
    loginSuccess,
    setError,
    clearError,
} from "../../features/auth/authSlice";

import { mockUsers } from "../../utils/mockUsers";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuthenticated, user, error } = useSelector((state) => state.auth);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = ({ email, password }) => {
        dispatch(clearError());

        const user = mockUsers.find(
            (user) => user.email === email && user.password === password,
        );

        if (!user) {
            dispatch(setError("Invalid email or password."));
            return;
        }

        const { password: _, ...loggedInUser } = user;

        dispatch(loginSuccess(loggedInUser));

        navigate(`/${loggedInUser.role}`);
    };

    if (isAuthenticated) {
        return <Navigate to={`/${user.role}`} replace />;
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-[bg] px-4">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[surface] p-8 shadow-xl">
                <h1 className="mb-2 text-3xl font-bold">Welcome Back 👋</h1>

                <p className="mb-8 text-gray-500">
                    Sign in to continue to Academix
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                        <label className="mb-2 block font-medium">Email</label>

                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                            })}
                            className="w-full rounded-xl border p-3 outline-none"
                        />

                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                            })}
                            className="w-full rounded-xl border p-3 outline-none"
                        />

                        {errors.password && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {error && (
                        <div className="rounded-xl bg-red-100 p-3 text-red-600">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-[accent] py-3 font-semibold text-white"
                    >
                        Login
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Login;
