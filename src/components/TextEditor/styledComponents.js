import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #25262c;
  min-height: 100vh;
`
export const TextEditorContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  background-color: #1b1c22;
  width: 780px;
  height: 500px;
  border-radius: 8px;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 25px;
  width: 50%;
`
export const TextEditorHeading = styled.h1`
  font-family: 'Roboto';
  font-size: '35px';
  font-weight: 500;
  color: #f8fafc;
  margin-bottom: 25px;
`
export const Image = styled.img`
  height: 280px;
`
export const TextEditingContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #25262c;
  width: 50%;
  border: 0.5px solid #f1f5f925;
`
export const ButtonsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border: 0.5px solid #f1f5f925;
  height: 10%;
  margin: 0;
`
export const ButtonsList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  margin-right: 15px;
`
export const Button = styled.button`
  background-color: transparent;
  color: ${props => (props.color ? '#faff00' : '#f1f5f9')};
  width: 50px;
  border: 0px;
  cursor: pointer;
  padding: 0;
`
export const TextEditorInput = styled.textarea`
  font-family: 'Roboto';
  font-size: '35px';
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
  background-color: #25262c;
  color: #f8fafc;
  width: 100%;
  height: 90%;
  border: 0.5px solid #f1f5f925;
  outline: none;
  padding: 20px;
`
