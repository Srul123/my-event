import React, {  useState } from "react";
import { connect } from "react-redux";
import { addGroup } from "../../redux/actions/groupActions";
import M from "materialize-css/dist/js/materialize.min.js";
import { useTranslation } from "react-i18next";

const AddGroup = ({ addGroup }) => {
  const { t } = useTranslation();

  const [groupName, setGroupName] = useState("");

  const onSubmit = () => {
    if (groupName === "") {
      M.toast({
        html: `${t("group.alert")}`
      });
    } else {
      const newGroup = {
        name: groupName,
        attention: false
      };

      addGroup(newGroup);

      M.toast({
        html: ` ${newGroup.name} ${t("group.success")}`,
        classes: "green"
      });

      // Clear Fields
      setGroupName("");
    }
  };
  return (
    <div>
      <ul className="collection">
        <li>
          <div className="row">
            <div className="input-field">
              <input
                id="groupName"
                type="text"
                className="validate"
                name="groupName"
                value={groupName}
                onChange={e => setGroupName(e.target.value)}
              />
              <label htmlFor="groupName">{t("group.groupName")} </label>
            </div>
          </div>
        </li>

        <li>
          <div className="modal-footer">
            <a
              href="#!"
              className="waves-effect blue waves-light btn"
              onClick={onSubmit}
            >
              {t("group.enterGroup")}
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default connect(null, { addGroup })(AddGroup);
