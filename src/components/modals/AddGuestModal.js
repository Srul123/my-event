import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {addGuest} from "../../redux/actions/guestActions";
import {useTranslation} from "react-i18next";
import GroupSelectOptions from "../groups/GroupSelectOptions";

import M from "materialize-css/dist/js/materialize.min.js";

const AddGuestModal = ({addGuest}) => {
    useEffect(() => {
        // Init Materialize JS
        M.AutoInit();
    });

    const {t} = useTranslation();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [groupName, setGroupName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [table, setTable] = useState("");
    const [classification, setClassification] = useState("");
    const [ride, setRide] = useState(false);
    const [attention, setAttention] = useState(false);
    const [comment, setComment] = useState("");

    const onSubmit = () => {
        if (name === "") {
            return M.toast({
                html: `${t("guest.alert")}`,
                classes: "red"
            });
        } else {
            const newGuest = {
                name,
                phone,
                address,
                groupName,
                quantity,
                table,
                classification,
                ride,
                attention,
                comment
            };

            if (newGuest.groupName === "") {
                newGuest.groupName = `${t("guest.noGroup")}`;
            }

            addGuest(newGuest);

            M.toast({
                html: `${t("guest.guest")} ${newGuest.name} ${t(
                    "guest.success"
                )}`,
                classes: "green"
            });

            // Clear Fields
            setName("");
            setPhone("");
            setAddress("");
            setGroupName("");
            setQuantity(1);
            setTable("");
            setClassification("");
            setRide(false);
            setAttention(false);
            setComment("");
        }
    };
    return (
        <div id="add-guest-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4> {t("guest.addGuest")} </h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            id="name"
                            className="validate"
                            type="text"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <label htmlFor="name">{t("guest.name")} </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input
                            id="phone"
                            className="validate"
                            type="tel"
                            name="phone"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                        <label htmlFor="phone">{t("guest.phone")} </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input
                            id="address"
                            className="validate"
                            type="text"
                            name="address"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                        />
                        <label htmlFor="address">{t("guest.address")} </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select
                            name="groupName"
                            value={groupName}
                            className="browser-default"
                            onChange={e => setGroupName(e.target.value)}
                        >
                            <option value="" disabled>
                                {t("guest.groupChoice")}
                            </option>
                            <GroupSelectOptions/>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input
                            id="quantity"
                            className="validate"
                            type="number"
                            name="quantity"
                            value={quantity}
                            onChange={e => setQuantity(e.target.value)}
                        />
                        <label htmlFor="quantity">{t("guest.quantity")} </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select
                            name="classification"
                            value={classification}
                            className="browser-default"
                            onChange={e => setClassification(e.target.value)}
                        >
                            <option value="" disabled>
                                {t("guest.guestClass.class")}
                            </option>
                            <option value="0"> {t("guest.guestClass.mutual")}</option>
                            <option value="1">{t("guest.guestClass.groom")}</option>
                            <option value="2">{t("guest.guestClass.bride")}</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input
                            id="comment"
                            name="comment"
                            type="text"
                            data-length="10"
                            className="validate"
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                        />
                        <label htmlFor="comment">{t("guest.comments")}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <p>
                            <label>
                                <input
                                    type="checkbox"
                                    className="filled-in"
                                    checked={ride}
                                    value={ride}
                                    onChange={e => setRide(!ride)}
                                />
                                <span>{t("guest.ride")}</span>
                            </label>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <p>
                            <label>
                                <input
                                    type="checkbox"
                                    className="filled-in"
                                    checked={attention}
                                    value={attention}
                                    onChange={e => setAttention(!attention)}
                                />
                                <span>{t("guest.attension")}</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a
                    id="submit"
                    href="#!"
                    className={"waves-effect blue waves-light btn"}
                    onClick={onSubmit}
                >
                    {t("guest.enterGuest")}
                </a>
            </div>
        </div>
    );
};

AddGuestModal.propTypes = {
    addGuest: PropTypes.func.isRequired
};

const modalStyle = {
    width: "60%",
    height: "75%"
};

export default connect(null, {addGuest})(AddGuestModal);
