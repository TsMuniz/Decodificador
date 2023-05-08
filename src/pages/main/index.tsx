import { ChangeEvent, useEffect, useState } from 'react'
import styles from './styles.module.css'


export default function MainPage() {
  const [text, setText] = useState<string>('')
  const [showEncodedText, setShowEncodedText] = useState<boolean>(false)
  const [showDecodedText, setShowDecodedText] = useState<boolean>(false)

  useEffect(() => {
    if(!text) {
      setShowDecodedText(false)
      setShowEncodedText(false)
    }
  }, [text])


  const encodeText = (text: string): string => {
    return text
      .replace(/[eE]/g, 'enter')
      .replace(/[iI]/g, 'imes')
      .replace(/[aA]/g, 'ai')
      .replace(/[oO]/g, 'ober')
      .replace(/[uU]/g, 'ufat')
  }

  const decodeText = (text: string): string => {
    return text
      .replace(/(enter)/g, 'e')
      .replace(/(imes)/g, 'i')
      .replace(/(ai)/g, 'a')
      .replace(/(ober)/g, 'o')
      .replace(/(ufat)/g, 'u')
  }

  const cleanTextBox = () => {
    setShowDecodedText(false)
    setShowEncodedText(false)
    setText('')
  }



  return (
    <div
      className={styles.pageContainer}
    >
      <h1 className={styles.title}>Decodificador de Textos</h1>

      <h3>Digite seu texto aqui!</h3>

      <input 
        value={text}
        className={styles.textInput}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value)}
      />

      <div
        className={styles.buttonsContainer}
      >
        <button
          disabled={showDecodedText === true}
          onClick={() => setShowEncodedText(true)}
        >
          Criptografar
        </button>
        <button
          disabled={showEncodedText === true}
          onClick={() => setShowDecodedText(true)}
        >
          Descriptografar
        </button>
      </div>

      <button
        onClick={cleanTextBox}
      >
        Limpe a caixa de texto
      </button>

      <div>{showEncodedText && encodeText(text) || showDecodedText && decodeText(text)}</div>
    </div>
  )
}
