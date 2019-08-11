import React, { useState, useCallback, useMemo } from "react";
import Fade from "react-reveal/Fade";

import styles from "./Contact.module.scss";
import Page from "components/Page";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function Contact(props) {
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [message, setMessage] = useState(""),
    [messageSent, setMessageSent] = useState(false),
    [error, setError] = useState();

  const isFormValid = useMemo(() => {
    return !!(name && email && message);
  }, [name, email, message]);
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      setError(null);

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message })
      })
        .then(() => setMessageSent(true))
        .catch(error => setError(error));
    },
    [name, email, message, setMessageSent, error, setError]
  );
  return (
    <Page
      {...props}
      linkBackgroundColor={styles.linkBackgroundColor}
      linkTextColor={styles.linkTextColor}
      pageBackgroundColor={styles.pageBackgroundColor}
    >
      <main className={styles.content}>
        <header>
          <h1 className={styles.sayHello}>
            <span>Say</span>
            <span>Hello</span>
          </h1>
        </header>
        {messageSent ? (
          <Fade>
            <p>Thanks! I'll get back to you as soon as I can.</p>
          </Fade>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
              <label htmlFor="name">Hi Zach! My name is </label>
              <input
                id="name"
                type="text"
                name="name"
                value={name}
                placeholder="your name"
                onChange={e => setName(e.currentTarget.value)}
                required
              />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="email">You can contact me at </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your email"
                value={email}
                onChange={e => setEmail(e.currentTarget.value)}
                required
              />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="message">I'm reaching out to you because </label>
              <textarea
                id="message"
                className={styles.message}
                name="message"
                value={message}
                placeholder="your message"
                onChange={e => setMessage(e.currentTarget.value)}
                required
              />
            </div>
            {error && (
              <div className={styles.error}>
                <p>{error}</p>
              </div>
            )}
            <div>
              <button
                type="submit"
                className={styles.btnSubmit}
                disabled={!isFormValid}
              >
                Send
              </button>
            </div>
          </form>
        )}
      </main>
    </Page>
  );
}
