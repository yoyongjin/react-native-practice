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

react-native 코드가 android, ios native 코드로 변환돼서 렌더링이 되는데, 그때 style에서 차이가 난다. web browser마다 차이가 있듯.

android, ios 둘 중 하나의 환경에서만 적용되는 style이 있을 경우 => {
해당 컴포넌트를 모든 플랫폼의 환경에서 해당 style이 적용되는 컴포넌트로 감싼다.
<Text /> -> <View><Text /></View>
}

scroll 여부는 우리가 react-native 한테 알려줘야한다.
<ScrollView>안에 컴포넌트 작성</ScrollView>
플랫폼별로 줄 수 있는 설정이 다르다 (공식문서 참고)

<FlatList>: react-virtualize랑 비슷한 컴포넌트 prop은 <ScrollView>랑 거의 같다

<Pressable>
