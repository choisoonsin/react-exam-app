import { useState } from "react";
import ContactInfo from "./ContactInfo";

function Contact() {
  let contactList = [
    {
      name: "Lee soon sin",
      genderCode: 1,
      phone: "010-222-3333",
      address: "전라남도",
    },
    {
      name: "Hong gil dong",
      genderCode: 1,
      phone: "010-231-3133",
      address: "서울시",
    },
    { name: "Joy", genderCode: 2, phone: "010-2222-5555", address: "인천시" },
    {
      name: "Choi",
      genderCode: 2,
      phone: "010-2221-1115",
      address: "인천시 동구",
    },
    {
      name: "Lee kang in",
      genderCode: 2,
      phone: "010-2222-5225",
      address: "의정부시",
    },
    {
      name: "Son heung min",
      genderCode: 2,
      phone: "010-2224-5555",
      address: "부산시",
    },
  ];

  const [keyword, setKeyword] = useState("");
  const [key, setKey] = useState("");

  const mapToComponents = (data) => {
    data.sort();
    data = data.filter((contact) => {
      return contact.name.toLowerCase().indexOf(keyword) > -1;
    });

    return data.map((contact, i) => {
      // Component에 on(Event) 함수처리는 props로 전달되므로 바로 실행되지 않는다.
      // Component에서 구현해줘야 한다.
      return (
        <ContactInfo contact={contact} key={i} onClick={() => handleClick(i)} />
      );
    });
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleClick = (key) => {
    console.log(key);
    setKey(key);
  };

  return (
    <>
      <input
        name="keyword"
        placeholder="Search"
        value={keyword}
        onChange={handleChange}
      />
      <div>{mapToComponents(contactList)}</div>
    </>
  );
}

export default Contact;
