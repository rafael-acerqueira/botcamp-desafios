import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import uuidv4 from 'uuid/v4'
import Lightbox from 'react-image-lightbox'
import { css } from 'glamor'
import ScrollToBottom from 'react-scroll-to-bottom'
import 'react-image-lightbox/style.css'
import LogoBotcamp from '../../components/LogoBotcamp'
import LogoutButton from '../../components/LogoutButton'
import UploadBox from '../../components/UploadBox'
import RecordButton from '../../components/RecordButton'
import RecordTimer from '../../components/RecordTimer'
import HeaderWrapper from '../../components/HeaderWrapper'
import SearchInput from '../../components/SearchInput'
import FooterWrapper from '../../components/FooterWrapper'
import BodyWrapper from '../../components/BodyWrapper'
import QuestionMessageBox from '../../components/QuestionMessageBox'

const Chat = () => {
  const [commandMessages, setCommandMessages] = useState([])
  const [searchInputText, setSearchInputText] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [currentImage, setCurrentImage] = useState('')
  const [audioRecord, setAudioRecord] = useState(null)
  const [isRecording, setIsRecording] = useState(false)

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      setCommandMessages( messages => [...messages, {
        id: uuidv4(),
        content: searchInputText,
        type: 'text'
      }])
      setSearchInputText('')
    }
  }

  const onChange = (e) => {
    setSearchInputText(e.target.value)
  }

  const handleUpload = (e) => {
    e.persist()
    if(e.target.files.length > 0) {
      const imagesCount = e.target.files.length
      setCommandMessages( messages => [...messages, {
        id: uuidv4(),
        content: URL.createObjectURL(e.target.files[0]),
        images: imagesCount > 1 ? e.target.files : {},
        type: 'image'
      }])
    }
  }

  const handleRecord = () => {
    let mediaRecorder = null
    navigator.mediaDevices.getUserMedia({audio: true})
    .then( stream => {
      mediaRecorder = new MediaRecorder(stream)
      setAudioRecord(mediaRecorder)
      let audioChunks = []
      
      mediaRecorder.ondataavailable = data => audioChunks.push(data.data)
        
      mediaRecorder.onstop = () => {
      
        const blob = new Blob(audioChunks, {type: 'audio/mpeg-3'})
        setCommandMessages( messages => [...messages, {
          id: uuidv4(),
          content: URL.createObjectURL(blob),
          type: 'audio'
        }])    
      }
      
      mediaRecorder.start()
      setIsRecording(true)
               
    },
    err => {
      console.log(err)
    })

  }

  const handleStoreRecord = () => { 
    audioRecord.stop()
    setIsRecording(false)
  }  

  const mountImagesArray = () => {
    const message = commandMessages.filter(message => message.content === currentImage)
    const images = []
    if(message.length > 0) {
      const imagesObject = message[0].images
      if (imagesObject.length > 0)
        Object.keys(imagesObject).forEach( item => images.push(URL.createObjectURL(imagesObject[item])))
      else
        images.push(currentImage)
    }
    return images
  }

  const nextLightboxIndex = () => {
    return (lightboxIndex + 1) % mountImagesArray().length
  }

  const prevLightboxIndex = () => {
    return (lightboxIndex + mountImagesArray().length - 1) % mountImagesArray().length
  }

	const openLightbox = (event) => {
    const src = event.target.tagName === 'SPAN' 
      ? event.target.parentNode.children[0].src 
      : event.target.src
    
    setCurrentImage(src)

    setLightboxIndex(0)
    setIsOpen(true)
  }

  const nextSrc = () => {
    if (mountImagesArray().length === 1)
      return ''
    return mountImagesArray()[nextLightboxIndex()]
  }

  const prevSrc = () => {
    if (mountImagesArray().length === 1)
      return ''    
    return mountImagesArray()[prevLightboxIndex()]
  }

  const SCROLLCSS = css({
    height: 667,
    width: 380,
    paddingLeft: 15
  })


  return (
    <>
      <HeaderWrapper>
        <LogoBotcamp width='200px' />
        <Link to='/'>
          <LogoutButton />
        </Link>
      </HeaderWrapper>
      <BodyWrapper>
        <ScrollToBottom className={ SCROLLCSS }>
          {
            commandMessages.map(
              message => 
                <QuestionMessageBox
                  key={message.id} 
                  content={message.content} 
                  type={message.type}
                  onClick={(e) => openLightbox(e)}
                  images={message.images ? message.images.length : null}
                />
            )    
          }
        </ScrollToBottom>
        {isOpen && (
          <Lightbox
            mainSrc={mountImagesArray()[lightboxIndex]}
            nextSrc={nextSrc()}
            prevSrc={prevSrc()}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() => setLightboxIndex(prevLightboxIndex)}
            onMoveNextRequest={() => setLightboxIndex(nextLightboxIndex)}
          />
        )}
      </BodyWrapper>
      <FooterWrapper>
        <SearchInput 
          onKeyDown={onKeyDown}
          onChange={onChange} 
          value={searchInputText}  
          placeholder="Diz aí..." 
          type="text"
        />
        <UploadBox handleUpload={handleUpload}/>
        <RecordButton onMouseDown={handleRecord} onMouseUp={handleStoreRecord} isRecording={isRecording} />
        { isRecording && <RecordTimer /> }
      </FooterWrapper>
    </>
  )
}
export default Chat;