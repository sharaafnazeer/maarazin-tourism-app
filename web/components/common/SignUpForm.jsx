import Link from "next/link";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {registerUser} from "../../slices/authSlice";
import {failureNofication, successNofication} from "../../data/notification";

const SignUpForm = () => {

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        roleName: "customer",
    });
    const dispatch = useDispatch();

    const onChange = (id, value) => {
        const newUserData = {...userData, [id]: value};
        setUserData(newUserData);
    };

    const onSubmit = () => {
        dispatch(registerUser(userData))
            .unwrap()
            .then((res) => {
                successNofication(res.message);
            }).catch((err) => {
            failureNofication(err.message);
        });
    }

    return (
        <form className="row y-gap-20" onSubmit={onSubmit}>
            <div className="col-12">
                <h1 className="text-22 fw-500">Welcome back</h1>
                <p className="mt-10">
                    Already have an account yet?{" "}
                    <Link href="/auth/login" className="text-blue-1">
                        Log in
                    </Link>
                </p>
            </div>
            {/* End .col */}

            <div className="col-12">
                <div className="form-input ">
                    <input id="firstName" type="text" required
                           onChange={(evt) => onChange([evt.target.id], evt.target.value)}/>
                    <label className="lh-1 text-14 text-light-1">First Name</label>
                </div>
            </div>
            {/* End .col */}

            <div className="col-12">
                <div className="form-input ">
                    <input id="lastName" type="text" required
                           onChange={(evt) => onChange([evt.target.id], evt.target.value)}/>
                    <label className="lh-1 text-14 text-light-1">Last Name</label>
                </div>
            </div>
            {/* End .col */}

            <div className="col-12">
                <div className="form-input ">
                    <input id="email" type="text" required
                           onChange={(evt) => onChange([evt.target.id], evt.target.value)}/>
                    <label className="lh-1 text-14 text-light-1">Email</label>
                </div>
            </div>

            <div className="col-12">
                <div className="form-input ">
                    <input id="phoneNumber" type="text" required
                           onChange={(evt) => onChange([evt.target.id], evt.target.value)}/>
                    <label className="lh-1 text-14 text-light-1">Phone Number</label>
                </div>
            </div>

            {/* End .col */}

            <div className="col-12">
                <div className="form-input ">
                    <input id="password" type="password" required
                           onChange={(evt) => onChange([evt.target.id], evt.target.value)}/>
                    <label className="lh-1 text-14 text-light-1">Password</label>
                </div>
            </div>
            {/*<div className="col-12">*/}
            {/*    <div className="form-input ">*/}
            {/*        <input type="password" required/>*/}
            {/*        <label className="lh-1 text-14 text-light-1">Confirm Password</label>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/* End .col */}

            <div className="col-12">
                <label className="lh-1 text-14 text-light-1">Sign up for</label>
                <div className="form-input ">
                    <select
                        onChange={(evt) => onChange([evt.target.id], evt.target.value)}
                        className="form-select border-light-1 justify-between text-12 fw-500 px-20 h-50  sm:w-full text-14"
                        id="roleName"
                    >
                        <option key={"1"} value="customer">I want to book a hotel</option>
                        <option key={"2"} value="hotel-admin">I want to list my hotel</option>
                    </select>
                </div>
            </div>
            {/* End .col */}

            {/*<div className="col-12">*/}
            {/*    <div className="d-flex ">*/}
            {/*        <div className="form-checkbox mt-5">*/}
            {/*            <input type="checkbox" name="name"/>*/}
            {/*            <div className="form-checkbox__mark">*/}
            {/*                <div className="form-checkbox__icon icon-check"/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="text-15 lh-15 text-light-1 ml-10">*/}
            {/*            Sign up as a Hotel Admin*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/* End .col */}

            <div className="col-12">
                <button
                    type="button"
                    onClick={() => onSubmit()}
                    className="button py-20 -dark-1 bg-blue-1 text-white w-100"
                >
                    Sign Up <div className="icon-arrow-top-right ml-15"/>
                </button>
            </div>
            {/* End .col */}
        </form>
    );
};

export default SignUpForm;
