import icon_1 from "../../../icons/outline_location_on_white_48dp 1.svg";
import cashIcon from "../../../icons/cash.svg";
import paymentIcon from "../../../icons/payment-method.svg";
import icon_4 from "../../../icons/outline_star_white_48dp 1.svg";
import LabeledInputField from "../../../components/input_field_labled/input_field_labeld"
import Zoom from 'react-reveal/Zoom'
import Icon from "../../../components/icon/icon_component"


export const profileBody = (state, user, handleInputChange) => {
    return <div>

        <Zoom right cascade>
            <form action="">
                <div className="top_content">
                    <div className={state.classH}>
                        <Icon height="5rem" width="5rem" heightDiv="12rem" widthDiv="12rem" borderRadius="50%" src={icon_1} backgroundColor="#57C4E5" />
                        <LabeledInputField tag="input" className={state.class} name="city" type="text" handleInputChange={handleInputChange.bind(this)}
                            value={state.city === null ? user.city : state.city} />
                    </div>
                    {user.isServiceProvider ?
                        [<div className={state.classH}>
                            <Icon height="5rem" width="5rem" heightDiv="12rem" widthDiv="12rem" borderRadius="50%" src={icon_4} backgroundColor="#57C4E5" />
                            <br />
                            <br />
                            <h3>{user.rate}</h3>
                        </div>,
                        <div className={state.classH}>
                            <Icon height="5rem" width="5rem" heightDiv="12rem" widthDiv="12rem" borderRadius="50%" src={paymentIcon} backgroundColor="#57C4E5" />
                            <LabeledInputField tag="input" className={state.class} name="diagnosingFees" type="text" handleInputChange={handleInputChange.bind(this)}
                                value={state.diagnosingFees === null ? user.diagnosingFees : state.diagnosingFees} />
                        </div>] : null}
                    <div className={state.classH}>
                        <Icon height="5rem" width="5rem" heightDiv="12rem" widthDiv="12rem" borderRadius="50%" src={cashIcon} backgroundColor="#57C4E5" />
                        <br />
                        <br />
                        <h3>{user.isCashPaymentActive ? "Cash" : "Credit card"}</h3>
                    </div>
                </div>
            </form>
        </Zoom>

        {user.isServiceProvider ?
            <div className="info_card" style={{ marginTop: "5rem", textAlign: "start", padding: "1rem" }}>
                <h2>Job Description</h2>
                <LabeledInputField tag="input" className={state.class} name="jobDescription" type="text" handleInputChange={handleInputChange.bind(this)}
                    value={state.jobDescription === null ? user.jobDescription : state.jobDescription} />
            </div> : null}
        <div className="profile_body_content_2">
            <div className="info_card">
                <h2>First Name</h2>
                <LabeledInputField tag="input" className={state.class} name="firstName" type="text" handleInputChange={handleInputChange.bind(this)}
                    value={state.firstName === null ? user.firstName : state.firstName} />
            </div>

            <div className="info_card">
                <h2>Last Name</h2>
                <LabeledInputField tag="input" className={state.class} name="lastName" type="text" handleInputChange={handleInputChange.bind(this)}
                    value={state.lastName === null ? user.lastName : state.lastName} />
            </div>
        </div>
        <div className="profile_body_content_2">
            <div className="info_card">
                <h2>Gender</h2>
                <LabeledInputField tag="input" className={state.class} name="gender" type="text" handleInputChange={handleInputChange.bind(this)}
                    value={state.gender === null ? user.gender : state.gender} />
            </div>
            <div className="info_card">
                <h2>Image Source</h2>
                <LabeledInputField tag="input" className={state.class} name="imgSrc" type="text" handleInputChange={handleInputChange.bind(this)}
                    value={state.imgSrc === null ? user.imgSrc : state.imgSrc} />
            </div>
        </div>
        <div className="profile_body_content_2">
            <div className="info_card">
                <h2>Email</h2>
                <LabeledInputField tag="input" className={state.class} name="email" type="text" handleInputChange={handleInputChange.bind(this)}
                    value={state.email === null ? user.email : state.email} />
            </div>
            <div className="info_card">
                <h2>Phone Number</h2>
                <LabeledInputField tag="input" className={state.class} name="phoneNumber" type="text" handleInputChange={handleInputChange.bind(this)}
                    value={state.phoneNumber === null ? user.phoneNumber : state.phoneNumber} />
            </div>
            <div className="info_card">
                <h2>Country</h2>
                <LabeledInputField tag="input" className={state.class} name="country" type="text" handleInputChange={handleInputChange.bind(this)}
                    value={state.country === null ? user.country : state.country} />
            </div>
            <div className="info_card">
                <h2>Postal Code</h2>
                <LabeledInputField tag="input" className={state.class} name="postalCode" type="text" handleInputChange={handleInputChange.bind(this)}
                    value={state.postalCode === null ? user.postalCode : state.postalCode} />
            </div>
        </div>
        <div className="profile_body_content_2">
            <div className="info_card">
                <h2>Password</h2>
                <LabeledInputField tag="input" className={state.class} name="password" type="text" handleInputChange={handleInputChange.bind(this)}
                    value={state.password === null ? user.password : state.password} />
            </div>
            <div className="info_card">
                <h2>Repeated Password</h2>
                <LabeledInputField tag="input" className={state.class} name="repeatedPassword" type="text" handleInputChange={handleInputChange.bind(this)}
                    value={state.repeatedPassword === null ? user.password : state.repeatedPassword} />
            </div>
        </div>
        <div className="profile_body_content_2">
            <div className="info_card">
                <h2>Display Language</h2>
                <LabeledInputField tag="input" className={state.class} name="displayLanguage" type="text" handleInputChange={handleInputChange.bind(this)}
                    value={state.displayLanguage === null ? user.displayLanguage : state.displayLanguage} />
            </div>
            {user.isServiceProvider ?
                <div className="info_card">
                    <h2>Job Title</h2>
                    <LabeledInputField tag="input" className={state.class} name="jobName" type="text" handleInputChange={handleInputChange.bind(this)}
                        value={state.jobName === null ? user.jobName : state.jobName} />
                </div> : null}
        </div>

    </div>;
}