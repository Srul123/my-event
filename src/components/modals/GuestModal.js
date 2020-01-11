import React, {useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addGuest, updateGuest, setCurrent } from "../../redux/actions/guestActions";
import { useTranslation } from "react-i18next";
import GroupSelectOptions from "../groups/GroupSelectOptions";
import M from "materialize-css/dist/js/materialize.min.js";

const GuestModal = ({current, addGuest, updateGuest, setCurrent }) => {

    const [status, setStatus] = useState("");

    const { t } = useTranslation();

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

    useEffect(() => {

        if (current) {
            setStatus("edit");

            setName(current.name);
            setPhone(current.phone);
            setAddress(current.address);
            setGroupName(current.groupName);
            setQuantity(current.quantity);
            setTable(current.table);
            setClassification(current.classification);
            setRide(current.ride);
            setAttention(current.attention);
            setComment(current.comment);
        } else {
            setStatus("enter");
        }
    }, [current]);

    const onSubmit = () => {
        if (name === "") {
            return M.toast({
                html: `${t("guest.alert")}`,
                classes: "red"
            });
        } else {
            const guest = {
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

            if (guest.groupName === "") {
                guest.groupName = `${t("guest.noGroup")}`;
            }

            if (status==="enter") {
                console.log("mode is: "+status);
                addGuest(guest);

                clearFields();

                setCurrent(null);

                M.toast({
                    html: `${t("guest.guest")} ${guest.name} ${t(
                        "guest.success"
                    )}`,
                    classes: "green"
                });
            } else if (status==="edit") {
                guest.id = current.id;
                console.log("mode is: "+status);
                console.log("guest ID is: "+guest.id);
                updateGuest(guest);

                clearFields();

                setCurrent(null);

                M.toast({
                    html: `${t("guest.guest")} ${guest.name} ${t(
                        "guest.edit"
                    )}`,
                    classes: "green"
                });
            } else {
                console.error("Undetected operation in GuestModal component, guest value is: "+guest);
            }

        }

    };

    const clearFields = () => {
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
    };

    return (
        <div id="guest-modal" className="modal" style={modalStyle}>
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
                            placeholder={t("guest.name")}
                        />
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
                            placeholder={t("guest.phone")}
                        />
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
                            placeholder={t("guest.address")}
                        />
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
                            <GroupSelectOptions />
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
                            placeholder={t("guest.quantity")}
                        />
                        {/*<label htmlFor="quantity">{t("guest.quantity")} </label>*/}
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
                            placeholder={t("guest.comments")}
                        />
                        {/*<label htmlFor="comment">{t("guest.comments")}</label>*/}
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
                    // href="#!"
                    className={`waves-effect blue waves-light btn`}
                    onClick={onSubmit}
                >

                    {t("guest.enterGuest")}
                </a>
            </div>
        </div>
    );
};

GuestModal.propTypes = {
    addGuest: PropTypes.func.isRequired,
    current: PropTypes.object,
    updateGuest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    current: state.guest.current
});

const modalStyle = {
    width: "60%",
    height: "75%"
};

export default connect(mapStateToProps, { addGuest, updateGuest, setCurrent })(GuestModal);
