Udemy 인강 정리

react-native 동작 원리

react-native StyleSheet(!== CSS)

View
Text
Button
TextInput

style은 styled-components/native 라이브러리 등을 통해 CSS in JS 로도 가능

const Container = styled.View`  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;`;

const StyledText = styled.Text`  font-size: 20px;
  color: #333;`;
