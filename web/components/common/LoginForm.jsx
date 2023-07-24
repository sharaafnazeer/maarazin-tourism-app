import {signIn, useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const {session, status} = useSession();

    useEffect(() => {
        if (session && status === "authenticated") {
            router.push('/dashboard'); // Replace '/dashboard' with the desired page URL
        }
    });

    const onLogin = async (e) => {
        e.preventDefault();

        const result = await signIn('credentials', {
            callbackUrl: router.basePath + "/dashboard",
            redirect: false,
            email: email,
            password: password
        });
        if (result.error) {
            console.log(result.error)
        } else {
            router.push(router.basePath + "/dashboard");
        }

    };

    return (
        <form className="row y-gap-20">
            <div className="col-12">
                <h1 className="text-22 fw-500">Welcome back</h1>
                <p className="mt-10">
                    Don&apos;t have an account yet?{" "}
                    <Link href="/auth/signup" className="text-blue-1">
                        Sign up for free
                    </Link>
                </p>
            </div>
            {/* End .col */}

            <div className="col-12">
                <div className="form-input ">
                    <input type="email" required value={email}
                           onChange={(event) => setEmail(event.target.value)}/>
                    <label className="lh-1 text-14 text-light-1">Email</label>
                </div>
            </div>
            {/* End .col */}

            <div className="col-12">
                <div className="form-input ">
                    <input type="password" required value={password}
                           onChange={(event) => setPassword(event.target.value)}/>
                    <label className="lh-1 text-14 text-light-1">Password</label>
                </div>
            </div>
            {/* End .col */}

            {/* <div className="col-12">
        <a href="#" className="text-14 fw-500 text-blue-1 underline">
          Forgot your password?
        </a>
      </div> */}
            {/* End .col */}

            <div className="col-12">
                <button
                    type="submit"
                    onClick={(e) => onLogin(e)}
                    className="button py-20 -dark-1 bg-blue-1 text-white w-100"
                >
                    Sign In <div className="icon-arrow-top-right ml-15"/>
                </button>
            </div>
            {/* End .col */}
        </form>
    );
};

export default LoginForm;
