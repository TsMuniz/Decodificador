import { ChangeEvent, useState } from 'react'
import styles from './styles.module.css'


export default function MainPage() {
      <input placeholder='coloque sua palavra aqui'/>
  const [text, setText] = useState<string>('')
  const [showEncodedText, setShowEncodedText] = useState<boolean>(false)
  const [showDecodedText, setShowDecodedText] = useState<boolean>(false)


  const encodeText = (text: string): string => {
    return text
      .replace(/[e]/g, 'enter')
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

  return (
    <div
      className={styles.pageContainer}
    >
      <h1>Decodificador de Textos</h1>

      <h3>Digite seu texto aqui!</h3>

      <input 
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value)}
      />

      <button
        onClick={() => setShowEncodedText(!showEncodedText)}
      >
        Criptografar
      </button>
      <button
        onClick={() => setShowDecodedText(!showDecodedText)}
      >
        Desriptografar
      </button>

      <button>Limpe a caixa de texto</button>
      <div>{text}</div>
      <div>{showEncodedText && encodeText(text)}</div>
      <div>{showDecodedText && decodeText(text)}</div>
    </div>
  )
}
