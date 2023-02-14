import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  TextEditorContainer,
  ImageContainer,
  TextEditorHeading,
  Image,
  TextEditingContainer,
  ButtonsContainer,
  ButtonsList,
  Button,
  TextEditorInput,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    userInput: '',
    isBoldActive: false,
    isItalicActive: false,
    isUnderLineActive: false,
  }

  onChangeText = event => {
    this.setState({userInput: event.target.value})
  }

  onClickBold = () => {
    this.setState(prevState => ({isBoldActive: !prevState.isBoldActive}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalicActive: !prevState.isItalicActive}))
  }

  onClickUnderLine = () => {
    this.setState(prevState => ({
      isUnderLineActive: !prevState.isUnderLineActive,
    }))
  }

  render() {
    const {
      userInput,
      isBoldActive,
      isItalicActive,
      isUnderLineActive,
    } = this.state
    return (
      <MainContainer>
        <TextEditorContainer>
          <ImageContainer>
            <TextEditorHeading>Text Editor</TextEditorHeading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <TextEditingContainer>
            <ButtonsContainer>
              <ButtonsList>
                <Button
                  type="button"
                  onClick={this.onClickBold}
                  data-testid="bold"
                  color={isBoldActive}
                >
                  <VscBold size={25} />
                </Button>
              </ButtonsList>
              <ButtonsList>
                <Button
                  type="button"
                  onClick={this.onClickItalic}
                  data-testid="italic"
                  color={isItalicActive}
                >
                  <GoItalic size={25} />
                </Button>
              </ButtonsList>
              <ButtonsList>
                <Button
                  type="button"
                  onClick={this.onClickUnderLine}
                  data-testid="underline"
                  color={isUnderLineActive}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ButtonsList>
            </ButtonsContainer>
            <TextEditorInput
              type="text"
              value={userInput}
              onChange={this.onChangeText}
              bold={isBoldActive}
              italic={isItalicActive}
              underline={isUnderLineActive}
            />
          </TextEditingContainer>
        </TextEditorContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
