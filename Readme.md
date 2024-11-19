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

웹에서의 SEO => 앱에서의 ASO(App Store Optimization)
Google에서 앱 인덱싱(App Indexing) => 앱 콘텐츠가 검색 결과에 표시되도록 할 수 있다.

## 앱에서 HTTP 요청을 보낼 수 있는 이유

### React Native에서 백엔드 서버로 HTTP 요청을 보낼 수 있는 이유

React Native는 **JavaScript를 사용하여 모바일 앱을 개발하는 프레임워크**이지만, 기본적으로 네이티브 플랫폼(iOS, Android)과의 **통합**을 통해 **네트워크 요청**을 보낼 수 있는 기능을 지원합니다. 즉, React Native 앱이 **백엔드 서버와 통신**할 수 있는 이유는 **네이티브 네트워크 API를 활용**하기 때문입니다.

### 1. **JavaScript의 네트워크 기능 활용**

- React Native는 브라우저 환경에서 사용되는 JavaScript와 매우 유사하게 동작하지만, **브라우저가 필요 없이 네이티브 환경**에서 실행됩니다.
- JavaScript의 `fetch`, `XMLHttpRequest`, `axios`와 같은 HTTP 요청 라이브러리를 사용해 백엔드 서버와 통신할 수 있습니다.
- **React Native에서는 브라우저 대신 네이티브 코드(iOS와 Android의 네트워크 스택)를 사용**하여 네트워크 요청을 처리합니다.

#### 예시: React Native에서 `fetch`를 사용한 HTTP 요청

```typescript
const getData = async () => {
  try {
    const response = await fetch("https://api.example.com/data");
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
```

### 2. **iOS와 Android의 네이티브 네트워크 스택 활용**

- React Native는 **브리지(Bridge)**라는 메커니즘을 통해 **JavaScript 코드와 네이티브 코드(iOS/Android)** 간의 통신을 가능하게 합니다.
- `fetch`와 같은 네트워크 요청 함수는 내부적으로 iOS에서는 **`NSURLSession`**, Android에서는 **`HttpURLConnection` 또는 `OkHttp`**를 사용해 네트워크 요청을 처리합니다.
- 이러한 네이티브 네트워크 스택 덕분에 **React Native 앱은 네이티브 앱과 동일한 수준의 네트워크 성능과 기능을 제공**할 수 있습니다.

### 3. **백그라운드에서의 네트워크 요청 처리**

- React Native 앱은 백그라운드 상태에서도 HTTP 요청을 보낼 수 있습니다.
- 이를 위해 네이티브 모듈을 활용하거나, **`react-native-background-fetch`**와 같은 라이브러리를 사용할 수 있습니다.

### 4. **CORS 제한이 없음**

- 브라우저 환경에서는 보안 상의 이유로 **CORS(Cross-Origin Resource Sharing)** 제한이 적용됩니다.
- 하지만 **React Native는 브라우저가 아닌 네이티브 환경**에서 실행되기 때문에, CORS 제한 없이 자유롭게 서버에 요청을 보낼 수 있습니다.

### 5. **라이브러리를 통한 네트워크 요청 기능 확장**

- `axios`, `react-query`, `swr` 등 다양한 네트워크 라이브러리를 사용해 **데이터 요청 및 캐싱, 상태 관리**를 더욱 효율적으로 구현할 수 있습니다.

#### `axios`를 사용한 예시

```typescript
import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get("https://api.example.com/data");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
```

react-native architecture
legacy -> 현재 -> new architecture

반응형은 어디까지?

플랫폼별 UI 차이

디자인 시스템
