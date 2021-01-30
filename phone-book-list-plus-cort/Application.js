import React, { useState } from "react";
import PhoneBookForm from "./PhoneBookForm";
import InformationTable from "./InformatorTambe";

import "./styles.css";

function Application(props) {
    const [list, setList] = useState([]);

    const addEntryToPhoneBook = (entry) => {
        const newList = [...list, entry];
        setList(newList);
        console.log(newList);
    };

    return (
        <section>
            <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
            <InformationTable list={list} />
        </section>
    );
}

export default Application;
