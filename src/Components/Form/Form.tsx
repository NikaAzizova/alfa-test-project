import React from "react";
import styles from './Form.module.css'
import { useState } from "react";
import { newCardProps, ErrorData } from "../../Store/Types/form";


const Form: React.FC = () => {

    const [formCard, setFormCard] = useState<newCardProps>(
        {
            url: '',
            id: '1',
            breeds: [
                {
                    name: '',
                    origin: '',
                    adaptability: '',
                    description: '',
                }
            ]

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
        id: '',
        url: 'Please, add correct link',
        breeds: [{
            name: 'Please, add correct information (latin latters)',
            origin: 'Please, add correct information (latin latters)',
            adaptability: 'Please, add number',
            description: 'Please, add correct information (latin latters)',
        }]

    });

    const [sendForm, setSendForm] = useState<boolean>(false);
    console.log(setErrorText);
    const [cardId, setCardId] = useState<number>(1);

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();
        const newId = cardId + 1; // число
        setCardId(newId);
        const stringId = newId.toString();

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

        if (!formCard.breeds[0].name.trim() || !invalidCharsReg.test(formCard.breeds[0].name)) {
            newErrors.name = true;
        }

        if (!formCard.breeds[0].origin.trim() || !invalidCharsReg.test(formCard.breeds[0].origin)) {
            newErrors.origin = true;
        }

        if (!formCard.breeds[0].adaptability.trim() || !invalidNumberReg.test(formCard.breeds[0].adaptability)) {
            newErrors.adaptability = true;
        }

        if (!formCard.breeds[0].description.trim() || !invalidCharsReg.test(formCard.breeds[0].description)) {
            newErrors.description = true;
        }

        setError(newErrors);
        const hasError = Object.values(newErrors).some(error => error);

        if (hasError) {
            return;
        }

        const formDataWithId = { ...formCard, id: stringId };
        console.log('Форма успешно отправлена:', formDataWithId);
        setSendForm(true);

        const initialFormState: newCardProps = {
            url: '',
            id: '',
            breeds: [
                {
                    name: '',
                    origin: '',
                    adaptability: '',
                    description: '',
                }
            ]
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
                                <p className={styles.textError}>{errorText.breeds[0].name}</p>
                            </div>
                        }
                    </div>
                    <input
                        value={formCard.breeds[0].name}
                        onChange={(e) => setFormCard({
                            ...formCard,
                            breeds: [
                                {
                                    ...formCard.breeds[0],
                                    name: e.target.value
                                }
                            ]
                        })}
                        className={styles.input}
                        type="text"
                        placeholder="Enter name" />

                </div>
                <div className={styles.inputWrapper}>
                    <div className={styles.labelWrapper}>
                        <label className={styles.labelText}>Origin:</label>
                        {error.origin &&
                            <div className={styles.textErrorWrapper}>
                                <p className={styles.textError}>{errorText.breeds[0].origin}</p>
                            </div>
                        }
                    </div>
                    <input
                        onChange={(e) => setFormCard({
                            ...formCard,
                            breeds: [
                                {
                                    ...formCard.breeds[0],
                                    origin: e.target.value
                                }
                            ]

                        })}
                        value={formCard.breeds[0].origin}
                        className={styles.input}
                        type="text"
                        placeholder="Enter origin" />
                </div>
                <div className={styles.inputWrapper}>
                    <div className={styles.labelWrapper}>
                        <label className={styles.labelText}>Adaptability:</label>

                        {error.adaptability &&
                            <div className={styles.textErrorWrapper}>
                                <p className={styles.textError}>{errorText.breeds[0].adaptability}</p>
                            </div>
                        }
                    </div>
                    <input
                        onChange={(e) => setFormCard({
                            ...formCard,
                            breeds: [
                                {
                                    ...formCard.breeds[0],
                                    adaptability: e.target.value
                                }
                            ]

                        })}
                        value={formCard.breeds[0].adaptability}
                        className={styles.input}
                        type="text"
                        placeholder="Enter adaptability" />
                </div>
                <div className={styles.inputWrapper}>
                    <div className={styles.descriptionWrapper}>
                        <label className={styles.labelText}>Description:</label>
                        {error.description &&
                            <div className={styles.textErrorWrapper}>
                                <p className={styles.textError}>{errorText.breeds[0].description}</p>
                            </div>
                        }
                    </div>
                    <textarea
                        onChange={(e) => setFormCard({
                            ...formCard,
                            breeds: [
                                {
                                    ...formCard.breeds[0],
                                    description: e.target.value
                                }
                            ]
                        })}
                        value={formCard.breeds[0].description}
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
