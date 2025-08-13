import React from "react";
import styles from './Form.module.css'
import { useState } from "react";
import { newCardProps, ErrorData } from "../../Store/Types/form";


const Form: React.FC = () => {

    const [formCard, setFormCard] = useState<newCardProps>(
        {
            url: '',
            name: '',
            origin: '',
            adaptability: '',
            description: '',
        }
    );

    const [error, setError] = useState<ErrorData>({
        url: false,
        name: false,
        origin: false,
        adaptability: false,
        description: false
    });

    const [errorText, setErrorText] = useState<newCardProps>({
        url: 'Please, add correct link',
        name: 'Please, add correct information (latin latters)',
        origin: 'Please, add correct information (latin latters)',
        adaptability: 'Please, add number',
        description: 'Please, add correct information (latin latters)',
    });

    const [sendForm, setSendForm] = useState<boolean>(false);
     console.log(setErrorText);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const invalidCharsReg: RegExp = /[A-Za-z]/;
        const invalidNumberReg: RegExp = /^[1-9]\d*$/;
        const urlRegExp = /^https?:\/\/[^\s/$.?#].[^\s]*$/;

        const newErrors: ErrorData = {
            url: false,
            name: false,
            origin: false,
            adaptability: false,
            description: false,
        };

        if (!formCard.url.trim()) {
            newErrors.url = true;
        } else if (!urlRegExp.test(formCard.url)) {
            newErrors.url = true;
        }

        if (!formCard.name.trim() || !invalidCharsReg.test(formCard.name)) {
            newErrors.name = true;
        }

        if (!formCard.origin.trim() || !invalidCharsReg.test(formCard.origin)) {
            newErrors.origin = true;
        }

        if (!formCard.adaptability.trim() || !invalidNumberReg.test(formCard.adaptability)) {
            newErrors.adaptability = true;
        }

        if (!formCard.description.trim() || !invalidCharsReg.test(formCard.description)) {
            newErrors.description = true;
        }

        setError(newErrors);
        const hasError = Object.values(newErrors).some(error => error);

        if (hasError) {
            return;
        }

        console.log('Форма успешно отправлена:', formCard);
        setSendForm(true);

        const initialFormState: newCardProps = {
            url: '',
            name: '',
            origin: '',
            adaptability: '',
            description: '',
        };
        setFormCard(initialFormState);

    };

    return (
        <div>
            <form className={styles.formContainer}>
                <h3 className={styles.formTitle}>Create a card:</h3>
                {sendForm &&
                    <div className={styles.sentBlock}>The information was sent successfully.</div>
                }
                <div className={styles.inputWrapper}>
                    <div className={styles.labelWrapper}>
                        <label className={styles.labelText}>Link of a picture:</label>
                        {error.url &&
                            <div className={styles.textErrorWrapper}>
                                <p className={styles.textError}>{errorText.url}</p>
                            </div>
                        }
                    </div>
                    <input
                        value={formCard.url}
                        onChange={(e) => setFormCard({ ...formCard, url: e.target.value })}
                        className={styles.input}
                        type="url"
                        placeholder="https://www.link.com" />

                </div>
                <div className={styles.inputWrapper}>
                    <div className={styles.labelWrapper}>
                        <label className={styles.labelText}>Name:</label>
                        {error.name &&
                            <div className={styles.textErrorWrapper}>
                                <p className={styles.textError}>{errorText.name}</p>
                            </div>
                        }
                    </div>
                    <input
                        value={formCard.name}
                        onChange={(e) => setFormCard({ ...formCard, name: e.target.value })}
                        className={styles.input}
                        type="text"
                        placeholder="Enter name" />

                </div>
                <div className={styles.inputWrapper}>
                    <div className={styles.labelWrapper}>
                        <label className={styles.labelText}>Origin:</label>
                        {error.origin &&
                            <div className={styles.textErrorWrapper}>
                                <p className={styles.textError}>{errorText.origin}</p>
                            </div>
                        }
                    </div>
                    <input
                        onChange={(e) => setFormCard({ ...formCard, origin: e.target.value })}
                        value={formCard.origin}
                        className={styles.input}
                        type="text"
                        placeholder="Enter origin" />
                </div>
                <div className={styles.inputWrapper}>
                    <div className={styles.labelWrapper}>
                        <label className={styles.labelText}>Adaptability:</label>

                        {error.adaptability &&
                            <div className={styles.textErrorWrapper}>
                                <p className={styles.textError}>{errorText.adaptability}</p>
                            </div>
                        }
                    </div>
                    <input
                        onChange={(e) => setFormCard({ ...formCard, adaptability: e.target.value })}
                        value={formCard.adaptability}
                        className={styles.input}
                        type="text"
                        placeholder="Enter adaptability" />
                </div>
                <div className={styles.inputWrapper}>
                    <div className={styles.descriptionWrapper}>
                        <label className={styles.labelText}>Description:</label>
                        {error.description &&
                            <div className={styles.textErrorWrapper}>
                                <p className={styles.textError}>{errorText.description}</p>
                            </div>
                        }
                    </div>
                    <textarea
                        onChange={(e) => setFormCard({ ...formCard, description: e.target.value })}
                        value={formCard.description}
                        className={styles.textArea}
                        rows={7}
                        cols={66}
                        placeholder="Enter a description..."
                    />
                </div>
                <div
                    className={styles.btnWrapper}>
                    <button
                        onClick={handleSubmit}
                        className={styles.btn}
                        type="submit">
                        Send
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;
