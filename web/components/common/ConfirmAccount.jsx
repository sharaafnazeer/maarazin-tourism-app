import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {registerUserConfirm} from "../../slices/authSlice";
import {failureNofication, successNofication} from "../../data/notification";

const ConfirmAccount = () => {
    const data = {
        imageSrc: "/img/general/404.svg",
        title: "Please wait!.",
        description:
            "We are on the process of on-boarding your account",
    };

    const dispatch = useDispatch();
    const router = useRouter();
    const {token} = router.query;
    useEffect(() => {
        if (token) {
            dispatch(registerUserConfirm({token}))
                .unwrap()
                .then((res) => {
                    successNofication(res.message);
                    router.replace('/auth/login');
                }).catch((err) => {
                failureNofication(err.message);
                router.replace('/auth/login');
            })
        }
    }, [token])

    return (
        <section className="layout-pt-sm layout-pb-lg">
            <div className="container">
                <div className="row y-gap-30 justify-between items-center">
                    <div className="col-lg-6">
                        <img src={data.imageSrc} alt="image"/>
                    </div>
                    <div className="col-lg-5">
                        <div className="no-page">
                            <h2 className="text-50 fw-600">{data.title}</h2>
                            <div className="pr-30 mt-5">{data.description}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConfirmAccount;
