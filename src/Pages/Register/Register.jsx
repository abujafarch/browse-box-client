import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin";

const Register = () => {

    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        createUser(email, password)
            .then(() => {
                toast.success('User Created')
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
                toast.error('something went wrong. try again')
            })
        console.log(email, password)
    }

    return (
        <div className="max-w-[1320px] font-inter mx-auto px-3 mt-4 sm:mt-6 md:mt-8 lg:mt-10  overflow-x-hidden">
            <div className="lg:mt-20 md:mt-14 sm:mt-8 mt-4">
                <h1 className="text-3xl font-semibold text-center mb-12">Register Here</h1>
                <form onSubmit={handleRegister} className="max-w-[500px] min-w-[280px] mx-auto">
                    <p className="text-lg mb-1">Your Email</p>
                    <input type="email" name="email" placeholder="enter your email" className="outline-none py-2 px-3 border-[#E8788C] border-2 rounded-sm w-full" />

                    <p className="text-lg mb-1 mt-4">A Password</p>
                    <input type="password" name="password" placeholder="enter a password" className="outline-none py-2 px-3 border-[#E8788C] border-2 rounded-sm w-full" />

                    <div className="mt-4">
                        <button className="bg-[#E8788C] py-2 px-3 text-white font-bold rounded-sm w-full">Register</button>
                    </div>
                </form>

                <SocialLogin />
            </div>
        </div>
    );
};

export default Register;