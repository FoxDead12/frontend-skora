import React from "react"
import "../../css/components/utils/CheckBox.css"


interface CheckBox {

    onCheckedChanged: (checked: boolean) => void;
    defaultChecked: boolean;
}


export default function CheckBox(props: CheckBox) {

    return(

        <div>
            <div className={"switch_box"}>
                <div className={"input_wrapper"}>
                    <input type="checkbox" className={"switch_4"} onClick={(e) => {props.onCheckedChanged(e.currentTarget.checked)}} defaultChecked={props.defaultChecked} />
                    <h5 className={"is_checked"}>PT</h5>
                    <h5 className={"is_unchecked"}>EN</h5>
                </div>
            </div>
        </div>
    )
}