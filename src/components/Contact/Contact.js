import React, { useState, useCallback } from "react";
import styles from "./Contact.module.scss";
import Page from "components/Page";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function Contact(props) {
  const [name, setName] = useState(),
    [email, setEmail] = useState(),
    [message, setMessage] = useState();

  const handleSubmit = useCallback(e => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
  });
  return (
    <Page
      {...props}
      linkBackgroundColor={styles.linkBackgroundColor}
      linkTextColor={styles.linkTextColor}
      pageBackgroundColor={styles.pageBackgroundColor}
    >
      <div>
        <form onSubmit={handleSubmit}>
          <p>
            <label>
              Your Name:{" "}
              <input
                type="text"
                name="name"
                value={name}
                onChange={e => setName(e.currentTarget.value)}
              />
            </label>
          </p>
          <p>
            <label>
              Your Email:{" "}
              <input
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.currentTarget.value)}
              />
            </label>
          </p>
          <p>
            <label>
              Message:{" "}
              <textarea
                name="message"
                value={message}
                onChange={e => setMessage(e.currentTarget.value)}
              />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </Page>
  );
}
