import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast.success('logged in')
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                toast.error('something went wrong. try again')
            })
    }
    return (
        <div>
            <p className="text-center mt-5">Or</p>
            <div className="max-w-[500px] min-w-[280px] mx-auto flex mt-5">
                <button onClick={handleGoogleLogin} className="w-full py-2 bg-[#E8788C] rounded-sm text-white font-bold">Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;